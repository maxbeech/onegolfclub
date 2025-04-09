import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Membership Enquiries | One Golf Club',
  description: 'Contact our membership team to learn more about One Golf Club. Enquire about our premium golf membership options, benefits, and joining process.',
  keywords: 'golf membership enquiry, OGC membership contact, golf club information request, join golf club enquiry'
};

const MembershipEnquiriesPage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/media/pexels-jopwell-1325752.jpg"
          alt="One Golf Club Membership Enquiries"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold text-white mb-6">
            Membership <span className="text-golf-gold-400">Enquiries</span>
          </h1>
          <p className="text-xl md:text-2xl text-golf-cream-100 max-w-3xl mx-auto">
            Contact our team to learn more about joining One Golf Club
          </p>
        </div>
      </div>

      {/* Introduction Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-display font-semibold text-golf-green-800 mb-6">
                Interested in Joining?
              </h2>
              <div className="prose prose-lg max-w-none text-gray-600">
                <p>
                  Thank you for your interest in One Golf Club. We understand that choosing the right golf membership is an important decision, and our dedicated membership team is here to help you every step of the way.
                </p>
                <p>
                  Whether you have questions about our different membership tiers, would like to know more about our partner courses, or are ready to start your application, we're happy to assist you.
                </p>
                <p>
                  You can reach us by phone, email, or by completing the enquiry form on this page. A member of our team will contact you within 24 hours to discuss your requirements and provide all the information you need.
                </p>
              </div>
              <div className="mt-8 space-y-4">
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-golf-gold-500 mr-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                  <a href="tel:+441234567890" className="text-golf-green-700 hover:text-golf-green-800">+44 (0) 123 456 7890</a>
                </div>
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-golf-gold-500 mr-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                  <a href="mailto:membership@onegolfclub.com" className="text-golf-green-700 hover:text-golf-green-800">membership@onegolfclub.com</a>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="absolute -top-6 -left-6 w-64 h-64 bg-golf-gold-100 rounded-lg"></div>
              <div className="relative z-10 h-[400px] w-full rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/media/pexels-jopwell-1325651.jpg"
                  alt="OGC Membership Team"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enquiry Form */}
      <section className="py-16 md:py-24 bg-golf-cream-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-golf-green-800 mb-4">
              Membership Enquiry Form
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complete the form below and a member of our team will be in touch
            </p>
            <div className="w-24 h-1 bg-golf-gold-400 mx-auto mt-6"></div>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-10">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                    First Name*
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-golf-green-500 focus:border-golf-green-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                    Last Name*
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-golf-green-500 focus:border-golf-green-500"
                    required
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address*
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-golf-green-500 focus:border-golf-green-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number*
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-golf-green-500 focus:border-golf-green-500"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="membershipInterest" className="block text-sm font-medium text-gray-700 mb-1">
                  Interested Membership Type
                </label>
                <select
                  id="membershipInterest"
                  name="membershipInterest"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-golf-green-500 focus:border-golf-green-500"
                >
                  <option value="">Please select (if known)</option>
                  <option value="executive">Executive Membership</option>
                  <option value="premier">Premier Membership</option>
                  <option value="classic">Classic Membership</option>
                  <option value="corporate">Corporate Membership</option>
                  <option value="unsure">Unsure - Would like guidance</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="playFrequency" className="block text-sm font-medium text-gray-700 mb-1">
                  How often do you currently play golf?
                </label>
                <select
                  id="playFrequency"
                  name="playFrequency"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-golf-green-500 focus:border-golf-green-500"
                >
                  <option value="">Please select</option>
                  <option value="weekly">Weekly or more</option>
                  <option value="fortnightly">Fortnightly</option>
                  <option value="monthly">Monthly</option>
                  <option value="quarterly">Quarterly</option>
                  <option value="occasionally">Occasionally</option>
                  <option value="new">New to golf</option>
                </select>
              </div>

              <div>
                <label htmlFor="howHeard" className="block text-sm font-medium text-gray-700 mb-1">
                  How did you hear about One Golf Club?
                </label>
                <select
                  id="howHeard"
                  name="howHeard"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-golf-green-500 focus:border-golf-green-500"
                >
                  <option value="">Please select</option>
                  <option value="search">Online search</option>
                  <option value="social">Social media</option>
                  <option value="friend">Friend or colleague</option>
                  <option value="magazine">Golf magazine</option>
                  <option value="event">Event or exhibition</option>
                  <option value="course">At a partner course</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="questions" className="block text-sm font-medium text-gray-700 mb-1">
                  Questions or Additional Information
                </label>
                <textarea
                  id="questions"
                  name="questions"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-golf-green-500 focus:border-golf-green-500"
                  placeholder="Please let us know any specific questions you have about our membership options..."
                ></textarea>
              </div>
              
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="brochure"
                    name="brochure"
                    type="checkbox"
                    className="h-4 w-4 text-golf-green-600 border-gray-300 rounded focus:ring-golf-green-500"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="brochure" className="text-gray-700">
                    I would like to receive a digital membership brochure
                  </label>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="callBack"
                    name="callBack"
                    type="checkbox"
                    className="h-4 w-4 text-golf-green-600 border-gray-300 rounded focus:ring-golf-green-500"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="callBack" className="text-gray-700">
                    I would prefer a call back rather than email communication
                  </label>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="privacy"
                    name="privacy"
                    type="checkbox"
                    className="h-4 w-4 text-golf-green-600 border-gray-300 rounded focus:ring-golf-green-500"
                    required
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="privacy" className="text-gray-700">
                    I agree to the <Link href="/privacy" className="text-golf-green-700 hover:text-golf-green-800 underline">Privacy Policy</Link> and consent to being contacted regarding my enquiry*
                  </label>
                </div>
              </div>
              
              <div className="flex justify-center pt-4">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-golf-green-700 hover:bg-golf-green-800 transition-colors duration-300"
                >
                  Submit Enquiry
                </button>
              </div>
              
              <p className="text-sm text-gray-500 text-center mt-4">
                *Required fields
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-golf-green-800 mb-4">
              What to Expect
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our straightforward process to help you find the perfect membership
            </p>
            <div className="w-24 h-1 bg-golf-gold-400 mx-auto mt-6"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-12">
            <div className="text-center">
              <div className="inline-flex items-center justify-center rounded-full bg-golf-green-100 p-4 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-golf-green-600">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                </svg>
              </div>
              <h3 className="text-lg font-display font-medium text-golf-green-800 mb-2">Prompt Response</h3>
              <p className="text-gray-600 text-sm">
                We'll contact you within 24 hours of receiving your enquiry to discuss your requirements.
              </p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center rounded-full bg-golf-green-100 p-4 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-golf-green-600">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                </svg>
              </div>
              <h3 className="text-lg font-display font-medium text-golf-green-800 mb-2">Personalized Consultation</h3>
              <p className="text-gray-600 text-sm">
                A dedicated membership advisor will discuss your golfing preferences and recommend options.
              </p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center rounded-full bg-golf-green-100 p-4 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-golf-green-600">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                </svg>
              </div>
              <h3 className="text-lg font-display font-medium text-golf-green-800 mb-2">Detailed Information</h3>
              <p className="text-gray-600 text-sm">
                We'll send you comprehensive information about membership options and answer any questions.
              </p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center rounded-full bg-golf-green-100 p-4 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-golf-green-600">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-display font-medium text-golf-green-800 mb-2">No Pressure</h3>
              <p className="text-gray-600 text-sm">
                Take your time to consider the options – we're here to help when you're ready to proceed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-golf-green-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern opacity-10 mix-blend-overlay pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-white mb-4">
              Member Experiences
            </h2>
            <div className="w-24 h-1 bg-golf-gold-400 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
              <p className="text-golf-cream-100 italic mb-6">
                "The membership team at OGC made the whole process so straightforward. They took the time to understand my golfing habits and recommended the perfect membership tier. I've been a member for eight months now and couldn't be happier."
              </p>
              <div className="flex items-center">
                <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image 
                    src="/media/pexels-jopwell-1325751.jpg" 
                    alt="Emily Thompson" 
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-medium text-white">Emily Thompson</h4>
                  <p className="text-golf-gold-300 text-sm">Premier Member since 2023</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
              <p className="text-golf-cream-100 italic mb-6">
                "Having been a member of a traditional golf club for years, I was initially hesitant about the OGC concept. After an informative call with the membership team, I decided to join. The variety of courses and flexibility has completely transformed my golfing experience."
              </p>
              <div className="flex items-center">
                <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image 
                    src="/media/pexels-markusspiske-114972.jpg" 
                    alt="Robert Grant" 
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-medium text-white">Robert Grant</h4>
                  <p className="text-golf-gold-300 text-sm">Executive Member since 2022</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
              <p className="text-golf-cream-100 italic mb-6">
                "As a business owner, I was looking for a corporate membership solution for client entertainment. The OGC team tailored a package specifically for our needs. The service has been exceptional and our clients have been thoroughly impressed."
              </p>
              <div className="flex items-center">
                <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image 
                    src="/media/pexels-jopwell-1325654.jpg" 
                    alt="James Wilson" 
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-medium text-white">James Wilson</h4>
                  <p className="text-golf-gold-300 text-sm">Corporate Member since 2023</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link href="/about/testimonials" className="inline-flex items-center justify-center text-golf-cream-100 hover:text-golf-gold-300">
              Read More Testimonials
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 ml-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQs Preview */}
      <section className="py-16 md:py-20 bg-golf-cream-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-golf-green-800 mb-4">
              Frequently Asked Questions
            </h2>
            <div className="w-24 h-1 bg-golf-gold-400 mx-auto"></div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-display font-medium text-golf-green-800 mb-3">How soon can I start playing after joining?</h3>
              <p className="text-gray-600">
                Once your application is approved and payment processed, you can start booking rounds immediately. Your membership welcome pack with physical materials will be dispatched within 3-5 working days.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-display font-medium text-golf-green-800 mb-3">Can I visit a course before deciding to join?</h3>
              <p className="text-gray-600">
                Yes, we can arrange a visit to one of our partner courses where you can meet a member of our team, tour the facilities, and discuss membership options in person. Please contact us to arrange this.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-display font-medium text-golf-green-800 mb-3">What is the minimum membership period?</h3>
              <p className="text-gray-600">
                Our standard memberships are for 12 months, though we do offer some flexibility. Monthly payment options require a 12-month commitment. Please discuss your specific needs with our membership team.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-10">
            <Link href="/membership/faqs" className="inline-flex items-center justify-center text-golf-green-700 hover:text-golf-green-800 font-medium">
              View all FAQs
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 ml-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-golf-green-800 mb-6">
            Ready to Join One Golf Club?
          </h2>
          <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
            Take the first step toward an unparalleled golfing experience. Apply for membership today.
          </p>
          <Link href="/membership/join" className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-golf-green-700 hover:bg-golf-green-800 transition-colors duration-300">
            Apply for Membership
          </Link>
        </div>
      </section>
    </div>
  );
};

export default MembershipEnquiriesPage; 