import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Olá, eu sou</p>
             <div className="flex justify-center">
              <div className="relative w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48">
                <img
                  src="/profile.jpg"
                  alt="Foto de perfil"
                  className="w-full h-full object-cover rounded-full border-4 border-accent shadow-xl"
                />
              </div>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-balance">Desenvolvedor Full Stack</h1>
            <p className="text-xl sm:text-2xl text-muted-foreground max-w-2xl mx-auto text-balance">
              Criando experiências digitais modernas e intuitivas com foco em performance e usabilidade
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button size="lg" asChild>
              <a href="#projetos">Ver Projetos</a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#contato">Entre em Contato</a>
            </Button>
          </div>

          <div className="flex items-center justify-center gap-4 pt-4">
            <Button variant="ghost" size="icon" asChild>
              <a href="https://github.com/FelipeHondei" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="https://www.linkedin.com/in/felipe-hondei-aa4662232/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="mailto:felipe_hondei@hotmail.com" aria-label="Email">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
          </div>

          <div className="pt-12">
            <a href="#sobre" className="inline-block animate-bounce">
              <ArrowDown className="h-6 w-6 text-muted-foreground" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
