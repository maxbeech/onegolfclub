import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'News & Updates | One Golf Club',
  description: 'Stay up to date with the latest news, events, and updates from One Golf Club and our partner courses.',
  keywords: 'golf news, OGC updates, golf club news, golf events, golf tournaments'
};

// Define news article type
type NewsArticle = {
  id: number;
  title: string;
  date: string;
  excerpt: string;
  image: string;
  category: string;
  slug: string;
};

const NewsPage = () => {
  // Sample news articles (in real implementation, this would come from a CMS or API)
  const articles: NewsArticle[] = [
    {
      id: 1,
      title: 'OGC Collection: Royal Ascot GC',
      date: 'March 15, 2024',
      excerpt: 'Rich in history and poised for the future, Royal Ascot Golf Club offers a rare mix of tradition and a fantastic golfing experience.',
      image: '/media/Blog post images/Royal-Ascot-Image-768x480.webp',
      category: 'Partner Courses',
      slug: 'ogc-collection-royal-ascot-gc'
    },
    {
      id: 2,
      title: 'OGC Collection: Inspirations GC',
      date: 'March 10, 2024',
      excerpt: 'Co-designed by Mackenzie and Ebert – Inspired by the greatest links holes in the UK.',
      image: '/media/Blog post images/Inspirations-GC-Image-768x512.webp',
      category: 'Partner Courses',
      slug: 'ogc-collection-inspirations-gc'
    },
    {
      id: 3,
      title: 'OGC Collection: Clandon Regis GC',
      date: 'March 5, 2024',
      excerpt: 'The OGC Collection Welcomes Clandon Regis GC',
      image: '/media/Blog post images/Candon-Regis-768x523.webp',
      category: 'Partner Courses',
      slug: 'ogc-collection-clandon-regis-gc'
    },
    {
      id: 4,
      title: 'OGC Welcomes Royal Navy Clearance Divers',
      date: 'March 1, 2024',
      excerpt: 'Royal Navy Clearance Divers enjoy a round on the Carrick, Cameron House, Loch Lomond, courtesy of One Golf Club.',
      image: '/media/Blog post images/IMG-20240801-WA0003-768x578.webp',
      category: 'Events',
      slug: 'ogc-welcomes-royal-navy-clearance-divers'
    }
  ];

  // Categories for filtering
  const categories = [
    'All Categories',
    'Partner Courses',
    'Events',
    'Membership',
    'Tournaments',
    'Golf Tips'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/media/pexels-jopwell-1325654.jpg"
          alt="OGC News"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold text-white mb-6">
            News & <span className="text-golf-gold-400">Updates</span>
          </h1>
          <p className="text-xl md:text-2xl text-golf-cream-100 max-w-3xl mx-auto">
            Stay up to date with the latest from One Golf Club
          </p>
        </div>
      </div>

      {/* News Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 rounded-full text-sm font-medium bg-golf-cream-50 text-golf-green-800 hover:bg-golf-green-100 transition-colors duration-300"
              >
                {category}
              </button>
            ))}
          </div>

          {/* News Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <article key={article.id} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-48">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-medium text-golf-gold-600">
                      {article.category}
                    </span>
                    <span className="text-sm text-gray-500">
                      {article.date}
                    </span>
                  </div>
                  <h2 className="text-xl font-display font-semibold text-golf-green-800 mb-3">
                    {article.title}
                  </h2>
                  <p className="text-gray-600 mb-4">
                    {article.excerpt}
                  </p>
                  <Link
                    href={`/news/${article.slug}`}
                    className="inline-flex items-center text-golf-green-700 font-medium hover:text-golf-green-800 transition-colors"
                  >
                    Read More
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-12 flex justify-center">
            <nav className="flex items-center space-x-2">
              <button className="px-3 py-2 rounded-md bg-golf-cream-50 text-golf-green-800 hover:bg-golf-green-100 transition-colors duration-300">
                Previous
              </button>
              <button className="px-3 py-2 rounded-md bg-golf-green-700 text-white">
                1
              </button>
              <button className="px-3 py-2 rounded-md bg-golf-cream-50 text-golf-green-800 hover:bg-golf-green-100 transition-colors duration-300">
                2
              </button>
              <button className="px-3 py-2 rounded-md bg-golf-cream-50 text-golf-green-800 hover:bg-golf-green-100 transition-colors duration-300">
                3
              </button>
              <button className="px-3 py-2 rounded-md bg-golf-cream-50 text-golf-green-800 hover:bg-golf-green-100 transition-colors duration-300">
                Next
              </button>
            </nav>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 md:py-24 bg-golf-green-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern opacity-10 mix-blend-overlay pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-white mb-6">
              Stay Updated
            </h2>
            <p className="text-xl text-golf-cream-100 max-w-3xl mx-auto mb-8">
              Subscribe to our newsletter for the latest news, events, and exclusive offers
            </p>
            <form className="max-w-md mx-auto">
              <div className="flex gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-golf-gold-400"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-golf-gold-400 text-golf-green-900 font-medium rounded-md hover:bg-golf-gold-500 transition-colors duration-300"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewsPage; 