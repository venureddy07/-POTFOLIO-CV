import React, { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0.5, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 50 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="fixed bottom-6 right-6 z-40 p-3 rounded-xl bg-gradient-to-r from-accent-purple to-accent-cyan text-white shadow-glow-cyan hover:shadow-[0_0_20px_rgba(6,182,212,0.6)] cursor-pointer focus:outline-none focus:ring-2 focus:ring-accent-cyan hover:-translate-y-1.5 transition-transform duration-300"
          aria-label="Scroll to top of page"
        >
          <ArrowUp className="w-5 h-5 animate-pulse" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
