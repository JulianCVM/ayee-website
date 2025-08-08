"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, MessageCircle, Shield, CheckCircle, Download, Star, Eye, HardHat } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ProductCard from "@/components/product-card"

// Definir los tipos de datos
interface Product {
  id: number
  name: string
  brand: string
  category: string
  categoryName: string
  price: number
  image: string
  images: string[]
  shortDescription: string
  fullDescription: string
  technicalSpecs: { [key: string]: string }
  uses: string[]
  advantages: string[]
  norms: string[]
  availability: string
  warranty: string
  datasheet?: string
  featured: boolean
  rating: number
  reviews: number
  protectionType: string[]
  iconType: string
}

interface ProductPageClientProps {
  product?: Product
  products: Product[]
}

export default function ProductPageClient({ product, products }: ProductPageClientProps) {
  const [selectedImage, setSelectedImage] = useState(0)

  if (!product) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="pt-24 pb-16 text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Producto no encontrado</h1>
          <Link href="/tienda-epp">
            <Button className="bg-[#1a896c] hover:bg-[#166c56] text-white">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Volver al catálogo
            </Button>
          </Link>
        </div>
        <Footer />
      </div>
    )
  }

  const relatedProducts = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 3)

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("es-CO", {
      style: "currency",
      currency: "COP",
      minimumFractionDigits: 0,
    }).format(price)
  }

  const generateWhatsAppLink = () => {
    const phoneNumber = "573001234567" // Reemplazar con el número real de AYEE
    const message = `Hola, estoy interesado en cotizar el producto ${product.name} que vi en la página de AYEE. ¿Me puedes ayudar con información sobre disponibilidad, precios y especificaciones técnicas?`
    return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
  }

  // Función para obtener el icono correcto basado en el tipo
  const getIconComponent = (iconType: string) => {
    switch (iconType) {
      case 'hardhat':
        return HardHat
      case 'shield':
        return Shield
      default:
        return Shield
    }
  }

  const IconComponent = getIconComponent(product.iconType)

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Breadcrumb */}
      <section className="pt-24 pb-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
            <Link href="/" className="hover:text-[#1a896c]">
              Inicio
            </Link>
            <span>/</span>
            <Link href="/tienda-epp" className="hover:text-[#1a896c]">
              Tienda EPP
            </Link>
            <span>/</span>
            <span className="text-[#1a896c] font-medium">{product.name}</span>
          </div>

          <Link href="/tienda-epp">
            <Button
              variant="outline"
              className="border-[#1a896c] text-[#1a896c] hover:bg-[#1a896c] hover:text-white bg-transparent"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Volver al catálogo
            </Button>
          </Link>
        </div>
      </section>

      {/* Product Details */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="aspect-square bg-gray-50 rounded-lg overflow-hidden border-2 border-gray-200">
                <Image
                  src={product.images[selectedImage] || "/placeholder.svg"}
                  alt={`${product.name} - Vista ${selectedImage + 1}`}
                  width={600}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Image Thumbnails */}
              <div className="grid grid-cols-4 gap-2">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`aspect-square bg-gray-50 rounded-lg overflow-hidden border-2 transition-colors ${
                      selectedImage === index ? "border-[#1a896c]" : "border-gray-200 hover:border-[#6e161a]"
                    }`}
                  >
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`${product.name} - Miniatura ${index + 1}`}
                      width={150}
                      height={150}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              {/* Header */}
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <Badge className="bg-[#1a896c] text-white">{product.brand}</Badge>
                  <Badge variant="outline" className="border-[#6e161a] text-[#6e161a]">
                    {product.categoryName}
                  </Badge>
                  <Badge
                    className={`${
                      product.availability === "En stock"
                        ? "bg-green-100 text-green-800 border-green-200"
                        : "bg-yellow-100 text-yellow-800 border-yellow-200"
                    }`}
                  >
                    {product.availability}
                  </Badge>
                </div>

                <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>

                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                        }`}
                      />
                    ))}
                    <span className="text-sm text-gray-600 ml-2">
                      {product.rating} ({product.reviews} reseñas)
                    </span>
                  </div>
                </div>

                <div className="text-3xl font-bold text-[#1a896c] mb-6">
                  {formatPrice(product.price)}
                  <span className="text-sm font-normal text-gray-600 ml-2">+ IVA</span>
                </div>
              </div>

              {/* Protection Types */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Tipo de Protección</h3>
                <div className="flex flex-wrap gap-2">
                  {product.protectionType.map((type, index) => (
                    <Badge key={index} variant="outline" className="border-[#1a896c] text-[#1a896c] bg-green-50">
                      <Shield className="mr-1 h-3 w-3" />
                      {type}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Description */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Descripción</h3>
                <p className="text-gray-700 leading-relaxed">{product.fullDescription}</p>
              </div>

              {/* Norms */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Normativas que Cumple</h3>
                <div className="flex flex-wrap gap-2">
                  {product.norms.map((norm, index) => (
                    <Badge key={index} variant="outline" className="border-[#6e161a] text-[#6e161a] bg-red-50">
                      <CheckCircle className="mr-1 h-3 w-3" />
                      {norm}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* WhatsApp CTA */}
              <div className="bg-green-50 border-2 border-[#1a896c] rounded-lg p-6">
                <div className="text-center">
                  <IconComponent className="h-12 w-12 text-[#1a896c] mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">¿Interesado en este producto?</h3>
                  <p className="text-gray-600 mb-6">
                    Obtén una cotización personalizada y asesoría técnica especializada
                  </p>

                  <a href={generateWhatsAppLink()} target="_blank" rel="noopener noreferrer">
                    <Button size="lg" className="bg-[#25D366] hover:bg-[#20BA5A] text-white w-full sm:w-auto px-8 py-3">
                      <MessageCircle className="mr-2 h-5 w-5" />
                      Cotizar por WhatsApp
                    </Button>
                  </a>

                  <p className="text-xs text-gray-500 mt-3">
                    Respuesta garantizada en menos de 2 horas en horario laboral
                  </p>
                </div>
              </div>

              {/* Additional Actions */}
              <div className="flex gap-3">
                {product.datasheet && (
                  <Button
                    variant="outline"
                    className="border-[#6e161a] text-[#6e161a] hover:bg-[#6e161a] hover:text-white flex-1 bg-transparent"
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Descargar Ficha Técnica
                  </Button>
                )}
                <Button
                  variant="outline"
                  className="border-[#1a896c] text-[#1a896c] hover:bg-[#1a896c] hover:text-white flex-1 bg-transparent"
                >
                  <Eye className="mr-2 h-4 w-4" />
                  Ver Catálogo Completo
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Technical Specs */}
            <Card className="border-l-4 border-l-[#1a896c]">
              <CardHeader>
                <CardTitle className="text-[#1a896c] flex items-center gap-2">
                  <Shield className="h-5 w-5" />
                  Especificaciones Técnicas
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {Object.entries(product.technicalSpecs).map(([key, value]) => (
                    <div key={key} className="flex justify-between items-start border-b border-gray-100 pb-2">
                      <span className="font-medium text-gray-700 capitalize">
                        {key.replace(/([A-Z])/g, " $1").replace(/^./, (str) => str.toUpperCase())}:
                      </span>
                      <span className="text-gray-900 text-right max-w-xs">{value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Uses */}
            <Card className="border-l-4 border-l-[#6e161a]">
              <CardHeader>
                <CardTitle className="text-[#6e161a] flex items-center gap-2">
                  <CheckCircle className="h-5 w-5" />
                  Aplicaciones y Usos
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {product.uses.map((use, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-[#1a896c] mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{use}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Advantages */}
          <Card className="mt-8 border-t-4 border-t-[#1a896c]">
            <CardHeader>
              <CardTitle className="text-[#1a896c] text-center">Ventajas y Beneficios</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {product.advantages.map((advantage, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-4 bg-green-50 rounded-lg border border-green-100"
                  >
                    <CheckCircle className="h-5 w-5 text-[#1a896c] mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{advantage}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Productos Relacionados</h2>
              <div className="w-20 h-1 bg-[#1a896c] mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedProducts.map((relatedProduct) => (
                <ProductCard key={relatedProduct.id} product={relatedProduct} onAddToCart={() => {}} />
              ))}
            </div>

            <div className="text-center mt-8">
              <Link href="/tienda-epp">
                <Button className="bg-[#1a896c] hover:bg-[#166c56] text-white px-8">Ver Todo el Catálogo</Button>
              </Link>
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  )
}