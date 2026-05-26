import React, { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(true); // Default to Dark Modern

  useEffect(() => {
    // Check initial settings or default to dark
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'light') {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    } else {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDark(true);
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="relative flex items-center justify-between w-14 h-8 px-1.5 rounded-full bg-black/40 dark:bg-white/5 border border-black/10 dark:border-white/10 cursor-pointer overflow-hidden transition-colors duration-300 shadow-inner"
      aria-label="Toggle theme color"
    >
      {/* Sliding orb indicator */}
      <motion.div
        className="absolute left-1 w-6 h-6 rounded-full bg-gradient-to-r from-accent-purple to-accent-cyan shadow-[0_0_8px_rgba(6,182,212,0.4)]"
        animate={{ x: isDark ? 24 : 0 }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      />
      
      <Sun className={`w-3.5 h-3.5 z-10 transition-colors duration-300 ${isDark ? 'text-white/40' : 'text-yellow-400 text-neon-glow-cyan'}`} />
      <Moon className={`w-3.5 h-3.5 z-10 transition-colors duration-300 ${isDark ? 'text-accent-cyan text-neon-glow-cyan' : 'text-black/30'}`} />
    </button>
  );
}
