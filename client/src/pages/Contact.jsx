import React from 'react';
import { motion } from 'framer-motion';
import bannerImg from '../assets/HamzaHero.webp';

const campuses = [
  {
    id: "shahrah-e-faisal",
    title: "SHAHRAH FAISAL CAMPUS",
    subtitle: "V4MV+G22 Shah Faisal Town, Pakistan",
    address: "SHAH FAISAL CAMPUS",
    city: "Karachi, Pakistan",
    mapSrc: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3619.4164555519487!2d67.13995567537171!3d24.883772477914043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjTCsDUzJzAxLjYiTiA2N8KwMDgnMzMuMSJF!5e0!3m2!1sen!2s!4v1786688751365!5m2!1sen!2s"
  },
  {
    id: "model-colony",
    title: "MODEL COLONY CAMPUS",
    subtitle: "Linguaphile Academia",
    address: "Liaquat Ali Khan Rd, Model Colony Block 10 Model Colony",
    city: "Karachi, 75080, Pakistan",
    timing: "04:00 PM - 11:00 PM",
    phone: "+92 315 570 3306",
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.8949282249905!2d67.1931316!3d24.9015654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb3376104bf53e3%3A0xbab61c641f9cfcee!2sLinguaphile%20Academia!5e0!3m2!1sen!2s!4v1779273782800!5m2!1sen!2s"
  },
  {
    id: "saudabad",
    title: "SAUDABAD CAMPUS",
    subtitle: "Skill Box Institute",
    address: "W622+HF8, Indus Mehran",
    city: "Karachi, 75080, Pakistan",
    timing: "04:00 PM - 11:00 PM",
    phone: "+92 315 570 3306",
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.8992471596307!2d67.2012037!3d24.901418099999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33737ff54109d%3A0x21738722b899efb5!2sSkillBox!5e0!3m2!1sen!2s!4v1779273864635!5m2!1sen!2s"
  }
];

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

      {/* 2. Contact Details & Campuses Section */}
      <div className="container mx-auto px-6 relative z-30 -mt-12 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          
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

          {/* Physical Campuses Card with Small Maps */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-[#0b0b0b] border border-white/5 p-6 md:p-10 rounded-3xl backdrop-blur-xl flex flex-col justify-between"
          >
            <div>
              <h2 className="text-[#0066FF] text-[10px] uppercase tracking-[0.5em] font-bold mb-6">
                Karachi Campus Locations
              </h2>
              
              <div className="space-y-6">
                {campuses.map((campus) => (
                  <div 
                    key={campus.id} 
                    className="p-5 border border-white/10 bg-black/60 rounded-2xl hover:border-[#0066FF]/40 transition-all duration-300"
                  >
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-3">
                      <div>
                        <span className="bg-[#0066FF]/20 text-[#0066FF] text-[8px] uppercase tracking-widest px-2 py-0.5 font-bold rounded inline-block mb-1">
                          {campus.subtitle}
                        </span>
                        <h3 className="text-white text-base font-semibold tracking-wide">
                          {campus.title}
                        </h3>
                      </div>
                      <a 
                        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(campus.address + ' ' + campus.city)}`} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-[10px] text-[#0066FF] hover:underline font-medium uppercase tracking-wider"
                      >
                        Directions →
                      </a>
                    </div>

                    <p className="text-gray-300 text-xs mb-1">
                      {campus.address}, {campus.city}
                    </p>

                    {(campus.timing || campus.phone) && (
                      <div className="flex flex-wrap gap-x-4 gap-y-1 text-[11px] text-gray-400 mt-2 pt-2 border-t border-white/5">
                        {campus.timing && (
                          <span>🕒 <strong className="text-gray-300 font-normal">Timing:</strong> {campus.timing}</span>
                        )}
                        {campus.phone && (
                          <span>📞 <strong className="text-gray-300 font-normal">Phone:</strong> <a href={`tel:${campus.phone}`} className="hover:text-[#0066FF]">{campus.phone}</a></span>
                        )}
                      </div>
                    )}

                    {/* Small Map Embed */}
                    <div className="mt-3 w-full h-32 rounded-xl overflow-hidden border border-white/5">
                      <iframe
                        src={campus.mapSrc}
                        width="100%"
                        height="100%"
                        style={{ border: 0, filter: 'grayscale(0.8) contrast(1.2) invert(0.9)' }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title={campus.title}
                      />
                    </div>
                  </div>
                ))}
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