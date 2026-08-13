import React from 'react';
import { motion } from 'framer-motion';
import hamzaAboutImg from '../assets/ShortAbout.jpeg'; // Aap apni preferred image asset path use kar sakte hain

const ShortAbout = () => {
  return (
    <section className="relative bg-[#080808] py-28 px-6 md:px-20 overflow-hidden border-t border-white/5">
      
      {/* Background Subtle Accent */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-[#0066FF]/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left Side: Image with Framing & Vertical Accent */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-5 relative"
        >
          {/* Main Image Wrapper */}
          <div className="relative z-10 w-full h-[500px] md:h-[580px] bg-[#111] overflow-hidden rounded-sm group border border-white/10">
            <img 
              src={hamzaAboutImg} 
              alt="Hamza Kayani - Founder & CEO" 
              className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out will-change-transform"
            />
            {/* Dark Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent opacity-80" />
            
            {/* Image Corner Accent */}
            <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-[#0066FF]" />
            <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-[#0066FF]" />
          </div>

          {/* Vertical Watermark / Tag Text */}
          <div className="hidden md:block absolute -right-8 top-12 z-20 origin-top-right rotate-90">
            <span className="text-[9px] uppercase tracking-[0.6em] text-white/30 font-medium">
              Karachi, Pakistan — TAZ CEO
            </span>
          </div>
        </motion.div>


        {/* Right Side: Professional Content */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-7 flex flex-col justify-center"
        >
          {/* Section Subtitle */}
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-[1px] bg-[#0066FF]" />
            <span className="text-[#0066FF] tracking-[0.5em] uppercase text-[10px] font-semibold">
              The Mind Behind TAZ
            </span>
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl md:text-5xl font-light text-white tracking-tight leading-tight mb-6">
            Hamza Kayani <br />
            <span className="italic font-serif opacity-70 text-2xl md:text-4xl">
              Founder & CEO of Trade Alpha Zone
            </span>
          </h2>

          {/* Core Summary Paragraphs */}
          <div className="space-y-4 text-gray-400 text-sm md:text-base font-light leading-relaxed mb-8">
            <p>
              Hamza Kayani is a Karachi-based entrepreneur, market educator, and a <strong className="text-white font-normal">second-generation trader</strong> mentored by financial industry veterans with over 25 years of market experience.
            </p>
            <p>
              Under his leadership, Trade Alpha Zone (TAZ) was founded with a singular mission: <em className="text-white font-normal italic">“Financial Education for Everyone.”</em> He specializes in Gold, Currencies, Bitcoin, and Crude Oil, pioneering practical education through Smart Money Concepts (SMC/ICT), risk management, and disciplined market structures.
            </p>
          </div>

          {/* Key Highlight Badges Grid */}
          <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10 mb-8">
            <div>
              <p className="text-[#0066FF] text-[10px] tracking-[0.3em] uppercase mb-1 font-medium">Focus Markets</p>
              <p className="text-white text-xs md:text-sm font-light">Gold, Forex, BTC & Oil</p>
            </div>
            <div>
              <p className="text-[#0066FF] text-[10px] tracking-[0.3em] uppercase mb-1 font-medium">Methodology</p>
              <p className="text-white text-xs md:text-sm font-light">SMC/ICT & Fixed Stop-Loss</p>
            </div>
            <div>
              <p className="text-[#0066FF] text-[10px] tracking-[0.3em] uppercase mb-1 font-medium">Physical Network</p>
              <p className="text-white text-xs md:text-sm font-light">3 Campuses in Karachi</p>
            </div>
            <div>
              <p className="text-[#0066FF] text-[10px] tracking-[0.3em] uppercase mb-1 font-medium">Core Tech</p>
              <p className="text-white text-xs md:text-sm font-light">Cadet, Cadet Pro & AutoSignalX</p>
            </div>
          </div>

          {/* Quote / Philosophy Statement */}
          <div className="p-4 bg-[#111] border-l-2 border-[#0066FF] rounded-r-sm">
            <p className="text-xs text-gray-300 italic font-serif leading-relaxed">
              "Trading is not about prediction; it's about emotional discipline, risk-to-reward planning, and execution under live market conditions."
            </p>
          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default ShortAbout;