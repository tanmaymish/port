import Navbar from "@/components/layout/Navbar";
import ScrollProgress from "@/components/layout/ScrollProgress";
import CursorGlow from "@/components/layout/CursorGlow";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Timeline from "@/components/sections/Timeline";
import Certifications from "@/components/sections/Certifications";
import SecurityTerminal from "@/components/sections/SecurityTerminal";
import HunterMindSpotlight from "@/components/sections/HunterMindSpotlight";
import Contact from "@/components/sections/Contact";
import CommandPalette from "@/components/ui/CommandPalette";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <CursorGlow />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Timeline />
        <Certifications />
        <HunterMindSpotlight />
        <SecurityTerminal />
        <Contact />
      </main>
      <CommandPalette />
    </>
  );
}
