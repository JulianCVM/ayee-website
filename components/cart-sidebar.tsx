"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { X, Plus, Minus, Send, ShoppingCart } from "lucide-react"
import Image from "next/image"

interface CartItem {
  id: number
  name: string
  brand: string
  price: number
  image: string
  quantity: number
}

interface CartSidebarProps {
  isOpen: boolean
  onClose: () => void
  cart: CartItem[]
  setCart: (cart: CartItem[]) => void
}

export default function CartSidebar({ isOpen, onClose, cart, setCart }: CartSidebarProps) {
  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity <= 0) {
      setCart(cart.filter((item) => item.id !== id))
    } else {
      setCart(cart.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item)))
    }
  }

  const removeItem = (id: number) => {
    setCart(cart.filter((item) => item.id !== id))
  }

  const getTotalItems = () => {
    return cart.reduce((sum, item) => sum + item.quantity, 0)
  }

  const getTotalValue = () => {
    return cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("es-CO", {
      style: "currency",
      currency: "COP",
      minimumFractionDigits: 0,
    }).format(price)
  }

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent side="right" className="w-full sm:w-[500px] overflow-y-auto">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2">
            <ShoppingCart className="h-5 w-5" />
            Solicitud de Cotización ({getTotalItems()})
          </SheetTitle>
          <SheetDescription>Revisa los productos seleccionados y envía tu solicitud de cotización</SheetDescription>
        </SheetHeader>

        <div className="mt-6 space-y-6">
          {cart.length === 0 ? (
            <div className="text-center py-12">
              <ShoppingCart className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No hay productos seleccionados</h3>
              <p className="text-gray-600">Agrega productos para solicitar una cotización</p>
            </div>
          ) : (
            <>
              {/* Cart Items */}
              <div className="space-y-4">
                {cart.map((item) => (
                  <Card key={item.id} className="shadow-sm">
                    <CardContent className="p-4">
                      <div className="flex items-start gap-4">
                        <Image
                          src={item.image || "/placeholder.svg"}
                          alt={item.name}
                          width={80}
                          height={80}
                          className="rounded object-cover flex-shrink-0"
                        />

                        <div className="flex-1 min-w-0">
                          <h4 className="font-medium text-gray-900 line-clamp-2 text-sm">{item.name}</h4>
                          <p className="text-sm text-gray-600 mb-2">{item.brand}</p>
                          <p className="text-lg font-bold text-blue-600">{formatPrice(item.price)}</p>

                          {/* Quantity Controls */}
                          <div className="flex items-center gap-2 mt-3">
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="h-8 w-8 p-0"
                            >
                              <Minus className="h-3 w-3" />
                            </Button>
                            <span className="w-12 text-center text-sm font-medium">{item.quantity}</span>
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="h-8 w-8 p-0"
                            >
                              <Plus className="h-3 w-3" />
                            </Button>
                          </div>
                        </div>

                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => removeItem(item.id)}
                          className="text-gray-400 hover:text-red-600 p-1"
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Summary */}
              <Card className="bg-gray-50">
                <CardContent className="p-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Total de productos:</span>
                      <span>{getTotalItems()} unidades</span>
                    </div>
                    <div className="flex justify-between text-lg font-bold">
                      <span>Valor estimado:</span>
                      <span className="text-blue-600">{formatPrice(getTotalValue())}</span>
                    </div>
                    <p className="text-xs text-gray-600 mt-2">
                      *Precio referencial. La cotización final puede variar según cantidad y condiciones.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Quote Form */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Datos para Cotización</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <Label htmlFor="name" className="text-sm">
                        Nombre *
                      </Label>
                      <Input id="name" placeholder="Tu nombre" className="h-9" />
                    </div>
                    <div>
                      <Label htmlFor="phone" className="text-sm">
                        Teléfono *
                      </Label>
                      <Input id="phone" placeholder="300 123 4567" className="h-9" />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-sm">
                      Correo Electrónico *
                    </Label>
                    <Input id="email" type="email" placeholder="tu@empresa.com" className="h-9" />
                  </div>

                  <div>
                    <Label htmlFor="company" className="text-sm">
                      Empresa (Opcional)
                    </Label>
                    <Input id="company" placeholder="Nombre de tu empresa" className="h-9" />
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-sm">
                      Mensaje Adicional
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Cuéntanos sobre tu proyecto, cantidades específicas, fechas de entrega..."
                      rows={3}
                      className="resize-none"
                    />
                  </div>

                  <Button className="w-full bg-blue-600 hover:bg-blue-700" size="lg">
                    <Send className="mr-2 h-4 w-4" />
                    Enviar Solicitud de Cotización
                  </Button>

                  <p className="text-xs text-gray-600 text-center">
                    Responderemos tu solicitud en menos de 24 horas hábiles
                  </p>
                </CardContent>
              </Card>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  )
}
