'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import HeroSlider from '@/components/HeroSlider';

// Animation components
interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | null;
  fullWidth?: boolean;
  className?: string;
  duration?: number;
}

const FadeIn: React.FC<FadeInProps> = ({ 
  children, 
  delay = 0, 
  direction = null, 
  fullWidth = false,
  className = "",
  duration = 0.5
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const variants = {
    hidden: {
      opacity: 0,
      y: direction === 'up' ? 40 : direction === 'down' ? -40 : 0,
      x: direction === 'left' ? 40 : direction === 'right' ? -40 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: duration,
        delay: delay,
        ease: [0.22, 1, 0.36, 1],
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      className={`${fullWidth ? 'w-full' : ''} ${className}`}
    >
      {children}
    </motion.div>
  );
};

// Parallax image component
interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
  speed?: number;
  imgClassName?: string;
}

const ParallaxImage: React.FC<ParallaxImageProps> = ({
  src,
  alt,
  className = '',
  speed = 0.5,
  imgClassName = '',
}) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, 200 * speed]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div style={{ y }} className="absolute inset-0">
        <Image 
          src={src} 
          alt={alt} 
          fill 
          className={`object-cover ${imgClassName}`}
          priority
        />
      </motion.div>
    </div>
  );
};

export default function Home() {
  return (
    <main>
      {/* Hero Section with Video Slider */}
      <HeroSlider 
        title="Welcome to One Golf Club"
        subtitle="The ultimate private members club offering premium playing privileges across over 50 golf courses under one membership"
        ctaText="Become a Member"
        ctaLink="/membership/join"
      />

      {/* Introduction Section */}
      <section className="py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <FadeIn>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-semibold text-gray-900 mb-6">
                <span className="text-golf-green-700">One</span> Golf Club
              </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="max-w-4xl mx-auto text-lg text-gray-600 leading-relaxed">
                One Golf Club is the ultimate private members club and event management company. The ethos and concept 
                is to allow our members playing privileges across a wide variety of golf clubs under one membership 
                and provide our corporate clients with use of our partner club's outstanding facilities, for hospitality 
                and venue hire. One Golf Club provides their private members access to our Golf Concierge and in-house team, 
                specialising in golf event management.
              </p>
            </FadeIn>
          </div>

          {/* Benefits Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FadeIn delay={0.3} direction="up">
              <div className="bg-white p-8 rounded-xl shadow-soft hover:shadow-gold transition-shadow duration-300 flex flex-col items-center text-center h-full">
                <div className="bg-golf-green-100 p-4 rounded-full mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-golf-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">50+ Premium Courses</h3>
                <p className="text-gray-600 mb-4">Access to over 50 prestigious golf courses across the UK under a single membership, with more being added regularly.</p>
                <Link href="/courses" className="inline-flex items-center text-golf-green-700 font-medium hover:text-golf-green-800 transition-colors mt-auto">
                  View Courses
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </FadeIn>

            <FadeIn delay={0.4} direction="up">
              <div className="bg-white p-8 rounded-xl shadow-soft hover:shadow-gold transition-shadow duration-300 flex flex-col items-center text-center h-full">
                <div className="bg-golf-gold-100 p-4 rounded-full mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-golf-gold-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Corporate Hospitality</h3>
                <p className="text-gray-600 mb-4">Exclusive corporate events and hospitality packages for clients and partners, with access to exceptional facilities.</p>
                <Link href="/services/corporate-hospitality" className="inline-flex items-center text-golf-gold-600 font-medium hover:text-golf-gold-700 transition-colors mt-auto">
                  Learn More
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </FadeIn>

            <FadeIn delay={0.5} direction="up">
              <div className="bg-white p-8 rounded-xl shadow-soft hover:shadow-gold transition-shadow duration-300 flex flex-col items-center text-center h-full">
                <div className="bg-golf-cream-100 p-4 rounded-full mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-golf-gold-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Concierge Service</h3>
                <p className="text-gray-600 mb-4">Premium concierge service with our in-house team specializing in golf event management and personalized experiences.</p>
                <Link href="/services/concierge" className="inline-flex items-center text-golf-gold-800 font-medium hover:text-golf-gold-900 transition-colors mt-auto">
                  Discover Services
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Featured Course */}
      <section className="py-20 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <FadeIn direction="right">
              <div className="relative">
                <div className="absolute inset-0 -top-6 -left-6 rounded-xl bg-golf-green-700 z-0"></div>
                <div className="absolute inset-0 -bottom-6 -right-6 rounded-xl border-2 border-golf-gold-400 z-0"></div>
                <div className="relative z-10 overflow-hidden rounded-xl shadow-lg">
                  <Image
                    src="/media/pexels-betchtyblades-2480612.jpg"
                    alt="Royal Ascot Golf Club"
                    width={800}
                    height={600}
                    className="object-cover"
                  />
                </div>
              </div>
            </FadeIn>
            <FadeIn direction="left">
              <div>
                <div className="bg-golf-gold-400 inline-block px-4 py-1 rounded-full text-white text-xs font-semibold mb-4">
                  FEATURED COURSE
                </div>
                <h2 className="text-3xl sm:text-4xl font-display font-semibold text-gray-900 mb-6">
                  OGC Collection: Royal Ascot GC
                </h2>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Rich in history and poised for the future, Royal Ascot Golf Club offers a rare mix of tradition and a fantastic golfing experience. As part of the OGC Collection, members enjoy preferential access to this prestigious course with its beautifully maintained fairways and challenging greens.
                </p>
                <div className="flex items-center mb-8">
                  <div className="flex items-center mr-6">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-golf-gold-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-gray-700">Ascot, Berkshire</span>
                  </div>
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-golf-gold-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="text-gray-700">Established 1887</span>
                  </div>
                </div>
                <Link 
                  href="/courses/royal-ascot"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-golf-green-700 hover:bg-golf-green-800 transition-all duration-300 shadow-md hover:scale-105"
                >
                  View Course Details
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <FadeIn>
              <h2 className="text-3xl sm:text-4xl font-display font-semibold text-gray-900 mb-6">
                News from <span className="text-golf-green-700">OGC</span>
              </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="max-w-3xl mx-auto text-lg text-gray-600">
                Stay up to date with the latest news, events and course additions from One Golf Club
              </p>
            </FadeIn>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* News Item 1 */}
            <FadeIn delay={0.3} direction="up">
              <div className="bg-white rounded-xl shadow-soft overflow-hidden group h-full">
                <div className="relative h-60 overflow-hidden">
                  <Image
                    src="/media/pexels-thomasleeward-2828723.jpg"
                    alt="OGC Collection: Inspirations GC"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 flex flex-col h-[calc(100%-15rem)]">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 hover:text-golf-green-700 transition-colors">
                    <Link href="/news/inspirations-gc">OGC Collection: Inspirations GC</Link>
                  </h3>
                  <p className="text-gray-600 mb-4 flex-grow">
                    Co-designed by Mackenzie and Ebert – Inspired by the greatest links holes in the UK
                  </p>
                  <Link href="/news/inspirations-gc" className="inline-flex items-center text-golf-green-700 font-medium hover:text-golf-green-800 transition-colors mt-auto">
                    Read More
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </div>
              </div>
            </FadeIn>

            {/* News Item 2 */}
            <FadeIn delay={0.4} direction="up">
              <div className="bg-white rounded-xl shadow-soft overflow-hidden group h-full">
                <div className="relative h-60 overflow-hidden">
                  <Image
                    src="/media/pexels-markusspiske-104345.jpg"
                    alt="OGC Collection: Clandon Regis GC"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 flex flex-col h-[calc(100%-15rem)]">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 hover:text-golf-green-700 transition-colors">
                    <Link href="/news/clandon-regis">OGC Collection: Clandon Regis GC</Link>
                  </h3>
                  <p className="text-gray-600 mb-4 flex-grow">
                    The OGC Collection Welcomes Clandon Regis GC, the latest addition to our growing portfolio of exclusive courses.
                  </p>
                  <Link href="/news/clandon-regis" className="inline-flex items-center text-golf-green-700 font-medium hover:text-golf-green-800 transition-colors mt-auto">
                    Read More
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </div>
              </div>
            </FadeIn>

            {/* News Item 3 */}
            <FadeIn delay={0.5} direction="up">
              <div className="bg-white rounded-xl shadow-soft overflow-hidden group h-full">
                <div className="relative h-60 overflow-hidden">
                  <Image
                    src="/media/pexels-jopwell-1325664.jpg"
                    alt="OGC Welcomes Royal Navy Clearance Divers"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 flex flex-col h-[calc(100%-15rem)]">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 hover:text-golf-green-700 transition-colors">
                    <Link href="/news/royal-navy-divers">OGC Welcomes Royal Navy Clearance Divers</Link>
                  </h3>
                  <p className="text-gray-600 mb-4 flex-grow">
                    Royal Navy Clearance Divers enjoy a round on the Carrick, Cameron House, Loch Lomond, courtesy of One Golf Club.
                  </p>
                  <Link href="/news/royal-navy-divers" className="inline-flex items-center text-golf-green-700 font-medium hover:text-golf-green-800 transition-colors mt-auto">
                    Read More
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </div>
              </div>
            </FadeIn>
          </div>
          
          <FadeIn delay={0.6}>
            <div className="text-center mt-12">
              <Link 
                href="/news"
                className="inline-flex items-center px-6 py-3 border border-golf-green-700 text-base font-medium rounded-md text-golf-green-700 bg-white hover:bg-golf-green-50 transition-all duration-300"
              >
                View All News
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 bg-golf-green-800 relative overflow-hidden">
        {/* Pattern overlay */}
        <div className="absolute inset-0 bg-hero-pattern opacity-10 mix-blend-overlay pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center">
            <FadeIn>
              <h2 className="text-3xl sm:text-4xl font-display font-semibold text-white mb-6">
                Join One Golf Club Today
              </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="max-w-3xl mx-auto text-lg text-golf-cream-100 mb-10">
                Become a member of the UK's premier golf club network and gain access to over 50 
                exceptional courses under one membership. Experience golf as it should be.
              </p>
            </FadeIn>
            <FadeIn delay={0.4}>
              <div className="flex flex-wrap justify-center gap-4">
                <Link 
                  href="/membership/join"
                  className="px-8 py-4 bg-golf-gold-500 text-white font-medium rounded-md shadow-md hover:bg-golf-gold-600 hover:scale-105 transition-all duration-300"
                >
                  Become a Member
                </Link>
                <Link 
                  href="/contact"
                  className="px-8 py-4 border-2 border-white text-white font-medium rounded-md hover:bg-white/10 transition-all duration-300"
                >
                  Contact Us
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </main>
  )
} 