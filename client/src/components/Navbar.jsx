import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ExternalLink } from 'lucide-react';
import logo from "../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Pages: Home, Details, Contact
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Details', href: '/details' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <>
      {/* Top Gradient Overlay */}
      <div className="fixed top-0 left-0 w-full h-40 bg-gradient-to-b from-black/80 via-black/40 to-transparent z-[90] pointer-events-none" />

      <nav className="fixed top-0 left-0 w-full z-[100] flex justify-center py-6 md:py-8 px-4 pointer-events-none">
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className={`pointer-events-auto flex items-center justify-between w-[95%] h-14 md:h-16 px-6 md:px-10 rounded-full border transition-all duration-500
            ${isScrolled
              ? "bg-[#0A0A0A]/95 backdrop-blur-2xl border-white/10 shadow-[0_10px_30px_rgba(0,102,255,0.08)]"
              : "bg-black/20 backdrop-blur-md border-white/5"}`}
        >
          {/* 1. Logo */}
          <div className="flex items-center cursor-pointer" onClick={() => navigate("/")}>
            <img
              src={logo}
              alt="Trade Alpha Zone Logo"
              className="h-8 md:h-10 w-auto object-contain brightness-110 contrast-125"
            />
          </div>

          {/* 2. Desktop Links */}
          <div className="hidden md:flex items-center gap-10 lg:gap-14">
            {navLinks.map((link, idx) => (
              <Link
                key={link.name}
                to={link.href}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="relative text-[10px] tracking-[0.4em] uppercase text-white/70 hover:text-white transition-colors duration-300 font-medium py-1"
              >
                {link.name}
                <AnimatePresence>
                  {hoveredIndex === idx && (
                    <motion.span
                      layoutId="nav-line"
                      initial={{ scaleX: 0, opacity: 0 }}
                      animate={{ scaleX: 1, opacity: 1 }}
                      exit={{ scaleX: 0, opacity: 0 }}
                      className="absolute -bottom-1 left-0 w-full h-[1.5px] bg-[#0066FF] shadow-[0_0_10px_#0066FF]"
                    />
                  )}
                </AnimatePresence>
              </Link>
            ))}
          </div>

          {/* 3. Action / Website Link Button */}
          <div className="flex items-center gap-4">
            <a
              href="https://tradealphazone.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-2 group relative px-6 py-2 rounded-full border border-[#0066FF]/40 overflow-hidden transition-all duration-500 hover:border-[#0066FF] hover:shadow-[0_0_20px_rgba(0,102,255,0.4)]"
            >
              <span className="absolute inset-0 bg-[#0066FF] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <span className="relative z-10 text-[9px] tracking-[0.25em] font-bold uppercase text-white flex items-center gap-1.5">
                Trade Alpha Zone <ExternalLink size={11} />
              </span>
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setIsOpen(true)}
              className="md:hidden text-white/80 hover:text-[#0066FF] transition-colors p-1"
            >
              <Menu size={22} />
            </button>
          </div>
        </motion.div>
      </nav>

      {/* 4. Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.4 }}
            className="fixed inset-0 z-[110] bg-[#080808] flex flex-col p-10 md:hidden justify-between border-l border-white/5"
          >
            <div>
              <div className="flex justify-end">
                <button onClick={() => setIsOpen(false)} className="text-white/50 hover:text-white p-2">
                  <X size={32} strokeWidth={1} />
                </button>
              </div>

              <div className="flex flex-col gap-8 mt-12">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-4xl font-light tracking-tighter text-white/90 hover:text-[#0066FF] transition-colors uppercase italic"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Mobile External Website Link */}
            <div className="pt-6 border-t border-white/10">
              <a
                href="https://tradealphazone.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between text-xs tracking-[0.2em] text-[#0066FF] uppercase font-semibold hover:brightness-125 transition-all"
              >
                <span>Visit Main Website</span>
                <ExternalLink size={16} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;