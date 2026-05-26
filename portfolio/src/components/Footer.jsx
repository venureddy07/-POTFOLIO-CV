import React from 'react';
import { Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react';
import { personalInfo } from '../utils/data.js';

export default function Footer() {
  const quickLinks = [
    { label: 'Home', id: 'hero' },
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Experience', id: 'experience' },
    { label: 'Projects', id: 'projects' },
    { label: 'Certifications', id: 'certifications' },
    { label: 'Education', id: 'education' },
    { label: 'Contact', id: 'contact' },
  ];

  const handleLinkClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
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

  const socials = [
    { icon: Linkedin, url: personalInfo.linkedin, label: 'LinkedIn', color: 'hover:text-[#0a66c2]' },
    { icon: Github, url: personalInfo.github, label: 'GitHub', color: 'hover:text-white' },
    { icon: Mail, url: `mailto:${personalInfo.email}`, label: 'Email', color: 'hover:text-[#ea4335]' }
  ];

  return (
    <footer className="relative border-t border-white/5 dark:border-white/5 bg-black/40 py-12 px-4 md:px-8 overflow-hidden">
      
      {/* Visual background accents */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[50vw] h-[100px] rounded-full bg-glow-radial opacity-20 pointer-events-none" />

      <div className="mx-auto max-w-6xl relative z-10 flex flex-col items-center">
        
        {/* Upper social layout */}
        <div className="flex space-x-5 mb-8">
          {socials.map((social, idx) => {
            const Icon = social.icon;
            return (
              <a
                key={idx}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                className={`p-3 rounded-xl glassmorphism text-white/50 hover:text-white transition-all duration-300 hover:scale-110 ${social.color} hover:border-white/10`}
                aria-label={social.label}
              >
                <Icon className="w-4 h-4" />
              </a>
            );
          })}
        </div>

        {/* Dynamic Quick Navigation Grid */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 mb-8 max-w-xl text-center">
          {quickLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleLinkClick(link.id)}
              className="text-xs uppercase tracking-widest text-white/40 hover:text-accent-cyan cursor-pointer transition-colors duration-300 font-semibold"
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Decorative divider */}
        <div className="w-16 h-[1px] bg-white/10 mb-8" />

        {/* Double row footer stats */}
        <div className="text-center space-y-2">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} Pagidala Venugopal Reddy. All rights reserved.
          </p>
          
          <p className="text-xs text-white/40 flex items-center justify-center space-x-1">
            <span>Built with</span>
            <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500 animate-pulse mx-1" />
            <span>by</span>
            <span className="text-accent-cyan font-bold tracking-wide hover:underline cursor-pointer" onClick={() => handleLinkClick('hero')}>
              Venugopal Reddy
            </span>
          </p>
        </div>

      </div>
    </footer>
  );
}
