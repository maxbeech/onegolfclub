import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Member Testimonials | One Golf Club Experiences',
  description: 'Read what our members say about their One Golf Club experience. Discover how OGC is transforming golf membership with access to over 50 premier courses.',
  keywords: 'One Golf Club testimonials, OGC member reviews, golf membership reviews, golf club experiences'
};

// Testimonial type definition
type Testimonial = {
  id: number;
  name: string;
  role: string;
  company?: string;
  testimonial: string;
  image: string;
  rating: number;
};

const TestimonialsPage = () => {
  // Testimonials data
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Robert Anderson',
      role: 'Business Executive',
      company: 'Anderson & Partners',
      testimonial: 'One Golf Club has transformed my golfing experience. The flexibility to play at different courses and the exceptional concierge service make it the perfect membership for my busy schedule. The quality of partner courses is outstanding.',
      image: '/media/pexels-jopwell-1325651.jpg',
      rating: 5
    },
    {
      id: 2,
      name: 'Sarah Mitchell',
      role: 'Marketing Director',
      company: 'Global Brands Ltd',
      testimonial: 'As someone who travels frequently for work, OGC has been a game-changer. I can play golf wherever I am in the UK, and the booking process is seamless. The variety of courses keeps the experience fresh and exciting.',
      image: '/media/pexels-jopwell-1325653.jpg',
      rating: 5
    },
    {
      id: 3,
      name: 'David Thompson',
      role: 'Golf Enthusiast',
      testimonial: 'The value proposition of OGC is unmatched. Access to over 50 courses under one membership is incredible. The concierge team goes above and beyond to ensure every round is special. Highly recommended for any serious golfer.',
      image: '/media/pexels-jopwell-1325654.jpg',
      rating: 5
    },
    {
      id: 4,
      name: 'Emma Wilson',
      role: 'Corporate Client',
      company: 'Wilson Enterprises',
      testimonial: 'We\'ve used OGC for several corporate events, and the service has been exceptional. The team\'s attention to detail and ability to accommodate our specific requirements has made every event a success.',
      image: '/media/pexels-jopwell-1325751.jpg',
      rating: 5
    }
  ];

  // Function to render star rating
  const StarRating = ({ rating }: { rating: number }) => (
    <div className="flex items-center">
      {[...Array(5)].map((_, index) => (
        <svg
          key={index}
          xmlns="http://www.w3.org/2000/svg"
          className={`h-5 w-5 ${
            index < rating ? 'text-golf-gold-400' : 'text-gray-300'
          }`}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
          />
        </svg>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/media/pexels-pixabay-164250.jpg"
          alt="OGC Testimonials"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold text-white mb-6">
            Member <span className="text-golf-gold-400">Testimonials</span>
          </h1>
          <p className="text-xl md:text-2xl text-golf-cream-100 max-w-3xl mx-auto">
            Hear from our members about their OGC experience
          </p>
        </div>
      </div>

      {/* Introduction Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-golf-green-800 mb-6">
              The OGC Experience
            </h2>
            <p className="text-lg text-gray-600">
              Our members are at the heart of everything we do. Their experiences and feedback help us continuously 
              improve and enhance the OGC membership offering. Here's what some of our members have to say about 
              their journey with One Golf Club.
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="relative h-16 w-16 rounded-full overflow-hidden mr-4">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-display font-semibold text-golf-green-800">
                        {testimonial.name}
                      </h3>
                      <p className="text-golf-gold-600 font-medium">
                        {testimonial.role}
                        {testimonial.company && `, ${testimonial.company}`}
                      </p>
                    </div>
                  </div>
                  <StarRating rating={testimonial.rating} />
                  <blockquote className="mt-4 text-gray-600 italic">
                    "{testimonial.testimonial}"
                  </blockquote>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Member Benefits Section */}
      <section className="py-16 md:py-24 bg-golf-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-golf-green-800 mb-4">
              Why Members Love OGC
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The benefits that make One Golf Club membership unique
            </p>
            <div className="w-24 h-1 bg-golf-gold-400 mx-auto mt-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="bg-golf-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-golf-green-600">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>
              </div>
              <h3 className="text-xl font-display font-medium text-golf-green-800 mb-4">Unmatched Variety</h3>
              <p className="text-gray-600">
                Access to over 50 diverse courses across the UK, from championship venues to hidden gems.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="bg-golf-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-golf-green-600">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
              </div>
              <h3 className="text-xl font-display font-medium text-golf-green-800 mb-4">Personalized Service</h3>
              <p className="text-gray-600">
                Dedicated concierge team ensuring seamless booking and exceptional experiences at every course.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="bg-golf-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-golf-green-600">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                </svg>
              </div>
              <h3 className="text-xl font-display font-medium text-golf-green-800 mb-4">Vibrant Community</h3>
              <p className="text-gray-600">
                Regular events and competitions that create lasting connections among our diverse membership.
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
            Experience the OGC difference and become part of our growing community of golf enthusiasts.
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

export default TestimonialsPage; 