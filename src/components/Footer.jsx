import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowUp } from 'lucide-react';

export default function Footer({ onOpenBooking }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="footer-section" className="bg-[#111111] text-[#F6F4EF] pt-24 pb-12 border-t border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-20 border-b border-white/10">
          {/* Col 1: Studio Identity & Description (4 cols) */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-6">
              <img
                src="/dm-logo-white.png"
                alt="DM Creation Studio"
                className="h-12 w-auto object-contain"
              />
            </div>
            <p className="text-sm text-white/60 font-light leading-relaxed max-w-sm mb-6">
              A bespoke visual production studio delivering editorial photography, cinematic filmmaking, live multi-camera broadcasts, and immersive 360° experiences worldwide.
            </p>
            <div className="text-[11px] font-mono text-[#B69A6A] uppercase tracking-wider">
              DUBAI • UAE • AVAILABLE GLOBALLY
            </div>
          </div>

          {/* Col 2: Navigation Links (2 cols) */}
          <div className="lg:col-span-2">
            <span className="block text-[11px] font-mono uppercase tracking-[0.2em] text-[#B69A6A] mb-4">
              // NAVIGATION
            </span>
            <ul className="space-y-2.5 text-xs font-mono uppercase tracking-wider">
              <li><Link to="/" className="text-white/70 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-white/70 hover:text-white transition-colors">About</Link></li>
              <li><Link to="/services" className="text-white/70 hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/portfolio" className="text-white/70 hover:text-white transition-colors">Portfolio</Link></li>
              <li><Link to="/contact" className="text-white/70 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Col 3: Services (3 cols) */}
          <div className="lg:col-span-3">
            <span className="block text-[11px] font-mono uppercase tracking-[0.2em] text-[#B69A6A] mb-4">
              // DISCIPLINES
            </span>
            <ul className="space-y-2.5 text-xs font-mono uppercase tracking-wider">
              <li><button onClick={() => onOpenBooking('Photography')} className="text-white/70 hover:text-white transition-colors text-left">01. Photography</button></li>
              <li><button onClick={() => onOpenBooking('Videography')} className="text-white/70 hover:text-white transition-colors text-left">02. Videography</button></li>
              <li><button onClick={() => onOpenBooking('Live Streaming')} className="text-white/70 hover:text-white transition-colors text-left">03. Live Streaming</button></li>
              <li><button onClick={() => onOpenBooking('360° Booth')} className="text-white/70 hover:text-white transition-colors text-left">04. 360° Booth</button></li>
            </ul>
          </div>

          {/* Col 4: Contact & Social (3 cols) */}
          <div className="lg:col-span-3">
            <span className="block text-[11px] font-mono uppercase tracking-[0.2em] text-[#B69A6A] mb-4">
              // CONNECT
            </span>
            <div className="space-y-3 text-xs font-mono">
              <div>
                <span className="text-white/40 block text-[10px] uppercase">EMAIL</span>
                <a href="mailto:info.dmcreation@gmail.com" className="text-white/80 hover:text-[#B69A6A] transition-colors">
                  info.dmcreation@gmail.com
                </a>
              </div>
              <div>
                <span className="text-white/40 block text-[10px] uppercase">MOBILE / WHATSAPP</span>
                <a href="tel:+971528351320" className="text-white/80 hover:text-[#B69A6A] transition-colors">
                  +971 52 835 1320
                </a>
              </div>
              <div className="pt-2 flex items-center gap-4 text-xs font-mono uppercase text-white/70">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#B69A6A] transition-colors">Instagram</a>
                <span>•</span>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#B69A6A] transition-colors">Facebook</a>
                <span>•</span>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#B69A6A] transition-colors">YouTube</a>
              </div>
            </div>
          </div>
        </div>

        {/* Huge Poster-Like Studio Typography */}
        <div className="py-16 sm:py-20 select-none border-b border-white/10">
          <div className="flex flex-col sm:flex-row items-baseline justify-between leading-none">
            <span className="text-6xl sm:text-9xl lg:text-[13vw] font-black uppercase tracking-tighter text-[#F6F4EF]/90 font-sans hover:text-[#B69A6A] transition-colors duration-700">
              DM
            </span>
            <span className="text-6xl sm:text-9xl lg:text-[13vw] font-black uppercase tracking-tighter text-white/20 font-sans hover:text-[#F6F4EF] transition-colors duration-700">
              CREATION
            </span>
          </div>
        </div>

        {/* Bottom Legal & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-white/50">
          <div className="flex items-center gap-6">
            <span>© {new Date().getFullYear()} DM CREATION. ALL RIGHTS RESERVED.</span>
            <span className="hidden sm:inline">•</span>
            <span className="hover:text-white cursor-pointer">PRIVACY POLICY</span>
            <span className="hover:text-white cursor-pointer">TERMS OF PRODUCTION</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 hover:text-white transition-colors group"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-1" />
          </button>
        </div>
      </div>
    </footer>
  );
}
