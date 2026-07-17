import { forceSimulation, forceLink, forceManyBody, forceCenter, forceCollide, forceX, forceY, forceZ } from 'd3-force-3d';
import type { Poet, GraphEdge, ListMode } from '../types';
import { SONG_POETS, SONG_EDGES } from './song';
import { TANG_POETS, TANG_EDGES } from './tang';

export interface GraphData {
  poets: Poet[];
  edges: GraphEdge[];
  /** id -> 力导向布局坐标 */
  positions: Map<string, [number, number, number]>;
  /** id -> 节点视觉大小（世界单位） */
  sizes: Map<string, number>;
}

function computeLayout(poets: Poet[], edges: GraphEdge[]): GraphData {
  const nodes = poets.map((p) => ({ id: p.id }));
  const links = edges.map((e) => ({ source: e.a, target: e.b }));

  const sim = forceSimulation(nodes, 3)
    .force('link', forceLink(links).id((d: any) => d.id).distance(27).strength(0.55))
    .force('charge', forceManyBody().strength(-44))
    .force('center', forceCenter(0, 0, 0))
    .force('collide', forceCollide(8))
    .force('x', forceX(0).strength(0.07))
    .force('y', forceY(0).strength(0.07))
    .force('z', forceZ(0).strength(0.07))
    .stop();

  for (let i = 0; i < 260; i++) sim.tick();

  const maxVal = Math.max(...poets.map((p) => Math.max(p.mentioned, p.gifted)));
  const positions = new Map<string, [number, number, number]>();
  const sizes = new Map<string, number>();
  const n = nodes as any[];
  for (let i = 0; i < poets.length; i++) {
    positions.set(poets[i].id, [n[i].x, n[i].y, n[i].z]);
    const v = Math.max(poets[i].mentioned, poets[i].gifted);
    sizes.set(poets[i].id, 3.5 + 6.5 * Math.sqrt(v / maxVal));
  }
  return { poets, edges, positions, sizes };
}

const songGraph = computeLayout(SONG_POETS, SONG_EDGES);
const tangGraph = computeLayout(TANG_POETS, TANG_EDGES);

export function getGraph(dynasty: 'tang' | 'song'): GraphData {
  return dynasty === 'song' ? songGraph : tangGraph;
}

/** 底部三列榜单：按模式排序，i%3 分列，与视频一致 */
export function getBoard(poets: Poet[], mode: ListMode): Poet[][] {
  const key = mode === 'mentioned' ? 'mentioned' : 'gifted';
  const count = mode === 'mentioned' ? 18 : 15;
  const sorted = [...poets].sort((a, b) => b[key] - a[key]).slice(0, count);
  const cols: Poet[][] = [[], [], []];
  sorted.forEach((p, i) => cols[i % 3].push(p));
  return cols;
}
