"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Filter, ShoppingCart, Shield, Headphones, Glasses, HardHat, Shirt, ArrowRight, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ProductCard from "@/components/product-card"
import CartSidebar from "@/components/cart-sidebar"
import EPPTestimonials from "@/components/epp-testimonials"
import EPPFAQ from "@/components/epp-faq"

const categories = [
  { id: "all", name: "Todos los Productos", icon: Shield, color: "bg-green-500" },
  { id: "auditiva", name: "Protección Auditiva", icon: Headphones, color: "bg-green-500" },
  { id: "visual", name: "Protección Visual", icon: Glasses, color: "bg-green-500" },
  { id: "respiratoria", name: "Protección Respiratoria", icon: Shield, color: "bg-green-500" },
  { id: "cabeza", name: "Protección de Cabeza", icon: HardHat, color: "bg-green-500" },
  { id: "corporal", name: "Protección Corporal", icon: Shirt, color: "bg-green-500" },
  { id: "alturas", name: "Trabajo en Alturas", icon: Shield, color: "bg-green-500" },
]

const products = [
  {
    id: 1,
    name: "Casco de Seguridad Industrial MSA V-Gard",
    brand: "MSA",
    category: "cabeza",
    price: 85000,
    image: "/placeholder.svg?height=300&width=300&text=Casco+MSA",
    images: [
      "/placeholder.svg?height=400&width=400&text=Casco+MSA+1",
      "/placeholder.svg?height=400&width=400&text=Casco+MSA+2",
      "/placeholder.svg?height=400&width=400&text=Casco+MSA+3",
    ],
    shortDescription: "Casco de seguridad con suspensión de 4 puntos, resistente a impactos y penetración.",
    fullDescription:
      "El casco MSA V-Gard ofrece protección superior contra impactos y penetración. Fabricado con polietileno de alta densidad, cuenta con sistema de suspensión de 4 puntos que distribuye uniformemente el peso y absorbe la energía de impacto.",
    technicalSpecs: {
      material: "Polietileno de alta densidad (HDPE)",
      norm: "ANSI Z89.1 Tipo I Clase E, NTC 1523",
      weight: "350g",
      colors: "Blanco, Amarillo, Azul, Rojo",
      resistance: "Impacto lateral, penetración, resistencia eléctrica hasta 20,000V",
    },
    uses: "Construcción, minería, industria petrolera, trabajos eléctricos",
    advantages: [
      "Suspensión de 4 puntos para mayor comodidad",
      "Resistencia eléctrica certificada",
      "Diseño aerodinámico que reduce fatiga",
      "Compatible con accesorios MSA",
    ],
    availability: "En stock",
    warranty: "12 meses contra defectos de fabricación",
    datasheet: "/datasheets/casco-msa-vgard.pdf",
    featured: true,
    rating: 4.8,
    reviews: 156,
  },
  {
    id: 2,
    name: "Respirador N95 3M 8210",
    brand: "3M",
    category: "respiratoria",
    price: 12500,
    image: "/placeholder.svg?height=300&width=300&text=Respirador+3M",
    images: [
      "/placeholder.svg?height=400&width=400&text=Respirador+3M+1",
      "/placeholder.svg?height=400&width=400&text=Respirador+3M+2",
    ],
    shortDescription: "Respirador desechable N95 para protección contra partículas no oleosas.",
    fullDescription:
      "El respirador 3M 8210 N95 proporciona protección respiratoria confiable y cómoda contra partículas sólidas y líquidas no oleosas. Su diseño liviano y plegable facilita el almacenamiento.",
    technicalSpecs: {
      material: "Polipropileno con filtro electrostático",
      norm: "NIOSH N95, NTC 5183",
      weight: "8g",
      efficiency: "≥95% de filtración de partículas de 0.3 micrones",
      resistance: "Partículas no oleosas, polvo, neblinas",
    },
    uses: "Minería, construcción, agricultura, soldadura, lijado",
    advantages: [
      "Filtración superior al 95%",
      "Diseño plegable para fácil almacenamiento",
      "Banda elástica ajustable",
      "Libre de látex",
    ],
    availability: "En stock",
    warranty: "Producto desechable - garantía de calidad",
    datasheet: "/datasheets/respirador-3m-8210.pdf",
    featured: false,
    rating: 4.6,
    reviews: 89,
  },
  {
    id: 3,
    name: "Gafas de Seguridad Uvex Sportstyle",
    brand: "Uvex",
    category: "visual",
    price: 45000,
    image: "/placeholder.svg?height=300&width=300&text=Gafas+Uvex",
    images: [
      "/placeholder.svg?height=400&width=400&text=Gafas+Uvex+1",
      "/placeholder.svg?height=400&width=400&text=Gafas+Uvex+2",
    ],
    shortDescription: "Gafas de seguridad con lentes policarbonato y protección UV 400.",
    fullDescription:
      "Las gafas Uvex Sportstyle combinan protección superior con comodidad excepcional. Sus lentes de policarbonato ofrecen resistencia al impacto y protección UV completa.",
    technicalSpecs: {
      material: "Lentes: Policarbonato, Marco: Nylon",
      norm: "ANSI Z87.1, EN 166, NTC 2272",
      weight: "28g",
      protection: "UV 400, impacto de alta velocidad",
      coating: "Anti-empañante, anti-rayadura",
    },
    uses: "Soldadura, corte, pulido, trabajo con químicos, laboratorios",
    advantages: [
      "Protección UV 400 completa",
      "Lentes anti-empañantes",
      "Marco flexible y liviano",
      "Diseño deportivo y moderno",
    ],
    availability: "En stock",
    warranty: "24 meses contra defectos de fabricación",
    datasheet: "/datasheets/gafas-uvex-sportstyle.pdf",
    featured: true,
    rating: 4.7,
    reviews: 203,
  },
  {
    id: 4,
    name: "Protectores Auditivos Howard Leight",
    brand: "Howard Leight",
    category: "auditiva",
    price: 35000,
    image: "/placeholder.svg?height=300&width=300&text=Protectores+Howard",
    images: [
      "/placeholder.svg?height=400&width=400&text=Protectores+Howard+1",
      "/placeholder.svg?height=400&width=400&text=Protectores+Howard+2",
    ],
    shortDescription: "Protectores auditivos tipo copa con reducción de ruido de 30 dB.",
    fullDescription:
      "Los protectores auditivos Howard Leight ofrecen excelente atenuación del ruido con máxima comodidad. Su diseño ergonómico permite uso prolongado sin fatiga.",
    technicalSpecs: {
      material: "ABS, espuma de poliuretano",
      norm: "ANSI S3.19, EN 352-1, NTC 2272",
      weight: "245g",
      attenuation: "NRR 30 dB",
      adjustment: "Diadema ajustable con almohadillas suaves",
    },
    uses: "Minería, construcción, aeropuertos, industria manufacturera",
    advantages: [
      "Reducción de ruido de 30 dB",
      "Almohadillas reemplazables",
      "Diadema acolchada",
      "Diseño plegable para almacenamiento",
    ],
    availability: "En stock",
    warranty: "18 meses contra defectos de fabricación",
    datasheet: "/datasheets/protectores-howard-leight.pdf",
    featured: false,
    rating: 4.5,
    reviews: 127,
  },
  {
    id: 5,
    name: "Arnés de Seguridad Miller Revolution",
    brand: "Miller",
    category: "alturas",
    price: 320000,
    image: "/placeholder.svg?height=300&width=300&text=Arnés+Miller",
    images: [
      "/placeholder.svg?height=400&width=400&text=Arnés+Miller+1",
      "/placeholder.svg?height=400&width=400&text=Arnés+Miller+2",
      "/placeholder.svg?height=400&width=400&text=Arnés+Miller+3",
    ],
    shortDescription: "Arnés de cuerpo completo con anillos D dorsales y frontales.",
    fullDescription:
      "El arnés Miller Revolution ofrece protección completa para trabajo en alturas. Su diseño ergonómico y materiales de alta calidad garantizan seguridad y comodidad durante jornadas extensas.",
    technicalSpecs: {
      material: "Poliéster, herrajes de acero galvanizado",
      norm: "ANSI Z359.11, EN 361, NTC 2037",
      weight: "1.8 kg",
      capacity: "140 kg",
      rings: "Anillo D dorsal y frontal",
    },
    uses: "Construcción en altura, torres, mantenimiento industrial, rescate",
    advantages: [
      "Distribución ergonómica del peso",
      "Hebillas de liberación rápida",
      "Anillos D certificados",
      "Correas acolchadas en hombros y piernas",
    ],
    availability: "En stock",
    warranty: "36 meses contra defectos de fabricación",
    datasheet: "/datasheets/arnes-miller-revolution.pdf",
    featured: true,
    rating: 4.9,
    reviews: 78,
  },
  {
    id: 6,
    name: "Guantes de Nitrilo Ansell HyFlex",
    brand: "Ansell",
    category: "corporal",
    price: 28000,
    image: "/placeholder.svg?height=300&width=300&text=Guantes+Ansell",
    images: [
      "/placeholder.svg?height=400&width=400&text=Guantes+Ansell+1",
      "/placeholder.svg?height=400&width=400&text=Guantes+Ansell+2",
    ],
    shortDescription: "Guantes de nitrilo con excelente destreza y resistencia química.",
    fullDescription:
      "Los guantes Ansell HyFlex combinan protección química superior con destreza excepcional. Su recubrimiento de nitrilo ofrece resistencia a aceites, grasas y químicos.",
    technicalSpecs: {
      material: "Nylon con recubrimiento de nitrilo",
      norm: "EN 388, ANSI/ISEA 105, NTC 2190",
      weight: "45g por par",
      sizes: "Tallas 7, 8, 9, 10",
      resistance: "Aceites, grasas, hidrocarburos, químicos suaves",
    },
    uses: "Manejo de químicos, mecánica automotriz, ensamble de precisión",
    advantages: [
      "Excelente destreza y tacto",
      "Resistencia a perforación",
      "Transpirable y cómodo",
      "Lavable y reutilizable",
    ],
    availability: "En stock",
    warranty: "6 meses contra defectos de fabricación",
    datasheet: "/datasheets/guantes-ansell-hyflex.pdf",
    featured: false,
    rating: 4.4,
    reviews: 94,
  },
]

