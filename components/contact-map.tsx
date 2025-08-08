"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Mail, Clock, Users, Navigation } from "lucide-react"
import Image from "next/image"

interface Office {
  id: string
  name: string
  address: string
  city: string
  phone: string
  mobile: string
  email: string
  hours: string
  manager: string
  managerRole: string
  services: string[]
  image: string
}

interface ContactMapProps {
  offices: Office[]
}

export default function ContactMap({ offices }: ContactMapProps) {
  const [selectedOffice, setSelectedOffice] = useState<string>("bogota")

  const selectedOfficeData = offices.find((office) => office.id === selectedOffice) || offices[0]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-blue-100 text-blue-800">Ubicaciones</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Encuéntranos en Colombia</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Presencia nacional con oficinas estratégicamente ubicadas para brindarte el mejor servicio
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Interactive Map */}
          <Card className="shadow-xl border-0 overflow-hidden">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-gray-900 flex items-center gap-2">
                <MapPin className="h-5 w-5 text-blue-600" />
                Mapa de Ubicaciones
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="relative bg-gradient-to-br from-blue-100 to-green-100 h-96 flex items-center justify-center">
                {/* Mapa de Colombia simplificado */}
                <div className="relative w-full h-full">
                  <Image
                    src="/placeholder.svg?height=400&width=600&text=Mapa+Colombia+AYEE"
                    alt="Mapa de Colombia con oficinas AYEE"
                    width={600}
                    height={400}
                    className="w-full h-full object-cover opacity-30"
                  />

                  {/* Marcadores de oficinas */}
                  <div className="absolute inset-0">
                    {/* Bogotá */}
                    <button
                      onClick={() => setSelectedOffice("bogota")}
                      className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full border-2 border-white shadow-lg transition-all duration-200 ${
                        selectedOffice === "bogota"
                          ? "bg-blue-600 scale-125"
                          : "bg-blue-500 hover:bg-blue-600 hover:scale-110"
                      }`}
                      title="Bogotá - Oficina Principal"
                    >
                      <span className="sr-only">Bogotá</span>
                    </button>

                    {/* Medellín */}
                    <button
                      onClick={() => setSelectedOffice("medellin")}
                      className={`absolute top-2/3 left-1/3 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full border-2 border-white shadow-lg transition-all duration-200 ${
                        selectedOffice === "medellin"
                          ? "bg-green-600 scale-125"
                          : "bg-green-500 hover:bg-green-600 hover:scale-110"
                      }`}
                      title="Medellín - Oficina Regional"
                    >
                      <span className="sr-only">Medellín</span>
                    </button>

                    {/* Bucaramanga */}
                    <button
                      onClick={() => setSelectedOffice("bucaramanga")}
                      className={`absolute top-1/3 right-1/3 transform translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full border-2 border-white shadow-lg transition-all duration-200 ${
                        selectedOffice === "bucaramanga"
                          ? "bg-orange-600 scale-125"
                          : "bg-orange-500 hover:bg-orange-600 hover:scale-110"
                      }`}
                      title="Bucaramanga - Punto de Atención"
                    >
                      <span className="sr-only">Bucaramanga</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Map Legend */}
              <div className="p-4 bg-white border-t">
                <div className="flex flex-wrap gap-4 justify-center">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                    <span className="text-sm text-gray-600">Oficina Principal</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-gray-600">Oficina Regional</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-orange-500 rounded-full"></div>
                    <span className="text-sm text-gray-600">Punto de Atención</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Office Details */}
          <div className="space-y-6">
            {/* Office Selector */}
            <div className="grid grid-cols-1 gap-3">
              {offices.map((office) => (
                <button
                  key={office.id}
                  onClick={() => setSelectedOffice(office.id)}
                  className={`text-left p-4 rounded-lg border-2 transition-all duration-200 ${
                    selectedOffice === office.id
                      ? "border-blue-500 bg-blue-50"
                      : "border-gray-200 hover:border-gray-300 bg-white"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-gray-900">{office.name}</h3>
                      <p className="text-sm text-gray-600">{office.city}</p>
                    </div>
                    <MapPin className={`h-5 w-5 ${selectedOffice === office.id ? "text-blue-600" : "text-gray-400"}`} />
                  </div>
                </button>
              ))}
            </div>

            {/* Selected Office Details */}
            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900">{selectedOfficeData.name}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-blue-600 mt-0.5" />
                      <div>
                        <p className="font-medium text-gray-900">Dirección</p>
                        <p className="text-sm text-gray-600">{selectedOfficeData.address}</p>
                        <p className="text-sm text-gray-600">{selectedOfficeData.city}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Phone className="h-5 w-5 text-green-600 mt-0.5" />
                      <div>
                        <p className="font-medium text-gray-900">Teléfonos</p>
                        <p className="text-sm text-gray-600">Fijo: {selectedOfficeData.phone}</p>
                        <p className="text-sm text-gray-600">Móvil: {selectedOfficeData.mobile}</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Mail className="h-5 w-5 text-purple-600 mt-0.5" />
                      <div>
                        <p className="font-medium text-gray-900">Email</p>
                        <p className="text-sm text-gray-600">{selectedOfficeData.email}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Clock className="h-5 w-5 text-yellow-600 mt-0.5" />
                      <div>
                        <p className="font-medium text-gray-900">Horarios</p>
                        <div className="text-sm text-gray-600 whitespace-pre-line">{selectedOfficeData.hours}</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <div className="flex items-center gap-3 mb-3">
                    <Users className="h-5 w-5 text-orange-600" />
                    <div>
                      <p className="font-medium text-gray-900">{selectedOfficeData.manager}</p>
                      <p className="text-sm text-gray-600">{selectedOfficeData.managerRole}</p>
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="font-medium text-gray-900 mb-2">Servicios Disponibles:</p>
                    <div className="flex flex-wrap gap-2">
                      {selectedOfficeData.services.map((service, index) => (
                        <Badge key={index} variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                          {service}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button className="flex-1 bg-blue-600 hover:bg-blue-700">
                      <Phone className="mr-2 h-4 w-4" />
                      Llamar
                    </Button>
                    <Button variant="outline" className="flex-1 bg-transparent">
                      <Navigation className="mr-2 h-4 w-4" />
                      Cómo Llegar
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Coverage Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-blue-600 mb-2">8</div>
            <div className="text-sm text-gray-600">Departamentos</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-green-600 mb-2">25+</div>
            <div className="text-sm text-gray-600">Ciudades</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-orange-600 mb-2">100+</div>
            <div className="text-sm text-gray-600">Municipios</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-purple-600 mb-2">500+</div>
            <div className="text-sm text-gray-600">Proyectos</div>
          </div>
        </div>
      </div>
    </section>
  )
}
