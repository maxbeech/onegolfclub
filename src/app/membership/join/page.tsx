import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Join One Golf Club | Membership Application',
  description: 'Apply for One Golf Club membership and gain access to 50+ prestigious golf courses across the UK. Complete your membership application today.',
  keywords: 'join golf club, golf membership application, OGC membership, apply for golf membership'
};

const JoinPage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/media/pexels-thomasleeward-2828723.jpg"
          alt="Join One Golf Club"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold text-white mb-6">
            Join <span className="text-golf-gold-400">One Golf Club</span>
          </h1>
          <p className="text-xl md:text-2xl text-golf-cream-100 max-w-3xl mx-auto">
            Begin your application for membership today
          </p>
        </div>
      </div>

      {/* Introduction Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-display font-semibold text-golf-green-800 mb-6">
                Application Process
              </h2>
              <div className="prose prose-lg max-w-none text-gray-600">
                <p>
                  Thank you for your interest in joining One Golf Club. Our application process is designed to be straightforward while ensuring we can provide the exceptional service our members expect.
                </p>
                <p>
                  Once you submit your application, a member of our team will contact you within 48 hours to discuss your golfing preferences, answer any questions, and guide you through the next steps, which include:
                </p>
                <ul>
                  <li>A brief phone consultation to understand your golfing needs</li>
                  <li>Processing of your application and verification of details</li>
                  <li>Payment of joining fee and first membership installment</li>
                  <li>Setup of your member profile and account access</li>
                  <li>Delivery of your welcome pack and membership materials</li>
                </ul>
                <p>
                  Please complete the form with your details, and we look forward to welcoming you to the One Golf Club community.
                </p>
              </div>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="absolute -top-6 -right-6 w-64 h-64 bg-golf-gold-100 rounded-lg"></div>
              <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/media/pexels-jopwell-1325653.jpg"
                  alt="OGC Members"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16 md:py-24 bg-golf-cream-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-golf-green-800 mb-4">
              Membership Application
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Please complete all fields to begin your application
            </p>
            <div className="w-24 h-1 bg-golf-gold-400 mx-auto mt-6"></div>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-10">
            <form className="space-y-8">
              {/* Personal Information */}
              <div>
                <h3 className="text-xl font-display font-medium text-golf-green-800 mb-6">Personal Information</h3>
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
              </div>
              
              {/* Address */}
              <div>
                <h3 className="text-xl font-display font-medium text-golf-green-800 mb-6">Address</h3>
                <div className="space-y-6">
                  <div>
                    <label htmlFor="address1" className="block text-sm font-medium text-gray-700 mb-1">
                      Address Line 1*
                    </label>
                    <input
                      type="text"
                      id="address1"
                      name="address1"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-golf-green-500 focus:border-golf-green-500"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="address2" className="block text-sm font-medium text-gray-700 mb-1">
                      Address Line 2
                    </label>
                    <input
                      type="text"
                      id="address2"
                      name="address2"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-golf-green-500 focus:border-golf-green-500"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                        City/Town*
                      </label>
                      <input
                        type="text"
                        id="city"
                        name="city"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-golf-green-500 focus:border-golf-green-500"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="county" className="block text-sm font-medium text-gray-700 mb-1">
                        County
                      </label>
                      <input
                        type="text"
                        id="county"
                        name="county"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-golf-green-500 focus:border-golf-green-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="postcode" className="block text-sm font-medium text-gray-700 mb-1">
                        Postcode*
                      </label>
                      <input
                        type="text"
                        id="postcode"
                        name="postcode"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-golf-green-500 focus:border-golf-green-500"
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Golf Experience */}
              <div>
                <h3 className="text-xl font-display font-medium text-golf-green-800 mb-6">Golf Experience</h3>
                <div className="space-y-6">
                  <div>
                    <label htmlFor="handicap" className="block text-sm font-medium text-gray-700 mb-1">
                      Handicap (if applicable)
                    </label>
                    <input
                      type="text"
                      id="handicap"
                      name="handicap"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-golf-green-500 focus:border-golf-green-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="currentClub" className="block text-sm font-medium text-gray-700 mb-1">
                      Current/Previous Golf Club
                    </label>
                    <input
                      type="text"
                      id="currentClub"
                      name="currentClub"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-golf-green-500 focus:border-golf-green-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="playFrequency" className="block text-sm font-medium text-gray-700 mb-1">
                      How often do you play golf?*
                    </label>
                    <select
                      id="playFrequency"
                      name="playFrequency"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-golf-green-500 focus:border-golf-green-500"
                      required
                    >
                      <option value="">Please select</option>
                      <option value="weekly">Weekly or more</option>
                      <option value="fortnightly">Fortnightly</option>
                      <option value="monthly">Monthly</option>
                      <option value="quarterly">Quarterly</option>
                      <option value="occasionally">Occasionally</option>
                    </select>
                  </div>
                </div>
              </div>
              
              {/* Membership Options */}
              <div>
                <h3 className="text-xl font-display font-medium text-golf-green-800 mb-6">Membership Preference</h3>
                <div className="space-y-6">
                  <div>
                    <label htmlFor="membershipType" className="block text-sm font-medium text-gray-700 mb-1">
                      Preferred Membership Type*
                    </label>
                    <select
                      id="membershipType"
                      name="membershipType"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-golf-green-500 focus:border-golf-green-500"
                      required
                    >
                      <option value="">Please select</option>
                      <option value="executive">Executive (£3,995/year)</option>
                      <option value="premier">Premier (£2,495/year)</option>
                      <option value="classic">Classic (£1,495/year)</option>
                      <option value="corporate">Corporate (Please specify in comments)</option>
                      <option value="unsure">Unsure - Would like guidance</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="paymentPreference" className="block text-sm font-medium text-gray-700 mb-1">
                      Preferred Payment Option*
                    </label>
                    <select
                      id="paymentPreference"
                      name="paymentPreference"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-golf-green-500 focus:border-golf-green-500"
                      required
                    >
                      <option value="">Please select</option>
                      <option value="annual">Annual payment</option>
                      <option value="monthly">Monthly installments</option>
                      <option value="quarterly">Quarterly payments</option>
                      <option value="unsure">Unsure - Would like guidance</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="comments" className="block text-sm font-medium text-gray-700 mb-1">
                      Additional Comments or Questions
                    </label>
                    <textarea
                      id="comments"
                      name="comments"
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-golf-green-500 focus:border-golf-green-500"
                    ></textarea>
                  </div>
                </div>
              </div>
              
              {/* Marketing Preferences */}
              <div>
                <h3 className="text-xl font-display font-medium text-golf-green-800 mb-6">Marketing Preferences</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="emailUpdates"
                        name="emailUpdates"
                        type="checkbox"
                        className="h-4 w-4 text-golf-green-600 border-gray-300 rounded focus:ring-golf-green-500"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="emailUpdates" className="text-gray-700">
                        I would like to receive email updates about events, promotions, and news from One Golf Club
                      </label>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">
                      We respect your privacy and will never share your personal information with third parties without your consent. 
                      You can unsubscribe from our communications at any time.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Terms and Conditions */}
              <div className="border-t border-gray-200 pt-6">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="terms"
                      name="terms"
                      type="checkbox"
                      className="h-4 w-4 text-golf-green-600 border-gray-300 rounded focus:ring-golf-green-500"
                      required
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="terms" className="font-medium text-gray-700">
                      I accept the <Link href="/terms" className="text-golf-green-700 hover:text-golf-green-800 underline">Terms and Conditions</Link> and <Link href="/privacy" className="text-golf-green-700 hover:text-golf-green-800 underline">Privacy Policy</Link>*
                    </label>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-golf-green-700 hover:bg-golf-green-800 transition-colors duration-300"
                >
                  Submit Application
                </button>
              </div>
              
              <p className="text-sm text-gray-500 text-center">
                *Required fields
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-golf-green-800 mb-4">
              Next Steps
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              What happens after you submit your application
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
              <h3 className="text-lg font-display font-medium text-golf-green-800 mb-2">Confirmation</h3>
              <p className="text-gray-600 text-sm">
                You'll receive an immediate email confirmation of your application submission.
              </p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center rounded-full bg-golf-green-100 p-4 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-golf-green-600">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
              </div>
              <h3 className="text-lg font-display font-medium text-golf-green-800 mb-2">Personal Contact</h3>
              <p className="text-gray-600 text-sm">
                A membership advisor will contact you within 48 hours to discuss your application.
              </p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center rounded-full bg-golf-green-100 p-4 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-golf-green-600">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
                </svg>
              </div>
              <h3 className="text-lg font-display font-medium text-golf-green-800 mb-2">Payment Processing</h3>
              <p className="text-gray-600 text-sm">
                Secure payment processing for your joining fee and first membership payment.
              </p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center rounded-full bg-golf-green-100 p-4 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-golf-green-600">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                </svg>
              </div>
              <h3 className="text-lg font-display font-medium text-golf-green-800 mb-2">Welcome Pack</h3>
              <p className="text-gray-600 text-sm">
                Receive your membership pack, including your OGC card and member handbook.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Help Section */}
      <section className="py-16 md:py-20 bg-golf-cream-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-golf-green-800 mb-6">
            Need Assistance?
          </h2>
          <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
            If you have any questions about the application process or membership options, our team is here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-golf-green-700 hover:bg-golf-green-800 transition-colors duration-300">
              Contact Us
            </Link>
            <Link href="/membership/faqs" className="inline-flex items-center justify-center px-6 py-3 border border-golf-green-700 text-base font-medium rounded-md text-golf-green-700 bg-transparent hover:bg-golf-green-700 hover:text-white transition-colors duration-300">
              View FAQs
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default JoinPage; 