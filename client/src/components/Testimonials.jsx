import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote } from 'lucide-react';
import test from "../assets/HamzaHero.png";

const testimonials = [
  {
    id: 1,
    text: "Trade Alpha Zone Academy changed my complete approach towards financial markets. The risk management strategies and live trading mentorship gave me true confidence.",
    name: "Hamza Kayani",
    role: "CEO & Head Trader"
  },
  {
    id: 2,
    text: "Joining Trade Alpha Zone was the best decision for my trading career. Their practical market breakdown and price action analysis are unmatched.",
    name: "Arbaz Ali",
    role: "Full-Time Trader"
  },
  {
    id: 3,
    text: "From basic charting to complex algorithmic concepts, Trade Alpha Zone Academy provides world-class guidance for serious traders in Pakistan.",
    name: "Hamza Sheikh",
    role: "Crypto & Forex Analyst"
  },
  {
    id: 4,
    text: "The live trading sessions helped me eliminate emotional trading completely. Highly recommended for anyone wanting to achieve financial freedom.",
    name: "Daniyal Khan",
    role: "Funded Account Trader"
  }
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[550px] flex items-center justify-center overflow-hidden">
      
      {/* 1. Background Image with Fixed Effect */}
      <div 
        className="absolute inset-0 bg-fixed bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${test})` }}
      />

      {/* 2. Overlays */}
      <div className="absolute inset-0 z-10">
        <div className="absolute inset-0 bg-black/75" />
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#080808] to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#080808] to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-20">
        {/* Quote Icon - Trading Blue accent */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="flex justify-center mb-6"
        >
          <Quote size={24} className="text-[#0066FF]/70" fill="currentColor" />
        </motion.div>

        {/* Sliding Text Content */}
        <div className="relative h-40 md:h-32 max-w-2xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="absolute inset-0 flex flex-col items-center justify-center text-center"
            >
              <p className="text-lg md:text-xl font-light text-white/80 leading-relaxed italic tracking-wide">
                "{testimonials[index].text}"
              </p>
              
              <div className="mt-6">
                <h4 className="text-[#0066FF] font-bold tracking-[0.4em] uppercase text-[10px]">
                  {testimonials[index].name}
                </h4>
                <p className="text-white/30 text-[9px] uppercase tracking-[0.2em] mt-1">
                  {testimonials[index].role}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* 3. Navigation Dots - Active Blue */}
        <div className="flex justify-center gap-2 mt-12">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-[2px] transition-all duration-500 rounded-full ${
                i === index ? "w-10 bg-[#0066FF]" : "w-4 bg-white/10"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;