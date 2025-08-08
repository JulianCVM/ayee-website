"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { GraduationCap, Shield, Wrench, FileText, CheckCircle, Star, Phone, Calculator } from "lucide-react"
import Image from "next/image"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ServiceQuoteCalculator from "@/components/service-quote-calculator"
import ServiceTestimonials from "@/components/service-testimonials"
import ServiceFAQ from "@/components/service-faq"

const services = [
  {
    id: "capacitaciones",
    icon: GraduationCap,
    title: "Capacitaciones en Seguridad Minera",
    shortDescription: "Programas especializados en seguridad minera y protocolos de emergencia.",
    fullDescription:
      "Nuestros programas de capacitación están diseñados específicamente para la industria minera colombiana, cumpliendo con todas las normativas nacionales e internacionales. Ofrecemos formación integral que abarca desde conceptos básicos hasta técnicas avanzadas de seguridad.",
    features: [
      "Certificación oficial avalada por el SENA",
      "Modalidad presencial, virtual e híbrida",
      "Material didáctico especializado incluido",
      "Instructores certificados con experiencia en campo",
      "Seguimiento post-capacitación por 6 meses",
      "Evaluaciones prácticas y teóricas",
    ],
    benefits: [
      "Reducción del 80% en accidentes laborales",
      "Cumplimiento normativo garantizado",
      "Mejora en la productividad del equipo",
      "Certificación reconocida nacionalmente",
    ],
    pricing: "Desde $150.000 COP por persona",
    duration: "16-40 horas académicas",
    image: "/placeholder.svg?height=400&width=600&text=Capacitación+en+Seguridad",
  },
  {
    id: "epp",
    icon: Shield,
    title: "Suministro de Equipos de Protección Personal",
    shortDescription: "Equipos de protección personal certificados para la industria minera.",
    fullDescription:
      "Proveemos equipos de protección personal de la más alta calidad, certificados internacionalmente y adaptados a las condiciones específicas de la minería en Colombia. Nuestro catálogo incluye desde elementos básicos hasta equipos especializados para ambientes de alto riesgo.",
    features: [
      "Productos certificados ISO y ANSI",
      "Entrega nacional con logística especializada",
      "Garantía extendida de 2 años",
      "Asesoría técnica para selección de equipos",
      "Mantenimiento y calibración incluidos",
      "Stock permanente de productos críticos",
    ],
    benefits: [
      "Protección garantizada contra riesgos específicos",
      "Durabilidad superior en condiciones extremas",
      "Cumplimiento de normativas internacionales",
      "Soporte técnico especializado 24/7",
    ],
    pricing: "Cotización personalizada según necesidades",
    duration: "Entrega inmediata desde stock",
    image: "/placeholder.svg?height=400&width=600&text=Equipos+de+Protección",
  },
  {
    id: "asesorias",
    icon: Wrench,
    title: "Asesorías Técnicas Especializadas",
    shortDescription: "Consultoría especializada en procesos mineros y gestión de riesgos.",
    fullDescription:
      "Nuestro equipo de ingenieros y especialistas brinda asesoría técnica integral para optimizar procesos mineros, implementar sistemas de gestión de seguridad y mejorar la eficiencia operacional. Trabajamos de la mano con su equipo técnico para lograr los mejores resultados.",
    features: [
      "Análisis detallado de riesgos operacionales",
      "Diseño de protocolos de seguridad personalizados",
      "Optimización de procesos productivos",
      "Implementación de sistemas de gestión",
      "Auditorías técnicas especializadas",
      "Acompañamiento en certificaciones",
    ],
    benefits: [
      "Incremento del 25% en eficiencia operacional",
      "Reducción significativa de costos operativos",
      "Mejora en indicadores de seguridad",
      "Cumplimiento normativo asegurado",
    ],
    pricing: "Desde $2.500.000 COP por proyecto",
    duration: "2-12 semanas según alcance",
    image: "/placeholder.svg?height=400&width=600&text=Asesoría+Técnica",
  },
  {
    id: "consultoria",
    icon: FileText,
    title: "Consultoría Minera Integral",
    shortDescription: "Servicios integrales de consultoría para proyectos mineros sostenibles.",
    fullDescription:
      "Ofrecemos consultoría integral para proyectos mineros desde la fase de exploración hasta el cierre de minas. Nuestro enfoque incluye aspectos técnicos, ambientales, sociales y económicos para garantizar la sostenibilidad y viabilidad de los proyectos.",
    features: [
      "Estudios de factibilidad técnico-económica",
      "Gestión ambiental y social",
      "Diseño de planes de cierre de minas",
      "Cumplimiento normativo integral",
      "Evaluación de impacto ambiental",
      "Relacionamiento con comunidades",
    ],
    benefits: [
      "Proyectos mineros sostenibles y rentables",
      "Licencias ambientales expeditas",
      "Relaciones armoniosas con comunidades",
      "Cumplimiento de estándares internacionales",
    ],
    pricing: "Desde $15.000.000 COP por proyecto",
    duration: "3-18 meses según complejidad",
    image: "/placeholder.svg?height=400&width=600&text=Consultoría+Minera",
  },
]

