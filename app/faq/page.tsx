import type { Metadata } from "next"
import Link from "next/link"
import { Droplets, ArrowLeft } from "lucide-react"
import { FAQAccordion } from "@/components/faq-accordion"

export const metadata: Metadata = {
  title: "FAQ - Frequently Asked Questions | EcoClean",
  description: "Find answers to common questions about EcoClean's professional cleaning services in Fargo.",
}

export default function FAQPage() {
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
    {
      question: "What areas do you serve?",
      answer:
        "We currently serve Fargo and surrounding areas including West Fargo, Moorhead, Dilworth, and nearby communities. If you're unsure whether we service your area, please contact us and we'll be happy to confirm.",
    },
    {
      question: "Do you offer same-day service?",
      answer:
        "We strive to accommodate urgent requests when possible. While we typically schedule appointments in advance, we may be able to provide same-day service depending on availability. Contact us as early as possible for the best chance of same-day scheduling.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept cash, check, and all major credit cards. Payment is due upon completion of the service. We do not require any advance payment - you only pay after you're completely satisfied with our work.",
    },
    {
      question: "Do you provide free estimates?",
      answer:
        "Yes, we provide free estimates for all our services. You can request a quote through our online form, by phone, or we can provide an in-person estimate for larger or more complex jobs. Our estimates are detailed and transparent with no hidden fees.",
    },
  ]

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
            <Link href="/about" className="text-[#0A5189] hover:text-[#3D8B7D] font-medium text-lg">
              About
            </Link>
            <Link href="/faq" className="text-[#3D8B7D] font-medium text-lg">
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Frequently Asked Questions</h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Find answers to common questions about our professional cleaning services
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <FAQAccordion items={faqItems} />

            {/* Contact CTA */}
            <div className="mt-16 text-center bg-gray-50 p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-[#0A5189] mb-4">Still Have Questions?</h2>
              <p className="text-gray-700 mb-6">
                Can't find the answer you're looking for? Our friendly team is here to help.
              </p>
              <Link
                href="/#contact"
                className="inline-block bg-[#3D8B7D] hover:bg-[#2d6b5f] text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
