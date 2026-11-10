/**
 * Pilar de luz roxo → rosa feito só com CSS (ver `.pillar` em globals.css).
 * Substitui a versão em three.js/WebGL: zero JS, anima só transform/opacity
 * e para totalmente com `prefers-reduced-motion`.
 */
export function LightPillar() {
  return (
    <div className="pillar" aria-hidden>
      <div className="pillar__glow" />
      <div className="pillar__beam" />
      <div className="pillar__core" />
    </div>
  );
}
