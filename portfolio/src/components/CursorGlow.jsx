import React, { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CursorGlow() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for tracking speed/inertia
  const springConfig = { damping: 45, stiffness: 350, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Offset by half of width/height (150px) to center the spotlight
      mouseX.set(e.clientX - 150);
      mouseY.set(e.clientY - 150);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-30 hidden md:block"
      style={{
        background: `radial-gradient(300px circle at ${cursorX.get()}px ${cursorY.get()}px, rgba(139, 92, 246, 0.07), rgba(6, 182, 212, 0.05), transparent 80%)`,
      }}
      // Ensure Framer Motion updates values dynamically without triggering React re-renders
      animate={{
        background: [
          `radial-gradient(300px circle at ${cursorX.get()}px ${cursorY.get()}px, rgba(139, 92, 246, 0.07), rgba(6, 182, 212, 0.05), transparent 80%)`
        ]
      }}
      // We will let the motion style update dynamically
      style={{
        x: cursorX,
        y: cursorY,
        width: 300,
        height: 300,
        borderRadius: '50%',
        position: 'fixed',
        top: 0,
        left: 0,
        background: 'radial-gradient(circle, rgba(139, 92, 246, 0.09) 0%, rgba(6, 182, 212, 0.05) 40%, rgba(236, 72, 153, 0) 70%)',
        filter: 'blur(30px)',
      }}
    />
  );
}
