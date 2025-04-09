import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Membership | One Golf Club',
  description: 'Join One Golf Club and gain access to over 50 prestigious golf courses across the UK under one membership.',
  keywords: 'golf membership, OGC membership, UK golf club membership, private golf club'
};

const MembershipPage = () => {
  // Membership tiers data
  const membershipTiers = [
    {
      name: 'Individual',
      price: '£1,995',
      period: 'per annum',
      description: 'Perfect for individual golfers seeking flexibility and variety',
      features: [
        'Access to all partner courses',
        'No joining fee',
        'Flexible booking system',
        'Member events and competitions',
        'Golf concierge service',
        'Digital handicap tracking'
      ],
      image: '/media/pexels-jopwell-1325651.jpg'
    },
    {
      name: 'Corporate',
      price: '£3,995',
      period: 'per annum',
      description: 'Ideal for businesses looking to entertain clients and reward employees',
      features: [
        'All Individual membership benefits',
        'Up to 4 named members',
        'Priority booking for corporate events',
        'Dedicated account manager',
        'Corporate event planning service',
        'Business networking events'
      ],
      image: '/media/pexels-betchtyblades-2480612.jpg'
    },
    {
      name: 'Family',
      price: '£2,995',
      period: 'per annum',
      description: 'Great for families who love to golf together',
      features: [
        'All Individual membership benefits',
        'Up to 2 adults and 2 children',
        'Family golf clinics',
        'Junior golf programs',
        'Family competitions',
        'Family-friendly events'
      ],
      image: '/media/pexels-pixabay-274133.jpg'
    }
  ];

  // Benefits data
  const benefits = [
    {
      title: 'Course Access',
      description: 'Play at over 50 prestigious courses across the UK',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: 'Flexible Booking',
      description: 'Book tee times at your convenience through our digital platform',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: 'Member Events',
      description: 'Participate in exclusive tournaments and social gatherings',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      title: 'Golf Concierge',
      description: 'Personal assistance with bookings and arrangements',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      )
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/media/pexels-jopwell-1325651.jpg"
          alt="OGC Membership"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold text-white mb-6">
            OGC <span className="text-golf-gold-400">Membership</span>
          </h1>
          <p className="text-xl md:text-2xl text-golf-cream-100 max-w-3xl mx-auto">
            Join the future of golf membership
          </p>
        </div>
      </div>

      {/* Introduction Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-golf-green-800 mb-4">
              Why Choose OGC Membership?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the freedom to play at multiple prestigious courses while enjoying exclusive benefits and services
            </p>
            <div className="w-24 h-1 bg-golf-gold-400 mx-auto mt-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <div className="text-golf-gold-600 mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-display font-semibold text-golf-green-800 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Tiers Section */}
      <section className="py-16 md:py-24 bg-golf-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-golf-green-800 mb-4">
              Membership Options
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the membership tier that best suits your needs
            </p>
            <div className="w-24 h-1 bg-golf-gold-400 mx-auto mt-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {membershipTiers.map((tier, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg">
                <div className="relative h-48">
                  <Image
                    src={tier.image}
                    alt={tier.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-display font-semibold text-golf-green-800 mb-2">
                    {tier.name}
                  </h3>
                  <div className="mb-4">
                    <span className="text-3xl font-bold text-golf-gold-600">{tier.price}</span>
                    <span className="text-gray-500"> {tier.period}</span>
                  </div>
                  <p className="text-gray-600 mb-6">
                    {tier.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <svg className="h-5 w-5 text-golf-gold-500 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={`/membership/join?tier=${tier.name.toLowerCase()}`}
                    className="block w-full text-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-golf-green-700 hover:bg-golf-green-800 transition-colors duration-300"
                  >
                    Join Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-golf-green-800 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find answers to common questions about OGC membership
            </p>
            <div className="w-24 h-1 bg-golf-gold-400 mx-auto mt-6"></div>
          </div>

          <div className="max-w-3xl mx-auto space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-display font-semibold text-golf-green-800 mb-3">
                How do I book a tee time?
              </h3>
              <p className="text-gray-600">
                Members can book tee times through our digital platform or by contacting our golf concierge service. The booking system is available 24/7 and allows you to view real-time availability across all partner courses.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-display font-semibold text-golf-green-800 mb-3">
                Can I bring guests to play?
              </h3>
              <p className="text-gray-600">
                Yes, members can bring guests to play at partner courses. Guest rates and booking policies vary by course. Contact our golf concierge for specific details and assistance with guest bookings.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-display font-semibold text-golf-green-800 mb-3">
                Is there a joining fee?
              </h3>
              <p className="text-gray-600">
                No, there is no joining fee for OGC membership. You only pay the annual membership fee for your chosen tier.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-display font-semibold text-golf-green-800 mb-3">
                Can I upgrade or downgrade my membership?
              </h3>
              <p className="text-gray-600">
                Yes, you can change your membership tier at any time. Changes will take effect at the start of your next billing cycle. Contact our membership team for assistance with tier changes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-24 bg-golf-green-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern opacity-10 mix-blend-overlay pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-white mb-6">
              Ready to Join?
            </h2>
            <p className="text-xl text-golf-cream-100 max-w-3xl mx-auto mb-8">
              Start your journey with One Golf Club today
            </p>
            <Link
              href="/membership/join"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-golf-green-900 bg-golf-gold-400 hover:bg-golf-gold-500 transition-colors duration-300"
            >
              Join Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MembershipPage; 