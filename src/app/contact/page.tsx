import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | One Golf Club',
  description: 'Get in touch with One Golf Club for membership enquiries, corporate hospitality, or any other golf-related services.',
  keywords: 'contact One Golf Club, golf club contact, golf membership enquiries, corporate golf contact'
};

const ContactPage = () => {
  // Contact information
  const contactInfo = [
    {
      title: "Membership Enquiries",
      phone: "+44 (0) 123 456 7890",
      email: "membership@onegolfclub.com",
      description: "For questions about joining OGC or current membership"
    },
    {
      title: "Event Bookings",
      phone: "+44 (0) 123 456 7891",
      email: "events@onegolfclub.com",
      description: "For corporate events, society days, and group bookings"
    },
    {
      title: "Golf Concierge",
      phone: "+44 (0) 123 456 7892",
      email: "concierge@onegolfclub.com",
      description: "For members looking to book tee times or make arrangements"
    }
  ];

  // Office locations
  const locations = [
    {
      name: "London Office",
      address: ["One Golf Club", "10 St. James's Square", "London", "SW1Y 4LE"],
      hours: "Monday - Friday: 9:00am - 5:30pm"
    },
    {
      name: "Manchester Office",
      address: ["One Golf Club North", "15 Peter Street", "Manchester", "M2 5QR"],
      hours: "Monday - Friday: 9:00am - 5:30pm"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/media/pexels-jopwell-1325653.jpg"
          alt="Contact OGC"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold text-white mb-6">
            Contact <span className="text-golf-gold-400">Us</span>
          </h1>
          <p className="text-xl md:text-2xl text-golf-cream-100 max-w-3xl mx-auto">
            Get in touch with our team
          </p>
        </div>
      </div>

      {/* Contact Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-display font-semibold text-golf-green-800 mb-6">
                Send Us a Message
              </h2>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-golf-green-500 focus:ring-golf-green-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-golf-green-500 focus:ring-golf-green-500"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-golf-green-500 focus:ring-golf-green-500"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-golf-green-500 focus:ring-golf-green-500"
                  >
                    <option>Membership Enquiry</option>
                    <option>Corporate Hospitality</option>
                    <option>Society Days</option>
                    <option>Event Management</option>
                    <option>Golf Travel</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-golf-green-500 focus:ring-golf-green-500"
                  ></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-golf-green-700 hover:bg-golf-green-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-golf-green-500"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-display font-semibold text-golf-green-800 mb-6">
                Contact Information
              </h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-medium text-golf-green-800 mb-2">Head Office</h3>
                  <p className="text-gray-600">
                    SBC House<br />
                    Restmor Way<br />
                    Wallington<br />
                    SM6 7AH<br />
                    Company Reg: 10690867
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-golf-green-800 mb-2">Contact Details</h3>
                  <div className="space-y-2">
                    <p className="text-gray-600">
                      <span className="font-medium">Phone:</span> 020 8255 2030
                    </p>
                    <p className="text-gray-600">
                      <span className="font-medium">Mobile:</span> +44 7484 834266
                    </p>
                    <p className="text-gray-600">
                      <span className="font-medium">Email:</span> info@onegolfclub.co.uk
                    </p>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-golf-green-800 mb-2">Office Hours</h3>
                  <div className="space-y-1">
                    <p className="text-gray-600">Monday - Friday: 9:00 AM - 5:30 PM</p>
                    <p className="text-gray-600">Saturday: 10:00 AM - 2:00 PM</p>
                    <p className="text-gray-600">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-semibold text-golf-green-800 mb-4">
              Find Us
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Visit our head office in Wallington, Surrey
            </p>
          </div>
          <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2494.8274567890123!2d-0.1517!3d51.3614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4875f3c0c0c0c0c0%3A0x0!2sSBC+House%2C+Restmor+Way%2C+Wallington+SM6+7AH!5e0!3m2!1sen!2suk!4v1234567890"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Membership CTA */}
      <section className="py-16 md:py-20 bg-golf-green-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern opacity-10 mix-blend-overlay pointer-events-none"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-white mb-6">
            Interested in Membership?
          </h2>
          <p className="text-xl text-golf-cream-100 mb-10 max-w-3xl mx-auto">
            Discover the benefits of One Golf Club membership and gain access to over 50 prestigious courses.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/membership" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-golf-green-900 bg-golf-gold-400 hover:bg-golf-gold-500 transition-colors duration-300">
              Explore Membership
            </Link>
            <Link href="/membership/join" className="inline-flex items-center justify-center px-6 py-3 border border-golf-cream-100 text-base font-medium rounded-md text-golf-cream-100 bg-transparent hover:bg-white/10 transition-colors duration-300">
              Apply Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage; 