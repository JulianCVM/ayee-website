import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Building, Award, TrendingUp, CheckCircle, Target, Users, Wrench, Briefcase } from "lucide-react"
import Image from "next/image"

const departments = [
  { name: "Antioquia", projects: 85, companies: 45, color: "primary" },
  { name: "Cundinamarca", projects: 72, companies: 38, color: "secondary" },
  { name: "Valle del Cauca", projects: 58, companies: 32, color: "primary" },
  { name: "Santander", projects: 43, companies: 25, color: "secondary" },
  { name: "Atlántico", projects: 36, companies: 22, color: "primary" },
  { name: "Bolívar", projects: 29, companies: 18, color: "secondary" },
  { name: "Boyacá", projects: 24, companies: 15, color: "primary" },
  { name: "Caldas", projects: 18, companies: 12, color: "secondary" },
]

const sectors = [
  {
    name: "Manufactura",
    projects: 125,
    companies: 68,
    description: "Implementación de sistemas SST en plantas industriales",
    icon: Wrench,
  },
  {
    name: "Servicios",
    projects: 98,
    companies: 52,
    description: "Consultoría en procesos estratégicos corporativos",
    icon: Briefcase,
  },
  {
    name: "Construcción",
    projects: 87,
    companies: 41,
    description: "Auditorías y capacitaciones especializadas",
    icon: Building,
  },
  {
    name: "Comercio",
    projects: 65,
    companies: 35,
    description: "Interventorías y asesorías técnicas",
    icon: TrendingUp,
  },
]

const methodology = [
  {
    step: "01",
    title: "Diagnóstico Empresarial",
    description: "Evaluación integral de necesidades y oportunidades de mejora organizacional",
    icon: Target,
    color: "primary",
  },
  {
    step: "02",
    title: "Diseño de Soluciones",
    description: "Desarrollo de estrategias personalizadas según el sector y tamaño empresarial",
    icon: Users,
    color: "secondary",
  },
  {
    step: "03",
    title: "Implementación Especializada",
    description: "Ejecución de proyectos con acompañamiento técnico y metodológico",
    icon: CheckCircle,
    color: "primary",
  },
  {
    step: "04",
    title: "Seguimiento y Mejora",
    description: "Monitoreo continuo y optimización de procesos implementados",
    icon: TrendingUp,
    color: "secondary",
  },
]

