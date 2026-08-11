import React from 'react';
import { motion } from 'framer-motion';
import bannerImg from '../assets/HamzaHero.webp';

const About = () => {
  return (
    <div className="bg-[#080808] min-h-screen pb-20 overflow-x-hidden">
      
      {/* 1. Cinematic Fixed Banner */}
      <div className="relative h-[65vh] w-full overflow-hidden flex items-center justify-center">
        <div 
          style={{ 
            backgroundImage: `url(${bannerImg})`,
            backgroundAttachment: 'fixed',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
          }}
          className="absolute inset-0 opacity-40"
        />
        
        {/* Overlays */}
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-[#080808] to-transparent z-10" />

        <div className="relative z-20 text-center px-6">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[#0066FF] tracking-[0.8em] uppercase text-[10px] font-bold mb-4 block"
          >
            Founder & CEO Profile
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-6xl md:text-8xl font-light text-white tracking-tighter uppercase"
          >
            HAMZA <span className="italic font-serif text-white/50">KAYANI.</span>
          </motion.h1>
          <p className="text-gray-400 text-xs md:text-sm mt-4 tracking-[0.3em] uppercase font-light">
            Market Educator • Second-Generation Trader • Community Mentor
          </p>
        </div>
      </div>

      {/* 2. Personal Story & Bio Section */}
      <div className="container mx-auto px-6 relative z-30 -mt-16 max-w-5xl">
        <div className="bg-[#0b0b0b] border border-white/5 p-8 md:p-16 rounded-3xl backdrop-blur-xl">
          
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-[#0066FF] text-[10px] uppercase tracking-[0.5em] font-bold mb-8">
              Personal Biography & Vision
            </h2>
            
            <p className="text-white text-2xl md:text-4xl font-light leading-snug mb-12 tracking-tight">
              Driven by the principle of <span className="text-[#0066FF] italic font-serif">"Financial Education for Everyone,"</span> Hamza Kayani is dedicated to empowering individuals through disciplined market mastery and practical risk management.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-white/60 text-xs md:text-sm leading-relaxed tracking-wide font-light">
              <p>
                Based in Karachi, Hamza Kayani is a second-generation trader and market educator. Mentored by a seasoned financial professional with over 25 years of market experience, he brings deep insight, structural discipline, and institutional market clarity to his teaching.
              </p>
              <p>
                His primary trading focus centers on Gold, Forex currencies, Bitcoin, and Oil. Hamza is a strong advocate of fixed stop-losses, proper risk-to-reward planning, emotional discipline, and practical live-market execution over speculative guessing.
              </p>
            </div>
          </motion.div>

          {/* Key Specializations / Core Concepts */}
          <div className="mt-16 pt-10 border-t border-white/5">
            <h3 className="text-white/40 text-[9px] uppercase tracking-[0.4em] mb-6 font-semibold">
              Trading Methodology & Focus Areas
            </h3>
            <div className="flex flex-wrap gap-3">
              {[
                'Smart Money Concepts (SMC)',
                'ICT Framework',
                'Gold & Commodities Specialist',
                'Supply & Demand Imbalance',
                'Exponential Moving Averages (EMA)',
                'Relative Strength Index (RSI)',
                'Market Structure Analysis',
                'Strict Risk Management'
              ].map((concept, index) => (
                <span 
                  key={index} 
                  className="bg-white/5 border border-white/10 text-white/80 text-[10px] uppercase tracking-wider px-4 py-2 rounded-full hover:border-[#0066FF] hover:text-[#0066FF] transition-colors duration-300"
                >
                  {concept}
                </span>
              ))}
            </div>
          </div>

          {/* Personal Stats / Highlights */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-10 border-t border-white/5">
            {[
              { label: 'Market Mentorship Heritage', value: '25+ Yrs' },
              { label: 'Primary Market Focus', value: 'XAU/USD' },
              { label: 'Teaching Philosophy', value: '100% Practical' },
              { label: 'Core Objective', value: 'Financial Freedom' },
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col gap-1"
              >
                <span className="text-white text-xl md:text-2xl font-bold tracking-tight">{stat.value}</span>
                <span className="text-[#0066FF] text-[8px] uppercase tracking-widest font-semibold">{stat.label}</span>
              </motion.div>
            ))}
          </div>

        </div>
      </div>

      {/* 3. Personal Vision Statement */}
      <div className="container mx-auto px-6 mt-28 text-center max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-[#0066FF] text-[9px] uppercase tracking-[0.6em] block mb-4 font-bold">
            Long-Term Vision
          </span>
          <p className="text-white/70 text-lg md:text-xl font-light italic leading-relaxed">
            "To build a trusted national and international ecosystem for practical financial skills, technology-driven trading analysis, and future financial leaders."
          </p>
          <div className="w-16 h-[1px] bg-[#0066FF] mx-auto mt-8"></div>
        </motion.div>
      </div>

      {/* Background Decor */}
      <div className="fixed top-0 left-0 w-[500px] h-[500px] bg-[#0066FF]/5 blur-[150px] rounded-full pointer-events-none z-0" />
    </div>
  );
};

export default About;