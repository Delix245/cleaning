"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import {
  Droplets,
  CheckCircle2,
  Phone,
  CreditCard,
  FileText,
  List,
  Home,
  Car,
  Sparkles,
  Shield,
  Clock,
  Award,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { EnhancedContactForm } from "@/components/enhanced-contact-form"
import { FAQAccordion } from "@/components/faq-accordion"
import { BeforeAfterGallery } from "@/components/before-after-gallery"
import { MobileMenu } from "@/components/mobile-menu"
import { CallRequestWidget } from "@/components/call-request-widget"
import { useEffect, useState } from "react"
import Head from "next/head"

export default function CleaningCompanyWebsite() {
  const faqItems = [
    {
      question: "How often should I have my carpets professionally cleaned?",
      answer:
        "For most homes, we recommend professional carpet cleaning every 6-12 months. However, homes with pets, children, or high foot traffic may benefit from more frequent cleanings (every 3-6 months). Regular professional cleaning extends the life of your carpets and maintains a healthier indoor environment by removing deep-seated dirt and allergens that regular vacuuming can't reach.",
    },
    {
      question: "What cleaning methods do you use for upholstery?",
      answer:
        "We use several specialized methods depending on the fabric type and manufacturer recommendations. For most upholstery, we employ a low-moisture extraction method that's gentle yet effective. For delicate fabrics, we use dry cleaning techniques. All our cleaning solutions are eco-friendly and safe for your family and pets, while still providing powerful cleaning results.",
    },
    {
      question: "Can you remove all types of stains from carpets and upholstery?",
      answer:
        "We can successfully remove most stains, including coffee, wine, pet accidents, food spills, and dirt. Our technicians are trained in specialized stain removal techniques and use professional-grade products designed for different stain types. For best results, we recommend treating stains as quickly as possible. Some older stains or those previously treated with store-bought cleaners may be more challenging but we'll always provide the best possible outcome.",
    },
    {
      question: "How long will it take for my carpets to dry after cleaning?",
      answer:
        "Typical drying time is 6-8 hours, though this can vary based on several factors including humidity, air circulation, and the thickness of your carpet. We use powerful extraction equipment that removes most of the moisture, significantly reducing drying time. We also offer accelerated drying services using air movers if you need faster results. We recommend keeping air circulation in the cleaned areas to help speed up the drying process.",
    },
    {
      question: "Do you move furniture when cleaning carpets?",
      answer:
        "Yes, our standard service includes moving light furniture (sofas, coffee tables, chairs) to ensure thorough cleaning of the entire carpeted area. For heavier items like entertainment centers, beds, or pianos, we clean around them for safety reasons. If you'd like us to clean under these items, we can discuss arrangements for moving them safely at an additional cost. We always place protective pads under furniture legs to protect your carpet during the drying process.",
    },
    {
      question: "Are your cleaning products safe for children and pets?",
      answer:
        "We prioritize your family's health and safety. All our cleaning solutions are eco-friendly, non-toxic, and safe for children and pets. Our products effectively clean while being gentle on the environment and your home. We avoid harsh chemicals and use green-certified products whenever possible. After cleaning, we recommend allowing the area to dry completely before allowing pets and children back onto the cleaned surfaces.",
    },
  ]

  // State for About section Read More
  const [isExpanded, setIsExpanded] = useState(false)

  // Smooth scroll for navigation links
  const smoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    const element = document.getElementById(id)
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80, // Adjust for header height
        behavior: "smooth",
      })
    }
  }

  // Add scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in")
          }
        })
      },
      { threshold: 0.1 },
    )

    const sections = document.querySelectorAll("section")
    sections.forEach((section) => {
      observer.observe(section)
    })

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section)
      })
    }
  }, [])

  const services = [
    {
      category: "Carpet & Rug Cleaning",
      icon: <Home className="w-8 h-8" />,
      services: [
        { name: "Deep Steam Cleaning", price: "from $89", size: "per room" },
        { name: "Stain Removal", price: "from $45", size: "per stain" },
        { name: "Pet Odor Treatment", price: "from $65", size: "per room" },
        { name: "Rug Cleaning", price: "from $120", size: "per rug" },
      ],
    },
    {
      category: "Upholstery Cleaning",
      icon: <Car className="w-8 h-8" />,
      services: [
        { name: "Sofa Cleaning", price: "from $150", size: "3-seater" },
        { name: "Chair Cleaning", price: "from $75", size: "per chair" },
        { name: "Mattress Cleaning", price: "from $120", size: "queen size" },
        { name: "Curtain Cleaning", price: "from $95", size: "per panel" },
      ],
    },
    {
      category: "Auto Detailing",
      icon: <Sparkles className="w-8 h-8" />,
      services: [
        { name: "Interior Detailing", price: "from $180", size: "full car" },
        { name: "Exterior Wash & Wax", price: "from $120", size: "full car" },
        { name: "Seat Cleaning", price: "from $85", size: "full set" },
        { name: "Complete Detail", price: "from $280", size: "full car" },
      ],
    },
    {
      category: "Specialty Services",
      icon: <Sparkles className="w-8 h-8" />,
      services: [
        { name: "Leather Cleaning", price: "from $95", size: "per item" },
        { name: "Tile & Grout", price: "from $3.50", size: "per sq ft" },
        { name: "Water Damage Restoration", price: "from $250", size: "per room" },
        { name: "Commercial Cleaning", price: "Custom Quote", size: "per project" },
      ],
    },
  ]

  return (
    <>
      <Head>
        {/* Additional Page-Specific Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "@id": "https://ecoclean-la.com/#webpage",
              url: "https://ecoclean-la.com",
              name: "EcoClean - Professional Carpet & Upholstery Cleaning Services in Fargo",
              isPartOf: {
                "@id": "https://ecoclean-la.com/#website",
              },
              about: {
                "@id": "https://ecoclean-la.com/#organization",
              },
              description:
                "Professional carpet cleaning, upholstery cleaning, and house cleaning services in Fargo. Eco-friendly cleaning solutions with 30% off all services.",
              breadcrumb: {
                "@id": "https://ecoclean-la.com/#breadcrumb",
              },
              inLanguage: "en-US",
              potentialAction: [
                {
                  "@type": "ReadAction",
                  target: ["https://ecoclean-la.com"],
                },
              ],
            }),
          }}
        />

        {/* Breadcrumb Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "@id": "https://ecoclean-la.com/#breadcrumb",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://ecoclean-la.com",
                },
              ],
            }),
          }}
        />

        {/* FAQ Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: faqItems.map((item, index) => ({
                "@type": "Question",
                name: item.question,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: item.answer,
                },
              })),
            }),
          }}
        />

        {/* Review Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Review",
              itemReviewed: {
                "@type": "LocalBusiness",
                name: "EcoClean Professional Cleaning Services",
              },
              reviewRating: {
                "@type": "Rating",
                ratingValue: "5",
                bestRating: "5",
              },
              author: {
                "@type": "Person",
                name: "John Doe",
              },
              reviewBody:
                "The house looks amazing. The team was on time, friendly, and very thorough in the cleaning. Thank you very much!",
            }),
          }}
        />
      </Head>

      <div className="min-h-screen font-sans bg-light-beige">
        {/* Call Request Widget */}
        <CallRequestWidget />

        {/* Header - Static Navigation */}
        <header className="w-full bg-white shadow-sm" role="banner">
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
            <nav className="hidden md:flex space-x-10" role="navigation" aria-label="Main navigation">
              <Link
                href="#services"
                onClick={(e) => smoothScroll(e, "services")}
                className="text-[#0A5189] hover:text-[#3D8B7D] font-medium text-lg nav-link transition-colors duration-300"
                aria-label="View our cleaning services"
              >
                Services
              </Link>
              <Link
                href="#pricing-section"
                onClick={(e) => smoothScroll(e, "pricing-section")}
                className="text-[#0A5189] hover:text-[#3D8B7D] font-medium text-lg nav-link transition-colors duration-300"
                aria-label="View our pricing"
              >
                Pricing
              </Link>
              <Link
                href="/about"
                className="text-[#0A5189] hover:text-[#3D8B7D] font-medium text-lg nav-link transition-colors duration-300"
                aria-label="Learn about EcoClean"
              >
                About
              </Link>
              <Link
                href="/faq"
                className="text-[#0A5189] hover:text-[#3D8B7D] font-medium text-lg nav-link transition-colors duration-300"
                aria-label="Frequently Asked Questions"
              >
                FAQ
              </Link>
              <Link
                href="#contact"
                onClick={(e) => smoothScroll(e, "contact")}
                className="text-[#0A5189] hover:text-[#3D8B7D] font-medium text-lg nav-link transition-colors duration-300"
                aria-label="Contact us for a quote"
              >
                Contact
              </Link>
            </nav>
            <div className="flex items-center space-x-2">
              <Button
                className="get-price-btn hidden md:block text-base py-6 px-8 flex items-center justify-center"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                aria-label="Get a price quote"
              >
                Get A Price
              </Button>
              <MobileMenu />
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section
          className="relative min-h-screen flex items-center justify-center pt-16 bg-beige bg-pattern-curve overflow-hidden"
          role="main"
        >
          <div
            className="absolute top-0 left-0 w-64 h-64 rounded-full bg-[#3D8B7D]/10 -translate-x-1/2 -translate-y-1/2"
            aria-hidden="true"
          ></div>
          <div
            className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-[#0A5189]/10 translate-x-1/3 translate-y-1/3"
            aria-hidden="true"
          ></div>

          <div className="container mx-auto px-4 pb-30 z-10 relative">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Desktop Content - Left Side */}
              <div className="feather-decoration feather-left md:block hidden">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0A5189] mb-6 leading-tight">
                  #1 Deep Extraction Cleaning in Fargo
                </h1>
                <p className="text-xl text-gray-700 mb-8">
                  EcoClean provides professional deep extraction cleaning for upholstery, car interiors, and carpets in
                  Fargo. We use powerful extractor vacuums to deep clean sofas, car seats, rugs, and more — eco-friendly
                  and fast drying.
                </p>
                <div className="flex flex-row gap-4 items-start">
                  <Button
                    className="get-price-btn"
                    onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                    aria-label="Get a free price quote"
                  >
                    Get A Price
                  </Button>
                  <Button
                    variant="outline"
                    className="border-[#3D8B7D] text-[#3D8B7D] hover:bg-[#3D8B7D] hover:text-white transition-all duration-300 bg-transparent"
                    onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
                    aria-label="Learn more about our services"
                  >
                    Learn More
                  </Button>
                </div>
              </div>

              {/* Image - Right Side on Desktop, Full Width on Mobile */}
              <div className="relative w-full">
                <div className="relative h-96 md:h-96 h-80 rounded-lg overflow-hidden shadow-xl transition-transform duration-500 hover:shadow-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                    alt="Professional carpet and upholstery cleaning service team in Fargo with eco-friendly equipment"
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  {/* Mobile Overlay with Gradient for Text Readability */}
                  <div
                    className="absolute inset-0 bg-gradient-to-b from-[#0A5189]/70 via-transparent to-transparent md:hidden"
                    aria-hidden="true"
                  ></div>

                  {/* Mobile Heading on top of image */}
                  <div className="absolute top-0 left-0 right-0 p-4 md:hidden">
                    <h1 className="text-3xl font-bold text-white leading-tight text-shadow">
                      #1 Deep Extraction Cleaning in Fargo
                    </h1>
                  </div>
                </div>

                {/* Discount Circle - Positioned the same for both mobile and desktop */}
                <div
                  className="absolute -bottom-5 -right-5 md:-right-5 right-2 w-24 h-24 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg hero-discount-circle pulse-animation"
                  aria-label="30% off special offer"
                >
                  30% OFF
                </div>
              </div>

              {/* Mobile Content Below Image */}
              <div className="md:hidden w-full">
                <p className="text-lg text-gray-700 mb-6">
                  EcoClean provides professional deep extraction cleaning for upholstery, car interiors, and carpets in
                  Fargo. We use powerful extractor vacuums to deep clean sofas, car seats, rugs, and more — eco-friendly
                  and fast drying.
                </p>
                <div className="flex flex-col gap-3">
                  <Button
                    className="get-price-btn w-full text-lg py-3"
                    onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                    aria-label="Get a free price quote"
                  >
                    Get A Price
                  </Button>
                  <Button
                    variant="outline"
                    className="border-[#3D8B7D] text-[#3D8B7D] hover:bg-[#3D8B7D] hover:text-white w-full text-lg py-3 transition-all duration-300 bg-transparent"
                    onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
                    aria-label="Learn more about our services"
                  >
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0" aria-hidden="true">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path
                fill="#ffffff"
                fillOpacity="1"
                d="M0,96L80,112C160,128,320,160,480,160C640,160,800,128,960,122.7C1120,117,1280,139,1360,149.3L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
              ></path>
            </svg>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-white animate-in" aria-labelledby="benefits-heading">
          <div className="container mx-auto px-4">
            <h2 id="benefits-heading" className="sr-only">
              Our Service Benefits
            </h2>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <article className="p-6 transition-transform duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-[#0A5189] rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-8 h-8 text-white" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-[#0A5189] mb-2">No Contracts</h3>
                <p className="text-gray-600">Book whenever you need us, no long-term commitments required</p>
              </article>

              <article className="p-6 transition-transform duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-[#0A5189] rounded-full flex items-center justify-center mx-auto mb-4">
                  <CreditCard className="w-8 h-8 text-white" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-[#0A5189] mb-2">No Advance Payment</h3>
                <p className="text-gray-600">Pay only after the service has been completed to your satisfaction</p>
              </article>

              <article className="p-6 transition-transform duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-[#0A5189] rounded-full flex items-center justify-center mx-auto mb-4">
                  <List className="w-8 h-8 text-white" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-[#0A5189] mb-2">No Hidden Charges</h3>
                <p className="text-gray-600">Transparent pricing with no surprise fees or hidden costs</p>
              </article>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 bg-gray-50 relative animate-in" aria-labelledby="services-heading">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 id="services-heading" className="text-4xl md:text-5xl font-bold mb-4 text-[#0A5189]">
                Our Professional Cleaning Services
              </h2>
              <div className="w-24 h-1 bg-[#3D8B7D] mx-auto mb-6"></div>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
                Specialized deep extraction cleaning for furniture, rugs, and vehicles in Fargo. Remove stains, odors,
                allergens – and bring back like-new freshness.
              </p>
            </div>

            {/* Carpet Cleaning */}
            <div className="mb-20">
              <div className="flex items-center justify-center mb-12">
                <div className="w-16 h-16 bg-[#3D8B7D] rounded-full flex items-center justify-center mr-4 shadow-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-white"
                  >
                    <rect width="18" height="18" x="3" y="3" rx="2" />
                    <path d="M21 12H3" />
                    <path d="M12 3v18" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-[#0A5189]">🧺 Carpet Cleaning</h3>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="relative h-48">
                    <Image
                      src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                      alt="Professional carpet cleaning service"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="text-lg font-semibold text-[#0A5189] mb-3">Room Cleaning</h4>
                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Standard Room</span>
                        <span className="font-bold text-[#0A5189]">
                          <span className="text-sm text-gray-500">from</span> $70
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Large Room</span>
                        <span className="font-bold text-[#0A5189]">
                          <span className="text-sm text-gray-500">from</span> $95
                        </span>
                      </div>
                    </div>
                    <Button
                      size="sm"
                      className="w-full bg-[#3D8B7D] hover:bg-[#2d6b5f]"
                      onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                    >
                      Get Quote
                    </Button>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="relative h-48">
                    <Image
                      src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2058&q=80"
                      alt="Stair carpet cleaning"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="text-lg font-semibold text-[#0A5189] mb-3">Stairs & Landings</h4>
                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Per Step</span>
                        <span className="font-bold text-[#0A5189]">
                          <span className="text-sm text-gray-500">from</span> $12
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Landing</span>
                        <span className="font-bold text-[#0A5189]">
                          <span className="text-sm text-gray-500">from</span> $15
                        </span>
                      </div>
                    </div>
                    <Button
                      size="sm"
                      className="w-full bg-[#3D8B7D] hover:bg-[#2d6b5f]"
                      onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                    >
                      Get Quote
                    </Button>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="relative h-48">
                    <Image
                      src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2058&q=80"
                      alt="Area rug cleaning service"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="text-lg font-semibold text-[#0A5189] mb-3">Small Area Rugs</h4>
                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between">
                        <span className="text-gray-600">5×8 Rug</span>
                        <span className="font-bold text-[#0A5189]">
                          <span className="text-sm text-gray-500">from</span> $59
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">6×9 Rug</span>
                        <span className="font-bold text-[#0A5189]">
                          <span className="text-sm text-gray-500">from</span> $79
                        </span>
                      </div>
                    </div>
                    <Button
                      size="sm"
                      className="w-full bg-[#3D8B7D] hover:bg-[#2d6b5f]"
                      onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                    >
                      Get Quote
                    </Button>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="relative h-48">
                    <Image
                      src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2058&q=80"
                      alt="Large area rug cleaning"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="text-lg font-semibold text-[#0A5189] mb-3">Large Area Rugs</h4>
                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between">
                        <span className="text-gray-600">8×10 Rug</span>
                        <span className="font-bold text-[#0A5189]">
                          <span className="text-sm text-gray-500">from</span> $99
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">9×12 Rug</span>
                        <span className="font-bold text-[#0A5189]">
                          <span className="text-sm text-gray-500">from</span> $119
                        </span>
                      </div>
                    </div>
                    <Button
                      size="sm"
                      className="w-full bg-[#3D8B7D] hover:bg-[#2d6b5f]"
                      onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                    >
                      Get Quote
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Upholstery & Furniture Cleaning */}
            <div className="mb-20">
              <div className="flex items-center justify-center mb-12">
                <div className="w-16 h-16 bg-[#3D8B7D] rounded-full flex items-center justify-center mr-4 shadow-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-white"
                  >
                    <rect x="4" y="7" width="16" height="14" rx="2" />
                    <path d="M4 7v0a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v0" />
                    <path d="M12 21v-7" />
                    <path d="M8 21v-4" />
                    <path d="M16 21v-4" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-[#0A5189]">🛋️ Upholstery & Furniture</h3>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="relative h-48">
                    <Image
                      src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2058&q=80"
                      alt="Loveseat cleaning service"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="text-lg font-semibold text-[#0A5189] mb-3">Loveseat (2-seater)</h4>
                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Standard Clean</span>
                        <span className="font-bold text-[#0A5189]">
                          <span className="text-sm text-gray-500">from</span> $79
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Deep Extraction</span>
                        <span className="font-bold text-[#0A5189]">
                          <span className="text-sm text-gray-500">from</span> $99
                        </span>
                      </div>
                    </div>
                    <Button
                      size="sm"
                      className="w-full bg-[#3D8B7D] hover:bg-[#2d6b5f]"
                      onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                    >
                      Get Quote
                    </Button>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="relative h-48">
                    <Image
                      src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2058&q=80"
                      alt="3-seater sofa cleaning"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="text-lg font-semibold text-[#0A5189] mb-3">3-Seater Sofa</h4>
                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Standard Clean</span>
                        <span className="font-bold text-[#0A5189]">
                          <span className="text-sm text-gray-500">from</span> $99
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Deep Extraction</span>
                        <span className="font-bold text-[#0A5189]">
                          <span className="text-sm text-gray-500">from</span> $119
                        </span>
                      </div>
                    </div>
                    <Button
                      size="sm"
                      className="w-full bg-[#3D8B7D] hover:bg-[#2d6b5f]"
                      onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                    >
                      Get Quote
                    </Button>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="relative h-48">
                    <Image
                      src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2058&q=80"
                      alt="Sectional sofa cleaning"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="text-lg font-semibold text-[#0A5189] mb-3">Sectional (5-7 seat)</h4>
                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Standard Clean</span>
                        <span className="font-bold text-[#0A5189]">
                          <span className="text-sm text-gray-500">from</span> $135
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Deep Extraction</span>
                        <span className="font-bold text-[#0A5189]">
                          <span className="text-sm text-gray-500">from</span> $165
                        </span>
                      </div>
                    </div>
                    <Button
                      size="sm"
                      className="w-full bg-[#3D8B7D] hover:bg-[#2d6b5f]"
                      onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                    >
                      Get Quote
                    </Button>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="relative h-48">
                    <Image
                      src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2058&q=80"
                      alt="Mattress and other furniture cleaning"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="text-lg font-semibold text-[#0A5189] mb-3">Other Items</h4>
                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Armchair</span>
                        <span className="font-bold text-[#0A5189]">
                          <span className="text-sm text-gray-500">from</span> $39
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Mattress</span>
                        <span className="font-bold text-[#0A5189]">
                          <span className="text-sm text-gray-500">from</span> $89
                        </span>
                      </div>
                    </div>
                    <Button
                      size="sm"
                      className="w-full bg-[#3D8B7D] hover:bg-[#2d6b5f]"
                      onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                    >
                      Get Quote
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Auto Detailing */}
            <div className="mb-16">
              <div className="flex items-center justify-center mb-12">
                <div className="w-16 h-16 bg-[#3D8B7D] rounded-full flex items-center justify-center mr-4 shadow-lg">
                  <Car className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-[#0A5189]">🚗 Auto Detailing</h3>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="relative h-48">
                    <Image
                      src="https://images.unsplash.com/photo-1607860108855-64acf2078ed9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
                      alt="Basic car interior cleaning"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="text-lg font-semibold text-[#0A5189] mb-3">Basic Interior Clean</h4>
                    <div className="space-y-2 mb-4">
                      <div className="text-center">
                        <span className="font-bold text-2xl text-[#0A5189]">
                          <span className="text-sm text-gray-500">from</span> $85
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 text-center">Vacuum, wipe surfaces, basic windows</p>
                    </div>
                    <Button
                      size="sm"
                      className="w-full bg-[#3D8B7D] hover:bg-[#2d6b5f]"
                      onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                    >
                      Get Quote
                    </Button>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="relative h-48">
                    <Image
                      src="https://images.unsplash.com/photo-1607860108855-64acf2078ed9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
                      alt="Premium car interior detailing"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="text-lg font-semibold text-[#0A5189] mb-3">Premium Interior Detail</h4>
                    <div className="space-y-2 mb-4">
                      <div className="text-center">
                        <span className="font-bold text-2xl text-[#0A5189]">
                          <span className="text-sm text-gray-500">from</span> $145
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 text-center">Deep shampoo, vents, crevices, all plastics</p>
                    </div>
                    <Button
                      size="sm"
                      className="w-full bg-[#3D8B7D] hover:bg-[#2d6b5f]"
                      onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                    >
                      Get Quote
                    </Button>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="relative h-48">
                    <Image
                      src="https://images.unsplash.com/photo-1607860108855-64acf2078ed9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
                      alt="Car carpet and seat shampooing"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="text-lg font-semibold text-[#0A5189] mb-3">Carpet & Seat Shampoo</h4>
                    <div className="space-y-2 mb-4">
                      <div className="text-center">
                        <span className="font-bold text-2xl text-[#0A5189]">
                          <span className="text-sm text-gray-500">from</span> $55
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 text-center">Deep extraction cleaning</p>
                    </div>
                    <Button
                      size="sm"
                      className="w-full bg-[#3D8B7D] hover:bg-[#2d6b5f]"
                      onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                    >
                      Get Quote
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Special Offer Banner */}
            <div className="bg-gradient-to-r from-red-600 to-red-700 text-white p-8 rounded-xl shadow-lg text-center">
              <div className="flex items-center justify-center mb-4">
                <Sparkles className="w-8 h-8 mr-3" />
                <h3 className="text-2xl font-bold">Special Limited Time Offer!</h3>
                <Sparkles className="w-8 h-8 ml-3" />
              </div>
              <p className="text-xl mb-6">Get 30% OFF all cleaning services - Save hundreds on your cleaning!</p>
              <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                <div className="bg-white/20 px-4 py-2 rounded-lg">
                  <span className="text-sm">All prices shown are already discounted!</span>
                </div>
                <Button
                  className="bg-white text-red-600 hover:bg-gray-100 font-bold px-8 py-3"
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Book Now & Save!
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-20 bg-white relative overflow-hidden animate-in" aria-labelledby="how-it-works-heading">
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <h2 id="how-it-works-heading" className="text-4xl md:text-5xl font-bold mb-4 text-[#0A5189]">
                How It Works
              </h2>
              <div className="w-24 h-1 bg-[#3D8B7D] mx-auto mb-6"></div>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
                Three simple steps to a cleaner home in Fargo
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <article className="text-center p-8 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow duration-300">
                <div className="w-20 h-20 bg-[#0A5189] rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                  1
                </div>
                <div className="w-16 h-16 bg-[#0A5189]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-[#0A5189]" />
                </div>
                <h3 className="text-xl font-bold text-[#0A5189] mb-4">Contact Us</h3>
                <p className="text-gray-600">
                  Call, text, or WhatsApp us to discuss your cleaning needs and get a free quote
                </p>
              </article>

              <article className="text-center p-8 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow duration-300">
                <div className="w-20 h-20 bg-[#0A5189] rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                  2
                </div>
                <div className="w-16 h-16 bg-[#0A5189]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-[#0A5189]" />
                </div>
                <h3 className="text-xl font-bold text-[#0A5189] mb-4">Schedule Service</h3>
                <p className="text-gray-600">
                  Book a convenient time for our professional cleaners to visit your location
                </p>
              </article>

              <article className="text-center p-8 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow duration-300">
                <div className="w-20 h-20 bg-[#0A5189] rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                  3
                </div>
                <div className="w-16 h-16 bg-[#0A5189]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Home className="w-8 h-8 text-[#0A5189]" />
                </div>
                <h3 className="text-xl font-bold text-[#0A5189] mb-4">Enjoy Clean Results</h3>
                <p className="text-gray-600">
                  Relax while we transform your carpets, upholstery, or car interior with professional deep cleaning
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 bg-gray-50 relative animate-in" aria-labelledby="why-choose-heading">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 id="why-choose-heading" className="text-4xl md:text-5xl font-bold mb-4 text-[#0A5189]">
                Why Choose EcoClean?
              </h2>
              <div className="w-24 h-1 bg-[#3D8B7D] mx-auto mb-6"></div>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
                Experience the benefits of our professional cleaning services in Fargo
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-[#3D8B7D] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#0A5189] mb-3">Eco-Friendly</h3>
                <p className="text-gray-700">Safe, non-toxic products that protect your family and the environment</p>
              </div>

              <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-[#3D8B7D] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#0A5189] mb-3">Professional Equipment</h3>
                <p className="text-gray-700">State-of-the-art extraction equipment for superior cleaning results</p>
              </div>

              <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-[#3D8B7D] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#0A5189] mb-3">Fast Drying</h3>
                <p className="text-gray-700">Quick-drying process gets you back to normal life faster</p>
              </div>

              <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-[#3D8B7D] rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#0A5189] mb-3">Satisfaction Guarantee</h3>
                <p className="text-gray-700">100% satisfaction guarantee on all our cleaning services</p>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section
          id="about"
          className="py-20 bg-white relative overflow-hidden animate-in"
          aria-labelledby="about-heading"
        >
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Professional cleaning equipment"
                  width={600}
                  height={400}
                  className="object-cover w-full h-full"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              <div>
                <h2 id="about-heading" className="text-4xl font-bold text-[#0A5189] mb-6">
                  About EcoClean
                </h2>
                <div className="w-24 h-1 bg-[#3D8B7D] mb-6"></div>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  We are a professional deep extraction cleaning company specializing in upholstery, car interiors, and
                  carpets. Our goal is to ensure your fabrics and surfaces are cleaned to your absolute satisfaction.
                </p>

                <div className="flex items-center space-x-4 mb-6">
                  <Link href="/about">
                    <Button className="bg-[#3D8B7D] hover:bg-[#2d6b5f] text-white">Read More About Us</Button>
                  </Link>
                  <Button
                    variant="outline"
                    className="border-[#3D8B7D] text-[#3D8B7D] hover:bg-[#3D8B7D] hover:text-white bg-transparent"
                    onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                  >
                    Get A Quote
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-gray-50 relative animate-in" aria-labelledby="testimonials-heading">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 id="testimonials-heading" className="text-4xl md:text-5xl font-bold mb-4 text-[#0A5189]">
                Client Reviews
              </h2>
              <div className="w-24 h-1 bg-[#3D8B7D] mx-auto mb-6"></div>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
                See what our clients are saying about EcoClean's cleaning services
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <article className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-[#0A5189] rounded-full flex items-center justify-center text-white font-bold mr-4">
                    JD
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0A5189]">John Doe</h4>
                    <div className="flex text-yellow-400" aria-label="5 star rating">
                      <span>★</span>
                      <span>★</span>
                      <span>★</span>
                      <span>★</span>
                      <span>★</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-700">
                  "Absolutely thrilled with the results on my sofa and armchairs! They looked worn and dull, but after
                  EcoClean's deep cleaning with their extractor, they look almost new again. Highly recommend!"
                </p>
              </article>

              <article className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-[#0A5189] rounded-full flex items-center justify-center text-white font-bold mr-4">
                    JS
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0A5189]">Jane Smith</h4>
                    <div className="flex text-yellow-400" aria-label="5 star rating">
                      <span>★</span>
                      <span>★</span>
                      <span>★</span>
                      <span>★</span>
                      <span>★</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-700">
                  "EcoClean did an amazing job on my car's interior! My seats and carpets had seen better days, but
                  their wet vacuum cleaning brought them back to life. It's like driving a new car again!"
                </p>
              </article>

              <article className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-[#0A5189] rounded-full flex items-center justify-center text-white font-bold mr-4">
                    RJ
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0A5189]">Robert Johnson</h4>
                    <div className="flex text-yellow-400" aria-label="5 star rating">
                      <span>★</span>
                      <span>★</span>
                      <span>★</span>
                      <span>★</span>
                      <span>★</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-700">
                  "I'm so impressed with the carpet cleaning EcoClean provided. My living room carpet had some tough
                  stains, but their powerful extractor got everything out. Definitely my go-to for carpet cleaning!"
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* Before & After Section */}
        <section className="py-20 bg-white animate-in" aria-labelledby="before-after-heading">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 id="before-after-heading" className="text-4xl md:text-5xl font-bold mb-4 text-[#0A5189]">
                Before & After
              </h2>
              <div className="w-24 h-1 bg-[#3D8B7D] mx-auto mb-6"></div>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
                See the difference our professional cleaning makes
              </p>
            </div>

            <BeforeAfterGallery />
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="py-20 bg-gradient-to-br from-[#0A5189] to-[#3D8B7D] text-white animate-in"
          aria-labelledby="contact-heading"
        >
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 id="contact-heading" className="text-4xl md:text-5xl font-bold mb-4">
                Contact Us Today
              </h2>
              <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
              <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
                Ready to experience professional cleaning? Get in touch with us now!
              </p>
            </div>

            <EnhancedContactForm />
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-gray-50 animate-in" aria-labelledby="faq-heading">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 id="faq-heading" className="text-4xl md:text-5xl font-bold mb-4 text-[#0A5189]">
                Frequently Asked Questions
              </h2>
              <div className="w-24 h-1 bg-[#3D8B7D] mx-auto mb-6"></div>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
                Find answers to common questions about our cleaning services
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <FAQAccordion items={faqItems.slice(0, 4)} />
              <div className="text-center mt-8">
                <Link href="/faq">
                  <Button className="bg-[#3D8B7D] hover:bg-[#2d6b5f] text-white">View All FAQs</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-[#0A5189] text-white py-12 animate-in" role="contentinfo">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-8 h-8 bg-[#3D8B7D] rounded-full flex items-center justify-center">
                    <Droplets className="w-5 h-5 text-white" aria-hidden="true" />
                  </div>
                  <span className="text-xl font-bold">EcoClean</span>
                </div>
                <p className="text-gray-200">
                  Professional eco-friendly cleaning services for your home and office in Fargo.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-4">Company</h4>
                <nav aria-label="Footer navigation">
                  <ul className="space-y-2 text-gray-200">
                    <li>
                      <Link href="/about" className="hover:text-white transition-colors">
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link href="/faq" className="hover:text-white transition-colors">
                        FAQ
                      </Link>
                    </li>
                    <li>
                      <Link href="/privacy-policy" className="hover:text-white transition-colors">
                        Privacy Policy
                      </Link>
                    </li>
                    <li>
                      <Link href="/terms" className="hover:text-white transition-colors">
                        Terms of Service
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-4">Contact</h4>
                <div className="space-y-2 text-gray-200">
                  <p>Phone: +380 97 525 1984</p>
                  <p>Email: harabugaslava@gmail.com</p>
                  <p>Available 7 Days a Week</p>
                  <p>Fargo, ND & Surrounding Areas</p>
                </div>
              </div>
            </div>

            <div className="border-t border-[#3D8B7D] mt-8 pt-8 text-center text-gray-200">
              <p>&copy; 2024 EcoClean. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>

      {/* Custom Styles */}
      <style jsx global>{`
        .get-price-btn {
          background: linear-gradient(135deg, #3D8B7D 0%, #2d6b5f 100%);
          color: white;
          font-weight: 600;
          padding: 12px 24px;
          border-radius: 8px;
          transition: all 0.3s ease;
          border: none;
        }
        
        .get-price-btn:hover {
          background: linear-gradient(135deg, #2d6b5f 0%, #1f4a3f 100%);
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(61, 139, 125, 0.3);
        }
        
        .pulse-animation {
          animation: pulse 2s infinite;
        }
        
        @keyframes pulse {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
          100% {
            transform: scale(1);
          }
        }
        
        .animate-in {
          opacity: 1;
          transform: translateY(0);
          transition: all 0.6s ease;
        }
        
        section {
          opacity: 0;
          transform: translateY(30px);
        }
        
        .text-shadow {
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
        }
      `}</style>
    </>
  )
}
