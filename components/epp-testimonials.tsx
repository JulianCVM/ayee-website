import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Quote } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    id: 1,
    name: "Ing. Carlos Ramírez",
    position: "Coordinador de Seguridad",
    company: "Minera El Dorado S.A.",
    image: "/placeholder.svg?height=80&width=80",
    rating: 5,
    testimonial:
      "Los EPP que suministra AYEE son de excelente calidad. Llevamos 3 años trabajando con ellos y la durabilidad de los productos es excepcional. Nuestros indicadores de seguridad han mejorado significativamente.",
    products: "Cascos, Respiradores, Arneses",
  },
  {
    id: 2,
    name: "Dra. María González",
    position: "Gerente de Operaciones",
    company: "Constructora Andina Ltda.",
    image: "/placeholder.svg?height=80&width=80",
    rating: 5,
    testimonial:
      "La asesoría técnica que recibimos fue fundamental para seleccionar el EPP adecuado. El equipo de AYEE conoce perfectamente las necesidades del sector y nos ayudó a optimizar nuestro presupuesto.",
    products: "Gafas de Seguridad, Guantes, Protectores Auditivos",
  },
  {
    id: 3,
    name: "Roberto Silva",
    position: "Jefe de Mantenimiento",
    company: "Industrias del Pacífico",
    image: "/placeholder.svg?height=80&width=80",
    rating: 5,
    testimonial:
      "La rapidez en la entrega y la calidad del servicio postventa nos convencieron. Cuando necesitamos reposiciones urgentes, AYEE siempre responde. Es un aliado confiable para nuestra operación.",
    products: "Equipos Respiratorios, Ropa de Trabajo",
  },
]

export default function EPPTestimonials() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-blue-100 text-blue-800">Testimonios</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Lo que Dicen Nuestros Clientes</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Conoce las experiencias reales de empresas que confían en nuestros productos y servicios
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              className="group hover:shadow-xl transition-all duration-300 relative overflow-hidden border-0 shadow-lg"
            >
              <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote className="h-12 w-12 text-blue-600" />
              </div>

              <CardContent className="p-8">
                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Testimonial */}
                <blockquote className="text-gray-700 mb-6 leading-relaxed">"{testimonial.testimonial}"</blockquote>

                {/* Products Used */}
                <div className="mb-6">
                  <p className="text-sm font-medium text-gray-900 mb-2">Productos utilizados:</p>
                  <p className="text-sm text-blue-600">{testimonial.products}</p>
                </div>

                {/* Author */}
                <div className="flex items-center space-x-4">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={60}
                    height={60}
                    className="rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.position}</p>
                    <p className="text-sm font-medium text-blue-600">{testimonial.company}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">98%</div>
              <div className="text-sm text-gray-600">Satisfacción del Cliente</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">1,500+</div>
              <div className="text-sm text-gray-600">Empresas Atendidas</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600 mb-2">24h</div>
              <div className="text-sm text-gray-600">Tiempo de Respuesta</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">15+</div>
              <div className="text-sm text-gray-600">Años de Experiencia</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
