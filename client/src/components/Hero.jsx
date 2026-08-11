import React from 'react';
import { motion } from 'framer-motion';
import hero from "../assets/HamzaHero.png";
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  return (
    // Section with relative positioning and dark theme
    <section className="relative h-screen w-full bg-[#080808] flex items-center overflow-hidden">

      {/* 1. Background Image with Parallax Effect */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.6 }}
          transition={{ duration: 2.5, ease: [0.16, 1, 0.3, 1] }}
          style={{
            backgroundImage: `url(${hero})`,
            backgroundAttachment: 'fixed',
          }}
          className="w-full h-full bg-cover bg-center grayscale-[10%]"
        />

        {/* Multilayer Overlays for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#080808] via-transparent to-black/20 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/20 to-transparent z-10" />
      </div>

      {/* 2. Main Content Layout */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-10 md:px-20 h-full flex flex-col justify-center">

        <div className="flex flex-col md:flex-row justify-between items-start md:items-end w-full pb-12">

          {/* Left Side: Branding & Main Headings */}
          <div className="max-w-xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="flex items-center gap-4 mb-6"
            >
              <div className="w-10 h-[1px] bg-[#0066FF]/60"></div>
              <span className="text-white tracking-[0.5em] uppercase text-[9px] font-medium">
                Founder & CEO // Trade Alpha Zone
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.2 }}
              className="text-6xl md:text-8xl lg:text-9xl font-light text-white mb-8 leading-[0.95] tracking-tighter"
            >
              HAMZA <br />
              <span className="italic font-serif text-white/70">KAYANI.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="max-w-xs text-gray-300 text-[10px] font-light leading-relaxed tracking-[0.25em] uppercase italic"
            >
              Financial Education for Everyone. <br />
              Empowering the next generation of leaders.
            </motion.p>
          </div>

          {/* Right Side: Navigation & CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.6 }}
            className="flex flex-col items-start md:items-end gap-10 mt-16 md:mt-0"
          >
            <div className="flex flex-col items-start md:items-end gap-8">
              <button 
                onClick={() => navigate("/details")} 
                className="group relative flex flex-col items-start md:items-end"
              >
                <span className="text-white text-[10px] uppercase tracking-[0.4em] font-medium mb-2 group-hover:text-[#0066FF] transition-colors duration-500">
                  Explore Courses & Tech
                </span>
                <div className="w-32 h-[1px] bg-white/10 relative overflow-hidden">
                  <div className="absolute inset-0 bg-[#0066FF]/80 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500"></div>
                </div>
              </button>

              <button 
                onClick={() => navigate("/about")} 
                className="group relative flex flex-col items-start md:items-end"
              >
                <span className="text-white/40 text-[10px] uppercase tracking-[0.4em] font-light mb-2 group-hover:text-white transition-colors duration-500">
                  About Founder
                </span>
                <div className="w-16 h-[1px] bg-white/5 group-hover:w-24 group-hover:bg-[#0066FF]/50 transition-all duration-500"></div>
              </button>
            </div>

            <div className="flex items-center gap-6 pt-4">
              <p className="text-[8px] tracking-[0.8em] text-white/20 uppercase whitespace-nowrap font-light">
                Trade Alpha Zone — PK
              </p>
              <div className="w-12 h-[1px] bg-gradient-to-r from-[#0066FF]/40 to-transparent"></div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Aesthetic Blue Edge Accents */}
      <div className="absolute top-0 right-0 w-[30%] h-full bg-gradient-to-l from-[#0066FF]/5 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#0066FF]/20 to-transparent z-20" />

    </section>
  );
};

export default Hero;