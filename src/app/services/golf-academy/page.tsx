import Image from 'next/image'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Golf Academy | One Golf Club',
  description: 'Professional golf instruction and coaching services for all skill levels. Learn from PGA professionals in a state-of-the-art facility.',
  keywords: 'golf academy, golf lessons, golf coaching, golf instruction, PGA professionals, golf training',
}

const GolfAcademyPage = () => {
  const programs = [
    {
      title: 'Beginner Program',
      description: 'Perfect for those new to golf. Learn the fundamentals of grip, stance, and swing mechanics.',
      duration: '6 weeks',
      sessions: '6 x 1-hour lessons',
      price: '£299',
      features: [
        'Basic swing mechanics',
        'Putting fundamentals',
        'Golf etiquette',
        'Equipment basics',
        'Practice routines'
      ]
    },
    {
      title: 'Intermediate Program',
      description: 'For golfers looking to improve their game and lower their handicap.',
      duration: '8 weeks',
      sessions: '8 x 1-hour lessons',
      price: '£399',
      features: [
        'Advanced swing analysis',
        'Course management',
        'Bunker play',
        'Chipping techniques',
        'Video analysis'
      ]
    },
    {
      title: 'Advanced Program',
      description: 'Elite coaching for serious golfers aiming for competition level.',
      duration: '12 weeks',
      sessions: '12 x 1-hour lessons',
      price: '£599',
      features: [
        'Advanced technique refinement',
        'Mental game coaching',
        'Competition preparation',
        'Custom practice plans',
        'Regular video analysis'
      ]
    }
  ]

  const instructors = [
    {
      name: 'James Wilson',
      role: 'Head PGA Professional',
      bio: 'Former European Tour player with 15 years of teaching experience.',
      image: '/media/instructors/james-wilson.jpg'
    },
    {
      name: 'Sarah Thompson',
      role: 'Senior Instructor',
      bio: 'LPGA Class A Professional specializing in women\'s golf instruction.',
      image: '/media/instructors/sarah-thompson.jpg'
    },
    {
      name: 'Michael Chen',
      role: 'Junior Development Coach',
      bio: 'PGA Professional with expertise in youth golf development.',
      image: '/media/instructors/michael-chen.jpg'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px]">
        <Image
          src="/media/golf-academy-hero.jpg"
          alt="Golf Academy"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Golf Academy</h1>
            <p className="text-xl md:text-2xl">Professional instruction for all skill levels</p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Expert Golf Instruction</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto text-center">
            Our PGA-qualified professionals provide personalized instruction to help you achieve your golfing goals. 
            Whether you're a complete beginner or an experienced player, our academy offers programs tailored to your needs.
          </p>
        </div>
      </section>

      {/* Programs */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Instruction Programs</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-2xl font-bold mb-4">{program.title}</h3>
                <p className="text-gray-600 mb-4">{program.description}</p>
                <div className="mb-4">
                  <p className="font-semibold">Duration: {program.duration}</p>
                  <p className="font-semibold">Sessions: {program.sessions}</p>
                  <p className="font-semibold">Price: {program.price}</p>
                </div>
                <ul className="space-y-2 mb-6">
                  {program.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link 
                  href="/contact"
                  className="block w-full text-center bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors"
                >
                  Book Now
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instructors */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Instructors</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {instructors.map((instructor, index) => (
              <div key={index} className="text-center">
                <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
                  <Image
                    src={instructor.image}
                    alt={instructor.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">{instructor.name}</h3>
                <p className="text-green-600 font-semibold mb-2">{instructor.role}</p>
                <p className="text-gray-600">{instructor.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Facilities</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">State-of-the-Art Technology</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  TrackMan Launch Monitor
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  High-Speed Video Analysis
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  SAM PuttLab Technology
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Practice Areas</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Indoor Practice Bays
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Short Game Area
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Practice Putting Green
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-green-600 text-white">
        <div className="max-w-6xl mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Start Your Golf Journey Today</h2>
          <p className="text-xl mb-8">
            Book a lesson with our PGA professionals and take your game to the next level.
          </p>
          <Link 
            href="/contact"
            className="inline-block bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Book a Lesson
          </Link>
        </div>
      </section>
    </div>
  )
}

export default GolfAcademyPage 