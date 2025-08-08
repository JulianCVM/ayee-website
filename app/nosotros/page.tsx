"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Heart,
  Target,
  Users,
  Shield,
  Lightbulb,
  Handshake,
  Leaf,
  Award,
  Quote,
  ArrowRight,
  Mail,
  CheckCircle,
  Eye,
  Compass,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import AboutTimeline from "@/components/about-timeline"
import TeamMember from "@/components/team-member"
import ImpactMap from "@/components/impact-map"

const values = [
  {
    icon: Shield,
    title: "Transparencia",
    description: "Realizamos nuestra gestión de forma objetiva, clara y verificable.",
  },
  {
    icon: Users,
    title: "Respeto",
    description:
      "Interactuamos reconociendo los intereses colectivos, la diversidad individual, la sostenibilidad de los recursos naturales y la institucionalidad.",
  },
  {
    icon: Target,
    title: "Equidad",
    description: "Procedemos con justicia, igualdad e imparcialidad, buscando un impacto social positivo e inclusivo.",
  },
  {
    icon: Heart,
    title: "Integridad",
    description: "Actuamos con firmeza, rectitud, honestidad, coherencia y sinceridad.",
  },
]

const mainServices = [
  {
    icon: Lightbulb,
    title: "Consultoría Especializada",
    description:
      "Asesorías y consultorías especializadas en Seguridad y Salud en el Trabajo (SST) y procesos estratégicos corporativos.",
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
    description: "Capacitaciones, interventorías y servicios técnicos especializados para todo tipo de organizaciones.",
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
    description: "Suministro de equipos de protección personal y herramientas especializadas certificadas.",
    features: ["Equipos certificados", "Asesoría técnica especializada", "Entrega nacional", "Garantía de calidad"],
    color: "primary",
  },
]

const teamMembers = [
  {
    id: 1,
    name: "Dr. Carlos Mendoza",
    position: "Director Ejecutivo",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Especialista en Seguridad y Salud en el Trabajo con 20 años de experiencia en procesos estratégicos corporativos.",
    experience: "20+ años en SST",
    education: "PhD en Seguridad Industrial - Universidad Nacional",
    linkedin: "#",
    email: "carlos.mendoza@ayee.com.co",
  },
  {
    id: 2,
    name: "Dra. María González",
    position: "Directora de Servicios",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Especialista en gestión de procesos corporativos y desarrollo organizacional con enfoque en SST.",
    experience: "15+ años en consultoría empresarial",
    education: "Maestría en Administración - Universidad Javeriana",
    linkedin: "#",
    email: "maria.gonzalez@ayee.com.co",
  },
  {
    id: 3,
    name: "Ing. Roberto Silva",
    position: "Coordinador Técnico",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Ingeniero Industrial especializado en sistemas de gestión de seguridad y salud ocupacional.",
    experience: "12+ años en seguridad industrial",
    education: "Especialización en Seguridad Industrial - Universidad de los Andes",
    linkedin: "#",
    email: "roberto.silva@ayee.com.co",
  },
  {
    id: 4,
    name: "Lic. Ana Patricia Ruiz",
    position: "Coordinadora de Capacitaciones",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Licenciada en Educación especializada en capacitaciones corporativas y desarrollo de competencias.",
    experience: "10+ años en capacitación empresarial",
    education: "Especialización en Pedagogía - Universidad Pedagógica Nacional",
    linkedin: "#",
    email: "ana.ruiz@ayee.com.co",
  },
  {
    id: 5,
    name: "Ing. Luis Fernando Torres",
    position: "Especialista en Auditorías",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Ingeniero con experiencia en auditorías de sistemas de gestión y evaluación de procesos corporativos.",
    experience: "8+ años en auditorías",
    education: "Maestría en Gestión de Calidad - Universidad Nacional",
    linkedin: "#",
    email: "luis.torres@ayee.com.co",
  },
  {
    id: 6,
    name: "Psic. Carmen Delgado",
    position: "Especialista en Desarrollo Humano",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Psicóloga organizacional especializada en desarrollo humano y bienestar laboral.",
    experience: "9+ años en psicología organizacional",
    education: "Especialización en Psicología Organizacional - Universidad del Rosario",
    linkedin: "#",
    email: "carmen.delgado@ayee.com.co",
  },
]

