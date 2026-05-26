import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, CheckCircle2, Circle } from 'lucide-react';
import { experiences } from '../utils/data.js';
import GlassCard from '../components/GlassCard.jsx';

export default function Experience() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  return (
    <section id="experience" className="py-24 px-4 md:px-8 relative overflow-hidden">
      {/* Background spotlights */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 w-[35vw] h-[35vw] rounded-full bg-glow-radial opacity-30 pointer-events-none" />

      <div className="mx-auto max-w-5xl relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center justify-center text-center mb-20">
          <h2 className="text-xs uppercase tracking-widest text-accent-cyan font-bold font-mono mb-3">
            03 // TIMELINE
          </h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-white dark:text-white">
            Internship <span className="gradient-text-purple-cyan text-neon-glow-purple">Experience</span>
          </h3>
          <div className="w-12 h-1.5 bg-gradient-to-r from-accent-purple to-accent-cyan rounded-full mt-4" />
        </div>

        {/* Timeline Path container */}
        <div className="relative border-l-2 border-dashed border-white/10 dark:border-white/10 ml-4 md:ml-8 pl-8 md:pl-12 pb-8">
          
          {experiences.map((exp, index) => (
            <div key={index} className="relative">
              
              {/* Timeline Indicator Orb */}
              <div className="absolute -left-[50px] md:-left-[66px] top-1.5 p-1 rounded-full bg-[#030014] z-10 flex items-center justify-center border border-accent-cyan/40">
                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-accent-purple to-accent-cyan flex items-center justify-center text-white shadow-glow-cyan animate-pulse">
                  <Briefcase className="w-4 h-4" />
                </div>
              </div>

              {/* Work Card Container */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
              >
                <GlassCard hoverGlowType="cyan" className="p-8">
                  
                  {/* Title Headers */}
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b border-white/5 pb-5 mb-6">
                    <div>
                      <h4 className="text-xl md:text-2xl font-bold text-white tracking-wide">
                        {exp.role}
                      </h4>
                      <p className="text-accent-cyan font-semibold text-sm mt-1">
                        {exp.company}
                      </p>
                    </div>

                    <div className="flex items-center space-x-2 text-xs font-semibold text-white/50 bg-white/5 px-3 py-1.5 rounded-full border border-white/5 h-fit w-fit font-mono">
                      <Calendar className="w-3.5 h-3.5 text-accent-cyan" />
                      <span>{exp.duration}</span>
                    </div>
                  </div>

                  {/* General Summary */}
                  <p className="text-sm md:text-base text-dark-text/80 dark:text-white/60 leading-relaxed mb-6 italic">
                    "{exp.description}"
                  </p>

                  {/* Responsibilities bullets */}
                  <h5 className="text-xs uppercase tracking-widest text-accent-purple font-bold font-mono mb-4">
                    KEY RESPONSIBILITIES & ACCOMPLISHMENTS //
                  </h5>
                  
                  <motion.ul 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="flex flex-col space-y-4"
                  >
                    {exp.responsibilities.map((resp, idx) => (
                      <motion.li 
                        key={idx} 
                        variants={itemVariants}
                        className="flex items-start space-x-3 text-sm md:text-base text-dark-text/75 dark:text-white/70"
                      >
                        <div className="p-0.5 mt-1 rounded text-accent-cyan">
                          <CheckCircle2 className="w-4 h-4 text-accent-cyan" />
                        </div>
                        <span className="leading-relaxed">{resp}</span>
                      </motion.li>
                    ))}
                  </motion.ul>

                </GlassCard>
              </motion.div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
