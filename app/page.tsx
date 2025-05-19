import Hero from "@/components/sections/hero"
import About from "@/components/sections/about"
import Projects from "@/components/sections/projects"
import Skills from "@/components/sections/skills"
import Experience from "@/components/sections/experience"
import Contact from "@/components/sections/contact"
import EasterEgg from "@/components/easter-egg"
import PageTransition from "@/components/animations/page-transition"
import CursorTrail from "@/components/animations/cursor-trail"

export default function Home() {
  return (
    <PageTransition>
      <main className="min-h-screen bg-gradient-to-b from-navy to-charcoal text-white">
        <CursorTrail />
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
        <EasterEgg />
      </main>
    </PageTransition>
  )
}
