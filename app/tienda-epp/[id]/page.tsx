import ProductPageClient from './product-page-client'
import { HardHat, Shield } from "lucide-react"

// Datos de productos (en una aplicación real, esto vendría de una API)
const products = [
  {
    id: 1,
    name: "Casco de Seguridad Industrial MSA V-Gard",
    brand: "MSA",
    category: "cabeza",
    categoryName: "Protección de Cabeza",
    price: 85000,
    image: "/placeholder.svg?height=500&width=500&text=Casco+MSA",
    images: [
      "/placeholder.svg?height=600&width=600&text=Casco+MSA+Vista+1",
      "/placeholder.svg?height=600&width=600&text=Casco+MSA+Vista+2",
      "/placeholder.svg?height=600&width=600&text=Casco+MSA+Vista+3",
      "/placeholder.svg?height=600&width=600&text=Casco+MSA+Vista+4",
    ],
    shortDescription: "Casco de seguridad con suspensión de 4 puntos, resistente a impactos y penetración.",
    fullDescription:
      "El casco MSA V-Gard ofrece protección superior contra impactos y penetración. Fabricado con polietileno de alta densidad, cuenta con sistema de suspensión de 4 puntos que distribuye uniformemente el peso y absorbe la energía de impacto. Diseñado para brindar comodidad durante jornadas extensas de trabajo, cumple con las normativas internacionales más exigentes.",
    technicalSpecs: {
      material: "Polietileno de alta densidad (HDPE)",
      norm: "ANSI Z89.1 Tipo I Clase E, NTC 1523",
      weight: "350g",
      colors: "Blanco, Amarillo, Azul, Rojo",
      resistance: "Impacto lateral, penetración, resistencia eléctrica hasta 20,000V",
      suspension: "Sistema de 4 puntos con banda sudor reemplazable",
      temperature: "Rango de uso: -30°C a +50°C",
    },
    uses: [
      "Construcción y obras civiles",
      "Minería y extracción",
      "Industria petrolera y petroquímica",
      "Trabajos eléctricos de alto voltaje",
      "Mantenimiento industrial",
      "Soldadura y corte",
    ],
    advantages: [
      "Suspensión de 4 puntos para mayor comodidad",
      "Resistencia eléctrica certificada hasta 20,000V",
      "Diseño aerodinámico que reduce fatiga",
      "Compatible con accesorios MSA",
      "Banda sudor antimicrobiana",
      "Ajuste universal para diferentes tamaños de cabeza",
    ],
    norms: ["ANSI Z89.1 Tipo I Clase E", "NTC 1523", "CSA Z94.1", "EN 397"],
    availability: "En stock",
    warranty: "12 meses contra defectos de fabricación",
    datasheet: "/datasheets/casco-msa-vgard.pdf",
    featured: true,
    rating: 4.8,
    reviews: 156,
    protectionType: ["Impacto", "Penetración", "Eléctrica"],
    iconType: "hardhat", // Pasamos string en lugar del componente
  },
  {
    id: 2,
    name: "Respirador N95 3M 8210",
    brand: "3M",
    category: "respiratoria",
    categoryName: "Protección Respiratoria",
    price: 12500,
    image: "/placeholder.svg?height=500&width=500&text=Respirador+3M",
    images: [
      "/placeholder.svg?height=600&width=600&text=Respirador+3M+Vista+1",
      "/placeholder.svg?height=600&width=600&text=Respirador+3M+Vista+2",
      "/placeholder.svg?height=600&width=600&text=Respirador+3M+Empaque",
    ],
    shortDescription: "Respirador desechable N95 para protección contra partículas no oleosas.",
    fullDescription:
      "El respirador 3M 8210 N95 proporciona protección respiratoria confiable y cómoda contra partículas sólidas y líquidas no oleosas. Su diseño liviano y plegable facilita el almacenamiento y transporte. Fabricado con tecnología de filtración electrostática avanzada que garantiza una eficiencia superior al 95%.",
    technicalSpecs: {
      material: "Polipropileno con filtro electrostático",
      norm: "NIOSH N95, NTC 5183",
      weight: "8g",
      efficiency: "≥95% de filtración de partículas de 0.3 micrones",
      resistance: "Partículas no oleosas, polvo, neblinas",
      breathability: "Baja resistencia respiratoria",
      design: "Plegable con bandas elásticas ajustables",
    },
    uses: [
      "Minería y canteras",
      "Construcción y demolición",
      "Agricultura y ganadería",
      "Soldadura y corte de metales",
      "Lijado y pulido",
      "Manejo de materiales en polvo",
    ],
    advantages: [
      "Filtración superior al 95%",
      "Diseño plegable para fácil almacenamiento",
      "Banda elástica ajustable y cómoda",
      "Libre de látex",
      "Sellado facial optimizado",
      "Peso ultraliviano",
    ],
    norms: ["NIOSH N95", "NTC 5183", "42 CFR 84"],
    availability: "En stock",
    warranty: "Producto desechable - garantía de calidad",
    datasheet: "/datasheets/respirador-3m-8210.pdf",
    featured: false,
    rating: 4.6,
    reviews: 89,
    protectionType: ["Respiratoria", "Partículas"],
    iconType: "shield", // Pasamos string en lugar del componente
  },
]

// Esta función genera todas las rutas estáticas posibles
export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id.toString(),
  }))
}

interface ProductPageProps {
  params: {
    id: string
  }
}

export default function ProductPage({ params }: ProductPageProps) {
  const productId = Number.parseInt(params.id)
  const product = products.find((p) => p.id === productId)

  return <ProductPageClient product={product} products={products} />
}