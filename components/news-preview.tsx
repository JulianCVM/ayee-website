import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, User, Clock, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const articles = [
  {
    id: 1,
    title: "Nuevas Regulaciones de Seguridad Minera Transforman el Sector en Colombia",
    excerpt:
      "Análisis completo de las nuevas normativas que entrarán en vigencia en 2024 y su impacto en la industria minera nacional.",
    image: "/placeholder.svg?height=300&width=500&text=Regulaciones+Mineras",
    author: "Dr. Carlos Mendoza",
    date: "2024-01-15",
    category: "Regulaciones",
    readTime: "8 min",
    featured: true,
  },
  {
    id: 2,
    title: "Éxito Rotundo: 500 Mineros Capacitados en Seguridad Industrial en Antioquia",
    excerpt:
      "Completamos exitosamente nuestro programa de capacitación más ambicioso del año, beneficiando a comunidades mineras de 12 municipios.",
    image: "/placeholder.svg?height=300&width=500&text=Capacitación+Antioquia",
    author: "Ing. María González",
    date: "2024-01-10",
    category: "Capacitación",
    readTime: "6 min",
    featured: false,
  },
  {
    id: 3,
    title: "Innovaciones Tecnológicas Revolucionan los Equipos de Protección Personal",
    excerpt:
      "Descubre las últimas innovaciones en EPP que están revolucionando la seguridad en las operaciones mineras.",
    image: "/placeholder.svg?height=300&width=500&text=Innovación+EPP",
    author: "Ing. Roberto Silva",
    date: "2024-01-05",
    category: "Tecnología",
    readTime: "5 min",
    featured: false,
  },
]

export default function NewsPreview() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-[#1a896c]/10 text-[#1a896c]">Noticias y Artículos</Badge>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Mantente Informado</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Las últimas noticias, tendencias y análisis del sector minero y de seguridad industrial
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Featured Article */}
          <div className="lg:col-span-2">
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg h-full">
              <div className="relative overflow-hidden">
                <Image
                  src={articles[0].image || "/placeholder.svg"}
                  alt={articles[0].title}
                  width={600}
                  height={400}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-[#6e161a] text-white">Destacado</Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <Badge className="bg-[#1a896c] text-white">{articles[0].category}</Badge>
                </div>
              </div>

              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900 group-hover:text-[#1a896c] transition-colors">
                  {articles[0].title}
                </CardTitle>
                <CardDescription className="text-gray-600 text-base leading-relaxed">
                  {articles[0].excerpt}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center text-sm text-gray-500">
                      <User className="h-4 w-4 mr-1" />
                      {articles[0].author}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="h-4 w-4 mr-1" />
                      {new Date(articles[0].date).toLocaleDateString("es-ES")}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="h-4 w-4 mr-1" />
                      {articles[0].readTime}
                    </div>
                  </div>
                </div>

                <Button className="bg-[#1a896c] hover:bg-[#0f6b52]">
                  Leer Artículo Completo
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Regular Articles */}
          <div className="space-y-6">
            {articles.slice(1).map((article) => (
              <Card key={article.id} className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md">
                <div className="relative overflow-hidden">
                  <Image
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    width={400}
                    height={200}
                    className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-2 right-2">
                    <Badge className="bg-[#1a896c] text-white text-xs">{article.category}</Badge>
                  </div>
                </div>

                <CardHeader className="pb-2">
                  <CardTitle className="text-lg font-bold text-gray-900 group-hover:text-[#1a896c] transition-colors line-clamp-2">
                    {article.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 text-sm line-clamp-2">{article.excerpt}</CardDescription>
                </CardHeader>

                <CardContent className="pt-0">
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                    <span>{article.author}</span>
                    <div className="flex items-center space-x-2">
                      <span>{new Date(article.date).toLocaleDateString("es-ES")}</span>
                      <span>•</span>
                      <span>{article.readTime}</span>
                    </div>
                  </div>

                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full group-hover:bg-[#1a896c] group-hover:text-white group-hover:border-[#1a896c] transition-all bg-transparent"
                  >
                    Leer Más
                    <ArrowRight className="ml-2 h-3 w-3" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <Link href="/noticias">
            <Button size="lg" className="bg-[#1a896c] hover:bg-[#0f6b52]">
              Ver Todas las Noticias
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
