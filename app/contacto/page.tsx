"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  Calendar,
  Users,
  Building,
  Headphones,
  Globe,
  CheckCircle,
  Star,
} from "lucide-react"
import Image from "next/image"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ContactMap from "@/components/contact-map"
import ContactTestimonials from "@/components/contact-testimonials"

const contactReasons = [
  { value: "capacitacion", label: "Capacitación en Seguridad", icon: Users },
  { value: "epp", label: "Suministro de EPP", icon: Building },
  { value: "asesoria", label: "Asesoría Técnica", icon: Headphones },
  { value: "consultoria", label: "Consultoría Minera", icon: Globe },
  { value: "proyecto", label: "Desarrollo de Proyecto", icon: Calendar },
  { value: "alianza", label: "Alianza Estratégica", icon: Users },
  { value: "otro", label: "Otro Tema", icon: MessageCircle },
]

const offices = [
  {
    id: "bogota",
    name: "Oficina Principal - Bogotá",
    address: "Carrera 15 #93-47, Oficina 501",
    city: "Bogotá, Colombia",
    phone: "+57 (1) 234 5678",
    mobile: "+57 300 123 4567",
    email: "bogota@ayee.com.co",
    hours: "Lunes - Viernes: 8:00 AM - 6:00 PM\nSábados: 9:00 AM - 1:00 PM",
    manager: "Dr. Carlos Mendoza",
    managerRole: "Director Ejecutivo",
    services: ["Administración", "Capacitaciones", "Consultoría", "EPP"],
    image: "/placeholder.svg?height=200&width=300&text=Oficina+Bogotá",
  },
  {
    id: "medellin",
    name: "Oficina Regional - Medellín",
    address: "Calle 10 Sur #48-62, Torre A, Piso 8",
    city: "Medellín, Antioquia",
    phone: "+57 (4) 456 7890",
    mobile: "+57 301 234 5678",
    email: "medellin@ayee.com.co",
    hours: "Lunes - Viernes: 8:00 AM - 5:30 PM\nSábados: 9:00 AM - 12:00 PM",
    manager: "Ing. María González",
    managerRole: "Directora Regional",
    services: ["Capacitaciones", "Proyectos Mineros", "EPP"],
    image: "/placeholder.svg?height=200&width=300&text=Oficina+Medellín",
  },
  {
    id: "bucaramanga",
    name: "Punto de Atención - Bucaramanga",
    address: "Carrera 27 #34-18, Centro Empresarial",
    city: "Bucaramanga, Santander",
    phone: "+57 (7) 678 9012",
    mobile: "+57 302 345 6789",
    email: "bucaramanga@ayee.com.co",
    hours: "Lunes - Viernes: 8:30 AM - 5:00 PM",
    manager: "Ing. Roberto Silva",
    managerRole: "Coordinador Técnico",
    services: ["Asesoría Técnica", "EPP", "Capacitaciones"],
    image: "/placeholder.svg?height=200&width=300&text=Oficina+Bucaramanga",
  },
]

