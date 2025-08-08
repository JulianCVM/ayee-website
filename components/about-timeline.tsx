import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, Users, TrendingUp, CheckCircle, Building } from "lucide-react"

const timelineEvents = [
  {
    year: "2008",
    title: "Fundación de AYEE",
    description: "Inicio de operaciones como empresa especializada en consultoría de SST y servicios empresariales.",
    icon: Building,
    color: "primary",
    achievements: [
      "Constitución legal de la empresa",
      "Primeros contratos de consultoría",
      "Equipo fundador de 3 profesionales",
    ],
  },
  {
    year: "2010",
    title: "Expansión de Servicios",
    description: "Ampliación del portafolio con capacitaciones especializadas y auditorías corporativas.",
    icon: TrendingUp,
    color: "secondary",
    achievements: ["15 empresas atendidas", "Certificación en SST", "Modalidad virtual implementada"],
  },
  {
    year: "2012",
    title: "Reconocimiento Regional",
    description: "Posicionamiento como referente en consultoría SST a nivel regional.",
    icon: Award,
    color: "primary",
    achievements: ["50+ proyectos ejecutados", "Alianzas estratégicas", "Equipo de 8 profesionales"],
  },
  {
    year: "2015",
    title: "Certificación de Calidad",
    description: "Obtención de certificaciones internacionales y reconocimientos de calidad.",
    icon: CheckCircle,
    color: "secondary",
    achievements: ["ISO 9001:2015", "Premio Regional de Calidad", "100+ empresas atendidas"],
  },
  {
    year: "2018",
    title: "Diversificación Sectorial",
    description: "Expansión a múltiples sectores económicos y servicios especializados.",
    icon: Users,
    color: "primary",
    achievements: ["8 sectores económicos", "Servicios de interventoría", "200+ proyectos completados"],
  },
  {
    year: "2020",
    title: "Transformación Digital",
    description: "Adaptación tecnológica y servicios virtuales especializados.",
    icon: TrendingUp,
    color: "secondary",
    achievements: ["Plataforma virtual propia", "Capacitaciones online", "Consultoría remota"],
  },
  {
    year: "2023",
    title: "Liderazgo Nacional",
    description: "Consolidación como empresa líder en SST y procesos estratégicos corporativos.",
    icon: Award,
    color: "primary",
    achievements: ["500+ proyectos ejecutados", "Presencia en 8 departamentos", "Equipo de 25+ profesionales"],
  },
]

export default function AboutTimeline() {
  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <div className="w-16 h-1 bg-[#6e161a] mx-auto mb-6"></div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#1a896c] mb-4">Nuestra Trayectoria</h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            15+ años de experiencia construyendo soluciones empresariales y fortaleciendo organizaciones
          </p>
        </div>

        {/* Mobile Timeline */}
        <div className="block lg:hidden">
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-[#1a896c]"></div>
            <div className="space-y-8">
              {timelineEvents.map((event, index) => {
                const IconComponent = event.icon
                const colorClass = event.color === "primary" ? "[#1a896c]" : "[#6e161a]"
                const bgColorClass = event.color === "primary" ? "bg-[#1a896c]" : "bg-[#6e161a]"

                return (
                  <div key={index} className="relative flex items-start">
                    <div className={`${bgColorClass} rounded-full p-3 z-10 shadow-lg`}>
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <div className="ml-6 flex-1">
                      <Card className="shadow-lg border-0 bg-white">
                        <CardContent className="p-6">
                          <div className="flex items-center justify-between mb-3">
                            <Badge className={`${bgColorClass} text-white px-3 py-1`}>{event.year}</Badge>
                          </div>
                          <h3 className={`text-lg md:text-xl font-bold text-${colorClass} mb-3`}>{event.title}</h3>
                          <p className="text-gray-600 mb-4 leading-relaxed">{event.description}</p>
                          <div className="space-y-2">
                            {event.achievements.map((achievement, idx) => (
                              <div key={idx} className="flex items-center space-x-2">
                                <CheckCircle className={`h-4 w-4 text-${colorClass} flex-shrink-0`} />
                                <span className="text-sm text-gray-700">{achievement}</span>
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Desktop Timeline */}
        <div className="hidden lg:block">
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-[#1a896c]"></div>
            <div className="space-y-12">
              {timelineEvents.map((event, index) => {
                const IconComponent = event.icon
                const colorClass = event.color === "primary" ? "[#1a896c]" : "[#6e161a]"
                const bgColorClass = event.color === "primary" ? "bg-[#1a896c]" : "bg-[#6e161a]"
                const isLeft = index % 2 === 0

                return (
                  <div key={index} className="relative flex items-center">
                    <div
                      className={`absolute left-1/2 transform -translate-x-1/2 ${bgColorClass} rounded-full p-4 z-10 shadow-lg`}
                    >
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>

                    <div className={`w-5/12 ${isLeft ? "pr-8 text-right" : "ml-auto pl-8 text-left"}`}>
                      <Card className="shadow-xl border-0 bg-white hover:shadow-2xl transition-shadow duration-300">
                        <CardContent className="p-6">
                          <div className={`flex items-center ${isLeft ? "justify-end" : "justify-start"} mb-3`}>
                            <Badge className={`${bgColorClass} text-white px-4 py-2 text-lg font-semibold`}>
                              {event.year}
                            </Badge>
                          </div>
                          <h3 className={`text-xl font-bold text-${colorClass} mb-3`}>{event.title}</h3>
                          <p className="text-gray-600 mb-4 leading-relaxed">{event.description}</p>
                          <div className="space-y-2">
                            {event.achievements.map((achievement, idx) => (
                              <div
                                key={idx}
                                className={`flex items-center space-x-2 ${isLeft ? "justify-end" : "justify-start"}`}
                              >
                                <CheckCircle
                                  className={`h-4 w-4 text-${colorClass} flex-shrink-0 ${isLeft ? "order-2" : ""}`}
                                />
                                <span className="text-sm text-gray-700">{achievement}</span>
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg border-2 border-[#1a896c]">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-[#1a896c] mb-2">Nuestro Impacto en Números</h3>
            <p className="text-gray-600">Resultados que respaldan nuestra trayectoria empresarial</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-[#1a896c] text-white rounded-lg p-4 mb-2">
                <div className="text-2xl md:text-3xl font-bold">500+</div>
              </div>
              <p className="text-sm text-gray-600">Proyectos Ejecutados</p>
            </div>
            <div className="text-center">
              <div className="bg-[#6e161a] text-white rounded-lg p-4 mb-2">
                <div className="text-2xl md:text-3xl font-bold">200+</div>
              </div>
              <p className="text-sm text-gray-600">Empresas Atendidas</p>
            </div>
            <div className="text-center">
              <div className="bg-[#1a896c] text-white rounded-lg p-4 mb-2">
                <div className="text-2xl md:text-3xl font-bold">8</div>
              </div>
              <p className="text-sm text-gray-600">Departamentos</p>
            </div>
            <div className="text-center">
              <div className="bg-[#6e161a] text-white rounded-lg p-4 mb-2">
                <div className="text-2xl md:text-3xl font-bold">15+</div>
              </div>
              <p className="text-sm text-gray-600">Años de Experiencia</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
