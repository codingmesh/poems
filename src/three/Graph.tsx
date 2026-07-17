import { useEffect, useMemo, useRef } from 'react';
import * as THREE from 'three';
import { useFrame, useThree, type ThreeEvent } from '@react-three/fiber';
import type { GraphData } from '../data/graph';
import { getGlowTexture, getLabelTexture } from './textures';
import { useStore } from '../store';

const nodeVert = /* glsl */ `
attribute float aSize;
attribute vec3 aColor;
attribute float aAlpha;
uniform float uScale;
uniform float uTime;
varying vec3 vColor;
varying float vAlpha;
void main() {
  vColor = aColor;
  vAlpha = aAlpha;
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  float breathe = 1.0 + 0.045 * sin(uTime * 1.3 + position.x * 0.35 + position.y * 0.27);
  gl_PointSize = aSize * breathe * uScale / -mv.z;
  gl_Position = projectionMatrix * mv;
}
`;

const nodeFrag = /* glsl */ `
varying vec3 vColor;
varying float vAlpha;
void main() {
  float d = length(gl_PointCoord - 0.5) * 2.0;
  if (d > 1.0) discard;
  float core = smoothstep(0.32, 0.12, d);
  float body = smoothstep(0.55, 0.30, d);
  float halo = pow(smoothstep(0.85, 0.40, d), 3.0) * 0.38;
  vec3 col = vColor * body * 1.05 + vColor * halo + vec3(1.0) * core;
  float alpha = clamp(core + body * 0.9 + halo, 0.0, 1.0) * vAlpha;
  gl_FragColor = vec4(col * alpha, alpha);
}
`;

const EDGE_SEGS = 14;

/** 由序号生成稳定的伪随机单位向量 */
function hashVec(seed: number, out: THREE.Vector3): THREE.Vector3 {
  const x = Math.sin(seed * 12.9898) * 43758.5453;
  const y = Math.sin(seed * 78.233) * 12543.123;
  const z = Math.sin(seed * 39.425) * 32741.731;
  return out
    .set(x - Math.floor(x), y - Math.floor(y), z - Math.floor(z))
    .subScalar(0.5)
    .normalize();
}

