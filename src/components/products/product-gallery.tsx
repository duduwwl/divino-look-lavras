"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Dialog } from "radix-ui";
import { ArrowLeft, ArrowRight, X, ZoomIn } from "lucide-react";
import { cn } from "@/lib/utils";

/** Gallery: main image with hover-pan zoom (fine pointers), clickable thumbnails and a full-screen viewer. */
export function ProductGallery({ images, name }: { images: string[]; name: string }) {
  const [index, setIndex] = useState(0);
  const [zoom, setZoom] = useState<{ x: number; y: number } | null>(null);
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();
  const go = (d: number) => setIndex((i) => (i + d + images.length) % images.length);

  return (
    <div className="flex flex-col-reverse gap-3 md:flex-row">
      <ul className="flex gap-2 md:flex-col" aria-label="Miniaturas">
        {images.map((src, i) => (
          <li key={src}>
            <button
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Ver foto ${i + 1} de ${images.length}`}
              aria-current={i === index}
              className={cn(
                "press relative block aspect-[4/5] w-[72px] overflow-hidden bg-sand transition-opacity md:w-[84px]",
                i === index ? "opacity-100 outline-2 outline-offset-2 outline-ink" : "opacity-60 hover:opacity-100",
              )}
            >
              <Image src={src} alt="" fill sizes="84px" className="object-cover" />
            </button>
          </li>
        ))}
      </ul>

      <div className="relative flex-1">
        <div
          className="relative aspect-[4/5] cursor-zoom-in overflow-hidden bg-sand"
          onMouseMove={(e) => {
            if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
              const r = e.currentTarget.getBoundingClientRect();
              setZoom({ x: ((e.clientX - r.left) / r.width) * 100, y: ((e.clientY - r.top) / r.height) * 100 });
            }
          }}
          onMouseLeave={() => setZoom(null)}
          onClick={() => setOpen(true)}
        >
          <AnimatePresence initial={false} mode="popLayout">
            <motion.div
              key={images[index]}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="absolute inset-0"
            >
              <Image
                src={images[index]}
                alt={`${name}, foto ${index + 1}`}
                fill
                priority={index === 0}
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover transition-transform duration-200 ease-out"
                style={
                  zoom && !reduce
                    ? { transform: "scale(1.9)", transformOrigin: `${zoom.x}% ${zoom.y}%` }
                    : undefined
                }
              />
            </motion.div>
          </AnimatePresence>
        </div>
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="press absolute right-3 bottom-3 inline-flex min-h-11 items-center gap-2 bg-paper px-3 text-[0.875rem]"
        >
          <ZoomIn className="size-4" strokeWidth={1.5} aria-hidden /> Ampliar
        </button>
        {images.length > 1 ? (
          <div className="absolute bottom-3 left-3 flex gap-1 md:hidden">
            <button type="button" onClick={() => go(-1)} className="press inline-flex size-11 items-center justify-center bg-paper" aria-label="Foto anterior">
              <ArrowLeft className="size-4" />
            </button>
            <button type="button" onClick={() => go(1)} className="press inline-flex size-11 items-center justify-center bg-paper" aria-label="Próxima foto">
              <ArrowRight className="size-4" />
            </button>
          </div>
        ) : null}
      </div>

      <Dialog.Root open={open} onOpenChange={setOpen}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 z-[70] bg-ink" />
          <Dialog.Content
            className="fixed inset-0 z-[71] flex flex-col text-paper outline-none"
            onKeyDown={(e) => {
              if (e.key === "ArrowRight") go(1);
              if (e.key === "ArrowLeft") go(-1);
            }}
          >
            <div className="flex items-center justify-between px-4 py-3">
              <Dialog.Title className="text-[1rem]">
                {name} · foto {index + 1} de {images.length}
              </Dialog.Title>
              <Dialog.Description className="sr-only">Use as setas para trocar de foto.</Dialog.Description>
              <Dialog.Close className="press inline-flex size-11 items-center justify-center" aria-label="Fechar visualização">
                <X className="size-5" />
              </Dialog.Close>
            </div>
            <div className="relative min-h-0 flex-1">
              <Image src={images[index]} alt={`${name}, foto ${index + 1} ampliada`} fill sizes="100vw" quality={85} className="object-contain" />
            </div>
            <div className="flex justify-center gap-2 py-4">
              <button type="button" onClick={() => go(-1)} className="press inline-flex size-12 items-center justify-center bg-paper/10" aria-label="Foto anterior">
                <ArrowLeft className="size-5" />
              </button>
              <button type="button" onClick={() => go(1)} className="press inline-flex size-12 items-center justify-center bg-paper/10" aria-label="Próxima foto">
                <ArrowRight className="size-5" />
              </button>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
}
