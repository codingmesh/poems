import { useEffect, useRef, useState } from 'react';
import { useStore } from '../store';

export default function PoemModal() {
  const activePoem = useStore((s) => s.activePoem);
  const setActivePoem = useStore((s) => s.setActivePoem);
  const dynasty = useStore((s) => s.dynasty);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [overflowX, setOverflowX] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActivePoem(null);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [setActivePoem]);

  useEffect(() => {
    // 竖排从右往左：滚动条回到最右（起始位置）
    const el = scrollRef.current;
    if (el) {
      el.scrollLeft = 0;
      setOverflowX(el.scrollWidth > el.clientWidth + 6);
    }
  }, [activePoem]);

  if (!activePoem) return null;

  return (
    <div className="poem-overlay" onClick={() => setActivePoem(null)}>
      <div className="poem-card" onClick={(e) => e.stopPropagation()}>
        <button className="poem-close" onClick={() => setActivePoem(null)} aria-label="关闭">
          ×
        </button>
        <div className={`poem-scroll ${overflowX ? 'fade-more' : ''}`} ref={scrollRef}>
          <h2 className="p-title">{activePoem.title}</h2>
          <div className="p-author">
            {dynasty === 'song' ? '宋' : '唐'} · {activePoem.author}
          </div>
          {activePoem.lines.map((ln, i) => (
            <p className="p-line" key={i}>
              {ln}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
