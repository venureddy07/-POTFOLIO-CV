import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Linkedin, Github, Send, CheckCircle2, Copy, Check, Terminal } from 'lucide-react';
import confetti from 'canvas-confetti';
import { personalInfo } from '../utils/data.js';
import GlassCard from '../components/GlassCard.jsx';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' or null
  const [copiedType, setCopiedType] = useState(null); // 'email', 'linkedin', 'github' or null

  const validate = () => {
    const tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = "Name is required.";
    
    if (!formData.email.trim()) {
      tempErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Please input a valid email address.";
    }

    if (!formData.message.trim()) {
      tempErrors.message = "Message cannot be empty.";
    } else if (formData.message.trim().length < 10) {
      tempErrors.message = "Please write a slightly longer message (min 10 chars).";
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear error dynamically as user types
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    
    // Simulate API Network call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setSubmitStatus('success');
    
    // Trigger awesome premium confetti burst
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#8b5cf6', '#06b6d4', '#ec4899']
    });

    // Reset Form
    setFormData({ name: '', email: '', message: '' });
    
    // Reset success popup after 4 seconds
    setTimeout(() => setSubmitStatus(null), 4000);
  };

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2000);
  };

  return (
    <section id="contact" className="py-24 px-4 md:px-8 relative overflow-hidden">
      {/* Glow spotlights */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[35vw] h-[35vw] rounded-full bg-glow-radial opacity-35 pointer-events-none" />

      <div className="mx-auto max-w-6xl relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center justify-center text-center mb-16">
          <h2 className="text-xs uppercase tracking-widest text-accent-cyan font-bold font-mono mb-3">
            07 // DISPATCH
          </h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-white dark:text-white">
            Contact <span className="gradient-text-purple-cyan text-neon-glow-purple">Me</span>
          </h3>
          <div className="w-12 h-1.5 bg-gradient-to-r from-accent-purple to-accent-cyan rounded-full mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-5xl mx-auto">
          
          {/* Left Details Info Panel */}
          <div className="lg:col-span-5 flex flex-col space-y-6">
            
            <GlassCard hoverGlowType="cyan" className="p-7">
              <h4 className="text-lg font-bold text-white mb-4">Let's Connect!</h4>
              <p className="text-xs md:text-sm text-dark-text/75 dark:text-white/60 leading-relaxed mb-8">
                I am actively seeking internship opportunities, research collaborations, and data science projects. If you have an opening or a technical interview invite, feel free to drop a message or reach out through my socials!
              </p>

              {/* Direct Reach items */}
              <div className="space-y-4">
                
                {/* Email Item */}
                <div className="flex items-center justify-between p-3.5 bg-black/30 border border-white/5 rounded-xl">
                  <div className="flex items-center space-x-3.5 min-w-0">
                    <div className="p-2 bg-accent-purple/10 text-accent-cyan rounded-lg">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <span className="block text-[10px] text-white/40 font-bold uppercase tracking-wider">Email Direct</span>
                      <span className="text-xs text-white/80 truncate block">{personalInfo.email}</span>
                    </div>
                  </div>
                  <button 
                    onClick={() => copyToClipboard(personalInfo.email, 'email')}
                    className="p-1.5 text-white/40 hover:text-white hover:bg-white/5 rounded-lg transition-colors cursor-pointer"
                    title="Copy Email to Clipboard"
                  >
                    {copiedType === 'email' ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* LinkedIn Item */}
                <div className="flex items-center justify-between p-3.5 bg-black/30 border border-white/5 rounded-xl">
                  <div className="flex items-center space-x-3.5 min-w-0">
                    <div className="p-2 bg-[#0a66c2]/10 text-accent-cyan rounded-lg">
                      <Linkedin className="w-4 h-4 text-[#0a66c2]" />
                    </div>
                    <div className="min-w-0">
                      <span className="block text-[10px] text-white/40 font-bold uppercase tracking-wider">LinkedIn Connect</span>
                      <span className="text-xs text-white/80 truncate block">Pagidala Venugopal Reddy</span>
                    </div>
                  </div>
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="p-1.5 text-white/40 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                    title="Visit LinkedIn Profile"
                  >
                    <Send className="w-4 h-4" />
                  </a>
                </div>

                {/* GitHub Item */}
                <div className="flex items-center justify-between p-3.5 bg-black/30 border border-white/5 rounded-xl">
                  <div className="flex items-center space-x-3.5 min-w-0">
                    <div className="p-2 bg-white/5 text-white rounded-lg">
                      <Github className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <span className="block text-[10px] text-white/40 font-bold uppercase tracking-wider">GitHub Codebases</span>
                      <span className="text-xs text-white/80 truncate block">venureddy07</span>
                    </div>
                  </div>
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noreferrer"
                    className="p-1.5 text-white/40 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                    title="Visit GitHub Repositories"
                  >
                    <Send className="w-4 h-4" />
                  </a>
                </div>

              </div>
            </GlassCard>

            {/* Micro visual shell */}
            <div className="hidden lg:block p-5 rounded-2xl glassmorphism border border-white/5 font-mono text-[9.5px] text-white/40">
              <div className="flex items-center space-x-2 text-accent-purple mb-2">
                <Terminal className="w-4 h-4" />
                <span>$ ping -c 1 red_center.net</span>
              </div>
              <div>64 bytes from mailserver.gmail.com: icmp_seq=1 ttl=56 time=14.2 ms</div>
              <div className="text-green-400 mt-1">Connection to Venugopal Reddy established. Ready.</div>
            </div>

          </div>

          {/* Right Actionable Form Panel */}
          <div className="lg:col-span-7 relative">
            <GlassCard hoverGlowType="purple" className="p-8">
              
              <AnimatePresence mode="wait">
                {submitStatus === 'success' ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="flex flex-col items-center justify-center text-center py-16"
                  >
                    <div className="p-4 rounded-full bg-green-500/10 text-green-400 mb-6 shadow-[0_0_20px_rgba(34,197,94,0.2)]">
                      <CheckCircle2 className="w-12 h-12" />
                    </div>
                    <h4 className="text-2xl font-bold text-white mb-2">Message Dispatched!</h4>
                    <p className="text-sm text-white/60 max-w-sm leading-relaxed">
                      Thank you for reaching out, Venugopal will review your message and reply via email shortly!
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-6">
                    
                    {/* Name field */}
                    <div className="flex flex-col">
                      <label htmlFor="name" className="text-[10px] uppercase tracking-widest text-white/50 font-bold font-mono mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        className={`px-4 py-3.5 rounded-xl bg-black/40 border text-sm text-white placeholder-white/20 focus:outline-none focus:ring-1 focus:ring-accent-cyan transition-colors ${
                          errors.name ? 'border-red-500/50' : 'border-white/10 dark:border-white/10'
                        }`}
                      />
                      {errors.name && (
                        <span className="text-[10px] text-red-400 font-semibold font-mono mt-1.5">{errors.name}</span>
                      )}
                    </div>

                    {/* Email field */}
                    <div className="flex flex-col">
                      <label htmlFor="email" className="text-[10px] uppercase tracking-widest text-white/50 font-bold font-mono mb-2">
                        Your Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="johndoe@example.com"
                        className={`px-4 py-3.5 rounded-xl bg-black/40 border text-sm text-white placeholder-white/20 focus:outline-none focus:ring-1 focus:ring-accent-cyan transition-colors ${
                          errors.email ? 'border-red-500/50' : 'border-white/10 dark:border-white/10'
                        }`}
                      />
                      {errors.email && (
                        <span className="text-[10px] text-red-400 font-semibold font-mono mt-1.5">{errors.email}</span>
                      )}
                    </div>

                    {/* Message field */}
                    <div className="flex flex-col">
                      <label htmlFor="message" className="text-[10px] uppercase tracking-widest text-white/50 font-bold font-mono mb-2">
                        Message Content
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows="4"
                        placeholder="Hi Venugopal, I would love to schedule a interview or collaborate on a project..."
                        className={`px-4 py-3.5 rounded-xl bg-black/40 border text-sm text-white placeholder-white/20 focus:outline-none focus:ring-1 focus:ring-accent-cyan transition-colors resize-none ${
                          errors.message ? 'border-red-500/50' : 'border-white/10 dark:border-white/10'
                        }`}
                      />
                      {errors.message && (
                        <span className="text-[10px] text-red-400 font-semibold font-mono mt-1.5">{errors.message}</span>
                      )}
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center space-x-2.5 px-6 py-4 rounded-xl bg-gradient-to-r from-accent-purple to-accent-cyan text-white font-bold tracking-wide hover:shadow-[0_0_20px_rgba(6,182,212,0.5)] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                          <span>Transmitting Secure Packet...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 animate-bounce" />
                          <span>Dispatch Message</span>
                        </>
                      )}
                    </button>

                  </form>
                )}
              </AnimatePresence>

            </GlassCard>
          </div>

        </div>

      </div>
    </section>
  );
}
