declare module 'd3-force-3d' {
  export interface SimulationNode {
    id?: string;
    x?: number;
    y?: number;
    z?: number;
    vx?: number;
    vy?: number;
    vz?: number;
    fx?: number | null;
    fy?: number | null;
    fz?: number | null;
  }
  export interface SimulationLink {
    source: string | SimulationNode;
    target: string | SimulationNode;
  }
  export interface Force {
    (alpha: number): void;
    initialize?: (nodes: SimulationNode[]) => void;
  }
  export interface ForceLink extends Force {
    id(fn: (d: SimulationNode) => string): ForceLink;
    distance(d: number): ForceLink;
    strength(s: number): ForceLink;
  }
  export interface ForceManyBody extends Force {
    strength(s: number): ForceManyBody;
  }
  export interface ForceCollide extends Force {
    radius(r: number): ForceCollide;
  }
  export interface ForceAxis extends Force {
    strength(s: number): ForceAxis;
  }
  export interface Simulation {
    force(name: string, force: Force): Simulation;
    tick(): Simulation;
    stop(): Simulation;
  }
  export function forceSimulation(nodes: SimulationNode[], numDimensions?: number): Simulation;
  export function forceLink(links: SimulationLink[]): ForceLink;
  export function forceManyBody(): ForceManyBody;
  export function forceCenter(x?: number, y?: number, z?: number): Force;
  export function forceCollide(radius?: number): ForceCollide;
  export function forceX(x?: number): ForceAxis;
  export function forceY(y?: number): ForceAxis;
  export function forceZ(z?: number): ForceAxis;
}
