"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Calendar, User, Clock, Share2, ArrowRight, BookOpen, Download } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import NewsletterSignup from "@/components/newsletter-signup"

const articles = [
  {
    id: 1,
    title: "Nuevas Regulaciones de Seguridad Minera Transforman el Sector en Colombia",
    excerpt:
      "Análisis completo de las nuevas normativas que entrarán en vigencia en 2024 y su impacto en la industria minera nacional, especialmente en comunidades artesanales.",
    content: "Las nuevas regulaciones representan un cambio paradigmático...",
    image: "/placeholder.svg?height=300&width=500&text=Regulaciones+Mineras",
    author: "Dr. Carlos Mendoza",
    authorRole: "Director Ejecutivo AYEE",
    authorImage: "/placeholder.svg?height=60&width=60",
    date: "2024-01-15",
    category: "Regulaciones",
    readTime: "8 min",
    featured: true,
    tags: ["Normatividad", "Seguridad", "Minería Artesanal"],
  },
  {
    id: 2,
    title: "Éxito Rotundo: 500 Mineros Capacitados en Seguridad Industrial en Antioquia",
    excerpt:
      "Completamos exitosamente nuestro programa de capacitación más ambicioso del año, beneficiando a comunidades mineras de 12 municipios antioqueños con técnicas avanzadas de seguridad.",
    content: "Durante seis meses intensivos de trabajo...",
    image: "/placeholder.svg?height=300&width=500&text=Capacitación+Antioquia",
    author: "Ing. María González",
    authorRole: "Directora de Programas",
    authorImage: "/placeholder.svg?height=60&width=60",
    date: "2024-01-10",
    category: "Capacitación",
    readTime: "6 min",
    featured: false,
    tags: ["Capacitación", "Antioquia", "Seguridad Industrial"],
  },
  {
    id: 3,
    title: "Innovaciones Tecnológicas Revolucionan los Equipos de Protección Personal",
    excerpt:
      "Descubre las últimas innovaciones en EPP que están revolucionando la seguridad en las operaciones mineras, desde materiales inteligentes hasta sistemas de monitoreo en tiempo real.",
    content: "La tecnología aplicada a la seguridad minera...",
    image: "/placeholder.svg?height=300&width=500&text=Innovación+EPP",
    author: "Ing. Roberto Silva",
    authorRole: "Coordinador Técnico",
    authorImage: "/placeholder.svg?height=60&width=60",
    date: "2024-01-05",
    category: "Tecnología",
    readTime: "5 min",
    featured: false,
    tags: ["Tecnología", "EPP", "Innovación"],
  },
  {
    id: 4,
    title: "Construcción de Paz: Testimonios desde los Territorios Mineros",
    excerpt:
      "Historias reales de transformación y reconciliación en comunidades mineras que han vivido el conflicto armado y ahora construyen un futuro de paz y prosperidad.",
    content: "En los territorios donde antes reinaba el miedo...",
    image: "/placeholder.svg?height=300&width=500&text=Construcción+Paz",
    author: "Psic. Carmen Delgado",
    authorRole: "Especialista en Bienestar",
    authorImage: "/placeholder.svg?height=60&width=60",
    date: "2023-12-28",
    category: "Construcción de Paz",
    readTime: "10 min",
    featured: true,
    tags: ["Paz", "Territorios", "Reconciliación"],
  },
  {
    id: 5,
    title: "Sostenibilidad Ambiental: Minería Responsable en el Chocó",
    excerpt:
      "Nuestro trabajo en el Chocó demuestra que es posible combinar actividad minera con conservación ambiental, beneficiando tanto a las comunidades como a los ecosistemas.",
    content: "El departamento del Chocó, con su inmensa biodiversidad...",
    image: "/placeholder.svg?height=300&width=500&text=Minería+Sostenible",
    author: "Ing. Luis Torres",
    authorRole: "Especialista Ambiental",
    authorImage: "/placeholder.svg?height=60&width=60",
    date: "2023-12-20",
    category: "Medio Ambiente",
    readTime: "7 min",
    featured: false,
    tags: ["Sostenibilidad", "Chocó", "Medio Ambiente"],
  },
  {
    id: 6,
    title: "Fortalecimiento Empresarial: MIPYMES Mineras Crecen 40% en Productividad",
    excerpt:
      "Los resultados de nuestro programa de fortalecimiento empresarial muestran cómo el acompañamiento técnico puede transformar pequeñas empresas mineras en modelos de éxito.",
    content: "Las micro, pequeñas y medianas empresas mineras...",
    image: "/placeholder.svg?height=300&width=500&text=MIPYMES+Mineras",
    author: "Adm. Ana Patricia Ruiz",
    authorRole: "Coordinadora de Capacitaciones",
    authorImage: "/placeholder.svg?height=60&width=60",
    date: "2023-12-15",
    category: "Desarrollo Empresarial",
    readTime: "6 min",
    featured: false,
    tags: ["MIPYMES", "Productividad", "Empresarialidad"],
  },
]

