"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Calendar, Users, Filter, Search, ArrowRight, Eye } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ProjectsMap from "@/components/projects-map"

const projects = [
  {
    id: 1,
    title: "Fortalecimiento de la Seguridad Minera en El Bagre",
    location: "El Bagre, Antioquia",
    year: "2024",
    category: "Seguridad Minera",
    sector: "Minería Aurífera",
    beneficiaries: "450 mineros",
    image: "/placeholder.svg?height=300&width=400&text=Proyecto+El+Bagre",
    description: "Implementación integral de protocolos de seguridad y capacitación técnica para mineros artesanales.",
    impact: "85% reducción en accidentes laborales",
    status: "Completado",
    testimonial: "Este proyecto cambió nuestra forma de trabajar. Ahora nos sentimos seguros en la mina.",
    testimonialAuthor: "Carlos Mendoza, Líder Minero",
  },
  {
    id: 2,
    title: "Programa de Desarrollo Comunitario Integral",
    location: "Istmina, Chocó",
    year: "2024",
    category: "Desarrollo Social",
    sector: "Comunidades Étnicas",
    beneficiaries: "1,200 personas",
    image: "/placeholder.svg?height=300&width=400&text=Proyecto+Istmina",
    description:
      "Fortalecimiento organizacional y construcción de capacidades para el desarrollo territorial sostenible.",
    impact: "12 organizaciones fortalecidas",
    status: "En Progreso",
    testimonial: "AYEE nos ayudó a organizarnos mejor y a soñar con un futuro próspero para nuestros hijos.",
    testimonialAuthor: "Doña Mercedes Palacios, Lideresa Comunitaria",
  },
  {
    id: 3,
    title: "Capacitación en SST para Cooperativas Mineras",
    location: "Sogamoso, Boyacá",
    year: "2023",
    category: "Capacitación",
    sector: "Minería de Carbón",
    beneficiaries: "320 trabajadores",
    image: "/placeholder.svg?height=300&width=400&text=Proyecto+Sogamoso",
    description: "Programa especializado en seguridad y salud en el trabajo para operaciones mineras de carbón.",
    impact: "100% trabajadores certificados",
    status: "Completado",
    testimonial: "La capacitación nos salvó vidas. Ahora sabemos cómo prevenir accidentes.",
    testimonialAuthor: "Roberto Silva, Coordinador de Seguridad",
  },
  {
    id: 4,
    title: "Implementación de Tecnologías Limpias",
    location: "Condoto, Chocó",
    year: "2023",
    category: "Medio Ambiente",
    sector: "Minería Aurífera",
    beneficiaries: "200 mineros",
    image: "/placeholder.svg?height=300&width=400&text=Proyecto+Condoto",
    description: "Introducción de tecnologías ambientalmente responsables para la extracción aurífera.",
    impact: "60% reducción en uso de mercurio",
    status: "Completado",
    testimonial: "Aprendimos a extraer oro sin dañar nuestros ríos. Es el futuro que queremos.",
    testimonialAuthor: "Ana María Córdoba, Minera Artesanal",
  },
  {
    id: 5,
    title: "Fortalecimiento Empresarial para MIPYMES Mineras",
    location: "Marmato, Caldas",
    year: "2023",
    category: "Desarrollo Empresarial",
    sector: "Minería Aurífera",
    beneficiaries: "80 empresarios",
    image: "/placeholder.svg?height=300&width=400&text=Proyecto+Marmato",
    description: "Acompañamiento técnico y empresarial para el fortalecimiento de pequeñas empresas mineras.",
    impact: "40% aumento en productividad",
    status: "Completado",
    testimonial: "Nuestro negocio creció de manera sostenible gracias al acompañamiento de AYEE.",
    testimonialAuthor: "Luis Fernando Gómez, Empresario Minero",
  },
  {
    id: 6,
    title: "Construcción de Paz Territorial",
    location: "Tumaco, Nariño",
    year: "2022",
    category: "Construcción de Paz",
    sector: "Comunidades Rurales",
    beneficiaries: "800 personas",
    image: "/placeholder.svg?height=300&width=400&text=Proyecto+Tumaco",
    description:
      "Iniciativas de reconciliación y construcción de tejido social en territorios afectados por el conflicto.",
    impact: "15 iniciativas de paz implementadas",
    status: "Completado",
    testimonial: "Volvimos a creer en la posibilidad de vivir en paz en nuestro territorio.",
    testimonialAuthor: "Padre Miguel Ángel, Líder Comunitario",
  },
]

const categories = [
  "Todas",
  "Seguridad Minera",
  "Desarrollo Social",
  "Capacitación",
  "Medio Ambiente",
  "Desarrollo Empresarial",
  "Construcción de Paz",
]
const locations = ["Todas", "Antioquia", "Chocó", "Boyacá", "Caldas", "Nariño"]
const years = ["Todos", "2024", "2023", "2022", "2021"]
const statuses = ["Todos", "Completado", "En Progreso", "Planificado"]

