import React from 'react';
import { motion } from 'framer-motion';
import { Award, ShieldCheck, CheckSquare, Sparkles } from 'lucide-react';
import { certifications } from '../utils/data.js';
import GlassCard from '../components/GlassCard.jsx';

export default function Certifications() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  return (
    <section id="certifications" className="py-24 px-4 md:px-8 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[30vw] h-[30vw] rounded-full bg-glow-radial opacity-30 pointer-events-none" />

      <div className="mx-auto max-w-6xl relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center justify-center text-center mb-16">
          <h2 className="text-xs uppercase tracking-widest text-accent-cyan font-bold font-mono mb-3">
            05 // CREDENTIALS
          </h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-white dark:text-white">
            Certifications & <span className="gradient-text-purple-cyan text-neon-glow-purple">Badges</span>
          </h3>
          <div className="w-12 h-1.5 bg-gradient-to-r from-accent-purple to-accent-cyan rounded-full mt-4" />
        </div>

        {/* Certifications Cards Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-40px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto"
        >
          {certifications.map((cert, idx) => (
            <motion.div key={idx} variants={itemVariants}>
              <GlassCard 
                hoverGlowType={idx % 2 === 0 ? 'cyan' : 'purple'} 
                className="flex items-start p-6 space-x-5 h-full relative overflow-hidden"
              >
                {/* Visual glow indicator */}
                <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-accent-purple to-accent-cyan" />

                {/* Left Certification Icon representation */}
                <div className="p-3.5 rounded-2xl bg-gradient-to-br from-accent-purple/10 to-accent-cyan/10 text-accent-cyan shadow-[0_0_15px_rgba(6,182,212,0.15)] flex-shrink-0 h-fit">
                  <Award className="w-6 h-6 animate-pulse" />
                </div>

                {/* Right details */}
                <div className="flex-grow">
                  
                  {/* Verified tag */}
                  <div className="flex items-center space-x-1 text-[10px] font-bold text-accent-cyan uppercase tracking-widest mb-1.5 font-mono">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Verified Credential</span>
                  </div>

                  <h4 className="font-extrabold text-base text-white tracking-wide mb-1 leading-snug">
                    {cert.title}
                  </h4>
                  
                  <div className="flex items-center space-x-2 text-xs text-white/50 mb-4">
                    <span className="font-semibold text-accent-purple">{cert.issuer}</span>
                    <span>•</span>
                    <span className="font-mono text-[11px]">{cert.date}</span>
                  </div>

                  {/* Skills tags inside credentials */}
                  <div className="flex flex-wrap gap-1.5">
                    {cert.skills.map((skill) => (
                      <span 
                        key={skill} 
                        className="text-[9px] font-semibold text-white/60 bg-white/5 border border-white/5 px-2 py-0.5 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                </div>

              </GlassCard>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
