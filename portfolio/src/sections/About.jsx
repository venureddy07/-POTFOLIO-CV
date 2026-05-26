import React from 'react';
import { motion } from 'framer-motion';
import { User, Award, ShieldAlert, Cpu, AwardIcon, CheckSquare } from 'lucide-react';
import GlassCard from '../components/GlassCard.jsx';
import { stats, personalInfo } from '../utils/data.js';

// Sub-component to handle incrementing stats in an animated fashion
function StatCounter({ value, label }) {
  // Extract number and trailing character (+ or similar)
  const numericValue = parseInt(value, 10);
  const suffix = value.replace(/[0-9]/g, '');

  return (
    <div className="flex flex-col items-center p-6 glassmorphism rounded-2xl border border-white/5 bg-white/2 shadow-[0_4px_20px_rgba(0,0,0,0.3)]">
      <motion.span 
        initial={{ scale: 0.5, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
        className="text-3xl md:text-4xl font-extrabold text-accent-cyan text-neon-glow-cyan mb-2"
      >
        {value}
      </motion.span>
      <span className="text-xs text-dark-text/60 dark:text-white/50 uppercase tracking-widest text-center font-semibold font-mono">
        {label}
      </span>
    </div>
  );
}

export default function About() {
  const qualities = [
    { title: "Data Science Enthusiast", desc: "Passionate about mining insights from complex smartphone datasets and market tables.", icon: Cpu },
    { title: "Web Developer", desc: "Enjoy constructing modular backends in Python Flask and modern visual frontends.", icon: CheckSquare },
    { title: "Continuous Learner", desc: "Constantly acquiring certifications across Cloud Computing, Prompts, and OS.", icon: Award }
  ];

  return (
    <section id="about" className="py-24 px-4 md:px-8 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[30vw] h-[30vw] rounded-full bg-glow-radial opacity-30 pointer-events-none" />

      <div className="mx-auto max-w-6xl relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center justify-center text-center mb-16">
          <h2 className="text-xs uppercase tracking-widest text-accent-cyan font-bold font-mono mb-3">
            01 // PROFILE
          </h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-white dark:text-white">
            About <span className="gradient-text-purple-cyan text-neon-glow-purple">Me</span>
          </h3>
          <div className="w-12 h-1.5 bg-gradient-to-r from-accent-purple to-accent-cyan rounded-full mt-4" />
        </div>

        {/* Core Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Block */}
          <div className="lg:col-span-7 flex flex-col space-y-6 text-center lg:text-left">
            <h4 className="text-lg md:text-xl font-semibold text-white/90">
              Aspiring Data Scientist & Full-Stack Developer located in India.
            </h4>
            <p className="text-sm md:text-base text-dark-text/75 dark:text-white/60 leading-relaxed">
              {personalInfo.aboutShort}
            </p>
            <p className="text-sm md:text-base text-dark-text/75 dark:text-white/60 leading-relaxed">
              With a background in Computer Science Engineering at Lovely Professional University, I focus on bridging the gap between high-performance backends and detailed data science models. Whether running exploratory data analysis (EDA) or integrating real-time AI API features, I design with speed, clarity, and quality in mind.
            </p>

            {/* Quality list */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6">
              {qualities.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <GlassCard key={idx} hoverGlowType="cyan" className="p-5 flex flex-col items-center sm:items-start text-center sm:text-left">
                    <div className="p-2.5 rounded-xl bg-accent-cyan/10 text-accent-cyan mb-4">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h5 className="font-bold text-sm text-white mb-2">{item.title}</h5>
                    <p className="text-xs text-white/50 leading-relaxed">{item.desc}</p>
                  </GlassCard>
                );
              })}
            </div>
          </div>

          {/* Right Stats Block */}
          <div className="lg:col-span-5 flex flex-col space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4">
              {stats.map((stat, index) => (
                <StatCounter 
                  key={index} 
                  value={stat.value} 
                  label={stat.label} 
                />
              ))}
            </div>

            {/* Modern visual banner */}
            <div className="hidden lg:block relative p-6 rounded-2xl glassmorphism border border-white/5 overflow-hidden">
              <div className="absolute top-0 right-0 p-3 text-[10px] font-mono text-white/20">WORKSPACE_INFO</div>
              <h5 className="font-mono text-xs text-accent-purple mb-3">&gt; cat university_status.log</h5>
              <div className="font-mono text-[11px] text-white/50 leading-relaxed">
                <div>Institution: Lovely Professional University</div>
                <div>Major: B.Tech Computer Science Engineering</div>
                <div>CGPA: 5.0 / 10</div>
                <div>Location: Phagwara, Punjab</div>
                <div className="text-accent-cyan mt-2">Active Research: Data Science Algorithms, AI Integrations</div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