export default function ProjectsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("Todas")
  const [selectedLocation, setSelectedLocation] = useState("Todas")
  const [selectedYear, setSelectedYear] = useState("Todos")
  const [selectedStatus, setSelectedStatus] = useState("Todos")

  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "Todas" || project.category === selectedCategory
    const matchesLocation = selectedLocation === "Todas" || project.location.includes(selectedLocation)
    const matchesYear = selectedYear === "Todos" || project.year === selectedYear
    const matchesStatus = selectedStatus === "Todos" || project.status === selectedStatus

    return matchesSearch && matchesCategory && matchesLocation && matchesYear && matchesStatus
  })

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-green-800 via-green-700 to-yellow-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0">
          <div className="grid grid-cols-6 gap-4 opacity-10 transform rotate-12 scale-150">
            {[...Array(24)].map((_, i) => (
              <div key={i} className="bg-white/20 rounded-lg h-32" />
            ))}
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-white/20 text-white border-white/30 text-lg px-4 py-2">Nuestro Impacto</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Proyectos que <span className="text-yellow-300">Dejan Huella</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed">
              Cada acción, una historia de transformación
            </p>
            <p className="text-lg opacity-80 max-w-2xl mx-auto">
              Descubre cómo hemos trabajado junto a comunidades, empresas e instituciones para construir territorios más
              seguros, prósperos y en paz.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2">500+</div>
              <div className="text-sm md:text-base opacity-90">Proyectos Ejecutados</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2">50+</div>
              <div className="text-sm md:text-base opacity-90">Comunidades Impactadas</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2">8</div>
              <div className="text-sm md:text-base opacity-90">Departamentos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2">15+</div>
              <div className="text-sm md:text-base opacity-90">Años de Experiencia</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-gray-50 sticky top-16 z-40 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                type="text"
                placeholder="Buscar proyectos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-3 items-center">
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4 text-gray-600" />
                <span className="text-sm font-medium text-gray-700">Filtrar por:</span>
              </div>

              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Categoría" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                <SelectTrigger className="w-36">
                  <SelectValue placeholder="Ubicación" />
                </SelectTrigger>
                <SelectContent>
                  {locations.map((location) => (
                    <SelectItem key={location} value={location}>
                      {location}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedYear} onValueChange={setSelectedYear}>
                <SelectTrigger className="w-28">
                  <SelectValue placeholder="Año" />
                </SelectTrigger>
                <SelectContent>
                  {years.map((year) => (
                    <SelectItem key={year} value={year}>
                      {year}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedStatus} onValueChange={setSelectedStatus}>
                <SelectTrigger className="w-36">
                  <SelectValue placeholder="Estado" />
                </SelectTrigger>
                <SelectContent>
                  {statuses.map((status) => (
                    <SelectItem key={status} value={status}>
                      {status}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Results count */}
          <div className="mt-4 text-sm text-gray-600">
            Mostrando {filteredProjects.length} de {projects.length} proyectos
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Card
                key={project.id}
                className="group hover:shadow-2xl transition-all duration-300 overflow-hidden border-0 shadow-lg"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Badges */}
                  <div className="absolute top-4 left-4 space-y-2">
                    <Badge
                      className={`${project.status === "Completado" ? "bg-green-600" : project.status === "En Progreso" ? "bg-blue-600" : "bg-yellow-600"} text-white`}
                    >
                      {project.status}
                    </Badge>
                    <Badge variant="secondary" className="bg-white/90 text-gray-700">
                      {project.category}
                    </Badge>
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button className="bg-white text-gray-900 hover:bg-gray-100">
                      <Eye className="mr-2 h-4 w-4" />
                      Ver Historia
                    </Button>
                  </div>
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
                  <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-green-600 transition-colors line-clamp-2">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 line-clamp-3 leading-relaxed">
                    {project.description}
                  </CardDescription>
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

                    <div className="bg-green-50 p-3 rounded-lg">
                      <p className="text-sm font-medium text-green-800">Impacto: {project.impact}</p>
                    </div>

                    <Link href={`/proyectos/${project.id}`}>
                      <Button
                        variant="outline"
                        className="w-full group-hover:bg-green-600 group-hover:text-white group-hover:border-green-600 transition-all bg-transparent"
                      >
                        Ver Historia Completa
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">No se encontraron proyectos</h3>
              <p className="text-gray-600 mb-6">Intenta ajustar los filtros de búsqueda</p>
              <Button
                onClick={() => {
                  setSearchTerm("")
                  setSelectedCategory("Todas")
                  setSelectedLocation("Todas")
                  setSelectedYear("Todos")
                  setSelectedStatus("Todos")
                }}
                className="bg-green-600 hover:bg-green-700"
              >
                Limpiar Filtros
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Impact Map */}
      <ProjectsMap projects={projects} />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-yellow-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute right-0 top-0 w-1/2 h-full opacity-20">
          <Image
            src="/placeholder.svg?height=400&width=600&text=Trabajo+Comunitario"
            alt="Trabajo comunitario"
            width={600}
            height={400}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Quieres que Trabajemos en tu Territorio?</h2>
            <p className="text-xl mb-8 opacity-90 leading-relaxed">
              Cada territorio tiene su propia historia y potencial. Trabajemos juntos para construir la transformación
              que tu comunidad necesita.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contacto">
                <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3">
                  Iniciar Conversación
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/servicios">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-green-600 px-8 py-3 bg-transparent"
                >
                  Ver Nuestros Servicios
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
