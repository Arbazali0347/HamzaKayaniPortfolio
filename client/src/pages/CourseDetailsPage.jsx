import React from 'react';
import { motion } from 'framer-motion';
import eventImg from "../assets/show_3.jpg";
import tradingImg from "../assets/show1.webp";
import heroImg from "../assets/Education.jpeg"
// =========================================================================
// IMAGE VARIABLES (Apne requirements ke mutabiq local assets ya URLs change karlein)
// =========================================================================
const softwareImg = "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800";
const skillsImg = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800";
const campusImg = "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800";


const CourseDetailsPage = () => {
  return (
    <div className="bg-[#080808] text-white min-h-screen font-sans">
      {/* 1. HERO BANNER */}
      <section className="relative py-20 px-6 md:px-16 border-b border-white/10 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center mt-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[#0066FF] text-xs font-semibold tracking-[0.3em] uppercase block mb-3">
              Trade Alpha Zone Ecosystem
            </span>
            <h1 className="text-3xl md:text-5xl font-light leading-tight mb-6">
              Financial Education <br />
              <span className="text-[#0066FF] font-semibold">For Everyone</span>
            </h1>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-8">
              Founded by Hamza Kayani, TAZ Institute (Trade Alpha Zone) combines practical trading education, proprietary signal software, professional digital-skill development, and physical campus mentorship across Karachi.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#trading" className="bg-[#0066FF] hover:bg-blue-600 text-white text-xs tracking-wider uppercase px-6 py-3 font-medium transition-all">
                Trading Education
              </a>
              <a href="#skills" className="border border-white/20 hover:border-white text-white text-xs tracking-wider uppercase px-6 py-3 font-medium transition-all">
                Flagship Institute
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative h-[320px] md:h-[400px] border border-white/10 overflow-hidden"
          >
            <img src={heroImg} alt="Trade Alpha Zone" className="w-full h-full object-cover opacity-80" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent" />
          </motion.div>
        </div>
      </section>


      {/* 2. HAMZA KAYANI'S TRADING METHODOLOGY & COURSES */}
      <section id="trading" className="py-20 px-6 md:px-16 border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <span className="text-[#0066FF] text-xs tracking-[0.3em] uppercase font-semibold font-mono">FINANCIAL EDUCATION</span>
            <h2 className="text-2xl md:text-4xl font-light mt-2">Financial Markets & Trading Methodology</h2>
            <p className="text-gray-400 text-xs mt-2 max-w-2xl">
              Led by Founder & CEO Hamza Kayani, second-generation trader, focusing on Gold, Forex Currencies, Bitcoin, and Oil. One flagship programme, beginner to advanced, taught across TAZ's Karachi campuses.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content: Key Concepts */}
            <div className="space-y-4">
              <div className="bg-[#111] p-6 border border-white/5">
                <h3 className="text-base font-semibold text-white mb-2">Core Trading Concepts & Technicals</h3>
                <p className="text-gray-400 text-xs leading-relaxed mb-4">
                  Disciplined risk management, fixed stop-losses, and market structure execution.
                </p>
                <div className="grid grid-cols-2 gap-2 text-xs text-gray-300">
                  <div className="flex items-center gap-2"><span className="text-[#0066FF]">✓</span> Market Structure</div>
                  <div className="flex items-center gap-2"><span className="text-[#0066FF]">✓</span> Indicators, EMA & RSI</div>
                  <div className="flex items-center gap-2"><span className="text-[#0066FF]">✓</span> Supply and Demand</div>
                  <div className="flex items-center gap-2"><span className="text-[#0066FF]">✓</span> Smart Money Concepts (SMC)</div>
                  <div className="flex items-center gap-2"><span className="text-[#0066FF]">✓</span> Liquidity & Order Flow</div>
                  <div className="flex items-center gap-2"><span className="text-[#0066FF]">✓</span> Risk & Position Sizing</div>
                </div>
              </div>

              <div className="bg-[#111] p-6 border border-white/5">
                <h3 className="text-base font-semibold text-white mb-2">Teaching Philosophy</h3>
                <p className="text-gray-400 text-xs leading-relaxed">
                  Practical learning over theory, live-market analysis, trading psychology and discipline, workshops, and lifetime community mentorship after course completion.
                </p>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative h-[360px] border border-white/10">
              <img src={tradingImg} alt="Trading Concepts" className="w-full h-full object-cover opacity-75" />
              <div className="absolute bottom-4 left-4 right-4 bg-black/80 backdrop-blur-md p-4 border border-white/10">
                <p className="text-xs text-white/90">
                  <strong className="text-[#0066FF]">Market Focus:</strong> Gold, Forex Currencies, Bitcoin, and Oil trading with disciplined risk protocols.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* 3. TAZ TECHNOLOGY INITIATIVES (SOFTWARE SUITE) */}
      <section className="py-20 px-6 md:px-16 border-b border-white/10 bg-[#0c0c0c]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <span className="text-[#0066FF] text-xs tracking-[0.3em] uppercase font-semibold font-mono">PROPRIETARY TOOLS</span>
            <h2 className="text-2xl md:text-4xl font-light mt-2">TAZ Trading Software Ecosystem</h2>
            <p className="text-gray-400 text-xs mt-2">Educational and analytical tools designed for market structure, signal readiness, and disciplined execution. Signals are informational — traders remain responsible for execution and risk.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#111] p-6 border border-white/5 hover:border-[#0066FF]/40 transition-all">
              <span className="text-[#0066FF] text-[10px] font-mono uppercase tracking-widest block mb-2">Academy Training Tool</span>
              <h3 className="text-lg font-medium text-white mb-2">TAZ Course Cadet</h3>
              <p className="text-gray-400 text-xs leading-relaxed">
                TradingView-based training system for academy trainees — live signal status, entry/SL/TP levels, pullback and momentum signal families, and historical setup review.
              </p>
            </div>

            <div className="bg-[#111] p-6 border border-[#0066FF]/30 relative hover:border-[#0066FF] transition-all">
              <span className="text-[#0066FF] text-[10px] font-mono uppercase tracking-widest block mb-2">Advanced Signal System</span>
              <h3 className="text-lg font-medium text-white mb-2">TAZ Cadet Pro</h3>
              <p className="text-gray-400 text-xs leading-relaxed">
                Public-facing market-structure system with active/closed signal states, multi-timeframe alignment, quality filters, alerts, and closed-result review.
              </p>
            </div>

            <div className="bg-[#111] p-6 border border-white/5 hover:border-[#0066FF]/40 transition-all">
              <span className="text-[#0066FF] text-[10px] font-mono uppercase tracking-widest block mb-2">Algorithmic Ecosystem</span>
              <h3 className="text-lg font-medium text-white mb-2">AutoSignalX</h3>
              <p className="text-gray-400 text-xs leading-relaxed">
                Internally developed algorithmic system for automated signals, rule-based trade management, liquidity and market-structure filtering with validation logic.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* 4. FLAGSHIP INSTITUTE - PROFESSIONAL SKILL COURSES */}
      <section id="skills" className="py-20 px-6 md:px-16 border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <span className="text-[#0066FF] text-xs tracking-[0.3em] uppercase font-semibold font-mono">TAZ FLAGSHIP INSTITUTE</span>
            <h2 className="text-2xl md:text-4xl font-light mt-2">Professional Skill & Digital Courses</h2>
            <p className="text-gray-400 text-xs mt-2">Empowering youth with high-demand digital skills and entrepreneurship training, primarily at the Shahfaisal Flagship Campus.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {/* 1. Advanced Smart Money Concepts (Alag kar diya) */}
            <div className="bg-[#111] p-6 border border-white/5 hover:border-[#0066FF]/30 transition-all duration-300">
              <div className="text-[#0066FF] mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2v20"></path><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                </svg>
              </div>
              <h3 className="text-base font-semibold text-white mb-2">Advanced Smart Money Concepts</h3>
              <p className="text-gray-400 text-xs leading-relaxed">
                Institutional order flow, advanced SMC strategy, and deeper market-structure trading concepts.
              </p>
            </div>

            {/* 1. Trading Education */}
            <div className="bg-[#111] p-6 border border-white/5 hover:border-[#0066FF]/30 transition-all duration-300">
              <div className="text-[#0066FF] mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 4v16"></path><path d="M14 16v-8"></path><path d="M10 20v-4"></path><path d="M6 12V4"></path><path d="M4 12h4"></path><path d="M8 8h4"></path><path d="M12 16h4"></path><path d="M16 8h4"></path>
                </svg>
              </div>
              <h3 className="text-base font-semibold text-white mb-2">Trading Education</h3>
              <p className="text-gray-400 text-xs leading-relaxed">
                Market basics, chart analysis, key indicators, and risk management for new traders.
              </p>
            </div>

            {/* 2. AI & Automation */}
            <div className="bg-[#111] p-6 border border-white/5 hover:border-[#0066FF]/30 transition-all duration-300">
              <div className="text-[#0066FF] mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="11" width="18" height="10" rx="2"></rect><circle cx="12" cy="5" r="2"></circle><path d="M12 7v4"></path><line x1="8" y1="16" x2="8" y2="16"></line><line x1="16" y1="16" x2="16" y2="16"></line>
                </svg>
              </div>
              <h3 className="text-base font-semibold text-white mb-2">AI & Automation</h3>
              <p className="text-gray-400 text-xs leading-relaxed">
                Practical applications of AI in diverse workflows, machine learning basics, and automation tools.
              </p>
            </div>

            {/* 3. Social Media Marketing */}
            <div className="bg-[#111] p-6 border border-white/5 hover:border-[#0066FF]/30 transition-all duration-300">
              <div className="text-[#0066FF] mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path><path d="M14 2c4.4 0 8 3.6 8 8"></path>
                </svg>
              </div>
              <h3 className="text-base font-semibold text-white mb-2">Social Media Marketing</h3>
              <p className="text-gray-400 text-xs leading-relaxed">
                AI-driven content strategies, targeted ad campaigns, and digital media analytics.
              </p>
            </div>

            {/* 4. E-Commerce */}
            <div className="bg-[#111] p-6 border border-white/5 hover:border-[#0066FF]/30 transition-all duration-300">
              <div className="text-[#0066FF] mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                </svg>
              </div>
              <h3 className="text-base font-semibold text-white mb-2">E-Commerce</h3>
              <p className="text-gray-400 text-xs leading-relaxed">
                Business models, e-commerce platform setup, inventory management, and retail strategies.
              </p>
            </div>

            {/* 5. YouTube Automation */}
            <div className="bg-[#111] p-6 border border-white/5 hover:border-[#0066FF]/30 transition-all duration-300">
              <div className="text-[#0066FF] mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                </svg>
              </div>
              <h3 className="text-base font-semibold text-white mb-2">YouTube Automation</h3>
              <p className="text-gray-400 text-xs leading-relaxed">
                Niche research, channel building, AI content sourcing, and monetization at scale.
              </p>
            </div>

            {/* 6. Digital Skills */}
            <div className="bg-[#111] p-6 border border-white/5 hover:border-[#0066FF]/30 transition-all duration-300">
              <div className="text-[#0066FF] mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line>
                </svg>
              </div>
              <h3 className="text-base font-semibold text-white mb-2">Digital Skills</h3>
              <p className="text-gray-400 text-xs leading-relaxed">
                Core competencies in modern digital tools, data handling, and essential online operations.
              </p>
            </div>

            {/* 8. Web Development (As Requested) */}
            <div className="bg-[#111] p-6 border border-white/5 hover:border-[#0066FF]/30 transition-all duration-300">
              <div className="text-[#0066FF] mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline><line x1="12" y1="4" x2="12" y2="20"></line>
                </svg>
              </div>
              <h3 className="text-base font-semibold text-white mb-2">Web Development</h3>
              <p className="text-gray-400 text-xs leading-relaxed">
                Modern web creation, responsive interfaces, site deployment, and online portal management.
              </p>
            </div>

          </div>
        </div>
      </section>


      {/* 5. KARACHI CAMPUSES */}
      <section id="campuses" className="py-20 px-6 md:px-16 border-b border-white/10 bg-[#0c0c0c]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <span className="text-[#0066FF] text-xs tracking-[0.3em] uppercase font-semibold font-mono">PHYSICAL NETWORK</span>
            <h2 className="text-2xl md:text-4xl font-light mt-2">TAZ Karachi Campuses</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#111] p-6 border border-[#0066FF]/30">
              <span className="bg-[#0066FF]/20 text-[#0066FF] text-[9px] uppercase tracking-widest px-2 py-1 font-semibold inline-block mb-3">
                Flagship
              </span>
              <h3 className="text-lg font-medium text-white mb-1">Shahfaisal Campus</h3>
              <p className="text-xs text-gray-400 mb-3">Naila Hospital Road, Opp. Punjab Ground, Shah Faisal Colony, Karachi</p>
              <p className="text-gray-400 text-xs leading-relaxed">
                Headquarters and largest expansion — trading floor, TAZ Traders Lounge, live sessions, and flagship digital-skills institute.
              </p>
            </div>

            <div className="bg-[#111] p-6 border border-white/5">
              <h3 className="text-lg font-medium text-white mb-1">Model Colony Campus</h3>
              <p className="text-xs text-[#0066FF] mb-3">Liaquat Ali Khan Road, Block 10, Model Colony — via Linguaphile Academia</p>
              <p className="text-gray-400 text-xs leading-relaxed">
                Trading education, practical training facilities, and student community learning support.
              </p>
            </div>

            <div className="bg-[#111] p-6 border border-white/5">
              <h3 className="text-lg font-medium text-white mb-1">Saudabad Campus</h3>
              <p className="text-xs text-[#0066FF] mb-3">Indus Mehran, Saudabad — via Skill Box Institute</p>
              <p className="text-gray-400 text-xs leading-relaxed">
                Dedicated branch for regional student access, trading education, and foundational courses.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* 6. MAJOR EVENTS & CEREMONIES */}
      <section className="py-20 px-6 md:px-16 border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <span className="text-[#0066FF] text-xs tracking-[0.3em] uppercase font-semibold font-mono">COMMUNITY INITIATIVES</span>
            <h2 className="text-2xl md:text-4xl font-light mt-2">Major Events, Competitions & Awards</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <div className="border-l-2 border-[#0066FF] pl-4 py-2">
                <h3 className="text-base font-semibold text-white">TAZ Grand Event 2026</h3>
                <p className="text-gray-400 text-xs mt-1">
                  Held 15 June 2026 at Zam Zam Marquee — passing-out ceremony, financial-awareness session, software launch, awards, and community celebration.
                </p>
              </div>

              <div className="border-l-2 border-white/20 pl-4 py-2">
                <h3 className="text-base font-semibold text-white">TAZ Trading Feast 2026</h3>
                <p className="text-gray-400 text-xs mt-1">
                  Live market trading competition (1–12 June 2026). Champion: Ubaid. Runner-up: Shoaib Khan. Second runner-up: Hamza.
                </p>
              </div>

              <div className="border-l-2 border-white/20 pl-4 py-2">
                <h3 className="text-base font-semibold text-white">Shahfaisal Flagship & Traders Lounge Opening</h3>
                <p className="text-gray-400 text-xs mt-1">
                  Opened 2 August 2026 — TAZ's largest physical expansion, combining the flagship institute with a member-only Traders Lounge.
                </p>
              </div>
            </div>

            <div className="relative h-[300px] border border-white/10">
              <img src={eventImg} alt="TAZ Events" className="w-full h-full object-cover opacity-70" />
            </div>
          </div>
        </div>
      </section>


      {/* 7. OFFICIAL CONTACT FOOTER BAR */}
      <section className="py-12 px-6 md:px-16 bg-[#050505] text-xs text-gray-400 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <div>
            <p className="text-white font-medium">TAZ Institute (Trade Alpha Zone) — Official Public Info</p>
            <p className="text-gray-500 mt-1">Founder & CEO: Hamza Kayani</p>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-gray-300">
            <span>🌐 www.tradealphazone.com</span>
            <span>📸 @trade_alpha_zone</span>
            <span>✉️ contact@tradealphazone.com</span>
            <span>📞 0315-2939539</span>
          </div>
        </div>
      </section>

    </div>
  );
};

export default CourseDetailsPage;