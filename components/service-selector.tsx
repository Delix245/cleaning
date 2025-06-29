"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronDown, ChevronUp } from "lucide-react"

interface ServiceOption {
  name: string
  price: number
  description?: string
}

interface ServiceCategory {
  id: string
  title: string
  icon: string
  options: ServiceOption[]
}

const serviceCategories: ServiceCategory[] = [
  {
    id: "carpet",
    title: "Carpet Cleaning",
    icon: "🧺",
    options: [
      { name: "Standard Room", price: 70, description: "Up to 200 sq ft" },
      { name: "Large Room", price: 95, description: "200-400 sq ft" },
      { name: "Stairs (per step)", price: 12 },
      { name: "Landing", price: 15 },
      { name: "Area Rug 5×8", price: 59 },
      { name: "Area Rug 6×9", price: 79 },
      { name: "Area Rug 8×10", price: 99 },
      { name: "Area Rug 9×12", price: 119 },
    ],
  },
  {
    id: "upholstery",
    title: "Upholstery & Furniture",
    icon: "🛋️",
    options: [
      { name: "Loveseat (2-seater) - Standard", price: 79 },
      { name: "Loveseat (2-seater) - Deep Extraction", price: 99 },
      { name: "3-Seater Sofa - Standard", price: 99 },
      { name: "3-Seater Sofa - Deep Extraction", price: 119 },
      { name: "Sectional (5-7 seat) - Standard", price: 135 },
      { name: "Sectional (5-7 seat) - Deep Extraction", price: 165 },
      { name: "L-Shape Couch - Standard", price: 125 },
      { name: "L-Shape Couch - Deep Extraction", price: 155 },
      { name: "Armchair", price: 39 },
      { name: "Ottoman/Bench", price: 29 },
      { name: "Dining Chair", price: 16 },
      { name: "Mattress Cleaning", price: 89 },
    ],
  },
  {
    id: "auto",
    title: "Auto Detailing",
    icon: "🚗",
    options: [
      { name: "Basic Interior Clean", price: 85, description: "Vacuum, wipe surfaces, basic windows" },
      { name: "Premium Interior Detail", price: 145, description: "Deep shampoo, vents, crevices, all plastics" },
      { name: "Carpet & Seat Shampoo", price: 55, description: "Deep extraction cleaning" },
      { name: "Pet Hair Removal", price: 20, description: "Add-on service" },
      { name: "Odor/Stain Removal", price: 25, description: "Add-on service" },
      { name: "Leather Conditioning", price: 35, description: "Add-on service" },
    ],
  },
]

interface ServiceSelectorProps {
  onServiceSelect?: (service: { category: string; option: ServiceOption }) => void
}

export function ServiceSelector({ onServiceSelect }: ServiceSelectorProps) {
  const [expandedCategories, setExpandedCategories] = useState<string[]>(["carpet"])
  const [selectedServices, setSelectedServices] = useState<{ category: string; option: ServiceOption }[]>([])

  const toggleCategory = (categoryId: string) => {
    setExpandedCategories((prev) =>
      prev.includes(categoryId) ? prev.filter((id) => id !== categoryId) : [...prev, categoryId],
    )
  }

  const selectService = (category: string, option: ServiceOption) => {
    const service = { category, option }
    setSelectedServices((prev) => [...prev, service])
    onServiceSelect?.(service)
  }

  const removeService = (index: number) => {
    setSelectedServices((prev) => prev.filter((_, i) => i !== index))
  }

  const totalPrice = selectedServices.reduce((sum, service) => sum + service.option.price, 0)
  const discountedPrice = Math.round(totalPrice * 0.7) // 30% discount

  return (
    <div className="space-y-6">
      {/* Selected Services Summary */}
      {selectedServices.length > 0 && (
        <Card className="border-[#3D8B7D] bg-green-50">
          <CardHeader>
            <CardTitle className="text-[#0A5189] flex items-center justify-between">
              Selected Services
              <Badge variant="secondary" className="bg-red-100 text-red-700">
                30% OFF
              </Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 mb-4">
              {selectedServices.map((service, index) => (
                <div key={index} className="flex items-center justify-between bg-white p-2 rounded">
                  <span className="text-sm">
                    {service.category} - {service.option.name}
                  </span>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-medium">${service.option.price}</span>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => removeService(index)}
                      className="h-6 w-6 p-0 text-red-500 hover:text-red-700"
                    >
                      ×
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            <div className="border-t pt-2">
              <div className="flex justify-between items-center">
                <span className="font-semibold">Total:</span>
                <div className="text-right">
                  <span className="text-sm text-gray-500 line-through">${totalPrice}</span>
                  <span className="ml-2 text-lg font-bold text-green-600">${discountedPrice}</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Service Categories */}
      {serviceCategories.map((category) => (
        <Card key={category.id} className="overflow-hidden">
          <CardHeader
            className="cursor-pointer hover:bg-gray-50 transition-colors"
            onClick={() => toggleCategory(category.id)}
          >
            <CardTitle className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <span className="text-2xl">{category.icon}</span>
                <span className="text-[#0A5189]">{category.title}</span>
              </div>
              {expandedCategories.includes(category.id) ? (
                <ChevronUp className="w-5 h-5 text-gray-500" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-500" />
              )}
            </CardTitle>
          </CardHeader>
          {expandedCategories.includes(category.id) && (
            <CardContent>
              <div className="grid gap-3">
                {category.options.map((option, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex-1">
                      <div className="font-medium text-gray-900">{option.name}</div>
                      {option.description && <div className="text-sm text-gray-500">{option.description}</div>}
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="text-right">
                        <div className="text-sm text-gray-500">from</div>
                        <div className="font-bold text-[#0A5189]">${option.price}</div>
                      </div>
                      <Button
                        size="sm"
                        onClick={() => selectService(category.title, option)}
                        className="bg-[#3D8B7D] hover:bg-[#2d6b5f]"
                      >
                        Add
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          )}
        </Card>
      ))}
    </div>
  )
}
