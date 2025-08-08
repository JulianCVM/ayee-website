import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { HelpCircle, Shield, Truck, Clock, Phone } from "lucide-react"

const faqs = [
  {
    question: "¿Todos los productos tienen certificación?",
    answer:
      "Sí, todos nuestros productos cuentan con certificaciones nacionales e internacionales vigentes (ANSI, EN, NTC, NIOSH, etc.). Cada producto incluye los certificados correspondientes y fichas técnicas detalladas. Trabajamos únicamente con marcas reconocidas mundialmente que cumplen con los más altos estándares de calidad y seguridad.",
    icon: Shield,
  },
  {
    question: "¿Realizan envíos a otras ciudades?",
    answer:
      "Sí, realizamos envíos a todo el territorio nacional. Contamos con una red logística especializada que garantiza la entrega segura de los productos. Los tiempos de entrega varían según la ubicación: Bogotá y área metropolitana (1-2 días), ciudades principales (2-4 días), y municipios (3-7 días). Los costos de envío se calculan según destino y peso.",
    icon: Truck,
  },
  {
    question: "¿Cómo saber mi talla correcta?",
    answer:
      "Proporcionamos guías de tallas detalladas para cada tipo de producto. Nuestro equipo técnico puede asesorarte telefónicamente o por videollamada para determinar las tallas correctas. Para pedidos corporativos, ofrecemos el servicio de toma de medidas en sitio. También contamos con kits de muestra para productos críticos como respiradores y arneses.",
    icon: HelpCircle,
  },
  {
    question: "¿Cuáles son los tiempos de entrega?",
    answer:
      "Los tiempos de entrega dependen de la disponibilidad y ubicación: Productos en stock se entregan en 1-7 días según la ciudad. Productos bajo pedido pueden tomar 15-30 días. Para pedidos urgentes, contamos con un servicio express (costo adicional). Siempre confirmamos tiempos exactos antes de procesar el pedido.",
    icon: Clock,
  },
  {
    question: "¿Ofrecen atención postventa?",
    answer:
      "Sí, ofrecemos atención postventa completa que incluye: soporte técnico para uso correcto de productos, asesoría en mantenimiento y cuidado, gestión de garantías, capacitación en uso de EPP, y seguimiento de satisfacción. Nuestro equipo técnico está disponible para resolver dudas y brindar soporte continuo.",
    icon: Phone,
  },
  {
    question: "¿Manejan descuentos por volumen?",
    answer:
      "Sí, ofrecemos descuentos especiales para compras por volumen y clientes corporativos. Los descuentos varían según la cantidad, tipo de producto y frecuencia de compra. También tenemos programas especiales para distribuidores y aliados comerciales. Contacta a nuestro equipo comercial para conocer las tarifas preferenciales disponibles.",
  },
  {
    question: "¿Qué garantía tienen los productos?",
    answer:
      "Todos los productos cuentan con garantía del fabricante que varía según el tipo: EPP desechables tienen garantía de calidad, productos reutilizables tienen garantía de 6-36 meses según especificaciones. Cubrimos defectos de fabricación y fallas prematuras. La garantía no cubre desgaste normal por uso o daños por mal uso.",
  },
  {
    question: "¿Pueden asesorarme en la selección de EPP?",
    answer:
      "Por supuesto. Nuestro equipo de ingenieros especializados en seguridad industrial puede asesorarte en: evaluación de riesgos específicos, selección del EPP adecuado según normativas, análisis costo-beneficio, programas de reposición, y capacitación en uso correcto. Esta asesoría es gratuita para nuestros clientes.",
  },
]

export default function EPPFAQ() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-orange-100 text-orange-800">Preguntas Frecuentes</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Resolvemos tus Dudas sobre EPP</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Encuentra respuestas a las preguntas más comunes sobre nuestros productos y servicios
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="shadow-xl border-0">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <div className="bg-orange-100 p-4 rounded-full">
                  <HelpCircle className="h-8 w-8 text-orange-600" />
                </div>
              </div>
              <CardTitle className="text-2xl font-bold text-gray-900">Garantías, Soporte y Más</CardTitle>
              <CardDescription className="text-lg">
                Si no encuentras la respuesta que buscas, contáctanos directamente
              </CardDescription>
            </CardHeader>

            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left font-medium text-gray-900 hover:text-blue-600">
                      <div className="flex items-center gap-3">
                        {faq.icon && <faq.icon className="h-5 w-5 text-blue-600" />}
                        {faq.question}
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 leading-relaxed pl-8">{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>

          {/* Contact Support */}
          <div className="mt-12 text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-4">¿Necesitas Asesoría Técnica Especializada?</h3>
            <p className="text-gray-600 mb-6">
              Nuestro equipo de expertos está listo para ayudarte con cualquier consulta específica
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+573001234567"
                className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Phone className="mr-2 h-4 w-4" />
                Llamar Ahora
              </a>
              <a
                href="https://wa.me/573001234567"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
              >
                WhatsApp Business
              </a>
              <a
                href="mailto:epp@ayee.com.co"
                className="inline-flex items-center justify-center px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
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
