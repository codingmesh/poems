import { create } from 'zustand';
import type { Dynasty, ListMode, Poem } from './types';

interface AppState {
  dynasty: Dynasty;
  /** 相机聚焦的诗人 id（hover 榜单/点击触发） */
  focusId: string | null;
  /** 右侧详情面板打开的诗人 id */
  selectedId: string | null;
  /** 诗歌弹窗 */
  activePoem: Poem | null;
  listMode: ListMode;
  rotating: boolean;
  /** 横向布局（压扁 Y 方向） */
  flat: boolean;
  flippedY: boolean;
  /** 自增触发相机复位 */
  resetTick: number;
  /** 榜单 hover 高亮的诗人 id */
  hoverBoardId: string | null;

  setDynasty: (d: Dynasty) => void;
  setFocusId: (id: string | null) => void;
  setSelectedId: (id: string | null) => void;
  setActivePoem: (p: Poem | null) => void;
  toggleListMode: () => void;
  toggleRotating: () => void;
  toggleFlat: () => void;
  toggleFlippedY: () => void;
  resetView: () => void;
  setHoverBoardId: (id: string | null) => void;
}

export const useStore = create<AppState>((set) => ({
  dynasty: 'song',
  focusId: null,
  selectedId: null,
  activePoem: null,
  listMode: 'mentioned',
  rotating: true,
  flat: false,
  flippedY: false,
  resetTick: 0,
  hoverBoardId: null,

  setDynasty: (d) =>
    set({ dynasty: d, focusId: null, selectedId: null, activePoem: null, hoverBoardId: null, resetTick: Date.now() }),
  setFocusId: (id) => set({ focusId: id }),
  setSelectedId: (id) => set({ selectedId: id }),
  setActivePoem: (p) => set({ activePoem: p }),
  toggleListMode: () => set((s) => ({ listMode: s.listMode === 'mentioned' ? 'gifted' : 'mentioned' })),
  toggleRotating: () => set((s) => ({ rotating: !s.rotating })),
  toggleFlat: () => set((s) => ({ flat: !s.flat })),
  toggleFlippedY: () => set((s) => ({ flippedY: !s.flippedY })),
  resetView: () => set((s) => ({ focusId: null, resetTick: s.resetTick + 1 })),
  setHoverBoardId: (id) => set({ hoverBoardId: id }),
}));
