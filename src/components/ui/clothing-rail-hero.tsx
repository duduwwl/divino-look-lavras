             ref={(node) => { slots.current[i] = node; }}
              type="button"
              data-garment={i}
              data-front={turned || undefined}
              tabIndex={i === (active ?? focusIndex) ? 0 : -1}
              aria-label={item.name}
              aria-describedby={`${uid}-caption`}
              aria-pressed={turned}
              className="crh-garment"
              style={{ top: railY - (HOOK_TOP / VB_H) * h, width: boxW, height: h, zIndex: turned ? 30 : 10 + i, visibility: lifted === i ? "hidden" : undefined, transform: `translate3d(${((sim.current.x[i] ?? 0) - boxW / 2).toFixed(2)}px,0,0)` }}
              onFocus={() => { setFocusIndex(i); if (pointer.current.id < 0) { stop(); choose(i); } }}
              onClick={(event) => { const pending = pendingOpen.current; pendingOpen.current = -1; if (event.detail === 0 || pending === i) open(i); }}
            >
              <span ref={(node) => { swings.current[i] = node; }} className="crh-fill" style={{ transformOrigin: `50% ${(HOOK_TOP / VB_H) * 100}%` }}>
                <span aria-hidden="true" className="crh-fill crh-blur" style={{ filter: `blur(${Math.max(3, h * 0.022).toFixed(1)}px)` }}>
                  <span ref={(node) => { shadows.current[i] = node; }} className={`crh-shadow ${item.image ? photoBox : "crh-box-full"}`} style={{ WebkitMask: `${mask} top center / contain no-repeat`, mask: `${mask} top center / contain no-repeat` }} />
                </span>
                {(item.sideImage || !item.image) && (
                  <span ref={(node) => { sides.current[i] = node; }} data-face="side" className="crh-fill" style={{ transform: `perspective(${PERSPECTIVE}px) rotateY(0deg)` }}>
                    <SideHanger uid={uid} material={hanger} />
                    {item.sideImage ? <Photo src={item.sideImage} alt="" full={hanger === "none"} /> : <SideArt uid={uid} kind={kind} color={color} trim={trim} />}
                  </span>
                )}
                <span ref={(node) => { turns.current[i] = node; }} data-turn className="crh-fill crh-turn" style={{ transform: `perspective(${PERSPECTIVE}px) rotateY(${REST}deg)`, opacity: item.image && !item.sideImage ? 1 : 0 }}>
                  {(["front", "back"] as const).map((side) => (
                    <span key={side} data-face={side} className="crh-fill crh-face" style={{ transform: side === "back" ? "rotateY(180deg)" : undefined, ["--garment-color" as string]: color, ["--garment-under" as string]: mix(color, -0.42) }}>
                      <Hanger uid={uid} side={side} kind={item.image ? null : kind} material={hanger} />
                      <span ref={side === "front" ? (node) => { drapes.current[i] = node; } : undefined} data-drape className="crh-fill crh-drape" style={side === "back" ? { transform: "skewX(calc(var(--drape, 0deg) * -1))" } : undefined}>
                        {item.image
                          ? <Photo src={(side === "back" ? item.backImage : undefined) ?? item.image} alt="" full={hanger === "none"} />
                          : <Fabric uid={uid} kind={kind} side={side} color={color} trim={trim} />}
                        <span ref={side === "front" ? (node) => { shades.current[i] = node; } : undefined} className={`crh-shade ${item.image ? photoBox : "crh-box-full"}`} style={{ WebkitMask: `${item.image ? `url("${(side === "back" ? item.backImage : undefined) ?? item.image}")` : silhouetteMask(kind, side)} top center / contain no-repeat`, mask: `${item.image ? `url("${(side === "back" ? item.backImage : undefined) ?? item.image}")` : silhouetteMask(kind, side)} top center / contain no-repeat` }} />
                      </span>
                    </span>
                  ))}
                </span>
                {item.tag && (
                  <span ref={(node) => { tags.current[i] = node; }} aria-hidden="true" className="crh-tag" style={{ top: (32 / VB_H) * h, transform: "rotate(-12deg)" }}>
                    <span className="crh-tag-string" />
                    <span className="crh-tag-card">
                      <span className="crh-tag-hole" />
                      {item.tag}
                    </span>
                  </span>
                )}
              </span>
            </button>
          );
        })}
      </div>

      {size.carousel && count > 1 && (
        <div className="crh-dots" role="group" aria-label={labels.show}>
          {items.map((item, i) => (
            <button key={item.id} type="button" aria-label={`${labels.show} ${item.name}`} aria-current={carouselIndex === i} onClick={() => { stop(); choose(i); }} className="crh-dot" data-current={carouselIndex === i || undefined} />
          ))}
        </div>
      )}

      <div className="crh-foot">
        <div id={`${uid}-caption`} aria-live="polite" className="crh-caption">
          <p key={current?.id ?? "caption"} className="crh-caption-title">{current ? current.name : caption}</p>
          {current?.description && <p key={`${current.id}-d`} className="crh-caption-text">{current.description}</p>}
        </div>
        {action}
      </div>

      {openIndex !== null && items[openIndex] && (
        <Detail
          uid={uid}
          item={items[openIndex]}
          index={openIndex}
          total={count}
          hanger={hanger}
          theme={theme}
          labels={labels}
          reduced={reduced}
          host={() => stageRef.current?.closest("dialog") ?? document.body}
          source={() => turns.current[openIndex]?.getBoundingClientRect() ?? null}
          onLift={(lift) => setLifted(lift ? openIndex : null)}
          onClose={() => { const index = openIndex; returnFocus.current = index; close(); impulse(index, (index % 2 ? 1 : -1) * 44); }}
        />
      )}
    </section>
  );
}

