import Image from 'next/image'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Golf Travel | One Golf Club',
  description: 'Luxury golf travel packages and experiences around the world. Custom golf trips tailored to your preferences.',
  keywords: 'golf travel, golf holidays, golf packages, golf tours, luxury golf travel, golf trips',
}

const GolfTravelPage = () => {
  const destinations = [
    {
      region: 'Europe',
      courses: [
        {
          name: 'St Andrews Links',
          location: 'Scotland',
          description: 'The Home of Golf, featuring the historic Old Course and six other championship courses.',
          image: '/media/destinations/st-andrews.jpg'
        },
        {
          name: 'Royal County Down',
          location: 'Northern Ireland',
          description: 'One of the world\'s most beautiful courses, set against the backdrop of the Mountains of Mourne.',
          image: '/media/destinations/royal-county-down.jpg'
        },
        {
          name: 'Pine Valley Golf Club',
          location: 'Portugal',
          description: 'A stunning championship course in the Algarve region.',
          image: '/media/destinations/pine-valley.jpg'
        }
      ]
    },
    {
      region: 'United States',
      courses: [
        {
          name: 'Pebble Beach Golf Links',
          location: 'California',
          description: 'One of the most iconic courses in the world, overlooking the Pacific Ocean.',
          image: '/media/destinations/pebble-beach.jpg'
        },
        {
          name: 'Pinehurst No. 2',
          location: 'North Carolina',
          description: 'A Donald Ross masterpiece and host of multiple US Opens.',
          image: '/media/destinations/pinehurst.jpg'
        },
        {
          name: 'Bandon Dunes',
          location: 'Oregon',
          description: 'A links-style golf resort with multiple world-class courses.',
          image: '/media/destinations/bandon-dunes.jpg'
        }
      ]
    }
  ]

  const services = [
    {
      title: 'Custom Trip Planning',
      description: 'Personalized golf travel packages tailored to your preferences and requirements.',
      features: [
        'Course selection',
        'Accommodation booking',
        'Transportation arrangements',
        'Tee time reservations'
      ]
    },
    {
      title: 'Group Tours',
      description: 'Organized golf trips for groups of any size, perfect for corporate events or golf societies.',
      features: [
        'Group discounts',
        'Dedicated tour manager',
        'Competition organization',
        'Social events'
      ]
    },
    {
      title: 'Luxury Experiences',
      description: 'Premium golf travel experiences with exclusive access and VIP treatment.',
      features: [
        'Private jet travel',
        'Luxury accommodation',
        'Private course access',
        'Personal concierge'
      ]
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px]">
        <Image
          src="/media/golf-travel-hero.jpg"
          alt="Golf Travel"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Golf Travel</h1>
            <p className="text-xl md:text-2xl">Experience the world's finest golf courses</p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Luxury Golf Travel Experiences</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto text-center">
            Let us take care of every detail of your golf travel experience. From selecting the perfect courses 
            to arranging accommodations and transportation, we'll create unforgettable golf trips tailored to your preferences.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Destinations */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Featured Destinations</h2>
          {destinations.map((region, index) => (
            <div key={index} className="mb-16">
              <h3 className="text-2xl font-bold mb-8">{region.region}</h3>
              <div className="grid md:grid-cols-3 gap-8">
                {region.courses.map((course, idx) => (
                  <div key={idx} className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="relative h-48">
                      <Image
                        src={course.image}
                        alt={course.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h4 className="text-xl font-bold mb-2">{course.name}</h4>
                      <p className="text-green-600 font-semibold mb-2">{course.location}</p>
                      <p className="text-gray-600">{course.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Choose Our Golf Travel Service</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Expert Planning</h3>
              <p className="text-gray-600">Years of experience in creating perfect golf travel experiences</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Personal Service</h3>
              <p className="text-gray-600">Dedicated travel concierge for your entire journey</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Exclusive Access</h3>
              <p className="text-gray-600">Special arrangements with top courses worldwide</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-green-600 text-white">
        <div className="max-w-6xl mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Start Planning Your Golf Adventure</h2>
          <p className="text-xl mb-8">
            Contact us to create your perfect golf travel experience.
          </p>
          <Link 
            href="/contact"
            className="inline-block bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Plan Your Trip
          </Link>
        </div>
      </section>
    </div>
  )
}

export default GolfTravelPage 