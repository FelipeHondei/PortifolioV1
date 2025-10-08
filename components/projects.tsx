import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "Crypto analyzer",
    description:
      "Site com dashboards sobre criptomoedas em alta.",
    image: "/CriptoThumb.png",
    technologies: ["CSS", "Javascript", "HTML", "Vercel", "Python", "FastAPI"],
    liveUrl: "https://api-crypto-phi.vercel.app/",
    githubUrl: "https://github.com/FelipeHondei/ApiCrypto",
  },
  {
    title: "Task Flow",
    description: "Aplicativo para criar e gerenciar tarefas.",
    image: "/TaskFlow.png",
    technologies: ["FastAPI", "SQLite", "Docker", "Python", "Netify"],
    liveUrl: "https://loginauthtask.netlify.app/",
    githubUrl: "https://github.com/FelipeHondei/LoginAuth",
  },
  {
    title: "Estoque e vendas",
    description:
      "Sistema de gerenciamento estoque e vendas.",
    image: "/Estoque%20e%20vendas.png",
    technologies: ["PostgreSQL", "SQLAlchemy", "JS", "Netify", "Render"],
    liveUrl: "https://estoquehondei.netlify.app/",
    githubUrl: "https://github.com/FelipeHondei/Estoque-frontend",
  },
  {
    title: "Dogtown Coffee",
    description:
      "Landing page de uma cafeteria.",
    image: "/Estoque%20e%20vendas.png",
    technologies: ["Next.js", "Typescript", "Tailwind CSS", "Netify"],
    liveUrl: "https://estoquehondei.netlify.app/",
    githubUrl: "https://github.com/FelipeHondei/Estoque-frontend",
  },
]

export function Projects() {
  return (
    <section id="projetos" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-12">
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-balance">Projetos em Destaque</h2>
            <div className="h-1 w-20 bg-accent rounded-full" />
            <p className="text-lg text-muted-foreground max-w-2xl text-pretty">
              Alguns dos projetos que desenvolvi recentemente, demonstrando minhas habilidades em diferentes
              tecnologias.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden group hover:shadow-xl transition-shadow">
                <div className="relative aspect-video overflow-hidden bg-muted">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-semibold text-balance">{project.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-pretty">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-3 pt-2">
                    <Button size="sm" variant="outline" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Demo
                      </a>
                    </Button>
                    <Button size="sm" variant="outline" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        Código
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
