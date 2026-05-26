import React, { useState } from 'react';
import Navbar from './components/Navbar.jsx';
import CursorGlow from './components/CursorGlow.jsx';
import ParticleBackground from './components/ParticleBackground.jsx';
import LoadingScreen from './components/LoadingScreen.jsx';
import BackToTop from './components/BackToTop.jsx';

import Hero from './sections/Hero.jsx';
import About from './sections/About.jsx';
import Skills from './sections/Skills.jsx';
import Experience from './sections/Experience.jsx';
import Projects from './sections/Projects.jsx';
import Certifications from './sections/Certifications.jsx';
import Education from './sections/Education.jsx';
import Contact from './sections/Contact.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading ? (
        <LoadingScreen onComplete={() => setIsLoading(false)} />
      ) : (
        <div className="relative min-h-screen text-dark-text dark:text-dark-text bg-dark-bg dark:bg-[#030014] transition-colors duration-500 overflow-x-hidden font-sans">
          
          {/* Futuristic Particle Grid Layer */}
          <ParticleBackground />

          {/* Mouse follow glow orb spotlight */}
          <CursorGlow />

          {/* Core Nav bar layer */}
          <Navbar />

          {/* Floating Actions */}
          <BackToTop />

          {/* Main Portfolio Modules */}
          <main className="relative z-10 mx-auto w-full">
            <Hero />
            <About />
            <Skills />
            <Experience />
            <Projects />
            <Certifications />
            <Education />
            <Contact />
          </main>

          {/* Premium Footer */}
          <Footer />

        </div>
      )}
    </>
  );
}
