import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'OGC Concept | One Golf Club Membership Model',
  description: 'Discover the unique concept behind One Golf Club – access to over 50 premier golf courses under one flexible membership with concierge service and exclusive benefits.',
  keywords: 'one golf club concept, OGC membership model, multi-course golf membership, golf club access, UK golf courses'
};

const ConceptPage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/media/pexels-pixabay-274133.jpg"
          alt="The OGC Concept"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold text-white mb-6">
            The <span className="text-golf-gold-400">OGC</span> Concept
          </h1>
          <p className="text-xl md:text-2xl text-golf-cream-100 max-w-3xl mx-auto">
            Redefining golf membership for the modern player
          </p>
        </div>
      </div>

      {/* Introduction Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-display font-semibold text-golf-green-800 mb-6">
                A New Approach to Golf Membership
              </h2>
              <div className="prose prose-lg max-w-none text-gray-600">
                <p>
                  One Golf Club was founded on a simple yet revolutionary concept: providing golf enthusiasts with access to a diverse portfolio of exceptional courses under a single membership.
                </p>
                <p>
                  Unlike traditional memberships that limit you to a single venue, OGC liberates your golfing experience. Our members enjoy the privilege of playing at over 50 prestigious courses throughout the UK, from classic parkland layouts to challenging links courses, all without the need for multiple memberships.
                </p>
                <p>
                  This innovative approach combines the variety and flexibility modern golfers seek with the personalized service and community feel of traditional club membership. It's the perfect solution for today's lifestyle, where time is precious and experiences are valued.
                </p>
              </div>
            </div>
            <div className="lg:w-1/2 relative h-[400px] md:h-[500px] w-full rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/media/pexels-pixabay-164250.jpg"
                alt="Golf course view"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-24 bg-golf-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-golf-green-800 mb-4">
              How One Golf Club Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our innovative membership model offers unprecedented flexibility and value
            </p>
            <div className="w-24 h-1 bg-golf-gold-400 mx-auto mt-6"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-16">
            {/* Step 1 */}
            <div className="relative">
              <div className="absolute -top-10 -left-10 text-8xl font-display font-bold text-golf-gold-200">1</div>
              <div className="bg-white rounded-lg p-8 shadow-lg relative z-10 h-full border-t-4 border-golf-gold-400">
                <div className="bg-golf-gold-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-golf-gold-600">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                  </svg>
                </div>
                <h3 className="text-xl font-display font-medium text-golf-green-800 mb-4">Choose Your Membership</h3>
                <p className="text-gray-600">
                  Select from our range of tailored membership options designed to meet different playing preferences and requirements. From occasional players to avid golfers, we have the perfect package for you.
                </p>
              </div>
            </div>
            
            {/* Step 2 */}
            <div className="relative mt-10 md:mt-0">
              <div className="absolute -top-10 -left-10 text-8xl font-display font-bold text-golf-gold-200">2</div>
              <div className="bg-white rounded-lg p-8 shadow-lg relative z-10 h-full border-t-4 border-golf-gold-400">
                <div className="bg-golf-gold-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-golf-gold-600">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
                  </svg>
                </div>
                <h3 className="text-xl font-display font-medium text-golf-green-800 mb-4">Book Your Rounds</h3>
                <p className="text-gray-600">
                  Use our intuitive online booking system or contact our dedicated concierge team to arrange your rounds at any of our partner courses. We handle all the details, ensuring a seamless experience.
                </p>
              </div>
            </div>
            
            {/* Step 3 */}
            <div className="relative mt-10 md:mt-0">
              <div className="absolute -top-10 -left-10 text-8xl font-display font-bold text-golf-gold-200">3</div>
              <div className="bg-white rounded-lg p-8 shadow-lg relative z-10 h-full border-t-4 border-golf-gold-400">
                <div className="bg-golf-gold-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-golf-gold-600">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.893 13.393l-1.135-1.135a2.252 2.252 0 01-.421-.585l-1.08-2.16a.414.414 0 00-.663-.107.827.827 0 01-.812.21l-1.273-.363a.89.89 0 00-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.212.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 01-1.81 1.025 1.055 1.055 0 01-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.261a2.25 2.25 0 01-1.383-2.46l.007-.042a2.25 2.25 0 01.29-.787l.09-.15a2.25 2.25 0 012.37-1.048l1.178.236a1.125 1.125 0 001.302-.795l.208-.73a1.125 1.125 0 00-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 01-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 01-1.458-1.137l1.411-2.353a2.25 2.25 0 00.286-.76m11.928 9.869A9 9 0 008.965 3.525m11.928 9.868A9 9 0 118.965 3.525" />
                  </svg>
                </div>
                <h3 className="text-xl font-display font-medium text-golf-green-800 mb-4">Play Without Limits</h3>
                <p className="text-gray-600">
                  Enjoy access to our entire network of partner courses, each offering a unique golfing experience. Explore new venues, revisit favorites, and make the most of your membership throughout the year.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Membership Benefits */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-semibold text-golf-green-800 mb-6">
                The OGC Difference
              </h2>
              <div className="prose prose-lg max-w-none text-gray-600">
                <p>
                  What makes One Golf Club truly distinctive is our commitment to delivering an unparalleled golfing experience that combines exceptional value with premium service.
                </p>
              </div>
              
              <ul className="mt-8 space-y-5">
                <li className="flex items-start">
                  <span className="flex-shrink-0 inline-flex items-center justify-center rounded-full bg-golf-green-100 p-2 mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-golf-green-600">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </span>
                  <div>
                    <h4 className="text-lg font-medium text-golf-green-800">Unmatched Variety</h4>
                    <p className="text-gray-600 mt-1">Over 50 diverse courses across the UK, from championship venues to hidden gems, all available under one membership.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 inline-flex items-center justify-center rounded-full bg-golf-green-100 p-2 mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-golf-green-600">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </span>
                  <div>
                    <h4 className="text-lg font-medium text-golf-green-800">Concierge Service</h4>
                    <p className="text-gray-600 mt-1">Our dedicated team handles all booking arrangements, ensuring preferential tee times and a seamless experience at every course.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 inline-flex items-center justify-center rounded-full bg-golf-green-100 p-2 mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-golf-green-600">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </span>
                  <div>
                    <h4 className="text-lg font-medium text-golf-green-800">Flexible Membership Options</h4>
                    <p className="text-gray-600 mt-1">Tailored packages designed to suit different playing habits and budgets, ensuring you get maximum value from your membership.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 inline-flex items-center justify-center rounded-full bg-golf-green-100 p-2 mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-golf-green-600">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </span>
                  <div>
                    <h4 className="text-lg font-medium text-golf-green-800">Community & Events</h4>
                    <p className="text-gray-600 mt-1">Regular tournaments, social gatherings, and networking opportunities that create a genuine sense of belonging among our diverse membership.</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-64 h-64 bg-golf-gold-100 rounded-lg"></div>
              <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-golf-cream-100 rounded-lg"></div>
              <div className="relative z-10 h-[500px] w-full rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/media/pexels-jopwell-1325664.jpg"
                  alt="Golf course view"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Courses */}
      <section className="py-16 md:py-24 bg-golf-green-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern opacity-10 mix-blend-overlay pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-white mb-4">
              Our Partner Courses
            </h2>
            <p className="text-xl text-golf-cream-100 max-w-3xl mx-auto">
              One membership, over 50 exceptional golf venues
            </p>
            <div className="w-24 h-1 bg-golf-gold-400 mx-auto mt-6"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <h3 className="text-xl font-display font-medium text-golf-gold-300 mb-3">Premium Courses</h3>
              <p className="text-golf-cream-100">
                Experience championship venues and prestigious clubs that have hosted professional tournaments, offering challenging layouts and immaculate conditioning.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <h3 className="text-xl font-display font-medium text-golf-gold-300 mb-3">Hidden Gems</h3>
              <p className="text-golf-cream-100">
                Discover lesser-known courses with unique charm and character, providing exceptional golfing experiences away from the crowds.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <h3 className="text-xl font-display font-medium text-golf-gold-300 mb-3">Diverse Designs</h3>
              <p className="text-golf-cream-100">
                From traditional parkland and woodland courses to challenging links and modern layouts, our collection offers variety for every golfing preference.
              </p>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <Link href="/courses" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-golf-green-900 bg-golf-gold-400 hover:bg-golf-gold-500 transition-colors duration-300">
              View Our Course Map
            </Link>
          </div>
        </div>
      </section>

      {/* Beyond Golf */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-golf-green-800 mb-4">
              Beyond Golf
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              One Golf Club offers more than just exceptional courses
            </p>
            <div className="w-24 h-1 bg-golf-gold-400 mx-auto mt-6"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-12">
            <div className="flex flex-col">
              <div className="relative h-64 w-full rounded-lg overflow-hidden shadow-lg mb-6">
                <Image
                  src="/media/pexels-ah360-1409004.jpg"
                  alt="Corporate golf event"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-2xl font-display font-medium text-golf-green-800 mb-4">Corporate Hospitality</h3>
              <p className="text-gray-600 flex-grow">
                We offer bespoke corporate hospitality packages for businesses looking to entertain clients or reward staff. Our event management team can organize everything from intimate golf days to large-scale tournaments, ensuring memorable experiences for all participants.
              </p>
              <div className="mt-6">
                <Link href="/services/corporate-hospitality" className="text-golf-green-700 hover:text-golf-green-800 font-medium flex items-center">
                  Learn more
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 ml-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </div>
            </div>
            
            <div className="flex flex-col">
              <div className="relative h-64 w-full rounded-lg overflow-hidden shadow-lg mb-6">
                <Image
                  src="/media/pexels-markusspiske-97768.jpg"
                  alt="Golf society day"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-2xl font-display font-medium text-golf-green-800 mb-4">Society Days</h3>
              <p className="text-gray-600 flex-grow">
                Golf societies and groups can benefit from our expertise and relationships with partner courses. We coordinate custom society days with preferential rates, organized competitions, and catering options tailored to your group's preferences.
              </p>
              <div className="mt-6">
                <Link href="/services/society-days" className="text-golf-green-700 hover:text-golf-green-800 font-medium flex items-center">
                  Learn more
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 ml-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-20 bg-golf-cream-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-golf-green-800 mb-6">
            Experience the OGC Concept
          </h2>
          <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
            Join our community of passionate golfers and discover a new way to enjoy the game you love.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/membership" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-golf-green-700 hover:bg-golf-green-800 transition-colors duration-300">
              Explore Membership Options
            </Link>
            <Link href="/contact" className="inline-flex items-center justify-center px-6 py-3 border border-golf-green-700 text-base font-medium rounded-md text-golf-green-700 bg-transparent hover:bg-golf-green-700 hover:text-white transition-colors duration-300">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ConceptPage; 