const stats = [
  { number: "500+", label: "Proyectos Completados" },
  { number: "50+", label: "Empresas Atendidas" },
  { number: "10,000+", label: "Personas Capacitadas" },
  { number: "15+", label: "Años de Experiencia" },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Nuestros Servicios</h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Soluciones integrales para la transformación de la seguridad minera y social en Colombia
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-sm md:text-base opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-blue-100 text-blue-800">Servicios Especializados</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Transformamos la Industria Minera</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Cada servicio está diseñado para abordar los desafíos específicos de la minería moderna
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon
              return (
                <Card key={service.id} className="group hover:shadow-xl transition-all duration-300">
                  <div className="relative overflow-hidden">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      width={600}
                      height={400}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <div className="bg-white/90 p-3 rounded-full">
                        <IconComponent className="h-6 w-6 text-blue-600" />
                      </div>
                    </div>
                  </div>

                  <CardHeader>
                    <CardTitle className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600">{service.shortDescription}</CardDescription>
                  </CardHeader>

                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-500">Duración:</span>
                        <span className="font-medium text-gray-900">{service.duration}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-500">Precio:</span>
                        <span className="font-medium text-green-600">{service.pricing}</span>
                      </div>
                      <Button
                        className="w-full bg-blue-600 hover:bg-blue-700"
                        onClick={() => document.getElementById("cotizador")?.scrollIntoView({ behavior: "smooth" })}
                      >
                        <Calculator className="mr-2 h-4 w-4" />
                        Solicitar Cotización
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Detalles de Nuestros Servicios</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Conoce en profundidad cada uno de nuestros servicios especializados
            </p>
          </div>

          <Tabs defaultValue="capacitaciones" className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-8">
              {services.map((service) => (
                <TabsTrigger key={service.id} value={service.id} className="text-xs md:text-sm">
                  {service.title.split(" ")[0]}
                </TabsTrigger>
              ))}
            </TabsList>

            {services.map((service) => {
              const IconComponent = service.icon
              return (
                <TabsContent key={service.id} value={service.id}>
                  <div className="grid lg:grid-cols-2 gap-12 items-start">
                    <div>
                      <div className="flex items-center mb-6">
                        <div className="bg-blue-100 p-4 rounded-full mr-4">
                          <IconComponent className="h-8 w-8 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                          <p className="text-gray-600">{service.shortDescription}</p>
                        </div>
                      </div>

                      <p className="text-gray-700 mb-6 leading-relaxed">{service.fullDescription}</p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                        <div className="bg-blue-50 p-6 rounded-lg">
                          <h4 className="font-semibold text-gray-900 mb-2">Duración</h4>
                          <p className="text-blue-600 font-medium">{service.duration}</p>
                        </div>
                        <div className="bg-green-50 p-6 rounded-lg">
                          <h4 className="font-semibold text-gray-900 mb-2">Inversión</h4>
                          <p className="text-green-600 font-medium">{service.pricing}</p>
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-4">
                        <Button
                          size="lg"
                          className="bg-blue-600 hover:bg-blue-700"
                          onClick={() => document.getElementById("cotizador")?.scrollIntoView({ behavior: "smooth" })}
                        >
                          <Calculator className="mr-2 h-5 w-5" />
                          Cotizar Ahora
                        </Button>
                        <Button size="lg" variant="outline" className="bg-transparent">
                          <Phone className="mr-2 h-5 w-5" />
                          Llamar Ahora
                        </Button>
                      </div>
                    </div>

                    <div className="space-y-8">
                      {/* Features */}
                      <Card>
                        <CardHeader>
                          <CardTitle className="text-xl font-semibold text-gray-900">¿Qué Incluye?</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-3">
                            {service.features.map((feature, index) => (
                              <li key={index} className="flex items-start">
                                <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-700">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>

                      {/* Benefits */}
                      <Card>
                        <CardHeader>
                          <CardTitle className="text-xl font-semibold text-gray-900">Beneficios Clave</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-3">
                            {service.benefits.map((benefit, index) => (
                              <li key={index} className="flex items-start">
                                <Star className="h-5 w-5 text-yellow-500 mr-3 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-700">{benefit}</span>
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </TabsContent>
              )
            })}
          </Tabs>
        </div>
      </section>

      {/* Quote Calculator */}
      <section id="cotizador" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-green-100 text-green-800">Cotizador Inteligente</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Calcula tu Cotización</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Obtén una cotización personalizada en minutos con nuestro sistema inteligente
            </p>
          </div>

          <ServiceQuoteCalculator />
        </div>
      </section>

      {/* Testimonials */}
      <ServiceTestimonials />

      {/* FAQ */}
      <ServiceFAQ />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Listo para Transformar tu Operación Minera?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Nuestro equipo de expertos está listo para ayudarte a implementar las mejores prácticas de seguridad
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3">
              <Phone className="mr-2 h-5 w-5" />
              Llamar Ahora
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 bg-transparent"
              onClick={() => document.getElementById("cotizador")?.scrollIntoView({ behavior: "smooth" })}
            >
              <Calculator className="mr-2 h-5 w-5" />
              Cotizar Online
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
