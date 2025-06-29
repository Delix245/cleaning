"use client"

import { useState, useEffect } from "react"
import { X, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

export function DiscountBanner() {
  const [isVisible, setIsVisible] = useState(true)
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    // Set countdown to 7 days from now
    const targetDate = new Date()
    targetDate.setDate(targetDate.getDate() + 7)

    const timer = setInterval(() => {
      const now = new Date().getTime()
      const distance = targetDate.getTime() - now

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        })
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-red-600 to-red-700 text-white shadow-lg animate-pulse">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Clock className="w-5 h-5" />
              <span className="font-bold text-lg">LIMITED TIME: 30% OFF ALL SERVICES!</span>
            </div>

            {/* Countdown Timer */}
            <div className="hidden md:flex items-center space-x-2 bg-white/20 px-3 py-1 rounded-full">
              <span className="text-sm font-medium">Ends in:</span>
              <div className="flex space-x-1 text-sm font-bold">
                <span>{timeLeft.days}d</span>
                <span>:</span>
                <span>{timeLeft.hours}h</span>
                <span>:</span>
                <span>{timeLeft.minutes}m</span>
                <span>:</span>
                <span>{timeLeft.seconds}s</span>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <Button
              size="sm"
              className="bg-white text-red-600 hover:bg-gray-100 font-bold"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Book Now
            </Button>
            <button
              onClick={() => setIsVisible(false)}
              className="text-white hover:text-gray-200 transition-colors"
              aria-label="Close banner"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Mobile countdown */}
        <div className="md:hidden mt-2 text-center">
          <div className="inline-flex items-center space-x-2 bg-white/20 px-3 py-1 rounded-full">
            <span className="text-sm font-medium">Ends in:</span>
            <div className="flex space-x-1 text-sm font-bold">
              <span>{timeLeft.days}d</span>
              <span>:</span>
              <span>{timeLeft.hours}h</span>
              <span>:</span>
              <span>{timeLeft.minutes}m</span>
              <span>:</span>
              <span>{timeLeft.seconds}s</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
