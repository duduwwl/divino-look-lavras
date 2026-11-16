"use client";

import * as React from "react";
import { createPortal } from "react-dom";

export type GarmentKind = "tee" | "knit" | "hoodie" | "shirt" | "jacket" | "coat";
export interface RailGarment {
  id: string;
  name: string;
  description?: string;
  kind?: GarmentKind;
  color?: string;
  trim?: string;
  image?: string;
  backImage?: string;
  sideImage?: string;
  tag?: string;
  details?: string[];
  href?: string;
}
export interface ClothingRailHeroLabels { front: string; back: string; close: string; show: string }
export interface ClothingRailHeroProps extends Omit<React.ComponentProps<"section">, "children"> {
  items: RailGarment[];
  eyebrow?: string;
  heading?: string;
  caption?: string;
  action?: React.ReactNode;
  autoplay?: boolean;
  interval?: number;
  hanger?: "wood" | "matte" | "none";
  theme?: "light" | "dark";
  labels?: ClothingRailHeroLabels;
  onOpenChange?: (index: number | null) => void;
}

const defaultLabels = { front: "Frente", back: "Costas", close: "Fechar", show: "Mostrar" };

export function ClothingRailHero({ items, eyebrow, heading, caption, action, autoplay = false, interval = 2600, hanger = "wood", theme = "light", labels = defaultLabels, onOpenChange, className, ...rest }: ClothingRailHeroProps) {
  const [active, setActive] = React.useState<number | null>(null);
  const [focusIndex, setFocusIndex] = React.useState(0);
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);
  const [back, setBack] = React.useState(false);
  const [playing, setPlaying] = React.useState(autoplay);
  const [compact, setCompact] = React.useState(false);
  const [drag, setDrag] = React.useState<{ index: number; x: number; dx: number; moved: boolean } | null>(null);
  const root = React.useRef<HTMLElement>(null);
  const buttons = React.useRef<(HTMLButtonElement | null)[]>([]);
  const closeButton = React.useRef<HTMLButtonElement>(null);
  const originalOverflow = React.useRef("");
  const selected = active ?? 0;

  React.useEffect(() => {
    const node = root.current;
    if (!node) return;
    const observer = new ResizeObserver(([entry]) => setCompact((entry?.contentRect.width ?? 0) < 560));
    observer.observe(node);
    return () => observer.disconnect();
  }, []);
  React.useEffect(() => {
    if (!playing || !autoplay || !items.length || openIndex !== null) return;
    const timer = window.setInterval(() => setActive(i => i === null ? 0 : (i + 1) % items.length), interval);
    return () => window.clearInterval(timer);
  }, [playing, autoplay, items.length, openIndex, interval]);
  React.useEffect(() => {
    if (openIndex === null) return;
    originalOverflow.current = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButton.current?.focus();
    return () => { document.body.style.overflow = originalOverflow.current; };
  }, [openIndex]);

  const choose = (i: number) => { setPlaying(false); setActive(Math.max(0, Math.min(items.length - 1, i))); };
  const open = (i: number) => { choose(i); setBack(false); setOpenIndex(i); onOpenChange?.(i); };
  const close = () => { const i = openIndex; setOpenIndex(null); onOpenChange?.(null); if (i !== null) requestAnimationFrame(() => buttons.current[i]?.focus()); };
  const onRailKey = (event: React.KeyboardEvent) => {
    if (!["ArrowRight", "ArrowLeft", "Home", "End"].includes(event.key)) return;
    event.preventDefault();
    const next = event.key === "Home" ? 0 : event.key === "End" ? items.length - 1 : Math.max(0, Math.min(items.length - 1, (active ?? focusIndex) + (event.key === "ArrowRight" ? 1 : -1)));
    setFocusIndex(next); choose(next); buttons.current[next]?.focus();
  };
  const onDetailKey = (event: React.KeyboardEvent) => {
    if (event.key === "Escape") { event.preventDefault(); close(); }
    if (event.key === "ArrowLeft" || event.key === "ArrowRight") { event.preventDefault(); setBack(v => !v); }
    if (event.key === "Tab") {
      const controls = Array.from(event.currentTarget.querySelectorAll<HTMLButtonElement>("button"));
      if (event.shiftKey && document.activeElement === controls[0]) { event.preventDefault(); controls.at(-1)?.focus(); }
      if (!event.shiftKey && document.activeElement === controls.at(-1)) { event.preventDefault(); controls[0]?.focus(); }
    }
  };
  const current = active === null ? null : items[active];
  const detail = openIndex === null ? null : items[openIndex];

  return <section {...rest} ref={root} data-slot="clothing-rail-hero" data-crh-theme={theme} className={["crh-root", className].filter(Boolean).join(" ")}>
    <style>{CSS}</style>
    {(eyebrow || heading) && <header className="crh-header">{eyebrow && <p className="crh-eyebrow">{eyebrow}</p>}{heading && <h2>{heading}</h2>}</header>}
    <div className={compact ? "crh-stage crh-mobile" : "crh-stage"} role="group" aria-label={heading ?? "Arara de roupas"} onKeyDown={onRailKey} onMouseLeave={() => { if (!compact && !drag) setActive(null); }}>
      <div className="crh-rod" aria-hidden="true" />
      <div className="crh-items" style={{ "--crh-count": items.length } as React.CSSProperties}>
        {items.map((item, i) => {
          const isActive = selected === i && (compact || active !== null);
          const dx = drag?.index === i ? drag.dx : 0;
          return <button key={item.id} ref={node => { buttons.current[i] = node; }} type="button" className="crh-item" data-active={isActive || undefined} tabIndex={i === (active ?? focusIndex) ? 0 : -1} aria-label={item.name} aria-pressed={isActive}
            style={{ "--crh-drag": `${dx}px`, "--crh-color": item.color ?? "#b9a99a" } as React.CSSProperties}
            onFocus={() => { setFocusIndex(i); choose(i); }}
            onMouseEnter={() => { if (!compact && !drag) choose(i); }}
            onPointerDown={event => { if (event.button === 0) setDrag({ index: i, x: event.clientX, dx: 0, moved: false }); }}
            onPointerMove={event => { if (drag?.index !== i) return; const dx = event.clientX - drag.x; if (Math.abs(dx) > 7 && !drag.moved) event.currentTarget.setPointerCapture(event.pointerId); setDrag({ ...drag, dx, moved: drag.moved || Math.abs(dx) > 7 }); }}
            onPointerUp={event => { if (drag?.index !== i) return; if (compact && drag.moved && Math.abs(drag.dx) > 35) choose(selected + (drag.dx < 0 ? 1 : -1)); else if (!drag.moved) { if (compact && active !== i) choose(i); else open(i); } setDrag(null); event.preventDefault(); }}
            onPointerCancel={() => setDrag(null)}
            onClick={event => { if (event.detail === 0) open(i); }}>
            <span className="crh-hook" aria-hidden="true" /><span className="crh-hanger" aria-hidden="true" data-hanger={hanger} />
            {item.image ? <img src={item.image} alt="" draggable={false} /> : <span className="crh-illustration" aria-hidden="true" />}
            {item.tag && <span className="crh-tag">{item.tag}</span>}
          </button>;
        })}
      </div>
    </div>
    {compact && items.length > 1 && <div className="crh-dots" role="group" aria-label={labels.show}>{items.map((item, i) => <button key={item.id} type="button" aria-label={`${labels.show} ${item.name}`} aria-current={selected === i} onClick={() => choose(i)} />)}</div>}
    <div className="crh-foot"><div className="crh-caption" aria-live="polite"><strong>{current?.name ?? caption}</strong>{current?.description && <p>{current.description}</p>}</div>{action}</div>
    {detail && typeof document !== "undefined" && createPortal(<div className="crh-detail" data-crh-theme={theme} role="dialog" aria-modal="true" aria-label={detail.name} onKeyDown={onDetailKey}>
      <div className="crh-backdrop" onClick={close} /><button ref={closeButton} className="crh-close" type="button" onClick={close}>{labels.close} ×</button>
      <div className="crh-detail-content"><div className="crh-detail-photo" onPointerDown={event => event.currentTarget.setPointerCapture(event.pointerId)} onPointerUp={event => { if (Math.abs(event.movementX) > 15) setBack(v => !v); }}><span className="crh-detail-hook" aria-hidden="true" /><img src={(back ? detail.backImage : undefined) ?? detail.image} alt={detail.name} draggable={false} /></div>
        <div className="crh-detail-info"><span className="crh-counter">{String(openIndex! + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}</span><h3>{detail.name}</h3>{detail.description && <p>{detail.description}</p>}{detail.details && <ul>{detail.details.map(d => <li key={d}>{d}</li>)}</ul>}<div className="crh-sides"><button type="button" aria-pressed={!back} onClick={() => setBack(false)}>{labels.front}</button><button type="button" aria-pressed={back} onClick={() => setBack(true)}>{labels.back}</button></div>{detail.href && <a href={detail.href}>Ver produto</a>}</div></div>
    </div>, document.body)}
  </section>;
}

