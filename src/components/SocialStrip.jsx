import React from 'react';
import { ArrowUpRight, Film, Play } from 'lucide-react';

const InstagramIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

export default function SocialStrip() {
  const frames = [
    {
      id: 1,
      image: '/images/social-1.jpg',
      aspect: 'aspect-[3/4]',
      code: 'FRAME 021',
      tag: '#BEHINDTHESCENES',
      isVideo: false,
    },
    {
      id: 2,
      image: '/images/social-2.jpg',
      aspect: 'aspect-[9/16]',
      code: 'REEL 04',
      tag: '#DUBAIEVENTS',
      isVideo: true,
    },
    {
      id: 3,
      image: '/images/social-3.jpg',
      aspect: 'aspect-[4/5]',
      code: 'FRAME 023',
      tag: '#EDITORIALSTILLS',
      isVideo: false,
    },
    {
      id: 4,
      image: '/images/social-4.jpg',
      aspect: 'aspect-[3/4]',
      code: 'FRAME 024',
      tag: '#LIGHTINGDESIGN',
      isVideo: false,
    },
    {
      id: 5,
      image: '/images/social-5.jpg',
      aspect: 'aspect-[9/16]',
      code: 'REEL 07',
      tag: '#LIVEBROADCAST',
      isVideo: true,
    },
    {
      id: 6,
      image: '/images/social-6.jpg',
      aspect: 'aspect-[4/5]',
      code: 'FRAME 026',
      tag: '#360EXPERIENCE',
      isVideo: false,
    },
  ];

  return (
    <section
      id="social-strip-section"
      className="dark-section pt-10 sm:pt-14 pb-8 sm:pb-12 bg-[#111111] text-[#F6F4EF] relative overflow-hidden border-b border-white/10"
    >
      {/* Background Cinematic Texture / Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#B69A6A]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-10 relative z-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-6 border-b border-white/10">
          <div>
            <div className="flex items-center gap-3 text-xs font-mono tracking-[0.25em] text-[#B69A6A] uppercase font-semibold mb-2">
              <InstagramIcon className="w-3.5 h-3.5" />
              <span>BEHIND THE FEED // SOCIAL DIARY</span>
              <span className="px-2 py-0.5 text-[10px] tracking-widest bg-[#B69A6A]/20 border border-[#B69A6A]/40 text-[#B69A6A] rounded-none">
                COMING SOON
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold uppercase tracking-tight text-[#F6F4EF]">
              OFF CAMERA.{' '}
              <span className="font-serif italic font-normal text-[#B69A6A]">on your feed.</span>
            </h2>
          </div>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] font-semibold text-white/80 hover:text-[#B69A6A] transition-colors"
          >
            <span>FOLLOW @DMCREATION</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Film Negative / Contact Strip */}
      <div className="relative z-10">
        {/* Sprocket hole decorative header */}
        <div className="max-w-7xl mx-auto px-4 mb-2 flex justify-between font-mono text-[9px] text-white/40 tracking-widest uppercase">
          <span>FILM KODAK TRI-X 400 • EXP 24-36</span>
          <span className="hidden sm:inline">SAFETY FILM • DM CREATION ARCHIVE</span>
        </div>

        <div className="flex items-end gap-4 overflow-x-auto pb-6 px-4 sm:px-8 no-scrollbar scroll-smooth">
          {frames.map((frame) => (
            <div
              key={frame.id}
              className="flex-shrink-0 w-56 sm:w-64 bg-[#151515] p-2.5 border border-white/10 shadow-cinematic group hover:-translate-y-1 transition-all duration-300"
            >
              {/* Film Negative Frame Header */}
              <div className="flex items-center justify-between pb-1.5 mb-1.5 border-b border-white/10 text-[9px] font-mono text-white/60">
                <span>{frame.code}</span>
                <span>{frame.tag}</span>
              </div>

              <div className={`relative ${frame.aspect} overflow-hidden bg-black`}>
                <img
                  src={frame.image}
                  alt={frame.tag}
                  className="w-full h-full object-cover img-hover-scale opacity-80"
                  loading="lazy"
                />

                {frame.isVideo && (
                  <div className="absolute top-2 right-2 w-6 h-6 rounded-full bg-black/60 backdrop-blur-sm flex items-center justify-center text-white">
                    <Play className="w-3 h-3 fill-current ml-0.5" />
                  </div>
                )}

                <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-white">
                  <span className="text-[11px] font-mono uppercase tracking-[0.25em] border border-[#B69A6A]/60 text-[#B69A6A] px-3 py-1.5 backdrop-blur-md bg-black/40">
                    COMING SOON
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
