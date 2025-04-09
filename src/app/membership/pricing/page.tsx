import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Membership Pricing | One Golf Club',
  description: 'Explore One Golf Club membership options and pricing. Choose from our range of flexible membership tiers designed to suit every golfer\'s needs.',
  keywords: 'One Golf Club membership, OGC pricing, golf club membership cost, flexible golf membership'
};

// Membership tier type definition
type MembershipTier = {
  id: string;
  name: string;
  price: number;
  billingPeriod: string;
  description: string;
  features: string[];
  highlighted?: boolean;
};

const PricingPage = () => {
  // Membership tiers data
  const membershipTiers: MembershipTier[] = [
    {
      id: 'premier',
      name: 'Premier',
      price: 299,
      billingPeriod: 'month',
      description: 'Our most comprehensive membership tier with unlimited access to all partner courses.',
      features: [
        'Unlimited rounds at all partner courses',
        'Priority tee time booking',
        'Exclusive member events access',
        'Complimentary range balls',
        'Dedicated concierge service',
        'Guest passes (4 per month)',
        'Member-only competitions',
        'Special rates on pro shop purchases'
      ],
      highlighted: true
    },
    {
      id: 'executive',
      name: 'Executive',
      price: 199,
      billingPeriod: 'month',
      description: 'Perfect for business professionals seeking flexibility and premium golf experiences.',
      features: [
        'Up to 4 rounds per month',
        'Priority booking window',
        'Member events access',
        'Concierge service',
        'Guest passes (2 per month)',
        'Member competitions',
        'Pro shop discounts'
      ]
    },
    {
      id: 'standard',
      name: 'Standard',
      price: 149,
      billingPeriod: 'month',
      description: 'Ideal for golf enthusiasts looking for quality courses with flexible access.',
      features: [
        'Up to 2 rounds per month',
        'Standard booking window',
        'Selected member events',
        'Basic concierge service',
        'Guest pass (1 per month)',
        'Pro shop member rates'
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/media/pexels-pixabay-164250.jpg"
          alt="OGC Membership"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold text-white mb-6">
            Membership <span className="text-golf-gold-400">Pricing</span>
          </h1>
          <p className="text-xl md:text-2xl text-golf-cream-100 max-w-3xl mx-auto">
            Choose the perfect membership tier for your golfing lifestyle
          </p>
        </div>
      </div>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-golf-green-800 mb-6">
              Flexible Membership Options
            </h2>
            <p className="text-lg text-gray-600">
              At One Golf Club, we believe in offering membership options that adapt to your lifestyle. 
              Whether you're a frequent player or occasional golfer, our tiers are designed to provide 
              the perfect balance of flexibility and value.
            </p>
          </div>

          {/* Pricing Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {membershipTiers.map((tier) => (
              <div
                key={tier.id}
                className={`rounded-lg overflow-hidden shadow-lg ${
                  tier.highlighted
                    ? 'ring-2 ring-golf-gold-400 transform scale-105'
                    : 'bg-white'
                }`}
              >
                <div className="p-8">
                  <h3 className="text-2xl font-display font-semibold text-golf-green-800 mb-2">
                    {tier.name}
                  </h3>
                  <p className="text-gray-600 mb-6">{tier.description}</p>
                  <div className="mb-8">
                    <span className="text-4xl font-bold text-golf-green-800">£{tier.price}</span>
                    <span className="text-gray-600">/{tier.billingPeriod}</span>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {tier.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <svg
                          className="h-6 w-6 text-golf-gold-400 mr-2 flex-shrink-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/membership/join"
                    className={`block w-full text-center py-3 px-6 rounded-md font-medium transition-colors duration-300 ${
                      tier.highlighted
                        ? 'bg-golf-gold-400 text-golf-green-900 hover:bg-golf-gold-500'
                        : 'bg-golf-green-800 text-white hover:bg-golf-green-900'
                    }`}
                  >
                    Join Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Benefits Section */}
      <section className="py-16 bg-golf-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-golf-green-800 mb-4">
              Additional Membership Benefits
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              All membership tiers include these exclusive benefits
            </p>
            <div className="w-24 h-1 bg-golf-gold-400 mx-auto mt-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="bg-golf-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-golf-green-600">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-display font-medium text-golf-green-800 mb-4">Special Rates</h3>
              <p className="text-gray-600">
                Enjoy discounted rates on pro shop purchases, lessons, and clubhouse facilities at all partner courses.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="bg-golf-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-golf-green-600">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                </svg>
              </div>
              <h3 className="text-xl font-display font-medium text-golf-green-800 mb-4">Member Events</h3>
              <p className="text-gray-600">
                Access to exclusive member events, competitions, and social gatherings throughout the year.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="bg-golf-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-golf-green-600">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
              </div>
              <h3 className="text-xl font-display font-medium text-golf-green-800 mb-4">Insurance Benefits</h3>
              <p className="text-gray-600">
                Comprehensive golf insurance coverage including equipment, personal liability, and hole-in-one protection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-golf-green-800 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find answers to common questions about our membership
            </p>
            <div className="w-24 h-1 bg-golf-gold-400 mx-auto mt-6"></div>
          </div>

          <div className="max-w-3xl mx-auto space-y-8">
            <div className="bg-golf-cream-50 rounded-lg p-6">
              <h3 className="text-xl font-display font-medium text-golf-green-800 mb-3">
                Can I upgrade or downgrade my membership?
              </h3>
              <p className="text-gray-600">
                Yes, you can change your membership tier at any time. Changes will take effect at the start of your next billing cycle.
              </p>
            </div>

            <div className="bg-golf-cream-50 rounded-lg p-6">
              <h3 className="text-xl font-display font-medium text-golf-green-800 mb-3">
                How do I book tee times?
              </h3>
              <p className="text-gray-600">
                Members can book tee times through our online portal or by contacting our concierge team. Premier members enjoy priority booking windows.
              </p>
            </div>

            <div className="bg-golf-cream-50 rounded-lg p-6">
              <h3 className="text-xl font-display font-medium text-golf-green-800 mb-3">
                What happens to unused rounds?
              </h3>
              <p className="text-gray-600">
                Unused rounds do not roll over to the next month. We encourage members to make the most of their allocation each month.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-20 bg-golf-green-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern opacity-10 mix-blend-overlay pointer-events-none"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-white mb-6">
            Ready to Join?
          </h2>
          <p className="text-xl text-golf-cream-100 mb-10 max-w-3xl mx-auto">
            Start your journey with One Golf Club today and experience golf membership reimagined.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/membership/join" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-golf-green-900 bg-golf-gold-400 hover:bg-golf-gold-500 transition-colors duration-300">
              Join Now
            </Link>
            <Link href="/contact" className="inline-flex items-center justify-center px-6 py-3 border border-golf-cream-100 text-base font-medium rounded-md text-golf-cream-100 bg-transparent hover:bg-white/10 transition-colors duration-300">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricingPage; 