function Detail({ uid, item, index, total, hanger, theme, labels, reduced, host, source, onLift, onClose }: {
  uid: string;
  item: RailGarment;
  index: number;
  total: number;
  hanger: "wood" | "matte" | "none";
  theme: "light" | "dark";
  labels: ClothingRailHeroLabels;
  reduced: boolean;
  /** Onde o detalhe entra: o <dialog> em volta da arara, se houver (fora dele, um diálogo modal deixa tudo inerte), senão o body. */
  host: () => HTMLElement;
  source: () => DOMRect | null;
  onLift: (lifted: boolean) => void;
  onClose: () => void;
}) {
  const dialogRef = React.useRef(null as HTMLDivElement | null);
  const figureRef = React.useRef(null as HTMLDivElement | null);
  const spinRef = React.useRef(null as HTMLDivElement | null);
  const closeRef = React.useRef(null as HTMLButtonElement | null);
  const [container] = React.useState(host);
  const [side, setSide] = React.useState("front" as "front" | "back");
  const [shown, setShown] = React.useState(false);
  const angle = React.useRef({ value: 0, target: 0, velocity: 0, raf: 0, last: 0, dragging: false, startX: 0, startAngle: 0 });
  const closing = React.useRef(false);
  const kind = item.kind ?? "tee";
  const color = item.color ?? "var(--crh-muted)";
  const trim = item.trim ?? mix(color, -0.12);
  const titleId = `${uid}-detail-title`;

  const spin = React.useCallback(() => {
    const a = angle.current;
    const node = spinRef.current;
    const loop = (now: number) => {
      const dt = a.last ? Math.min(0.034, (now - a.last) / 1000) : 1 / 60;
      a.last = now;
      const accel = -90 * (a.value - a.target) - 2 * Math.sqrt(90) * 0.82 * a.velocity;
      a.velocity += accel * dt;
      a.value += a.velocity * dt;
      if (node) node.style.transform = `rotateY(${a.value.toFixed(2)}deg)`;
      if (Math.abs(a.value - a.target) < 0.05 && Math.abs(a.velocity) < 0.05) { a.value = a.target; if (node) node.style.transform = `rotateY(${a.value}deg)`; a.raf = 0; a.last = 0; return; }
      a.raf = requestAnimationFrame(loop);
    };
    if (reduced) { a.value = a.target; if (node) node.style.transform = `rotateY(${a.value}deg)`; return; }
    if (!a.raf) a.raf = requestAnimationFrame(loop);
  }, [reduced]);

  const turnTo = React.useCallback((next: "front" | "back") => {
    const a = angle.current;
    const base = Math.round(a.value / 360) * 360;
    a.target = base + (next === "back" ? 180 : 0);
    if (Math.abs(a.target - a.value) > 180) a.target -= 360 * Math.sign(a.target - a.value);
    setSide(next);
    spin();
  }, [spin]);

  React.useLayoutEffect(() => {
    const figure = figureRef.current;
    const from = source();
    closeRef.current?.focus({ preventScroll: true });
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    let animation = null as Animation | null;
    if (figure && from && !reduced && from.width > 0) {
      const to = figure.getBoundingClientRect();
      const scale = from.height / to.height;
      const dx = from.left + from.width / 2 - (to.left + to.width / 2);
      const dy = from.top - to.top;
      const lift = Math.min(90, Math.abs(dy) * 0.25 + 30);
      onLift(true);
      animation = figure.animate([
        { transform: `translate(${dx}px, ${dy}px) scale(${scale})` },
        { transform: `translate(${dx * 0.4}px, ${dy * 0.4 - lift}px) scale(${(scale + 1) / 2 * 1.03}) rotate(${dx > 0 ? -2.5 : 2.5}deg)`, offset: 0.5 },
        { transform: "none" },
      ], { duration: 680, easing: "cubic-bezier(.22,.85,.3,1)" });
    }
    const raf = requestAnimationFrame(() => setShown(true));
    return () => { cancelAnimationFrame(raf); animation?.cancel(); document.body.style.overflow = overflow; cancelAnimationFrame(angle.current.raf); onLift(false); };
  }, [source, reduced, onLift]);

  const dismiss = React.useCallback(() => {
    if (closing.current) return;
    closing.current = true;
    setShown(false);
    const figure = figureRef.current;
    const to = source();
    if (!figure || !to || reduced || to.width === 0) { onClose(); return; }
    const from = figure.getBoundingClientRect();
    const scale = to.height / from.height;
    const dx = to.left + to.width / 2 - (from.left + from.width / 2);
    const dy = to.top - from.top;
    const animation = figure.animate([
      { transform: "none" },
      { transform: `translate(${dx * 0.6}px, ${dy * 0.6 - 30}px) scale(${(scale + 1) / 2})`, offset: 0.55 },
      { transform: `translate(${dx}px, ${dy}px) scale(${scale})` },
    ], { duration: 560, easing: "cubic-bezier(.45,0,.55,1)", fill: "forwards" });
    animation.onfinish = () => onClose();
  }, [source, reduced, onClose]);

  React.useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      const dialog = dialogRef.current;
      if (!dialog || dialog.contains(event.target as Node)) return;
      if (event.key === "Escape") { event.preventDefault(); dismiss(); }
      else if (event.key === "ArrowLeft" || event.key === "ArrowRight") turnTo(side === "front" ? "back" : "front");
      else if (event.key === "Tab") { const first = dialog.querySelector("button"); if (first) { event.preventDefault(); first.focus(); } }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [dismiss, turnTo, side]);

  const onKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Escape") { event.preventDefault(); dismiss(); return; }
    if (event.key === "ArrowLeft" || event.key === "ArrowRight") { turnTo(side === "front" ? "back" : "front"); return; }
    if (event.key !== "Tab") return;
    const controls = [...(dialogRef.current?.querySelectorAll("button") ?? [])].filter((node) => !node.disabled);
    const first = controls[0];
    const last = controls.at(-1);
    if (!first || !last) return;
    if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
    else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
  };

  const stage = (
    <div ref={figureRef} className="crh-figure">
      <div aria-hidden="true" className="crh-rod" style={{ top: `calc(-40vh + ${(HOOK_TOP / VB_H) * 100}%)` }} />
      <div
        className="crh-spin-area"
        onPointerDown={(event) => { const a = angle.current; a.dragging = true; a.startX = event.clientX; a.startAngle = a.value; cancelAnimationFrame(a.raf); a.raf = 0; a.last = 0; event.currentTarget.setPointerCapture(event.pointerId); }}
        onPointerMove={(event) => { const a = angle.current; if (!a.dragging) return; a.value = clamp(a.startAngle + (event.clientX - a.startX) * 0.45, a.startAngle - 220, a.startAngle + 220); if (spinRef.current) spinRef.current.style.transform = `rotateY(${a.value.toFixed(2)}deg)`; }}
        onPointerUp={() => { const a = angle.current; if (!a.dragging) return; a.dragging = false; const facing = (((a.value % 360) + 360) % 360); turnTo(facing > 90 && facing < 270 ? "back" : "front"); }}
        onPointerCancel={() => { angle.current.dragging = false; turnTo(side); }}
      >
        <div ref={spinRef} className="crh-fill crh-turn">
          {(["front", "back"] as const).map((face) => (
            <div key={face} className="crh-fill crh-face" style={{ transform: face === "back" ? "rotateY(180deg)" : undefined, ["--garment-color" as string]: color, ["--garment-under" as string]: mix(color, -0.42) }}>
              <Hanger uid={uid} side={face} kind={item.image ? null : kind} material={hanger} />
              {item.image
                ? <Photo src={(face === "back" ? item.backImage : undefined) ?? item.image} alt={face === "front" ? item.name : ""} full={hanger === "none"} />
                : <Fabric uid={uid} kind={kind} side={face} color={color} trim={trim} />}
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return createPortal(
    <div ref={dialogRef} role="dialog" aria-modal="true" aria-labelledby={titleId} className="crh-detail" data-crh-theme={theme} data-shown={shown || undefined} onKeyDown={onKeyDown}>
      <div aria-hidden="true" className="crh-detail-backdrop" onClick={dismiss} />
      <button ref={closeRef} type="button" onClick={dismiss} className="crh-detail-close">
        {labels.close}
        <svg aria-hidden="true" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"><path d="M3 3l10 10M13 3L3 13" /></svg>
      </button>
      <div className="crh-detail-grid">
        {stage}
        <div className="crh-detail-info">
          <p className="crh-detail-count">{String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}</p>
          <h3 id={titleId} className="crh-detail-title">{item.name}</h3>
          {item.description && <p className="crh-detail-text">{item.description}</p>}
          {item.details && item.details.length > 0 && (
            <ul className="crh-detail-chips">
              {item.details.map((detail) => <li key={detail}>{detail}</li>)}
            </ul>
          )}
          <div role="group" aria-label={`${labels.front} / ${labels.back}`} className="crh-detail-sides">
            {(["front", "back"] as const).map((face) => (
              <button key={face} type="button" aria-pressed={side === face} onClick={() => turnTo(face)}>
                {face === "front" ? labels.front : labels.back}
                <span aria-hidden="true" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>,
    container,
  );
}

export default ClothingRailHero;

const CRH_CSS = `
/* o que o projeto pode trocar com uma classe (posição, margem, fundo): na camada base, que vem antes das classes de
   componente e dos utilitários (Tailwind v4, Panda, Chakra) e perde para o CSS fora de camada (Tailwind v3, CSS Modules,
   CSS comum) */
@layer base {
  .crh-root { position: relative; width: 100%; margin: 0; background: var(--crh-bg); }
}

/* as cores: claro de fábrica, escuro com theme="dark". O detalhe aberto sai da arara (ele vai para o body ou para o
   <dialog> em volta), então leva as mesmas variáveis */
.crh-root, .crh-detail {
  --crh-bg: #ffffff;
  --crh-fg: #0a0a0a;
  --crh-muted: #737373;
  --crh-card: #ffffff;
  --crh-card-fg: #0a0a0a;
  --crh-border: #e5e5e5;
  --crh-ring: #a1a1a1;
  --crh-shadow: 0.16;
}
.crh-root[data-crh-theme="dark"], .crh-detail[data-crh-theme="dark"] {
  --crh-bg: #0a0a0a;
  --crh-fg: #fafafa;
  --crh-muted: #a1a1a1;
  --crh-card: #171717;
  --crh-card-fg: #fafafa;
  --crh-border: rgba(255, 255, 255, 0.1);
  --crh-ring: #737373;
  --crh-shadow: 0.6;
}

/* nada de texto herdado da página: a arara fica igual em qualquer projeto */
.crh-root, .crh-detail {
  box-sizing: border-box;
  color: var(--crh-fg);
  font-family: ui-sans-serif, system-ui, -apple-system, "SF Pro Text", "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  letter-spacing: normal;
  line-height: 1.5;
  text-align: left;
  text-transform: none;
  text-shadow: none;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.crh-root *, .crh-root *::before, .crh-root *::after,
.crh-detail *, .crh-detail *::before, .crh-detail *::after { box-sizing: border-box; }
.crh-root :is(p, h2, h3, ul), .crh-detail :is(p, h2, h3, ul) { margin: 0; }
.crh-root button, .crh-detail button {
  margin: 0;
  padding: 0;
  border: 0;
  background: none;
  color: inherit;
  font: inherit;
  letter-spacing: inherit;
  text-transform: none;
  -webkit-tap-highlight-color: transparent;
}

/* as colunas saem da largura da própria arara, não da tela */
.crh-root { isolation: isolate; overflow: hidden; container-type: inline-size; }
.crh-defs { position: absolute; width: 0; height: 0; overflow: hidden; }
.crh-glow {
  position: absolute;
  inset: 0;
  z-index: -10;
  pointer-events: none;
  background:
    radial-gradient(120% 70% at 18% 0%, color-mix(in oklab, var(--crh-fg) 7%, transparent), transparent 62%),
    linear-gradient(to bottom, transparent 55%, color-mix(in oklab, var(--crh-fg) 5%, transparent));
}

.crh-header {
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 32px 24px 0;
  text-align: center;
}
.crh-eyebrow {
  color: var(--crh-muted);
  font-size: 11px;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: 0.28em;
  text-transform: uppercase;
}
.crh-heading {
  font-size: 24px;
  font-weight: 500;
  line-height: 32px;
  letter-spacing: -0.025em;
  text-wrap: balance;
}
@container (min-width: 640px) {
  .crh-heading { font-size: 30px; line-height: 36px; }
}

/* a arara: o palco onde as peças correm */
.crh-stage {
  position: relative;
  width: 100%;
  margin-top: 20px;
  overflow-x: clip;
  touch-action: pan-y;
  user-select: none;
  -webkit-user-select: none;
}

/* o cano de metal escovado, com a sombra embaixo e os suportes nas pontas */
.crh-rail { position: absolute; left: 0; right: 0; z-index: 0; pointer-events: none; }
.crh-rail-shadow {
  position: absolute;
  left: 0;
  right: 0;
  height: 12px;
  border-radius: 999px;
  background: color-mix(in oklab, var(--crh-fg) 10%, transparent);
  filter: blur(5px);
}
.crh-rail-bar {
  position: absolute;
  inset: 0;
  border-radius: 999px;
  background: linear-gradient(to bottom, color-mix(in oklab, var(--crh-muted) 35%, white) 0%, white 18%, color-mix(in oklab, var(--crh-muted) 70%, white) 38%, var(--crh-muted) 62%, color-mix(in oklab, var(--crh-muted) 55%, black) 100%);
  box-shadow: 0 1px 0 color-mix(in oklab, var(--crh-fg) 18%, transparent);
}
.crh-rail-brush {
  position: absolute;
  inset: 0;
  border-radius: 999px;
  opacity: 0.4;
  mix-blend-mode: overlay;
  background: repeating-linear-gradient(90deg, transparent 0 2px, color-mix(in oklab, white 40%, transparent) 2px 3px, transparent 3px 7px);
}
.crh-rail-cap {
  position: absolute;
  top: 50%;
  width: 16px;
  height: 28px;
  border-radius: 3px;
  translate: 0 -50%;
  background: linear-gradient(to right, color-mix(in oklab, var(--crh-muted) 60%, white), var(--crh-muted) 55%, color-mix(in oklab, var(--crh-muted) 60%, black));
  box-shadow: 0 3px 6px color-mix(in oklab, var(--crh-fg) 18%, transparent);
}
.crh-rail-bolt {
  position: absolute;
  left: 50%;
  width: 4px;
  height: 4px;
  border-radius: 999px;
  translate: -50% 0;
  background: color-mix(in oklab, var(--crh-fg) 35%, transparent);
}

/* cada peça: um botão do tamanho da peça de frente, levado pelo cano */
.crh-garment {
  position: absolute;
  left: 0;
  display: block;
  border-radius: 12px;
  outline: none;
  cursor: pointer;
}
.crh-garment:focus-visible { outline: 2px solid var(--crh-ring); outline-offset: 4px; }
.crh-fill { position: absolute; inset: 0; display: block; }
.crh-blur { pointer-events: none; }
.crh-shadow { position: absolute; display: block; background: #000; opacity: var(--crh-shadow); }
.crh-box-full { inset: 0; }
.crh-box-hung { left: 0; right: 0; bottom: 0; top: 8%; }
.crh-turn { border-radius: 8px; transform-style: preserve-3d; }
.crh-face { backface-visibility: hidden; -webkit-backface-visibility: hidden; }
.crh-drape { transform-origin: top; transform: skewX(var(--drape, 0deg)); }
.crh-shade { position: absolute; display: block; pointer-events: none; background: #000; opacity: var(--shade, 0.2); }
.crh-art { position: absolute; inset: 0; display: block; width: 100%; height: 100%; overflow: visible; }
.crh-matte { color: color-mix(in oklab, var(--crh-fg) 85%, transparent); }
.crh-photo {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  display: block;
  width: 100%;
  max-width: none;
  margin: 0;
  object-fit: contain;
  object-position: top;
  pointer-events: none;
  user-select: none;
  -webkit-user-drag: none;
}
.crh-photo-full { top: 0; height: 100%; }
.crh-photo-hung { top: 8%; height: 92%; }

/* a etiqueta pendurada no gancho, que balança com a peça */
.crh-tag { position: absolute; left: 50%; display: block; pointer-events: none; transform-origin: top; }
.crh-tag-string {
  display: block;
  width: 1px;
  height: 14px;
  translate: 3px 0;
  background: color-mix(in oklab, var(--crh-fg) 35%, transparent);
}
.crh-tag-card {
  display: block;
  padding: 8px 6px 4px;
  border: 1px solid color-mix(in oklab, var(--crh-fg) 10%, transparent);
  border-radius: 3px;
  translate: 3px 0;
  background: var(--crh-card);
  color: var(--crh-card-fg);
  font-size: 9px;
  font-weight: 600;
  line-height: 1;
  letter-spacing: 0.025em;
  white-space: nowrap;
  box-shadow: 0 2px 6px color-mix(in oklab, var(--crh-fg) 18%, transparent);
}
.crh-tag-hole {
  position: absolute;
  top: 3px;
  left: 50%;
  width: 3px;
  height: 3px;
  border-radius: 999px;
  translate: -50% 0;
  background: color-mix(in oklab, var(--crh-fg) 30%, transparent);
}

/* os pontos do carrossel */
.crh-dots { position: relative; z-index: 10; display: flex; justify-content: center; gap: 6px; margin-top: 4px; }
.crh-root .crh-dot {
  width: 6px;
  height: 6px;
  border-radius: 999px;
  background: color-mix(in oklab, var(--crh-fg) 25%, transparent);
  outline: none;
  cursor: pointer;
  transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1), background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.crh-root .crh-dot:hover { background: color-mix(in oklab, var(--crh-fg) 45%, transparent); }
.crh-root .crh-dot[data-current] { width: 24px; background: var(--crh-fg); }
.crh-dot:focus-visible { box-shadow: 0 0 0 2px var(--crh-ring); }

/* a legenda e a chamada embaixo da arara */
.crh-foot {
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding: 16px 24px 32px;
  text-align: center;
}
.crh-caption { min-height: 52px; }
.crh-caption-title { font-size: 14px; font-weight: 500; line-height: 20px; animation: crh-in 0.3s ease; }
.crh-caption-text {
  max-width: 42ch;
  margin: 4px auto 0;
  color: var(--crh-muted);
  font-size: 13px;
  line-height: 1.625;
}
@keyframes crh-in { from { opacity: 0; } }

/* a peça de perto, por cima da página */
.crh-detail {
  position: fixed;
  inset: 0;
  z-index: 50;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  overflow-y: auto;
}
.crh-detail-backdrop {
  position: absolute;
  inset: 0;
  background: color-mix(in oklab, var(--crh-bg) 90%, transparent);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  opacity: 0;
  transition: opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.crh-detail[data-shown] .crh-detail-backdrop { opacity: 1; }
.crh-detail .crh-detail-close {
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 10;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 12px;
  border-radius: 999px;
  color: var(--crh-muted);
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: 0.025em;
  outline: none;
  cursor: pointer;
  opacity: 0;
  transition: opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1), color 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.crh-detail[data-shown] .crh-detail-close { opacity: 1; }
.crh-detail .crh-detail-close:hover { color: var(--crh-fg); }
.crh-detail-close:focus-visible { box-shadow: 0 0 0 2px var(--crh-ring); }
.crh-detail-close svg { display: block; width: 14px; height: 14px; }
.crh-detail-grid {
  position: relative;
  display: grid;
  align-items: center;
  gap: 40px;
  width: 100%;
  max-width: 1024px;
  padding-top: 40px;
}
@media (min-width: 768px) {
  .crh-detail-grid { grid-template-columns: minmax(0, 1fr) minmax(0, 352px); }
}
.crh-figure {
  position: relative;
  aspect-ratio: 200 / 310;
  height: min(62vh, 560px);
  max-height: 100%;
  margin: 0 auto;
  transform-origin: top;
}
.crh-rod {
  position: absolute;
  left: 50%;
  width: 3px;
  height: 40vh;
  border-radius: 999px;
  translate: -50% 0;
  background: linear-gradient(to right, color-mix(in oklab, var(--crh-muted) 50%, white), var(--crh-muted), color-mix(in oklab, var(--crh-muted) 50%, black));
}
.crh-spin-area { position: absolute; inset: 0; perspective: 1400px; touch-action: pan-y; cursor: grab; }
.crh-spin-area:active { cursor: grabbing; }
.crh-detail-info {
  display: flex;
  flex-direction: column;
  gap: 16px;
  text-align: center;
  opacity: 0;
  translate: 0 8px;
  transition: opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1) 0.15s, translate 0.5s cubic-bezier(0.4, 0, 0.2, 1) 0.15s;
}
.crh-detail[data-shown] .crh-detail-info { opacity: 1; translate: 0 0; }
.crh-detail-count {
  color: var(--crh-muted);
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  font-size: 11px;
  line-height: 16px;
  letter-spacing: 0.2em;
}
.crh-detail-title { font-size: 24px; font-weight: 500; line-height: 32px; letter-spacing: -0.025em; }
.crh-detail-text { color: var(--crh-muted); font-size: 14px; line-height: 1.625; }
.crh-detail-chips { display: flex; flex-wrap: wrap; justify-content: center; gap: 8px; padding: 0; list-style: none; }
.crh-detail-chips li {
  padding: 4px 12px;
  border: 1px solid var(--crh-border);
  border-radius: 999px;
  color: var(--crh-muted);
  font-size: 12px;
  line-height: 16px;
}
.crh-detail-sides { display: inline-flex; justify-content: center; gap: 24px; margin-top: 8px; }
.crh-detail-sides button {
  position: relative;
  padding-bottom: 6px;
  color: var(--crh-muted);
  font-size: 14px;
  line-height: 20px;
  outline: none;
  cursor: pointer;
  transition: color 0.15s cubic-bezier(0.4, 0, 0.2, 1);
}
.crh-detail-sides button:hover, .crh-detail-sides button[aria-pressed="true"] { color: var(--crh-fg); }
.crh-detail-sides button:focus-visible { box-shadow: 0 0 0 2px var(--crh-ring); }
.crh-detail-sides button span {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 1px;
  background: var(--crh-fg);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.crh-detail-sides button[aria-pressed="true"] span { transform: scaleX(1); }
@media (min-width: 640px) {
  .crh-detail-title { font-size: 30px; line-height: 36px; }
}
@media (min-width: 768px) {
  .crh-detail-info { text-align: left; }
  .crh-detail-chips, .crh-detail-sides { justify-content: flex-start; }
}

/* com o reduzir movimento do sistema, nada desliza */
@media (prefers-reduced-motion: reduce) {
  .crh-caption-title { animation: none; }
  .crh-detail-backdrop, .crh-detail .crh-detail-close, .crh-detail-info, .crh-detail-sides button span { transition: none; }
}
`;