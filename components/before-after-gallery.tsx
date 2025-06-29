"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface BeforeAfterImage {
  id: number
  title: string
  before: string
  after: string
  description: string
}

const beforeAfterImages: BeforeAfterImage[] = [
  {
    id: 1,
    title: "Carpet Deep Cleaning",
    before: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=400&fit=crop",
    after: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&h=400&fit=crop",
    description: "Professional carpet cleaning with deep extraction method",
  },
  {
    id: 2,
    title: "Upholstery Restoration",
    before: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&h=400&fit=crop",
    after: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=400&fit=crop",
    description: "Complete upholstery cleaning and stain removal",
  },
  {
    id: 3,
    title: "Kitchen Deep Clean",
    before: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500&h=400&fit=crop",
    after: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500&h=400&fit=crop",
    description: "Complete kitchen sanitization and deep cleaning",
  },
  {
    id: 4,
    title: "Bathroom Restoration",
    before: "https://images.unsplash.com/photo-1620626011761-996317b8d101?w=500&h=400&fit=crop",
    after: "https://images.unsplash.com/photo-1620626011761-996317b8d101?w=500&h=400&fit=crop",
    description: "Tile and grout cleaning with mold removal",
  },
  {
    id: 5,
    title: "Office Space Cleaning",
    before: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=500&h=400&fit=crop",
    after: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=500&h=400&fit=crop",
    description: "Professional office cleaning and sanitization",
  },
]

export function BeforeAfterGallery() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showBefore, setShowBefore] = useState(true)

  const currentImage = beforeAfterImages[currentIndex]

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % beforeAfterImages.length)
  }

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + beforeAfterImages.length) % beforeAfterImages.length)
  }

  const goToImage = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Результаты нашей работы</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Посмотрите на невероятные трансформации, которые мы создаем для наших клиентов
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="overflow-hidden shadow-2xl">
            <CardContent className="p-0">
              {/* Navigation Buttons - TOP */}
              <div className="flex items-center justify-center gap-4 p-6 bg-white border-b">
                <Button
                  onClick={() => setShowBefore(true)}
                  variant={showBefore ? "default" : "outline"}
                  className={`px-6 py-2 font-semibold ${
                    showBefore
                      ? "bg-red-600 hover:bg-red-700 text-white"
                      : "border-red-600 text-red-600 hover:bg-red-50"
                  }`}
                >
                  BEFORE
                </Button>

                {/* Dots Indicator */}
                <div className="flex space-x-2">
                  {beforeAfterImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToImage(index)}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        index === currentIndex ? "bg-blue-600" : "bg-gray-300"
                      }`}
                    />
                  ))}
                </div>

                <Button
                  onClick={() => setShowBefore(false)}
                  variant={!showBefore ? "default" : "outline"}
                  className={`px-6 py-2 font-semibold ${
                    !showBefore
                      ? "bg-green-600 hover:bg-green-700 text-white"
                      : "border-green-600 text-green-600 hover:bg-green-50"
                  }`}
                >
                  AFTER
                </Button>
              </div>

              {/* Image Display */}
              <div className="relative">
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={showBefore ? currentImage.before : currentImage.after}
                    alt={`${showBefore ? "Before" : "After"} - ${currentImage.title}`}
                    className="w-full h-full object-cover transition-all duration-500"
                  />

                  {/* Status Badge */}
                  <div
                    className={`absolute top-4 left-4 px-4 py-2 rounded-full text-white font-bold text-sm ${
                      showBefore ? "bg-red-600" : "bg-green-600"
                    }`}
                  >
                    {showBefore ? "BEFORE" : "AFTER"}
                  </div>

                  {/* Navigation Arrows */}
                  <Button
                    onClick={prevImage}
                    variant="secondary"
                    size="icon"
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </Button>

                  <Button
                    onClick={nextImage}
                    variant="secondary"
                    size="icon"
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </Button>
                </div>

                {/* Image Info */}
                <div className="p-6 bg-white">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{currentImage.title}</h3>
                  <p className="text-gray-600 mb-4">{currentImage.description}</p>

                  {/* Mobile Counter */}
                  <div className="flex justify-center md:hidden">
                    <span className="text-sm text-gray-500">
                      {currentIndex + 1} / {beforeAfterImages.length}
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Thumbnail Navigation */}
          <div className="flex justify-center mt-8 space-x-2 overflow-x-auto pb-2">
            {beforeAfterImages.map((image, index) => (
              <button
                key={image.id}
                onClick={() => goToImage(index)}
                className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                  index === currentIndex
                    ? "border-blue-600 shadow-lg scale-110"
                    : "border-gray-300 hover:border-gray-400"
                }`}
              >
                <img
                  src={image.before || "/placeholder.svg"}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
