import { useStore } from '../store';

export default function Header() {
  const dynasty = useStore((s) => s.dynasty);
  const setDynasty = useStore((s) => s.setDynasty);
  return (
    <header className="app-header">
      <h1 className="app-title">诗云星图</h1>
      <div className="dynasty-switch">
        <button className={dynasty === 'tang' ? 'active' : ''} onClick={() => setDynasty('tang')}>
          唐
        </button>
        <button className={dynasty === 'song' ? 'active' : ''} onClick={() => setDynasty('song')}>
          宋
        </button>
      </div>
    </header>
  );
}