const quickContacts = [
  {
    title: "Línea de Emergencias",
    subtitle: "Atención 24/7 para situaciones críticas",
    contact: "+57 300 911 AYEE",
    icon: Phone,
    color: "bg-red-500",
    action: "Llamar Ahora",
  },
  {
    title: "WhatsApp Business",
    subtitle: "Respuesta inmediata en horario laboral",
    contact: "+57 300 123 4567",
    icon: MessageCircle,
    color: "bg-green-500",
    action: "Chatear",
  },
  {
    title: "Email Comercial",
    subtitle: "Cotizaciones y propuestas comerciales",
    contact: "comercial@ayee.com.co",
    icon: Mail,
    color: "bg-blue-500",
    action: "Escribir",
  },
  {
    title: "Soporte Técnico",
    subtitle: "Asesoría especializada y soporte",
    contact: "soporte@ayee.com.co",
    icon: Headphones,
    color: "bg-purple-500",
    action: "Contactar",
  },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    position: "",
    reason: "",
    priority: "normal",
    message: "",
    acceptTerms: false,
    newsletter: false,
  })

  const [selectedOffice, setSelectedOffice] = useState("bogota")
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí iría la lógica de envío del formulario
    setFormSubmitted(true)
    setTimeout(() => setFormSubmitted(false), 5000)
  }

  const selectedOfficeData = offices.find((office) => office.id === selectedOffice) || offices[0]

  if (formSubmitted) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="pt-24 pb-20 flex items-center justify-center min-h-screen">
          <Card className="max-w-2xl mx-auto shadow-2xl border-0">
            <CardContent className="p-12 text-center">
              <div className="bg-green-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-10 w-10 text-green-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">¡Mensaje Enviado Exitosamente!</h2>
              <p className="text-lg text-gray-600 mb-6">
                Gracias por contactarnos. Hemos recibido tu mensaje y nuestro equipo se pondrá en contacto contigo en
                las próximas 24 horas hábiles.
              </p>
              <div className="bg-blue-50 p-4 rounded-lg mb-6">
                <p className="text-sm text-blue-800">
                  <strong>Número de referencia:</strong> AYEE-{Date.now().toString().slice(-6)}
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button onClick={() => setFormSubmitted(false)} className="bg-blue-600 hover:bg-blue-700">
                  Enviar Otro Mensaje
                </Button>
                <Button variant="outline" className="bg-transparent">
                  Volver al Inicio
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-900 via-blue-800 to-green-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0">
          <Image
            src="/placeholder.svg?height=600&width=1200&text=Equipo+AYEE+Atención"
            alt="Equipo AYEE"
            width={1200}
            height={600}
            className="w-full h-full object-cover opacity-20"
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-white/20 text-white border-white/30 text-lg px-4 py-2">
              Estamos Aquí para Ayudarte
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Hablemos de tu <span className="text-green-300">Proyecto</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed">
              Múltiples canales, respuesta garantizada
            </p>
            <p className="text-lg opacity-80 max-w-2xl mx-auto">
              Nuestro equipo de expertos está listo para escucharte y brindarte la mejor solución para tus necesidades
              de seguridad minera y desarrollo social.
            </p>
          </div>

          {/* Quick Contact Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2">24h</div>
              <div className="text-sm md:text-base opacity-90">Tiempo de Respuesta</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2">98%</div>
              <div className="text-sm md:text-base opacity-90">Satisfacción Cliente</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2">3</div>
              <div className="text-sm md:text-base opacity-90">Oficinas Nacionales</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2">15+</div>
              <div className="text-sm md:text-base opacity-90">Años de Experiencia</div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact Methods */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Canales de Contacto Directo</h2>
            <p className="text-lg text-gray-600">Elige el canal que mejor se adapte a tu necesidad</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickContacts.map((contact, index) => {
              const IconComponent = contact.icon
              return (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                  <CardContent className="p-6 text-center">
                    <div
                      className={`${contact.color} rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">{contact.title}</h3>
                    <p className="text-sm text-gray-600 mb-3">{contact.subtitle}</p>
                    <p className="font-medium text-blue-600 mb-4">{contact.contact}</p>
                    <Button size="sm" className="w-full bg-gray-900 hover:bg-gray-800">
                      {contact.action}
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="form" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="form" className="flex items-center gap-2">
                <Send className="h-4 w-4" />
                Formulario de Contacto
              </TabsTrigger>
              <TabsTrigger value="offices" className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                Nuestras Oficinas
              </TabsTrigger>
              <TabsTrigger value="schedule" className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                Agendar Reunión
              </TabsTrigger>
            </TabsList>

            {/* Contact Form Tab */}
            <TabsContent value="form">
              <div className="grid lg:grid-cols-2 gap-12">
                {/* Contact Form */}
                <Card className="shadow-xl border-0">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-gray-900">Envíanos tu Mensaje</CardTitle>
                    <CardDescription className="text-lg">
                      Completa el formulario y nos pondremos en contacto contigo lo antes posible
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="firstName">Nombre *</Label>
                          <Input
                            id="firstName"
                            placeholder="Tu nombre"
                            value={formData.firstName}
                            onChange={(e) => handleInputChange("firstName", e.target.value)}
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="lastName">Apellido *</Label>
                          <Input
                            id="lastName"
                            placeholder="Tu apellido"
                            value={formData.lastName}
                            onChange={(e) => handleInputChange("lastName", e.target.value)}
                            required
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="email">Correo Electrónico *</Label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="tu@email.com"
                            value={formData.email}
                            onChange={(e) => handleInputChange("email", e.target.value)}
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="phone">Teléfono *</Label>
                          <Input
                            id="phone"
                            type="tel"
                            placeholder="+57 300 123 4567"
                            value={formData.phone}
                            onChange={(e) => handleInputChange("phone", e.target.value)}
                            required
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="company">Empresa/Organización</Label>
                          <Input
                            id="company"
                            placeholder="Nombre de tu empresa"
                            value={formData.company}
                            onChange={(e) => handleInputChange("company", e.target.value)}
                          />
                        </div>
                        <div>
                          <Label htmlFor="position">Cargo</Label>
                          <Input
                            id="position"
                            placeholder="Tu cargo o posición"
                            value={formData.position}
                            onChange={(e) => handleInputChange("position", e.target.value)}
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="reason">Motivo de Contacto *</Label>
                          <Select value={formData.reason} onValueChange={(value) => handleInputChange("reason", value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Selecciona un motivo" />
                            </SelectTrigger>
                            <SelectContent>
                              {contactReasons.map((reason) => (
                                <SelectItem key={reason.value} value={reason.value}>
                                  {reason.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <Label htmlFor="priority">Prioridad</Label>
                          <Select
                            value={formData.priority}
                            onValueChange={(value) => handleInputChange("priority", value)}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Selecciona prioridad" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="low">Baja - Información general</SelectItem>
                              <SelectItem value="normal">Normal - Consulta comercial</SelectItem>
                              <SelectItem value="high">Alta - Proyecto en curso</SelectItem>
                              <SelectItem value="urgent">Urgente - Situación crítica</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="message">Mensaje *</Label>
                        <Textarea
                          id="message"
                          placeholder="Cuéntanos sobre tu proyecto, necesidad o consulta. Incluye detalles como ubicación, fechas, número de personas, presupuesto estimado, etc."
                          rows={5}
                          value={formData.message}
                          onChange={(e) => handleInputChange("message", e.target.value)}
                          required
                        />
                      </div>

                      <div className="space-y-3">
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="acceptTerms"
                            checked={formData.acceptTerms}
                            onCheckedChange={(checked) => handleInputChange("acceptTerms", checked as boolean)}
                            required
                          />
                          <Label htmlFor="acceptTerms" className="text-sm">
                            Acepto la política de privacidad y el tratamiento de mis datos personales *
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="newsletter"
                            checked={formData.newsletter}
                            onCheckedChange={(checked) => handleInputChange("newsletter", checked as boolean)}
                          />
                          <Label htmlFor="newsletter" className="text-sm">
                            Deseo recibir información sobre servicios, noticias y eventos de AYEE
                          </Label>
                        </div>
                      </div>

                      <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700" size="lg">
                        <Send className="mr-2 h-5 w-5" />
                        Enviar Mensaje
                      </Button>
                    </form>
                  </CardContent>
                </Card>

                {/* Contact Information */}
                <div className="space-y-8">
                  <Card className="shadow-xl border-0">
                    <CardHeader>
                      <CardTitle className="text-2xl font-bold text-gray-900">¿Por qué Contactarnos?</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="flex items-start space-x-4">
                        <div className="bg-blue-100 p-3 rounded-full">
                          <Users className="h-6 w-6 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">Experiencia Comprobada</h3>
                          <p className="text-gray-600">15+ años transformando la seguridad minera en Colombia</p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <div className="bg-green-100 p-3 rounded-full">
                          <CheckCircle className="h-6 w-6 text-green-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">Respuesta Garantizada</h3>
                          <p className="text-gray-600">Te contactamos en menos de 24 horas hábiles</p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <div className="bg-yellow-100 p-3 rounded-full">
                          <Star className="h-6 w-6 text-yellow-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">Asesoría Personalizada</h3>
                          <p className="text-gray-600">Soluciones adaptadas a tu contexto específico</p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <div className="bg-purple-100 p-3 rounded-full">
                          <Globe className="h-6 w-6 text-purple-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">Cobertura Nacional</h3>
                          <p className="text-gray-600">Presencia en 8 departamentos de Colombia</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Emergency Contact */}
                  <Card className="bg-red-50 border-red-200 shadow-xl">
                    <CardHeader>
                      <CardTitle className="text-xl font-bold text-red-800 flex items-center gap-2">
                        <Phone className="h-5 w-5" />
                        Línea de Emergencias
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-red-700 mb-4">
                        Para situaciones críticas de seguridad que requieren atención inmediata:
                      </p>
                      <div className="bg-white p-4 rounded-lg border border-red-200">
                        <p className="text-2xl font-bold text-red-600 mb-2">+57 300 911 AYEE</p>
                        <p className="text-sm text-red-600">Disponible 24 horas, 7 días a la semana</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            {/* Offices Tab */}
            <TabsContent value="offices">
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Office Selector */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Selecciona una Oficina</h3>
                  {offices.map((office) => (
                    <Card
                      key={office.id}
                      className={`cursor-pointer transition-all duration-200 ${
                        selectedOffice === office.id ? "ring-2 ring-blue-500 bg-blue-50" : "hover:bg-gray-50"
                      }`}
                      onClick={() => setSelectedOffice(office.id)}
                    >
                      <CardContent className="p-4">
                        <h4 className="font-semibold text-gray-900 mb-1">{office.name}</h4>
                        <p className="text-sm text-gray-600 mb-2">{office.city}</p>
                        <div className="flex flex-wrap gap-1">
                          {office.services.map((service, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {service}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Office Details */}
                <div className="lg:col-span-2">
                  <Card className="shadow-xl border-0">
                    <div className="relative overflow-hidden">
                      <Image
                        src={selectedOfficeData.image || "/placeholder.svg"}
                        alt={selectedOfficeData.name}
                        width={600}
                        height={200}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-blue-600 text-white">
                          {selectedOfficeData.name.includes("Principal")
                            ? "Oficina Principal"
                            : selectedOfficeData.name.includes("Regional")
                              ? "Oficina Regional"
                              : "Punto de Atención"}
                        </Badge>
                      </div>
                    </div>

                    <CardContent className="p-8">
                      <h3 className="text-2xl font-bold text-gray-900 mb-6">{selectedOfficeData.name}</h3>

                      <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-6">
                          <div className="flex items-start space-x-4">
                            <div className="bg-blue-100 p-3 rounded-full">
                              <MapPin className="h-6 w-6 text-blue-600" />
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-900">Dirección</h4>
                              <p className="text-gray-600">{selectedOfficeData.address}</p>
                              <p className="text-gray-600">{selectedOfficeData.city}</p>
                            </div>
                          </div>

                          <div className="flex items-start space-x-4">
                            <div className="bg-green-100 p-3 rounded-full">
                              <Phone className="h-6 w-6 text-green-600" />
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-900">Teléfonos</h4>
                              <p className="text-gray-600">Fijo: {selectedOfficeData.phone}</p>
                              <p className="text-gray-600">Móvil: {selectedOfficeData.mobile}</p>
                            </div>
                          </div>

                          <div className="flex items-start space-x-4">
                            <div className="bg-purple-100 p-3 rounded-full">
                              <Mail className="h-6 w-6 text-purple-600" />
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-900">Email</h4>
                              <p className="text-gray-600">{selectedOfficeData.email}</p>
                            </div>
                          </div>
                        </div>

                        <div className="space-y-6">
                          <div className="flex items-start space-x-4">
                            <div className="bg-yellow-100 p-3 rounded-full">
                              <Clock className="h-6 w-6 text-yellow-600" />
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-900">Horarios</h4>
                              <div className="text-gray-600 whitespace-pre-line">{selectedOfficeData.hours}</div>
                            </div>
                          </div>

                          <div className="flex items-start space-x-4">
                            <div className="bg-orange-100 p-3 rounded-full">
                              <Users className="h-6 w-6 text-orange-600" />
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-900">Responsable</h4>
                              <p className="text-gray-900 font-medium">{selectedOfficeData.manager}</p>
                              <p className="text-gray-600">{selectedOfficeData.managerRole}</p>
                            </div>
                          </div>

                          <div>
                            <h4 className="font-semibold text-gray-900 mb-3">Servicios Disponibles</h4>
                            <div className="flex flex-wrap gap-2">
                              {selectedOfficeData.services.map((service, index) => (
                                <Badge key={index} className="bg-blue-100 text-blue-800">
                                  {service}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="mt-8 pt-6 border-t">
                        <div className="flex flex-col sm:flex-row gap-4">
                          <Button className="flex-1 bg-blue-600 hover:bg-blue-700">
                            <Phone className="mr-2 h-4 w-4" />
                            Llamar Oficina
                          </Button>
                          <Button variant="outline" className="flex-1 bg-transparent">
                            <Mail className="mr-2 h-4 w-4" />
                            Enviar Email
                          </Button>
                          <Button variant="outline" className="flex-1 bg-transparent">
                            <MapPin className="mr-2 h-4 w-4" />
                            Ver en Mapa
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            {/* Schedule Meeting Tab */}
            <TabsContent value="schedule">
              <Card className="max-w-4xl mx-auto shadow-xl border-0">
                <CardHeader className="text-center">
                  <CardTitle className="text-3xl font-bold text-gray-900">Agenda una Reunión</CardTitle>
                  <CardDescription className="text-lg">
                    Reserva un espacio en nuestro calendario para una consulta personalizada
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-8">
                  <div className="grid lg:grid-cols-2 gap-12">
                    {/* Meeting Types */}
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-6">Tipos de Reunión Disponibles</h3>
                      <div className="space-y-4">
                        <Card className="border-l-4 border-l-blue-500">
                          <CardContent className="p-4">
                            <h4 className="font-semibold text-gray-900 mb-2">Consulta Inicial Gratuita</h4>
                            <p className="text-sm text-gray-600 mb-2">30 minutos - Virtual o presencial</p>
                            <p className="text-gray-700">
                              Evaluación inicial de necesidades y presentación de soluciones.
                            </p>
                          </CardContent>
                        </Card>

                        <Card className="border-l-4 border-l-green-500">
                          <CardContent className="p-4">
                            <h4 className="font-semibold text-gray-900 mb-2">Asesoría Técnica Especializada</h4>
                            <p className="text-sm text-gray-600 mb-2">60 minutos - Presencial recomendado</p>
                            <p className="text-gray-700">
                              Análisis detallado de riesgos y diseño de soluciones técnicas.
                            </p>
                          </CardContent>
                        </Card>

                        <Card className="border-l-4 border-l-orange-500">
                          <CardContent className="p-4">
                            <h4 className="font-semibold text-gray-900 mb-2">Presentación Comercial</h4>
                            <p className="text-sm text-gray-600 mb-2">45 minutos - Virtual o presencial</p>
                            <p className="text-gray-700">
                              Presentación de servicios, casos de éxito y propuesta comercial.
                            </p>
                          </CardContent>
                        </Card>

                        <Card className="border-l-4 border-l-purple-500">
                          <CardContent className="p-4">
                            <h4 className="font-semibold text-gray-900 mb-2">Visita Técnica en Campo</h4>
                            <p className="text-sm text-gray-600 mb-2">2-4 horas - Solo presencial</p>
                            <p className="text-gray-700">
                              Evaluación in-situ de operaciones y condiciones específicas.
                            </p>
                          </CardContent>
                        </Card>
                      </div>
                    </div>

                    {/* Calendar Integration */}
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-6">Reservar Cita</h3>
                      <div className="bg-gray-50 p-8 rounded-lg text-center">
                        <Calendar className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">Sistema de Citas Online</h4>
                        <p className="text-gray-600 mb-6">
                          Selecciona fecha, hora y tipo de reunión según tu disponibilidad y la nuestra.
                        </p>
                        <Button className="bg-blue-600 hover:bg-blue-700 mb-4">
                          <Calendar className="mr-2 h-4 w-4" />
                          Abrir Calendario
                        </Button>
                        <p className="text-sm text-gray-500">
                          También puedes llamarnos al +57 300 123 4567 para agendar por teléfono
                        </p>
                      </div>

                      {/* Meeting Preparation */}
                      <div className="mt-8">
                        <h4 className="font-semibold text-gray-900 mb-4">Prepara tu Reunión</h4>
                        <div className="space-y-3 text-sm text-gray-600">
                          <div className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                            <span>Ten a mano información sobre tu proyecto o necesidad específica</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                            <span>Prepara preguntas sobre servicios, costos y tiempos</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                            <span>Si es virtual, verifica tu conexión y cámara</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                            <span>Para visitas técnicas, coordina accesos y permisos</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Interactive Map */}
      <ContactMap offices={offices} />

      {/* Testimonials */}
      <ContactTestimonials />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Listo para Comenzar tu Proyecto?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            No esperes más. Nuestro equipo está preparado para ayudarte a transformar tu visión en realidad.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3">
              <Phone className="mr-2 h-5 w-5" />
              Llamar Ahora
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 bg-transparent"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              WhatsApp
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
