'use client';

import { useState, useEffect, Fragment } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Popover, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

// Disclosure component for mobile dropdown menus
interface DisclosureProps {
  item: {
    name: string;
    href: string;
    children: Array<{ name: string; href: string }>;
  };
  pathname: string | null;
  setIsMobileMenuOpen: (isOpen: boolean) => void;
}

const Disclosure = ({ item, pathname, setIsMobileMenuOpen }: DisclosureProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        className={`flex justify-between items-center w-full px-3 py-2 rounded-md text-base font-medium text-left ${
          pathname?.startsWith(item.href)
            ? 'bg-golf-green-50 text-golf-green-700'
            : 'text-gray-800 hover:bg-gray-50 hover:text-golf-green-700'
        }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {item.name}
        <ChevronDownIcon
          className={`ml-1 h-5 w-5 transform transition-transform duration-200 text-golf-gold-500 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="ml-4 mt-1 space-y-0.5">
              {item.children.map((subItem) => (
                <Link
                  key={subItem.name}
                  href={subItem.href}
                  className={`block px-3 py-2 rounded-md text-sm font-medium ${
                    pathname === subItem.href
                      ? 'bg-golf-green-50 text-golf-green-700'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-golf-green-700'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {subItem.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isMobileMenuOpen && !target.closest('.mobile-menu-container')) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMobileMenuOpen]);

  // Navigation structure with dropdown menus
  const navigation = [
    { name: 'Home', href: '/' },
    {
      name: 'About', 
      href: '/about',
      children: [
        { name: 'About OGC', href: '/about' },
        { name: 'Our Concept', href: '/concept' },
        { name: 'Our Team', href: '/about/team' },
        { name: 'Testimonials', href: '/about/testimonials' },
      ],
    },
    {
      name: 'Membership', 
      href: '/membership',
      children: [
        { name: 'Membership Benefits', href: '/membership' },
        { name: 'Pricing & Tiers', href: '/membership/pricing' },
        { name: 'Join Now', href: '/membership/join' },
        { name: 'FAQs', href: '/membership/faqs' },
      ],
    },
    {
      name: 'Courses', 
      href: '/courses',
      children: [
        { name: 'Course Map', href: '/courses' },
        { name: 'UK Courses', href: '/courses/uk' },
        { name: 'International Affiliations', href: '/courses/international' },
        { name: 'Course Ratings', href: '/courses/ratings' },
      ],
    },
    {
      name: 'Services', 
      href: '/services',
      children: [
        { name: 'Corporate Hospitality', href: '/services/corporate-hospitality' },
        { name: 'Society Days', href: '/services/society-days' },
        { name: 'Event Management', href: '/services/event-management' },
        { name: 'Golf Concierge', href: '/services/concierge' },
      ],
    },
    { name: 'News', href: '/news' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="fixed w-full z-50 transition-all duration-300">
      {/* Secondary Nav - Members Area Links */}
      <div className={`w-full py-3 transition-colors duration-300 ${
        isScrolled ? 'bg-golf-gold-50 text-golf-green-800 border-b border-golf-gold-200' : 'bg-golf-green-800 text-white'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-end">
          <div className="hidden lg:flex space-x-8 text-sm font-medium">
            <Link 
              href="/membership/enquiries" 
              className={`transition-colors duration-300 ${
                isScrolled ? 'hover:text-golf-gold-700' : 'hover:text-golf-gold-300'
              }`}
            >
              Membership Enquiries
            </Link>
            <Link 
              href="/members-pages" 
              className={`transition-colors duration-300 ${
                isScrolled ? 'hover:text-golf-gold-700' : 'hover:text-golf-gold-300'
              }`}
            >
              Members' Pages
            </Link>
            <Link 
              href="/members-login" 
              className={`transition-colors duration-300 ${
                isScrolled ? 'hover:text-golf-gold-700' : 'hover:text-golf-gold-300'
              }`}
            >
              Members Login
            </Link>
          </div>
        </div>
      </div>
      
      {/* Main Navigation */}
      <div className={`w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md'
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <motion.div 
              className="flex-shrink-0 flex items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Link href="/" className="flex items-center space-x-3">
                <Image
                  src="/media/logo-icon_only.png"
                  alt="One Golf Club Logo"
                  width={50}
                  height={50}
                  className="w-12 h-12"
                />
                <div className="flex flex-col">
                  <span className={`text-xl font-display font-semibold tracking-tight transition-colors duration-300 ${
                    isScrolled ? 'text-golf-green-800' : 'text-white'
                  }`}>
                    One Golf Club
                  </span>
                  <span className={`text-xs font-medium transition-colors duration-300 ${
                    isScrolled ? 'text-golf-gold-600' : 'text-golf-gold-300'
                  }`}>
                    Premium Golf Experience
                  </span>
                </div>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex lg:items-center lg:space-x-1">
              {navigation.map((item) => (
                !item.children ? (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`px-3 py-2 text-sm font-medium rounded-md transition-all duration-300 hover:scale-105 ${
                      pathname === item.href
                        ? isScrolled
                          ? 'text-golf-green-800 bg-golf-green-50'
                          : 'text-white bg-white/10 backdrop-blur-sm'
                        : isScrolled
                          ? 'text-gray-800 hover:text-golf-green-700'
                          : 'text-white hover:bg-white/10'
                    }`}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <Popover key={item.name} className="relative">
                    {({ open }) => (
                      <>
                        <Popover.Button
                          className={`group inline-flex items-center px-3 py-2 text-sm font-medium rounded-md outline-none transition-all duration-300 hover:scale-105 ${
                            pathname?.startsWith(item.href)
                              ? isScrolled
                                ? 'text-golf-green-800 bg-golf-green-50'
                                : 'text-white bg-white/10 backdrop-blur-sm'
                              : isScrolled
                                ? 'text-gray-800 hover:text-golf-green-700'
                                : 'text-white hover:bg-white/10'
                          }`}
                        >
                          <span>{item.name}</span>
                          <ChevronDownIcon
                            className={`ml-1 h-4 w-4 transform transition-transform duration-200 ${
                              open ? 'rotate-180' : ''
                            } ${
                              isScrolled ? 'text-golf-gold-600' : 'text-golf-gold-300'
                            }`}
                            aria-hidden="true"
                          />
                        </Popover.Button>

                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-200"
                          enterFrom="opacity-0 translate-y-1"
                          enterTo="opacity-100 translate-y-0"
                          leave="transition ease-in duration-150"
                          leaveFrom="opacity-100 translate-y-0"
                          leaveTo="opacity-0 translate-y-1"
                        >
                          <Popover.Panel className="absolute z-10 mt-2 w-56 transform px-2 sm:px-0">
                            <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                              <div className="relative grid gap-1 bg-white p-2">
                                {item.children.map((subItem) => (
                                  <Link
                                    key={subItem.name}
                                    href={subItem.href}
                                    className="flex items-center rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-golf-green-50 hover:text-golf-green-700 transition-colors"
                                  >
                                    {subItem.name}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          </Popover.Panel>
                        </Transition>
                      </>
                    )}
                  </Popover>
                )
              ))}
              <Link
                href="/membership/join"
                className="ml-2 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-golf-green-700 hover:bg-golf-green-800 transition-all duration-300 hover:scale-105 shadow-md"
              >
                Join Now
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center lg:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`p-2 rounded-md transition-colors duration-300 ${
                  isScrolled
                    ? 'text-gray-900 hover:text-golf-green-700'
                    : 'text-white hover:text-golf-gold-300'
                }`}
                aria-expanded={isMobileMenuOpen}
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className={`h-6 w-6 ${isMobileMenuOpen ? 'hidden' : 'block'}`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
                <svg
                  className={`h-6 w-6 ${isMobileMenuOpen ? 'block' : 'hidden'}`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu panel */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden mobile-menu-container bg-white shadow-lg overflow-hidden"
          >
            <div className="px-4 pt-4 pb-6 space-y-2">
              {navigation.map((item) => (
                <div key={item.name} className="py-1">
                  {!item.children ? (
                    <Link
                      href={item.href}
                      className={`block px-3 py-2 rounded-md text-base font-medium ${
                        pathname === item.href
                          ? 'bg-golf-green-50 text-golf-green-700'
                          : 'text-gray-800 hover:bg-gray-50 hover:text-golf-green-700'
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <Disclosure item={item} pathname={pathname} setIsMobileMenuOpen={setIsMobileMenuOpen} />
                  )}
                </div>
              ))}
              <div className="pt-2">
                <Link
                  href="/membership/join"
                  className="block w-full text-center px-4 py-3 rounded-md font-medium bg-golf-green-700 text-white hover:bg-golf-green-800 transition-colors shadow-md"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Join Now
                </Link>
              </div>
              <div className="pt-4 border-t border-gray-200">
                <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm">
                  <Link
                    href="/membership/enquiries"
                    className="text-gray-600 hover:text-golf-gold-700"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Membership Enquiries
                  </Link>
                  <Link
                    href="/members-pages"
                    className="text-gray-600 hover:text-golf-gold-700"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Members' Pages
                  </Link>
                  <Link
                    href="/members-login"
                    className="text-gray-600 hover:text-golf-gold-700"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Members Login
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar; 