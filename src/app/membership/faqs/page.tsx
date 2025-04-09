import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Membership FAQs | One Golf Club',
  description: 'Find answers to frequently asked questions about One Golf Club membership, benefits, courses, and more.',
  keywords: 'golf club FAQs, OGC membership questions, golf membership FAQ, one golf club questions'
};

const FAQsPage = () => {
  // FAQ categories and questions
  const faqCategories = [
    {
      title: "General Membership",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
        </svg>
      ),
      faqs: [
        {
          question: "What is the One Golf Club concept?",
          answer: "One Golf Club offers a revolutionary approach to golf membership. Instead of joining a single golf club, our members gain access to over 50 prestigious courses across the UK under one flexible membership. This provides variety, value, and convenience that traditional single-club memberships cannot match."
        },
        {
          question: "How is OGC different from a golf society?",
          answer: "Unlike a golf society, OGC provides a genuine club experience with consistent access to courses, preferential tee times, a vibrant community of members, regular tournaments, and personalized concierge service. Societies typically arrange occasional play at different venues, whereas OGC offers regular, guaranteed access to our partner courses."
        },
        {
          question: "How do I join One Golf Club?",
          answer: "You can apply for membership through our online application form or by contacting our membership team directly. After submitting your application, one of our membership advisors will contact you to discuss the options and guide you through the process."
        },
        {
          question: "Is there a joining fee?",
          answer: "Yes, there is a one-time joining fee that varies depending on the membership tier you select. This fee contributes to the administration costs of setting up your membership and providing your welcome pack."
        },
        {
          question: "Can I try before I join?",
          answer: "We occasionally offer 'experience days' for prospective members to get a taste of the OGC concept. Please contact our membership team to enquire about upcoming opportunities or to arrange a consultation meeting."
        }
      ]
    },
    {
      title: "Courses & Booking",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
        </svg>
      ),
      faqs: [
        {
          question: "Which golf courses can I play as a member?",
          answer: "OGC members have access to over 50 partner courses across the UK, ranging from historic parkland layouts to modern championship venues. The complete list of courses is available in the member handbook and our online portal, and is regularly updated as new venues join our network."
        },
        {
          question: "Are there any restrictions on when I can play?",
          answer: "While our partner courses are generally available to OGC members, there may be certain restrictions during peak times, tournaments, or club events. Our concierge team will advise on availability when you book. Executive members enjoy greater flexibility and priority booking privileges."
        },
        {
          question: "How do I book a tee time?",
          answer: "Booking is simple: contact our concierge team via phone, email, or use our online booking system. Provide your preferred course, date, time, and any special requests. We'll arrange everything with the partner club and confirm your booking, typically within 24 hours."
        },
        {
          question: "How far in advance can I book?",
          answer: "Booking windows depend on your membership tier: Executive members can book up to 28 days in advance, Premier members up to 14 days, and Classic members up to 7 days. This ensures fair access to tee times across our membership base."
        },
        {
          question: "What happens if I need to cancel a booking?",
          answer: "We understand plans change. We request at least 48 hours' notice for cancellations to allow us to reallocate the tee time. Late cancellations or no-shows may incur a fee as outlined in our membership terms."
        }
      ]
    },
    {
      title: "Membership Tiers & Fees",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
        </svg>
      ),
      faqs: [
        {
          question: "What membership options are available?",
          answer: "We offer three primary membership tiers: Executive (unlimited access), Premier (40 rounds per year), and Classic (20 rounds per year). Each tier offers different benefits and pricing to match various playing frequencies and preferences. Corporate memberships are also available."
        },
        {
          question: "How much does membership cost?",
          answer: "Our membership fees vary by tier: Executive membership is £3,995 per year, Premier is £2,495 per year, and Classic is £1,495 per year. Corporate packages start from £3,995. Full details can be found on our pricing page."
        },
        {
          question: "Are there any hidden costs?",
          answer: "No. The membership fee covers all the benefits listed. Some partner courses may have optional add-ons like caddie fees or premium food and beverage options, but there are no mandatory additional fees to access the courses."
        },
        {
          question: "Can I pay monthly?",
          answer: "Yes, we offer monthly payment plans for all membership tiers, subject to a 12-month commitment. There's a small administrative fee for this service. Details are available on our pricing page."
        },
        {
          question: "Can I change my membership tier?",
          answer: "Yes, you can upgrade your membership at any time by paying the difference in fees. Downgrades can be made at the time of annual renewal."
        }
      ]
    },
    {
      title: "Guest & Family Access",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
        </svg>
      ),
      faqs: [
        {
          question: "Can I bring guests to play?",
          answer: "Yes, all membership tiers include guest privileges. Executive members can bring up to 3 guests per visit, Premier members up to 2 guests, and Classic members 1 guest. Guests play at preferential rates compared to standard visitor green fees."
        },
        {
          question: "How much do guests pay?",
          answer: "Guest rates vary by course but are typically 20-30% below the standard visitor green fee. Your membership advisor can provide the current guest rate card for all partner courses."
        },
        {
          question: "Can my spouse/partner use my membership?",
          answer: "Standard memberships are non-transferable and can only be used by the named member. However, we offer Joint memberships for couples at a discounted rate, and Family memberships that include playing rights for children under 18."
        },
        {
          question: "Can I add my children to my membership?",
          answer: "Yes, we offer Junior Add-ons to existing adult memberships at discounted rates for children under 18. Please contact our membership team for details."
        },
        {
          question: "Do you offer corporate memberships for client entertainment?",
          answer: "Yes, our corporate packages include options with transferable playing rights, ideal for client entertainment and staff rewards. These packages offer excellent value for businesses and come with additional benefits."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/media/pexels-ah360-1409004.jpg"
          alt="OGC Membership FAQs"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold text-white mb-6">
            Frequently Asked <span className="text-golf-gold-400">Questions</span>
          </h1>
          <p className="text-xl md:text-2xl text-golf-cream-100 max-w-3xl mx-auto">
            Everything you need to know about One Golf Club membership
          </p>
        </div>
      </div>

      {/* Introduction Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xl text-gray-600">
              Find answers to common questions about One Golf Club membership. If you can't find what you're looking for, please don't hesitate to contact our team who will be happy to help.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-golf-green-700 hover:bg-golf-green-800 transition-colors duration-300">
                Contact Us
              </Link>
              <Link href="/membership/join" className="inline-flex items-center justify-center px-6 py-3 border border-golf-green-700 text-base font-medium rounded-md text-golf-green-700 bg-transparent hover:bg-golf-green-700 hover:text-white transition-colors duration-300">
                Apply for Membership
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-16 md:py-24 bg-golf-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {faqCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-16 last:mb-0">
              <div className="flex items-center mb-8">
                <div className="inline-flex items-center justify-center rounded-full bg-golf-green-100 p-3 mr-4">
                  <div className="text-golf-green-600">
                    {category.icon}
                  </div>
                </div>
                <h2 className="text-2xl md:text-3xl font-display font-semibold text-golf-green-800">{category.title}</h2>
              </div>
              
              <div className="space-y-6">
                {category.faqs.map((faq, faqIndex) => (
                  <div key={faqIndex} className="bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-xl font-display font-medium text-golf-green-800 mb-3">{faq.question}</h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-golf-green-800 mb-6">
            Still Have Questions?
          </h2>
          <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
            Our membership team is here to help. Contact us today to discuss your specific requirements or to arrange a consultation.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-golf-cream-50 rounded-lg p-6 text-center">
              <div className="inline-flex items-center justify-center rounded-full bg-golf-green-100 p-3 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-golf-green-600">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
              </div>
              <h3 className="text-lg font-display font-medium text-golf-green-800 mb-2">Call Us</h3>
              <p className="text-gray-600 mb-4">Speak directly with our membership team</p>
              <a href="tel:+441234567890" className="text-golf-green-700 font-medium">+44 (0) 123 456 7890</a>
            </div>
            
            <div className="bg-golf-cream-50 rounded-lg p-6 text-center">
              <div className="inline-flex items-center justify-center rounded-full bg-golf-green-100 p-3 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-golf-green-600">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
              </div>
              <h3 className="text-lg font-display font-medium text-golf-green-800 mb-2">Email Us</h3>
              <p className="text-gray-600 mb-4">Send us your questions anytime</p>
              <a href="mailto:membership@onegolfclub.com" className="text-golf-green-700 font-medium">membership@onegolfclub.com</a>
            </div>
            
            <div className="bg-golf-cream-50 rounded-lg p-6 text-center">
              <div className="inline-flex items-center justify-center rounded-full bg-golf-green-100 p-3 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-golf-green-600">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                </svg>
              </div>
              <h3 className="text-lg font-display font-medium text-golf-green-800 mb-2">Book a Consultation</h3>
              <p className="text-gray-600 mb-4">Schedule a personal consultation</p>
              <Link href="/contact" className="text-golf-green-700 font-medium">Request Appointment</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-20 bg-golf-green-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern opacity-10 mix-blend-overlay pointer-events-none"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-white mb-6">
            Ready to Join One Golf Club?
          </h2>
          <p className="text-xl text-golf-cream-100 mb-10 max-w-3xl mx-auto">
            Take the first step toward an unparalleled golfing experience. Apply for membership today.
          </p>
          <Link href="/membership/join" className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-golf-green-900 bg-golf-gold-400 hover:bg-golf-gold-500 transition-colors duration-300">
            Apply for Membership
          </Link>
        </div>
      </section>
    </div>
  );
};

export default FAQsPage; 