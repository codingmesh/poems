import { useMemo, useState } from 'react';
import { useStore } from '../store';
import { getGraph, getBoard } from '../data/graph';

export default function Leaderboard() {
  const dynasty = useStore((s) => s.dynasty);
  const listMode = useStore((s) => s.listMode);
  const toggleListMode = useStore((s) => s.toggleListMode);
  const setFocusId = useStore((s) => s.setFocusId);
  const setSelectedId = useStore((s) => s.setSelectedId);
  const hoverBoardId = useStore((s) => s.hoverBoardId);
  const setHoverBoardId = useStore((s) => s.setHoverBoardId);
  const rotating = useStore((s) => s.rotating);
  const toggleRotating = useStore((s) => s.toggleRotating);
  const flat = useStore((s) => s.flat);
  const toggleFlat = useStore((s) => s.toggleFlat);
  const flippedY = useStore((s) => s.flippedY);
  const toggleFlippedY = useStore((s) => s.toggleFlippedY);
  const resetView = useStore((s) => s.resetView);

  const [zoneHover, setZoneHover] = useState(false);

  const cols = useMemo(() => getBoard(getGraph(dynasty).poets, listMode), [dynasty, listMode]);

  return (
    <div
      className="board-zone"
      onMouseEnter={() => setZoneHover(true)}
      onMouseLeave={() => {
        setZoneHover(false);
        setHoverBoardId(null);
      }}
    >
      <div className={`control-bar ${zoneHover ? 'show' : ''}`}>
        <button onClick={resetView}>
          <span className="cb-icon">⤢</span>显示全部
        </button>
        <button onClick={toggleFlat}>
          <span className="cb-icon">⇆</span>{flat ? '纵向布局' : '横向布局'}
        </button>
        <button onClick={toggleFlippedY}>
          <span className="cb-icon">⇅</span>{flippedY ? 'Y轴已翻转' : 'Y轴翻转'}
        </button>
        <button onClick={toggleRotating}>
          <span className="cb-icon">{rotating ? '⏹' : '▶'}</span>{rotating ? '停止旋转' : '开始旋转'}
        </button>
      </div>
      <div className="boards">
        <button className="mode-tab" onClick={toggleListMode} title="切换榜单">
          {listMode === 'mentioned' ? '被提最多' : '赠诗最多'}
        </button>
        <div className="board-columns">
          {cols.map((col, ci) => (
            <div className="board-col" key={ci}>
              {col.map((p) => (
                <button
                  key={p.id}
                  className={`board-item ${hoverBoardId === p.id ? 'hover' : ''}`}
                  onMouseEnter={() => {
                    setHoverBoardId(p.id);
                    setFocusId(p.id);
                  }}
                  onClick={() => setSelectedId(p.id)}
                >
                  <i style={{ background: p.color }} />
                  <span className="b-name">{p.name}</span>
                  <span className="b-num">{listMode === 'mentioned' ? p.mentioned : p.gifted}</span>
                </button>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
