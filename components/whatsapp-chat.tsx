"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { MessageCircle, X, Send } from "lucide-react"
import { Button } from "@/components/ui/button"

interface WhatsAppChatProps {
  phoneNumber: string
  welcomeMessage?: string
  position?: "bottom-right" | "bottom-left"
  buttonColor?: string
  chatColor?: string
}

export function WhatsAppChat({
  phoneNumber,
  welcomeMessage = "Hello! How can we help you with your cleaning needs today?",
  position = "bottom-right",
  buttonColor = "bg-green-500",
  chatColor = "bg-green-50",
}: WhatsAppChatProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState("")
  const [isVisible, setIsVisible] = useState(false)

  // Show chat button after a delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!message.trim()) return

    // Format phone number (remove any non-digit characters)
    const formattedPhone = phoneNumber.replace(/\D/g, "")

    // Create WhatsApp URL with phone and pre-filled message
    const whatsappUrl = `https://wa.me/${formattedPhone}?text=${encodeURIComponent(message)}`

    // Open WhatsApp in a new tab
    window.open(whatsappUrl, "_blank")

    // Reset message
    setMessage("")
  }

  const positionClasses = position === "bottom-right" ? "bottom-6 right-6" : "bottom-6 left-6"

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hi! I'm interested in your cleaning services. Can you provide me with a quote?")
    window.open(`https://wa.me/${phoneNumber.replace(/\D/g, "")}?text=${message}`, "_blank")
  }

  if (!isVisible) return null

  return (
    <div className={`fixed ${positionClasses} z-50`}>
      {isOpen ? (
        <div className="flex flex-col w-80 sm:w-96 rounded-lg shadow-xl overflow-hidden">
          {/* Chat header */}
          <div className="bg-[#0A5189] text-white p-4 flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <MessageCircle className="h-6 w-6" />
              <h3 className="font-semibold">WhatsApp Chat</h3>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-[#064273] rounded-full p-1"
              aria-label="Close chat"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Chat body */}
          <div className={`${chatColor} p-4 flex-grow`}>
            {/* Welcome message */}
            <div className="bg-white p-3 rounded-lg shadow-sm mb-4 max-w-[85%]">
              <p className="text-gray-700">{welcomeMessage}</p>
            </div>

            {/* Chat form */}
            <form onSubmit={handleSubmit} className="mt-4">
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-grow p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3D8B7D]"
                />
                <Button type="submit" className="bg-[#0A5189] hover:bg-[#064273] text-white">
                  <Send className="h-5 w-5" />
                </Button>
              </div>
            </form>
          </div>

          {/* Chat footer */}
          <div className="bg-white p-2 text-center text-xs text-gray-500 border-t">Powered by WhatsApp</div>
        </div>
      ) : (
        <Button
          onClick={handleWhatsAppClick}
          className={`${buttonColor} hover:bg-[#064273] text-white rounded-full w-14 h-14 shadow-lg animate-pulse`}
          size="icon"
          aria-label="Open WhatsApp chat"
        >
          <MessageCircle className="w-6 h-6" />
          <span className="sr-only">Chat on WhatsApp</span>
        </Button>
      )}
    </div>
  )
}