export default function ImpactMap() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <div className="w-16 h-1 bg-[#6e161a] mx-auto mb-6"></div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#1a896c] mb-4">
            Nuestro Alcance Empresarial
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Presencia activa en 8 departamentos de Colombia, transformando organizaciones de múltiples sectores
            económicos
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mb-16">
          {/* Map Visualization */}
          <div className="relative">
            <Card className="bg-gray-50 border-2 border-[#1a896c] shadow-lg">
              <CardContent className="p-6 md:p-8">
                <h3 className="text-xl font-bold text-[#1a896c] mb-6 text-center">Cobertura Nacional</h3>
                <div className="relative">
                  <Image
                    src="/placeholder.svg?height=400&width=500&text=Mapa+Colombia+AYEE+Empresas"
                    alt="Mapa de Colombia con presencia empresarial de AYEE"
                    width={500}
                    height={400}
                    className="w-full h-64 md:h-80 object-contain rounded-lg"
                  />
                  <div className="absolute top-4 right-4 bg-white p-3 rounded-lg shadow-lg">
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="w-3 h-3 bg-[#1a896c] rounded-full"></div>
                      <span className="text-xs text-gray-600">Proyectos Activos</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-[#6e161a] rounded-full"></div>
                      <span className="text-xs text-gray-600">Empresas Atendidas</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Departments List */}
          <div>
            <h3 className="text-xl font-bold text-[#1a896c] mb-6">Departamentos con Presencia</h3>
            <div className="space-y-4">
              {departments.map((dept, index) => {
                const bgColor = dept.color === "primary" ? "bg-[#1a896c]" : "bg-[#6e161a]"
                const borderColor = dept.color === "primary" ? "border-[#1a896c]" : "border-[#6e161a]"

                return (
                  <Card key={index} className={`border-l-4 ${borderColor} shadow-md hover:shadow-lg transition-shadow`}>
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <MapPin
                            className={`h-5 w-5 ${dept.color === "primary" ? "text-[#1a896c]" : "text-[#6e161a]"}`}
                          />
                          <h4 className="font-bold text-gray-900">{dept.name}</h4>
                        </div>
                        <div className="flex space-x-2">
                          <Badge className={`${bgColor} text-white text-xs px-2 py-1`}>{dept.projects} proyectos</Badge>
                          <Badge variant="outline" className={`${borderColor} text-xs px-2 py-1`}>
                            {dept.companies} empresas
                          </Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </div>

        {/* Sectors */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-xl md:text-2xl font-bold text-[#1a896c] mb-4">Sectores Económicos Atendidos</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Experiencia especializada en múltiples sectores de la economía colombiana
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sectors.map((sector, index) => {
              const IconComponent = sector.icon
              const colorClass = index % 2 === 0 ? "primary" : "secondary"
              const bgColor = colorClass === "primary" ? "bg-[#1a896c]" : "bg-[#6e161a]"
              const textColor = colorClass === "primary" ? "text-[#1a896c]" : "text-[#6e161a]"
              const borderColor = colorClass === "primary" ? "border-[#1a896c]" : "border-[#6e161a]"

              return (
                <Card
                  key={index}
                  className={`text-center border-t-4 ${borderColor} shadow-lg hover:shadow-xl transition-shadow`}
                >
                  <CardContent className="p-6">
                    <div className={`inline-flex p-3 rounded-full border-2 ${borderColor} mb-4`}>
                      <IconComponent className={`h-6 w-6 ${textColor}`} />
                    </div>
                    <h4 className={`text-lg font-bold ${textColor} mb-2`}>{sector.name}</h4>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">{sector.description}</p>
                    <div className="flex justify-center space-x-4 text-xs">
                      <div>
                        <div className={`text-lg font-bold ${textColor}`}>{sector.projects}</div>
                        <div className="text-gray-500">Proyectos</div>
                      </div>
                      <div>
                        <div className={`text-lg font-bold ${textColor}`}>{sector.companies}</div>
                        <div className="text-gray-500">Empresas</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Methodology */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-xl md:text-2xl font-bold text-[#1a896c] mb-4">Nuestra Metodología</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Un enfoque sistemático y personalizado para la transformación empresarial
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {methodology.map((step, index) => {
              const IconComponent = step.icon
              const bgColor = step.color === "primary" ? "bg-[#1a896c]" : "bg-[#6e161a]"
              const textColor = step.color === "primary" ? "text-[#1a896c]" : "text-[#6e161a]"
              const borderColor = step.color === "primary" ? "border-[#1a896c]" : "border-[#6e161a]"

              return (
                <Card
                  key={index}
                  className={`text-center border-t-4 ${borderColor} shadow-lg hover:shadow-xl transition-shadow`}
                >
                  <CardContent className="p-6">
                    <div
                      className={`inline-flex items-center justify-center w-12 h-12 ${bgColor} text-white rounded-full mb-4`}
                    >
                      <span className="font-bold text-lg">{step.step}</span>
                    </div>
                    <div className={`inline-flex p-3 rounded-full border-2 ${borderColor} mb-4`}>
                      <IconComponent className={`h-6 w-6 ${textColor}`} />
                    </div>
                    <h4 className={`text-lg font-bold ${textColor} mb-3`}>{step.title}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Impact Statistics */}
        <Card className="bg-gray-50 shadow-lg">
          <CardContent className="p-6 md:p-8">
            <div className="text-center mb-8">
              <h3 className="text-xl md:text-2xl font-bold text-[#1a896c] mb-2">Impacto Empresarial</h3>
              <p className="text-gray-600">Resultados medibles de nuestro trabajo con organizaciones</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              <div className="text-center">
                <div className="bg-white p-4 md:p-6 rounded-lg border-2 border-[#1a896c] mb-2">
                  <Award className="h-8 w-8 text-[#1a896c] mx-auto mb-2" />
                  <div className="text-2xl md:text-3xl font-bold text-[#1a896c]">375</div>
                </div>
                <p className="text-xs md:text-sm text-gray-600">Proyectos Ejecutados</p>
              </div>

              <div className="text-center">
                <div className="bg-white p-4 md:p-6 rounded-lg border-2 border-[#6e161a] mb-2">
                  <Building className="h-8 w-8 text-[#6e161a] mx-auto mb-2" />
                  <div className="text-2xl md:text-3xl font-bold text-[#6e161a]">207</div>
                </div>
                <p className="text-xs md:text-sm text-gray-600">Empresas Atendidas</p>
              </div>

              <div className="text-center">
                <div className="bg-white p-4 md:p-6 rounded-lg border-2 border-[#1a896c] mb-2">
                  <TrendingUp className="h-8 w-8 text-[#1a896c] mx-auto mb-2" />
                  <div className="text-2xl md:text-3xl font-bold text-[#1a896c]">15,247</div>
                </div>
                <p className="text-xs md:text-sm text-gray-600">Profesionales Capacitados</p>
              </div>

              <div className="text-center">
                <div className="bg-white p-4 md:p-6 rounded-lg border-2 border-[#6e161a] mb-2">
                  <MapPin className="h-8 w-8 text-[#6e161a] mx-auto mb-2" />
                  <div className="text-2xl md:text-3xl font-bold text-[#6e161a]">8</div>
                </div>
                <p className="text-xs md:text-sm text-gray-600">Departamentos</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
