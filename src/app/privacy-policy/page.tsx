import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | One Golf Club',
  description: 'Our privacy policy outlines how we collect, use, and protect your personal information.',
  keywords: 'privacy policy, data protection, GDPR, personal information, privacy statement',
}

const PrivacyPolicyPage = () => {
  return (
    <div className="min-h-screen py-16 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-8">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
            <p>
              One Golf Club ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy 
              explains how we collect, use, disclose, and safeguard your information when you visit our website 
              or use our services.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">2. Information We Collect</h2>
            <h3 className="text-xl font-semibold mb-3">2.1 Personal Information</h3>
            <p>We may collect personal information that you voluntarily provide to us when you:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Register for membership</li>
              <li>Book golf lessons or services</li>
              <li>Make travel arrangements</li>
              <li>Subscribe to our newsletter</li>
              <li>Contact us for support</li>
            </ul>
            <p>This information may include:</p>
            <ul className="list-disc pl-6">
              <li>Name and contact information</li>
              <li>Payment information</li>
              <li>Golf handicap and preferences</li>
              <li>Travel preferences and requirements</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3">2.2 Automatically Collected Information</h3>
            <p>
              When you visit our website, we automatically collect certain information about your device, 
              including information about your web browser, IP address, time zone, and some of the cookies 
              that are installed on your device.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">3. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc pl-6">
              <li>Provide and maintain our services</li>
              <li>Process your transactions</li>
              <li>Send you marketing and promotional communications</li>
              <li>Improve our website and services</li>
              <li>Respond to your comments and questions</li>
              <li>Protect against fraud and unauthorized transactions</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">4. Information Sharing</h2>
            <p>
              We do not sell or rent your personal information to third parties. We may share your information 
              with:
            </p>
            <ul className="list-disc pl-6">
              <li>Service providers who assist in our operations</li>
              <li>Professional advisors</li>
              <li>Law enforcement when required by law</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">5. Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal information 
              against unauthorized access, alteration, disclosure, or destruction.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">6. Your Rights</h2>
            <p>Under applicable data protection laws, you have the right to:</p>
            <ul className="list-disc pl-6">
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Object to processing of your information</li>
              <li>Data portability</li>
              <li>Withdraw consent</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">7. Cookies</h2>
            <p>
              We use cookies and similar tracking technologies to track activity on our website and hold certain 
              information. You can instruct your browser to refuse all cookies or to indicate when a cookie is 
              being sent.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">8. Children's Privacy</h2>
            <p>
              Our services are not intended for use by children under the age of 16. We do not knowingly collect 
              personal information from children under 16.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">9. Changes to This Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting 
              the new Privacy Policy on this page and updating the "Last updated" date.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">10. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <p className="mt-2">
              Email: privacy@onegolfclub.com<br />
              Address: [Your Business Address]<br />
              Phone: [Your Phone Number]
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}

export default PrivacyPolicyPage 