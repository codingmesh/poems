import { useEffect, useRef, useState } from 'react';

/** 背景音乐：自动播放（被拒则首次交互时播放），左上角小开关 */
export default function BgmPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = 0.55;
    const tryPlay = () => {
      audio
        .play()
        .then(() => setPlaying(true))
        .catch(() => setPlaying(false));
    };
    tryPlay();
    const onGesture = () => {
      if (audio.paused) tryPlay();
    };
    window.addEventListener('pointerdown', onGesture, { once: true });
    window.addEventListener('keydown', onGesture, { once: true });
    return () => {
      window.removeEventListener('pointerdown', onGesture);
      window.removeEventListener('keydown', onGesture);
    };
  }, []);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) {
      audio.play().then(() => setPlaying(true)).catch(() => {});
    } else {
      audio.pause();
      setPlaying(false);
    }
  };

  return (
    <>
      <audio ref={audioRef} src="/bgm.mp3" loop preload="auto" />
      <button
        className={`bgm-toggle ${playing ? 'on' : ''}`}
        onClick={toggle}
        title={playing ? '关闭音乐' : '播放音乐'}
        aria-label="背景音乐开关"
      >
        {playing ? '♪' : '♪̸'}
      </button>
    </>
  );
}
