import { Hero } from "@/components/home/hero";
import { CategoriesBand } from "@/components/home/categories-band";
import { NewCollection } from "@/components/home/new-collection";
import { About } from "@/components/home/about";
import { Experience } from "@/components/home/experience";
import { Contact } from "@/components/home/contact";
import dynamic from "next/dynamic";
import { ScrollProgress } from "@/components/motion-primitives/scroll-progress";

// Below-the-fold interactive sections ship in their own chunks (still prerendered to HTML).
const Lookbook = dynamic(() => import("@/components/home/lookbook").then((m) => m.Lookbook));
const InstagramStrip = dynamic(() => import("@/components/home/instagram").then((m) => m.InstagramStrip));
const Newsletter = dynamic(() => import("@/components/home/newsletter").then((m) => m.Newsletter));

export default function Home() {
  return (
    <>
      <ScrollProgress className="fixed top-0 z-[55] h-[2px] bg-brown" springOptions={{ stiffness: 280, damping: 40, restDelta: 0.001 }} />
      <Hero />
      <CategoriesBand />
      <NewCollection />
      <Lookbook />
      <About />
      <Experience />
      <InstagramStrip />
      <Newsletter />
      <Contact />
    </>
  );
}
