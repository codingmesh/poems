import { useEffect, useMemo, useRef } from 'react';
import * as THREE from 'three';
import { useFrame, useThree } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import type { OrbitControls as OrbitControlsImpl } from 'three-stdlib';
import type { GraphData } from '../data/graph';
import { useStore } from '../store';

const HOME_TARGET = new THREE.Vector3(0, 0, 0);
const HOME_POS = new THREE.Vector3(0, 10, 138);
const FOCUS_DIST = 58;

export default function CameraRig({ data }: { data: GraphData }) {
  const controlsRef = useRef<OrbitControlsImpl>(null);
  const camera = useThree((s) => s.camera);
  const focusId = useStore((s) => s.focusId);
  const rotating = useStore((s) => s.rotating);
  const resetTick = useStore((s) => s.resetTick);
  const flat = useStore((s) => s.flat);
  const flippedY = useStore((s) => s.flippedY);

  const desired = useRef({ target: HOME_TARGET.clone(), dist: HOME_POS.length(), active: false });

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
        desired.current.dist = FOCUS_DIST;
        desired.current.active = true;
        return;
      }
    }
    desired.current.active = false;
  }, [focusId, data, transform]);

  // 复位
  useEffect(() => {
    desired.current.target.copy(HOME_TARGET);
    desired.current.dist = HOME_POS.length();
    desired.current.active = true;
  }, [resetTick]);

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
      maxDistance={420}
      enablePan
    />
  );
}