const categories = [
  "Todas",
  "Regulaciones",
  "Capacitación",
  "Tecnología",
  "Construcción de Paz",
  "Medio Ambiente",
  "Desarrollo Empresarial",
]
const authors = [
  "Todos",
  "Dr. Carlos Mendoza",
  "Ing. María González",
  "Ing. Roberto Silva",
  "Psic. Carmen Delgado",
  "Ing. Luis Torres",
  "Adm. Ana Patricia Ruiz",
]

export default function NewsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("Todas")
  const [selectedAuthor, setSelectedAuthor] = useState("Todos")

  const filteredArticles = articles.filter((article) => {
    const matchesSearch =
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesCategory = selectedCategory === "Todas" || article.category === selectedCategory
    const matchesAuthor = selectedAuthor === "Todos" || article.author === selectedAuthor

    return matchesSearch && matchesCategory && matchesAuthor
  })

  const featuredArticles = filteredArticles.filter((article) => article.featured)
  const regularArticles = filteredArticles.filter((article) => !article.featured)

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-yellow-600 via-green-600 to-green-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-8 gap-2 transform -rotate-12 scale-150">
            {[...Array(32)].map((_, i) => (
              <div key={i} className="bg-white/30 rounded h-24" />
            ))}
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-white/20 text-white border-white/30 text-lg px-4 py-2">Actualidad AYEE</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Noticias y <span className="text-yellow-300">Artículos</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed">Historias que transforman territorios</p>
            <p className="text-lg opacity-80 max-w-2xl mx-auto">
              Mantente informado sobre nuestro trabajo, las últimas tendencias en seguridad minera y las historias de
              transformación que estamos construyendo juntos.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 bg-gray-50 sticky top-16 z-40 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                type="text"
                placeholder="Buscar artículos, temas, etiquetas..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-3 items-center">
              <div className="flex items-center gap-2">
                <BookOpen className="h-4 w-4 text-gray-600" />
                <span className="text-sm font-medium text-gray-700">Filtrar por:</span>
              </div>

              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-48">
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

              <Select value={selectedAuthor} onValueChange={setSelectedAuthor}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Autor" />
                </SelectTrigger>
                <SelectContent>
                  {authors.map((author) => (
                    <SelectItem key={author} value={author}>
                      {author}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Results count */}
          <div className="mt-4 text-sm text-gray-600">
            Mostrando {filteredArticles.length} de {articles.length} artículos
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      {featuredArticles.length > 0 && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-yellow-500 rounded-full p-2">
                <BookOpen className="h-5 w-5 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Artículos Destacados</h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {featuredArticles.map((article) => (
                <Card
                  key={article.id}
                  className="group hover:shadow-2xl transition-all duration-300 overflow-hidden border-0 shadow-lg"
                >
                  <div className="relative overflow-hidden">
                    <Image
                      src={article.image || "/placeholder.svg"}
                      alt={article.title}
                      width={500}
                      height={300}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <Badge className="absolute top-4 left-4 bg-yellow-500 text-white">Destacado</Badge>
                    <Badge className="absolute top-4 right-4 bg-white/90 text-gray-700">{article.category}</Badge>
                  </div>

                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-gray-900 group-hover:text-green-600 transition-colors line-clamp-2">
                      {article.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600 line-clamp-3 leading-relaxed text-base">
                      {article.excerpt}
                    </CardDescription>
                  </CardHeader>

                  <CardContent>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <Image
                          src={article.authorImage || "/placeholder.svg"}
                          alt={article.author}
                          width={40}
                          height={40}
                          className="rounded-full"
                        />
                        <div>
                          <p className="font-medium text-gray-900 text-sm">{article.author}</p>
                          <p className="text-xs text-gray-500">{article.authorRole}</p>
                        </div>
                      </div>
                      <div className="text-right text-sm text-gray-500">
                        <div className="flex items-center mb-1">
                          <Calendar className="h-3 w-3 mr-1" />
                          {new Date(article.date).toLocaleDateString("es-ES")}
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-3 w-3 mr-1" />
                          {article.readTime}
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {article.tags.map((tag, index) => (
                        <Badge key={index} variant="outline" className="text-xs bg-gray-50">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex items-center justify-between">
                      <Link href={`/noticias/${article.id}`}>
                        <Button className="bg-green-600 hover:bg-green-700">
                          Leer Artículo
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                      <Button variant="ghost" size="sm">
                        <Share2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Regular Articles */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Todos los Artículos</h2>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <span>Ordenar por:</span>
              <Select defaultValue="date">
                <SelectTrigger className="w-32">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="date">Más recientes</SelectItem>
                  <SelectItem value="popular">Más populares</SelectItem>
                  <SelectItem value="category">Categoría</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularArticles.map((article) => (
              <Card
                key={article.id}
                className="group hover:shadow-xl transition-all duration-300 overflow-hidden border-0 shadow-md"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <Badge className="absolute top-4 left-4 bg-green-600 text-white">{article.category}</Badge>
                </div>

                <CardHeader>
                  <CardTitle className="text-lg font-bold text-gray-900 group-hover:text-green-600 transition-colors line-clamp-2">
                    {article.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 line-clamp-3 leading-relaxed">
                    {article.excerpt}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="flex items-center justify-between mb-4 text-sm">
                    <div className="flex items-center space-x-2">
                      <User className="h-4 w-4 text-gray-400" />
                      <span className="text-gray-600">{article.author}</span>
                    </div>
                    <div className="flex items-center space-x-3 text-gray-500">
                      <div className="flex items-center">
                        <Calendar className="h-3 w-3 mr-1" />
                        {new Date(article.date).toLocaleDateString("es-ES")}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        {article.readTime}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <Link href={`/noticias/${article.id}`}>
                      <Button
                        variant="outline"
                        className="bg-transparent group-hover:bg-green-600 group-hover:text-white group-hover:border-green-600 transition-all"
                      >
                        Leer Más
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                    <Button variant="ghost" size="sm">
                      <Share2 className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredArticles.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">📰</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">No se encontraron artículos</h3>
              <p className="text-gray-600 mb-6">Intenta ajustar los filtros de búsqueda</p>
              <Button
                onClick={() => {
                  setSearchTerm("")
                  setSelectedCategory("Todas")
                  setSelectedAuthor("Todos")
                }}
                className="bg-green-600 hover:bg-green-700"
              >
                Limpiar Filtros
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Sidebar Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Latest Articles */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900">Últimas Publicaciones</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {articles.slice(0, 4).map((article) => (
                    <div key={article.id} className="flex space-x-3 pb-4 border-b border-gray-100 last:border-b-0">
                      <Image
                        src={article.image || "/placeholder.svg"}
                        alt={article.title}
                        width={60}
                        height={60}
                        className="rounded object-cover flex-shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <Link href={`/noticias/${article.id}`}>
                          <h4 className="font-medium text-gray-900 hover:text-green-600 transition-colors line-clamp-2 text-sm">
                            {article.title}
                          </h4>
                        </Link>
                        <p className="text-xs text-gray-500 mt-1">
                          {new Date(article.date).toLocaleDateString("es-ES")}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Tag Cloud */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900">Temas Populares</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {Array.from(new Set(articles.flatMap((article) => article.tags))).map((tag) => (
                    <Badge
                      key={tag}
                      variant="outline"
                      className="cursor-pointer hover:bg-green-50 hover:border-green-300 transition-colors"
                      onClick={() => setSearchTerm(tag)}
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Downloads */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900">Recursos Descargables</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <h4 className="font-medium text-gray-900 text-sm">Guía de Seguridad Minera 2024</h4>
                      <p className="text-xs text-gray-500">PDF - 2.5 MB</p>
                    </div>
                    <Button size="sm" variant="outline" className="bg-transparent">
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <h4 className="font-medium text-gray-900 text-sm">Manual de EPP</h4>
                      <p className="text-xs text-gray-500">PDF - 1.8 MB</p>
                    </div>
                    <Button size="sm" variant="outline" className="bg-transparent">
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <h4 className="font-medium text-gray-900 text-sm">Informe Anual 2023</h4>
                      <p className="text-xs text-gray-500">PDF - 4.2 MB</p>
                    </div>
                    <Button size="sm" variant="outline" className="bg-transparent">
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <NewsletterSignup />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-yellow-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Quieres Saber Más o Contarnos tu Historia?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Si tienes una historia que contar, una pregunta que hacer o quieres colaborar con nosotros, nos encantaría
            escucharte.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contacto">
              <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3">
                Contactar Redacción
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-green-600 px-8 py-3 bg-transparent"
            >
              Proponer Historia
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
