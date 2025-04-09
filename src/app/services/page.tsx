import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Services | One Golf Club',
  description: 'Discover our comprehensive range of golf services including corporate hospitality, society days, event management, and golf concierge services.',
  keywords: 'golf services, corporate golf hospitality, golf society days, golf event management, golf concierge'
};

const ServicesPage = () => {
  const services = [
    {
      title: 'Corporate Hospitality',
      description: 'Exclusive corporate events and hospitality packages at prestigious golf venues across the UK.',
      image: '/media/pexels-jopwell-1325651.jpg',
      link: '/services/corporate-hospitality'
    },
    {
      title: 'Society Days',
      description: 'Organized golf society days with competitions, prizes, and professional event management.',
      image: '/media/pexels-markusspiske-104345.jpg',
      link: '/services/society-days'
    },
    {
      title: 'Event Management',
      description: 'Complete golf event management services for tournaments, corporate days, and special occasions.',
      image: '/media/pexels-betchtyblades-2480612.jpg',
      link: '/services/event-management'
    },
    {
      title: 'Golf Concierge',
      description: 'Personalized golf concierge service for members, handling bookings and arrangements.',
      image: '/media/pexels-jopwell-1325664.jpg',
      link: '/services/concierge'
    },
    {
      title: 'Golf Travel',
      description: 'Luxury golf travel packages and experiences around the world.',
      image: '/media/pexels-pixabay-164250.jpg',
      link: '/services/golf-travel'
    },
    {
      title: 'Club Fitting',
      description: 'Professional club fitting service to optimize your golf equipment.',
      image: '/media/pexels-markusspiske-97768.jpg',
      link: '/services/club-fitting'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/media/pexels-thomasleeward-2828723.jpg"
          alt="OGC Services"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold text-white mb-6">
            Our <span className="text-golf-gold-400">Services</span>
          </h1>
          <p className="text-xl md:text-2xl text-golf-cream-100 max-w-3xl mx-auto">
            Comprehensive golf services for every occasion
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-golf-green-800 mb-4">
              Premium Golf Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From corporate events to personal golf experiences, we offer a comprehensive range of services to enhance your golfing journey
            </p>
            <div className="w-24 h-1 bg-golf-gold-400 mx-auto mt-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link 
                key={index}
                href={service.link}
                className="group block bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-64">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-display font-semibold text-golf-green-800 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {service.description}
                  </p>
                  <span className="inline-flex items-center text-golf-gold-600 font-medium group-hover:text-golf-gold-700">
                    Learn More
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1 transform group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-24 bg-golf-green-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern opacity-10 mix-blend-overlay pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-white mb-6">
              Ready to Experience Our Services?
            </h2>
            <p className="text-xl text-golf-cream-100 max-w-3xl mx-auto mb-8">
              Contact our team to discuss your requirements and discover how we can enhance your golfing experience
            </p>
            <Link 
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-golf-green-900 bg-golf-gold-400 hover:bg-golf-gold-500 transition-colors duration-300"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage; 