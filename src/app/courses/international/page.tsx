import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'International Partner Courses | One Golf Club',
  description: 'Discover One Golf Club\'s exclusive international partner golf courses across Europe, USA, Asia, and beyond. Experience world-class golf destinations with your OGC membership.',
  keywords: 'international golf courses, global golf network, OGC partner courses abroad, overseas golf destinations, exclusive golf resorts'
};

const InternationalCoursesPage = () => {
  // Region filter options
  const regions = [
    { id: 'all', name: 'All Regions' },
    { id: 'europe', name: 'Europe' },
    { id: 'usa', name: 'United States' },
    { id: 'middle-east', name: 'Middle East' },
    { id: 'asia', name: 'Asia' },
    { id: 'caribbean', name: 'Caribbean' },
    { id: 'oceania', name: 'Australia & NZ' }
  ];

  // Featured international courses data
  const featuredCourses = [
    {
      id: 1,
      name: "Valderrama Golf Club",
      location: "Sotogrande, Spain",
      region: "Europe",
      established: 1974,
      designer: "Robert Trent Jones Sr.",
      holes: 18,
      par: 71,
      length: "6,951 yards",
      description: "Host of the 1997 Ryder Cup and numerous European Tour events, Valderrama is widely regarded as Spain's finest course. The challenging layout features narrow fairways lined with cork oak trees and small, well-protected greens.",
      image: "/media/pexels-pixabay-164250.jpg",
      features: ["Ryder Cup Venue", "Championship Pedigree", "Practice Academy", "Mediterranean Setting"]
    },
    {
      id: 2,
      name: "Pebble Beach Golf Links",
      location: "California, USA",
      region: "United States",
      established: 1919,
      designer: "Jack Neville & Douglas Grant",
      holes: 18,
      par: 72,
      length: "7,075 yards",
      description: "Set along the dramatic coastline of the Monterey Peninsula, Pebble Beach is one of golf's most iconic venues. Host to multiple U.S. Opens, its stunning ocean views and challenging layout make it a bucket-list course for golfers worldwide.",
      image: "/media/pexels-markusspiske-97768.jpg",
      features: ["U.S. Open Venue", "Iconic Ocean Holes", "Luxury Resort", "Historic Clubhouse"]
    },
    {
      id: 3,
      name: "Emirates Golf Club (Majlis)",
      location: "Dubai, UAE",
      region: "Middle East",
      established: 1988,
      designer: "Karl Litten",
      holes: 18,
      par: 72,
      length: "7,301 yards",
      description: "The first grass course in the Middle East, the Majlis Course at Emirates Golf Club is a desert oasis that regularly hosts the Dubai Desert Classic. Its lush fairways contrast dramatically with the surrounding desert landscape and Dubai skyline.",
      image: "/media/pexels-jopwell-1325653.jpg",
      features: ["European Tour Venue", "Floodlit Night Golf", "Desert Terrain", "Modern Clubhouse"]
    },
    {
      id: 4,
      name: "Whistling Straits (Straits Course)",
      location: "Wisconsin, USA",
      region: "United States",
      established: 1998,
      designer: "Pete Dye",
      holes: 18,
      par: 72,
      length: "7,790 yards",
      description: "Host of the 2021 Ryder Cup, Whistling Straits is a links-style masterpiece set along the shores of Lake Michigan. With over 1,000 bunkers and fescue-lined fairways, it provides a stern test reminiscent of seaside courses in the UK.",
      image: "/media/pexels-ah360-1409004.jpg",
      features: ["Ryder Cup Venue", "PGA Championship Host", "Links-Style Layout", "Lakeside Setting"]
    }
  ];

  // International network highlights
  const networkHighlights = [
    {
      region: "Europe",
      courses: 28,
      countries: 12,
      flagship: "Golf National (France)",
      image: "/media/pexels-jopwell-1325651.jpg",
      description: "From the sun-drenched fairways of the Mediterranean to the challenging links of Portugal, our European network spans 12 countries across the continent."
    },
    {
      region: "United States",
      courses: 35,
      countries: 1,
      flagship: "Pinehurst No. 2",
      image: "/media/pexels-pixabay-164250.jpg",
      description: "Experience America's greatest golf destinations, from the coastal splendor of Pebble Beach to the historic corridors of Pinehurst, with partner courses across 15 states."
    },
    {
      region: "Middle East",
      courses: 12,
      countries: 5,
      flagship: "Yas Links (Abu Dhabi)",
      image: "/media/pexels-ah360-1409004.jpg",
      description: "Discover the desert golfing paradise of the Middle East, featuring immaculate championship courses in Dubai, Abu Dhabi, Bahrain, and beyond."
    },
    {
      region: "Asia & Pacific",
      courses: 18,
      countries: 8,
      flagship: "Royal Melbourne (Australia)",
      image: "/media/pexels-thomasleeward-2828723.jpg",
      description: "Our Asia-Pacific network spans from the tropical courses of Thailand to the prestigious fairways of Japan and the championship layouts of Australia."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/media/pexels-jopwell-1325651.jpg"
          alt="International Golf Courses"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold text-white mb-6">
            International <span className="text-golf-gold-400">Destinations</span>
          </h1>
          <p className="text-xl md:text-2xl text-golf-cream-100 max-w-3xl mx-auto">
            Experience world-class golf across 20+ countries with your OGC membership
          </p>
        </div>
      </div>

      {/* Introduction Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-display font-semibold text-golf-green-800 mb-6">
                Global Golf Network
              </h2>
              <div className="prose prose-lg max-w-none text-gray-600">
                <p>
                  One Golf Club's international network extends your membership privileges to over 90 prestigious golf courses across more than 20 countries worldwide.
                </p>
                <p>
                  From the sun-drenched fairways of Spain to the manicured perfection of America's greatest venues, our carefully curated collection of partner courses offers unparalleled variety and excellence in global golf destinations.
                </p>
                <p>
                  As an OGC member, you'll enjoy streamlined access to these world-class venues through our dedicated concierge service, making international golf travel simpler than ever before.
                </p>
              </div>
              <div className="mt-8">
                <Link href="/membership" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-golf-green-700 hover:bg-golf-green-800 transition-colors duration-300">
                  Explore Membership Benefits
                </Link>
              </div>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="absolute -top-6 -right-6 w-64 h-64 bg-golf-gold-100 rounded-lg"></div>
              <div className="absolute -bottom-6 -left-6 w-64 h-64 bg-golf-cream-100 rounded-lg"></div>
              <div className="relative z-10 h-[500px] w-full rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/media/pexels-pixabay-274133.jpg"
                  alt="International Golf Course"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Network Statistics */}
      <section className="py-16 md:py-20 bg-golf-green-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern opacity-10 mix-blend-overlay pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-white mb-4">
              Our Global Reach
            </h2>
            <p className="text-xl text-golf-cream-100 max-w-3xl mx-auto">
              One membership, endless possibilities across six continents
            </p>
            <div className="w-24 h-1 bg-golf-gold-400 mx-auto mt-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white/10 rounded-lg p-8 text-center backdrop-blur-sm">
              <div className="text-5xl font-display font-semibold text-golf-gold-400 mb-3">93</div>
              <div className="text-lg text-golf-cream-100">International Courses</div>
            </div>
            <div className="bg-white/10 rounded-lg p-8 text-center backdrop-blur-sm">
              <div className="text-5xl font-display font-semibold text-golf-gold-400 mb-3">26</div>
              <div className="text-lg text-golf-cream-100">Countries Worldwide</div>
            </div>
            <div className="bg-white/10 rounded-lg p-8 text-center backdrop-blur-sm">
              <div className="text-5xl font-display font-semibold text-golf-gold-400 mb-3">18</div>
              <div className="text-lg text-golf-cream-100">Major Championship Venues</div>
            </div>
            <div className="bg-white/10 rounded-lg p-8 text-center backdrop-blur-sm">
              <div className="text-5xl font-display font-semibold text-golf-gold-400 mb-3">6</div>
              <div className="text-lg text-golf-cream-100">Continents Represented</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-16 md:py-24 bg-golf-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-golf-green-800 mb-4">
              Featured International Courses
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Highlighting some of our most prestigious global partners
            </p>
            <div className="w-24 h-1 bg-golf-gold-400 mx-auto mt-6"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {featuredCourses.map((course) => (
              <div key={course.id} className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl flex flex-col md:flex-row">
                <div className="relative h-64 md:h-auto md:w-2/5">
                  <Image
                    src={course.image}
                    alt={course.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 md:w-3/5">
                  <h3 className="text-xl font-display font-medium text-golf-green-800 mb-2">{course.name}</h3>
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-1 text-golf-gold-500">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                    <span>{course.location}</span>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-golf-green-100 text-golf-green-800">
                      {course.region}
                    </span>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-golf-cream-200 text-golf-green-800">
                      Est. {course.established}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-gray-600 mb-3">
                    <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-1 text-golf-gold-500">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>{course.holes} holes</span>
                    </div>
                    <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-1 text-golf-gold-500">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 3v1.5M3 21v-6m0 0l2.77-.693a9 9 0 016.208.682l.108.054a9 9 0 006.086.71l3.114-.732a48.524 48.524 0 01-.005-10.499l-3.11.732a9 9 0 01-6.085-.711l-.108-.054a9 9 0 00-6.208-.682L3 4.5M3 15V4.5" />
                      </svg>
                      <span>Par {course.par}</span>
                    </div>
                    <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-1 text-golf-gold-500">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.115 5.19l.319 1.913A6 6 0 008.11 10.36L9.75 12l-.387.775c-.217.433-.132.956.21 1.298l1.348 1.348c.21.21.329.497.329.795v1.089c0 .426.24.815.622 1.006l.153.076c.433.217.956.132 1.298-.21l.723-.723a8.7 8.7 0 002.288-4.042 1.087 1.087 0 00-.358-1.099l-1.33-1.108c-.251-.21-.582-.299-.905-.245l-1.17.195a1.125 1.125 0 01-.98-.314l-.295-.295a1.125 1.125 0 010-1.591l.13-.132a1.125 1.125 0 011.3-.21l.603.302a.809.809 0 001.086-1.086L14.25 7.5l1.256-.837a4.5 4.5 0 001.528-1.732l.146-.292M6.115 5.19A9 9 0 1017.18 4.64M6.115 5.19A8.965 8.965 0 0112 3c1.929 0 3.716.607 5.18 1.64" />
                      </svg>
                      <span>{course.length}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">
                    {course.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {course.features.map((feature, index) => (
                      <span key={index} className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link href="/membership" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-golf-green-700 hover:bg-golf-green-800 transition-colors duration-300">
              Access All International Courses
            </Link>
          </div>
        </div>
      </section>

      {/* Regional Highlights */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-golf-green-800 mb-4">
              Regional Network Highlights
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our diverse collection of partner courses by region
            </p>
            <div className="w-24 h-1 bg-golf-gold-400 mx-auto mt-6"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {networkHighlights.map((highlight, index) => (
              <div key={index} className="flex flex-col md:flex-row gap-6 items-center p-6 bg-golf-cream-50 rounded-lg">
                <div className="relative h-48 w-48 rounded-full overflow-hidden shrink-0">
                  <Image
                    src={highlight.image}
                    alt={highlight.region}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-display font-medium text-golf-green-800 mb-2">{highlight.region}</h3>
                  <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-gray-600 mb-3">
                    <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-1 text-golf-gold-500">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                      </svg>
                      <span>{highlight.courses} Courses</span>
                    </div>
                    <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-1 text-golf-gold-500">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                      </svg>
                      <span>{highlight.countries} {highlight.countries > 1 ? 'Countries' : 'Country'}</span>
                    </div>
                  </div>
                  <div className="mb-3">
                    <span className="text-sm font-medium text-golf-green-700">Flagship Venue:</span>
                    <span className="text-sm ml-2 text-gray-700">{highlight.flagship}</span>
                  </div>
                  <p className="text-gray-600 text-sm">
                    {highlight.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Concierge Service */}
      <section className="py-16 md:py-24 bg-golf-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 relative order-2 lg:order-1">
              <div className="absolute -top-6 -left-6 w-64 h-64 bg-golf-gold-100 rounded-lg"></div>
              <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-golf-cream-100 rounded-lg"></div>
              <div className="relative z-10 h-[500px] w-full rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/media/pexels-pixabay-274133.jpg"
                  alt="Concierge Service"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="lg:w-1/2 order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-display font-semibold text-golf-green-800 mb-6">
                International Concierge Service
              </h2>
              <div className="prose prose-lg max-w-none text-gray-600">
                <p>
                  Planning an international golf trip can be complex, but with OGC's dedicated concierge service, accessing our partner courses around the world becomes effortless.
                </p>
                <p>
                  Our team of golf travel specialists will handle all your arrangements, from securing preferred tee times at our partner courses to recommending the perfect accommodation and transportation options.
                </p>
                <p>
                  Whether you're planning a golfing holiday to the sun-soaked courses of Spain, a business trip to the United States, or a once-in-a-lifetime journey to Asia's most spectacular venues, our concierge team is your passport to exceptional international golf experiences.
                </p>
                <ul className="mt-6">
                  <li>Priority booking at all international partner courses</li>
                  <li>Personalized itinerary planning</li>
                  <li>Local knowledge and insider recommendations</li>
                  <li>24/7 support during your travels</li>
                  <li>Preferential rates at partner hotels and accommodations</li>
                </ul>
              </div>
              <div className="mt-8">
                <Link href="/services/concierge" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-golf-green-700 hover:bg-golf-green-800 transition-colors duration-300">
                  Learn More About Our Concierge
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-20 bg-golf-green-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern opacity-10 mix-blend-overlay pointer-events-none"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-white mb-6">
            Experience World-Class Golf Globally
          </h2>
          <p className="text-xl text-golf-cream-100 mb-10 max-w-3xl mx-auto">
            With One Golf Club membership, the world's finest courses are at your fingertips. Join today and start your global golfing journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/membership" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-golf-green-900 bg-golf-gold-400 hover:bg-golf-gold-500 transition-colors duration-300">
              Become a Member
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

export default InternationalCoursesPage; 