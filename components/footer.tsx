import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Linkedin, Instagram, Twitter, Phone, Mail, MapPin } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Image
                src="/images/ayee-logo.png"
                alt="AYEE - Acciones y Estrategias"
                width={160}
                height={50}
                className="h-10 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-gray-400 mb-4">
              Transformando la seguridad minera y social en Colombia a través de estrategias innovadoras y compromiso
              comunitario.
            </p>
            <div className="flex space-x-4">
              <Button size="icon" variant="ghost" className="text-gray-400 hover:text-white hover:bg-[#1a896c]">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost" className="text-gray-400 hover:text-white hover:bg-[#1a896c]">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost" className="text-gray-400 hover:text-white hover:bg-[#1a896c]">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost" className="text-gray-400 hover:text-white hover:bg-[#1a896c]">
                <Twitter className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/nosotros" className="text-gray-400 hover:text-white transition-colors">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link href="/proyectos" className="text-gray-400 hover:text-white transition-colors">
                  Proyectos
                </Link>
              </li>
              <li>
                <Link href="/servicios" className="text-gray-400 hover:text-white transition-colors">
                  Servicios
                </Link>
              </li>
              <li>
                <Link href="/noticias" className="text-gray-400 hover:text-white transition-colors">
                  Noticias
                </Link>
              </li>
              <li>
                <Link href="/tienda-epp" className="text-gray-400 hover:text-white transition-colors">
                  Tienda EPP
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-gray-400 hover:text-white transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Servicios</h3>
            <ul className="space-y-2">
              <li>
                <span className="text-gray-400">Capacitaciones en Seguridad</span>
              </li>
              <li>
                <span className="text-gray-400">Suministro de EPP</span>
              </li>
              <li>
                <span className="text-gray-400">Asesorías Técnicas</span>
              </li>
              <li>
                <span className="text-gray-400">Consultoría Minera</span>
              </li>
              <li>
                <span className="text-gray-400">Gestión de Riesgos</span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contacto</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-[#1a896c]" />
                <span className="text-gray-400">Bogotá, Colombia</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-[#1a896c]" />
                <span className="text-gray-400">+57 300 123 4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-[#1a896c]" />
                <span className="text-gray-400">info@ayee.com.co</span>
              </div>
            </div>

            {/* Newsletter */}
            <div className="mt-6">
              <h4 className="font-medium mb-2">Boletín Informativo</h4>
              <div className="flex space-x-2">
                <Input type="email" placeholder="Tu email" className="bg-gray-800 border-gray-700 text-white" />
                <Button className="bg-[#1a896c] hover:bg-[#0f6b52]">Suscribir</Button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} AYEE - Acciones y Estrategias. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
