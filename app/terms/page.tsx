import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-[#0A5189] text-white py-6">
        <div className="container mx-auto px-4">
          <Link
            href="/"
            className="inline-flex items-center text-white hover:text-gray-200 transition-colors duration-300 mb-4"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold">Terms of Service</h1>
          <p className="text-gray-200 mt-2">Effective Date: June 1, 2025</p>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-700 text-lg leading-relaxed mb-8">
            Welcome to our upholstery and carpet cleaning service! We're thrilled to serve you in Fargo, North Dakota;
            Moorhead, Minnesota; and nearby areas like West Fargo, ND, and Dilworth, MN. By booking our services or
            visiting our website, you agree to these Terms of Service ("Terms"). These Terms comply with North Dakota
            and Minnesota laws to ensure a fair and transparent experience. We're committed to delivering quality
            cleaning while valuing your trust.
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#0A5189] mb-4">1. Services Provided</h2>
            <p className="text-gray-700 mb-4">
              We provide professional cleaning for upholstery, carpets, mattresses, vehicle interiors, and other
              surfaces in homes and businesses.
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
              <li>
                Services include stain removal, odor elimination, and deep cleaning using industry-standard equipment.
              </li>
              <li>All cleaning is done at your location; we do not transport items.</li>
              <li>Pricing and details are confirmed at booking based on your provided information.</li>
              <li>
                We may decline service if an item's condition risks the health or safety of our staff or equipment, per
                North Dakota Century Code § 51-15-02 and Minnesota Statutes § 325F.69.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#0A5189] mb-4">2. Eligibility</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>You must be 18 or older to book our services. By booking, you confirm you meet this requirement.</li>
              <li>
                Services are available in Fargo, ND; Moorhead, MN; West Fargo, ND; Dilworth, MN; and our service area at
                booking.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#0A5189] mb-4">3. Payment Terms</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>
                Payment is due upon service completion unless agreed otherwise in writing. We accept cash, credit/debit
                cards, or approved digital payments.
              </li>
              <li>A deposit may be required for some services, which we'll confirm at booking.</li>
              <li>
                If payment is delayed beyond 7 days, a $15 late fee may apply to cover administrative costs, per North
                Dakota Century Code § 51-15-02 and Minnesota Statutes § 325F.69. Please contact us if you need payment
                flexibility.
              </li>
              <li>
                Cancellations made at least 24 hours before the service may receive a refund, less a $10 administrative
                fee. No refunds for cancellations within 24 hours, as outlined in Section 7.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#0A5189] mb-4">4. Client Responsibilities</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Please provide access to cleaning areas and secure valuable or fragile items before we arrive.</li>
              <li>
                Inform us of any pre-existing damage, stains, or conditions (e.g., worn fabrics, pet stains) that may
                affect cleaning.
              </li>
              <li>
                Ensure a safe work environment with access to electricity and water, and secure pets for everyone's
                safety.
              </li>
              <li>
                Notify us of hazardous materials or conditions that could risk our staff or equipment, per North Dakota
                Century Code § 65-01-02 and Minnesota Statutes § 182.653.
              </li>
              <li>
                If these responsibilities aren't met, we may cancel the service without a refund, at our discretion.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#0A5189] mb-4">5. Liability</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>
                We're not responsible for pre-existing damage, wear, or conditions (e.g., fading, seam issues) to items
                cleaned.
              </li>
              <li>
                We're not liable for damage from normal wear, improper maintenance, or undisclosed conditions, per North
                Dakota Century Code § 51-07-01 and Minnesota Statutes § 325G.17.
              </li>
              <li>
                We're not responsible for personal items left in the cleaning area unless damaged by our clear
                negligence.
              </li>
              <li>Report any damage claims within 48 hours with photos and details for quick review.</li>
              <li>
                Our liability is limited to the service fee paid, per North Dakota Century Code § 51-15-02 and Minnesota
                Statutes § 325F.57.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#0A5189] mb-4">6. Service Guarantees and Limitations</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>
                We aim for top-quality cleaning but can't guarantee removal of all stains or odors (e.g., ink, pet
                urine), depending on item condition.
              </li>
              <li>We'll provide an honest assessment of results at booking.</li>
              <li>
                If you're not satisfied, contact us within 48 hours, and we'll try to resolve it, possibly with a free
                re-clean, at our discretion, per North Dakota Century Code § 51-15-02 and Minnesota Statutes § 325F.69.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#0A5189] mb-4">7. Cancellation and Rescheduling</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Please request cancellations or rescheduling at least 24 hours before your service.</li>
              <li>
                Cancellations within 24 hours may incur a $15 fee to cover scheduling costs, per North Dakota Century
                Code § 51-07-01 and Minnesota Statutes § 325G.17. Contact us to discuss options.
              </li>
              <li>
                We may cancel or reschedule due to unforeseen issues (e.g., weather, equipment failure), notifying you
                promptly with a refund or rescheduling choice.
              </li>
              <li>
                These policies apply to all service areas, including West Fargo, ND, and Dilworth, MN, with any travel
                fees disclosed upfront.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#0A5189] mb-4">8. Client Conduct</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Please avoid false or harmful statements about our business.</li>
              <li>
                Abusive or threatening behavior toward our team may lead to service termination without a refund, per
                North Dakota Century Code § 12.1-17-07 and Minnesota Statutes § 609.749.
              </li>
              <li>Do not interfere with our staff or equipment during service.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#0A5189] mb-4">9. Privacy</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>
                We collect personal information (e.g., name, address, contact details) only for booking, service, and
                billing purposes.
              </li>
              <li>
                Your information is not shared with third parties except as required by law or with your consent, per
                North Dakota Century Code § 51-30-02 and Minnesota Statutes § 325M.02.
              </li>
              <li>Our Privacy Policy, available on our website, explains how we protect your data.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#0A5189] mb-4">10. Force Majeure</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>
                We're not liable for service disruptions due to events beyond our control (e.g., storms, power outages),
                per North Dakota Century Code § 9-07-02 and Minnesota Statutes § 336.2-615.
              </li>
              <li>We'll work with you to reschedule or refund, at our discretion.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#0A5189] mb-4">11. Changes to Terms</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>
                We may update these Terms, posting changes on our website. Continued use means you accept the updates.
              </li>
              <li>
                We'll notify active clients of major changes via email or phone, per North Dakota Century Code §
                51-15-02 and Minnesota Statutes § 325F.69.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#0A5189] mb-4">12. Governing Law</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>
                These Terms are governed by North Dakota law, with Minnesota law applying where required for services in
                Moorhead or Dilworth.
              </li>
              <li>
                Disputes will be resolved in Cass County, ND, courts, unless Minnesota jurisdiction applies, per North
                Dakota Century Code § 28-04-01 and Minnesota Statutes § 542.09.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#0A5189] mb-4">13. Dispute Resolution</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Please contact us first to resolve issues.</li>
              <li>
                Unresolved disputes may go to small claims court or other venues, per Section 12, aligning with North
                Dakota Century Code § 51-15-02 and Minnesota Statutes § 325F.69.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#0A5189] mb-4">14. Contact Information</h2>
            <p className="text-gray-700 mb-4">For questions or concerns, reach us at:</p>
            <div className="bg-gray-50 p-6 rounded-lg mb-4">
              <ul className="text-gray-700 space-y-2">
                <li>
                  <strong>Email:</strong> info@ecoclean.com
                </li>
                <li>
                  <strong>Phone:</strong> (555) 123-4567
                </li>
                <li>
                  <strong>Address:</strong> Fargo, ND
                </li>
              </ul>
            </div>
          </section>

          <div className="bg-[#0A5189]/5 p-6 rounded-lg mt-8">
            <p className="text-gray-700 text-lg font-medium">
              By booking our services, you confirm you've read and agree to these Terms. We're dedicated to providing
              excellent cleaning and a great experience. Thank you for choosing us!
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}
