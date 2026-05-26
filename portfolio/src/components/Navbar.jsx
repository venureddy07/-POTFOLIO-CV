import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from './ThemeToggle.jsx';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { label: 'Home', id: 'hero' },
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Experience', id: 'experience' },
    { label: 'Projects', id: 'projects' },
    { label: 'Certifications', id: 'certifications' },
    { label: 'Education', id: 'education' },
    { label: 'Contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress percent
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }

      // Check if scrolled past hero to adjust navbar opacity
      setIsScrolled(window.scrollY > 50);

      // Simple active section detection based on scrolling offsets
      const scrollPosition = window.scrollY + 200;
      for (const link of navLinks) {
        const el = document.getElementById(link.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(link.id);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (id) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of floating navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 px-4 md:px-8 py-4 ${
        isScrolled ? 'top-2' : 'top-0'
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className={`mx-auto max-w-6xl rounded-2xl transition-all duration-500 overflow-hidden ${
        isScrolled 
          ? 'glassmorphism shadow-[0_10px_30px_rgba(0,0,0,0.5)] border border-white/10 px-6 py-3' 
          : 'bg-transparent py-4 px-4 border border-transparent'
      }`}>
        {/* Scroll Progress Bar */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-white/5">
          <motion.div 
            className="h-full bg-gradient-to-r from-accent-purple to-accent-cyan"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>

        <div className="flex justify-between items-center relative">
          {/* Logo Name */}
          <button 
            onClick={() => handleLinkClick('hero')}
            className="flex items-center space-x-2 text-left cursor-pointer group focus:outline-none"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-accent-purple to-accent-cyan flex items-center justify-center font-bold text-sm text-white shadow-glow-purple group-hover:rotate-12 transition-transform duration-300">
              PVR
            </div>
            <span className="hidden sm:inline font-bold tracking-tight text-white dark:text-white group-hover:text-accent-cyan transition-colors duration-300">
              Venugopal Reddy
            </span>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`relative px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-lg transition-all duration-300 cursor-pointer ${
                  activeSection === link.id
                    ? 'text-accent-cyan font-bold'
                    : 'text-dark-text/70 dark:text-white/60 hover:text-white dark:hover:text-white hover:bg-white/5'
                }`}
              >
                {link.label}
                {activeSection === link.id && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute bottom-1.5 left-4 right-4 h-[2px] bg-accent-cyan rounded shadow-[0_0_8px_#06b6d4]"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </nav>

          {/* Actions & Toggles */}
          <div className="hidden lg:flex items-center space-x-4">
            <ThemeToggle />
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick('contact');
              }}
              className="flex items-center space-x-1.5 text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-xl bg-gradient-to-r from-accent-purple to-accent-cyan text-white shadow-glow-cyan hover:shadow-[0_0_20px_rgba(6,182,212,0.6)] hover:scale-105 transition-all duration-300"
            >
              <span>Connect</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Hamburguer Buttons */}
          <div className="flex lg:hidden items-center space-x-3">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl glassmorphism text-white dark:text-white cursor-pointer focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="lg:hidden mt-2 mx-auto max-w-6xl rounded-2xl glassmorphism shadow-2xl border border-white/10 overflow-hidden"
          >
            <div className="px-4 py-6 flex flex-col space-y-2.5">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`w-full text-left px-5 py-3.5 text-sm font-semibold uppercase tracking-wider rounded-xl transition-all duration-300 ${
                    activeSection === link.id
                      ? 'bg-gradient-to-r from-accent-purple/20 to-accent-cyan/20 border-l-4 border-accent-cyan text-accent-cyan'
                      : 'text-dark-text/80 dark:text-white/70 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  {link.label}
                </button>
              ))}
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick('contact');
                }}
                className="flex items-center justify-center space-x-2 text-center w-full px-5 py-4 mt-2 rounded-xl bg-gradient-to-r from-accent-purple to-accent-cyan text-white font-bold uppercase tracking-wider text-xs shadow-glow-purple"
              >
                <span>Hire Venugopal</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
