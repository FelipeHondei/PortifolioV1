import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const experiences = [
  {
    period: "2024 — Presente",
    role: "Estagario inteligente de dados",
    company: "Volvo laponia",
    description:
      "Criei algumas aplicações web internas para integrações de sistemas, testes de API, criação de dashboards usando Power BI e automações RPA com selenium realizando web scraping",
    technologies: ["HTML", "CSS", "Javascript", "Python", "PostgreSQL", "MongoDB", "Power BI"],
  },
  {
    period: "2023 — 2024",
    role: "Jovem aprendiz Recursos Humanos",
    company: "Toyota Tsusho",
    description:
      "Criação de plataformas usando Microsoft power plataform (power apps, power automate e power BI), criação de paineis interativos com o figma e treinamento de novas plataformas",
    technologies: ["Power apps", "Power automate", "Power BI", "Figma"],
  },
]

export function Experience() {
  return (
    <section id="experiencia" className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <div className="space-y-12">
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-balance">Experiência</h2>
            <div className="h-1 w-20 bg-accent rounded-full" />
          </div>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                    <div className="space-y-1">
                      <h3 className="text-xl font-semibold text-balance">{exp.role}</h3>
                      <p className="text-muted-foreground">{exp.company}</p>
                    </div>
                    <p className="text-sm text-muted-foreground font-mono">{exp.period}</p>
                  </div>

                  <p className="text-muted-foreground leading-relaxed text-pretty">{exp.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
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