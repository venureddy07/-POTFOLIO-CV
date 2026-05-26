import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as Icons from 'lucide-react';
import { skills } from '../utils/data.js';
import GlassCard from '../components/GlassCard.jsx';

// Dynamic icon resolver helper using string keys from data.js
const DynamicIcon = ({ name, className = "w-5 h-5" }) => {
  const IconComponent = Icons[name] || Icons.Code;
  return <IconComponent className={className} />;
};

export default function Skills() {
  const [activeTab, setActiveTab] = useState('programming');

  const categories = [
    { key: 'programming', label: 'Languages' },
    { key: 'technologies', label: 'Technologies' },
    { key: 'tools', label: 'Tools & DBs' },
    { key: 'softSkills', label: 'Soft Skills' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 15 },
    show: { opacity: 1, scale: 1, y: 0, transition: { type: 'spring', stiffness: 200, damping: 20 } }
  };

  return (
    <section id="skills" className="py-24 px-4 md:px-8 relative overflow-hidden">
      {/* Glow highlight */}
      <div className="absolute bottom-0 right-0 w-[30vw] h-[30vw] rounded-full bg-glow-cyan-radial opacity-35 pointer-events-none" />

      <div className="mx-auto max-w-6xl relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center justify-center text-center mb-16">
          <h2 className="text-xs uppercase tracking-widest text-accent-cyan font-bold font-mono mb-3">
            02 // EXPERTISE
          </h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-white dark:text-white">
            Skills & <span className="gradient-text-purple-cyan text-neon-glow-purple">Competencies</span>
          </h3>
          <div className="w-12 h-1.5 bg-gradient-to-r from-accent-purple to-accent-cyan rounded-full mt-4" />
        </div>

        {/* Tab Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 max-w-2xl mx-auto">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveTab(cat.key)}
              className={`px-5 py-2.5 text-xs font-semibold uppercase tracking-wider rounded-xl cursor-pointer transition-all duration-300 ${
                activeTab === cat.key
                  ? 'bg-gradient-to-r from-accent-purple to-accent-cyan text-white shadow-glow-cyan font-bold'
                  : 'glassmorphism text-dark-text/70 dark:text-white/60 hover:bg-white/10 hover:text-white border border-white/5'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Dynamic Skill Cards Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto"
          >
            {skills[activeTab].map((skill, idx) => (
              <motion.div key={skill.name} variants={cardVariants}>
                <GlassCard hoverGlowType="purple" className="flex flex-col p-6 h-full relative">
                  
                  {/* Skill header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3.5">
                      <div className="p-3 rounded-xl bg-accent-purple/10 text-accent-cyan shadow-[0_0_10px_rgba(6,182,212,0.1)]">
                        <DynamicIcon name={skill.icon} />
                      </div>
                      <h4 className="font-bold text-base text-white tracking-wide">{skill.name}</h4>
                    </div>
                    <span className="font-mono text-xs font-semibold text-accent-cyan">{skill.level}%</span>
                  </div>

                  {/* Progressive bar container */}
                  <div className="w-full h-1.5 bg-black/40 rounded-full overflow-hidden relative mt-2">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1], delay: idx * 0.05 }}
                      className="h-full bg-gradient-to-r from-accent-purple to-accent-cyan rounded-full shadow-[0_0_8px_rgba(6,182,212,0.4)]"
                    />
                  </div>

                </GlassCard>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
