import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Landmark, Calendar, Award } from 'lucide-react';
import { education } from '../utils/data.js';
import GlassCard from '../components/GlassCard.jsx';

export default function Education() {
  return (
    <section id="education" className="py-24 px-4 md:px-8 relative overflow-hidden">
      {/* Background spotlights */}
      <div className="absolute bottom-1/4 left-1/4 w-[35vw] h-[35vw] rounded-full bg-glow-cyan-radial opacity-30 pointer-events-none" />

      <div className="mx-auto max-w-5xl relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center justify-center text-center mb-20">
          <h2 className="text-xs uppercase tracking-widest text-accent-cyan font-bold font-mono mb-3">
            06 // ACADEMICS
          </h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-white dark:text-white">
            Education <span className="gradient-text-purple-cyan text-neon-glow-purple">History</span>
          </h3>
          <div className="w-12 h-1.5 bg-gradient-to-r from-accent-purple to-accent-cyan rounded-full mt-4" />
        </div>

        {/* Timeline Path container */}
        <div className="relative border-l-2 border-dashed border-white/10 dark:border-white/10 ml-4 md:ml-8 pl-8 md:pl-12 pb-8">
          
          {education.map((edu, index) => (
            <div key={index} className="relative mb-12 last:mb-0">
              
              {/* Timeline Indicator Orb */}
              <div className="absolute -left-[50px] md:-left-[66px] top-1.5 p-1 rounded-full bg-[#030014] z-10 flex items-center justify-center border border-accent-purple/40">
                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-accent-purple to-accent-cyan flex items-center justify-center text-white shadow-glow-purple">
                  <GraduationCap className="w-4 h-4" />
                </div>
              </div>

              {/* Education Card container */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.8, ease: 'easeOut', delay: index * 0.1 }}
              >
                <GlassCard hoverGlowType="purple" className="p-7">
                  
                  {/* Top Header section */}
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b border-white/5 pb-4 mb-5">
                    <div>
                      <h4 className="text-lg md:text-xl font-bold text-white tracking-wide">
                        {edu.degree}
                      </h4>
                      <p className="flex items-center space-x-1.5 text-accent-cyan font-semibold text-xs mt-1">
                        <Landmark className="w-3.5 h-3.5" />
                        <span>{edu.institution}</span>
                      </p>
                    </div>

                    <div className="flex flex-row items-center gap-3">
                      {/* Score Badge */}
                      <span className="text-xs font-bold text-white bg-accent-purple/20 border border-accent-purple/35 px-3 py-1 rounded-full shadow-glow-purple">
                        {edu.score}
                      </span>
                      {/* Date Badge */}
                      <span className="flex items-center space-x-1.5 text-xs text-white/50 bg-white/5 px-3 py-1 rounded-full border border-white/5 font-mono h-fit">
                        <Calendar className="w-3 h-3 text-accent-cyan" />
                        <span>{edu.period}</span>
                      </span>
                    </div>
                  </div>

                  {/* Core description details */}
                  <p className="text-xs md:text-sm text-dark-text/75 dark:text-white/60 leading-relaxed font-sans">
                    {edu.details}
                  </p>

                </GlassCard>
              </motion.div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