const testimonials = [
  {
    quote:
      "AYEE nos ayudó a implementar nuestro sistema de SST de manera eficiente y cumpliendo con toda la normatividad vigente.",
    author: "Ing. Patricia Morales",
    role: "Gerente de Operaciones, Empresa Manufacturera",
    image: "/placeholder.svg?height=60&width=60",
  },
  {
    quote:
      "Las capacitaciones de AYEE han sido fundamentales para mejorar la cultura de seguridad en nuestra organización.",
    author: "Carlos Ramírez",
    role: "Director de RRHH, Empresa de Servicios",
    image: "/placeholder.svg?height=60&width=60",
  },
]

const objectives = [
  "Solucionar de manera efectiva las diferentes necesidades y requerimientos de nuestros clientes",
  "Enfocarnos en el cumplimiento de las expectativas y exigencias de los clientes",
  "Contribuir al éxito productivo y operativo de nuestros clientes",
  "Mantener la permanencia y rentabilidad del negocio en un ambiente saludable y seguro",
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <div className="w-16 h-1 bg-[#6e161a] mb-6"></div>
                <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-[#1a896c]">
                  ¿Quiénes <span className="text-[#6e161a]">Somos?</span>
                </h1>
                <p className="text-xl md:text-2xl mb-8 text-gray-600 leading-relaxed">
                  Expertos en soluciones empresariales integrales
                </p>
              </div>

              <div className="prose prose-lg">
                <p className="text-lg leading-relaxed text-gray-700">
                  Somos una <strong className="text-[#1a896c]">empresa de servicios</strong>, constituida por un equipo
                  interdisciplinario que se caracteriza por buscar y promover desde su quehacer{" "}
                  <strong className="text-[#1a896c]">soluciones innovadoras</strong> a problemas o retos empresariales
                  que motivan a nuestros clientes a consultarnos.
                </p>
                <p className="text-lg leading-relaxed text-gray-700">
                  Las importantes <strong className="text-[#6e161a]">alianzas</strong> con las que contamos hoy,
                  respaldan y garantizan la <strong className="text-[#1a896c]">calidad de nuestros servicios</strong>.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-[#1a896c] hover:bg-[#166c56] text-white font-semibold">
                  Conocer Nuestros Servicios
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-[#6e161a] text-[#6e161a] hover:bg-[#6e161a] hover:text-white bg-transparent"
                >
                  Contactar Asesor
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="border-4 border-[#1a896c] rounded-lg overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=250&width=300&text=Consultoría+SST"
                      alt="Consultoría en SST"
                      width={300}
                      height={250}
                      className="w-full h-auto"
                    />
                  </div>
                  <div className="border-4 border-[#6e161a] rounded-lg overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=200&width=300&text=Capacitaciones"
                      alt="Capacitaciones empresariales"
                      width={300}
                      height={200}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
                <div className="space-y-4 mt-8">
                  <div className="border-4 border-[#6e161a] rounded-lg overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=200&width=300&text=Auditorías"
                      alt="Auditorías especializadas"
                      width={300}
                      height={200}
                      className="w-full h-auto"
                    />
                  </div>
                  <div className="border-4 border-[#1a896c] rounded-lg overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=250&width=300&text=Servicios+Integrales"
                      alt="Servicios integrales"
                      width={300}
                      height={250}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="w-16 h-1 bg-[#6e161a] mx-auto mb-6"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a896c] mb-4">Nuestros Pilares Corporativos</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Los fundamentos que guían nuestro trabajo y definen nuestro compromiso con la excelencia
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {/* Mission */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white">
              <CardHeader className="text-center pb-4">
                <div className="bg-white border-4 border-[#1a896c] text-[#1a896c] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8" />
                </div>
                <CardTitle className="text-2xl font-bold text-[#1a896c]">Misión</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-700 leading-relaxed">
                  <strong className="text-[#1a896c]">Acciones y Estrategias Empresariales S.A.S</strong> es una empresa
                  de servicios de asesorías, consultorías, capacitaciones, auditorías e interventorías, especialista en
                  el área de <strong className="text-[#6e161a]">Seguridad y Salud en el Trabajo (SST)</strong> y
                  procesos estratégicos corporativos, competente para satisfacer las necesidades de todo tipo de
                  organización, pública o privada, en todos los sectores económicos a nivel local, regional y nacional.
                </p>
                <br />
                <p className="text-gray-700 leading-relaxed">
                  Comprometidos con el desarrollo humano, económico y social de las personas naturales y jurídicas que
                  se benefician de soluciones eficaces, con un equipo multidisciplinario calificado y alianzas
                  empresariales que nos permiten brindar servicios confiables y oportunos.
                </p>
              </CardContent>
            </Card>

            {/* Vision */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white">
              <CardHeader className="text-center pb-4">
                <div className="bg-white border-4 border-[#6e161a] text-[#6e161a] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Eye className="h-8 w-8" />
                </div>
                <CardTitle className="text-2xl font-bold text-[#6e161a]">Visión</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-700 leading-relaxed">
                  Para el <strong className="text-[#6e161a]">2030</strong>, Acciones y Estrategias Empresariales S.A.S
                  se proyecta como una empresa de servicios de asesorías, consultorías, capacitaciones, auditorías e
                  interventorías, en el área de Seguridad y Salud en el Trabajo,{" "}
                  <strong className="text-[#1a896c]">líder, con amplia cobertura, posicionada a nivel regional</strong>,
                  reconocida por la calidad de sus servicios, siempre a la vanguardia en la implementación de
                  herramientas técnicas, tecnológicas y operativas que promuevan soluciones eficaces para los
                  beneficiarios de nuestras acciones.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Values Grid */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-[#1a896c] text-center mb-8">Nuestros Valores</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => {
                const IconComponent = value.icon
                return (
                  <Card
                    key={index}
                    className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-[#6e161a] bg-white"
                  >
                    <CardContent className="p-6">
                      <div className="text-center">
                        <div className="bg-white border-2 border-[#6e161a] p-3 rounded-full inline-flex mb-4">
                          <IconComponent className="h-6 w-6 text-[#6e161a]" />
                        </div>
                        <h4 className="font-semibold text-[#1a896c] mb-3 text-lg">{value.title}</h4>
                        <p className="text-sm text-gray-600 leading-relaxed">{value.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>

          {/* Objectives and Quality Policy */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Objectives */}
            <Card className="bg-white border-l-4 border-[#1a896c] shadow-lg">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Compass className="h-8 w-8 text-[#1a896c]" />
                  <CardTitle className="text-xl font-bold text-[#1a896c]">Objetivos Corporativos</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {objectives.map((objective, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-[#6e161a] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm leading-relaxed">{objective}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quality Policy */}
            <Card className="bg-white border-l-4 border-[#6e161a] shadow-lg">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Award className="h-8 w-8 text-[#6e161a]" />
                  <CardTitle className="text-xl font-bold text-[#6e161a]">Política de Calidad</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Trabajamos acorde con la <strong className="text-[#1a896c]">legislación aplicable vigente</strong> y
                  los requerimientos del cliente, encaminando nuestros esfuerzos hacia la permanencia y rentabilidad del
                  negocio, en un ambiente saludable y seguro.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Deseamos destacarnos al proveer a nuestros clientes un{" "}
                  <strong className="text-[#6e161a]">servicio de calidad</strong>, que nos permita contribuir en su
                  éxito productivo y operativo, por ende en el nuestro.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* History & Timeline */}
      <AboutTimeline />

      {/* Testimonials */}
      <section className="py-20 bg-[#1a896c] text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="w-16 h-1 bg-white mx-auto mb-6"></div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Lo que Dicen Nuestros Clientes</h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Testimonios de empresas que han confiado en nuestros servicios especializados
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white text-gray-800 border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <Quote className="h-8 w-8 text-[#6e161a] flex-shrink-0 mt-1" />
                    <div>
                      <blockquote className="text-lg leading-relaxed mb-6 text-gray-700">
                        "{testimonial.quote}"
                      </blockquote>
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-[#1a896c] rounded-full flex items-center justify-center">
                          <span className="text-white font-bold text-lg">{testimonial.author.charAt(0)}</span>
                        </div>
                        <div>
                          <p className="font-semibold text-[#1a896c]">{testimonial.author}</p>
                          <p className="text-sm text-gray-600">{testimonial.role}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="w-16 h-1 bg-[#6e161a] mx-auto mb-6"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a896c] mb-4">Nuestro Equipo</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Un equipo multidisciplinario de profesionales especializados en SST y procesos corporativos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <TeamMember key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach & Impact Map */}
      <ImpactMap />

      {/* Call to Action */}
      <section className="py-20 bg-[#6e161a] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Necesitas Soluciones Empresariales Especializadas?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Contáctanos para conocer cómo nuestros servicios de consultoría, capacitación y comercialización pueden
            impulsar el éxito de tu organización.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contacto">
              <Button size="lg" className="bg-white text-[#6e161a] hover:bg-gray-100 px-8 py-3">
                <Mail className="mr-2 h-5 w-5" />
                Solicitar Consulta
              </Button>
            </Link>
            <Link href="/servicios">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#6e161a] px-8 py-3 bg-transparent"
              >
                Ver Nuestros Servicios
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
