import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | One Golf Club',
  description: 'Learn about One Golf Club\'s history, mission, and the team behind our premium golf membership experience.',
  keywords: 'One Golf Club about, OGC history, golf club team, golf membership company'
};

const AboutPage = () => {
  // Team members data
  const teamMembers = [
    {
      name: 'John Smith',
      role: 'Founder & CEO',
      bio: 'With over 20 years of experience in the golf industry, John founded One Golf Club with a vision to revolutionize golf membership.',
      image: '/media/pexels-ah360-1637731.jpg'
    },
    {
      name: 'Sarah Johnson',
      role: 'Operations Director',
      bio: 'Sarah brings extensive experience in golf club management and operations, ensuring smooth service delivery across all partner courses.',
      image: '/media/pexels-magda-ehlers-pexels-1308799.jpg'
    },
    {
      name: 'Michael Brown',
      role: 'Head of Golf Services',
      bio: 'A former professional golfer, Michael oversees our golf services and ensures members receive the highest quality experience.',
      image: '/media/pexels-markusspiske-114972.jpg'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/media/pexels-pixabay-274133.jpg"
          alt="About OGC"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold text-white mb-6">
            About <span className="text-golf-gold-400">OGC</span>
          </h1>
          <p className="text-xl md:text-2xl text-golf-cream-100 max-w-3xl mx-auto">
            The story behind One Golf Club
          </p>
        </div>
      </div>

      {/* Our Story Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-semibold text-golf-green-800 mb-6">
                Our Story
              </h2>
              <div className="prose prose-lg max-w-none text-gray-600">
                <p>
                  One Golf Club was founded with a simple yet revolutionary idea: to provide golf enthusiasts with access to multiple prestigious courses under a single membership. Born from a passion for the game and a desire to make premium golf more accessible, OGC has grown from a small startup to a leading golf membership provider in the UK.
                </p>
                <p>
                  Our journey began in 2018 when our founder, John Smith, recognized a gap in the market for flexible, high-quality golf memberships. Today, we partner with over 50 exceptional courses across the UK, offering our members unparalleled variety and value in their golfing experience.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-64 h-64 bg-golf-gold-100 rounded-lg"></div>
              <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-golf-cream-100 rounded-lg"></div>
              <div className="relative z-10 h-[500px] w-full rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/media/pexels-jopwell-1325664.jpg"
                  alt="OGC History"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-16 md:py-24 bg-golf-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-golf-green-800 mb-4">
              Our Mission
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              To revolutionize golf membership by providing exceptional value and flexibility
            </p>
            <div className="w-24 h-1 bg-golf-gold-400 mx-auto mt-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="bg-golf-green-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-golf-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-display font-semibold text-golf-green-800 mb-4">Quality</h3>
              <p className="text-gray-600">
                We partner with only the finest golf courses, ensuring our members enjoy exceptional playing conditions and facilities.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="bg-golf-gold-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-golf-gold-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-display font-semibold text-golf-green-800 mb-4">Flexibility</h3>
              <p className="text-gray-600">
                Our membership model adapts to modern lifestyles, offering the freedom to play when and where you want.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="bg-golf-cream-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-golf-gold-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-display font-semibold text-golf-green-800 mb-4">Community</h3>
              <p className="text-gray-600">
                We foster a vibrant community of golf enthusiasts, creating opportunities for networking and social connections.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-golf-green-800 mb-4">
              Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the dedicated professionals behind One Golf Club
            </p>
            <div className="w-24 h-1 bg-golf-gold-400 mx-auto mt-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg">
                <div className="relative h-64">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-display font-semibold text-golf-green-800 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-golf-gold-600 font-medium mb-4">
                    {member.role}
                  </p>
                  <p className="text-gray-600">
                    {member.bio}
                  </p>
                </div>
              </div>
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
              Join Our Community
            </h2>
            <p className="text-xl text-golf-cream-100 max-w-3xl mx-auto mb-8">
              Become part of One Golf Club and experience the future of golf membership
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

export default AboutPage; 