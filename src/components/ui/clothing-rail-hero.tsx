        <g filter={`url(#${uid}-soft)`} fill="none" strokeLinecap="round">
          {art.folds.map((d) => <path key={d} d={d} stroke="black" strokeOpacity="0.22" strokeWidth="4" />)}
          {art.folds.map((d) => <path key={`${d}-hi`} d={d} stroke="white" strokeOpacity="0.1" strokeWidth="2" transform="translate(2.2 0)" />)}
          {art.sleeves.map((d) => <path key={`${d}-edge`} d={d} stroke="black" strokeOpacity="0.2" strokeWidth="3" />)}
        </g>
        <rect width={VB_W} height={VB_H} fill={`url(#${uid}-volume)`} />
        <rect width={VB_W} height={VB_H} fill={`url(#${uid}-drape)`} />
        <rect width={VB_W} height={VB_H} filter={`url(#${uid}-grain)`} opacity="0.16" style={{ mixBlendMode: "multiply" }} />
      </g>
      <g fill="none" strokeLinecap="round" strokeLinejoin="round">
        {art.seams.map((d) => <path key={d} d={d} stroke="black" strokeOpacity="0.22" strokeWidth="0.8" />)}
        {art.stitches.map((d) => <path key={d} d={d} stroke={mix(color, 0.35)} strokeOpacity="0.5" strokeWidth="0.6" strokeDasharray="1.6 1.4" />)}
        {art.cords?.map((d) => <path key={d} d={d} stroke={trim} strokeWidth="1.8" />)}
      </g>
      {art.cords?.map((d) => {
        const end = d.trim().split(" ").at(-1)?.split(",").map(Number) ?? [0, 0];
        return <rect key={`${d}-tip`} x={(end[0] ?? 0) - 1.4} y={(end[1] ?? 0) - 1} width="2.8" height="6" rx="1" fill={mix(trim, -0.3)} />;
      })}
      {art.buttons?.map(([x, y]) => (
        <g key={`${x}-${y}`}>
          <circle cx={x} cy={y} r="2.6" fill={mix(trim, -0.15)} />
          <circle cx={(x ?? 0) - 0.6} cy={(y ?? 0) - 0.7} r="0.9" fill="white" fillOpacity="0.45" />
        </g>
      ))}
    </svg>
  );
}

