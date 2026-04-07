import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Mission } from "@/components/Mission";
import { Information } from "@/components/Information";
import { Sponsors } from "@/components/Sponsors";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Mission />
      <Information />
      <Sponsors />
    </main>
  );
}
