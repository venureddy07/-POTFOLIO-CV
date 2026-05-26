import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Code, Layers, Sparkles, BarChart3 } from 'lucide-react';
import { projects } from '../utils/data.js';
import GlassCard from '../components/GlassCard.jsx';

// Custom sub-component rendering a clean tech vector design for each project
function ProjectMockup({ index }) {
  const mockups = [
    // Mockup 1: Attendance System UI Grid
    (
      <svg className="w-full h-full max-h-[140px] text-accent-purple" viewBox="0 0 100 50">
        <rect x="5" y="5" width="90" height="40" rx="3" fill="rgba(255,255,255,0.01)" stroke="rgba(139, 92, 246, 0.15)" strokeWidth="1" />
        <line x1="5" y1="15" x2="95" y2="15" stroke="rgba(139, 92, 246, 0.2)" strokeWidth="1" />
        <text x="10" y="11" fill="rgba(255,255,255,0.4)" fontSize="4" fontFamily="monospace">ATTENDANCE // SHEET</text>
        <circle cx="85" cy="10" r="2" fill="#06b6d4" />
        {/* Table Rows */}
        <text x="10" y="23" fill="rgba(255,255,255,0.6)" fontSize="3.5" fontFamily="monospace">Student_A: [P]</text>
        <rect x="80" y="20" width="10" height="4" rx="1" fill="rgba(6, 182, 212, 0.2)" />
        
        <text x="10" y="31" fill="rgba(255,255,255,0.6)" fontSize="3.5" fontFamily="monospace">Student_B: [P]</text>
        <rect x="80" y="28" width="10" height="4" rx="1" fill="rgba(6, 182, 212, 0.2)" />

        <text x="10" y="39" fill="rgba(255,255,255,0.6)" fontSize="3.5" fontFamily="monospace">Student_C: [A]</text>
        <rect x="80" y="36" width="10" height="4" rx="1" fill="rgba(239, 68, 68, 0.2)" />
      </svg>
    ),
    // Mockup 2: Multilingual AI Prompt Chat Mockup
    (
      <svg className="w-full h-full max-h-[140px] text-accent-cyan" viewBox="0 0 100 50">
        <rect x="5" y="5" width="90" height="40" rx="3" fill="rgba(255,255,255,0.01)" stroke="rgba(6, 182, 212, 0.15)" strokeWidth="1" />
        <circle cx="10" cy="11" r="2" fill="#8b5cf6" />
        <text x="16" y="12" fill="rgba(255,255,255,0.4)" fontSize="4" fontFamily="monospace">AI_FACT_GENERATOR</text>
        
        {/* Chat Bubbles */}
        <path d="M 10 20 L 55 20 A 2 2 0 0 1 57 22 L 57 26 A 2 2 0 0 1 55 28 L 15 28 L 10 32 Z" fill="rgba(139, 92, 246, 0.15)" />
        <text x="14" y="25" fill="#f3f4f6" fontSize="3" fontFamily="sans-serif">Generate fact in Hindi...</text>
        
        <path d="M 90 32 L 45 32 A 2 2 0 0 0 43 34 L 43 38 A 2 2 0 0 0 45 40 L 85 40 L 90 44 Z" fill="rgba(6, 182, 212, 0.15)" />
        <text x="47" y="37" fill="#f3f4f6" fontSize="3.2" fontFamily="sans-serif">विज्ञान तथ्य: सूर्य एक तारा है।</text>
      </svg>
    ),
    // Mockup 3: Advanced Pricing Data Analytics Graph
    (
      <svg className="w-full h-full max-h-[140px] text-accent-pink" viewBox="0 0 100 50">
        <rect x="5" y="5" width="90" height="40" rx="3" fill="rgba(255,255,255,0.01)" stroke="rgba(236, 72, 153, 0.15)" strokeWidth="1" />
        <text x="10" y="12" fill="rgba(255,255,255,0.4)" fontSize="4" fontFamily="monospace">CORRELATION_MATRIX // EDA</text>
        
        {/* Scatter plots or bar charts */}
        <line x1="15" y1="18" x2="15" y2="40" stroke="rgba(255,255,255,0.2)" strokeWidth="0.8" />
        <line x1="15" y1="40" x2="85" y2="40" stroke="rgba(255,255,255,0.2)" strokeWidth="0.8" />
        
        <path d="M 15 35 L 30 28 L 45 32 L 60 18 L 75 12 L 85 15" fill="none" stroke="url(#pinkCyanGrad)" strokeWidth="1.5" />
        <circle cx="30" cy="28" r="1.5" fill="#06b6d4" />
        <circle cx="60" cy="18" r="1.5" fill="#8b5cf6" />
        <circle cx="75" cy="12" r="1.5" fill="#ec4899" />
        
        <defs>
          <linearGradient id="pinkCyanGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#06b6d4" />
            <stop offset="50%" stopColor="#8b5cf6" />
            <stop offset="100%" stopColor="#ec4899" />
          </linearGradient>
        </defs>
      </svg>
    )
  ];

  return (
    <div className="w-full rounded-xl bg-black/35 border border-white/5 p-4 flex items-center justify-center relative overflow-hidden h-[150px] mb-6">
      {/* Background glow orb */}
      <div className="absolute inset-0 bg-gradient-to-tr from-accent-purple/5 to-accent-cyan/5 pointer-events-none" />
      {mockups[index]}
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-4 md:px-8 relative overflow-hidden">
      {/* Glow highlight spot */}
      <div className="absolute top-1/3 left-0 -translate-x-1/2 w-[35vw] h-[35vw] rounded-full bg-glow-radial opacity-35 pointer-events-none" />

      <div className="mx-auto max-w-6xl relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center justify-center text-center mb-16">
          <h2 className="text-xs uppercase tracking-widest text-accent-cyan font-bold font-mono mb-3">
            04 // PORTFOLIO
          </h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-white dark:text-white">
            Featured <span className="gradient-text-purple-cyan text-neon-glow-purple">Projects</span>
          </h3>
          <div className="w-12 h-1.5 bg-gradient-to-r from-accent-purple to-accent-cyan rounded-full mt-4" />
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((proj, idx) => (
            <GlassCard 
              key={idx} 
              hoverGlowType={idx % 2 === 0 ? 'purple' : 'cyan'} 
              className="flex flex-col p-6 h-full border border-white/10 dark:border-white/10 shadow-2xl relative"
            >
              
              {/* Floating indices */}
              <div className="absolute top-4 right-4 font-mono text-xs font-bold text-white/15 dark:text-white/10 tracking-widest">
                PROJECT_0{idx + 1}
              </div>

              {/* Vector Mockups */}
              <ProjectMockup index={idx} />

              {/* Text content details */}
              <h4 className="text-xl font-bold text-white tracking-wide mb-2.5">
                {proj.title}
              </h4>
              <p className="text-xs md:text-sm text-dark-text/75 dark:text-white/50 leading-relaxed mb-5 flex-grow">
                {proj.description}
              </p>

              {/* Core Features Checklists */}
              <div className="mb-6">
                <h5 className="text-[10px] uppercase tracking-widest text-accent-cyan font-bold font-mono mb-2">
                  KEY MODULES //
                </h5>
                <ul className="space-y-1.5">
                  {proj.features.slice(0, 3).map((feat, fidx) => (
                    <li key={fidx} className="flex items-center space-x-2 text-[11px] text-white/70">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-purple shadow-glow-purple" />
                      <span className="truncate">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technology tags */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {proj.tech.map((tech) => (
                  <span 
                    key={tech} 
                    className="text-[10px] font-semibold text-accent-cyan bg-accent-cyan/10 border border-accent-cyan/20 px-2 py-0.5 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Call to action anchors */}
              <div className="flex items-center space-x-3 pt-3 border-t border-white/5">
                <a
                  href={proj.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center space-x-1.5 text-xs font-bold text-white/70 hover:text-white transition-colors duration-300 py-2 px-3 rounded-lg hover:bg-white/5"
                >
                  <Github className="w-4 h-4" />
                  <span>Repository</span>
                </a>
                <a
                  href={proj.demo}
                  onClick={(e) => {
                    if (proj.demo === '#') {
                      e.preventDefault();
                      alert("Demo version link is being configured! Checkout the repository in the meantime.");
                    }
                  }}
                  className="flex items-center space-x-1.5 text-xs font-bold text-accent-cyan hover:text-accent-cyan/85 transition-colors duration-300 py-2 px-3 rounded-lg hover:bg-accent-cyan/5 ml-auto"
                >
                  <span>Live Demo</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

            </GlassCard>
          ))}
        </div>

      </div>
    </section>
  );
}