function SideArt({ uid, kind, color, trim }: { uid: string; kind: GarmentKind; color: string; trim: string }) {
  const { body, sleeve, hood, cuff } = sideShapes(kind);
  const knitted = kind === "knit";
  const soft = `url(#${uid}-soft)`;
  const hem = SIDE[kind].hem;
  return (
    <svg aria-hidden="true" viewBox={`0 0 ${VB_W} ${VB_H}`} preserveAspectRatio="xMidYMin meet" className="crh-art">
      <g filter={`url(#${uid}-cloth)`}>
        {hood && <path d={hood} fill={mix(color, -0.14)} />}
        {hood && <path d={hood} fill="none" stroke="black" strokeOpacity="0.2" strokeWidth="1.2" />}
        <path d={body} fill={color} />
        <g clipPath={`url(#${uid}-sb-${kind})`}>
          {knitted && <rect width={VB_W} height={VB_H} fill={`url(#${uid}-knit)`} />}
          <g filter={soft} fill="none" strokeLinecap="round">
            <path d={`M90,${cuff + 10} C87,150 92,190 88,${hem - 4}`} stroke="black" strokeOpacity="0.24" strokeWidth="2.6" />
            <path d={`M92,${cuff + 10} C89,150 94,190 90,${hem - 4}`} stroke="white" strokeOpacity="0.14" strokeWidth="1.2" />
            <path d={`M106,${cuff + 6} C109,140 104,186 108,${hem - 2}`} stroke="black" strokeOpacity="0.17" strokeWidth="2.2" />
            <path d={`M107.6,${cuff + 6} C110.6,140 105.6,186 109.6,${hem - 2}`} stroke="white" strokeOpacity="0.1" strokeWidth="1" />
            <path d={`M99,${cuff + 30} C97,170 101,205 98,${hem - 2}`} stroke="black" strokeOpacity="0.1" strokeWidth="2" />
            <path d={`M112,${cuff + 40} C113,170 111,200 113,${hem - 10}`} stroke="black" strokeOpacity="0.12" strokeWidth="1.6" />
            <path d={`M84,${cuff + 50} C86,160 85,200 86,${hem - 6}`} stroke="white" strokeOpacity="0.2" strokeWidth="1.4" />
            <path d={`M80,${cuff + 6} C90,${cuff + 12} 110,${cuff + 12} 120,${cuff + 7}`} stroke="black" strokeOpacity="0.4" strokeWidth="6" />
            <path d={`M84,${hem + 1} C92,${hem + 6} 108,${hem + 6} 116,${hem + 1}`} stroke="black" strokeOpacity="0.32" strokeWidth="6" />
          </g>
          <rect width={VB_W} height={VB_H} fill={`url(#${uid}-sidevol)`} />
          <rect width={VB_W} height={VB_H} fill={`url(#${uid}-drape)`} />
          <rect width={VB_W} height={VB_H} filter={`url(#${uid}-grain)`} opacity="0.16" style={{ mixBlendMode: "multiply" }} />
        </g>
        <path d={sleeve} fill={color} />
        <g clipPath={`url(#${uid}-ss-${kind})`}>
          {knitted && <rect width={VB_W} height={VB_H} fill={`url(#${uid}-knit)`} />}
          <g filter={soft} fill="none" strokeLinecap="round">
            <path d={`M91,62 C88,78 90,${cuff - 14} 91,${cuff}`} stroke="black" strokeOpacity="0.16" strokeWidth="2.6" />
            <path d={`M92.6,62 C89.6,78 91.6,${cuff - 14} 92.6,${cuff}`} stroke="white" strokeOpacity="0.12" strokeWidth="1.1" />
            <path d={`M109,58 C112,76 110,${cuff - 14} 109,${cuff}`} stroke="black" strokeOpacity="0.2" strokeWidth="2.6" />
            <path d={`M86,72 C94,80 104,86 115,${cuff - 10}`} stroke="black" strokeOpacity="0.1" strokeWidth="2.4" />
            <path d="M84,53 C92,49 108,49 116,53" stroke="black" strokeOpacity="0.24" strokeWidth="3.6" />
            <path d={`M81,${cuff - 2} C92,${cuff + 4} 108,${cuff + 5} 119,${cuff + 2}`} stroke="black" strokeOpacity="0.34" strokeWidth="3.2" />
            <path d={`M85,60 C84,80 85,${cuff - 20} 85,${cuff - 4}`} stroke="white" strokeOpacity="0.22" strokeWidth="1.4" />
            <ellipse cx="94" cy="47.5" rx="6" ry="2.4" fill="white" fillOpacity="0.22" stroke="none" />
          </g>
          <rect width={VB_W} height={VB_H} fill={`url(#${uid}-sidevol)`} />
          <rect width={VB_W} height={VB_H} fill={`url(#${uid}-drape)`} />
          <rect width={VB_W} height={VB_H} filter={`url(#${uid}-grain)`} opacity="0.16" style={{ mixBlendMode: "multiply" }} />
        </g>
        <path d={`M82,${cuff + 1} C92,${cuff + 6} 108,${cuff + 7} 118,${cuff + 4}`} fill="none" stroke={mix(color, 0.35)} strokeOpacity="0.45" strokeWidth="0.6" strokeDasharray="1.6 1.4" />
        <path d={`M86,${hem - 3} C92,${hem + 1} 109,${hem + 1} 115,${hem - 3}`} fill="none" stroke={mix(color, 0.35)} strokeOpacity="0.4" strokeWidth="0.6" strokeDasharray="1.6 1.4" />
      </g>
      <ellipse cx="100" cy="46" rx="10" ry="3.2" fill={trim} />
      <ellipse cx="100" cy="46" rx="10" ry="3.2" fill={`url(#${uid}-rib)`} />
      <ellipse cx="100" cy="46" rx="10" ry="3.2" fill="none" stroke="black" strokeOpacity="0.2" strokeWidth="0.6" />
    </svg>
  );
}

function Photo({ src, alt, full }: { src: string; alt: string; full: boolean }) {
  return <img src={src} alt={alt} draggable={false} className={`crh-photo ${full ? "crh-photo-full" : "crh-photo-hung"}`} />;
}

