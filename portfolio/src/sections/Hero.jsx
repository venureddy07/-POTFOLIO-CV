import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Github, Mail, ArrowRight, Download, Terminal } from 'lucide-react';
import { personalInfo } from '../utils/data.js';

export default function Hero() {
  const [typedText, setTypedText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(100);

  const roles = [
    "Computer Science Engineer",
    "Aspiring Data Scientist",
    "AI & Web Development Enthusiast"
  ];

  useEffect(() => {
    let timer;
    const activeRole = roles[loopNum % roles.length];

    const handleType = () => {
      if (isDeleting) {
        setTypedText((prev) => prev.slice(0, -1));
        setTypingSpeed(40);
      } else {
        setTypedText(activeRole.slice(0, typedText.length + 1));
        setTypingSpeed(100);
      }

      if (!isDeleting && typedText === activeRole) {
        // Wait at the end of the text
        timer = setTimeout(() => setIsDeleting(true), 2000);
        return;
      }

      if (isDeleting && typedText === '') {
        setIsDeleting(false);
        setLoopNum((prev) => prev + 1);
        setTypingSpeed(100);
        return;
      }

      timer = setTimeout(handleType, typingSpeed);
    };

    timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [typedText, isDeleting, loopNum, typingSpeed]);

  const socialLinks = [
    { name: 'LinkedIn', icon: Linkedin, url: personalInfo.linkedin, color: 'hover:text-[#0a66c2]' },
    { name: 'GitHub', icon: Github, url: personalInfo.github, color: 'hover:text-white dark:hover:text-white hover:text-black' },
    { name: 'Email', icon: Mail, url: `mailto:${personalInfo.email}`, color: 'hover:text-[#ea4335]' },
  ];

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden py-24 px-4 md:px-8">
      {/* Grid Scanline background */}
      <div className="absolute inset-0 grid-bg opacity-40 z-0 pointer-events-none" />

      {/* Radiant glow spotlights */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[40vw] h-[40vw] rounded-full bg-glow-radial opacity-60 pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[40vw] h-[40vw] rounded-full bg-glow-cyan-radial opacity-60 pointer-events-none" />

      <div className="mx-auto max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Copy Container */}
        <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
          
          {/* Welcome Tag */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="flex items-center space-x-2 px-3 py-1.5 rounded-full glassmorphism text-xs font-semibold uppercase tracking-widest text-accent-cyan mb-6 shadow-glow-cyan border border-accent-cyan/20"
          >
            <Terminal className="w-3.5 h-3.5 animate-pulse" />
            <span>Welcome to my digital space</span>
          </motion.div>

          {/* Large Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white dark:text-white mb-4 leading-[1.1]"
          >
            Hi, I'm <br className="sm:hidden" />
            <span className="gradient-text-purple-cyan text-neon-glow-purple">
              Venugopal Reddy
            </span>
          </motion.h1>

          {/* Animated Subtitle / Typist */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="h-16 mb-8 flex items-center justify-center lg:justify-start"
          >
            <p className="text-lg md:text-xl font-medium text-dark-text/75 dark:text-white/70 max-w-lg leading-relaxed">
              I am an <span className="text-accent-cyan font-semibold border-b border-accent-cyan/35 pb-0.5">{typedText}</span>
              <span className="inline-block w-1.5 h-5 ml-1 bg-accent-cyan animate-pulse" />
            </p>
          </motion.div>

          {/* Call to action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 w-full sm:w-auto mb-10"
          >
            <a
              href="#projects"
              className="flex items-center justify-center space-x-2 w-full sm:w-auto px-7 py-3.5 rounded-xl bg-gradient-to-r from-accent-purple to-accent-cyan text-white font-bold tracking-wide hover:shadow-[0_0_20px_rgba(6,182,212,0.5)] hover:-translate-y-1 transition-all duration-300"
            >
              <span>View Projects</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              className="flex items-center justify-center space-x-2 w-full sm:w-auto px-7 py-3.5 rounded-xl glassmorphism text-white dark:text-white font-bold tracking-wide hover:bg-white/10 hover:-translate-y-1 transition-all duration-300 border border-white/10"
            >
              <span>Contact Me</span>
            </a>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                alert("Resume download is coming soon! You can contact Venugopal directly using the form below.");
              }}
              className="flex items-center justify-center space-x-2 w-full sm:w-auto px-7 py-3.5 rounded-xl bg-white/5 dark:bg-white/5 border border-white/10 dark:border-white/10 text-white/80 font-bold tracking-wide hover:bg-white/15 dark:hover:bg-white/15 hover:-translate-y-1 transition-all duration-300"
            >
              <Download className="w-4 h-4" />
              <span>Resume</span>
            </a>
          </motion.div>

          {/* Social icons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex items-center space-x-6"
          >
            <span className="text-xs uppercase tracking-widest text-white/40 font-semibold font-mono">CONNECT //</span>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    className={`p-2.5 rounded-xl glassmorphism text-white/60 hover:text-white transition-all duration-300 hover:scale-115 ${social.color} hover:border-white/20`}
                    aria-label={`Visit Pagidala Venugopal Reddy's ${social.name}`}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </motion.div>

        </div>

        {/* Right Illustration Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="lg:col-span-5 flex justify-center items-center relative"
        >
          {/* Cyberpunk vector mockup representing Data Science + AI grid */}
          <div className="relative w-full max-w-[380px] aspect-square rounded-3xl glassmorphism shadow-[0_20px_50px_rgba(0,0,0,0.6)] border border-white/10 p-6 flex flex-col justify-between overflow-hidden animate-float">
            
            {/* Overlay Gradient shines */}
            <div className="absolute inset-0 bg-gradient-to-tr from-accent-purple/10 to-accent-cyan/10 pointer-events-none" />
            
            {/* Header UI buttons */}
            <div className="flex items-center justify-between border-b border-white/5 pb-4">
              <div className="flex space-x-1.5">
                <span className="w-3 h-3 rounded-full bg-red-500/60" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <span className="w-3 h-3 rounded-full bg-green-500/60" />
              </div>
              <span className="text-[10px] font-mono text-white/30 tracking-wider">data_compiler.py</span>
            </div>

            {/* Neural Net grid design */}
            <div className="my-6 flex-grow flex items-center justify-center relative">
              <svg className="w-full h-full max-h-[180px]" viewBox="0 0 200 200">
                <defs>
                  <radialGradient id="glow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
                  </radialGradient>
                </defs>
                
                {/* Connection lines */}
                <path d="M 40 40 L 100 100 M 160 40 L 100 100 M 100 100 L 100 160 M 40 40 L 160 40 M 40 40 L 100 160 M 160 40 L 100 160" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
                <path d="M 40 40 Q 100 20 160 40 Q 180 100 100 160 Q 20 100 40 40" fill="none" stroke="rgba(6, 182, 212, 0.2)" strokeWidth="1.5" strokeDasharray="5,5" />
                
                {/* Glowing central orb */}
                <circle cx="100" cy="100" r="30" fill="url(#glow)" className="animate-pulse" />
                
                {/* Node coordinates */}
                <circle cx="40" cy="40" r="6" fill="#8b5cf6" className="shadow-neon-purple" />
                <circle cx="160" cy="40" r="6" fill="#06b6d4" />
                <circle cx="100" cy="100" r="8" fill="#ec4899" />
                <circle cx="100" cy="160" r="6" fill="#3b82f6" />
                
                <text x="40" y="25" fill="rgba(255,255,255,0.4)" fontSize="8" fontFamily="monospace" textAnchor="middle">AI API</text>
                <text x="160" y="25" fill="rgba(255,255,255,0.4)" fontSize="8" fontFamily="monospace" textAnchor="middle">EDA</text>
                <text x="100" y="180" fill="rgba(255,255,255,0.4)" fontSize="8" fontFamily="monospace" textAnchor="middle">FLASK</text>
              </svg>
            </div>

            {/* Simulated execution console */}
            <div className="bg-black/60 rounded-xl p-3 border border-white/5 font-mono text-[9px] text-white/50 leading-relaxed">
              <div className="text-accent-cyan">&gt; import pandas as pd</div>
              <div className="text-accent-purple">&gt; model = DataScientist()</div>
              <div>&gt; model.fit(reddy_venugopal)</div>
              <div className="text-green-400 font-bold">&gt; accuracy: 98.9% (Perfect fit)</div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
