export type Dynasty = 'tang' | 'song';
export type RelationType = '提及' | '寄' | '酬和';
export type ListMode = 'mentioned' | 'gifted';

export interface Poem {
  title: string;
  author: string;
  lines: string[];
}

export interface PoetRelation {
  targetName: string;
  type: RelationType;
  poems: Poem[];
  more: number;
}

export interface Poet {
  id: string;
  name: string;
  color: string;
  mentioned: number;
  gifted: number;
  connections: number;
  poemCount: number;
  relations: PoetRelation[];
}

export interface GraphEdge {
  a: string;
  b: string;
}

export interface LayoutNode {
  id: string;
  x: number;
  y: number;
  z: number;
}
