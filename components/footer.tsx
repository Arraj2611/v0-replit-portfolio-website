import Link from "next/link"
import { Github, Linkedin, Mail, Globe } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-background border-t border-border py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link href="#home" className="font-orbitron text-xl font-bold">
              <span className="neon-text">Rajeev Aken</span>
            </Link>
            <p className="text-sm text-muted-foreground mt-2">AI/ML Engineer & Full Stack Developer</p>
          </div>

          <div className="flex space-x-6">
            <a
              href="https://github.com/Arraj2611"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com/in/rajeevaken"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:rajeevaken03@gmail.com"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
            <a
              href="https://arraj2611.streamlit.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Website"
            >
              <Globe className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© {currentYear} Rajeev Aken. All rights reserved.</p>
          <p className="mt-2">Built with Next.js, Tailwind CSS, and Framer Motion</p>
        </div>
      </div>
    </footer>
  )
}
