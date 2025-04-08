'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Define the types of media we can display
type MediaType = 'image' | 'video';

// Define a media item structure
interface MediaItem {
  src: string;
  type: MediaType;
  alt?: string;
}

// Sample media items - these would typically come from a CMS or API
const mediaItems: MediaItem[] = [
  {
    src: '/media/home_hero_slider/342-136015993_small.mp4',
    type: 'video',
  },
  {
    src: '/media/home_hero_slider/18528-293467377_small.mp4',
    type: 'video',
  },
  {
    src: '/media/home_hero_slider/46033-447095322_small.mov',
    type: 'video',
  },
  {
    src: '/media/home_hero_slider/213148_large.mp4',
    type: 'video',
  },
  {
    src: '/media/home_hero_slider/214267_tiny.mp4',
    type: 'video',
  },
  {
    src: '/media/home_hero_slider/241743_small.mp4',
    type: 'video',
  },
  {
    src: '/media/home_hero_slider/18528-293467377_small.mp4',
    type: 'video',
  },
  {
    src: '/media/home_hero_slider/45301-442657794_tiny.mp4',
    type: 'video',
  },
];

interface HeroSliderProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
}

const HeroSlider = ({ title, subtitle, ctaText, ctaLink }: HeroSliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  // Client-side detection to avoid hydration mismatch
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Set up the slider to automatically advance
  useEffect(() => {
    if (!isClient) return;
    
    const interval = setInterval(() => {
      // Advance to next slide
      setCurrentIndex((prevIndex) => (prevIndex + 1) % mediaItems.length);
    }, 8000); // Change slide every 8 seconds

    return () => clearInterval(interval);
  }, [isClient]);

  // Handle video playback based on which slide is active
  useEffect(() => {
    if (!isClient) return;
    
    if (mediaItems[currentIndex].type === 'video') {
      // Pause all videos first
      videoRefs.current.forEach((videoRef, index) => {
        if (videoRef) {
          videoRef.pause();
          // Reset videos that aren't current to starting position
          if (index !== currentIndex) {
            videoRef.currentTime = 0;
          }
        }
      });

      // Play the current video
      const currentVideo = videoRefs.current[currentIndex];
      if (currentVideo) {
        const playPromise = currentVideo.play();
        // Handle potential play() rejection (e.g., autoplay policies)
        if (playPromise !== undefined) {
          playPromise.catch(error => {
            console.error('Video play error:', error);
          });
        }
      }
    }
  }, [currentIndex, isClient]);

  // Effect to handle visibility
  useEffect(() => {
    if (!isClient || !inView) {
      // Pause all videos when not in view
      videoRefs.current.forEach(videoRef => {
        if (videoRef) videoRef.pause();
      });
    } else {
      // Resume current video when in view
      const currentVideo = videoRefs.current[currentIndex];
      if (currentVideo && mediaItems[currentIndex].type === 'video') {
        currentVideo.play().catch(error => {
          console.error('Video resume error:', error);
        });
      }
    }
  }, [inView, currentIndex, isClient]);

  return (
    <div ref={ref} className="relative h-screen w-full overflow-hidden">
      {/* Video/Image Slides */}
      <div className="absolute inset-0 z-0">
        {isClient ? (
          <AnimatePresence>
            {mediaItems.map((media, index) => (
              index === currentIndex && (
                <motion.div
                  key={`media-${index}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1.5 }}
                  className="absolute inset-0 h-full w-full"
                >
                  {media.type === 'image' ? (
                    <Image
                      src={media.src}
                      alt={media.alt || 'One Golf Club'}
                      fill
                      priority={index === 0}
                      style={{ objectFit: 'cover' }}
                      onLoad={() => setIsLoaded(true)}
                    />
                  ) : (
                    <video
                      ref={(el) => {
                        videoRefs.current[index] = el;
                      }}
                      className="h-full w-full object-cover"
                      src={media.src}
                      muted
                      playsInline
                      loop
                    />
                  )}
                </motion.div>
              )
            ))}
          </AnimatePresence>
        ) : (
          // Server-side placeholder
          <div className="absolute inset-0 bg-golf-green-900"></div>
        )}
      </div>

      {/* Dark overlay with pattern */}
      <div className="absolute inset-0 z-10 bg-black/40 mix-blend-multiply"></div>
      <div className="absolute inset-0 z-20 bg-hero-pattern opacity-20 mix-blend-overlay"></div>

      {/* Content overlay */}
      <div className="relative z-30 h-full flex flex-col items-center justify-center text-white px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-semibold mb-6 tracking-tight">
            <span className="text-white">{title}</span>
          </h1>
          <p className="text-xl sm:text-2xl mb-8 text-golf-cream-100 max-w-3xl mx-auto leading-relaxed">
            {subtitle}
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <a
              href={ctaLink}
              className="inline-block px-8 py-4 bg-golf-green-700 text-white font-medium rounded-md shadow-gold hover:bg-golf-green-800 transition-all duration-300 transform hover:scale-105"
            >
              {ctaText}
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Slider indicators */}
      <div className="absolute bottom-8 left-0 right-0 z-30 flex justify-center space-x-2">
        {mediaItems.map((_, index) => (
          <button
            key={`indicator-${index}`}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'bg-golf-gold-400 w-8' : 'bg-white/50 hover:bg-white/80'
            }`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider; 