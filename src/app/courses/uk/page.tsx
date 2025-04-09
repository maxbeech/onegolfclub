import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'UK Partner Courses | One Golf Club',
  description: 'Explore One Golf Club\'s extensive network of premium partner golf courses across the UK. From historic parklands to championship links, all accessible with one membership.',
  keywords: 'UK golf courses, OGC partner courses, premium golf clubs UK, golf course network, best UK golf courses'
};

const UKCoursesPage = () => {
  // Region filter options
  const regions = [
    { id: 'all', name: 'All Regions' },
    { id: 'southeast', name: 'South East' },
    { id: 'southwest', name: 'South West' },
    { id: 'midlands', name: 'Midlands' },
    { id: 'northeast', name: 'North East' },
    { id: 'northwest', name: 'North West' },
    { id: 'scotland', name: 'Scotland' },
    { id: 'wales', name: 'Wales' }
  ];

  // Course type filter options
  const courseTypes = [
    { id: 'all', name: 'All Types' },
    { id: 'parkland', name: 'Parkland' },
    { id: 'links', name: 'Links' },
    { id: 'heathland', name: 'Heathland' },
    { id: 'woodland', name: 'Woodland' },
    { id: 'resort', name: 'Resort' }
  ];

  // Featured courses data
  const featuredCourses = [
    {
      id: 1,
      name: "Royal St. George's Golf Club",
      location: "Sandwich, Kent",
      region: "Southeast",
      type: "Links",
      established: 1887,
      holes: 18,
      par: 70,
      length: "7,204 yards",
      description: "Consistently ranked among the top courses in the world, Royal St. George's has hosted The Open Championship 14 times. Its undulating fairways, deep bunkers, and unpredictable winds provide a true test of links golf.",
      image: "/media/pexels-pixabay-164250.jpg",
      features: ["Open Championship Venue", "Practice Facilities", "Clubhouse Dining", "Pro Shop"]
    },
    {
      id: 2,
      name: "Sunningdale Golf Club",
      location: "Sunningdale, Berkshire",
      region: "Southeast",
      type: "Heathland",
      established: 1900,
      holes: 36,
      par: 70,
      length: "6,627 yards (Old Course)",
      description: "Comprising the Old and New courses, Sunningdale is widely regarded as one of the finest heathland venues in the world. The Old Course, designed by Willie Park Jr., is known for its natural beauty and strategic challenge.",
      image: "/media/pexels-markusspiske-97768.jpg",
      features: ["Two Championship Courses", "Practice Academy", "Historic Clubhouse", "Professional Instruction"]
    },
    {
      id: 3,
      name: "Gleneagles (Kings Course)",
      location: "Auchterarder, Perthshire",
      region: "Scotland",
      type: "Parkland",
      established: 1919,
      holes: 18,
      par: 70,
      length: "6,790 yards",
      description: "Designed by James Braid, the Kings Course at Gleneagles is set against the magnificent backdrop of the Perthshire hills. Its natural topography creates a challenging but fair test for golfers of all abilities.",
      image: "/media/pexels-jopwell-1325653.jpg",
      features: ["Ryder Cup Venue", "Luxury Resort", "Multiple Dining Options", "Golf Academy"]
    },
    {
      id: 4,
      name: "Royal Birkdale Golf Club",
      location: "Southport, Merseyside",
      region: "Northwest",
      type: "Links",
      established: 1889,
      holes: 18,
      par: 70,
      length: "7,156 yards",
      description: "Host to The Open Championship ten times, Royal Birkdale is renowned for its challenging yet fair layout. Set among impressive dunes, each hole is framed to test the player's skill rather than luck.",
      image: "/media/pexels-ah360-1409004.jpg",
      features: ["Open Championship Venue", "World-Class Practice Area", "Art Deco Clubhouse", "Championship History"]
    },
    {
      id: 5,
      name: "Wentworth Club (West Course)",
      location: "Virginia Water, Surrey",
      region: "Southeast",
      type: "Parkland",
      established: 1926,
      holes: 18,
      par: 72,
      length: "7,284 yards",
      description: "Home to the prestigious BMW PGA Championship, Wentworth's West Course is one of the most famous in Europe. Designed by Harry Colt and later modified by Ernie Els, it offers a stern test in beautiful surroundings.",
      image: "/media/pexels-jopwell-1325664.jpg",
      features: ["European Tour Headquarters", "Three Championship Courses", "Tennis and Health Club", "Fine Dining"]
    },
    {
      id: 6,
      name: "Woodhall Spa (Hotchkin Course)",
      location: "Woodhall Spa, Lincolnshire",
      region: "Midlands",
      type: "Heathland",
      established: 1905,
      holes: 18,
      par: 73,
      length: "7,080 yards",
      description: "The Hotchkin Course at Woodhall Spa, home of England Golf, is renowned for its elaborate bunkering and natural heathland setting. Consistently ranked among the world's top 100 courses.",
      image: "/media/pexels-thomasleeward-2828723.jpg",
      features: ["England Golf National Centre", "National Golf Centre Academy", "Historic Clubhouse", "Challenging Bunkers"]
    }
  ];

  // Partners courses list (abbreviated for the sample)
  const partnerCourses = [
    { id: 7, name: "St. Andrews (Old Course)", region: "Scotland", type: "Links" },
    { id: 8, name: "Celtic Manor Resort", region: "Wales", type: "Parkland" },
    { id: 9, name: "Royal County Down", region: "Northern Ireland", type: "Links" },
    { id: 10, name: "The Belfry", region: "Midlands", type: "Parkland" },
    { id: 11, name: "Turnberry (Ailsa)", region: "Scotland", type: "Links" },
    { id: 12, name: "Woburn Golf Club", region: "Southeast", type: "Woodland" },
    { id: 13, name: "Royal Lytham & St Annes", region: "Northwest", type: "Links" },
    { id: 14, name: "Forest of Arden", region: "Midlands", type: "Parkland" },
    { id: 15, name: "Carnoustie Golf Links", region: "Scotland", type: "Links" },
    { id: 16, name: "Saunton Golf Club", region: "Southwest", type: "Links" },
    { id: 17, name: "The Grove", region: "Southeast", type: "Parkland" },
    { id: 18, name: "Royal Liverpool", region: "Northwest", type: "Links" },
    { id: 19, name: "Ganton Golf Club", region: "Northeast", type: "Heathland" },
    { id: 20, name: "Bearwood Lakes", region: "Southeast", type: "Parkland" },
    { id: 21, name: "Close House", region: "Northeast", type: "Parkland" },
    { id: 22, name: "Sunningdale (New Course)", region: "Southeast", type: "Heathland" },
    { id: 23, name: "Royal Porthcawl", region: "Wales", type: "Links" },
    { id: 24, name: "Alwoodley Golf Club", region: "Northeast", type: "Heathland" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/media/pexels-pixabay-164250.jpg"
          alt="UK Golf Courses"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold text-white mb-6">
            UK Partner <span className="text-golf-gold-400">Courses</span>
          </h1>
          <p className="text-xl md:text-2xl text-golf-cream-100 max-w-3xl mx-auto">
            Experience over 50 prestigious courses across the UK with your OGC membership
          </p>
        </div>
      </div>

      {/* Introduction Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-display font-semibold text-golf-green-800 mb-6">
                Our Partner Network
              </h2>
              <div className="prose prose-lg max-w-none text-gray-600">
                <p>
                  One Golf Club has established partnerships with over 50 of the UK's finest golf courses, offering our members unparalleled variety and quality in their golfing experiences.
                </p>
                <p>
                  From iconic Open Championship venues and hidden gems to parkland masterpieces and classic links, our network spans the entire UK, ensuring there's always a new challenge waiting for you.
                </p>
                <p>
                  Each partner course has been carefully selected based on quality, design excellence, condition, and overall experience. As an OGC member, you'll enjoy preferential access to these prestigious venues under one membership.
                </p>
              </div>
              <div className="mt-8">
                <Link href="/membership" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-golf-green-700 hover:bg-golf-green-800 transition-colors duration-300">
                  Explore Membership Options
                </Link>
              </div>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="absolute -top-6 -right-6 w-64 h-64 bg-golf-gold-100 rounded-lg"></div>
              <div className="absolute -bottom-6 -left-6 w-64 h-64 bg-golf-cream-100 rounded-lg"></div>
              <div className="relative z-10 h-[500px] w-full rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/media/pexels-pixabay-274133.jpg"
                  alt="UK Golf Course"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-16 md:py-24 bg-golf-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-golf-green-800 mb-4">
              Featured Partner Courses
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Highlighting some of the exceptional venues available to OGC members
            </p>
            <div className="w-24 h-1 bg-golf-gold-400 mx-auto mt-6"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCourses.map((course) => (
              <div key={course.id} className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
                <div className="relative h-56">
                  <Image
                    src={course.image}
                    alt={course.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-display font-medium text-golf-green-800 mb-2">{course.name}</h3>
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-1 text-golf-gold-500">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                    <span>{course.location}</span>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-golf-green-100 text-golf-green-800">
                      {course.region}
                    </span>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-golf-gold-100 text-golf-gold-800">
                      {course.type}
                    </span>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-golf-cream-200 text-golf-green-800">
                      Est. {course.established}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-gray-600 mb-4">
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
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
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
        </div>
      </section>

      {/* Course Directory */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-golf-green-800 mb-4">
              Partner Course Directory
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Browse our extensive network of prestigious UK golf courses
            </p>
            <div className="w-24 h-1 bg-golf-gold-400 mx-auto mt-6"></div>
          </div>
          
          {/* Filter Controls */}
          <div className="flex flex-col md:flex-row justify-center gap-4 mb-12">
            <div className="w-full md:w-auto">
              <label htmlFor="region" className="block text-sm font-medium text-gray-700 mb-1">
                Filter by Region
              </label>
              <select 
                id="region" 
                className="w-full md:w-48 px-4 py-2 border border-gray-300 rounded-md focus:ring-golf-green-500 focus:border-golf-green-500"
              >
                {regions.map((region) => (
                  <option key={region.id} value={region.id}>{region.name}</option>
                ))}
              </select>
            </div>
            <div className="w-full md:w-auto">
              <label htmlFor="courseType" className="block text-sm font-medium text-gray-700 mb-1">
                Filter by Course Type
              </label>
              <select 
                id="courseType" 
                className="w-full md:w-48 px-4 py-2 border border-gray-300 rounded-md focus:ring-golf-green-500 focus:border-golf-green-500"
              >
                {courseTypes.map((type) => (
                  <option key={type.id} value={type.id}>{type.name}</option>
                ))}
              </select>
            </div>
            <div className="w-full md:w-auto">
              <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-1">
                Search Courses
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="search"
                  placeholder="Search by name..."
                  className="w-full md:w-64 pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-golf-green-500 focus:border-golf-green-500"
                />
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-400">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          
          {/* Course List */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Course Name
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Region
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Type
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {partnerCourses.map((course) => (
                    <tr key={course.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-golf-green-800">
                        {course.name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {course.region}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {course.type}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="text-center mt-8 text-sm text-gray-500">
            <p>This is a partial list of our partner courses. Full course details, availability, and facilities information is available to members via the member portal.</p>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 md:py-24 bg-golf-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-golf-green-800 mb-4">
              UK Course Map
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our partner courses by location
            </p>
            <div className="w-24 h-1 bg-golf-gold-400 mx-auto mt-6"></div>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="relative h-[600px] w-full">
              <Image
                src="/media/pexels-markusspiske-104345.jpg"
                alt="UK Course Map Placeholder"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                <div className="text-center text-white p-8">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16 mx-auto mb-4 text-golf-gold-400">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
                  </svg>
                  <h3 className="text-2xl font-display font-medium mb-4">Interactive Course Map</h3>
                  <p className="max-w-2xl mx-auto">
                    An interactive map of all OGC partner courses is available to members through our exclusive member portal. Log in to explore course locations, get directions, and book your next round.
                  </p>
                  <div className="mt-8">
                    <Link href="/membership" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-golf-green-900 bg-golf-gold-400 hover:bg-golf-gold-500 transition-colors duration-300">
                      Become a Member
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Members Access */}
      <section className="py-16 md:py-20 bg-golf-green-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern opacity-10 mix-blend-overlay pointer-events-none"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-white mb-6">
            Member Access to All Courses
          </h2>
          <p className="text-xl text-golf-cream-100 mb-10 max-w-3xl mx-auto">
            With One Golf Club membership, you gain privileged access to all our partner courses under one simple membership. No additional green fees, just seamless booking through our concierge service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/membership" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-golf-green-900 bg-golf-gold-400 hover:bg-golf-gold-500 transition-colors duration-300">
              Explore Membership Benefits
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

export default UKCoursesPage; 