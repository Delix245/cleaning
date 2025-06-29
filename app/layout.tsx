import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "EcoClean - Professional Carpet & Upholstery Cleaning Services in Fargo | #1 House Cleaning",
  description:
    "Professional carpet cleaning, upholstery cleaning, and house cleaning services in Fargo. Eco-friendly cleaning solutions with 30% off all services. Book online in 60 seconds!",
  keywords: [
    "carpet cleaning Fargo",
    "upholstery cleaning",
    "house cleaning services",
    "professional cleaning",
    "furniture cleaning",
    "car interior cleaning",
    "eco-friendly cleaning",
    "steam cleaning",
    "stain removal",
    "mattress cleaning",
    "deep cleaning services",
    "residential cleaning",
    "commercial cleaning",
    "Fargo cleaning",
    "West Fargo cleaning",
    "Moorhead cleaning",
  ],
  authors: [{ name: "EcoClean Professional Cleaning Services" }],
  creator: "EcoClean",
  publisher: "EcoClean",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ecoclean-la.com",
    siteName: "EcoClean Professional Cleaning Services",
    title: "EcoClean - #1 Professional Cleaning Services in Fargo",
    description:
      "Professional carpet cleaning, upholstery cleaning, and house cleaning services in Fargo. Eco-friendly solutions with 30% off. Book online today!",
    images: [
      {
        url: "/images/hero-image.png",
        width: 1200,
        height: 630,
        alt: "Professional cleaning service team in Los Angeles",
        type: "image/png",
      },
      {
        url: "/images/carpet-cleaning.png",
        width: 800,
        height: 600,
        alt: "Professional carpet cleaning service",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@EcoCleanLA",
    creator: "@EcoCleanLA",
    title: "EcoClean - #1 Professional Cleaning Services in Los Angeles",
    description:
      "Professional carpet cleaning, upholstery cleaning, and house cleaning services in Fargo. Eco-friendly solutions with 30% off. Book online today!",
    images: ["/images/hero-image.png"],
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  alternates: {
    canonical: "https://ecoclean-la.com",
    languages: {
      "en-US": "https://ecoclean-la.com",
      "es-US": "https://ecoclean-la.com/es",
    },
  },
  category: "Cleaning Services",
  classification: "Business",
  other: {
    "geo.region": "US-ND",
    "geo.placename": "Fargo",
    "geo.position": "46.8772;-96.7898",
    ICBM: "46.8772, -96.7898",
    "DC.title": "EcoClean Professional Cleaning Services",
    "DC.creator": "EcoClean",
    "DC.subject": "Professional Cleaning Services",
    "DC.description": "Professional carpet cleaning, upholstery cleaning, and house cleaning services in Fargo",
    "DC.publisher": "EcoClean",
    "DC.contributor": "EcoClean Team",
    "DC.date": new Date().toISOString(),
    "DC.type": "Service",
    "DC.format": "text/html",
    "DC.identifier": "https://ecoclean-la.com",
    "DC.language": "en-US",
    "DC.coverage": "Fargo, North Dakota, United States",
    "DC.rights": "Copyright 2024 EcoClean. All rights reserved.",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        {/* Additional SEO Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />
        <meta name="theme-color" content="#0A5189" />
        <meta name="msapplication-TileColor" content="#0A5189" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="EcoClean" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />

        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* DNS Prefetch */}
        <link rel="dns-prefetch" href="https://submit-form.com" />
        <link rel="dns-prefetch" href="https://wa.me" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://ecoclean-la.com/#organization",
                  name: "EcoClean Professional Cleaning Services",
                  url: "https://ecoclean-la.com",
                  logo: {
                    "@type": "ImageObject",
                    url: "https://ecoclean-la.com/images/logo.png",
                    width: 200,
                    height: 200,
                  },
                  contactPoint: {
                    "@type": "ContactPoint",
                    telephone: "+1-555-123-4567",
                    contactType: "customer service",
                    email: "info@ecoclean.com",
                    availableLanguage: ["English", "Spanish"],
                  },
                  address: {
                    "@type": "PostalAddress",
                    addressLocality: "Fargo",
                    addressRegion: "ND",
                    addressCountry: "US",
                  },
                  sameAs: [
                    "https://www.facebook.com/EcoCleanLA",
                    "https://www.instagram.com/EcoCleanLA",
                    "https://twitter.com/EcoCleanLA",
                    "https://www.linkedin.com/company/ecoclean-la",
                  ],
                },
                {
                  "@type": "WebSite",
                  "@id": "https://ecoclean-la.com/#website",
                  url: "https://ecoclean-la.com",
                  name: "EcoClean Professional Cleaning Services",
                  description:
                    "Professional carpet cleaning, upholstery cleaning, and house cleaning services in Fargo",
                  publisher: {
                    "@id": "https://ecoclean-la.com/#organization",
                  },
                  potentialAction: {
                    "@type": "SearchAction",
                    target: "https://ecoclean-la.com/search?q={search_term_string}",
                    "query-input": "required name=search_term_string",
                  },
                },
                {
                  "@type": "LocalBusiness",
                  "@id": "https://ecoclean-la.com/#localbusiness",
                  name: "EcoClean Professional Cleaning Services",
                  image: "https://ecoclean-la.com/images/hero-image.png",
                  telephone: "+1-555-123-4567",
                  email: "info@ecoclean.com",
                  url: "https://ecoclean-la.com",
                  address: {
                    "@type": "PostalAddress",
                    addressLocality: "Fargo",
                    addressRegion: "ND",
                    addressCountry: "US",
                  },
                  geo: {
                    "@type": "GeoCoordinates",
                    latitude: 46.8772,
                    longitude: -96.7898,
                  },
                  openingHoursSpecification: {
                    "@type": "OpeningHoursSpecification",
                    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                    opens: "07:00",
                    closes: "19:00",
                  },
                  priceRange: "$49-$289",
                  servesCuisine: null,
                  acceptsReservations: true,
                  aggregateRating: {
                    "@type": "AggregateRating",
                    ratingValue: "4.9",
                    reviewCount: "127",
                    bestRating: "5",
                    worstRating: "1",
                  },
                },
                {
                  "@type": "Service",
                  "@id": "https://ecoclean-la.com/#service",
                  name: "Professional Cleaning Services",
                  description:
                    "Comprehensive cleaning services including carpet cleaning, upholstery cleaning, house cleaning, and car interior cleaning",
                  provider: {
                    "@id": "https://ecoclean-la.com/#organization",
                  },
                  areaServed: {
                    "@type": "City",
                    name: "Fargo",
                    sameAs: "https://en.wikipedia.org/wiki/Fargo",
                  },
                  hasOfferCatalog: {
                    "@type": "OfferCatalog",
                    name: "Cleaning Services",
                    itemListElement: [
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "Carpet Cleaning",
                          description: "Professional carpet cleaning services for all carpet types",
                        },
                        price: "59",
                        priceCurrency: "USD",
                      },
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "Upholstery Cleaning",
                          description: "Deep cleaning for sofas, chairs, and furniture",
                        },
                        price: "79",
                        priceCurrency: "USD",
                      },
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "House Cleaning",
                          description: "Complete home cleaning packages",
                        },
                        price: "189",
                        priceCurrency: "USD",
                      },
                    ],
                  },
                },
              ],
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
