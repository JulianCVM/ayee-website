"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Quote, Clock, MessageCircle, Phone, Mail } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    id: 1,
    name: "Carlos Ramírez",
    position: "Gerente de Operaciones",
    company: "Minera del Norte S.A.S",
    image: "/placeholder.svg?height=80&width=80",
    rating: 5,
    quote:
      "La atención de AYEE es excepcional. Nos contactaron en menos de 2 horas y resolvieron nuestra emergencia de seguridad el mismo día. Su equipo técnico es altamente profesional.",
    channel: "Teléfono",
    responseTime: "2 horas",
    date: "Enero 2024",
  },
  {
    id: 2,
    name: "María González",
    position: "Coordinadora de Seguridad",
    company: "Cooperativa Minera Antioquia",
    image: "/placeholder.svg?height=80&width=80",
    rating: 5,
    quote:
      "El formulario web es muy completo y la respuesta por email fue detallada y personalizada. Nos enviaron toda la información técnica que necesitábamos para tomar la decisión.",
    channel: "Email",
    responseTime: "4 horas",
    date: "Diciembre 2023",
  },
  {
    id: 3,
    name: "Roberto Silva",
    position: "Director de Proyectos",
    company: "Construcciones del Pacífico",
    image: "/placeholder.svg?height=80&width=80",
    rating: 5,
    quote:
      "El WhatsApp Business de AYEE es increíble. Responden inmediatamente y pueden resolver consultas técnicas complejas por chat. Muy conveniente para nuestro ritmo de trabajo.",
    channel: "WhatsApp",
    responseTime: "15 minutos",
    date: "Febrero 2024",
  },
  {
    id: 4,
    name: "Ana Patricia Ruiz",
    position: "Jefe de Compras",
    company: "Industrias Metalúrgicas del Cauca",
    image: "/placeholder.svg?height=80&width=80",
    rating: 5,
    quote:
      "Agendamos una reunión virtual a través de su sistema y fue perfecta. El asesor técnico nos presentó soluciones específicas para nuestras necesidades. Muy profesional.",
    channel: "Reunión Virtual",
    responseTime: "24 horas",
    date: "Marzo 2024",
  },
]

const channelStats = [
  {
    channel: "Teléfono",
    icon: Phone,
    avgResponse: "30 min",
    satisfaction: "98%",
    color: "bg-blue-500",
  },
  {
    channel: "WhatsApp",
    icon: MessageCircle,
    avgResponse: "15 min",
    satisfaction: "99%",
    color: "bg-green-500",
  },
  {
    channel: "Email",
    icon: Mail,
    avgResponse: "2 horas",
    satisfaction: "97%",
    color: "bg-purple-500",
  },
  {
    channel: "Reuniones",
    icon: Clock,
    avgResponse: "24 horas",
    satisfaction: "100%",
    color: "bg-orange-500",
  },
]

export default function ContactTestimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-green-100 text-green-800">Experiencias Reales</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Lo que Dicen Nuestros Clientes sobre Nuestra Atención
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Testimonios reales sobre la calidad y rapidez de nuestros canales de comunicación
          </p>
        </div>

        {/* Channel Performance Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {channelStats.map((stat, index) => {
            const IconComponent = stat.icon
            return (
              <Card key={index} className="text-center shadow-lg border-0">
                <CardContent className="p-6">
                  <div className={`${stat.color} rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4`}>
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{stat.channel}</h3>
                  <div className="space-y-1">
                    <div className="text-2xl font-bold text-blue-600">{stat.avgResponse}</div>
                    <div className="text-sm text-gray-600">Tiempo promedio</div>
                    <div className="text-lg font-semibold text-green-600">{stat.satisfaction}</div>
                    <div className="text-xs text-gray-500">Satisfacción</div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="shadow-xl border-0 hover:shadow-2xl transition-shadow duration-300">
              <CardContent className="p-8">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={80}
                      height={80}
                      className="rounded-full"
                    />
                    <div>
                      <h3 className="font-bold text-gray-900">{testimonial.name}</h3>
                      <p className="text-sm text-gray-600">{testimonial.position}</p>
                      <p className="text-sm font-medium text-blue-600">{testimonial.company}</p>
                    </div>
                  </div>
                  <Quote className="h-8 w-8 text-blue-200" />
                </div>

                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-gray-700 leading-relaxed mb-6 italic">"{testimonial.quote}"</blockquote>

                {/* Metadata */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center space-x-4">
                    <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                      {testimonial.channel}
                    </Badge>
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="h-4 w-4 mr-1" />
                      {testimonial.responseTime}
                    </div>
                  </div>
                  <div className="text-sm text-gray-500">{testimonial.date}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Commitment Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-8 md:p-12">
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Nuestro Compromiso de Atención</h3>
            <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
              Garantizamos respuesta oportuna y soluciones efectivas a través de todos nuestros canales de comunicación
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-blue-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Respuesta Garantizada</h4>
                <p className="text-gray-600">Máximo 24 horas hábiles para cualquier consulta</p>
              </div>

              <div className="text-center">
                <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="h-8 w-8 text-green-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Múltiples Canales</h4>
                <p className="text-gray-600">Elige el método que mejor se adapte a tu necesidad</p>
              </div>

              <div className="text-center">
                <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Star className="h-8 w-8 text-orange-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Calidad Asegurada</h4>
                <p className="text-gray-600">98% de satisfacción promedio en todos los canales</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
