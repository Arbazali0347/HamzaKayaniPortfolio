import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Cpu, MapPin, Award, ExternalLink, ArrowRight, Phone } from 'lucide-react';

const FounderSection = () => {
  return (
    <section className="relative bg-[#080808] py-24 overflow-hidden border-t border-b border-white/5">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#0066FF]/10 blur-[140px] rounded-full pointer-events-none z-0" />

      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#0066FF] tracking-[0.6em] uppercase text-[10px] font-bold mb-3 block"
          >
            Leadership & Vision
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-light text-white tracking-tight"
          >
            DRIVING <span className="italic font-serif text-white/50">FINANCIAL FREEDOM.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/40 text-xs md:text-sm tracking-wider uppercase mt-4 leading-relaxed"
          >
            "Financial Education For Everyone" — Building Pakistan’s most trusted market-education community.
          </motion.p>
        </div>

        {/* Top Grid: CEO Intro & Core Philosophy */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          
          {/* Founder Bio Card */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 bg-[#0b0b0b] border border-white/5 p-8 md:p-12 rounded-3xl backdrop-blur-xl flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="w-2 h-2 rounded-full bg-[#0066FF] animate-pulse" />
                <span className="text-white/40 text-[9px] uppercase tracking-[0.3em] font-semibold">Founder & Chief Executive Officer</span>
              </div>

              <h3 className="text-3xl md:text-4xl text-white font-light tracking-tight mb-2">
                Hamza Kayani
              </h3>
              <p className="text-[#0066FF] text-xs uppercase tracking-[0.2em] font-medium mb-6">
                Second-Generation Trader & Market Educator
              </p>

              <p className="text-white/60 text-sm leading-relaxed mb-8">
                Mentored by industry veterans with over 25+ years of market exposure. Hamza Kayani specializes in Gold, Currencies, Bitcoin, and Oil — instilling strict risk management, market structure, SMC/ICT concepts, and supply-demand precision into thousands of active learners.
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {['Smart Money Concepts (SMC)', 'ICT Framework', 'Risk Management', 'Gold Specialist', 'Supply & Demand'].map((tag) => (
                  <span key={tag} className="text-[9px] uppercase tracking-widest text-white/70 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-10 pt-6 border-t border-white/5 flex flex-wrap justify-between items-center gap-4">
              <div className="flex items-center gap-2 text-white/40 text-[10px] uppercase tracking-widest">
                <Award size={14} className="text-[#0066FF]" />
                <span>Mentoring 10,000+ Community Members</span>
              </div>
            </div>
          </motion.div>

          {/* Technology & Software Ecosystem */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 bg-[#0b0b0b] border border-white/5 p-8 md:p-12 rounded-3xl backdrop-blur-xl flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2 text-[#0066FF] text-[10px] font-bold uppercase tracking-[0.4em] mb-6">
                <Cpu size={16} />
                <span>TAZ Tech Suite</span>
              </div>

              <h3 className="text-2xl text-white font-light tracking-tight mb-4">
                Proprietary Trading Software & Indicators
              </h3>

              <p className="text-white/50 text-xs leading-relaxed mb-6">
                Hamza Kayani has spearheaded custom technology initiatives designed to assist traders with algorithmic precision, automated market alerts, and structural guidance.
              </p>

              <div className="space-y-3">
                {[
                  { name: 'TAZ Cadet', desc: 'Entry-level structural market scanner' },
                  { name: 'TAZ Cadet Pro', desc: 'Advanced multi-timeframe analysis suite' },
                  { name: 'TAZ Semi-Prime', desc: 'Institutional order block & liquidity alert tool' },
                ].map((item) => (
                  <div key={item.name} className="p-3.5 bg-black/50 border border-white/5 rounded-xl flex items-center justify-between">
                    <div>
                      <h4 className="text-white text-xs font-semibold">{item.name}</h4>
                      <p className="text-white/40 text-[10px]">{item.desc}</p>
                    </div>
                    <span className="w-2 h-2 rounded-full bg-[#0066FF]/60" />
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/5 text-white/30 text-[9px] uppercase tracking-[0.3em]">
              Free Access For TAZ Community
            </div>
          </motion.div>

        </div>

        {/* Bottom Bar: Campuses & CTA */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Campuses Overview */}
          <div className="md:col-span-2 bg-[#0b0b0b] border border-white/5 p-6 md:p-8 rounded-3xl flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <div className="flex items-center gap-2 text-[#0066FF] text-[10px] font-bold uppercase tracking-widest mb-2">
                <MapPin size={14} />
                <span>Karachi Campuses</span>
              </div>
              <h4 className="text-white text-lg font-light">Physical Presence & Live Trading Floors</h4>
              <p className="text-white/40 text-xs mt-1">Shah Faisal Colony (Flagship) | Model Colony | Saudabad</p>
            </div>
            <a 
              href="/contact" 
              className="text-xs uppercase tracking-widest text-white border border-white/20 hover:border-[#0066FF] hover:bg-[#0066FF] px-6 py-3 rounded-full transition-all duration-300 flex items-center gap-2 whitespace-nowrap"
            >
              <span>Visit Campus</span>
              <ArrowRight size={14} />
            </a>
          </div>

          {/* Quick Contact CTA */}
          <div className="bg-[#0066FF]/10 border border-[#0066FF]/30 p-6 md:p-8 rounded-3xl flex flex-col justify-between">
            <div>
              <span className="text-[#0066FF] text-[9px] uppercase font-bold tracking-widest block mb-1">Direct Hotline</span>
              <a href="tel:03152939539" className="text-white text-xl font-medium hover:text-[#0066FF] transition-colors flex items-center gap-2">
                <Phone size={18} className="text-[#0066FF]" />
                <span>0315-2939539</span>
              </a>
            </div>
            <div className="mt-4 pt-4 border-t border-[#0066FF]/20 flex justify-between items-center text-[9px] uppercase tracking-widest text-white/60">
              <span>Official Support</span>
              <a href="https://www.tradealphazone.com" target="_blank" rel="noopener noreferrer" className="text-[#0066FF] hover:underline flex items-center gap-1">
                <span>Website</span>
                <ExternalLink size={10} />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default FounderSection;