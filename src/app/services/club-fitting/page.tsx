import Image from 'next/image'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Club Fitting | One Golf Club',
  description: 'Professional club fitting services using advanced technology to optimize your golf equipment for your game.',
  keywords: 'club fitting, golf equipment, custom clubs, golf clubs, club fitting technology, golf fitting',
}

const ClubFittingPage = () => {
  const fittingTypes = [
    {
      title: 'Full Bag Fitting',
      description: 'Complete analysis of your entire set of clubs, from driver to putter.',
      duration: '2-3 hours',
      price: '£199',
      includes: [
        'Driver fitting',
        'Fairway wood fitting',
        'Iron fitting',
        'Wedges fitting',
        'Putter fitting',
        'Detailed report'
      ]
    },
    {
      title: 'Driver Fitting',
      description: 'Optimize your longest club for maximum distance and accuracy.',
      duration: '1 hour',
      price: '£99',
      includes: [
        'Shaft analysis',
        'Head selection',
        'Launch monitor data',
        'Detailed report'
      ]
    },
    {
      title: 'Iron Fitting',
      description: 'Find the perfect irons for your swing and playing style.',
      duration: '1.5 hours',
      price: '£149',
      includes: [
        'Iron head selection',
        'Shaft fitting',
        'Lie angle adjustment',
        'Detailed report'
      ]
    }
  ]

  const brands = [
    'Titleist',
    'Callaway',
    'TaylorMade',
    'PING',
    'Mizuno',
    'PXG',
    'Cobra',
    'Wilson',
    'Srixon',
    'Cleveland'
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px]">
        <Image
          src="/media/club-fitting-hero.jpg"
          alt="Club Fitting"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Club Fitting</h1>
            <p className="text-xl md:text-2xl">Optimize your equipment for your game</p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Professional Club Fitting</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto text-center">
            Our state-of-the-art fitting studio uses advanced technology to ensure your clubs are perfectly 
            matched to your swing. Using TrackMan launch monitors and expert fitters, we'll help you find 
            the equipment that maximizes your performance.
          </p>
        </div>
      </section>

      {/* Fitting Types */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Fitting Options</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {fittingTypes.map((type, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-2xl font-bold mb-4">{type.title}</h3>
                <p className="text-gray-600 mb-4">{type.description}</p>
                <div className="mb-4">
                  <p className="font-semibold">Duration: {type.duration}</p>
                  <p className="font-semibold">Price: {type.price}</p>
                </div>
                <ul className="space-y-2 mb-6">
                  {type.includes.map((item, idx) => (
                    <li key={idx} className="flex items-center">
                      <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
                <Link 
                  href="/contact"
                  className="block w-full text-center bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors"
                >
                  Book Fitting
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Advanced Fitting Technology</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">TrackMan Launch Monitor</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Real-time ball flight data
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Club head analysis
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Spin rate optimization
                </li>
              </ul>
            </div>
            <div className="relative h-[300px]">
              <Image
                src="/media/trackman.jpg"
                alt="TrackMan Launch Monitor"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Brands */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Available Brands</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {brands.map((brand, index) => (
              <div key={index} className="text-center">
                <p className="text-lg font-semibold">{brand}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">The Fitting Process</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">1</div>
              <h3 className="text-xl font-bold mb-2">Initial Consultation</h3>
              <p className="text-gray-600">Discuss your game and goals with our fitting experts</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">2</div>
              <h3 className="text-xl font-bold mb-2">Swing Analysis</h3>
              <p className="text-gray-600">Capture your swing data using TrackMan technology</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">3</div>
              <h3 className="text-xl font-bold mb-2">Equipment Testing</h3>
              <p className="text-gray-600">Try different club combinations to find your perfect match</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">4</div>
              <h3 className="text-xl font-bold mb-2">Final Selection</h3>
              <p className="text-gray-600">Order your custom-fit clubs with detailed specifications</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-green-600 text-white">
        <div className="max-w-6xl mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Optimize Your Game?</h2>
          <p className="text-xl mb-8">
            Book your club fitting session today and experience the difference that properly fitted equipment can make.
          </p>
          <Link 
            href="/contact"
            className="inline-block bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Book a Fitting
          </Link>
        </div>
      </section>
    </div>
  )
}

export default ClubFittingPage 