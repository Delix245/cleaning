import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function PrivacyPolicyPage() {
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
          <h1 className="text-3xl md:text-4xl font-bold">Privacy Policy</h1>
          <p className="text-gray-200 mt-2">Effective Date: May 30, 2025</p>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-700 text-lg leading-relaxed mb-8">
            At our upholstery and carpet cleaning service, we are deeply committed to respecting and protecting the
            privacy of our valued clients. As a provider of professional cleaning services for furniture, carpets,
            mattresses, and vehicle interiors in Fargo, North Dakota; Moorhead, Minnesota; and surrounding areas,
            including West Fargo, ND, and Dilworth, MN, we recognize the importance of safeguarding your personal
            information. This Privacy Policy provides a comprehensive explanation of how we collect, use, store, share,
            and protect your information when you engage with our website, book our services, or interact with us. We
            adhere to all applicable laws, including North Dakota Century Code § 51-30-02 (data privacy), North Dakota
            Century Code § 51-15-02 (consumer protection), and Minnesota Statutes § 325M.02 (internet privacy), to
            ensure transparency, security, and compliance while protecting our legal rights.
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#0A5189] mb-4">1. Information We Collect</h2>
            <p className="text-gray-700 mb-4">
              We collect only the information necessary to deliver exceptional cleaning services and provide a seamless
              client experience, in accordance with North Dakota Century Code § 51-15-02 and Minnesota Statutes §
              325F.69, which mandate clear disclosures to consumers. The types of information we collect are as follows:
            </p>

            <h3 className="text-xl font-semibold text-[#0A5189] mb-3">Personal Information</h3>
            <p className="text-gray-700 mb-3">
              Information you voluntarily provide when booking a service, submitting inquiries, or contacting us,
              including:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
              <li>
                <strong>Name:</strong> To personalize your service experience, such as addressing you by name during
                scheduling or service confirmation.
              </li>
              <li>
                <strong>Address:</strong> To dispatch our cleaning professionals to your home or business, whether in
                Fargo, Moorhead, or nearby communities like Dilworth.
              </li>
              <li>
                <strong>Email Address:</strong> To send booking confirmations, service receipts, or responses to your
                inquiries, such as questions about stain removal techniques.
              </li>
              <li>
                <strong>Phone Number:</strong> To coordinate appointments, confirm arrival times, or discuss specific
                service needs, such as rescheduling.
              </li>
              <li>
                <strong>Payment Information:</strong> Details such as credit or debit card numbers, processed securely
                through trusted third-party payment processors like Stripe or Square. We do not store your complete
                payment information.
              </li>
              <li>
                <strong>Service Preferences:</strong> Optional details you share, such as requesting eco-friendly
                cleaning products or specifying areas needing special attention (e.g., pet stains on upholstery).
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-[#0A5189] mb-3">Non-Personal Information</h3>
            <p className="text-gray-700 mb-3">
              Anonymous data collected automatically to enhance our website and services, including:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
              <li>
                <strong>IP Address:</strong> To determine the general geographic region of website visitors, such as
                North Dakota or Minnesota, for site optimization.
              </li>
              <li>
                <strong>Browser Type and Version:</strong> For example, Chrome, Firefox, or Safari, to ensure
                compatibility and a smooth browsing experience.
              </li>
              <li>
                <strong>Device Type:</strong> Such as a smartphone, tablet, or computer, to tailor our website's display
                and functionality.
              </li>
              <li>
                <strong>Website Usage Data:</strong> Information about which pages you visit (e.g., our carpet cleaning
                service page), how long you stay, and how you navigate, collected anonymously to improve user
                experience.
              </li>
              <li>
                <strong>Referral Sources:</strong> How you discovered our website, such as through a search engine or
                local advertisement, to refine our marketing efforts.
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-[#0A5189] mb-3">Voluntary Feedback</h3>
            <p className="text-gray-700 mb-4">
              Comments or reviews you choose to provide after a service, which we use to improve our offerings and
              client satisfaction.
            </p>

            <p className="text-gray-700">
              We are dedicated to collecting only the minimum information required to serve you effectively, in
              compliance with North Dakota Century Code § 51-30-02 and Minnesota Statutes § 325M.02, which emphasize
              responsible data handling practices.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#0A5189] mb-4">2. How We Use Your Information</h2>
            <p className="text-gray-700 mb-4">
              We use the information we collect to provide high-quality cleaning services, maintain efficient
              operations, and enhance your experience, while ensuring compliance with North Dakota Century Code §
              51-30-02 and Minnesota Statutes § 325M.02. Specifically, we use your information to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-3">
              <li>
                <strong>Facilitate Service Delivery:</strong> Schedule and perform cleaning services, such as
                deep-cleaning carpets in a Fargo home or restoring vehicle interiors in Moorhead, using your contact and
                address details to coordinate logistics.
              </li>
              <li>
                <strong>Process Payments Securely:</strong> Handle transactions through trusted third-party processors,
                ensuring your payment information is protected. For example, we process your credit card payment for a
                mattress cleaning service without storing sensitive data.
              </li>
              <li>
                <strong>Communicate Effectively:</strong> Keep you informed about your service, including:
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>
                    Sending booking confirmations, such as an email stating, "Your upholstery cleaning is scheduled for
                    June 5 at 10:00 AM."
                  </li>
                  <li>
                    Providing appointment reminders via email, text message, or phone call to ensure a smooth
                    experience.
                  </li>
                  <li>
                    Responding promptly to your inquiries, such as questions about our cleaning products or availability
                    in West Fargo.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Improve Our Services:</strong> Analyze anonymized data, such as website traffic patterns, to
                enhance our website's functionality and service offerings. For instance, if many clients visit our
                vehicle cleaning page, we may add more details to it.
              </li>
              <li>
                <strong>Offer Promotions:</strong> With your explicit consent, send promotional offers, such as a
                discount on your next cleaning service. You may opt out at any time by clicking "unsubscribe" in our
                emails or contacting us directly.
              </li>
              <li>
                <strong>Meet Legal and Regulatory Obligations:</strong> Comply with applicable laws, including:
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>
                    Maintaining payment records for tax reporting purposes, as required by North Dakota Century Code §
                    57-39.2-14, which mandates retention of financial records.
                  </li>
                  <li>
                    Responding to lawful requests, such as subpoenas or court orders, in accordance with North Dakota
                    Century Code § 51-30-02 and Minnesota Statutes § 325M.02.
                  </li>
                </ul>
              </li>
            </ul>
            <p className="text-gray-700 mt-4">
              We use your information solely for these purposes and do not engage in activities unrelated to our
              services without your clear permission, safeguarding both your trust and our business interests.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#0A5189] mb-4">3. Cookies</h2>
            <p className="text-gray-700 mb-4">
              Our website employs cookies and similar technologies to enhance your browsing experience and gather
              insights about site usage, as disclosed in compliance with North Dakota Century Code § 51-30-02 and
              Minnesota Statutes § 325M.02. Cookies are small data files stored on your device that allow us to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
              <li>
                <strong>Improve Functionality:</strong> Retain your preferences, such as pre-filling your contact
                details in a booking form for convenience.
              </li>
              <li>
                <strong>Analyze Site Performance:</strong> Understand which pages are most visited, such as our mattress
                cleaning service page, to optimize content and navigation.
              </li>
              <li>
                <strong>Personalize Content:</strong> Where applicable, display tailored promotions, such as special
                offers for clients in Dilworth.
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-[#0A5189] mb-3">You have full control over cookies:</h3>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
              <li>
                <strong>Manage Preferences:</strong> Adjust your browser settings to accept, block, or delete cookies.
                For example, in Chrome, navigate to Settings &gt; Privacy and Security &gt; Cookies and Other Site Data.
              </li>
              <li>
                <strong>Impact of Disabling Cookies:</strong> Blocking cookies may limit certain website features, such
                as form auto-completion, but you can still book services by contacting us directly via phone or email.
              </li>
              <li>
                <strong>Analytics Tools:</strong> We may use third-party analytics services, such as Google Analytics,
                which collect anonymized data (e.g., page views) without identifying you personally.
              </li>
            </ul>
            <p className="text-gray-700">
              For additional information about cookies or to discuss your preferences, please contact us (Section 9). We
              are committed to transparent cookie practices that respect your choices.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#0A5189] mb-4">4. Data Security</h2>
            <p className="text-gray-700 mb-4">
              We implement robust security measures to protect your personal information from unauthorized access,
              alteration, disclosure, or destruction, as required by North Dakota Century Code § 51-30-02 and Minnesota
              Statutes § 325M.02. These measures include:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
              <li>
                <strong>Encrypted Data Transmission:</strong> Using HTTPS protocols to secure all data exchanged through
                our website, such as booking forms or payment details, ensuring it remains confidential during transit.
              </li>
              <li>
                <strong>Restricted Access:</strong> Limiting access to your information to only those employees who
                require it to perform their duties, with all systems protected by strong passwords and authentication
                protocols.
              </li>
              <li>
                <strong>Trusted Third-Party Providers:</strong> Partnering with reputable service providers, such as
                Stripe for payment processing and Calendly for scheduling, who adhere to industry-standard security
                practices, including Payment Card Industry Data Security Standards (PCI DSS).
              </li>
              <li>
                <strong>Ongoing Security Assessments:</strong> Regularly evaluating our systems and processes to
                identify and mitigate potential vulnerabilities, maintaining a high standard of data protection.
              </li>
            </ul>
            <p className="text-gray-700">
              While we take every reasonable precaution to secure your information, no method of data transmission or
              storage over the internet is entirely infallible. In the unlikely event of a data breach, we will promptly
              notify affected clients, typically within 72 hours, and provide guidance on protective measures, as
              mandated by North Dakota Century Code § 51-30-04 and Minnesota Statutes § 325E.61. This commitment ensures
              both your safety and our accountability.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#0A5189] mb-4">5. Sharing Your Information</h2>
            <p className="text-gray-700 mb-4">
              We do not sell, rent, or trade your personal information to third parties for marketing or other unrelated
              purposes, respecting your privacy and our obligations under North Dakota Century Code § 51-30-02 and
              Minnesota Statutes § 325M.02. We may share your information only in the following limited circumstances:
            </p>

            <h3 className="text-xl font-semibold text-[#0A5189] mb-3">Service Providers</h3>
            <p className="text-gray-700 mb-3">
              With trusted third-party partners who assist us in delivering our services, including:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
              <li>
                <strong>Payment Processors:</strong> Such as Stripe or Square, to securely process your payment for a
                cleaning service, using only the necessary data (e.g., card details).
              </li>
              <li>
                <strong>Scheduling Platforms:</strong> Such as Calendly, to manage your appointment details, such as
                your name and preferred time.
              </li>
              <li>
                <strong>Analytics Services:</strong> Such as Google Analytics, to collect anonymized data about website
                usage, without identifying you individually.
              </li>
            </ul>
            <p className="text-gray-700 mb-4">
              These providers are contractually bound to maintain the confidentiality and security of your information
              and to use it solely for the purposes we specify.
            </p>

            <h3 className="text-xl font-semibold text-[#0A5189] mb-3">Legal and Regulatory Compliance</h3>
            <p className="text-gray-700 mb-3">When required by law, such as:</p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
              <li>
                Responding to valid legal requests, including subpoenas, court orders, or government investigations, as
                stipulated by North Dakota Century Code § 51-30-02 and Minnesota Statutes § 325M.02.
              </li>
              <li>
                Retaining financial records for tax compliance, as mandated by North Dakota Century Code § 57-39.2-14.
              </li>
              <li>
                Addressing consumer protection inquiries, per North Dakota Century Code § 51-15-02 and Minnesota
                Statutes § 325F.69.
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-[#0A5189] mb-3">Business Transitions</h3>
            <p className="text-gray-700 mb-4">
              In the event of a merger, acquisition, or sale of our business, your information may be transferred to the
              new entity, which will be required to adhere to this Privacy Policy.
            </p>

            <h3 className="text-xl font-semibold text-[#0A5189] mb-3">With Your Consent</h3>
            <p className="text-gray-700 mb-4">
              For any other purpose, such as including your feedback in promotional materials, we will obtain your
              explicit permission beforehand.
            </p>

            <p className="text-gray-700">
              We ensure that all data sharing is conducted with the utmost care, protecting your rights while
              maintaining our ability to operate effectively and comply with legal obligations.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#0A5189] mb-4">6. Your Rights</h2>
            <p className="text-gray-700 mb-4">
              As a valued client, you have specific rights regarding your personal information, as guaranteed by North
              Dakota Century Code § 51-30-02 and Minnesota Statutes § 325M.02. These rights include:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
              <li>
                <strong>Right to Access:</strong> Request a copy of the personal information we hold about you, such as
                your booking history or contact details.
              </li>
              <li>
                <strong>Right to Correction:</strong> Request updates to any inaccurate or incomplete information, such
                as correcting a misspelled name or outdated address.
              </li>
              <li>
                <strong>Right to Deletion:</strong> Request the deletion of your personal information, subject to
                certain legal obligations. For example, we are required to retain payment records for seven years for
                tax purposes, as mandated by North Dakota Century Code § 57-39.2-14.
              </li>
              <li>
                <strong>Right to Opt-Out:</strong> Choose to stop receiving promotional communications, such as
                marketing emails or text messages, by clicking the "unsubscribe" link in our messages or contacting us
                directly.
              </li>
              <li>
                <strong>Right to Restrict Processing:</strong> In certain cases, request that we limit how we use your
                information, though this may impact our ability to provide services (e.g., we require your address to
                perform a cleaning).
              </li>
            </ul>
            <p className="text-gray-700">
              To exercise any of these rights, please contact us using the details provided in Section 9. We will
              respond to your request within 30 days, at no cost, unless the request is unusually complex or repetitive,
              in which case we will inform you of any applicable conditions. If we are unable to fulfill your request
              due to legal requirements, we will provide a clear explanation, ensuring transparency and respect for your
              rights.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#0A5189] mb-4">7. Third-Party Links</h2>
            <p className="text-gray-700">
              Our website may include links to third-party websites, such as those of our payment processors (e.g.,
              Stripe) or social media platforms. We are not responsible for the privacy practices or content of these
              external sites, which are governed by their own policies. We encourage you to review the privacy policies
              of any third-party websites you visit to understand how they collect, use, and protect your information,
              as recommended by North Dakota Century Code § 51-15-02 and Minnesota Statutes § 325F.69 for consumer
              awareness.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#0A5189] mb-4">8. Changes to This Privacy Policy</h2>
            <p className="text-gray-700">
              We may periodically update this Privacy Policy to reflect changes in our practices, technological
              advancements, or legal requirements. Any updates will be published on our website with a revised
              "Effective Date" to clearly indicate when changes take effect. In the case of significant changes that
              materially affect your rights, such as alterations to our data-sharing practices, we will notify clients
              with active bookings via email or phone, ensuring compliance with North Dakota Century Code § 51-15-02 and
              Minnesota Statutes § 325F.69. We encourage you to review this page regularly to stay informed about how we
              protect your privacy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#0A5189] mb-4">9. Contact Us</h2>
            <p className="text-gray-700 mb-4">
              We are here to address any questions, concerns, or requests regarding this Privacy Policy or your personal
              information. Please feel free to reach out to us at:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg mb-4">
              <ul className="text-gray-700 space-y-2">
                <li>
                  <strong>Email:</strong> info@ecoclean.com
                </li>
                <li>
                  <strong>Phone:</strong> (555) 123-4567
                </li>
                <li>
                  <strong>Mailing Address:</strong> Fargo, ND
                </li>
              </ul>
            </div>
            <p className="text-gray-700">
              We strive to respond to all inquiries within 24 hours, and we will process requests related to your rights
              (e.g., access or deletion) within 30 days, as required by law. Your trust is paramount to us, and we are
              dedicated to maintaining an open and respectful dialogue.
            </p>
          </section>

          <div className="bg-[#0A5189]/5 p-6 rounded-lg mt-8">
            <p className="text-gray-700 text-lg font-medium">
              By engaging with our website or booking our services, you acknowledge that you have read and agree to this
              Privacy Policy. We sincerely thank you for choosing our upholstery and carpet cleaning services. Our
              commitment is to deliver outstanding cleaning results while safeguarding your personal information with
              the highest standards of care in Fargo, Moorhead, and surrounding communities.
            </p>
          </div>
        </div>

        {/* FAQ Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#0A5189] mb-6">Frequently Asked Questions</h2>
          <div className="bg-gray-50 p-6 rounded-lg mb-6">
            <p className="text-gray-700 text-lg leading-relaxed">
              Welcome to our upholstery and carpet cleaning service, where we transform your home, office, or vehicle
              with a spotless, fresh feel you'll love. We know choosing a cleaning service comes with questions, so
              we've put ourselves in your shoes to answer the ones that matter most. From tackling stubborn stains to
              fitting into your busy life, we're here to make the process clear and stress-free. If you're wondering
              about something else, give us a call at (701) 970-7774 or email — we're excited to help!
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-[#0A5189]">
              <h3 className="text-xl font-bold text-[#0A5189] mb-3">
                1. My cat keeps leaving stains on the couch. Can you make it look new again?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                We get it — pets are family, but their messes can be a headache! Whether it's cat urine on your favorite
                sofa or muddy paw prints on the recliner, our team uses pet-safe, enzyme-based cleaners to break down
                stains and odors at the molecular level. Picture this: your couch, looking vibrant and smelling fresh,
                like the day you bought it. We'll assess the damage on-site and use hot water extraction to lift even
                deep-set marks. If a stain's been there for years, we'll be honest about what's possible and work magic
                where we can. Not thrilled with the results? Let us know within 48 hours, and we'll re-treat the area
                for free, as long as it's not permanent. Tell us about your pet's antics when you book, and we'll bring
                the right tools to make your furniture purr-fect.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-[#3D8B7D]">
              <h3 className="text-xl font-bold text-[#0A5189] mb-3">
                2. I'm nervous about strangers in my home. How do I know I can trust your team?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Inviting someone into your space is a big deal, and we take that trust seriously. Our technicians aren't
                just skilled — they're vetted with thorough background checks and trained to treat your home like their
                own. Imagine us cleaning your living room carpets: we'll follow your instructions (like using a garage
                code), keep your pets safe, and lock up tight when we're done. We've had clients leave us notes saying
                they didn't even know we were there — except for the sparkling results! Share any worries, like a tricky
                alarm system, when you book, and we'll put your mind at ease. Your home's safety is our promise.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-[#0A5189]">
              <h3 className="text-xl font-bold text-[#0A5189] mb-3">
                3. I'm swamped with work and kids. How do you make scheduling easy?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Life's hectic, and we're here to fit into your schedule, not add stress. Whether you're juggling Zoom
                calls or soccer practice, we offer flexible booking options. Pop onto our website to pick a time slot in
                seconds, call us at (701) 970-7774 for a quick chat, or email if you're up late. Need us to clean your
                carpets while you're at work? No problem — just tell us how to get in. We can even text you 30 minutes
                before we arrive, so you're never caught off guard. If plans change, reschedule with 24 hours' notice at
                no cost; closer than that, we charge a partial fee to cover the slot. Let us know your craziest week,
                and we'll find a way to make your home shine without skipping a beat.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-[#3D8B7D]">
              <h3 className="text-xl font-bold text-[#0A5189] mb-3">
                4. Will cleaning my mattress actually help me sleep better, or is it just hype?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                It's not hype — a clean mattress can be a game-changer for your sleep. Think about it: your bed traps
                sweat, dead skin, and dust mites that can make you toss and turn, especially if you've got allergies.
                Our process is like a spa day for your mattress. We vacuum away debris, treat stains (like that
                accidental coffee spill), and use hot water extraction to sanitize deep down. One client told us their
                snoring husband slept quieter after we refreshed their 8-year-old mattress — no kidding! It takes about
                30 minutes, and you'll need a few hours to let it air dry before making the bed. Clean every 6–12
                months, and you'll wake up feeling like you're on a cloud. Curious if your mattress needs it? Describe
                its condition when you book, and we'll advise.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-[#0A5189]">
              <h3 className="text-xl font-bold text-[#0A5189] mb-3">
                5. My car's interior is a mess from kids and pets. What can you do for it?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                If your car's seats are a battlefield of juice stains, Goldfish crumbs, and dog hair, we've got you
                covered. We turn your vehicle into a clean, cozy ride you'll be proud to drive. We start by vacuuming
                every nook, then shampoo fabric seats or condition leather ones, tackling messes like sticky candy or
                pet slobber. A deodorizing treatment leaves it smelling fresh, not like a locker room. The whole job
                takes 1–2 hours, depending on how wild things got. You can drive right after, but crack a window for a
                bit to let it dry. We can clean at your home or office — just pick a spot when you book. Want your
                minivan kid-ready again? Let us know what we're up against, and we'll make it sparkle.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-[#3D8B7D]">
              <h3 className="text-xl font-bold text-[#0A5189] mb-3">
                6. I've got asthma. Are your cleaning products safe and effective for my home?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Living with asthma means you need a home that's as clean as it is safe, and we're all about that. Our
                eco-friendly products are low-VOC, meaning they won't leave harsh fumes that irritate your lungs. We
                also offer hypoallergenic cleaners for extra-sensitive households — just ask when booking. Our hot water
                extraction pulls out asthma triggers like dust mites, pet dander, and pollen from your carpets and
                furniture, leaving your air fresher. For example, a client with asthma said their breathing improved
                after we cleaned their bedroom rugs. We'll ventilate your space to avoid dampness, which can be an issue
                in humid seasons. Tell us about your asthma or allergies, and we'll customize our approach to keep your
                home a safe haven.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-[#0A5189]">
              <h3 className="text-xl font-bold text-[#0A5189] mb-3">
                7. I own a small café. Can you clean my upholstery without closing for the day?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Running a business like a café means every minute counts, and we're pros at working around your
                schedule. We can clean your upholstered chairs or waiting area fabrics after closing, early mornings, or
                even on your quietest day to keep customers flowing. Imagine your café's seating looking inviting and
                stain-free without missing a single latte order. We use quick-drying methods, so your space is ready by
                opening time, usually within 1–2 hours for a small setup. Our team is discreet, keeping your business
                vibe intact. When you contact us at (701) 970-7774 or email, share your hours, and we'll craft a plan
                that keeps your doors open and your seats spotless.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-[#3D8B7D]">
              <h3 className="text-xl font-bold text-[#0A5189] mb-3">
                8. What if a stain doesn't come out? Do you guarantee your work?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                We're stain-fighting experts, but we're also honest — most stains vanish under our care, but some (like
                decade-old ink) might be too stubborn. Whether it's red wine on your carpet or grease on your car seat,
                we'll pre-treat, deep-clean, and give it our all. During the job, we'll show you the stain's progress
                and explain if it's likely permanent. Our satisfaction guarantee means if you're not happy, call us
                within 48 hours, and we'll re-clean the area for free if it's fixable. One client thought their sofa was
                a lost cause after a juice spill, but we got it looking brand-new. If we can't fully resolve it, we'll
                discuss options like a discount. Book with confidence, knowing we've got your back.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-[#0A5189]">
              <h3 className="text-xl font-bold text-[#0A5189] mb-3">
                9. I live in Minnesota, but you're based in North Dakota. Does that change anything?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                No worries at all — we work to serve both sides of the river, so whether you're in Minnesota or North
                Dakota, you get the same top-tier service. Our team crosses state lines daily, cleaning homes and
                businesses with the same care and standards. We handle all the logistics, like complying with both
                states' consumer laws (North Dakota Century Code § 51-15-02, Minnesota Statutes § 325F.69), so you don't
                have to think about it. Whether we're refreshing your carpets or your car's interior, the process,
                quality, and attention to detail stay consistent. Just tell us where you are when you book via (701)
                970-7774 or email, and we'll take care of the rest.
              </p>
            </div>
          </div>

          <div className="bg-[#0A5189]/5 p-6 rounded-lg mt-8 text-center">
            <p className="text-lg font-medium text-[#0A5189]">
              Ready to make your space shine? Reach out at (701) 970-7774 or email, and let's create a cleaner, fresher
              space you'll love!
            </p>
          </div>
        </section>

        {/* About Us Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#0A5189] mb-6">About Us</h2>

          <div className="space-y-6">
            <p className="text-gray-700 text-lg leading-relaxed">
              Ever walk into your living room, see a juice stain on the couch from the kids, and wish you could hit a
              reset button? Or climb into your car, wincing at the dog hair and snack crumbs piled up on the seats? We
              get it — life's messy, and that's where we come in. At our upholstery and carpet cleaning service, we're
              all about turning your home, office, or vehicle into a clean, fresh space you love, without the stress.
            </p>

            <p className="text-gray-700 text-lg leading-relaxed">
              We're a team of cleaning experts who live for making things spotless. Got a sofa that's seen too many
              pizza nights? We'll deep-clean it until it's cozy again. Office carpets looking dull? We'll bring back
              their shine. Mattresses feeling musty? We'll refresh them for better sleep. Even your car's interior —
              from sticky seats to smelly floor mats — gets our full attention. We use powerful techniques, like hot
              water extraction, and eco-friendly products that zap dirt but are safe for your kids, pets, and home. No
              harsh chemicals, just results you can see and feel.
            </p>

            <p className="text-gray-700 text-lg leading-relaxed">
              Why do we care so much? Because we're not just cleaners — we're people like you. We've dealt with cat
              scratches on furniture, spilled coffee in the car, and rugs that looked like a toddler art project. We
              know a clean space makes life better — it's where you relax, work, or hit the road with confidence. Our
              clients tell us how our work changes things: one mom said her living room felt "like home again" after we
              tackled her pet-stained carpet. A business owner noticed customers lingering longer in their freshly
              cleaned waiting area. Those moments are why we show up every day.
            </p>

            <p className="text-gray-700 text-lg leading-relaxed">
              We're proud to help our community, serving homes and businesses across the Red River. Our team is trained
              to deliver top-notch results, and we bring the best tools to every job. If something's not quite right,
              just let us know, and we'll fix it, no fuss. That's our promise, because your happiness is what keeps us
              going.
            </p>

            <p className="text-gray-700 text-lg leading-relaxed">
              What makes us stand out? We get your life. We know you're juggling a million things — work, family, maybe
              a furry friend or two. That's why we make cleaning easy, working around your schedule and listening to
              what you need. Whether it's a quick chair refresh for a busy parent or a full office overhaul for a shop
              owner, we're there with a smile, ready to make your space shine.
            </p>

            <div className="bg-gradient-to-r from-[#0A5189] to-[#3D8B7D] p-6 rounded-lg text-white text-center">
              <p className="text-lg font-medium">
                Want a home, office, or car that feels fresh and inviting? Call us at (701) 970-7774 or email. Let's
                clear away the mess and bring back the comfort you deserve — because a clean space is a happy place, and
                we're here to make it yours.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
