"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Github, Linkedin, Mail, Send, MessageCircle } from "lucide-react"
import { useState } from "react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  // Configuração do WhatsApp
  const phoneNumber = "5515996009700"
  const whatsappMessage = encodeURIComponent("Olá! Vi seu portfólio e gostaria de conversar sobre um projeto.")
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aqui você implementaria o envio do formulário
    console.log("Form submitted:", formData)
  }

  return (
    <section id="contato" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-balance">Vamos Trabalhar Juntos?</h2>
            <div className="h-1 w-20 bg-accent rounded-full mx-auto" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Estou sempre aberto a novas oportunidades e projetos interessantes. Entre em contato!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Nome
                  </label>
                  <Input
                    id="name"
                    placeholder="Seu nome"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="seu@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Mensagem
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Sua mensagem..."
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                  />
                </div>
                <Button type="submit" className="w-full">
                  <Send className="h-4 w-4 mr-2" />
                  Enviar Mensagem
                </Button>
              </form>
            </Card>

            <div className="space-y-6">
              {/* Card do WhatsApp - Destaque */}
              <Card className="p-6 bg-[#25D366]/10 border-[#25D366]/30 hover:border-[#25D366]/50 transition-all duration-300 hover:shadow-lg">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366]">
                      <MessageCircle className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">WhatsApp</h3>
                      <p className="text-sm text-muted-foreground">Resposta rápida garantida</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-pretty">
                    Prefere conversar pelo WhatsApp? Clique no botão abaixo e vamos conversar!
                  </p>
                  <Button 
                    asChild 
                    className="w-full bg-[#25D366] hover:bg-[#20BA5A] text-white"
                  >
                    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="h-4 w-4 mr-2" />
                      Abrir WhatsApp
                    </a>
                  </Button>
                </div>
              </Card>

              <Card className="p-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Informações de Contato</h3>
                  <div className="space-y-3">
                    <a
                      href="mailto:felipe_hondei@hotmail.com"
                      className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Mail className="h-5 w-5" />
                      <span>felipe_hondei@hotmail.com</span>
                    </a>
                    <a
                      href="https://github.com/FelipeHondei"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Github className="h-5 w-5" />
                      <span>github.com/FelipeHondei</span>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/felipe-hondei-aa4662232/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Linkedin className="h-5 w-5" />
                      <span>linkedin.com/in/felipe-hondei</span>
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-accent/10 border-accent/20">
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">Disponibilidade</h3>
                  <p className="text-muted-foreground text-pretty">
                    Atualmente disponível para projetos freelance e oportunidades full-time. Respondo em até 24 horas.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <footer className="mt-24 pt-8 border-t border-border">
        <div className="text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Todos os direitos reservados.</p>
        </div>
      </footer>
    </section>
  )
}