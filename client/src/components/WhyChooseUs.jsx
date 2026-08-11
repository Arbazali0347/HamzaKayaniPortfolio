import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Volume2, VolumeX, ShieldCheck, Cpu, Award, Zap } from 'lucide-react';
import video from "../assets/studyVideo.mp4";

const WhyChooseUsSpotlight = () => {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  const highlights = [
    { 
      icon: <ShieldCheck size={20} />, 
      title: "25+ Yrs Mentorship Heritage", 
      desc: "Guided by quarter-century market wisdom & second-gen trading precision." 
    },
    { 
      icon: <Cpu size={20} />, 
      title: "TAZ Tech & Indicator Suite", 
      desc: "Access to TAZ Cadet, Cadet Pro, & Semi-Prime market alert tools." 
    },
    { 
      icon: <Award size={20} />, 
      title: "SMC & ICT Mastery", 
      desc: "Specialized in Gold, FX, BTC, & Oil using institutional market structures." 
    },
    { 
      icon: <Zap size={20} />, 
      title: "Disciplined Risk Control", 
      desc: "Fixed stop-losses, strict R:R planning, and zero speculative guessing." 
    },
  ];

  return (
    <section className="bg-[#080808] py-20 md:py-28 px-6 md:px-20 relative overflow-hidden -mt-10 md:-mt-20 border-t border-b border-white/5">
      
      {/* Background Glow & Big Overlay Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#0066FF]/10 blur-[160px] pointer-events-none" />
      <h1 className="absolute top-10 left-1/2 -translate-x-1/2 text-[15vw] font-bold text-white/[0.02] uppercase pointer-events-none select-none tracking-tighter">
        WHY US
      </h1>

      <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center">
        
        {/* Main Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-24"
        >
          <span className="text-[#0066FF] tracking-[0.8em] uppercase text-[11px] font-semibold mb-6 block">
            The Alpha Edge
          </span>
          <h2 className="text-3xl md:text-6xl font-bold text-white tracking-tighter leading-[0.85] uppercase">
            HAMZA KAYANI <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/40 to-white/10">
              VISION & METHODOLOGY
            </span>
          </h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-32 w-full">
          
          {/* Left: Vertical Reel Video */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative w-full max-w-[300px] md:max-w-[360px] aspect-[9/16] rounded-[3.5rem] overflow-hidden border-[10px] border-[#121212] shadow-2xl z-20 group shrink-0"
          >
            <video
              ref={videoRef}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            >
              <source src={video} type="video/mp4" />
            </video>

            {/* Mute / Unmute Button */}
            <button 
              onClick={toggleMute}
              className="absolute bottom-10 right-8 p-4 bg-black/60 backdrop-blur-2xl border border-white/10 rounded-full text-white hover:bg-[#0066FF] transition-all z-30 shadow-lg"
              aria-label="Toggle Sound"
            >
              {isMuted ? <VolumeX size={22} /> : <Volume2 size={22} />}
            </button>
            
            {/* Dark Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
          </motion.div>

          {/* Right: Why Choose Us Content */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 space-y-12"
          >
            {/* Quote / Vision */}
            <div className="space-y-6">
              <span className="px-4 py-1.5 rounded-full bg-[#0066FF]/10 border border-[#0066FF]/30 text-[#0066FF] text-xs uppercase tracking-widest font-semibold inline-block">
                Leadership Statement
              </span>
              <p className="text-white text-xl md:text-3xl font-light leading-relaxed tracking-wide italic font-serif">
                "Financial education is not about prediction; it's about disciplined execution, risk management, and market structure mastery."
              </p>
              <div className="space-y-1">
                <h4 className="text-white font-bold text-lg uppercase tracking-wider">Hamza Kayani</h4>
                <p className="text-gray-400 text-xs tracking-widest uppercase">Founder & CEO — Trade Alpha Zone</p>
              </div>
              <p className="text-gray-400 text-[14px] md:text-[15px] font-light leading-loose max-w-lg">
                Discover why thousands trust Hamza Kayani's market philosophy. Combining institutional SMC/ICT concepts, practical live trading sessions, and proprietary tech tools to build real trader independence.
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-2xl bg-[#0066FF]/10 flex items-center justify-center text-[#0066FF] group-hover:bg-[#0066FF] group-hover:text-white transition-all duration-500 shrink-0">
                    {item.icon}
                  </div>
                  <div className="space-y-1">
                    <h5 className="text-white font-medium text-[12px] uppercase tracking-[0.15em]">
                      {item.title}
                    </h5>
                    <p className="text-gray-500 text-[12px] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA & Contact Details */}
            <div className="pt-10 border-t border-white/5 flex flex-col sm:flex-row items-start sm:items-center gap-8">
              <a 
                href="https://wa.me/923152939539" 
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-10 py-5 bg-white text-black font-bold text-[10px] tracking-[0.4em] uppercase rounded-full overflow-hidden transition-all duration-500 hover:text-white"
              >
                <span className="absolute inset-0 bg-[#0066FF] translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                <span className="relative z-10">Connect With CEO</span>
              </a>
              
              <div className="space-y-1">
                <p className="text-[9px] text-white/30 uppercase tracking-[0.4em]">Main Flagship</p>
                <p className="text-[11px] text-white/80 uppercase tracking-[0.1em] font-medium">Shah Faisal Colony, Karachi</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSpotlight;