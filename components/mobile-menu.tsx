"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Phone, Mail, MessageCircle } from "lucide-react"

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  const handleLinkClick = () => {
    setIsOpen(false)
  }

  const smoothScroll = (elementId: string) => {
    setIsOpen(false)
    setTimeout(() => {
      const element = document.getElementById(elementId)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }, 100)
  }

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <SheetHeader>
          <SheetTitle className="text-left text-xl font-bold text-[#0A5189]">CleanPro Services</SheetTitle>
        </SheetHeader>

        <nav className="flex flex-col space-y-4 mt-8">
          <button
            onClick={() => smoothScroll("home")}
            className="text-left py-3 px-4 text-lg font-medium text-gray-700 hover:text-[#0A5189] hover:bg-gray-50 rounded-lg transition-colors"
          >
            Home
          </button>
          <button
            onClick={() => smoothScroll("services")}
            className="text-left py-3 px-4 text-lg font-medium text-gray-700 hover:text-[#0A5189] hover:bg-gray-50 rounded-lg transition-colors"
          >
            Services
          </button>
          <button
            onClick={() => smoothScroll("about")}
            className="text-left py-3 px-4 text-lg font-medium text-gray-700 hover:text-[#0A5189] hover:bg-gray-50 rounded-lg transition-colors"
          >
            About
          </button>
          <button
            onClick={() => smoothScroll("gallery")}
            className="text-left py-3 px-4 text-lg font-medium text-gray-700 hover:text-[#0A5189] hover:bg-gray-50 rounded-lg transition-colors"
          >
            Gallery
          </button>
          <button
            onClick={() => smoothScroll("faq")}
            className="text-left py-3 px-4 text-lg font-medium text-gray-700 hover:text-[#0A5189] hover:bg-gray-50 rounded-lg transition-colors"
          >
            FAQ
          </button>
          <button
            onClick={() => smoothScroll("contact")}
            className="text-left py-3 px-4 text-lg font-medium text-gray-700 hover:text-[#0A5189] hover:bg-gray-50 rounded-lg transition-colors"
          >
            Contact
          </button>
        </nav>

        {/* Contact Info */}
        <div className="mt-8 pt-8 border-t border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Us</h3>

          <div className="space-y-3">
            <a
              href="tel:+380975251984"
              className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
              onClick={handleLinkClick}
            >
              <Phone className="w-5 h-5 text-blue-600" />
              <span className="text-blue-600 font-medium">+380 97 525 1984</span>
            </a>

            <a
              href="mailto:harabugaslava@gmail.com"
              className="flex items-center space-x-3 p-3 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors"
              onClick={handleLinkClick}
            >
              <Mail className="w-5 h-5 text-purple-600" />
              <span className="text-purple-600 font-medium">Email Us</span>
            </a>

            <a
              href="https://wa.me/380975251984?text=Hello! I would like to get a quote for cleaning services."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
              onClick={handleLinkClick}
            >
              <MessageCircle className="w-5 h-5 text-green-600" />
              <span className="text-green-600 font-medium">WhatsApp</span>
            </a>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
