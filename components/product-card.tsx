"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Eye, MessageCircle, Download, CheckCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface Product {
  id: number
  name: string
  brand: string
  category: string
  price: number
  image: string
  shortDescription: string
  availability: string
  featured: boolean
  rating: number
  reviews: number
  datasheet?: string
}

interface ProductCardProps {
  product: Product
  onAddToCart: (product: Product) => void
}

export default function ProductCard({ product, onAddToCart }: ProductCardProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("es-CO", {
      style: "currency",
      currency: "COP",
      minimumFractionDigits: 0,
    }).format(price)
  }

  const generateWhatsAppLink = () => {
    const phoneNumber = "573001234567" // Reemplazar con el número real de AYEE
    const message = `Hola, estoy interesado en cotizar el producto ${product.name} que vi en la página de AYEE. ¿Me puedes ayudar con información?`
    return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
  }

  return (
    <Card className="group hover:shadow-2xl transition-all duration-300 overflow-hidden border-0 shadow-lg">
      <div className="relative overflow-hidden">
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          width={300}
          height={300}
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
        />

        {/* Badges */}
        <div className="absolute top-4 left-4 space-y-2">
          {product.featured && <Badge className="bg-[#6e161a] text-white">Destacado</Badge>}
          <Badge
            className={`${
              product.availability === "En stock" ? "bg-green-600 text-white" : "bg-yellow-600 text-white"
            }`}
          >
            {product.availability}
          </Badge>
        </div>

        {/* Brand */}
        <div className="absolute top-4 right-4">
          <Badge variant="secondary" className="bg-white/90 text-gray-700">
            {product.brand}
          </Badge>
        </div>

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="flex gap-2">
            <Link href={`/tienda-epp/${product.id}`}>
              <Button size="sm" className="bg-white text-gray-900 hover:bg-gray-100">
                <Eye className="mr-2 h-4 w-4" />
                Ver Detalles
              </Button>
            </Link>
            {product.datasheet && (
              <Button
                size="sm"
                variant="outline"
                className="bg-white/10 border-white text-white hover:bg-white hover:text-gray-900"
              >
                <Download className="h-4 w-4" />
              </Button>
            )}
          </div>
        </div>
      </div>

      <CardHeader>
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${
                  i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                }`}
              />
            ))}
            <span className="text-sm text-gray-600 ml-1">
              {product.rating} ({product.reviews})
            </span>
          </div>
          <div className="text-2xl font-bold text-[#1a896c]">{formatPrice(product.price)}</div>
        </div>

        <CardTitle className="text-lg font-bold text-gray-900 group-hover:text-[#1a896c] transition-colors line-clamp-2">
          {product.name}
        </CardTitle>
        <CardDescription className="text-gray-600 line-clamp-3 leading-relaxed">
          {product.shortDescription}
        </CardDescription>
      </CardHeader>

      <CardContent>
        <div className="space-y-4">
          {/* Key Features */}
          <div className="flex items-center gap-2 text-sm text-green-600">
            <CheckCircle className="h-4 w-4" />
            <span>Certificado y garantizado</span>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2">
            <a href={generateWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="flex-1">
              <Button className="w-full bg-[#25D366] hover:bg-[#20BA5A] text-white">
                <MessageCircle className="mr-2 h-4 w-4" />
                Cotizar
              </Button>
            </a>
            <Link href={`/tienda-epp/${product.id}`}>
              <Button
                variant="outline"
                className="border-[#1a896c] text-[#1a896c] hover:bg-[#1a896c] hover:text-white bg-transparent"
              >
                <Eye className="h-4 w-4" />
              </Button>
            </Link>
          </div>

          {/* Quick Info */}
          <div className="text-xs text-gray-500 space-y-1">
            <div>• Entrega nacional disponible</div>
            <div>• Asesoría técnica incluida</div>
            <div>• Garantía del fabricante</div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
