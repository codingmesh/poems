import * as THREE from 'three';

let glowTex: THREE.Texture | null = null;

/** 中心亮核 + 径向衰减辉光 */
export function getGlowTexture(): THREE.Texture {
  if (glowTex) return glowTex;
  const s = 128;
  const cv = document.createElement('canvas');
  cv.width = cv.height = s;
  const ctx = cv.getContext('2d')!;
  const g = ctx.createRadialGradient(s / 2, s / 2, 0, s / 2, s / 2, s / 2);
  g.addColorStop(0, 'rgba(255,255,255,1)');
  g.addColorStop(0.12, 'rgba(255,255,255,0.95)');
  g.addColorStop(0.3, 'rgba(255,255,255,0.42)');
  g.addColorStop(0.62, 'rgba(255,255,255,0.10)');
  g.addColorStop(1, 'rgba(255,255,255,0)');
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, s, s);
  glowTex = new THREE.CanvasTexture(cv);
  return glowTex;
}

const labelCache = new Map<string, { tex: THREE.Texture; aspect: number }>();

/** 诗人名标签：canvas 绘制成纹理，做 Billboarding */
export function getLabelTexture(name: string): { tex: THREE.Texture; aspect: number } {
  const hit = labelCache.get(name);
  if (hit) return hit;
  const font = '700 46px "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", sans-serif';
  const pad = 20;
  const m = document.createElement('canvas').getContext('2d')!;
  m.font = font;
  const w = Math.ceil(m.measureText(name).width) + pad * 2;
  const h = 64 + pad * 2;
  const cv = document.createElement('canvas');
  cv.width = w;
  cv.height = h;
  const ctx = cv.getContext('2d')!;
  ctx.font = font;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.shadowColor = 'rgba(255,255,255,0.55)';
  ctx.shadowBlur = 8;
  ctx.fillStyle = 'rgba(244,242,250,0.96)';
  ctx.fillText(name, w / 2, h / 2 + 2);
  const tex = new THREE.CanvasTexture(cv);
  tex.anisotropy = 4;
  const out = { tex, aspect: w / h };
  labelCache.set(name, out);
  return out;
}