export default ClothingRailHero;

const CSS = `
@layer base { .crh-root { position:relative; width:100%; margin:0; background:var(--crh-bg); } }
.crh-root,.crh-detail { --crh-bg:#fff; --crh-fg:#191716; --crh-muted:#777; --crh-line:#999; color:var(--crh-fg); font-family:ui-sans-serif,system-ui,sans-serif; box-sizing:border-box; }
.crh-root[data-crh-theme=dark],.crh-detail[data-crh-theme=dark] { --crh-bg:#111; --crh-fg:#fafafa; --crh-muted:#aaa; --crh-line:#aaa; }
.crh-root *,.crh-detail * { box-sizing:border-box; }
.crh-root { isolation:isolate; overflow:hidden; padding:48px 20px 24px; }
.crh-header { text-align:center; margin:0 auto 28px; }
.crh-header p,.crh-header h2,.crh-caption p { margin:0; }
.crh-eyebrow { text-transform:uppercase; letter-spacing:.24em; font-size:11px; color:var(--crh-muted); }
.crh-header h2 { margin-top:7px; font-size:clamp(23px,3vw,34px); line-height:1.2; font-weight:500; }
.crh-stage { position:relative; max-width:1400px; height:clamp(300px,34vw,450px); margin:auto; touch-action:pan-y; }
.crh-rod { position:absolute; left:1%; right:1%; top:22px; height:10px; border-radius:20px; background:linear-gradient(#ddd,#fff 25%,#999 55%,#777); box-shadow:0 4px 6px #0002; }
.crh-rod:before,.crh-rod:after { content:""; position:absolute; top:-9px; width:14px; height:28px; border-radius:3px; background:linear-gradient(90deg,#aaa,#eee,#777); }
.crh-rod:before { left:0; } .crh-rod:after { right:0; }
.crh-items { position:absolute; inset:0 16px; display:flex; align-items:flex-start; justify-content:center; }
.crh-item { position:relative; flex:1 1 0; min-width:0; max-width:130px; height:100%; padding:0; border:0; background:transparent; color:inherit; cursor:pointer; transform:translateX(var(--crh-drag)) rotateY(-66deg); transform-origin:50% 12%; transition:transform .55s cubic-bezier(.17,.8,.25,1),flex-grow .55s cubic-bezier(.17,.8,.25,1); }
.crh-item[data-active] { flex-grow:2.6; transform:translateX(var(--crh-drag)) rotateY(0deg); z-index:3; }
.crh-item:focus-visible { outline:2px solid var(--crh-line); outline-offset:3px; }
.crh-item img { position:absolute; left:0; top:44px; width:100%; height:calc(100% - 52px); object-fit:contain; object-position:top center; filter:drop-shadow(3px 7px 5px #0003); pointer-events:none; }
.crh-hook { position:absolute; z-index:2; top:18px; left:50%; width:3px; height:39px; border-radius:4px; background:linear-gradient(90deg,#666,#eee,#888); }
.crh-hanger { position:absolute; left:18%; top:50px; width:64%; height:18px; border-top:7px solid #a67c57; border-radius:50% 50% 0 0; }
.crh-hanger[data-hanger=matte] { border-color:#555; } .crh-hanger[data-hanger=none] { display:none; }
.crh-illustration { position:absolute; top:65px; left:15%; width:70%; height:70%; background:var(--crh-color); clip-path:polygon(25% 0,75% 0,100% 16%,84% 30%,80% 100%,20% 100%,16% 30%,0 16%); filter:drop-shadow(4px 6px 4px #0002); }
.crh-tag { position:absolute; z-index:5; top:69px; left:56%; padding:5px 7px; background:white; border:1px solid #ddd; color:#222; font-size:10px; white-space:nowrap; transform:rotate(-12deg); box-shadow:0 2px 5px #0002; }
.crh-foot { display:flex; flex-direction:column; align-items:center; gap:18px; min-height:90px; padding-top:15px; text-align:center; }
.crh-caption { min-height:48px; font-size:14px; } .crh-caption strong { font-weight:600; } .crh-caption p { color:var(--crh-muted); font-size:13px; }
.crh-dots { display:flex; justify-content:center; gap:7px; margin-top:5px; } .crh-dots button { width:7px; height:7px; padding:0; border:0; border-radius:9px; background:#bbb; } .crh-dots button[aria-current=true] { width:24px; background:var(--crh-fg); }
.crh-detail { position:fixed; z-index:100; inset:0; display:flex; align-items:center; justify-content:center; padding:24px; overflow:auto; }
.crh-backdrop { position:absolute; inset:0; background:color-mix(in srgb,var(--crh-bg) 92%,transparent); backdrop-filter:blur(22px); }
.crh-close { position:absolute; z-index:2; right:25px; top:18px; padding:8px; border:0; background:none; color:var(--crh-fg); cursor:pointer; }
.crh-detail-content { position:relative; display:grid; grid-template-columns:minmax(0,1fr) minmax(260px,360px); align-items:center; gap:48px; width:min(100%,1000px); }
.crh-detail-photo { position:relative; height:min(70vh,600px); } .crh-detail-photo img { width:100%; height:100%; object-fit:contain; filter:drop-shadow(8px 15px 12px #0002); }
.crh-detail-hook { position:absolute; left:50%; bottom:92%; width:3px; height:40vh; background:linear-gradient(90deg,#999,#eee,#777); }
.crh-detail-info h3 { font-size:clamp(26px,4vw,40px); font-weight:500; margin:12px 0; } .crh-detail-info p { color:var(--crh-muted); line-height:1.6; }
.crh-counter { font:11px ui-monospace,monospace; letter-spacing:.18em; color:var(--crh-muted); }
.crh-detail-info ul { list-style:none; display:flex; flex-wrap:wrap; gap:6px; padding:0; margin:20px 0; } .crh-detail-info li { padding:5px 11px; border:1px solid #ddd; border-radius:20px; font-size:12px; }
.crh-sides { display:flex; gap:20px; } .crh-sides button { padding:5px 0; border:0; border-bottom:1px solid transparent; background:none; color:var(--crh-muted); cursor:pointer; } .crh-sides button[aria-pressed=true] { color:var(--crh-fg); border-color:currentColor; }
.crh-detail-info a { display:inline-block; margin-top:28px; padding:11px 18px; background:var(--crh-fg); color:var(--crh-bg); text-decoration:none; }
@media(max-width:559px) { .crh-root { padding-inline:0; } .crh-header,.crh-foot { padding-inline:20px; } .crh-stage { height:370px; overflow:hidden; } .crh-rod { top:15px; } .crh-items { left:50%; width:200px; transform:translateX(-50%); } .crh-item { position:absolute; left:0; width:200px; max-width:none; opacity:0; pointer-events:none; transform:translateX(calc((var(--crh-index, 0) - var(--crh-selected, 0))*200px)) rotateY(-65deg); } .crh-item[data-active] { opacity:1; pointer-events:auto; transform:translateX(var(--crh-drag)) rotateY(0); } .crh-item img { top:38px; } .crh-detail-content { display:block; } .crh-detail-photo { height:50vh; } .crh-detail-info { text-align:center; } .crh-detail-info ul,.crh-sides { justify-content:center; } }
@media(prefers-reduced-motion:reduce) { .crh-item,.crh-dots button { transition:none; } .crh-item img { filter:none; } }
`;