// O React 19 sobe uma <style> com href e precedence para o <head>, uma vez só para todas as araras. O React 18 não
// conhece isso: lá ela vai dentro da arara, escondida e com o CSS cru, porque como filho de texto o SSR do 18 escaparia
// as aspas e quebraria os seletores.
const HOISTS_STYLES = Number(React.version.split(".")[0]) >= 19;

function ClothingRailStyles() {
  if (HOISTS_STYLES) {
    const hoist = { href: "clothing-rail-hero", precedence: "default" } as React.StyleHTMLAttributes<HTMLStyleElement>;
    return <style {...hoist}>{CRH_CSS}</style>;
  }
  return <style hidden dangerouslySetInnerHTML={{ __html: CRH_CSS }} />;
}

type Sim = {
  x: number[]; vx: number[]; tx: number[]; px: number[];
  turn: number[]; vturn: number[]; tturn: number[];
  swing: number[]; vswing: number[];
  tag: number[]; vtag: number[];
  drag: number; grab: number; free: number; last: number; raf: number;
};

function emptySim(): Sim {
  return { x: [], vx: [], tx: [], px: [], turn: [], vturn: [], tturn: [], swing: [], vswing: [], tag: [], vtag: [], drag: -1, grab: 0, free: 0, last: 0, raf: 0 };
}

function footprint(h: number, angle: number, sideW = 0.4) {
  const e = clamp(1 - angle / REST, 0, 1);
  const ease = e * e * (3 - 2 * e);
  return h * ASPECT * (sideW + (0.94 - sideW) * ease);
}

