import { Card } from "@/components/ui/card"
import { Code2, Database, Layout, Server, Smartphone, Zap } from "lucide-react"

const skillCategories = [
  {
    icon: Layout,
    title: "Front-End",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML5", "CSS3"],
  },
  {
    icon: Server,
    title: "Back-End",
    skills: ["Node.js", "Express", "REST APIs", "GraphQL", "Authentication", "FastAPI", "Python", "Django"],
  },
  {
    icon: Database,
    title: "Banco de Dados",
    skills: ["PostgreSQL", "MongoDB", "SQL"],
  },
  {
    icon: Code2,
    title: "Ferramentas",
    skills: ["Git", "GitHub", "VS Code", "Figma", "Postman"],
  },
  {
    icon: Zap,
    title: "DevOps",
    skills: ["Vercel", "Docker", "CI/CD", "Netify", "Render"],
  },
  {
    icon: Smartphone,
    title: "Mobile",
    skills: ["React Native", "Responsive Design", "PWA", "Mobile-First"],
  },
]

export function Skills() {
  return (
    <section id="habilidades" className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-12">
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-balance">Habilidades</h2>
            <div className="h-1 w-20 bg-accent rounded-full" />
            <p className="text-lg text-muted-foreground max-w-2xl text-pretty">
              Tecnologias e ferramentas que utilizo no dia a dia para criar soluções eficientes.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => {
              const Icon = category.icon
              return (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-accent/10 rounded-lg">
                        <Icon className="h-6 w-6 text-accent" />
                      </div>
                      <h3 className="text-lg font-semibold">{category.title}</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <span
                          key={skill}
                          className="text-sm px-3 py-1 bg-secondary text-secondary-foreground rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}