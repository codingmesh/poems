import { useMemo } from 'react';
import { Canvas } from '@react-three/fiber';
import Starfield from './Starfield';
import Graph from './Graph';
import CameraRig from './CameraRig';
import { getGraph } from '../data/graph';
import { useStore } from '../store';

export default function Scene() {
  const dynasty = useStore((s) => s.dynasty);
  const setFocusId = useStore((s) => s.setFocusId);
  const data = useMemo(() => getGraph(dynasty), [dynasty]);

  return (
    <Canvas
      className="scene-canvas"
      camera={{ position: [0, 10, 138], fov: 55, near: 0.1, far: 3000 }}
      gl={{ antialias: true, alpha: false, powerPreference: 'high-performance' }}
      dpr={[1, 2]}
      onCreated={({ gl }) => gl.setClearColor('#050308')}
      onPointerMissed={() => setFocusId(null)}
    >
      <Starfield />
      <Graph key={dynasty} data={data} />
      <CameraRig data={data} />
    </Canvas>
  );
}
