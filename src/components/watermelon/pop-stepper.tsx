// Source: Watermelon UI — "Pop Stepper" (https://ui.watermelon.sh, registry.watermelon.sh/r/pop-stepper.json).
// Adapted for Divino Look: controlled value, brand colours instead of next-themes,
// smaller pop and tilt, square buttons, aria labels and an output region for screen readers.
"use client";

import { Minus, Plus } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface PopStepperProps {
  value: number;
  onChange: (value: number) => void;
  step?: number;
  min?: number;
  max?: number;
  label?: string;
  size?: "sm" | "md";
  className?: string;
}

const colors = ["#24201e", "#805247", "#805247", "#24201e"];

export default function PopStepper({
  value,
  onChange,
  step = 1,
  min = 1,
  max = 10,
  label = "Quantidade",
  size = "md",
  className,
}: PopStepperProps) {
  const [isIncrementing, setIncrementing] = useState(true);
  const reduce = useReducedMotion();

  const update = (next: number) => {
    const clamped = Math.max(min, Math.min(max, next));
    if (clamped === value) return;
    setIncrementing(clamped > value);
    onChange(clamped);
  };

  const btn = size === "sm" ? "size-9" : "size-11";

  return (
    <div className={cn("inline-flex items-center bg-sand", className)} role="group" aria-label={label}>
      <motion.button
        type="button"
        whileTap={reduce ? undefined : { scale: 0.9 }}
        transition={{ duration: 0.15 }}
        onClick={() => update(value - step)}
        disabled={value <= min}
        className={cn(btn, "inline-flex items-center justify-center disabled:opacity-35")}
        aria-label={`Diminuir ${label.toLowerCase()}`}
      >
        <Minus className="size-4" strokeWidth={1.75} />
      </motion.button>

      <div
        className={cn(
          "inline-flex items-center justify-center overflow-hidden tabular-nums",
          size === "sm" ? "min-w-8 text-[0.95rem]" : "min-w-10 text-lg",
        )}
      >
        <motion.span
          key={value}
          aria-live="polite"
          initial={{ scale: 1, rotate: 0 }}
          animate={
            reduce
              ? {}
              : {
                  scale: [1, 1.22, 1.22, 1],
                  rotate: [0, isIncrementing ? -8 : 8, isIncrementing ? -8 : 8, 0],
                  color: colors,
                }
          }
          transition={{
            scale: { duration: 0.36, times: [0, 0.4, 0.6, 1], ease: "easeInOut" },
            rotate: { duration: 0.36, times: [0, 0.4, 0.6, 1], ease: "easeInOut" },
            color: { duration: 0.32 },
          }}
          className="font-semibold"
        >
          {value}
        </motion.span>
      </div>

      <motion.button
        type="button"
        whileTap={reduce ? undefined : { scale: 0.9 }}
        transition={{ duration: 0.15 }}
        onClick={() => update(value + step)}
        disabled={value >= max}
        className={cn(btn, "inline-flex items-center justify-center disabled:opacity-35")}
        aria-label={`Aumentar ${label.toLowerCase()}`}
      >
        <Plus className="size-4" strokeWidth={1.75} />
      </motion.button>
    </div>
  );
}