const sortOptions = [
  { value: "relevance", label: "Más Relevantes" },
  { value: "name", label: "Nombre A-Z" },
  { value: "price-low", label: "Precio: Menor a Mayor" },
  { value: "price-high", label: "Precio: Mayor a Menor" },
  { value: "rating", label: "Mejor Calificados" },
]

export default function TiendaEPPPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [sortBy, setSortBy] = useState("relevance")
  const [activeFilters, setActiveFilters] = useState<string[]>([])
  const [cartOpen, setCartOpen] = useState(false)
  const [cart, setCart] = useState<any[]>([])

  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.shortDescription.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory

    return matchesSearch && matchesCategory
  })

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "name":
        return a.name.localeCompare(b.name)
      case "price-low":
        return a.price - b.price
      case "price-high":
        return b.price - a.price
      case "rating":
        return b.rating - a.rating
      default:
        return b.featured ? 1 : -1
    }
  })

  const addToCart = (product: any) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id)
      if (existing) {
        return prev.map((item) => (item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item))
      }
      return [...prev, { ...product, quantity: 1 }]
    })
  }

  const removeFilter = (filter: string) => {
    setActiveFilters((prev) => prev.filter((f) => f !== filter))
  }

  const clearAllFilters = () => {
    setSearchTerm("")
    setSelectedCategory("all")
    setActiveFilters([])
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br via-gray-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0">
          <Image
            src="/placeholder.svg?height=600&width=1200&text=Trabajadores+con+EPP"
            alt="Trabajadores con EPP"
            width={1200}
            height={600}
            className="w-full h-full object-cover opacity-30"
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-[#F1E09E] text-[#A47740] border-orange-300/30 text-lg px-4 py-2">
              Tienda Especializada
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Tienda <span className="text-[#661A26]">EPP</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed">
              Protección certificada para cada necesidad
            </p>
            <p className="text-lg opacity-80 max-w-2xl mx-auto">
              Encuentra los mejores elementos de protección personal, certificados y respaldados por las marcas más
              confiables del mercado. Tu seguridad es nuestra prioridad.
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2">500+</div>
              <div className="text-sm md:text-base opacity-90">Productos Disponibles</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2">15+</div>
              <div className="text-sm md:text-base opacity-90">Marcas Certificadas</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2">24h</div>
              <div className="text-sm md:text-base opacity-90">Respuesta Cotizaciones</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2">100%</div>
              <div className="text-sm md:text-base opacity-90">Productos Certificados</div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Filter Bar */}
      <section className="py-8 bg-gray-50 top-16 z-40 border-b">
        <div className="container mx-auto px-4">
          {/* Search and Sort */}
          <div className="flex flex-col lg:flex-row gap-4 items-center mb-6">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                type="text"
                placeholder="Buscar productos, marcas..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4 text-gray-600" />
                <span className="text-sm font-medium text-gray-700">Ordenar:</span>
              </div>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-48">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {sortOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-3 mb-4">
            {categories.map((category) => {
              const IconComponent = category.icon
              const isActive = selectedCategory === category.id

              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-200 ${
                    isActive
                      ? `${category.color} text-white shadow-lg`
                      : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
                  }`}
                >
                  <IconComponent className="h-4 w-4" />
                  <span className="text-sm font-medium">{category.name}</span>
                </button>
              )
            })}
          </div>

          {/* Active Filters */}
          {(searchTerm || selectedCategory !== "all" || activeFilters.length > 0) && (
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-sm text-gray-600">Filtros activos:</span>

              {searchTerm && (
                <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                  Búsqueda: "{searchTerm}"
                  <button onClick={() => setSearchTerm("")} className="ml-2 hover:text-blue-900">
                    <X className="h-3 w-3" />
                  </button>
                </Badge>
              )}

              {selectedCategory !== "all" && (
                <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                  {categories.find((c) => c.id === selectedCategory)?.name}
                  <button onClick={() => setSelectedCategory("all")} className="ml-2 hover:text-green-900">
                    <X className="h-3 w-3" />
                  </button>
                </Badge>
              )}

              <Button variant="ghost" size="sm" onClick={clearAllFilters} className="text-gray-500 hover:text-gray-700">
                Limpiar todo
              </Button>
            </div>
          )}

          {/* Results count */}
          <div className="mt-4 text-sm text-gray-600">
            Mostrando {sortedProducts.length} de {products.length} productos
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          {sortedProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sortedProducts.map((product) => (
                <ProductCard key={product.id} product={product} onAddToCart={addToCart} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">No se encontraron productos</h3>
              <p className="text-gray-600 mb-6">Intenta ajustar los filtros de búsqueda o explora otras categorías</p>
              <Button onClick={clearAllFilters} className="bg-blue-600 hover:bg-blue-700">
                Ver Todos los Productos
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* FAQ Section */}
      <EPPFAQ />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r bg-[#D2D3D5] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 ">
            Consulta Disponibilidad y Recibe Asesoría Personalizada
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Nuestro equipo de expertos está listo para ayudarte a seleccionar el EPP adecuado para tus necesidades
            específicas. Cotizaciones sin compromiso en menos de 24 horas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contacto">
              <Button size="lg" className="bg-white text-[#000000] hover:bg-gray-100 px-8 py-3">
                Contactar Asesor
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-[#1A896C] px-8 py-3 bg-transparent"
              onClick={() => setCartOpen(true)}
            >
              <ShoppingCart className="mr-2 h-5 w-5" />
              Ver Solicitudes ({cart.length})
            </Button>
          </div>
        </div>
      </section>

      {/* Cart Sidebar */}
      <CartSidebar isOpen={cartOpen} onClose={() => setCartOpen(false)} cart={cart} setCart={setCart} />

      <Footer />
    </div>
  )
}
