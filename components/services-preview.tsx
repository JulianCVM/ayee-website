"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Lightbulb, Handshake, Leaf, ArrowRight, CheckCircle } from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: Lightbulb,
    title: "Consultoría Especializada",
    description:
      "Asesorías y consultorías especializadas en Seguridad y Salud en el Trabajo (SST) y procesos estratégicos corporativos para todo tipo de organizaciones.",
    features: [
      "Implementación de sistemas SST",
      "Auditorías y diagnósticos",
      "Procesos estratégicos corporativos",
      "Cumplimiento normativo",
    ],
    color: "primary",
  },
  {
    icon: Handshake,
    title: "Servicios Especializados",
    description:
      "Capacitaciones, interventorías y servicios técnicos especializados adaptados a las necesidades específicas de cada sector económico.",
    features: [
      "Capacitaciones certificadas",
      "Interventorías técnicas",
      "Acompañamiento continuo",
      "Modalidad presencial y virtual",
    ],
    color: "secondary",
  },
  {
    icon: Leaf,
    title: "Comercialización",
    description:
      "Suministro de equipos de protección personal y herramientas especializadas certificadas con asesoría técnica especializada.",
    features: ["Equipos certificados", "Asesoría técnica especializada", "Entrega nacional", "Garantía de calidad"],
    color: "primary",
  },
]

export default function ServicesPreview() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="w-16 h-1 bg-[#6e161a] mx-auto mb-6"></div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a896c] mb-4">Nuestras Soluciones Principales</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Tres líneas de servicio especializadas para satisfacer las necesidades de todo tipo de organización en todos
            los sectores económicos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon
            const borderColor = service.color === "primary" ? "border-[#1a896c]" : "border-[#6e161a]"
            const textColor = service.color === "primary" ? "text-[#1a896c]" : "text-[#6e161a]"
            const bgColor = service.color === "primary" ? "bg-[#1a896c]" : "bg-[#6e161a]"

            return (
              <Card
                key={index}
                className={`group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white border-t-4 ${borderColor} h-full flex flex-col`}
              >
                <CardHeader className="text-center pb-4">
                  <div
                    className={`bg-white border-4 ${borderColor} ${textColor} rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4`}
                  >
                    <IconComponent className="h-8 w-8" />
                  </div>
                  <CardTitle className={`text-xl font-bold ${textColor}`}>{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center flex-1 flex flex-col">
                  <p className="text-gray-700 leading-relaxed mb-6 text-sm">{service.description}</p>

                  <div className="space-y-3 mb-6 flex-1">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-left">
                        <CheckCircle className="h-4 w-4 text-[#6e161a] mr-3 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link href="/servicios" className="mt-auto">
                    <Button className={`${bgColor} hover:opacity-90 text-white w-full`}>
                      Conocer Más
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <Link href="/servicios">
            <Button size="lg" className="bg-[#1a896c] hover:bg-[#166c56] text-white px-8 py-3">
              Ver Todos Nuestros Servicios
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
