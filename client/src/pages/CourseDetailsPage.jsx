import React from 'react';
import { motion } from 'framer-motion';
import eventImg from "../assets/show_3.jpg";
import tradingImg from "../assets/Study.jpeg";
// =========================================================================
// IMAGE VARIABLES (Apne requirements ke mutabiq local assets ya URLs change karlein)
// =========================================================================
const heroImg = "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=1200";
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
              Founded by Hamza Kayani, Trade Alpha Zone combines practical trading education, professional skill development, proprietary software, and physical campus mentorship across Karachi.
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
              Led by CEO Hamza Kayani (second-generation trader mentored by a 25+ year market professional), focusing primarily on Gold, Currencies, Bitcoin, and Oil.
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
                  <div className="flex items-center gap-2"><span className="text-[#0066FF]">✓</span> EMA & RSI Strategies</div>
                  <div className="flex items-center gap-2"><span className="text-[#0066FF]">✓</span> Supply and Demand</div>
                  <div className="flex items-center gap-2"><span className="text-[#0066FF]">✓</span> SMC / ICT Concepts</div>
                </div>
              </div>

              <div className="bg-[#111] p-6 border border-white/5">
                <h3 className="text-base font-semibold text-white mb-2">Teaching Philosophy</h3>
                <p className="text-gray-400 text-xs leading-relaxed">
                  Practical learning, emotional discipline, proper risk-to-reward planning, live-market experience, and 24/7 educational session support.
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
            <h2 className="text-2xl md:text-4xl font-light mt-2">TAZ Trading Software Initiatives</h2>
            <p className="text-gray-400 text-xs mt-2">Educational tools designed for market analysis, structured guidance, and smart alerts.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#111] p-6 border border-white/5 hover:border-[#0066FF]/40 transition-all">
              <span className="text-[#0066FF] text-[10px] font-mono uppercase tracking-widest block mb-2">Trading Tool</span>
              <h3 className="text-lg font-medium text-white mb-2">TAZ Cadet</h3>
              <p className="text-gray-400 text-xs leading-relaxed">
                Fundamental learning tool providing basic market structure indicators, risk calculation, and beginner-friendly chart guidance.
              </p>
            </div>

            <div className="bg-[#111] p-6 border border-[#0066FF]/30 relative hover:border-[#0066FF] transition-all">
              <span className="text-[#0066FF] text-[10px] font-mono uppercase tracking-widest block mb-2">Advanced Algorithmic Tool</span>
              <h3 className="text-lg font-medium text-white mb-2">TAZ Cadet Pro</h3>
              <p className="text-gray-400 text-xs leading-relaxed">
                Enhanced analysis software with multi-timeframe precision, automated momentum markers, and real-time execution support.
              </p>
            </div>

            <div className="bg-[#111] p-6 border border-white/5 hover:border-[#0066FF]/40 transition-all">
              <span className="text-[#0066FF] text-[10px] font-mono uppercase tracking-widest block mb-2">Institutional Concept Tool</span>
              <h3 className="text-lg font-medium text-white mb-2">TAZ Semi-Prime</h3>
              <p className="text-gray-400 text-xs leading-relaxed">
                Specialized market tracking tool focusing on smart market alerts, liquidity identification, and high-probability setup alerts.
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
            <p className="text-gray-400 text-xs mt-2">Empowering youth with high-demand digital skills and entrepreneurship training.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-[#111] p-6 border border-white/5">
              <h3 className="text-base font-semibold text-white mb-2">Graphic Designing</h3>
              <p className="text-gray-400 text-xs leading-relaxed">
                Visual branding, UI/UX essentials, creative design tools, and portfolio creation.
              </p>
            </div>

            <div className="bg-[#111] p-6 border border-white/5">
              <h3 className="text-base font-semibold text-white mb-2">Web Development</h3>
              <p className="text-gray-400 text-xs leading-relaxed">
                Modern web creation, responsive interfaces, site deployment, and online portal management.
              </p>
            </div>

            <div className="bg-[#111] p-6 border border-white/5">
              <h3 className="text-base font-semibold text-white mb-2">Freelancing & Online Earning</h3>
              <p className="text-gray-400 text-xs leading-relaxed">
                Client acquisition, Fiverr/Upwork profile building, proposal writing, and remote work strategies.
              </p>
            </div>

            <div className="bg-[#111] p-6 border border-white/5">
              <h3 className="text-base font-semibold text-white mb-2">Social Media Marketing with AI</h3>
              <p className="text-gray-400 text-xs leading-relaxed">
                AI-driven content strategies, targeted ad campaigns, brand growth, and digital media analytics.
              </p>
            </div>

            <div className="bg-[#111] p-6 border border-white/5">
              <h3 className="text-base font-semibold text-white mb-2">Business & Entrepreneurship</h3>
              <p className="text-gray-400 text-xs leading-relaxed">
                Business setup models, startup execution, financial management, and leadership development.
              </p>
            </div>

            <div className="bg-[#111] p-6 border border-white/5 flex flex-col justify-center items-center text-center">
              <span className="text-[#0066FF] text-xs font-semibold uppercase tracking-wider mb-1">Community Support</span>
              <p className="text-white text-sm font-medium">Lifetime Mentorship Included</p>
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
              <h3 className="text-lg font-medium text-white mb-1">Shah Faisal Colony Campus</h3>
              <p className="text-xs text-gray-400 mb-3">Karachi Main Hub</p>
              <p className="text-gray-400 text-xs leading-relaxed">
                Main center for live trading sessions, flagship institute skill classes, and physical mentorship.
              </p>
            </div>

            <div className="bg-[#111] p-6 border border-white/5">
              <h3 className="text-lg font-medium text-white mb-1">Model Colony Campus</h3>
              <p className="text-xs text-[#0066FF] mb-3">Karachi Branch</p>
              <p className="text-gray-400 text-xs leading-relaxed">
                Practical training facilities, skill labs, and student community learning support.
              </p>
            </div>

            <div className="bg-[#111] p-6 border border-white/5">
              <h3 className="text-lg font-medium text-white mb-1">Saudabad Campus</h3>
              <p className="text-xs text-[#0066FF] mb-3">Karachi Branch</p>
              <p className="text-gray-400 text-xs leading-relaxed">
                Dedicated branch for regional student access, market sessions, and foundational courses.
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
                  Major financial education summit gathering community members, market learners, and mentors.
                </p>
              </div>

              <div className="border-l-2 border-white/20 pl-4 py-2">
                <h3 className="text-base font-semibold text-white">TAZ Trading Feast Competitions</h3>
                <p className="text-gray-400 text-xs mt-1">
                  Live market trading challenges rewarding disciplined execution, proper risk management, and trading accuracy.
                </p>
              </div>

              <div className="border-l-2 border-white/20 pl-4 py-2">
                <h3 className="text-base font-semibold text-white">TAZ Trading Excellence Awards & Ceremonies</h3>
                <p className="text-gray-400 text-xs mt-1">
                  Passing-out ceremonies recognizing successful students, traders, and skill course graduates.
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
            <p className="text-white font-medium">Trade Alpha Zone — Official Public Info</p>
            <p className="text-gray-500 mt-1">Founder & CEO: Hamza Kayani</p>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-gray-300">
            <span>🌐 www.tradealphazone.com</span>
            <span>📸 @trade_alpha_zone</span>
            <span>✉️ Contact@tradealphazone.com</span>
            <span>📞 0315-2939539</span>
          </div>
        </div>
      </section>

    </div>
  );
};

export default CourseDetailsPage;