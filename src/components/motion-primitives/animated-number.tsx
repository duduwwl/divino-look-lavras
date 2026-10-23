// Source: Motion Primitives (https://motion-primitives.com) — MIT, by ibelick.
// Adapted for Divino Look: optional `format` (BRL cents), and the motion element is
// created once at module level instead of on every render.
'use client';
import { cn } from '@/lib/utils';
import { motion, SpringOptions, useSpring, useTransform } from 'motion/react';
import { useEffect } from 'react';

export type AnimatedNumberProps = {
  value: number;
  className?: string;
  springOptions?: SpringOptions;
  format?: (value: number) => string;
};

const defaultFormat = (v: number) => Math.round(v).toLocaleString('pt-BR');

export function AnimatedNumber({
  value,
  className,
  springOptions,
  format = defaultFormat,
}: AnimatedNumberProps) {
  const spring = useSpring(value, springOptions);
  const display = useTransform(spring, (current) => format(current));

  useEffect(() => {
    spring.set(value);
  }, [spring, value]);

  return <motion.span className={cn('tabular-nums', className)}>{display}</motion.span>;
}
