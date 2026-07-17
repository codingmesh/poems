import { useEffect, useMemo, useRef, useState } from 'react';
import { useStore } from '../store';
import { getGraph } from '../data/graph';

export default function PoetPanel() {
  const dynasty = useStore((s) => s.dynasty);
  const selectedId = useStore((s) => s.selectedId);
  const setSelectedId = useStore((s) => s.setSelectedId);
  const setActivePoem = useStore((s) => s.setActivePoem);
  const bodyRef = useRef<HTMLDivElement>(null);
  const [overflowing, setOverflowing] = useState(false);

  const poet = useMemo(
    () => getGraph(dynasty).poets.find((p) => p.id === selectedId) ?? null,
    [dynasty, selectedId]
  );

  useEffect(() => {
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

  return (
    <aside className="poet-panel">
      <div className="pp-head">
        <span className="pp-title">
          {poet.name}
          <em>
            ({poet.connections}人/{poet.poemCount}首)
          </em>
        </span>
        <button className="pp-close" onClick={() => setSelectedId(null)} aria-label="关闭">
          ×
        </button>
      </div>
      <div className={`pp-body ${overflowing ? 'fade-more' : ''}`} ref={bodyRef}>
        {poet.relations.map((r, ri) => (
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
            {r.more > 0 && <div className="pp-more">...还有{r.more}首</div>}
          </div>
        ))}
      </div>
    </aside>
  );
}
