"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, ArrowLeft, Calculator, Users, Calendar, MapPin, CheckCircle, Download, Send } from "lucide-react"

interface QuoteData {
  service: string
  participants: string
  duration: string
  location: string
  urgency: string
  additionalServices: string[]
  companyName: string
  contactName: string
  email: string
  phone: string
  requirements: string
}

const services = [
  { id: "capacitaciones", name: "Capacitaciones en Seguridad", basePrice: 150000 },
  { id: "epp", name: "Suministro de EPP", basePrice: 0 },
  { id: "asesorias", name: "Asesorías Técnicas", basePrice: 2500000 },
  { id: "consultoria", name: "Consultoría Minera", basePrice: 15000000 },
]

const additionalServices = [
  { id: "certificacion", name: "Certificación Oficial", price: 50000 },
  { id: "material", name: "Material Didáctico Premium", price: 25000 },
  { id: "seguimiento", name: "Seguimiento Post-Servicio", price: 100000 },
  { id: "auditoria", name: "Auditoría Complementaria", price: 500000 },
  { id: "transporte", name: "Transporte Especializado", price: 200000 },
]

export default function ServiceQuoteCalculator() {
  const [currentStep, setCurrentStep] = useState(1)
  const [quoteData, setQuoteData] = useState<QuoteData>({
    service: "",
    participants: "",
    duration: "",
    location: "",
    urgency: "",
    additionalServices: [],
    companyName: "",
    contactName: "",
    email: "",
    phone: "",
    requirements: "",
  })

  const [estimatedPrice, setEstimatedPrice] = useState(0)
  const [showResults, setShowResults] = useState(false)

  const calculatePrice = () => {
    const selectedService = services.find((s) => s.id === quoteData.service)
    if (!selectedService) return 0

    let basePrice = selectedService.basePrice
    const participants = Number.parseInt(quoteData.participants) || 1

    // Multiply by participants for training services
    if (quoteData.service === "capacitaciones") {
      basePrice *= participants
    }

    // Duration multiplier
    const durationMultiplier =
      {
        "1-week": 1,
        "2-weeks": 1.8,
        "1-month": 3.5,
        "3-months": 10,
        "6-months": 18,
      }[quoteData.duration] || 1

    // Location multiplier
    const locationMultiplier =
      {
        bogota: 1,
        medellin: 1.1,
        cali: 1.1,
        barranquilla: 1.2,
        other: 1.3,
      }[quoteData.location] || 1

    // Urgency multiplier
    const urgencyMultiplier =
      {
        normal: 1,
        urgent: 1.2,
        emergency: 1.5,
      }[quoteData.urgency] || 1

    // Additional services
    const additionalCost = quoteData.additionalServices.reduce((total, serviceId) => {
      const service = additionalServices.find((s) => s.id === serviceId)
      return total + (service ? service.price * participants : 0)
    }, 0)

    const totalPrice = basePrice * durationMultiplier * locationMultiplier * urgencyMultiplier + additionalCost
    return Math.round(totalPrice)
  }

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1)
    } else {
      const price = calculatePrice()
      setEstimatedPrice(price)
      setShowResults(true)
    }
  }

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleServiceChange = (value: string) => {
    setQuoteData({ ...quoteData, service: value })
  }

  const handleAdditionalServiceChange = (serviceId: string, checked: boolean) => {
    const updatedServices = checked
      ? [...quoteData.additionalServices, serviceId]
      : quoteData.additionalServices.filter((id) => id !== serviceId)

    setQuoteData({ ...quoteData, additionalServices: updatedServices })
  }

  if (showResults) {
    return (
      <Card className="max-w-4xl mx-auto shadow-xl">
        <CardHeader className="text-center bg-gradient-to-r from-green-50 to-blue-50">
          <div className="flex justify-center mb-4">
            <div className="bg-green-100 p-4 rounded-full">
              <CheckCircle className="h-12 w-12 text-green-600" />
            </div>
          </div>
          <CardTitle className="text-3xl font-bold text-gray-900">¡Cotización Generada!</CardTitle>
          <CardDescription className="text-lg">
            Hemos calculado una cotización personalizada para tu proyecto
          </CardDescription>
        </CardHeader>

        <CardContent className="p-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Quote Summary */}
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Resumen de Cotización</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Servicio:</span>
                    <span className="font-medium">{services.find((s) => s.id === quoteData.service)?.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Participantes:</span>
                    <span className="font-medium">{quoteData.participants}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Duración:</span>
                    <span className="font-medium">{quoteData.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Ubicación:</span>
                    <span className="font-medium">{quoteData.location}</span>
                  </div>
                  {quoteData.additionalServices.length > 0 && (
                    <div>
                      <span className="text-gray-600">Servicios adicionales:</span>
                      <ul className="mt-2 space-y-1">
                        {quoteData.additionalServices.map((serviceId) => {
                          const service = additionalServices.find((s) => s.id === serviceId)
                          return (
                            <li key={serviceId} className="text-sm text-gray-700 ml-4">
                              • {service?.name}
                            </li>
                          )
                        })}
                      </ul>
                    </div>
                  )}
                </div>
              </div>

              <div className="bg-green-50 p-6 rounded-lg text-center">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Precio Estimado</h4>
                <div className="text-4xl font-bold text-green-600 mb-2">${estimatedPrice.toLocaleString()} COP</div>
                <p className="text-sm text-gray-600">*Precio estimado sujeto a confirmación técnica</p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-gray-900">Confirmar Cotización</h3>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="companyName">Empresa *</Label>
                  <Input
                    id="companyName"
                    value={quoteData.companyName}
                    onChange={(e) => setQuoteData({ ...quoteData, companyName: e.target.value })}
                    placeholder="Nombre de tu empresa"
                  />
                </div>
                <div>
                  <Label htmlFor="contactName">Nombre de contacto *</Label>
                  <Input
                    id="contactName"
                    value={quoteData.contactName}
                    onChange={(e) => setQuoteData({ ...quoteData, contactName: e.target.value })}
                    placeholder="Tu nombre completo"
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={quoteData.email}
                    onChange={(e) => setQuoteData({ ...quoteData, email: e.target.value })}
                    placeholder="tu@empresa.com"
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Teléfono *</Label>
                  <Input
                    id="phone"
                    value={quoteData.phone}
                    onChange={(e) => setQuoteData({ ...quoteData, phone: e.target.value })}
                    placeholder="+57 300 123 4567"
                  />
                </div>
                <div>
                  <Label htmlFor="requirements">Requerimientos adicionales</Label>
                  <Textarea
                    id="requirements"
                    value={quoteData.requirements}
                    onChange={(e) => setQuoteData({ ...quoteData, requirements: e.target.value })}
                    placeholder="Describe cualquier requerimiento específico..."
                    rows={3}
                  />
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="flex-1 bg-[#1FAE69] hover:bg-[#136D41]">
                  <Send className="mr-2 h-4 w-4" />
                  Enviar Cotización
                </Button>
                <Button variant="outline" className="flex-1 bg-transparent">
                  <Download className="mr-2 h-4 w-4" />
                  Descargar PDF
                </Button>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t text-center">
            <p className="text-gray-600 mb-4">
              ¿Necesitas ayuda personalizada? Nuestro equipo está listo para atenderte
            </p>
            <Button variant="outline" onClick={() => setShowResults(false)} className="bg-transparent">
              Calcular Nueva Cotización
            </Button>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="max-w-4xl mx-auto shadow-xl">
      <CardHeader>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <div className="bg-gray-100 p-3 rounded-full mr-4">
              <Calculator className="h-6 w-6 text-" />
            </div>
            <div>
              <CardTitle className="text-2xl font-bold text-gray-900">Cotizador Inteligente</CardTitle>
              <CardDescription>Paso {currentStep} de 4 - Obtén tu cotización personalizada</CardDescription>
            </div>
          </div>
          <Badge variant="outline" className="bg-[#F1E09E] text-[#A47740]">
            {Math.round((currentStep / 4) * 100)}% Completado
          </Badge>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-[#A47740] h-2 rounded-full transition-all duration-300"
            style={{ width: `${(currentStep / 4) * 100}%` }}
          />
        </div>
      </CardHeader>

      <CardContent className="p-8">
        {/* Step 1: Service Selection */}
        {currentStep === 1 && (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">¿Qué servicio necesitas?</h3>
              <p className="text-gray-600">Selecciona el servicio principal que requiere tu empresa</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {services.map((service) => (
                <Card
                  key={service.id}
                  className={`cursor-pointer transition-all duration-200 hover:shadow-md ${
                    quoteData.service === service.id ? "ring-2 ring-[#A47740] bg-[#F3E6D3]" : "hover:bg-gray-50"
                  }`}
                  onClick={() => handleServiceChange(service.id)}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">{service.name}</h4>
                        <p className="text-sm text-gray-600">
                          {service.basePrice > 0
                            ? `Desde $${service.basePrice.toLocaleString()} COP`
                            : "Cotización personalizada"}
                        </p>
                      </div>
                      <div
                        className={`w-4 h-4 rounded-full border-2 ${
                          quoteData.service === service.id ? "bg-blue-500 border-blue-500" : "border-gray-300"
                        }`}
                      />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Step 2: Project Details */}
        {currentStep === 2 && (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Detalles del Proyecto</h3>
              <p className="text-gray-600">Ayúdanos a entender mejor tus necesidades específicas</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="participants" className="flex items-center mb-2">
                  <Users className="h-4 w-4 mr-2" />
                  Número de Participantes
                </Label>
                <Select
                  value={quoteData.participants}
                  onValueChange={(value) => setQuoteData({ ...quoteData, participants: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Selecciona cantidad" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1-10">1-10 personas</SelectItem>
                    <SelectItem value="11-25">11-25 personas</SelectItem>
                    <SelectItem value="26-50">26-50 personas</SelectItem>
                    <SelectItem value="51-100">51-100 personas</SelectItem>
                    <SelectItem value="100+">Más de 100 personas</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="duration" className="flex items-center mb-2">
                  <Calendar className="h-4 w-4 mr-2" />
                  Duración del Proyecto
                </Label>
                <Select
                  value={quoteData.duration}
                  onValueChange={(value) => setQuoteData({ ...quoteData, duration: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Selecciona duración" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1-week">1 semana</SelectItem>
                    <SelectItem value="2-weeks">2 semanas</SelectItem>
                    <SelectItem value="1-month">1 mes</SelectItem>
                    <SelectItem value="3-months">3 meses</SelectItem>
                    <SelectItem value="6-months">6 meses o más</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="location" className="flex items-center mb-2">
                  <MapPin className="h-4 w-4 mr-2" />
                  Ubicación del Proyecto
                </Label>
                <Select
                  value={quoteData.location}
                  onValueChange={(value) => setQuoteData({ ...quoteData, location: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Selecciona ubicación" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="bogota">Bogotá</SelectItem>
                    <SelectItem value="medellin">Medellín</SelectItem>
                    <SelectItem value="cali">Cali</SelectItem>
                    <SelectItem value="barranquilla">Barranquilla</SelectItem>
                    <SelectItem value="other">Otra ciudad</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="urgency">Urgencia del Proyecto</Label>
                <Select
                  value={quoteData.urgency}
                  onValueChange={(value) => setQuoteData({ ...quoteData, urgency: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Selecciona urgencia" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="normal">Normal (30+ días)</SelectItem>
                    <SelectItem value="urgent">Urgente (15-30 días)</SelectItem>
                    <SelectItem value="emergency">Emergencia (menos de 15 días)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        )}

        {/* Step 3: Additional Services */}
        {currentStep === 3 && (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Servicios Adicionales</h3>
              <p className="text-gray-600">Selecciona los servicios complementarios que necesites</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {additionalServices.map((service) => (
                <div key={service.id} className="flex items-center space-x-3 p-4 border rounded-lg hover:bg-gray-50">
                  <Checkbox
                    id={service.id}
                    checked={quoteData.additionalServices.includes(service.id)}
                    onCheckedChange={(checked) => handleAdditionalServiceChange(service.id, checked as boolean)}
                  />
                  <div className="flex-1">
                    <Label htmlFor={service.id} className="font-medium text-gray-900 cursor-pointer">
                      {service.name}
                    </Label>
                    <p className="text-sm text-green-600 font-medium">+${service.price.toLocaleString()} COP</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Step 4: Contact Information */}
        {currentStep === 4 && (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Información de Contacto</h3>
              <p className="text-gray-600">Últimos detalles para generar tu cotización personalizada</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="companyName">Nombre de la Empresa *</Label>
                <Input
                  id="companyName"
                  value={quoteData.companyName}
                  onChange={(e) => setQuoteData({ ...quoteData, companyName: e.target.value })}
                  placeholder="Nombre de tu empresa"
                />
              </div>
              <div>
                <Label htmlFor="contactName">Nombre de Contacto *</Label>
                <Input
                  id="contactName"
                  value={quoteData.contactName}
                  onChange={(e) => setQuoteData({ ...quoteData, contactName: e.target.value })}
                  placeholder="Tu nombre completo"
                />
              </div>
              <div>
                <Label htmlFor="email">Correo Electrónico *</Label>
                <Input
                  id="email"
                  type="email"
                  value={quoteData.email}
                  onChange={(e) => setQuoteData({ ...quoteData, email: e.target.value })}
                  placeholder="tu@empresa.com"
                />
              </div>
              <div>
                <Label htmlFor="phone">Teléfono *</Label>
                <Input
                  id="phone"
                  value={quoteData.phone}
                  onChange={(e) => setQuoteData({ ...quoteData, phone: e.target.value })}
                  placeholder="+57 300 123 4567"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="requirements">Requerimientos Específicos</Label>
              <Textarea
                id="requirements"
                value={quoteData.requirements}
                onChange={(e) => setQuoteData({ ...quoteData, requirements: e.target.value })}
                placeholder="Describe cualquier requerimiento específico o información adicional..."
                rows={4}
              />
            </div>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-8 pt-6 border-t">
          <Button variant="outline" onClick={handleBack} disabled={currentStep === 1} className="bg-transparent">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Anterior
          </Button>

          <Button
            onClick={handleNext}
            className="bg-[#1FAE69] hover:bg-[#136D41]"
            disabled={
              (currentStep === 1 && !quoteData.service) ||
              (currentStep === 2 &&
                (!quoteData.participants || !quoteData.duration || !quoteData.location || !quoteData.urgency)) ||
              (currentStep === 4 &&
                (!quoteData.companyName || !quoteData.contactName || !quoteData.email || !quoteData.phone))
            }
          >
            {currentStep === 4 ? "Generar Cotización" : "Siguiente"}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
