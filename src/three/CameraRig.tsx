import { useEffect, useMemo, useRef } from 'react';
import * as THREE from 'three';
import { useFrame, useThree } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import type { OrbitControls as OrbitControlsImpl } from 'three-stdlib';
import type { GraphData } from '../data/graph';
import { useStore } from '../store';

const HOME_TARGET = new THREE.Vector3(0, 0, 0);
// 以 720×944 (aspect≈0.76) 为基准调好的距离，按视口宽高比缩放
const BASE_ASPECT = 0.76;
const HOME_DIST_BASE = 138;
const FOCUS_DIST_BASE = 58;

export default function CameraRig({ data }: { data: GraphData }) {
  const controlsRef = useRef<OrbitControlsImpl>(null);
  const camera = useThree((s) => s.camera);
  const size = useThree((s) => s.size);
  const focusId = useStore((s) => s.focusId);
  const rotating = useStore((s) => s.rotating);
  const resetTick = useStore((s) => s.resetTick);
  const flat = useStore((s) => s.flat);
  const flippedY = useStore((s) => s.flippedY);

  const aspect = size.width / size.height;
  const homeDist = THREE.MathUtils.clamp((HOME_DIST_BASE * BASE_ASPECT) / aspect, 112, 320);
  const focusDist = THREE.MathUtils.clamp((FOCUS_DIST_BASE * BASE_ASPECT) / aspect, 40, 140);

  const desired = useRef({ target: HOME_TARGET.clone(), dist: homeDist, active: false });

  const transform = useMemo(
    () => (v: [number, number, number]) =>
      new THREE.Vector3(v[0], (flat ? v[1] * 0.14 : v[1]) * (flippedY ? -1 : 1), v[2]),
    [flat, flippedY]
  );

  // 聚焦目标变化
  useEffect(() => {
    if (focusId) {
      const p = data.positions.get(focusId);
      if (p) {
        desired.current.target.copy(transform(p));
        desired.current.dist = focusDist;
        desired.current.active = true;
        return;
      }
    }
    desired.current.active = false;
  }, [focusId, data, transform, focusDist]);

  // 复位（视口尺寸变化时也保持全图可见）
  useEffect(() => {
    desired.current.target.copy(HOME_TARGET);
    desired.current.dist = homeDist;
    desired.current.active = true;
  }, [resetTick, homeDist]);

  useFrame(() => {
    const controls = controlsRef.current;
    if (!controls) return;
    if (desired.current.active) {
      const t = controls.target;
      t.lerp(desired.current.target, 0.055);
      const dir = camera.position.clone().sub(t);
      const len = dir.length();
      const newLen = THREE.MathUtils.lerp(len, desired.current.dist, 0.055);
      dir.normalize().multiplyScalar(newLen);
      camera.position.copy(t).add(dir);
      if (t.distanceTo(desired.current.target) < 0.4 && Math.abs(newLen - desired.current.dist) < 0.6) {
        desired.current.active = false;
      }
    }
    controls.update();
  });

  return (
    <OrbitControls
      ref={controlsRef}
      makeDefault
      enableDamping
      dampingFactor={0.08}
      autoRotate={rotating}
      autoRotateSpeed={0.55}
      minDistance={26}
      maxDistance={460}
      enablePan
    />
  );
}
