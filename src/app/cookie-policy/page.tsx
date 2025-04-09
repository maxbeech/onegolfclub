import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cookie Policy | One Golf Club',
  description: 'Our cookie policy explains how we use cookies and similar technologies on our website.',
  keywords: 'cookie policy, cookies, web tracking, privacy, data collection',
}

const CookiePolicyPage = () => {
  return (
    <div className="min-h-screen py-16 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Cookie Policy</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-8">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">1. What Are Cookies</h2>
            <p>
              Cookies are small text files that are placed on your computer or mobile device when you visit 
              our website. They help us make your experience better by remembering your preferences and 
              understanding how you use our site.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">2. How We Use Cookies</h2>
            <p>We use cookies for the following purposes:</p>
            <ul className="list-disc pl-6">
              <li>Essential cookies for website functionality</li>
              <li>Analytics cookies to understand user behavior</li>
              <li>Preference cookies to remember your settings</li>
              <li>Marketing cookies for targeted advertising</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">3. Types of Cookies We Use</h2>
            <h3 className="text-xl font-semibold mb-3">3.1 Essential Cookies</h3>
            <p>
              These cookies are necessary for the website to function properly. They enable basic functions 
              like page navigation and access to secure areas of the website.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">3.2 Analytics Cookies</h3>
            <p>
              We use analytics cookies to understand how visitors interact with our website. This helps us 
              improve our services and user experience.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">3.3 Preference Cookies</h3>
            <p>
              These cookies remember your preferences and settings to enhance your browsing experience.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">3.4 Marketing Cookies</h3>
            <p>
              Marketing cookies are used to track visitors across websites. The intention is to display ads 
              that are relevant and engaging for individual users.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">4. Third-Party Cookies</h2>
            <p>
              Some cookies are placed by third-party services that appear on our pages. We use trusted 
              third-party services for:
            </p>
            <ul className="list-disc pl-6">
              <li>Website analytics (Google Analytics)</li>
              <li>Payment processing</li>
              <li>Social media integration</li>
              <li>Advertising services</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">5. Managing Cookies</h2>
            <p>
              You can control and/or delete cookies as you wish. You can delete all cookies that are already 
              on your computer and you can set most browsers to prevent them from being placed.
            </p>
            <p className="mt-4">
              To modify your cookie preferences:
            </p>
            <ul className="list-disc pl-6">
              <li>Use your browser settings to manage cookies</li>
              <li>Use our cookie consent manager on the website</li>
              <li>Contact us for assistance with cookie management</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">6. Cookie Duration</h2>
            <p>
              Cookies on our site may be either session cookies or persistent cookies:
            </p>
            <ul className="list-disc pl-6">
              <li>Session cookies: Temporary cookies that expire when you close your browser</li>
              <li>Persistent cookies: Remain on your device for a set period or until manually deleted</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">7. Your Choices</h2>
            <p>
              You have the right to:
            </p>
            <ul className="list-disc pl-6">
              <li>Accept or decline cookies</li>
              <li>Delete existing cookies</li>
              <li>Set your browser to notify you when you receive a cookie</li>
              <li>Opt-out of certain types of cookies</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">8. Updates to This Policy</h2>
            <p>
              We may update this Cookie Policy from time to time. Any changes will be posted on this page 
              with an updated revision date.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">9. Contact Us</h2>
            <p>
              If you have any questions about our Cookie Policy, please contact us at:
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

export default CookiePolicyPage 