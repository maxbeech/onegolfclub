'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 bg-hero-pattern opacity-5 mix-blend-overlay pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="space-y-6">
            <div className="flex items-center">
              <Image
                src="/media/logo-icon_only.png"
                alt="One Golf Club Logo"
                width={60}
                height={60}
                className="mr-3"
              />
              <div>
                <h2 className="text-xl font-display font-semibold text-golf-gold-400">One Golf Club</h2>
                <p className="text-golf-cream-200 text-sm">Premium Golf Experience</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              One Golf Club is the ultimate private members club and event management company, offering playing privileges across over 50 golf courses under one membership.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" 
                 className="w-9 h-9 rounded-full flex items-center justify-center bg-gray-800 text-golf-gold-400 hover:bg-golf-gold-500 hover:text-white transition-all duration-300">
                <FaFacebookF size={16} />
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" 
                 className="w-9 h-9 rounded-full flex items-center justify-center bg-gray-800 text-golf-gold-400 hover:bg-golf-gold-500 hover:text-white transition-all duration-300">
                <FaTwitter size={16} />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" 
                 className="w-9 h-9 rounded-full flex items-center justify-center bg-gray-800 text-golf-gold-400 hover:bg-golf-gold-500 hover:text-white transition-all duration-300">
                <FaInstagram size={16} />
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" 
                 className="w-9 h-9 rounded-full flex items-center justify-center bg-gray-800 text-golf-gold-400 hover:bg-golf-gold-500 hover:text-white transition-all duration-300">
                <FaLinkedinIn size={16} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-golf-gold-400 font-display text-lg font-medium mb-5">Club Links</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/membership" className="text-gray-300 hover:text-golf-gold-300 transition-colors duration-300 flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-golf-gold-500 mr-2"></span>
                  Membership Options
                </Link>
              </li>
              <li>
                <Link href="/courses" className="text-gray-300 hover:text-golf-gold-300 transition-colors duration-300 flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-golf-gold-500 mr-2"></span>
                  Our Courses
                </Link>
              </li>
              <li>
                <Link href="/corporate" className="text-gray-300 hover:text-golf-gold-300 transition-colors duration-300 flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-golf-gold-500 mr-2"></span>
                  Corporate Hospitality
                </Link>
              </li>
              <li>
                <Link href="/society-days" className="text-gray-300 hover:text-golf-gold-300 transition-colors duration-300 flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-golf-gold-500 mr-2"></span>
                  Society Days
                </Link>
              </li>
              <li>
                <Link href="/news" className="text-gray-300 hover:text-golf-gold-300 transition-colors duration-300 flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-golf-gold-500 mr-2"></span>
                  Club News
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-gray-300 hover:text-golf-gold-300 transition-colors duration-300 flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-golf-gold-500 mr-2"></span>
                  Events Calendar
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-golf-gold-400 font-display text-lg font-medium mb-5">Information</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-golf-gold-300 transition-colors duration-300 flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-golf-gold-500 mr-2"></span>
                  About OGC
                </Link>
              </li>
              <li>
                <Link href="/concept" className="text-gray-300 hover:text-golf-gold-300 transition-colors duration-300 flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-golf-gold-500 mr-2"></span>
                  OGC Concept
                </Link>
              </li>
              <li>
                <Link href="/members-pages" className="text-gray-300 hover:text-golf-gold-300 transition-colors duration-300 flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-golf-gold-500 mr-2"></span>
                  Members' Pages
                </Link>
              </li>
              <li>
                <Link href="/terms-conditions" className="text-gray-300 hover:text-golf-gold-300 transition-colors duration-300 flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-golf-gold-500 mr-2"></span>
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-gray-300 hover:text-golf-gold-300 transition-colors duration-300 flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-golf-gold-500 mr-2"></span>
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-golf-gold-300 transition-colors duration-300 flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-golf-gold-500 mr-2"></span>
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-golf-gold-400 font-display text-lg font-medium mb-5">Head Office</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex">
                <span className="text-golf-gold-400 mr-2">Address:</span>
                <div>
                  <p>SBC House</p>
                  <p>Restmor Way</p>
                  <p>Wallington</p>
                  <p>SM6 7AH</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-golf-gold-400 mr-2">Tel:</span>
                <a href="tel:02082552030" className="hover:text-golf-gold-300 transition-colors">
                  020 8255 2030
                </a>
              </li>
              <li className="flex items-start">
                <span className="text-golf-gold-400 mr-2">Mobile:</span>
                <a href="tel:+447484834266" className="hover:text-golf-gold-300 transition-colors">
                  +44 7484 834266
                </a>
              </li>
              <li className="flex items-start">
                <span className="text-golf-gold-400 mr-2">Email:</span>
                <a href="mailto:info@onegolfclub.co.uk" className="hover:text-golf-gold-300 transition-colors">
                  info@onegolfclub.co.uk
                </a>
              </li>
              <li className="pt-3">
                <p className="text-gray-400 text-xs">Company Reg: 10690867</p>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between text-gray-400 text-sm">
          <p className="mb-4 md:mb-0">&copy; {new Date().getFullYear()} One Golf Club Ltd. All rights reserved.</p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <Link href="/terms-conditions" className="hover:text-golf-gold-300 transition-colors duration-300">Terms & Conditions</Link>
            <Link href="/privacy-policy" className="hover:text-golf-gold-300 transition-colors duration-300">Privacy Policy</Link>
            <Link href="/sitemap.xml" className="hover:text-golf-gold-300 transition-colors duration-300">Sitemap</Link>
            <span className="text-golf-green-600">100% Green Web</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 