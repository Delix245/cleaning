"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Phone, MessageCircle, X } from "lucide-react"

export function CallRequestWidget() {
  const [isVisible, setIsVisible] = useState(true)

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/380975251984?text=Hello! I would like to get a quote for cleaning services.", "_blank")
  }

  const handlePhoneClick = () => {
    window.location.href = "tel:+380975251984"
  }

  if (!isVisible) return null

  return (
    <>
      {/* Top Banner */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-red-600 to-red-700 text-white py-2 px-4 shadow-lg">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Phone className="w-4 h-4" />
            <span className="text-sm font-medium">📞 Call Now: +380 97 525 1984</span>
            <span className="hidden md:inline text-sm">| 🎉 30% OFF All Services This Month!</span>
          </div>
          <button onClick={() => setIsVisible(false)} className="text-white hover:text-red-200 transition-colors">
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* WhatsApp Chat Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={handleWhatsAppClick}
          className="bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg hover:scale-105 transition-all duration-200 group"
          size="lg"
        >
          <MessageCircle className="w-6 h-6 mr-2" />
          <span className="hidden sm:inline">Chat with us</span>
          <span className="sm:hidden">Chat</span>
        </Button>
      </div>
    </>
  )
}
