import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#080808] pt-20 pb-10 overflow-hidden border-t border-white/5">
      {/* Background Subtle Glow - Trading Blue */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#0066FF]/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          
          {/* 1. Brand Section */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <div className="flex flex-col">
              <span className="text-white text-2xl font-bold tracking-[0.2em] uppercase leading-none">
                TRADE ALPHA ZONE <span className="text-[#0066FF]">.</span>
              </span>
              <span className="text-white/30 text-[9px] uppercase tracking-[0.4em] mt-2 font-medium">
                Trading & Digital Skills Academy
              </span>
            </div>
            <p className="text-white/40 text-[10px] leading-relaxed tracking-wider max-w-xs uppercase">
              Karachi's premier trading academy founded by CEO Hamza Kayani. Specializing in Forex, Crypto, and Stock Market mastery with live mentoring and risk management across Shah Faisal, Model Colony, and Saudabad campuses.
            </p>
          </div>

          {/* 2. Navigation */}
          <div>
            <h4 className="text-white text-[10px] font-bold uppercase tracking-[0.4em] mb-8 border-l-2 border-[#0066FF] pl-3">
              Explore
            </h4>
            <ul className="flex flex-col gap-4">
              {[
                { name: 'Home', href: '/' },
                { name: 'About', href: '/about' },
                { name: 'Details', href: '/details' },
                { name: 'Contact', href: '/contact' }
              ].map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="text-white/40 hover:text-white text-[10px] uppercase tracking-widest transition-colors duration-300">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Socials & Web */}
          <div>
            <h4 className="text-white text-[10px] font-bold uppercase tracking-[0.4em] mb-8 border-l-2 border-[#0066FF] pl-3">
              Follow & Visit
            </h4>
            <ul className="flex flex-col gap-4">
              {[
                { name: 'Website', url: 'https://www.tradealphazone.com' },
                { name: 'Instagram', url: 'https://instagram.com/trade_alpha_zone' },
                { name: 'WhatsApp', url: 'https://wa.me/923152939539' },
                { name: 'YouTube', url: 'https://youtube.com/@tradealphazone' }
              ].map((social) => (
                <li key={social.name}>
                  <a 
                    href={social.url} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/40 hover:text-[#0066FF] text-[10px] uppercase tracking-widest transition-all duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-2 h-[1px] bg-[#0066FF] transition-all duration-300"></span>
                    {social.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* 4. Official Contact Info */}
          <div className="flex flex-col">
            <h4 className="text-white text-[10px] font-bold uppercase tracking-[0.4em] mb-8 border-l-2 border-[#0066FF] pl-3">
              Reach Us
            </h4>
            <div className="flex flex-col gap-5">
              <div className="group flex flex-col">
                <span className="text-[#0066FF] text-[8px] uppercase tracking-widest mb-1 font-bold italic">Leadership</span>
                <span className="text-white/70 text-[10px] tracking-wider uppercase font-semibold">Hamza Kayani (Founder & CEO)</span>
              </div>
              <div className="group flex flex-col">
                <span className="text-[#0066FF] text-[8px] uppercase tracking-widest mb-1 font-bold italic">Phone & WhatsApp</span>
                <a href="tel:03152939539" className="text-white/40 hover:text-[#0066FF] text-[10px] tracking-wider uppercase transition-colors">
                  0315-2939539
                </a>
              </div>
              <div className="group flex flex-col">
                <span className="text-[#0066FF] text-[8px] uppercase tracking-widest mb-1 font-bold italic">Official Email</span>
                <a href="mailto:Contact@tradealphazone.com" className="text-white/40 hover:text-[#0066FF] text-[10px] tracking-wider uppercase transition-colors">
                  Contact@tradealphazone.com
                </a>
              </div>
              <div className="group flex flex-col">
                <span className="text-[#0066FF] text-[8px] uppercase tracking-widest mb-1 font-bold italic">Campuses</span>
                <span className="text-white/40 text-[10px] tracking-wider uppercase">Shah Faisal | Model Colony | Saudabad</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/20 text-[8px] uppercase tracking-[0.4em]">
            © {currentYear} Trade Alpha Zone Academy. All Rights Reserved.
          </p>

          {/* Arbaz Ali Credit */}
          <div className="flex items-center gap-2 group">
            <span className="text-white/20 text-[8px] uppercase tracking-[0.3em]">Crafted by</span>
            <a 
              href="https://arbaz-aro.vercel.app" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/50 group-hover:text-[#0066FF] text-[9px] font-bold uppercase tracking-[0.5em] transition-all duration-300 underline underline-offset-4 decoration-white/5 group-hover:decoration-[#0066FF]"
            >
              Arbaz Ali
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;