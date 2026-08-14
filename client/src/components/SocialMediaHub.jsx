import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaYoutube, 
  FaFacebookF, 
  FaInstagram, 
  FaTiktok, 
  FaWhatsapp, 
  FaShareAlt 
} from 'react-icons/fa';
import { ArrowUpRight } from 'lucide-react';

const socialPlatforms = [
  {
    id: 'youtube',
    name: 'YouTube',
    handle: '@tradealphazone',
    description: 'Subscribe for live market analysis, trading strategies & tutorials.',
    link: 'https://www.youtube.com/@tradealphazone',
    icon: FaYoutube,
    brandColor: '#FF0000',
    badge: 'Official Channel'
  },
  {
    id: 'instagram',
    name: 'Instagram',
    handle: '@trade_alpha_zone',
    description: 'Daily market updates, reels, motivation & behind the scenes.',
    link: 'https://www.instagram.com/trade_alpha_zone/',
    icon: FaInstagram,
    brandColor: '#E4405F',
    badge: 'Daily Updates'
  },
  {
    id: 'facebook',
    name: 'Facebook',
    handle: 'Trade Alpha Zone',
    description: 'Join our Facebook community page for events & announcements.',
    link: 'https://www.facebook.com/p/Trade-Alpha-Zone-100068397378000/',
    icon: FaFacebookF,
    brandColor: '#1877F2',
    badge: 'Community Page'
  },
  {
    id: 'tiktok',
    name: 'TikTok',
    handle: '@trade_alpha_zone',
    description: 'Quick trading tips, short breakdown clips & market insights.',
    link: 'https://www.tiktok.com/@trade_alpha_zone',
    icon: FaTiktok,
    brandColor: '#00F2FE',
    badge: 'Shorts & Reels'
  },
  {
    id: 'whatsapp',
    name: 'WhatsApp Channel',
    handle: '+92 315 2939539',
    description: 'Direct instant alerts, community updates & support chat.',
    link: 'https://api.whatsapp.com/send/?phone=03152939539&text&type=phone_number&app_absent=0',
    icon: FaWhatsapp,
    brandColor: '#25D366',
    badge: 'Instant Community'
  }
];

const SocialMediaHub = () => {
  return (
    <section className="relative bg-[#080808] py-24 overflow-hidden border-t border-b border-white/5 min-h-screen flex items-center justify-center">
      
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#0066FF]/10 blur-[140px] rounded-full pointer-events-none z-0" />

      {/* Grid Overlay */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none z-0" 
      />

      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#0066FF] tracking-[0.6em] uppercase text-[10px] font-bold mb-3 block flex items-center justify-center gap-2"
          >
            <FaShareAlt size={11} /> Connect With Us
          </motion.span>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-light text-white tracking-tight"
          >
            OUR OFFICIAL <span className="italic font-serif text-white/50">COMMUNITY.</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/40 text-xs md:text-sm tracking-wider uppercase mt-4 leading-relaxed"
          >
            Follow our official channels to stay connected with daily market breakdown, live streams, trading psychology, and direct support.
          </motion.p>
        </div>

        {/* Social Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {socialPlatforms.map((platform, index) => {
            const Icon = platform.icon;
            return (
              <motion.a
                key={platform.id}
                href={platform.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                whileHover={{ y: -6 }}
                className="group relative p-8 rounded-3xl bg-[#0b0b0b] border border-white/5 backdrop-blur-xl transition-all duration-500 flex flex-col justify-between hover:border-[#0066FF]/40 hover:shadow-[0_0_30px_rgba(0,102,255,0.12)]"
              >
                <div>
                  {/* Top Bar inside Card */}
                  <div className="flex items-center justify-between mb-8">
                    <div 
                      className="w-12 h-12 rounded-2xl bg-black/60 border border-white/10 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-inner"
                      style={{ color: platform.brandColor }}
                    >
                      <Icon size={22} />
                    </div>

                    <span className="text-[9px] uppercase tracking-[0.2em] font-semibold px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/50 group-hover:text-white transition-colors">
                      {platform.badge}
                    </span>
                  </div>

                  {/* Title & Handle */}
                  <h3 className="text-2xl font-light text-white tracking-tight mb-1 group-hover:text-[#0066FF] transition-colors duration-300">
                    {platform.name}
                  </h3>
                  <p className="text-[11px] font-mono text-[#0066FF] tracking-widest uppercase mb-4">
                    {platform.handle}
                  </p>

                  {/* Description */}
                  <p className="text-white/60 text-xs leading-relaxed font-light mb-8">
                    {platform.description}
                  </p>
                </div>

                {/* Bottom CTA Area */}
                <div className="pt-5 border-t border-white/5 flex items-center justify-between text-[10px] uppercase tracking-[0.2em] font-semibold text-white/40 group-hover:text-white transition-colors">
                  <span>Connect Now</span>
                  <div className="w-8 h-8 rounded-full bg-white/5 group-hover:bg-[#0066FF] group-hover:text-white flex items-center justify-center transition-all duration-300">
                    <ArrowUpRight size={14} className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>

        {/* Footer Note */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-20 text-center text-[9px] text-white/30 tracking-[0.4em] uppercase"
        >
          Trade Alpha Zone — Official Verified Links Only
        </motion.div>

      </div>
    </section>
  );
};

export default SocialMediaHub;