export function ClothingRailHero({
  items,
  eyebrow,
  heading,
  caption,
  action,
  autoplay = false,
  interval = 2600,
  hanger = "wood",
  theme = "light",
  labels = DEFAULT_LABELS,
  onOpenChange,
  className,
  ...rest
}: ClothingRailHeroProps) {
  const uid = React.useId().replace(/[^a-zA-Z0-9_-]/g, "");
  const count = items.length;
  const stageRef = React.useRef(null as HTMLDivElement | null);
  const slots = React.useRef([] as (HTMLButtonElement | null)[]);
  const swings = React.useRef([] as (HTMLSpanElement | null)[]);
  const turns = React.useRef([] as (HTMLSpanElement | null)[]);
  const sides = React.useRef([] as (HTMLSpanElement | null)[]);
  const drapes = React.useRef([] as (HTMLSpanElement | null)[]);
  const shades = React.useRef([] as (HTMLSpanElement | null)[]);
  const shadows = React.useRef([] as (HTMLSpanElement | null)[]);
  const tags = React.useRef([] as (HTMLSpanElement | null)[]);
  const sim = React.useRef(emptySim());
  const [size, setSize] = React.useState({ width: 0, h: 300, carousel: false });
  const [active, setActive] = React.useState(null as number | null);
  const [focusIndex, setFocusIndex] = React.useState(0);
  const [openIndex, setOpenIndex] = React.useState(null as number | null);
  const [reduced, setReduced] = React.useState(false);
  const [playing, setPlaying] = React.useState(autoplay);
  const [lifted, setLifted] = React.useState(null as number | null);
  const returnFocus = React.useRef(null as number | null);
  const pendingOpen = React.useRef(-1);
  const pointer = React.useRef({ id: -1, index: -1, x: 0, y: 0, t: 0, moved: false, kind: "", swipe: 0, lastX: 0, lastT: 0, v: 0 });
  const sideWidths = React.useMemo(() => items.map((item) => (item.image ? (item.sideImage ? 0.3 : 0.4) : SIDE[item.kind ?? "tee"].width)), [items]);
  const live = React.useRef({ active: null as number | null, size, reduced, count, openIndex: null as number | null, carouselIndex: 0, sideWidths });
  live.current = { ...live.current, active, size, reduced, count, openIndex, sideWidths };

  const carouselIndex = size.carousel ? (active ?? live.current.carouselIndex) : null;

  React.useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  React.useEffect(() => { setPlaying(autoplay); }, [autoplay]);

  React.useLayoutEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;
    const measure = (width: number) => {
      const sideW = live.current.sideWidths.reduce((sum, w) => sum + w, 0) / Math.max(1, live.current.sideWidths.length);
      const restK = footprint(1, REST, sideW) + GAP;
      const activeK = footprint(1, 0, sideW) + GAP;
      const fit = (width - 24) / (count * restK + (activeK - restK));
      const carousel = fit < MIN_WIDE_H;
      const h = carousel ? Math.min(CAROUSEL_H, Math.max(220, width * 0.86)) : Math.min(MAX_H, fit);
      setSize((old) => (Math.abs(old.width - width) < 0.5 && old.carousel === carousel && Math.abs(old.h - h) < 0.5 ? old : { width, h: Math.round(h), carousel }));
    };
    measure(stage.clientWidth);
    const observer = new ResizeObserver((entries) => { const box = entries[0]; if (box) measure(box.contentRect.width); });
    observer.observe(stage);
    return () => observer.disconnect();
  }, [count]);

  const targets = React.useCallback((h: number, width: number, carousel: boolean, front: number | null) => {
    const feet = items.map((_, i) => footprint(h, i === front ? 0 : REST, sideWidths[i]) + h * GAP);
    if (carousel) {
      const centre = front ?? 0;
      const xs = feet.map(() => 0);
      xs[centre] = width / 2;
      for (let i = centre + 1; i < feet.length; i++) xs[i] = (xs[i - 1] ?? 0) + ((feet[i - 1] ?? 0) + (feet[i] ?? 0)) / 2;
      for (let i = centre - 1; i >= 0; i--) xs[i] = (xs[i + 1] ?? 0) - ((feet[i + 1] ?? 0) + (feet[i] ?? 0)) / 2;
      return xs;
    }
    const total = feet.reduce((sum, f) => sum + f, 0);
    let cursor = (width - total) / 2;
    return feet.map((f) => { const x = cursor + f / 2; cursor += f; return x; });
  }, [items, sideWidths]);

  const paint = React.useCallback((i: number) => {
    const s = sim.current;
    const { h } = live.current.size;
    const w = h * ASPECT;
    const slot = slots.current[i];
    if (!slot) return;
    const angle = s.turn[i] ?? REST;
    const swing = s.swing[i] ?? 0;
    slot.style.transform = `translate3d(${((s.x[i] ?? 0) - w / 2).toFixed(2)}px,0,0)`;
    const sw = swings.current[i];
    if (sw) sw.style.transform = `rotate(${swing.toFixed(3)}deg)`;
    const e = clamp(1 - angle / REST, 0, 1);
    const tu = turns.current[i];
    const sd = sides.current[i];
    if (tu) {
      tu.style.transform = `perspective(${PERSPECTIVE}px) rotateY(${angle.toFixed(2)}deg)`;
      tu.style.opacity = sd ? clamp((e - 0.44) / 0.12, 0, 1).toFixed(3) : "1";
    }
    if (sd) {
      sd.style.opacity = clamp((0.56 - e) / 0.12, 0, 1).toFixed(3);
      sd.style.transform = `perspective(${PERSPECTIVE}px) rotateY(${(Math.min(1, e * 2) * -84).toFixed(2)}deg)`;
    }
    const lag = clamp(-(s.vswing[i] ?? 0) * 0.018, -5, 5);
    const dr = drapes.current[i];
    if (dr) dr.style.setProperty("--drape", `${lag.toFixed(3)}deg`);
    const sh = shades.current[i];
    if (sh) sh.style.setProperty("--shade", (1 - lambert(angle)).toFixed(3));
    const shadow = shadows.current[i];
    if (shadow) shadow.style.transform = `translate3d(${(w * 0.05).toFixed(1)}px, ${(h * 0.035).toFixed(1)}px, 0) scaleX(${Math.max(0.12, Math.abs(Math.cos((angle * Math.PI) / 180))).toFixed(3)})`;
    const tag = tags.current[i];
    if (tag) tag.style.transform = `rotate(${(-12 + (s.tag[i] ?? 0)).toFixed(2)}deg)`;
  }, []);

  const step = React.useCallback((now: number) => {
    const s = sim.current;
    const n = live.current.count;
    const dt = s.last ? Math.min(0.034, (now - s.last) / 1000) : 1 / 60;
    s.last = now;
    const { h, width, carousel } = live.current.size;
    let busy = false;
    const sub = 2;
    const sdt = dt / sub;
    for (let k = 0; k < sub; k++) {
      for (let i = 0; i < n; i++) {
        const before = s.vx[i] ?? 0;
        if (i !== s.drag) {
          const restoring = now > s.free;
          const stiff = restoring ? 130 : 0;
          const damp = restoring ? 2 * Math.sqrt(130) * 0.86 : 3.2;
          const ax = -stiff * ((s.x[i] ?? 0) - (s.tx[i] ?? 0)) - damp * before;
          s.vx[i] = before + ax * sdt;
          s.x[i] = (s.x[i] ?? 0) + (s.vx[i] ?? 0) * sdt;
        }
        const accel = ((s.vx[i] ?? 0) - before) / sdt;
        const ta = -150 * ((s.turn[i] ?? 0) - (s.tturn[i] ?? 0)) - 2 * Math.sqrt(150) * 0.78 * (s.vturn[i] ?? 0);
        s.vturn[i] = (s.vturn[i] ?? 0) + ta * sdt;
        s.turn[i] = (s.turn[i] ?? 0) + (s.vturn[i] ?? 0) * sdt;
        const sa = -24 * (s.swing[i] ?? 0) - 2.1 * (s.vswing[i] ?? 0) - clamp(accel, -6000, 6000) * 0.0045;
        s.vswing[i] = (s.vswing[i] ?? 0) + sa * sdt;
        s.swing[i] = clamp((s.swing[i] ?? 0) + (s.vswing[i] ?? 0) * sdt, -12, 12);
        const tagA = -46 * ((s.tag[i] ?? 0) - (s.swing[i] ?? 0) * 0.6) - 3.4 * (s.vtag[i] ?? 0) - (s.vswing[i] ?? 0) * 0.9;
        s.vtag[i] = (s.vtag[i] ?? 0) + tagA * sdt;
        s.tag[i] = clamp((s.tag[i] ?? 0) + (s.vtag[i] ?? 0) * sdt, -30, 30);
      }
      for (let pass = 0; pass < 2; pass++) {
        for (let i = 0; i < n - 1; i++) {
          const a = s.x[i] ?? 0;
          const b = s.x[i + 1] ?? 0;
          const minGap = (footprint(h, s.turn[i] ?? REST, live.current.sideWidths[i]) + footprint(h, s.turn[i + 1] ?? REST, live.current.sideWidths[i + 1])) / 2 + h * 0.012;
          const overlap = minGap - (b - a);
          if (overlap <= 0) continue;
          if (i === s.drag) s.x[i + 1] = b + overlap;
          else if (i + 1 === s.drag) s.x[i] = a - overlap;
          else { s.x[i] = a - overlap / 2; s.x[i + 1] = b + overlap / 2; }
          const va = s.vx[i] ?? 0;
          const vb = s.vx[i + 1] ?? 0;
          if (va > vb) {
            const shared = (va + vb) / 2;
            if (i !== s.drag) s.vx[i] = shared;
            if (i + 1 !== s.drag) s.vx[i + 1] = shared;
          }
        }
      }
      if (!carousel && n > 0) {
        const edge = h * 0.06;
        const first = edge + footprint(h, s.turn[0] ?? REST, live.current.sideWidths[0]) / 2;
        const last = width - edge - footprint(h, s.turn[n - 1] ?? REST, live.current.sideWidths[n - 1]) / 2;
        if ((s.x[0] ?? 0) < first) { s.x[0] = first; s.vx[0] = Math.abs(s.vx[0] ?? 0) * 0.3; }
        if ((s.x[n - 1] ?? 0) > last) { s.x[n - 1] = last; s.vx[n - 1] = -Math.abs(s.vx[n - 1] ?? 0) * 0.3; }
      }
    }
    for (let i = 0; i < n; i++) {
      paint(i);
      if (Math.abs((s.vx[i] ?? 0)) > 0.4 || (now > s.free && Math.abs((s.x[i] ?? 0) - (s.tx[i] ?? 0)) > 0.25) || Math.abs((s.turn[i] ?? 0) - (s.tturn[i] ?? 0)) > 0.05 || Math.abs(s.vturn[i] ?? 0) > 0.05 || Math.abs(s.swing[i] ?? 0) > 0.02 || Math.abs(s.vswing[i] ?? 0) > 0.05 || Math.abs((s.tag[i] ?? 0)) > 0.05 || Math.abs(s.vtag[i] ?? 0) > 0.08) busy = true;
    }
    if (s.drag >= 0 || now < s.free) busy = true;
    if (busy) s.raf = requestAnimationFrame(step);
    else {
      s.raf = 0; s.last = 0;
      for (let i = 0; i < n; i++) { if (now > s.free) s.x[i] = s.tx[i] ?? 0; s.swing[i] = 0; s.vswing[i] = 0; s.tag[i] = 0; s.vtag[i] = 0; paint(i); }
    }
  }, [paint]);

  const kick = React.useCallback(() => {
    const s = sim.current;
    if (live.current.reduced) {
      for (let i = 0; i < live.current.count; i++) { s.x[i] = s.tx[i] ?? 0; s.turn[i] = s.tturn[i] ?? REST; s.vx[i] = 0; s.vturn[i] = 0; s.swing[i] = 0; s.vswing[i] = 0; paint(i); }
      return;
    }
    if (!s.raf) { s.last = 0; s.raf = requestAnimationFrame(step); }
  }, [paint, step]);

  const impulse = React.useCallback((i: number, amount: number) => {
    const s = sim.current;
    if (live.current.reduced || i < 0 || i >= live.current.count) return;
    s.vswing[i] = (s.vswing[i] ?? 0) + amount;
    kick();
  }, [kick]);

  React.useLayoutEffect(() => {
    if (!size.width) return;
    const s = sim.current;
    const front = size.carousel ? (active ?? live.current.carouselIndex) : active;
    const xs = targets(size.h, size.width, size.carousel, front);
    const fresh = s.x.length !== count;
    for (let i = 0; i < count; i++) {
      s.tx[i] = (xs[i] ?? 0) + (size.carousel ? pointer.current.swipe : 0);
      s.tturn[i] = i === front ? 0 : REST;
      if (fresh || reduced) {
        s.x[i] = s.tx[i] ?? 0; s.vx[i] = 0; s.px[i] = 0;
        s.turn[i] = s.tturn[i] ?? REST; s.vturn[i] = 0;
        s.swing[i] = s.swing[i] ?? 0; s.vswing[i] = s.vswing[i] ?? 0; s.tag[i] = 0; s.vtag[i] = 0;
      }
    }
    if (fresh) { s.x.length = count; for (let i = 0; i < count; i++) paint(i); }
    kick();
  }, [size, active, count, reduced, targets, paint, kick]);

  const brushed = React.useRef(false);
  React.useEffect(() => {
    if (!size.width || brushed.current || reduced) return;
    brushed.current = true;
    const timers = items.map((_, i) => window.setTimeout(() => impulse(i, 46 - i * 2.5), 120 + i * 55));
    return () => timers.forEach((t) => window.clearTimeout(t));
  }, [size.width, reduced, items, impulse]);

  React.useEffect(() => () => { cancelAnimationFrame(sim.current.raf); sim.current.raf = 0; }, []);

  React.useLayoutEffect(() => {
    if (openIndex !== null || lifted !== null || returnFocus.current === null) return;
    const index = returnFocus.current;
    returnFocus.current = null;
    slots.current[index]?.focus({ preventScroll: true });
  }, [openIndex, lifted]);

  const choose = React.useCallback((index: number | null) => {
    setActive((old) => {
      if (old === index) return old;
      if (index !== null) { impulse(index - 1, -30); impulse(index + 1, 30); }
      if (old !== null && old !== index) { impulse(old - 1, 14); impulse(old + 1, -14); }
      if (index !== null) live.current.carouselIndex = index;
      return index;
    });
  }, [impulse]);

  const stop = React.useCallback(() => setPlaying(false), []);

  React.useEffect(() => {
    if (!playing || reduced || openIndex !== null || count === 0 || !size.width) return;
    const first = window.setTimeout(function advance() {
      const current = live.current.active;
      choose(current === null ? 0 : (current + 1) % live.current.count);
      timer = window.setTimeout(advance, interval);
    }, active === null ? 1100 : interval);
    let timer = first;
    return () => window.clearTimeout(timer);
  }, [playing, reduced, openIndex, count, interval, size.width, choose, active]);

  const open = React.useCallback((index: number) => {
    stop();
    setActive(index);
    setOpenIndex(index);
    onOpenChange?.(index);
  }, [onOpenChange, stop]);

  const close = React.useCallback(() => {
    setOpenIndex(null);
    onOpenChange?.(null);
  }, [onOpenChange]);

  function nearest(clientX: number, clientY: number) {
    const stage = stageRef.current;
    if (!stage) return null;
    const box = stageBox(stage);
    const x = (clientX - box.left) / box.k;
    const y = (clientY - box.top) / box.k;
    const { h } = live.current.size;
    if (y < 0 || y > h + 46) return null;
    const s = sim.current;
    let best = null as number | null;
    let distance = Infinity;
    for (let i = 0; i < live.current.count; i++) {
      const half = footprint(h, s.turn[i] ?? REST, live.current.sideWidths[i]) / 2 + 4;
      const d = Math.abs(x - (s.x[i] ?? 0));
      if (d < half && d < distance) { best = i; distance = d; }
    }
    return best;
  }

  const onPointerMove = (event: React.PointerEvent) => {
    const p = pointer.current;
    const s = sim.current;
    const stage = stageRef.current;
    if (p.id === event.pointerId && stage) {
      const dx = event.clientX - p.x;
      const now = performance.now();
      if (!p.moved && Math.abs(dx) > 6 && Math.abs(dx) > Math.abs(event.clientY - p.y)) {
        p.moved = true;
        stop();
        if (stage.isConnected) stage.setPointerCapture(event.pointerId);
        if (!live.current.size.carousel && p.index >= 0) {
          const box = stageBox(stage);
          s.drag = p.index;
          s.grab = (event.clientX - box.left) / box.k - (s.x[p.index] ?? 0);
        }
      }
      if (p.moved) {
        const box = stageBox(stage);
        const v = (event.clientX - p.lastX) / Math.max(1, now - p.lastT);
        p.v = p.v * 0.6 + v * 0.4;
        p.lastX = event.clientX; p.lastT = now;
        if (s.drag >= 0) {
          const x = (event.clientX - box.left) / box.k - s.grab;
          s.vx[s.drag] = (p.v * 1000) / box.k;
          s.x[s.drag] = x;
          s.free = now + 900;
          kick();
        } else if (live.current.size.carousel) {
          p.swipe = dx / box.k;
          const xs = targets(live.current.size.h, live.current.size.width, true, live.current.active ?? live.current.carouselIndex);
          for (let i = 0; i < live.current.count; i++) s.tx[i] = (xs[i] ?? 0) + p.swipe;
          kick();
        }
      }
      return;
    }
    if (event.pointerType !== "mouse" || live.current.size.carousel || live.current.openIndex !== null) return;
    const hit = nearest(event.clientX, event.clientY);
    const current = live.current.active;
    if (current !== null && hit !== current && stage) {
      const box = stageBox(stage);
      const keep = Math.abs((event.clientX - box.left) / box.k - (s.x[current] ?? 0)) < footprint(live.current.size.h, 0) / 2 + 14;
      if (keep && (hit === null || Math.abs((event.clientY - box.top) / box.k) < live.current.size.h + 40)) return;
    }
    if (hit !== null) { stop(); choose(hit); }
  };

  const onPointerDown = (event: React.PointerEvent) => {
    if (event.button !== 0) return;
    const hit = nearest(event.clientX, event.clientY);
    const now = performance.now();
    pendingOpen.current = -1;
    pointer.current = { id: event.pointerId, index: hit ?? -1, x: event.clientX, y: event.clientY, t: now, moved: false, kind: event.pointerType, swipe: 0, lastX: event.clientX, lastT: now, v: 0 };
  };

  const finishPointer = (event: React.PointerEvent, cancelled: boolean) => {
    const p = pointer.current;
    if (p.id !== event.pointerId) return;
    const s = sim.current;
    const stage = stageRef.current;
    if (stage?.hasPointerCapture(event.pointerId)) stage.releasePointerCapture(event.pointerId);
    pointer.current = { ...p, id: -1 };
    if (s.drag >= 0) {
      s.drag = -1;
      s.free = performance.now() + 700;
      kick();
      return;
    }
    if (p.moved && live.current.size.carousel) {
      const dx = event.clientX - p.x;
      const current = live.current.active ?? live.current.carouselIndex;
      const step = Math.abs(dx) > 40 || Math.abs(p.v) > 0.45 ? (dx < 0 ? 1 : -1) : 0;
      pointer.current.swipe = 0;
      choose(clamp(current + step, 0, live.current.count - 1));
      for (let i = 0; i < live.current.count; i++) impulse(i, clamp(-p.v * 22, -30, 30));
      return;
    }
    if (cancelled || p.moved || p.index < 0) return;
    stop();
    const touch = p.kind !== "mouse";
    if (touch && live.current.active !== p.index) choose(p.index);
    else pendingOpen.current = p.index;
  };

  const onKeyDown = (event: React.KeyboardEvent) => {
    const keys = ["ArrowRight", "ArrowLeft", "Home", "End"];
    if (!keys.includes(event.key)) return;
    event.preventDefault();
    stop();
    const from = active ?? focusIndex;
    const next = event.key === "Home" ? 0 : event.key === "End" ? count - 1 : clamp(from + (event.key === "ArrowRight" ? 1 : -1), 0, count - 1);
    setFocusIndex(next);
    choose(next);
    slots.current[next]?.focus({ preventScroll: true });
  };

  const current = active === null ? null : items[active];
  const h = size.h;
  const boxW = h * ASPECT;
  const railY = Math.round(h * 0.07) + 10;
  const railR = Math.max(3, Math.round((RAIL_R / VB_H) * h * 10) / 10);
  const bottom = count ? Math.max(...items.map((item) => (item.image ? VB_H : SIDE[item.kind ?? "tee"].hem + 8))) / VB_H : 1;

  return (
    <section
      {...rest}
      data-slot="clothing-rail-hero"
      data-mode={size.carousel ? "carousel" : "rail"}
      data-active={active ?? ""}
      data-crh-theme={theme}
      aria-roledescription="arara de roupas"
      className={["crh-root", className].filter(Boolean).join(" ")}
    >
      <ClothingRailStyles />
      <Defs uid={uid} />
      <div aria-hidden="true" className="crh-glow" />
      {(eyebrow || heading) && (
        <header className="crh-header">
          {eyebrow && <p className="crh-eyebrow">{eyebrow}</p>}
          {heading && <h2 className="crh-heading">{heading}</h2>}
        </header>
      )}

      <div
        ref={stageRef}
        data-stage
        role="group"
        aria-label={heading ?? "Arara de roupas"}
        className="crh-stage"
        style={{ height: Math.round(railY + h * bottom + h * 0.05 + 12) }}
        onPointerMove={onPointerMove}
        onPointerDown={onPointerDown}
        onPointerUp={(event) => finishPointer(event, false)}
        onPointerCancel={(event) => finishPointer(event, true)}
        onPointerLeave={(event) => { if (event.pointerType === "mouse" && pointer.current.id < 0 && !size.carousel && !document.activeElement?.matches("[data-garment]:focus-visible")) choose(null); }}
        onKeyDown={onKeyDown}
      >
        <div aria-hidden="true" data-rail className="crh-rail" style={{ top: railY - railR, height: railR * 2 }}>
          <div className="crh-rail-shadow" style={{ top: railR * 2 + 1 }} />
          <div className="crh-rail-bar" />
          <div className="crh-rail-brush" />
          {[0, 1].map((side) => (
            <div key={side} className="crh-rail-cap" style={{ [side ? "right" : "left"]: 6 }}>
              <span className="crh-rail-bolt" style={{ top: 4 }} />
              <span className="crh-rail-bolt" style={{ bottom: 4 }} />
            </div>
          ))}
        </div>

        {items.map((item, i) => {
          const kind = item.kind ?? "tee";
          const color = item.color ?? "var(--crh-muted)";
          const trim = item.trim ?? mix(color, -0.12);
          const turned = active === i;
          const mask = item.image ? `url("${item.image}")` : silhouetteMask(kind, "front");
          const photoBox = hanger === "none" ? "crh-box-full" : "crh-box-hung";
          return (
            <button
              key={item.id}
              ref={(node) => { slots.current[i] = node; }}