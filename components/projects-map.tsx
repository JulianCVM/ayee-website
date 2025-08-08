import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, BarChart3 } from "lucide-react"

interface Project {
  id: number
  title: string
  location: string
  year: string
  category: string
  beneficiaries: string
  status: string
}

interface ProjectsMapProps {
  projects: Project[]
}

export default function ProjectsMap({ projects }: ProjectsMapProps) {
  const departmentStats = projects.reduce(
    (acc, project) => {
      const department = project.location.split(", ")[1] || project.location
      if (!acc[department]) {
        acc[department] = { count: 0, beneficiaries: 0 }
      }
      acc[department].count += 1
      acc[department].beneficiaries += Number.parseInt(project.beneficiaries.replace(/\D/g, "")) || 0
      return acc
    },
    {} as Record<string, { count: number; beneficiaries: number }>,
  )

  const totalProjects = projects.length
  const totalBeneficiaries = Object.values(departmentStats).reduce((sum, dept) => sum + dept.beneficiaries, 0)

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-green-100 text-green-800">Mapa de Impacto</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Presencia Nacional</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Nuestro trabajo se extiende por todo el territorio colombiano, llegando a las comunidades que más lo
            necesitan
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Map Visualization */}
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-900 flex items-center">
                <MapPin className="h-6 w-6 text-green-600 mr-3" />
                Colombia - Territorio de Transformación
              </CardTitle>
              <CardDescription>
                Ubicación de nuestros proyectos y el alcance de nuestro impacto territorial
              </CardDescription>
            </CardHeader>
            <CardContent>
              {/* Interactive Map Placeholder */}
              <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-lg p-12 text-center">
                <div className="text-8xl mb-6">🗺️</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Mapa Interactivo</h3>
                <p className="text-gray-600 mb-6">Explora nuestros proyectos por ubicación geográfica</p>

                {/* Summary Stats */}
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="text-3xl font-bold text-green-600 mb-1">{totalProjects}</div>
                    <div className="text-sm text-gray-600">Proyectos Totales</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="text-3xl font-bold text-blue-600 mb-1">{totalBeneficiaries.toLocaleString()}</div>
                    <div className="text-sm text-gray-600">Beneficiarios</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Department Statistics */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <BarChart3 className="h-6 w-6 text-green-600" />
              <h3 className="text-2xl font-bold text-gray-900">Impacto por Departamento</h3>
            </div>

            <div className="space-y-4">
              {Object.entries(departmentStats)
                .sort(([, a], [, b]) => b.count - a.count)
                .map(([department, stats]) => (
                  <Card key={department} className="hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="w-3 h-3 rounded-full bg-green-500" />
                          <div>
                            <h4 className="font-semibold text-gray-900 text-lg">{department}</h4>
                            <p className="text-sm text-gray-600">
                              {stats.beneficiaries.toLocaleString()} personas impactadas
                            </p>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-green-600">{stats.count}</div>
                          <div className="text-xs text-gray-500">proyectos</div>
                        </div>
                      </div>

                      {/* Progress bar */}
                      <div className="mt-4">
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-green-500 h-2 rounded-full transition-all duration-500"
                            style={{ width: `${(stats.count / totalProjects) * 100}%` }}
                          />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>

            {/* Legend */}
            <Card className="bg-gradient-to-r from-green-50 to-blue-50">
              <CardContent className="p-6">
                <h4 className="font-semibold text-gray-900 mb-4">Leyenda del Mapa</h4>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                    <span className="text-gray-700">Proyectos Completados</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-blue-500" />
                    <span className="text-gray-700">Proyectos En Progreso</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <span className="text-gray-700">Proyectos Planificados</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
