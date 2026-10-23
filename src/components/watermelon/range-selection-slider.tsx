// Source: Watermelon UI — "Range Selection Slider" (https://ui.watermelon.sh,
// registry.watermelon.sh/r/range-selection-slider.json).
// Adapted for Divino Look: brand colours, square thumbs, BRL formatting, the rolling
// digits kept, and keyboard support (role="slider", arrows / PageUp / Home / End),
// which the original pointer-only thumbs did not have.
'use client';

import React, { type FC, useCallback, useEffect, useRef } from 'react';
import { motion, useMotionValue, useTransform, useReducedMotion } from 'motion/react';

interface DigitColumnProps {
  digit: number;
  height: number;
}

const DigitColumn: FC<DigitColumnProps> = ({ digit, height }) => {
  const reduce = useReducedMotion();
  return (
    <div className="relative overflow-hidden" style={{ height, width: '0.62em' }}>
      <motion.div
        animate={{ y: -digit * height }}
        transition={reduce ? { duration: 0 } : { type: 'spring', stiffness: 140, damping: 22, mass: 0.6 }}
        className="absolute top-0 left-0 flex w-full flex-col items-center"
      >
        {Array.from({ length: 10 }).map((_, i) => (
          <span key={i} style={{ height }} className="flex w-full items-center justify-center">
            {i}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export const RollingNumber: FC<{ value: number; prefix?: string; height?: number }> = ({
  value,
  prefix = '',
  height = 26,
}) => {
  const formatted = prefix + value.toLocaleString('pt-BR');
  return (
    <span className="flex items-center leading-none font-semibold tabular-nums" style={{ height }} aria-hidden>
      {formatted.split('').map((char, index) => {
        const isNumber = !isNaN(parseInt(char, 10));
        if (!isNumber) {
          return (
            <span key={index} className="px-px">
              {char}
            </span>
          );
        }
        return <DigitColumn key={index} digit={Number(char)} height={height} />;
      })}
    </span>
  );
};

type DragType = 'min' | 'max' | null;

export interface RangeSliderProps {
  min: number;
  max: number;
  step?: number;
  value: [number, number];
  onChange: (value: [number, number]) => void;
  /** Called when a drag or key interaction ends. */
  onCommit?: (value: [number, number]) => void;
  labelMin?: string;
  labelMax?: string;
}

export const RangeSlider: FC<RangeSliderProps> = ({
  min,
  max,
  step = 1,
  value,
  onChange,
  onCommit,
  labelMin = 'Preço mínimo',
  labelMax = 'Preço máximo',
}) => {
  const trackRef = useRef<HTMLDivElement>(null);
  const dragging = useRef<DragType>(null);
  const latest = useRef(value);
  useEffect(() => {
    latest.current = value;
  }, [value]);

  const percentFromValue = useCallback((v: number) => ((v - min) / (max - min)) * 100, [min, max]);

  const valueFromX = useCallback(
    (x: number) => {
      if (!trackRef.current) return min;
      const rect = trackRef.current.getBoundingClientRect();
      const percent = Math.min(1, Math.max(0, (x - rect.left) / rect.width));
      const raw = min + percent * (max - min);
      return Math.round(raw / step) * step;
    },
    [min, max, step],
  );

  const minPercent = useMotionValue(percentFromValue(value[0]));
  const maxPercent = useMotionValue(percentFromValue(value[1]));
  const minP = percentFromValue(value[0]);
  const maxP = percentFromValue(value[1]);
  if (minPercent.get() !== minP) minPercent.set(minP);
  if (maxPercent.get() !== maxP) maxPercent.set(maxP);

  const rangeLeft = useTransform(minPercent, (v) => `${v}%`);
  const rangeWidth = useTransform([minPercent, maxPercent], (l) => `${Number(l[1]) - Number(l[0])}%`);
  const thumbMinLeft = useTransform(minPercent, (v) => `calc(${v}% - 12px)`);
  const thumbMaxLeft = useTransform(maxPercent, (v) => `calc(${v}% - 12px)`);

  const set = (which: 'min' | 'max', v: number) => {
    const [lo, hi] = latest.current;
    const next: [number, number] =
      which === 'min' ? [Math.max(min, Math.min(v, hi - step)), hi] : [lo, Math.min(max, Math.max(v, lo + step))];
    latest.current = next;
    onChange(next);
    return next;
  };

  const handleMove = (e: React.PointerEvent) => {
    if (!dragging.current) return;
    set(dragging.current, valueFromX(e.clientX));
  };

  const stop = () => {
    if (dragging.current) onCommit?.(latest.current);
    dragging.current = null;
  };

  const onKey = (which: 'min' | 'max') => (e: React.KeyboardEvent) => {
    const current = which === 'min' ? value[0] : value[1];
    const big = step * 5;
    const map: Record<string, number> = {
      ArrowLeft: current - step,
      ArrowDown: current - step,
      ArrowRight: current + step,
      ArrowUp: current + step,
      PageDown: current - big,
      PageUp: current + big,
      Home: min,
      End: max,
    };
    if (!(e.key in map)) return;
    e.preventDefault();
    onCommit?.(set(which, map[e.key]));
  };

  const thumb =
    'absolute top-1/2 h-6 w-6 -translate-y-1/2 cursor-grab touch-none bg-ink outline-offset-4 active:cursor-grabbing focus-visible:outline-2 focus-visible:outline-brown';

  return (
    <div
      className="relative flex h-12 w-full touch-none items-center select-none"
      onPointerMove={handleMove}
      onPointerUp={stop}
      onPointerCancel={stop}
    >
      <div ref={trackRef} className="absolute h-1.5 w-full bg-champagne/70">
        <motion.div className="absolute h-full bg-brown" style={{ left: rangeLeft, width: rangeWidth }} />
      </div>

      {(['min', 'max'] as const).map((which) => (
        <motion.div
          key={which}
          role="slider"
          tabIndex={0}
          aria-label={which === 'min' ? labelMin : labelMax}
          aria-valuemin={min}
          aria-valuemax={max}
          aria-valuenow={which === 'min' ? value[0] : value[1]}
          aria-valuetext={`R$ ${which === 'min' ? value[0] : value[1]}`}
          onKeyDown={onKey(which)}
          onPointerDown={(e) => {
            (e.target as HTMLElement).setPointerCapture(e.pointerId);
            dragging.current = which;
          }}
          className={thumb}
          style={{ left: which === 'min' ? thumbMinLeft : thumbMaxLeft }}
        />
      ))}
    </div>
  );
};
