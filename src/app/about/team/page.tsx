import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Team | One Golf Club Leadership',
  description: 'Meet the dedicated team behind One Golf Club, leading the way in innovative golf membership and exceptional service delivery.',
  keywords: 'One Golf Club team, OGC leadership, golf club management, golf concierge team'
};

// Team member type definition
type TeamMember = {
  id: number;
  name: string;
  role: string;
  bio: string;
  image: string;
};

const TeamPage = () => {
  // Team members data
  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: 'James Wilson',
      role: 'Founder & CEO',
      bio: 'With over 20 years of experience in the golf industry, James founded One Golf Club with a vision to revolutionize golf membership. His passion for the game and innovative approach has helped shape OGC into the UK\'s leading multi-course membership provider.',
      image: '/media/pexels-jopwell-1325651.jpg'
    },
    {
      id: 2,
      name: 'Sarah Thompson',
      role: 'Operations Director',
      bio: 'Sarah brings extensive experience in golf club management and operations. Her attention to detail and commitment to excellence ensures that OGC members receive the highest standard of service across all partner courses.',
      image: '/media/pexels-jopwell-1325653.jpg'
    },
    {
      id: 3,
      name: 'Michael Roberts',
      role: 'Golf Concierge Manager',
      bio: 'Michael leads our dedicated concierge team, ensuring seamless booking experiences and personalized service for all OGC members. His deep knowledge of our partner courses helps members make the most of their membership.',
      image: '/media/pexels-jopwell-1325654.jpg'
    },
    {
      id: 4,
      name: 'Emma Davis',
      role: 'Membership Director',
      bio: 'Emma oversees our membership services, focusing on member satisfaction and retention. Her background in luxury hospitality ensures that OGC members enjoy a premium experience at every touchpoint.',
      image: '/media/pexels-jopwell-1325751.jpg'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/media/pexels-pixabay-164250.jpg"
          alt="OGC Team"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold text-white mb-6">
            Our <span className="text-golf-gold-400">Team</span>
          </h1>
          <p className="text-xl md:text-2xl text-golf-cream-100 max-w-3xl mx-auto">
            Meet the dedicated professionals behind One Golf Club
          </p>
        </div>
      </div>

      {/* Introduction Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-golf-green-800 mb-6">
              Leadership & Expertise
            </h2>
            <p className="text-lg text-gray-600">
              Our team combines decades of experience in golf club management, hospitality, and membership services. 
              Together, we work to deliver an exceptional experience for all OGC members and ensure the continued 
              growth and success of our innovative membership model.
            </p>
          </div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {teamMembers.map((member) => (
              <div key={member.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="relative h-80 w-full">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-display font-semibold text-golf-green-800 mb-2">
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

      {/* Values Section */}
      <section className="py-16 md:py-24 bg-golf-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-golf-green-800 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
            <div className="w-24 h-1 bg-golf-gold-400 mx-auto mt-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="bg-golf-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-golf-green-600">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
              </div>
              <h3 className="text-xl font-display font-medium text-golf-green-800 mb-4">Excellence</h3>
              <p className="text-gray-600">
                We strive for excellence in every aspect of our service, from course selection to member experiences.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="bg-golf-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-golf-green-600">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                </svg>
              </div>
              <h3 className="text-xl font-display font-medium text-golf-green-800 mb-4">Community</h3>
              <p className="text-gray-600">
                We foster a sense of belonging among our members, creating lasting connections through shared experiences.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="bg-golf-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-golf-green-600">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>
              </div>
              <h3 className="text-xl font-display font-medium text-golf-green-800 mb-4">Innovation</h3>
              <p className="text-gray-600">
                We continuously innovate our services and membership offerings to exceed member expectations.
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
            Join Our Community
          </h2>
          <p className="text-xl text-golf-cream-100 mb-10 max-w-3xl mx-auto">
            Experience the OGC difference with our dedicated team supporting your golf journey every step of the way.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/membership" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-golf-green-900 bg-golf-gold-400 hover:bg-golf-gold-500 transition-colors duration-300">
              Explore Membership
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

export default TeamPage; 