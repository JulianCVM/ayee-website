import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Users, Calendar, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const projects = [
  {
    id: 1,
    title: "Fortalecimiento de la Seguridad Minera en El Bagre",
    location: "El Bagre, Antioquia",
    year: "2024",
    beneficiaries: "450 mineros",
    image: "/placeholder.svg?height=300&width=400&text=Proyecto+El+Bagre",
    description: "Implementación integral de protocolos de seguridad y capacitación técnica para mineros artesanales.",
    impact: "85% reducción en accidentes laborales",
    category: "Seguridad Minera",
  },
  {
    id: 2,
    title: "Programa de Desarrollo Comunitario Integral",
    location: "Istmina, Chocó",
    year: "2024",
    beneficiaries: "1,200 personas",
    image: "/placeholder.svg?height=300&width=400&text=Proyecto+Istmina",
    description:
      "Fortalecimiento organizacional y construcción de capacidades para el desarrollo territorial sostenible.",
    impact: "12 organizaciones fortalecidas",
    category: "Desarrollo Social",
  },
  {
    id: 3,
    title: "Implementación de Tecnologías Limpias",
    location: "Condoto, Chocó",
    year: "2023",
    beneficiaries: "200 mineros",
    image: "/placeholder.svg?height=300&width=400&text=Proyecto+Condoto",
    description: "Introducción de tecnologías ambientalmente responsables para la extracción aurífera.",
    impact: "60% reducción en uso de mercurio",
    category: "Medio Ambiente",
  },
]

export default function ProjectsPreview() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-[#1a896c]/10 text-[#1a896c]">Nuestros Proyectos</Badge>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Transformando Territorios</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Cada proyecto es una historia de transformación que impacta positivamente las comunidades mineras de
            Colombia
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <div className="relative overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-[#1a896c] text-white">{project.category}</Badge>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <CardHeader>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-1" />
                    {project.location}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {project.year}
                  </div>
                </div>
                <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-[#1a896c] transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-gray-600">{project.description}</CardDescription>
              </CardHeader>

              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Beneficiarios:</span>
                    <span className="font-medium text-gray-900 flex items-center">
                      <Users className="h-4 w-4 mr-1" />
                      {project.beneficiaries}
                    </span>
                  </div>

                  <div className="bg-[#1a896c]/10 p-3 rounded-lg">
                    <p className="text-sm font-medium text-[#1a896c]">Impacto: {project.impact}</p>
                  </div>

                  <Button
                    variant="outline"
                    className="w-full group-hover:bg-[#1a896c] group-hover:text-white group-hover:border-[#1a896c] transition-all bg-transparent"
                  >
                    Ver Historia Completa
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