export default function Graph({ data }: { data: GraphData }) {
  const { poets, edges } = data;
  const gl = useThree((s) => s.gl);
  const isCoarse = useMemo(
    () => typeof window !== 'undefined' && window.matchMedia?.('(pointer: coarse)').matches,
    []
  );
  const focusId = useStore((s) => s.focusId);
  const selectedId = useStore((s) => s.selectedId);
  const flat = useStore((s) => s.flat);
  const flippedY = useStore((s) => s.flippedY);
  const setSelectedId = useStore((s) => s.setSelectedId);
  const setFocusId = useStore((s) => s.setFocusId);

  const N = poets.length;

  // —— 基础布局与形变目标 ——
  const basePos = useMemo(
    () => poets.map((p) => new THREE.Vector3(...data.positions.get(p.id)!)),
    [poets, data]
  );
  const targetOf = (v: THREE.Vector3, flatF: boolean, flipF: boolean) =>
    new THREE.Vector3(v.x, (flatF ? v.y * 0.14 : v.y) * (flipF ? -1 : 1), v.z);

  const cur = useRef<Float32Array>(new Float32Array(N * 3));
  const morph = useRef({ from: new Float32Array(N * 3), to: new Float32Array(N * 3), t: 1 });
  const edgesDirty = useRef(true);

  useEffect(() => {
    basePos.forEach((v, i) => {
      cur.current[i * 3] = v.x;
      cur.current[i * 3 + 1] = v.y;
      cur.current[i * 3 + 2] = v.z;
    });
    morph.current.to.set(cur.current);
    edgesDirty.current = true;
  }, [basePos]);

  useEffect(() => {
    morph.current.from.set(cur.current);
    basePos.forEach((v, i) => {
      const t = targetOf(v, flat, flippedY);
      morph.current.to[i * 3] = t.x;
      morph.current.to[i * 3 + 1] = t.y;
      morph.current.to[i * 3 + 2] = t.z;
    });
    morph.current.t = 0;
    edgesDirty.current = true;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [flat, flippedY]);

  // —— 邻居表（悬停高亮用） ——
  const neighbors = useMemo(() => {
    const id2idx = new Map(poets.map((p, i) => [p.id, i]));
    const nb: Set<number>[] = poets.map(() => new Set<number>());
    edges.forEach((e) => {
      const a = id2idx.get(e.a)!;
      const b = id2idx.get(e.b)!;
      nb[a].add(b);
      nb[b].add(a);
    });
    return nb;
  }, [poets, edges]);

  // —— 节点 Points ——
  const { nodeGeo, nodeMat } = useMemo(() => {
    const pos = new Float32Array(N * 3);
    const size = new Float32Array(N);
    const col = new Float32Array(N * 3);
    const alpha = new Float32Array(N).fill(1);
    const c = new THREE.Color();
    poets.forEach((p, i) => {
      size[i] = data.sizes.get(p.id)!;
      c.set(p.color);
      col[i * 3] = c.r;
      col[i * 3 + 1] = c.g;
      col[i * 3 + 2] = c.b;
    });
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3).setUsage(THREE.DynamicDrawUsage));
    geo.setAttribute('aSize', new THREE.BufferAttribute(size, 1));
    geo.setAttribute('aColor', new THREE.BufferAttribute(col, 3));
    geo.setAttribute('aAlpha', new THREE.BufferAttribute(alpha, 1).setUsage(THREE.DynamicDrawUsage));
    const mat = new THREE.ShaderMaterial({
      vertexShader: nodeVert,
      fragmentShader: nodeFrag,
      uniforms: { uScale: { value: 800 }, uTime: { value: 0 } },
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
    return { nodeGeo: geo, nodeMat: mat };
  }, [poets, data, N]);

  const size = useThree((s) => s.size);
  const camera = useThree((s) => s.camera) as THREE.PerspectiveCamera;
  useEffect(() => {
    nodeMat.uniforms.uScale.value =
      (size.height / (2 * Math.tan(THREE.MathUtils.degToRad(camera.fov / 2)))) * gl.getPixelRatio();
  }, [size, camera, nodeMat, gl]);

  // —— 边：多股流光细线，股数随端点权重缩放（枢纽更密） ——
  const edgeMeta = useMemo(() => {
    const id2idx = new Map(poets.map((p, i) => [p.id, i]));
    const maxW = Math.max(...poets.map((p) => Math.max(p.mentioned, p.gifted)));
    let offset = 0;
    return edges.map((e, ei) => {
      const ia = id2idx.get(e.a)!;
      const ib = id2idx.get(e.b)!;
      const wa = Math.max(poets[ia].mentioned, poets[ia].gifted) / maxW;
      const wb = Math.max(poets[ib].mentioned, poets[ib].gifted) / maxW;
      const sc = 3 + Math.round(8 * Math.pow(Math.max(wa, wb), 0.8));
      const bends: THREE.Vector3[] = [];
      for (let st = 0; st < sc; st++) {
        const b = hashVec(ei * 11 + st * 7 + 3, new THREE.Vector3());
        b.multiplyScalar(0.55 + ((ei + st * 13) % 7) * 0.11);
        bends.push(b);
      }
      const meta = { ia, ib, wa, wb, sc, bends, offset };
      offset += sc * (EDGE_SEGS - 1) * 2 * 3;
      return meta;
    });
  }, [edges, poets]);

  const edgeGeo = useMemo(() => {
    const segFloats = edgeMeta.length ? edgeMeta[edgeMeta.length - 1].offset + edgeMeta[edgeMeta.length - 1].sc * (EDGE_SEGS - 1) * 2 * 3 : 0;
    const pos = new Float32Array(segFloats);
    const col = new Float32Array(segFloats);
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3).setUsage(THREE.DynamicDrawUsage));
    geo.setAttribute('color', new THREE.BufferAttribute(col, 3).setUsage(THREE.DynamicDrawUsage));
    return geo;
  }, [edgeMeta]);

  const edgeMat = useMemo(
    () =>
      new THREE.LineBasicMaterial({
        vertexColors: true,
        transparent: true,
        opacity: 0.5,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      }),
    []
  );

  // 常态边色：亮度从权重高的一端向另一端衰减
  const baseEdgeCol = useMemo(() => {
    const colArr = edgeGeo.attributes.color.array as Float32Array;
    const ca = new THREE.Color();
    const cb = new THREE.Color();
    const cc = new THREE.Color();
    edges.forEach((e, ei) => {
      const m = edgeMeta[ei];
      ca.set(poets[m.ia].color);
      cb.set(poets[m.ib].color);
      const bA = 0.20 + 0.95 * Math.pow(m.wa, 0.65);
      const bB = 0.20 + 0.95 * Math.pow(m.wb, 0.65);
      let k = m.offset / 3;
      for (let st = 0; st < m.sc; st++) {
        const dim = 0.30 + 0.55 * Math.pow(Math.sin(ei * 91.7 + st * 37.3) * 0.5 + 0.5, 1.5);
        for (let s = 0; s < EDGE_SEGS - 1; s++) {
          for (const t of [s / (EDGE_SEGS - 1), (s + 1) / (EDGE_SEGS - 1)]) {
            const b = dim * ((1 - t) * bA + t * bB);
            cc.copy(ca).lerp(cb, t).multiplyScalar(b);
            colArr[k * 3] = cc.r;
            colArr[k * 3 + 1] = cc.g;
            colArr[k * 3 + 2] = cc.b;
            k++;
          }
        }
      }
    });
    return colArr.slice();
  }, [edges, poets, edgeMeta, edgeGeo]);

  // 悬停高亮：相关边提亮、无关边压暗
  const hoverIdx = useRef(-1);
  const applyHover = (idx: number) => {
    if (idx === hoverIdx.current) return;
    hoverIdx.current = idx;
    const colAttr = edgeGeo.attributes.color;
    const arr = colAttr.array as Float32Array;
    for (let ei = 0; ei < edges.length; ei++) {
      const m = edgeMeta[ei];
      const on = idx >= 0 && (m.ia === idx || m.ib === idx);
      const boost = idx < 0 ? 1 : on ? 2.2 : 0.1;
      const cnt = m.sc * (EDGE_SEGS - 1) * 2 * 3;
      for (let j = 0; j < cnt; j++) arr[m.offset + j] = Math.min(1.6, baseEdgeCol[m.offset + j] * boost);
    }
    colAttr.needsUpdate = true;
    // 节点透明度
    const aAttr = nodeGeo.attributes.aAlpha;
    const aArr = aAttr.array as Float32Array;
    for (let i = 0; i < N; i++) {
      aArr[i] = idx < 0 ? 1 : i === idx || neighbors[idx].has(i) ? 1 : 0.28;
    }
    aAttr.needsUpdate = true;
    // 标签透明度
    labels.forEach((sp, i) => {
      (sp.material as THREE.SpriteMaterial).opacity = idx < 0 ? 1 : i === idx || neighbors[idx].has(i) ? 1 : 0.18;
    });
  };

  // —— 标签 Sprites ——
  const labels = useMemo(
    () =>
      poets.map((p) => {
        const { tex, aspect } = getLabelTexture(p.name);
        const mat = new THREE.SpriteMaterial({ map: tex, transparent: true, depthTest: false, depthWrite: false });
        const sp = new THREE.Sprite(mat);
        const h = 4.6;
        sp.scale.set(h * aspect, h, 1);
        sp.renderOrder = 10;
        return sp;
      }),
    [poets]
  );

  // —— 聚焦脉冲光环 ——
  const pulse = useMemo(() => {
    const mat = new THREE.SpriteMaterial({
      map: getGlowTexture(),
      color: '#ffe9b8',
      transparent: true,
      depthWrite: false,
      depthTest: false,
      blending: THREE.AdditiveBlending,
    });
    const sp = new THREE.Sprite(mat);
    sp.renderOrder = 9;
    sp.visible = false;
    return sp;
  }, []);

  const hitRefs = useRef<(THREE.Mesh | null)[]>([]);
  const va = useMemo(() => new THREE.Vector3(), []);
  const vb = useMemo(() => new THREE.Vector3(), []);
  const vc = useMemo(() => new THREE.Vector3(), []);

  useFrame((state) => {
    nodeMat.uniforms.uTime.value = state.clock.elapsedTime;
    // 形变推进
    const m = morph.current;
    if (m.t < 1) {
      m.t = Math.min(1, m.t + 0.016);
      const e = 1 - Math.pow(1 - m.t, 3);
      for (let i = 0; i < N * 3; i++) cur.current[i] = m.from[i] + (m.to[i] - m.from[i]) * e;
      edgesDirty.current = true;
    }
    nodeGeo.attributes.position.array.set(cur.current);
    nodeGeo.attributes.position.needsUpdate = true;

    // 边重建：仅在节点位置变化时（形变期间），无分配写入
    if (edgesDirty.current) {
      edgesDirty.current = false;
      const ep = edgeGeo.attributes.position.array as Float32Array;
      let k = 0;
      for (const { ia, ib, bends } of edgeMeta) {
        va.set(cur.current[ia * 3], cur.current[ia * 3 + 1], cur.current[ia * 3 + 2]);
        vb.set(cur.current[ib * 3], cur.current[ib * 3 + 1], cur.current[ib * 3 + 2]);
        const len = va.distanceTo(vb);
        for (const bend of bends) {
          vc.copy(va).add(vb).multiplyScalar(0.5).addScaledVector(bend, len * 0.16);
          const cx = vc.x, cy = vc.y, cz = vc.z;
          let px = va.x, py = va.y, pz = va.z;
          for (let s = 1; s < EDGE_SEGS; s++) {
            const t = s / (EDGE_SEGS - 1);
            const u = 1 - t;
            const qx = u * u * va.x + 2 * u * t * cx + t * t * vb.x;
            const qy = u * u * va.y + 2 * u * t * cy + t * t * vb.y;
            const qz = u * u * va.z + 2 * u * t * cz + t * t * vb.z;
            ep[k++] = px; ep[k++] = py; ep[k++] = pz;
            ep[k++] = qx; ep[k++] = qy; ep[k++] = qz;
            px = qx; py = qy; pz = qz;
          }
        }
      }
      edgeGeo.attributes.position.needsUpdate = true;
    }

    // 边整体亮度呼吸
    edgeMat.opacity = 0.47 + 0.04 * Math.sin(state.clock.elapsedTime * 0.6);

    // 标签与点击球跟随
    poets.forEach((p, i) => {
      const x = cur.current[i * 3];
      const y = cur.current[i * 3 + 1];
      const z = cur.current[i * 3 + 2];
      const r = data.sizes.get(p.id)!;
      labels[i].position.set(x, y + r * 0.5 + 2.8, z);
      const hit = hitRefs.current[i];
      if (hit) hit.position.set(x, y, z);
    });

    // 聚焦脉冲
    const focusIdx = poets.findIndex((p) => p.id === (focusId ?? selectedId));
    if (focusIdx >= 0) {
      pulse.visible = true;
      const r = data.sizes.get(poets[focusIdx].id)!;
      const s = r * 2.1 + Math.sin(state.clock.elapsedTime * 3.2) * r * 0.28;
      pulse.scale.set(s, s, 1);
      pulse.position.set(cur.current[focusIdx * 3], cur.current[focusIdx * 3 + 1], cur.current[focusIdx * 3 + 2]);
      (pulse.material as THREE.SpriteMaterial).opacity = 0.38 + Math.sin(state.clock.elapsedTime * 3.2) * 0.1;
    } else {
      pulse.visible = false;
    }
  });

  const onNodeClick = (id: string) => (e: ThreeEvent<MouseEvent>) => {
    e.stopPropagation();
    setFocusId(id);
    setSelectedId(id);
  };

  return (
    <group>
      <points geometry={nodeGeo} material={nodeMat} frustumCulled={false} />
      <lineSegments geometry={edgeGeo} material={edgeMat} frustumCulled={false} />
      {labels.map((sp, i) => (
        <primitive key={poets[i].id} object={sp} />
      ))}
      <primitive object={pulse} />
      {poets.map((p, i) => (
        <mesh
          key={p.id}
          ref={(m) => (hitRefs.current[i] = m)}
          position={basePos[i]}
          onClick={onNodeClick(p.id)}
          onPointerOver={(e) => {
            e.stopPropagation();
            document.body.style.cursor = 'pointer';
            applyHover(i);
          }}
          onPointerOut={() => {
            document.body.style.cursor = 'default';
            applyHover(-1);
          }}
        >
          <sphereGeometry args={[Math.max(isCoarse ? 7.5 : 4, data.sizes.get(p.id)! * (isCoarse ? 1.5 : 1.1)), 8, 8]} />
          <meshBasicMaterial transparent opacity={0} depthWrite={false} colorWrite={false} />
        </mesh>
      ))}
    </group>
  );
}
