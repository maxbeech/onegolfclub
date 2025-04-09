import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Courses | One Golf Club Partner Venues',
  description: 'Explore over 50 prestigious golf courses available with One Golf Club membership. From championship venues to hidden gems across the UK.',
  keywords: 'One Golf Club courses, OGC golf courses, UK golf club network, premium golf venues, golf course map'
};

// Define course type
type Course = {
  id: number;
  name: string;
  location: string;
  region: string;
  description: string;
  image: string;
  featured?: boolean;
};

const CoursesPage = () => {
  // Featured courses data
  const featuredCourses: Course[] = [
    {
      id: 1,
      name: 'Royal Ascot Golf Club',
      location: 'Ascot, Berkshire',
      region: 'South',
      description: 'Rich in history and poised for the future, Royal Ascot Golf Club offers a rare mix of tradition and modern amenities. This challenging course features tree-lined fairways and strategic bunkering.',
      image: '/media/Blog post images/Royal-Ascot-Image-768x480.webp',
      featured: true
    },
    {
      id: 2,
      name: 'Inspirations Golf Club',
      location: 'Kent',
      region: 'South East',
      description: 'Co-designed by Mackenzie and Ebert – Inspired by the greatest links holes in the UK. A modern masterpiece that challenges golfers of all abilities with its creative layout.',
      image: '/media/Blog post images/Inspirations-GC-Image-768x512.webp',
      featured: true
    },
    {
      id: 3,
      name: 'Clandon Regis Golf Club',
      location: 'Surrey',
      region: 'South East',
      description: 'A picturesque parkland course set in the stunning Surrey countryside. Known for its excellent conditioning and friendly atmosphere, it offers a rewarding experience for all golfers.',
      image: '/media/Blog post images/Candon-Regis-768x523.webp',
      featured: true
    },
    {
      id: 4,
      name: 'The Carrick at Cameron House',
      location: 'Loch Lomond, Scotland',
      region: 'Scotland',
      description: 'Set on the bonnie banks of Loch Lomond, The Carrick offers a stunning highland golf experience with breathtaking views and a championship layout that tests every aspect of your game.',
      image: '/media/Blog post images/IMG-20240801-WA0003-768x578.webp',
      featured: true
    }
  ];
  
  // Sample of regular courses (in real implementation, this would be a much larger list)
  const sampleCourses: Course[] = [
    {
      id: 5,
      name: 'Aldenham Golf and Country Club',
      location: 'Hertfordshire',
      region: 'East',
      description: 'A challenging parkland course with mature tree-lined fairways and water hazards that come into play on several holes.',
      image: '/media/pexels-pixabay-164250.jpg'
    },
    {
      id: 6,
      name: 'Betchworth Park Golf Club',
      location: 'Surrey',
      region: 'South East',
      description: 'Set at the foot of Box Hill, this course offers spectacular views and a varied layout that rewards accurate shot-making.',
      image: '/media/pexels-pixabay-274133.jpg'
    },
    {
      id: 7,
      name: 'Bletchingley Golf Club',
      location: 'Surrey',
      region: 'South East',
      description: 'A scenic downland course with panoramic views of the North Downs, known for its excellent year-round condition.',
      image: '/media/pexels-markusspiske-97768.jpg'
    },
    {
      id: 8,
      name: 'Breadsall Priory Country Club',
      location: 'Derbyshire',
      region: 'Midlands',
      description: 'A Marriott venue featuring two distinct courses set in beautiful countryside around a 13th-century priory building.',
      image: '/media/pexels-betchtyblades-2480612.jpg'
    },
    {
      id: 9,
      name: 'Brentwood Golf Club',
      location: 'Essex',
      region: 'East',
      description: 'A testing parkland course with mature trees and strategic water features demanding accuracy from tee to green.',
      image: '/media/pexels-ah360-1409004.jpg'
    },
    {
      id: 10,
      name: 'Chobham Golf Club',
      location: 'Surrey',
      region: 'South East',
      description: 'A modern course with USGA specification greens, ensuring excellent putting surfaces throughout the year.',
      image: '/media/pexels-magda-ehlers-pexels-1308799.jpg'
    },
    {
      id: 11,
      name: 'Hampton Court Palace Golf Club',
      location: 'Surrey',
      region: 'South East',
      description: 'A historic course adjoining the famous palace grounds, offering a royal golfing experience with excellent facilities.',
      image: '/media/pexels-markusspiske-104345.jpg'
    },
    {
      id: 12,
      name: 'Hanbury Manor',
      location: 'Hertfordshire',
      region: 'East',
      description: 'A Marriott hotel and country club featuring a championship course designed by Jack Nicklaus II, set in stunning grounds.',
      image: '/media/pexels-nathan-nedley-20160-92858.jpg'
    }
  ];

  // UK Regions for filtering
  const regions = [
    'All Regions',
    'South East',
    'South West',
    'London',
    'East',
    'Midlands',
    'North West',
    'North East',
    'Scotland',
    'Wales'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/media/pexels-thomasleeward-2828723.jpg"
          alt="OGC Partner Courses"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold text-white mb-6">
            Our <span className="text-golf-gold-400">Courses</span>
          </h1>
          <p className="text-xl md:text-2xl text-golf-cream-100 max-w-3xl mx-auto">
            One membership, over 50 exceptional golf venues across the UK
          </p>
        </div>
      </div>

      {/* Introduction Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-golf-green-100 text-golf-green-800 text-sm font-medium mb-6">
                50+ Championship & Premium Courses
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-semibold text-golf-green-800 mb-6">
                The OGC Collection
              </h2>
              <div className="prose prose-lg max-w-none text-gray-600">
                <p>
                  One Golf Club currently offers access to over 50 courses throughout the UK, with new venues being added regularly to enhance your membership experience.
                </p>
                <p>
                  Our diverse portfolio includes prestigious championship venues, picturesque parkland courses, challenging links layouts, and hidden gems that provide unique and memorable golfing experiences.
                </p>
                <p>
                  As an OGC member, you also receive preferential rates at our international affiliate courses with OGC Plus, extending your golfing adventures beyond the UK.
                </p>
              </div>
              <div className="mt-8">
                <Link href="/membership" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-golf-green-700 hover:bg-golf-green-800 transition-colors duration-300">
                  Join to Access All Courses
                </Link>
              </div>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="relative h-48 w-full rounded-lg overflow-hidden shadow-md">
                    <Image
                      src="/media/pexels-pixabay-164250.jpg"
                      alt="Golf Course 1"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative h-64 w-full rounded-lg overflow-hidden shadow-md">
                    <Image
                      src="/media/pexels-markusspiske-104345.jpg"
                      alt="Golf Course 2"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="space-y-4 mt-6">
                  <div className="relative h-64 w-full rounded-lg overflow-hidden shadow-md">
                    <Image
                      src="/media/pexels-jopwell-1325664.jpg"
                      alt="Golf Course 3"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative h-48 w-full rounded-lg overflow-hidden shadow-md">
                    <Image
                      src="/media/pexels-betchtyblades-2480612.jpg"
                      alt="Golf Course 4"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* UK Course Map Section */}
      <section className="py-16 md:py-24 bg-golf-cream-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern opacity-5 mix-blend-overlay pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-golf-green-800 mb-4">
              UK Course Map
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our partner courses span the entire UK, offering exceptional golfing experiences wherever you are
            </p>
            <div className="w-24 h-1 bg-golf-gold-400 mx-auto mt-6"></div>
          </div>
          
          <div className="bg-white rounded-xl shadow-xl overflow-hidden">
            <div className="relative h-[600px] w-full">
              {/* This would be replaced with an actual interactive map in a real implementation */}
              <div className="absolute inset-0 flex items-center justify-center bg-golf-green-50">
                <div className="text-center">
                  <p className="text-gray-600 mb-4">Interactive Course Map</p>
                  <div className="inline-flex items-center justify-center px-4 py-2 rounded-md bg-golf-green-100 text-golf-green-800 text-sm font-medium">
                    Map View Coming Soon
                  </div>
                </div>
              </div>
              <Image
                src="/media/pexels-10-star-321296-914682.jpg"
                alt="UK Course Map"
                fill
                className="object-cover opacity-10"
              />
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-gray-600 mb-6">
              Use the interactive map to explore our partner courses by region. Click on a course to view details and information.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-golf-green-800 mb-4">
              Featured Partner Courses
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Highlighting some of the exceptional venues in the OGC Collection
            </p>
            <div className="w-24 h-1 bg-golf-gold-400 mx-auto mt-6"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredCourses.map((course) => (
              <div key={course.id} className="bg-white rounded-lg overflow-hidden shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-xl">
                <div className="relative h-64 w-full">
                  <Image
                    src={course.image}
                    alt={course.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-golf-gold-400 text-golf-green-900 px-3 py-1 rounded-full text-xs font-medium">
                    Featured
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-display font-semibold text-golf-green-800">{course.name}</h3>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-golf-green-100 text-golf-green-800">
                      {course.region}
                    </span>
                  </div>
                  <p className="text-gray-500 text-sm mb-4">{course.location}</p>
                  <p className="text-gray-600 mb-6">{course.description}</p>
                  <Link href={`/courses/${course.id}`} className="inline-flex items-center text-golf-green-700 hover:text-golf-green-800 font-medium">
                    View course details
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 ml-2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Courses (Sample) */}
      <section className="py-16 md:py-24 bg-golf-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center mb-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-semibold text-golf-green-800 mb-2">
                Explore Our Courses
              </h2>
              <p className="text-xl text-gray-600">
                A selection from our extensive partner network
              </p>
            </div>
            <div className="mt-6 md:mt-0">
              <div className="inline-block relative">
                <select className="block appearance-none bg-white border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded-md leading-tight focus:outline-none focus:ring-golf-green-500 focus:border-golf-green-500">
                  {regions.map((region, index) => (
                    <option key={index}>{region}</option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sampleCourses.map((course) => (
              <div key={course.id} className="bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg">
                <div className="relative h-40 w-full">
                  <Image
                    src={course.image}
                    alt={course.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-display font-medium text-golf-green-800">{course.name}</h3>
                  </div>
                  <p className="text-gray-500 text-xs mb-2 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-1">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                    {course.location}
                  </p>
                  <div className="mb-3">
                    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-golf-green-100 text-golf-green-800">
                      {course.region}
                    </span>
                  </div>
                  <Link href={`/courses/${course.id}`} className="text-golf-green-700 hover:text-golf-green-800 text-sm font-medium flex items-center">
                    Course details
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-1">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link href="/courses/uk" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-golf-green-700 hover:bg-golf-green-800 transition-colors duration-300">
              View All UK Courses
            </Link>
          </div>
        </div>
      </section>

      {/* International Affiliations */}
      <section className="py-16 md:py-24 bg-golf-green-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern opacity-10 mix-blend-overlay pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-white mb-4">
              International Affiliations
            </h2>
            <p className="text-xl text-golf-cream-100 max-w-3xl mx-auto">
              Extend your golfing adventures beyond the UK with OGC Plus
            </p>
            <div className="w-24 h-1 bg-golf-gold-400 mx-auto mt-6"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 text-center">
              <h3 className="text-xl font-display font-medium text-golf-gold-300 mb-4">Europe</h3>
              <p className="text-golf-cream-100 mb-6">
                Access prestigious courses across Spain, Portugal, France, and Italy at preferential rates, perfect for golf getaways in the European sun.
              </p>
              <Link href="/courses/international" className="inline-flex items-center text-golf-gold-300 hover:text-golf-gold-400 font-medium">
                Discover European venues
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 ml-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 text-center">
              <h3 className="text-xl font-display font-medium text-golf-gold-300 mb-4">North America</h3>
              <p className="text-golf-cream-100 mb-6">
                Enjoy special arrangements with select golf clubs in the United States and Canada, opening doors to exceptional golfing experiences across the Atlantic.
              </p>
              <Link href="/courses/international" className="inline-flex items-center text-golf-gold-300 hover:text-golf-gold-400 font-medium">
                Explore American courses
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 ml-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 text-center">
              <h3 className="text-xl font-display font-medium text-golf-gold-300 mb-4">Rest of World</h3>
              <p className="text-golf-cream-100 mb-6">
                Discover golfing gems in destinations such as Dubai, South Africa, and Australia, with OGC's growing network of international partner clubs.
              </p>
              <Link href="/courses/international" className="inline-flex items-center text-golf-gold-300 hover:text-golf-gold-400 font-medium">
                View global partnerships
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 ml-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <Link href="/membership" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-golf-green-900 bg-golf-gold-400 hover:bg-golf-gold-500 transition-colors duration-300">
              Discover OGC Plus Membership
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-golf-green-800 mb-6">
            Ready to Experience These Exceptional Courses?
          </h2>
          <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
            Join One Golf Club today and gain access to our entire network of partner courses, all under one membership.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/membership" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-golf-green-700 hover:bg-golf-green-800 transition-colors duration-300">
              Explore Membership Options
            </Link>
            <Link href="/contact" className="inline-flex items-center justify-center px-6 py-3 border border-golf-green-700 text-base font-medium rounded-md text-golf-green-700 bg-transparent hover:bg-golf-green-700 hover:text-white transition-colors duration-300">
              Contact Our Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CoursesPage; 