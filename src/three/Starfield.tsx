import { useMemo, useRef } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';
import { getGlowTexture } from './textures';

const STAR_COLORS = ['#ffffff', '#ffe9f2', '#ffd7ea', '#cdefff', '#d9f7ff', '#fff3c9', '#e8dcff', '#d2ffe9'];

function makeCloud(count: number, rMin: number, rMax: number, size: number, bright: number) {
  const pos = new Float32Array(count * 3);
  const col = new Float32Array(count * 3);
  const c = new THREE.Color();
  for (let i = 0; i < count; i++) {
    // 均匀球壳分布
    const r = rMin + Math.random() * (rMax - rMin);
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
    pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
    pos[i * 3 + 2] = r * Math.cos(phi);
    c.set(STAR_COLORS[(Math.random() * STAR_COLORS.length) | 0]);
    const b = bright * (0.6 + Math.random() * 0.4);
    col[i * 3] = c.r * b;
    col[i * 3 + 1] = c.g * b;
    col[i * 3 + 2] = c.b * b;
  }
  return { pos, col, size };
}

/** 深邃星野：三层不同大小的星点，加少量大亮星，大星微闪烁 */
export default function Starfield() {
  const ref = useRef<THREE.Group>(null);
  const mats = useRef<(THREE.PointsMaterial | null)[]>([]);
  const clouds = useMemo(
    () => [
      makeCloud(6000, 180, 820, 2.2, 0.9),
      makeCloud(1600, 150, 680, 3.4, 0.95),
      makeCloud(320, 140, 560, 5.0, 0.9),
      makeCloud(100, 130, 480, 7.0, 0.85),
    ],
    []
  );
  const glow = getGlowTexture();

  useFrame((state, dt) => {
    if (ref.current) ref.current.rotation.y += dt * 0.004;
    const t = state.clock.elapsedTime;
    const m2 = mats.current[2];
    const m3 = mats.current[3];
    if (m2) m2.opacity = 0.78 + 0.2 * Math.sin(t * 1.7);
    if (m3) m3.opacity = 0.72 + 0.24 * Math.sin(t * 1.1 + 2.1);
  });

  return (
    <group ref={ref}>
      {clouds.map((cl, i) => (
        <points key={i}>
          <bufferGeometry>
            <bufferAttribute attach="attributes-position" args={[cl.pos, 3]} />
            <bufferAttribute attach="attributes-color" args={[cl.col, 3]} />
          </bufferGeometry>
          <pointsMaterial
            ref={(m) => (mats.current[i] = m)}
            size={cl.size}
            map={glow}
            vertexColors
            transparent
            opacity={0.95}
            sizeAttenuation
            depthWrite={false}
            blending={THREE.AdditiveBlending}
          />
        </points>
      ))}
    </group>
  );
}
