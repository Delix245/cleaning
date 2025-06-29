import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Droplets, ArrowLeft, CheckCircle2, Users, Award } from "lucide-react"
import Image from "next/image"

export const metadata: Metadata = {
  title: "About Us - EcoClean Professional Cleaning Services",
  description:
    "Learn about EcoClean's professional cleaning team, our eco-friendly approach, and commitment to excellence in Fargo.",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed w-full z-50 bg-white shadow-sm" role="banner">
        <div className="container mx-auto px-4 lg:px-6 h-16 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center space-x-3 transition-transform duration-300 hover:scale-105"
            aria-label="EcoClean Home"
          >
            <div className="w-10 h-10 bg-[#3D8B7D] rounded-full flex items-center justify-center">
              <Droplets className="w-6 h-6 text-white" aria-hidden="true" />
            </div>
            <span className="text-xl font-bold text-[#0A5189]">EcoClean</span>
          </Link>
          <nav className="hidden md:flex space-x-10" role="navigation">
            <Link href="/" className="text-[#0A5189] hover:text-[#3D8B7D] font-medium text-lg">
              Home
            </Link>
            <Link href="/about" className="text-[#3D8B7D] font-medium text-lg">
              About
            </Link>
            <Link href="/faq" className="text-[#0A5189] hover:text-[#3D8B7D] font-medium text-lg">
              FAQ
            </Link>
            <Link href="/#contact" className="text-[#0A5189] hover:text-[#3D8B7D] font-medium text-lg">
              Contact
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-[#0A5189] to-[#3D8B7D] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Link href="/" className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About EcoClean</h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Professional deep extraction cleaning services in Fargo with a commitment to excellence and eco-friendly
              solutions
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Company Story */}
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-3xl font-bold text-[#0A5189] mb-6">Our Story</h2>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  We are a professional deep extraction cleaning company specializing in upholstery, car interiors, and
                  carpets. Our goal is to ensure your fabrics and surfaces are cleaned to your absolute satisfaction. We
                  currently serve the Fargo area with our team of experienced and vetted cleaning professionals.
                </p>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  EcoClean goes above and beyond to provide exceptional deep extraction cleaning. You can book your
                  cleaning service online in just 60 seconds. It's simple, trusted and convenient.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Our commitment to using eco-friendly products and state-of-the-art equipment ensures that your home
                  and family are safe while achieving the best possible cleaning results.
                </p>
              </div>
              <div className="relative">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_20250608_001701_123-BW1qSXKYv68UARYMxfTWqdowUrtom4.png"
                  alt="Professional cleaning equipment"
                  width={500}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>

            {/* Values */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-[#0A5189] mb-12 text-center">Our Values</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center p-6 bg-gray-50 rounded-lg">
                  <div className="w-16 h-16 bg-[#3D8B7D] rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0A5189] mb-3">Quality First</h3>
                  <p className="text-gray-700">
                    We never compromise on quality. Every job is completed to the highest standards using
                    professional-grade equipment.
                  </p>
                </div>
                <div className="text-center p-6 bg-gray-50 rounded-lg">
                  <div className="w-16 h-16 bg-[#3D8B7D] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0A5189] mb-3">Customer Focus</h3>
                  <p className="text-gray-700">
                    Your satisfaction is our priority. We listen to your needs and tailor our services accordingly.
                  </p>
                </div>
                <div className="text-center p-6 bg-gray-50 rounded-lg">
                  <div className="w-16 h-16 bg-[#3D8B7D] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0A5189] mb-3">Eco-Friendly</h3>
                  <p className="text-gray-700">
                    We use only environmentally safe products that are effective yet gentle on your family and pets.
                  </p>
                </div>
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-[#0A5189] mb-8 text-center">Why Choose EcoClean?</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle2 className="w-6 h-6 text-[#3D8B7D] mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-[#0A5189] mb-1">Professional Equipment</h4>
                      <p className="text-gray-700">State-of-the-art extraction equipment for superior results</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle2 className="w-6 h-6 text-[#3D8B7D] mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-[#0A5189] mb-1">Experienced Team</h4>
                      <p className="text-gray-700">Trained and vetted cleaning professionals</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle2 className="w-6 h-6 text-[#3D8B7D] mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-[#0A5189] mb-1">Fast Drying</h4>
                      <p className="text-gray-700">Quick-drying process minimizes downtime</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle2 className="w-6 h-6 text-[#3D8B7D] mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-[#0A5189] mb-1">Flexible Scheduling</h4>
                      <p className="text-gray-700">Book online in 60 seconds, no contracts required</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle2 className="w-6 h-6 text-[#3D8B7D] mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-[#0A5189] mb-1">Transparent Pricing</h4>
                      <p className="text-gray-700">No hidden fees, pay only after completion</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle2 className="w-6 h-6 text-[#3D8B7D] mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-[#0A5189] mb-1">Satisfaction Guarantee</h4>
                      <p className="text-gray-700">100% satisfaction guarantee on all services</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center bg-gray-50 p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-[#0A5189] mb-4">Ready to Experience the Difference?</h2>
              <p className="text-gray-700 mb-6">
                Join hundreds of satisfied customers in Fargo who trust EcoClean for their cleaning needs.
              </p>
              <Link href="/#contact">
                <Button className="bg-[#3D8B7D] hover:bg-[#2d6b5f] text-white px-8 py-3 text-lg">
                  Get Your Free Quote
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
