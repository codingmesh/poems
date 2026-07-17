import { useMemo, useRef, useState } from 'react';
import { useStore } from '../store';
import { getGraph } from '../data/graph';

export default function SearchBox() {
  const dynasty = useStore((s) => s.dynasty);
  const setFocusId = useStore((s) => s.setFocusId);
  const setSelectedId = useStore((s) => s.setSelectedId);
  const [q, setQ] = useState('');
  const [open, setOpen] = useState(false);
  const boxRef = useRef<HTMLDivElement>(null);

  const poets = useMemo(() => getGraph(dynasty).poets, [dynasty]);
  const matches = useMemo(() => {
    const t = q.trim();
    if (!t) return [];
    return poets.filter((p) => p.name.includes(t)).slice(0, 8);
  }, [q, poets]);

  const pick = (id: string) => {
    setFocusId(id);
    setSelectedId(id);
    setQ('');
    setOpen(false);
  };

  return (
    <div className="search-box" ref={boxRef}>
      <input
        value={q}
        placeholder="搜索诗人..."
        onChange={(e) => {
          setQ(e.target.value);
          setOpen(true);
        }}
        onFocus={() => setOpen(true)}
        onBlur={() => setTimeout(() => setOpen(false), 150)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' && matches.length) pick(matches[0].id);
        }}
      />
      {open && matches.length > 0 && (
        <ul className="search-results">
          {matches.map((p) => (
            <li key={p.id} onMouseDown={() => pick(p.id)}>
              <i style={{ background: p.color }} />
              {p.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
