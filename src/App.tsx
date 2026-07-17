import Scene from './three/Scene';
import Header from './components/Header';
import SearchBox from './components/SearchBox';
import Leaderboard from './components/Leaderboard';
import PoetPanel from './components/PoetPanel';
import PoemModal from './components/PoemModal';
import BgmPlayer from './components/BgmPlayer';

export default function App() {
  return (
    <div className="app">
      <Scene />
      <Header />
      <SearchBox />
      <Leaderboard />
      <PoetPanel />
      <PoemModal />
      <BgmPlayer />
    </div>
  );
}
