import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Quote } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    id: 1,
    name: "Carlos Mendoza",
    position: "Gerente de Seguridad",
    company: "Minera El Dorado S.A.",
    image: "/placeholder.svg?height=80&width=80",
    rating: 5,
    service: "Capacitaciones",
    testimonial:
      "Las capacitaciones de AYEE transformaron completamente nuestra cultura de seguridad. Redujimos los accidentes en un 85% en solo 6 meses. Su metodología es excepcional y el equipo muy profesional.",
    results: "85% reducción en accidentes",
  },
  {
    id: 2,
    name: "María González",
    position: "Directora de Operaciones",
    company: "Cooperativa Minera Antioquia",
    image: "/placeholder.svg?height=80&width=80",
    rating: 5,
    service: "Consultoría",
    testimonial:
      "La consultoría integral de AYEE nos ayudó a obtener todas las licencias ambientales en tiempo récord. Su conocimiento del marco regulatorio colombiano es impresionante.",
    results: "Licencias obtenidas en 4 meses",
  },
  {
    id: 3,
    name: "Roberto Silva",
    position: "Coordinador de Seguridad",
    company: "Minas del Pacífico Ltda.",
    image: "/placeholder.svg?height=80&width=80",
    rating: 5,
    service: "EPP",
    testimonial:
      "Los equipos de protección que suministra AYEE son de la más alta calidad. Llevamos 2 años trabajando con ellos y la durabilidad de los productos es excepcional.",
    results: "2 años de alianza exitosa",
  },
  {
    id: 4,
    name: "Ana Patricia Ruiz",
    position: "Gerente General",
    company: "Minería Sostenible del Chocó",
    image: "/placeholder.svg?height=80&width=80",
    rating: 5,
    service: "Asesorías",
    testimonial:
      "Las asesorías técnicas de AYEE nos permitieron optimizar nuestros procesos y aumentar la productividad en un 40%. Su enfoque integral es exactamente lo que necesitábamos.",
    results: "40% aumento en productividad",
  },
]

export default function ServiceTestimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-yellow-100 text-yellow-800">Testimonios</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Lo que Dicen Nuestros Clientes</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Conoce las experiencias reales de empresas que han transformado sus operaciones con nuestros servicios
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              className="group hover:shadow-xl transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote className="h-16 w-16 text-black-600" />
              </div>

              <CardContent className="p-8">
                <div className="flex items-start space-x-4 mb-6">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={80}
                    height={80}
                    className="rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                      <Badge className="bg-[#f7e6e9] text-[#661A26] text-xs">{testimonial.service}</Badge>
                    </div>
                    <p className="text-sm text-gray-600 mb-1">{testimonial.position}</p>
                    <p className="text-sm font-medium text-[#661A26]">{testimonial.company}</p>

                    {/* Rating */}
                    <div className="flex items-center mt-2">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>

                <blockquote className="text-gray-700 mb-4 leading-relaxed">"{testimonial.testimonial}"</blockquote>

                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="text-sm font-medium text-green-800">Resultado destacado: {testimonial.results}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 bg-[#f7f2f3] rounded-2xl p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-[#661A26] mb-2">98%</div>
                <div className="text-sm text-gray-700">Satisfacción del Cliente</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#1A896C] mb-2">500+</div>
                  <div className="text-sm text-gray-700">Proyectos Exitosos</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#A47740] mb-2">15+</div>
                  <div className="text-sm text-gray-700">Años de Experiencia</div>
                </div>
                  <div>
                    <div className="text-3xl font-bold text-[#000000] mb-2">24/7</div>
                    <div className="text-sm text-gray-700">Soporte Técnico</div>
                  </div>
              </div>
            </div>

          </div>
    </section>
  )
}
