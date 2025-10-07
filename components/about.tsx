export function About() {
  return (
    <section id="sobre" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-balance">Sobre Mim</h2>
            <div className="h-1 w-20 bg-accent rounded-full" />
          </div>

          <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p className="text-pretty">
              Me chamo Felipe Rodrigues Hondei e sou um desenvolvedor com formação em Analise e Desenvolvimento de Sistemas, com experiencia pratica em desenvolvimento web, automãção de processos e integrãção de sistemas. 
            </p>
            <p className="text-pretty">
              foco em usabilidade, acessibilidade e boas praticas de desenvolvimento. Busco um lugar onde eu consiga aplicar minha capacidade de aprendizado contínuo, criatividade e colaboração em projetos desafiadores.
            </p>
            <p className="text-pretty">
              Atualmente, estou focado em projetos que utilizam React, Next.js, TypeScript e Node.js, sempre buscando
              aprender novas tecnologias e melhores práticas de desenvolvimento.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
