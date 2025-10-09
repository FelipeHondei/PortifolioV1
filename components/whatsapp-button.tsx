"use client"

import { MessageCircle } from "lucide-react"
import { useState } from "react"

export function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false)
  
  const phoneNumber = "5515996009700"
  
  const message = encodeURIComponent("Olá! Vi seu portfólio e gostaria de conversar sobre um projeto.")
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label="Contato via WhatsApp"
    >
      {/* Tooltip */}
      <div
        className={`absolute right-full mr-3 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-lg bg-foreground px-3 py-2 text-sm font-medium text-background shadow-lg transition-all duration-300 ${
          isHovered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2 pointer-events-none"
        }`}
      >
        Fale comigo no WhatsApp
        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full border-8 border-transparent border-l-foreground" />
      </div>

      {/* Botão Principal */}
      <div className="relative">
        {/* Animação de pulso */}
        <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-75" />
        
        {/* Botão */}
        <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl">
          <MessageCircle className="h-7 w-7 text-white" />
        </div>
      </div>
    </a>
  )
}