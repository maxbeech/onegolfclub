import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Corporate Golf Hospitality | One Golf Club',
  description: 'Premium corporate golf hospitality services from One Golf Club. Bespoke events, client entertainment packages, and team building across 50+ prestigious UK courses.',
  keywords: 'corporate golf hospitality, client golf days, corporate golf events, luxury golf hospitality, business golf UK'
};

const CorporateHospitalityPage = () => {
  // Corporate package data
  const packages = [
    {
      id: 1,
      title: "Corporate Membership",
      description: "Full access to all OGC partner courses for your business, with transferable playing rights for entertaining clients and rewarding staff.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
        </svg>
      ),
      benefits: [
        "Transferable playing rights for multiple employees",
        "Discounted rates for additional corporate golf days",
        "Priority booking at all partner venues",
        "Dedicated corporate account manager",
        "Quarterly golf networking events with other corporate members"
      ]
    },
    {
      id: 2,
      title: "Bespoke Corporate Events",
      description: "Fully managed golf events tailored to your business objectives, from intimate client days to large-scale tournaments and company celebrations.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
        </svg>
      ),
      benefits: [
        "Comprehensive event planning and management",
        "Branded merchandise and tournament materials",
        "Professional photography and video services",
        "Custom scoring systems and competitive formats",
        "Luxury catering and hospitality options"
      ]
    },
    {
      id: 3,
      title: "Client Entertainment",
      description: "Impress your clients with exceptional golf experiences at prestigious venues, creating the perfect environment for building relationships.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
        </svg>
      ),
      benefits: [
        "Exclusive tee times at premium venues",
        "Personal concierge service for all arrangements",
        "PGA professional coaching sessions available",
        "Premium dining experiences in private clubhouse areas",
        "Complimentary course guide and branded golf accessories"
      ]
    }
  ];

  // Event types data
  const eventTypes = [
    {
      title: "Client Golf Days",
      description: "Create memorable experiences to strengthen client relationships and showcase your business in a prestigious environment.",
      image: "/media/pexels-markusspiske-97768.jpg"
    },
    {
      title: "Corporate Tournaments",
      description: "Large-scale events with branded elements, competitive formats, and luxury hospitality for internal or external stakeholders.",
      image: "/media/pexels-jopwell-1325664.jpg"
    },
    {
      title: "Team Building",
      description: "Combine golf with structured team activities designed to develop communication, collaboration, and camaraderie.",
      image: "/media/pexels-ah360-1409004.jpg"
    },
    {
      title: "Product Launches",
      description: "Integrate golf into your product launch strategy with branded experiences and dedicated presentation facilities.",
      image: "/media/pexels-pixabay-164250.jpg"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/media/pexels-jopwell-1325653.jpg"
          alt="Corporate Golf Hospitality"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold text-white mb-6">
            Corporate <span className="text-golf-gold-400">Hospitality</span>
          </h1>
          <p className="text-xl md:text-2xl text-golf-cream-100 max-w-3xl mx-auto">
            Exceptional golf experiences for business success
          </p>
        </div>
      </div>

      {/* Introduction Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-display font-semibold text-golf-green-800 mb-6">
                Premium Corporate Golf Services
              </h2>
              <div className="prose prose-lg max-w-none text-gray-600">
                <p>
                  One Golf Club offers unrivaled corporate hospitality services across our network of over 50 prestigious golf courses in the UK. Whether you're looking to impress key clients, reward your team, or host a large-scale corporate event, our experienced staff will design and deliver exceptional golf experiences that align with your business objectives.
                </p>
                <p>
                  We understand that business relationships flourish in relaxed environments, and golf provides the perfect setting for meaningful conversation and connection. Our corporate packages combine premium course access with outstanding hospitality, creating memorable experiences that yield tangible business results.
                </p>
                <p>
                  From intimate client golf days to company-wide tournaments, our dedicated corporate team handles every detail, allowing you to focus on building valuable relationships while we manage the logistics.
                </p>
              </div>
              <div className="mt-8">
                <Link href="/contact" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-golf-green-700 hover:bg-golf-green-800 transition-colors duration-300">
                  Request Corporate Brochure
                </Link>
              </div>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="absolute -top-6 -left-6 w-64 h-64 bg-golf-gold-100 rounded-lg"></div>
              <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-golf-cream-100 rounded-lg"></div>
              <div className="relative z-10 h-[500px] w-full rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/media/pexels-jopwell-1325654.jpg"
                  alt="Corporate Golf Event"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Packages */}
      <section className="py-16 md:py-24 bg-golf-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-golf-green-800 mb-4">
              Our Corporate Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tailored packages designed to meet your business needs
            </p>
            <div className="w-24 h-1 bg-golf-gold-400 mx-auto mt-6"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-16">
            {packages.map((pkg) => (
              <div key={pkg.id} className="bg-white rounded-lg shadow-lg p-8 border-t-4 border-golf-gold-400 transition-all duration-300 hover:shadow-xl">
                <div className="inline-flex items-center justify-center rounded-full bg-golf-green-100 p-3 mb-6 text-golf-green-600">
                  {pkg.icon}
                </div>
                <h3 className="text-xl font-display font-medium text-golf-green-800 mb-3">{pkg.title}</h3>
                <p className="text-gray-600 mb-6">{pkg.description}</p>
                <div>
                  <h4 className="text-sm font-medium text-golf-green-700 mb-3">Key Benefits:</h4>
                  <ul className="space-y-2">
                    {pkg.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-golf-gold-500 mr-2 mt-1">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                        <span className="text-gray-600 text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Types */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-golf-green-800 mb-4">
              Corporate Event Types
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Exceptional golf experiences for every business occasion
            </p>
            <div className="w-24 h-1 bg-golf-gold-400 mx-auto mt-6"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {eventTypes.map((event, index) => (
              <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg h-64">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-display font-medium mb-2">{event.title}</h3>
                  <p className="text-golf-cream-100 text-sm group-hover:block">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose OGC */}
      <section className="py-16 md:py-24 bg-golf-green-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern opacity-10 mix-blend-overlay pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-white mb-4">
              Why Choose OGC Corporate Hospitality
            </h2>
            <div className="w-24 h-1 bg-golf-gold-400 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center rounded-full bg-white/10 p-4 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-golf-gold-300">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
                </svg>
              </div>
              <h3 className="text-lg font-display font-medium mb-2">Venue Choice</h3>
              <p className="text-golf-cream-100 text-sm">
                Access to over 50 prestigious courses across the UK, allowing you to select the perfect venue for your event.
              </p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center rounded-full bg-white/10 p-4 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-golf-gold-300">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
                </svg>
              </div>
              <h3 className="text-lg font-display font-medium mb-2">Expert Planning</h3>
              <p className="text-golf-cream-100 text-sm">
                Dedicated event managers with years of experience in corporate golf hospitality, ensuring flawless execution.
              </p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center rounded-full bg-white/10 p-4 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-golf-gold-300">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                </svg>
              </div>
              <h3 className="text-lg font-display font-medium mb-2">Bespoke Branding</h3>
              <p className="text-golf-cream-100 text-sm">
                Custom branded elements throughout your event, from course signage to merchandise and digital assets.
              </p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center rounded-full bg-white/10 p-4 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-golf-gold-300">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z" />
                </svg>
              </div>
              <h3 className="text-lg font-display font-medium mb-2">Tailored Approach</h3>
              <p className="text-golf-cream-100 text-sm">
                Every aspect of your event customized to align with your business objectives and corporate culture.
              </p>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <Link href="/services/case-studies" className="inline-flex items-center justify-center px-6 py-3 border border-golf-cream-100 text-base font-medium rounded-md text-golf-cream-100 bg-transparent hover:bg-white/10 transition-colors duration-300">
              View Corporate Case Studies
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-golf-green-800 mb-4">
              Client Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from businesses that have partnered with OGC for their corporate golf events
            </p>
            <div className="w-24 h-1 bg-golf-gold-400 mx-auto mt-6"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-golf-cream-50 rounded-lg p-8 border-l-4 border-golf-gold-400">
              <p className="text-gray-600 italic mb-6">
                "One Golf Club delivered an exceptional corporate golf day for our key clients. The attention to detail was outstanding, from the branded merchandise to the tailored competition format. Our clients were thoroughly impressed, and we've already seen tangible business benefits from the relationships strengthened during the event."
              </p>
              <div className="flex items-center">
                <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image 
                    src="/media/pexels-markusspiske-114972.jpg" 
                    alt="David Johnson" 
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-medium text-golf-green-800">David Johnson</h4>
                  <p className="text-golf-gold-600 text-sm">Marketing Director, Axis Financial Services</p>
                </div>
              </div>
            </div>
            
            <div className="bg-golf-cream-50 rounded-lg p-8 border-l-4 border-golf-gold-400">
              <p className="text-gray-600 italic mb-6">
                "Our annual company tournament coordinated by OGC has become the highlight of our corporate calendar. The team's professionalism and creativity have helped us create a signature event that our staff and clients look forward to each year. The ability to rotate between different prestigious venues keeps the experience fresh and exciting."
              </p>
              <div className="flex items-center">
                <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image 
                    src="/media/pexels-jopwell-1325654.jpg" 
                    alt="Jennifer Matthews" 
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-medium text-golf-green-800">Jennifer Matthews</h4>
                  <p className="text-golf-gold-600 text-sm">CEO, Horizon Technologies</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-20 bg-golf-cream-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern opacity-5 mix-blend-overlay pointer-events-none"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-golf-green-800 mb-6">
            Ready to Elevate Your Corporate Hospitality?
          </h2>
          <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
            Contact our corporate team today to discuss your requirements and discover how One Golf Club can help you achieve your business objectives through exceptional golf hospitality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-golf-green-700 hover:bg-golf-green-800 transition-colors duration-300">
              Contact Corporate Team
            </Link>
            <Link href="/services/corporate-hospitality/brochure" className="inline-flex items-center justify-center px-6 py-3 border border-golf-green-700 text-base font-medium rounded-md text-golf-green-700 bg-transparent hover:bg-golf-green-700 hover:text-white transition-colors duration-300">
              Download Brochure
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CorporateHospitalityPage; 