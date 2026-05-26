import React from 'react';
import { motion } from 'framer-motion';

export default function GlassCard({ children, className = '', hoverGlowType = 'purple', delay = 0 }) {
  // Configurable glow colors based on section styling
  const shadowClasses = {
    purple: 'hover:shadow-glow-purple hover:border-accent-purple/30',
    cyan: 'hover:shadow-glow-cyan hover:border-accent-cyan/30',
    pink: 'hover:shadow-glow-pink hover:border-accent-pink/30',
    none: ''
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1], delay }}
      className={`glassmorphism glow-on-hover rounded-2xl p-6 transition-all duration-500 shadow-glow-card ${shadowClasses[hoverGlowType]} ${className}`}
    >
      {children}
    </motion.div>
  );
}
