import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [logIndex, setLogIndex] = useState(0);

  const loadingLogs = [
    "Locating active workspace data...",
    "Compiling data pipelines...",
    "Initializing neural gradients...",
    "Optimizing responsive layouts...",
    "System authorization check: OK",
    "Access granted. Launching portfolio..."
  ];

  useEffect(() => {
    // Progress counter animation
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 800); // Small pause for visual confirmation
          return 100;
        }
        // Random step increases
        const next = prev + Math.floor(Math.random() * 8) + 2;
        return next > 100 ? 100 : next;
      });
    }, 45);

    return () => clearInterval(interval);
  }, [onComplete]);

  // Cycles loading log messages chronologically
  useEffect(() => {
    const logInterval = setInterval(() => {
      setLogIndex((prev) => (prev < loadingLogs.length - 1 ? prev + 1 : prev));
    }, 600);

    return () => clearInterval(logInterval);
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#030014] font-sans text-[#f3f4f6]"
        exit={{ 
          y: '-100%', 
          opacity: 0,
          transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
        }}
      >
        {/* Futuristic glowing backdrop */}
        <div className="absolute inset-0 bg-glow-radial opacity-30" />
        
        <div className="relative z-10 w-11/12 max-w-md p-6 glassmorphism rounded-2xl shadow-glow-purple border border-white/10 flex flex-col items-center">
          {/* Logo / Avatar Orb */}
          <motion.div 
            className="w-16 h-16 rounded-full bg-gradient-to-tr from-accent-purple to-accent-cyan flex items-center justify-center text-2xl font-bold shadow-neon-purple mb-6"
            animate={{ 
              scale: [1, 1.08, 1],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            PVR
          </motion.div>

          {/* Heading */}
          <h2 className="text-xl font-semibold tracking-wider text-center text-white mb-2">
            P. VENUGOPAL REDDY
          </h2>
          <p className="text-xs text-accent-cyan tracking-widest uppercase mb-8">
            Portfolio v2.0.26
          </p>

          {/* Core Progress Bar */}
          <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden mb-4 relative">
            <motion.div 
              className="h-full bg-gradient-to-r from-accent-purple to-accent-cyan rounded-full shadow-[0_0_10px_#06b6d4]"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Progress Percent and Log logs */}
          <div className="flex justify-between items-center w-full mb-6">
            <span className="text-xs font-mono text-white/40 tracking-wider">
              STATUS: {progress < 100 ? "COMPILING..." : "READY"}
            </span>
            <span className="text-sm font-mono font-bold text-accent-cyan text-neon-glow-cyan">
              {progress}%
            </span>
          </div>

          {/* Terminal log logs */}
          <div className="w-full bg-black/40 border border-white/5 rounded-lg p-3 font-mono text-[10px] text-white/60 h-16 flex flex-col justify-end overflow-hidden">
            <div className="text-accent-purple mb-1">
              $ cat portfolio_manifest.json
            </div>
            <motion.div 
              key={logIndex}
              initial={{ y: 5, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="text-accent-cyan truncate"
            >
              &gt; {loadingLogs[logIndex]}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
