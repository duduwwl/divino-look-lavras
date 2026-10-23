import { Hero } from "@/components/home/hero";
import { CategoriesBand } from "@/components/home/categories-band";
import { NewCollection } from "@/components/home/new-collection";
import { FeaturedProducts } from "@/components/home/featured-products";
import { Lookbook } from "@/components/home/lookbook";
import { LookBuilder } from "@/components/home/look-builder";
import { About } from "@/components/home/about";
import { Experience } from "@/components/home/experience";
import { InstagramStrip } from "@/components/home/instagram";
import { Newsletter } from "@/components/home/newsletter";
import { Contact } from "@/components/home/contact";
import { ScrollProgress } from "@/components/motion-primitives/scroll-progress";

export default function Home() {
  return (
    <>
      <ScrollProgress className="fixed top-0 z-[55] h-[2px] bg-brown" springOptions={{ stiffness: 280, damping: 40, restDelta: 0.001 }} />
      <Hero />
      <CategoriesBand />
      <NewCollection />
      <FeaturedProducts />
      <Lookbook />
      <LookBuilder />
      <About />
      <Experience />
      <InstagramStrip />
      <Newsletter />
      <Contact />
    </>
  );
}
