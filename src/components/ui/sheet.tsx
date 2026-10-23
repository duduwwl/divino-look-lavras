"use client";

import { Dialog } from "radix-ui";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { X } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Side = "right" | "left" | "bottom" | "top";

const offscreen: Record<Side, string> = {
  right: "translateX(100%)",
  left: "translateX(-100%)",
  bottom: "translateY(100%)",
  top: "translateY(-100%)",
};

const placement: Record<Side, string> = {
  right: "inset-y-0 right-0 h-dvh w-full max-w-[440px]",
  left: "inset-y-0 left-0 h-dvh w-full max-w-[440px]",
  bottom: "inset-x-0 bottom-0 max-h-[88dvh] w-full",
  top: "inset-x-0 top-0 w-full",
};

/**
 * Accessible drawer: Radix Dialog handles focus trap, Esc and aria;
 * Motion handles the slide (drawer curve, transform + opacity only).
 */
export function Sheet({
  open,
  onOpenChange,
  side = "right",
  title,
  description,
  hideTitle = false,
  children,
  footer,
  className,
  tone = "paper",
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  side?: Side;
  title: string;
  description?: string;
  hideTitle?: boolean;
  children: ReactNode;
  footer?: ReactNode;
  className?: string;
  tone?: "paper" | "brown";
}) {
  const reduce = useReducedMotion();
  const hidden = reduce ? "none" : offscreen[side];

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <AnimatePresence>
        {open && (
          <Dialog.Portal forceMount>
            <Dialog.Overlay asChild forceMount>
              <motion.div
                className="fixed inset-0 z-[60] bg-ink/45"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
              />
            </Dialog.Overlay>
            <Dialog.Content asChild forceMount aria-describedby={description ? undefined : undefined}>
              <motion.div
                className={cn(
                  "fixed z-[61] flex flex-col outline-none",
                  placement[side],
                  tone === "brown" ? "on-dark bg-brown text-on-brown" : "bg-paper text-ink",
                  className,
                )}
                initial={{ transform: hidden, opacity: reduce ? 0 : 1 }}
                animate={{ transform: "translate(0,0)", opacity: 1 }}
                exit={{ transform: hidden, opacity: reduce ? 0 : 1, transition: { duration: 0.22, ease: [0.23, 1, 0.32, 1] } }}
                transition={{ duration: 0.42, ease: [0.32, 0.72, 0, 1] }}
              >
                <div className="flex items-center justify-between gap-4 px-5 pt-5 pb-3 sm:px-7">
                  <Dialog.Title
                    className={cn("font-display text-[1.625rem] leading-tight", hideTitle && "sr-only")}
                  >
                    {title}
                  </Dialog.Title>
                  <Dialog.Close
                    className="press -mr-2 ml-auto inline-flex size-11 items-center justify-center"
                    aria-label="Fechar"
                  >
                    <X className="size-5" strokeWidth={1.5} />
                  </Dialog.Close>
                </div>
                {description ? (
                  <Dialog.Description className="px-5 pb-2 text-[1rem] opacity-80 sm:px-7">
                    {description}
                  </Dialog.Description>
                ) : (
                  <Dialog.Description className="sr-only">{title}</Dialog.Description>
                )}
                <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-5 sm:px-7">{children}</div>
                {footer ? <div className="px-5 pt-4 pb-[max(1.25rem,env(safe-area-inset-bottom))] sm:px-7">{footer}</div> : null}
              </motion.div>
            </Dialog.Content>
          </Dialog.Portal>
        )}
      </AnimatePresence>
    </Dialog.Root>
  );
}
