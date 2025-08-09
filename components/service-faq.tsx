import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { HelpCircle } from "lucide-react"

const faqs = [
  {
    question: "¿Qué certificaciones tienen sus capacitaciones?",
    answer:
      "Todas nuestras capacitaciones están avaladas por el SENA y cumplen con las normativas colombianas e internacionales. Nuestros instructores están certificados y tienen amplia experiencia en el sector minero. Al finalizar, los participantes reciben certificados oficiales reconocidos por la industria.",
  },
  {
    question: "¿Realizan servicios en todo el territorio nacional?",
    answer:
      "Sí, prestamos servicios en todo Colombia. Tenemos experiencia trabajando en diferentes regiones del país, desde la Costa Atlántica hasta el Pacífico, incluyendo zonas de difícil acceso. Nuestro equipo está preparado para adaptarse a las condiciones específicas de cada región.",
  },
  {
    question: "¿Cuánto tiempo toma implementar un programa de seguridad completo?",
    answer:
      "El tiempo de implementación varía según el tamaño de la operación y los requerimientos específicos. Generalmente, un programa básico toma entre 2-4 semanas, mientras que implementaciones integrales pueden requerir 3-6 meses. Siempre proporcionamos un cronograma detallado en la propuesta.",
  },
  {
    question: "¿Ofrecen garantía en sus equipos de protección personal?",
    answer:
      "Todos nuestros equipos de protección personal vienen con garantía extendida de 2 años contra defectos de fabricación. Además, ofrecemos servicio de mantenimiento y calibración para equipos especializados. Trabajamos solo con marcas reconocidas internacionalmente.",
  },
  {
    question: "¿Pueden adaptar sus servicios a pequeñas operaciones mineras?",
    answer:
      "Absolutamente. Tenemos programas específicamente diseñados para pequeñas y medianas operaciones mineras. Entendemos que cada operación tiene necesidades y presupuestos diferentes, por lo que ofrecemos soluciones escalables y flexibles.",
  },
  {
    question: "¿Qué incluye el seguimiento post-servicio?",
    answer:
      "Nuestro seguimiento incluye evaluaciones periódicas, actualizaciones de protocolos, soporte técnico continuo, y reportes de desempeño. Para capacitaciones, incluimos refuerzos y evaluaciones de retención del conocimiento durante 6 meses sin costo adicional.",
  },
  {
    question: "¿Cómo calculan los precios de sus servicios?",
    answer:
      "Los precios se calculan considerando factores como: número de participantes, duración del proyecto, ubicación, urgencia, y servicios adicionales requeridos. Nuestro cotizador online proporciona estimaciones precisas, pero siempre confirmamos con una evaluación técnica detallada.",
  },
  {
    question: "¿Qué experiencia tienen trabajando con comunidades locales?",
    answer:
      "Tenemos más de 15 años de experiencia trabajando directamente con comunidades mineras en todo Colombia. Nuestro enfoque incluye el relacionamiento comunitario, respeto por las tradiciones locales, y programas de desarrollo social que benefician a las comunidades donde operamos.",
  },
]

export default function ServiceFAQ() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-[#D2D3D5] text-[#000000]">Preguntas Frecuentes</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Resolvemos tus Dudas</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Encuentra respuestas a las preguntas más comunes sobre nuestros servicios
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="shadow-lg">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <div className="bg-purple-100 p-4 rounded-full">
                  <HelpCircle className="h-8 w-8 text-purple-600" />
                </div>
              </div>
              <CardTitle className="text-2xl font-bold text-gray-900">Preguntas Frecuentes</CardTitle>
              <CardDescription>
                Si no encuentras la respuesta que buscas, no dudes en contactarnos directamente
              </CardDescription>
            </CardHeader>

            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left font-medium text-gray-900 hover:text-blue-600">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 leading-relaxed">{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>

          <div className="mt-8 text-center">
            <p className="text-gray-600 mb-4">¿Tienes alguna pregunta específica que no está aquí?</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+573001234567"
                className="inline-flex items-center justify-center px-6 py-3 bg-[#1A896C] text-white rounded-lg hover:bg-[#136D41] transition-colors"
              >
                Llamar Ahora
              </a>
              <a
                href="mailto:info@ayee.com.co"
                className="inline-flex items-center justify-center px-6 py-3 border border-[#661A26] text-[#661A26] rounded-lg hover:bg-[#F7E6E9] transition-colors"
              >
                Enviar Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
