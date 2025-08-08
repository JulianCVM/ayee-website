import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Mail, Send } from "lucide-react"

export default function NewsletterSignup() {
  return (
    <section className="py-16 bg-gradient-to-r from-green-50 to-blue-50">
      <div className="container mx-auto px-4">
        <Card className="max-w-2xl mx-auto shadow-xl border-0">
          <CardHeader className="text-center">
            <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Mail className="h-8 w-8 text-green-600" />
            </div>
            <CardTitle className="text-2xl font-bold text-gray-900">Suscríbete a Nuestro Boletín</CardTitle>
            <CardDescription className="text-lg">
              Recibe las últimas noticias, artículos y recursos directamente en tu correo electrónico
            </CardDescription>
          </CardHeader>

          <CardContent>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">Nombre *</Label>
                  <Input id="firstName" placeholder="Tu nombre" required />
                </div>
                <div>
                  <Label htmlFor="lastName">Apellido *</Label>
                  <Input id="lastName" placeholder="Tu apellido" required />
                </div>
              </div>

              <div>
                <Label htmlFor="email">Correo Electrónico *</Label>
                <Input id="email" type="email" placeholder="tu@email.com" required />
              </div>

              <div>
                <Label htmlFor="organization">Organización (Opcional)</Label>
                <Input id="organization" placeholder="Nombre de tu organización" />
              </div>

              <div className="space-y-3">
                <Label className="text-base font-medium">Intereses (selecciona los temas que te interesan):</Label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="seguridad" />
                    <Label htmlFor="seguridad" className="text-sm">
                      Seguridad Minera
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="capacitacion" />
                    <Label htmlFor="capacitacion" className="text-sm">
                      Capacitación
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="tecnologia" />
                    <Label htmlFor="tecnologia" className="text-sm">
                      Tecnología
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="paz" />
                    <Label htmlFor="paz" className="text-sm">
                      Construcción de Paz
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="ambiente" />
                    <Label htmlFor="ambiente" className="text-sm">
                      Medio Ambiente
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="empresarial" />
                    <Label htmlFor="empresarial" className="text-sm">
                      Desarrollo Empresarial
                    </Label>
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox id="privacy" required />
                <Label htmlFor="privacy" className="text-sm text-gray-600">
                  Acepto la política de privacidad y el tratamiento de mis datos personales *
                </Label>
              </div>

              <Button type="submit" className="w-full bg-green-600 hover:bg-green-700" size="lg">
                <Send className="mr-2 h-5 w-5" />
                Suscribirse al Boletín
              </Button>
            </form>

            <div className="mt-6 text-center text-sm text-gray-600">
              <p>Enviamos máximo 2 correos por mes. Puedes cancelar tu suscripción en cualquier momento.</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
