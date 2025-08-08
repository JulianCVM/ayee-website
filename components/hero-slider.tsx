"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

const slides = [
  {
    id: 1,
    image: "/images/data-page/Acciones-Estrategias-Empresariales-Slider-Expertos-Soluciones-Empresa1.jpg",
    title: "Seguridad Minera Integral",
    subtitle: "Protocolos avanzados para operaciones seguras",
  },
  {
    id: 2,
    image: "/images/data-page/Acciones-Estrategias-Empresariales-Slider-Tienda-EPP-Empresa.jpg",
    title: "Capacitación Especializada",
    subtitle: "Formación técnica de alto nivel",
  },
  {
    id: 3,
    image: "/images/data-page/Ejemplo2.jpg",
    title: "Desarrollo Social",
    subtitle: "Transformando comunidades mineras",
  },
]

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="absolute inset-0 w-full h-full">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.image || "/placeholder.svg"}
            alt={slide.title}
            fill
            className="object-cover"
            priority={index === 0}
          />
        </div>
      ))}

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? "bg-[#1a896c]" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  )
}
