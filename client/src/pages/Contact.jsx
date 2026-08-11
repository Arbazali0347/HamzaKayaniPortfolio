import React from 'react';
import { motion } from 'framer-motion';
import bannerImg from '../assets/HamzaHero.png';

const Contact = () => {
  return (
    <div className="bg-[#080808] min-h-screen pb-20 overflow-x-hidden">
      
      {/* 1. Cinematic Fixed Banner */}
      <div className="relative h-[55vh] w-full overflow-hidden flex items-center justify-center">
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
            Get In Touch
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl font-light text-white tracking-tighter"
          >
            CONNECT <span className="italic font-serif text-white/50">WITH TAZ.</span>
          </motion.h1>
          <p className="text-gray-400 text-xs md:text-sm mt-3 tracking-widest uppercase">
            Hamza Kayani — Founder & CEO | Trade Alpha Zone
          </p>
        </div>
      </div>

      {/* 2. Contact Details Section (No Map) */}
      <div className="container mx-auto px-6 relative z-30 -mt-12 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Main Direct Contact Card */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#0b0b0b] border border-white/5 p-8 md:p-12 rounded-3xl backdrop-blur-xl flex flex-col justify-between"
          >
            <div>
              <h2 className="text-[#0066FF] text-[10px] uppercase tracking-[0.5em] font-bold mb-8">
                Official Channels
              </h2>
              
              <div className="space-y-8">
                {/* Phone Hotline */}
                <div className="group">
                  <span className="text-white/30 text-[9px] uppercase tracking-[0.3em] block mb-1">
                    Direct Phone & WhatsApp
                  </span>
                  <a 
                    href="tel:03152939539" 
                    className="text-white text-xl md:text-3xl font-light tracking-tight group-hover:text-[#0066FF] transition-colors duration-300"
                  >
                    0315-2939539
                  </a>
                </div>

                {/* Email */}
                <div className="group">
                  <span className="text-white/30 text-[9px] uppercase tracking-[0.3em] block mb-1">
                    Official Email
                  </span>
                  <a 
                    href="mailto:Contact@tradealphazone.com" 
                    className="text-white text-xl md:text-2xl font-light tracking-tight group-hover:text-[#0066FF] transition-colors duration-300 block"
                  >
                    Contact@tradealphazone.com
                  </a>
                </div>

                {/* Website & Socials */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                  <div className="group">
                    <span className="text-white/30 text-[9px] uppercase tracking-[0.3em] block mb-1">
                      Website
                    </span>
                    <a 
                      href="https://www.tradealphazone.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-white text-base md:text-lg font-light group-hover:text-[#0066FF] transition-colors duration-300"
                    >
                      www.tradealphazone.com
                    </a>
                  </div>

                  <div className="group">
                    <span className="text-white/30 text-[9px] uppercase tracking-[0.3em] block mb-1">
                      Instagram
                    </span>
                    <a 
                      href="https://instagram.com/trade_alpha_zone" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-white text-base md:text-lg font-light group-hover:text-[#0066FF] transition-colors duration-300"
                    >
                      @trade_alpha_zone
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-6 border-t border-white/5 flex justify-between items-center text-white/30 text-[9px] uppercase tracking-[0.3em]">
              <span>Response Time: Immediate</span>
              <span>Karachi, Pakistan</span>
            </div>
          </motion.div>

          {/* Physical Campuses Card */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-[#0b0b0b] border border-white/5 p-8 md:p-12 rounded-3xl backdrop-blur-xl flex flex-col justify-between"
          >
            <div>
              <h2 className="text-[#0066FF] text-[10px] uppercase tracking-[0.5em] font-bold mb-8">
                Karachi Campus Locations
              </h2>
              
              <div className="space-y-6">
                {/* Flagship */}
                <div className="p-4 border border-[#0066FF]/20 bg-black/40 rounded-xl">
                  <span className="bg-[#0066FF]/20 text-[#0066FF] text-[8px] uppercase tracking-widest px-2 py-0.5 font-bold rounded mb-2 inline-block">
                    Flagship HQ
                  </span>
                  <h3 className="text-white text-lg font-medium">Shah Faisal Colony Campus</h3>
                  <p className="text-gray-400 text-xs mt-1">
                    Main institute hub for live trading floors, mentorship, and executive sessions.
                  </p>
                </div>

                {/* Model Colony */}
                <div className="p-4 border border-white/5 bg-black/40 rounded-xl">
                  <span className="text-white/40 text-[8px] uppercase tracking-widest block mb-1">
                    Branch Campus
                  </span>
                  <h3 className="text-white text-lg font-medium">Model Colony Campus</h3>
                  <p className="text-gray-400 text-xs mt-1">
                    Hands-on practical labs and digital skill course sessions.
                  </p>
                </div>

                {/* Saudabad */}
                <div className="p-4 border border-white/5 bg-black/40 rounded-xl">
                  <span className="text-white/40 text-[8px] uppercase tracking-widest block mb-1">
                    Branch Campus
                  </span>
                  <h3 className="text-white text-lg font-medium">Saudabad Campus</h3>
                  <p className="text-gray-400 text-xs mt-1">
                    Community hub offering technical trading courses and support.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/5 text-white/30 text-[9px] uppercase tracking-[0.3em] text-center md:text-left">
              Mission: Financial Education For Everyone
            </div>
          </motion.div>

        </div>
      </div>

      {/* Background Decor */}
      <div className="fixed bottom-0 right-0 w-[500px] h-[500px] bg-[#0066FF]/5 blur-[150px] rounded-full pointer-events-none z-0" />
    </div>
  );
};

export default Contact;