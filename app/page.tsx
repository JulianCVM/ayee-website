import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Shield, Users, Award, Phone, Mail } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import HeroSlider from "@/components/hero-slider"
import ServicesPreview from "@/components/services-preview"
import ProjectsPreview from "@/components/projects-preview"
import NewsPreview from "@/components/news-preview"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <HeroSlider />
        <div className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">Transformando la Seguridad Minera</h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 animate-fade-in-delay">
            Acciones y Estrategias para un futuro más seguro y sostenible en Colombia
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delay-2">
            <Button size="lg" className="bg-[#6e161a] hover:bg-[#5a1115] text-white px-8 py-3">
              <Phone className="mr-2 h-5 w-5" />
              Contactar Ahora
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-[#1a896c] px-8 py-3 bg-transparent"
            >
              Conocer Más
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-[#1a896c]/10 text-[#1a896c]">Sobre Nosotros</Badge>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">SOLUCIONES PARA SU NEGOCIO, PEQUEÑA, MEDIANA Y GRAN EMPRESA</h2>
              <p className="text-lg text-gray-600 mb-6">
                Somos una empresa de servicios de asesorías, consultorías, capacitaciones, auditorias e interventorías, especialista en el área de seguridad y salud en el trabajo y procesos estratégicos corporativos, competente para satisfacer las necesidades de todo tipo de organización, pública o privada.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center">
                  <div className="bg-[#1a896c] text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                    <Shield className="h-8 w-8" />
                  </div>
                  <h3 className="font-semibold text-gray-900">Seguridad</h3>
                  <p className="text-sm text-gray-600">Protocolos avanzados</p>
                </div>
                <div className="text-center">
                  <div className="bg-[#6e161a] text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                    <Users className="h-8 w-8" />
                  </div>
                  <h3 className="font-semibold text-gray-900">Comunidad</h3>
                  <p className="text-sm text-gray-600">Impacto social</p>
                </div>
              </div>
              <Link href="/nosotros">
                <Button className="bg-[#1a896c] hover:bg-[#0f6b52]">
                  Conocer Más
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="relative">
              <Image
                src="/images/pdf-data/pdf-image.png"
                alt="Equipo AYEE en campo"
                width={600}
                height={500}
                className="rounded-lg shadow-xl"
              />
              
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <ServicesPreview />

      {/* News Preview */}
      <NewsPreview />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#1a896c] to-[#0f6b52] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">¿Listo para Transformar tu Proyecto?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Únete a nosotros en la misión de crear un futuro más seguro y sostenible para la industria minera en
            Colombia.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-[#1a896c] hover:bg-gray-100 px-8 py-3">
              <Phone className="mr-2 h-5 w-5" />
              Solicitar Cotización
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-[#1a896c] px-8 py-3 bg-transparent"
            >
              <Mail className="mr-2 h-5 w-5" />
              Agendar Reunión
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
