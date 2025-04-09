import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms & Conditions | One Golf Club',
  description: 'Our terms and conditions outline the rules and regulations for using our services.',
  keywords: 'terms and conditions, terms of service, legal terms, user agreement, service terms',
}

const TermsPage = () => {
  return (
    <div className="min-h-screen py-16 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Terms & Conditions</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-8">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">1. Agreement to Terms</h2>
            <p>
              By accessing and using One Golf Club's website and services, you agree to be bound by these Terms 
              and Conditions. If you disagree with any part of these terms, you may not access our services.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">2. Membership</h2>
            <h3 className="text-xl font-semibold mb-3">2.1 Membership Eligibility</h3>
            <p>
              To become a member of One Golf Club, you must:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Be at least 18 years of age</li>
              <li>Complete the membership application process</li>
              <li>Pay the required membership fees</li>
              <li>Agree to these terms and conditions</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3">2.2 Membership Benefits</h3>
            <p>
              Membership benefits include access to:
            </p>
            <ul className="list-disc pl-6">
              <li>Partner golf courses</li>
              <li>Special rates on services</li>
              <li>Exclusive events and tournaments</li>
              <li>Travel arrangements and bookings</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">3. Booking and Cancellation</h2>
            <h3 className="text-xl font-semibold mb-3">3.1 Booking Policy</h3>
            <p>
              All bookings are subject to availability and must be made through our official channels. 
              Bookings are confirmed only after full payment is received.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">3.2 Cancellation Policy</h3>
            <p>
              Cancellations must be made according to the following terms:
            </p>
            <ul className="list-disc pl-6">
              <li>More than 30 days before: Full refund</li>
              <li>14-30 days before: 50% refund</li>
              <li>Less than 14 days before: No refund</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">4. Payment Terms</h2>
            <p>
              All payments must be made in full before services are provided. We accept various payment methods 
              including credit cards and bank transfers. Prices are subject to change without notice.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">5. User Conduct</h2>
            <p>
              Users agree to:
            </p>
            <ul className="list-disc pl-6">
              <li>Provide accurate information</li>
              <li>Maintain the confidentiality of account credentials</li>
              <li>Use services in compliance with applicable laws</li>
              <li>Respect the rights of other users</li>
              <li>Not engage in any fraudulent or harmful activities</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">6. Intellectual Property</h2>
            <p>
              All content on our website, including text, graphics, logos, and software, is the property of 
              One Golf Club and is protected by intellectual property laws.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">7. Limitation of Liability</h2>
            <p>
              One Golf Club shall not be liable for any indirect, incidental, special, consequential, or 
              punitive damages resulting from your use or inability to use our services.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">8. Indemnification</h2>
            <p>
              You agree to indemnify and hold harmless One Golf Club from any claims, damages, or expenses 
              arising from your use of our services or violation of these terms.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">9. Modifications to Terms</h2>
            <p>
              We reserve the right to modify these terms at any time. Changes will be effective immediately 
              upon posting to our website. Your continued use of our services constitutes acceptance of 
              modified terms.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">10. Governing Law</h2>
            <p>
              These terms shall be governed by and construed in accordance with the laws of [Your Jurisdiction], 
              without regard to its conflict of law provisions.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">11. Contact Information</h2>
            <p>
              For any questions about these Terms & Conditions, please contact us at:
            </p>
            <p className="mt-2">
              Email: legal@onegolfclub.com<br />
              Address: [Your Business Address]<br />
              Phone: [Your Phone Number]
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}

export default TermsPage 