import React from 'react';
import { motion } from 'framer-motion';
import showcase from "../assets/show4.webp";
import showcase2 from "../assets/show2.webp";
import showcase3 from "../assets/show_3.jpg";
import showcase4 from "../assets/show3.webp";

const showcaseItems = [
  {
    id: 1,
    img: showcase3,
    layoutClass: "col-span-1 md:col-span-2 h-[420px] md:h-[500px]"
  },
  {
    id: 2,
    img: showcase2,
    layoutClass: "col-span-1 md:col-span-1 h-[420px] md:h-[500px]"
  },
  {
    id: 3,
    img: showcase,
    layoutClass: "col-span-1 md:col-span-1 h-[350px]"
  },
  {
    id: 4,
    img: showcase4,
    layoutClass: "col-span-1 md:col-span-2 h-[350px]"
  }
];

const Showcase = () => {
  return (
    <section className="bg-[#080808] py-28 px-6 md:px-20 overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-16 flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="max-w-xl"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-[1px] bg-[#0066FF]" />
              <span className="text-[#0066FF] tracking-[0.5em] uppercase text-[10px] font-semibold">
                Impact & Milestones
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-light text-white tracking-tight leading-tight">
              Where <span className="italic font-serif opacity-70">Vision</span> <br /> 
              Transforms Communities.
            </h2>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.5 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-xs text-gray-300 text-[11px] font-light leading-relaxed tracking-widest uppercase italic"
          >
            A visual showcase of TAZ grand events, live trading competitions, award ceremonies, and campus initiatives led by Hamza Kayani.
          </motion.p>
        </div>

        {/* New Asymmetric Layout Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {showcaseItems.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`relative overflow-hidden group rounded-sm bg-[#111] ${item.layoutClass} transform-gpu border border-white/5`}
            >
              {/* Optimized Image */}
              <img
                src={item.img}
                alt={item.title}
                loading="lazy"
                className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out will-change-transform"
              />

              {/* Permanent Subtitle & Hover Full Reveal Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-black/30 to-transparent p-8 md:p-10 flex flex-col justify-end">
                <span className="text-[#0066FF] text-[9px] tracking-[0.4em] uppercase font-semibold mb-2">
                  {item.category}
                </span>
                <h3 className="text-white text-xl md:text-2xl font-light tracking-wide uppercase">
                  {item.title}
                </h3>
                
                {/* Accent Line */}
                <div className="w-8 group-hover:w-full h-[1px] bg-[#0066FF] mt-4 transition-all duration-500 ease-in-out" />
              </div>

              {/* Aesthetic Corner Frame */}
              <div className="absolute top-6 right-6 w-6 h-6 border-t border-r border-white/20 group-hover:border-[#0066FF] transition-colors duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* Bottom Accent */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 flex justify-center"
        >
          <div className="group flex flex-col items-center">
             <p className="text-[9px] tracking-[0.8em] text-white/30 uppercase mb-4">
               Trade Alpha Zone Ecosystem — Karachi
             </p>
             <div className="w-[1px] h-12 bg-gradient-to-b from-[#0066FF] to-transparent" />
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Showcase;