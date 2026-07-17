import { useEffect, useMemo, useRef, useState } from 'react';
import { useStore } from '../store';
import { getGraph } from '../data/graph';
import type { Poet } from '../types';

/** 面板标题统计：按实际收录数据计算，X个关联对象 / Y首收录诗作 */
function getStats(poet: Poet): { connections: number; poemCount: number } {
  return {
    connections: poet.relations.length,
    poemCount: poet.relations.reduce((s, r) => s + r.poems.length + (r.extra?.length ?? 0), 0),
  };
}

export default function PoetPanel() {
  const dynasty = useStore((s) => s.dynasty);
  const selectedId = useStore((s) => s.selectedId);
  const setSelectedId = useStore((s) => s.setSelectedId);
  const setActivePoem = useStore((s) => s.setActivePoem);
  const bodyRef = useRef<HTMLDivElement>(null);
  const [overflowing, setOverflowing] = useState(false);
  const [expanded, setExpanded] = useState<Set<number>>(new Set());

  const poet = useMemo(
    () => getGraph(dynasty).poets.find((p) => p.id === selectedId) ?? null,
    [dynasty, selectedId]
  );

  useEffect(() => {
    setExpanded(new Set());
    const el = bodyRef.current;
    if (el) setOverflowing(el.scrollHeight > el.clientHeight + 6);
  }, [poet]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedId(null);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [setSelectedId]);

  if (!poet) return null;
  const stats = getStats(poet);

  return (
    <aside className="poet-panel">
      <div className="pp-head">
        <span className="pp-title">
          {poet.name}
          <em>
            ({stats.connections}人/{stats.poemCount}首)
          </em>
        </span>
        <button className="pp-close" onClick={() => setSelectedId(null)} aria-label="关闭">
          ×
        </button>
      </div>
      <div className={`pp-body ${overflowing ? 'fade-more' : ''}`} ref={bodyRef}>
        {poet.relations.map((r, ri) => {
          const extraCount = r.extra?.length ?? 0;
          const isOpen = expanded.has(ri);
          return (
            <div className="pp-group" key={ri}>
              <div className="pp-group-head">
                <span className="pp-target">{r.targetName}</span>
                <span className="pp-type">[{r.type}]</span>
              </div>
              {r.poems.map((pm, pi) => (
                <button className="pp-poem" key={pi} onClick={() => setActivePoem(pm)}>
                  {pm.title}
                </button>
              ))}
              {isOpen &&
                r.extra!.map((pm, pi) => (
                  <button className="pp-poem" key={`x${pi}`} onClick={() => setActivePoem(pm)}>
                    {pm.title}
                  </button>
                ))}
              {!isOpen && extraCount > 0 && (
                <button
                  className="pp-more pp-more-btn"
                  onClick={() => setExpanded((s) => new Set(s).add(ri))}
                >
                  ...还有{extraCount}首
                </button>
              )}
            </div>
          );
        })}
      </div>
    </aside>
  );
}
