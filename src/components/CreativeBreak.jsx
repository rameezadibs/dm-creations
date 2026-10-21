import React from 'react';

export default function CreativeBreak() {
  const items = [
    'PHOTOGRAPHY',
    'CINEMATOGRAPHY',
    'LIVE BROADCAST',
    '360° IMMERSION',
    'UNSCRIPTED MOMENTS',
    'EDITORIAL FRAMING',
    'RAW EMOTION',
    'DUBAI & WORLDWIDE',
  ];

  return (
    <div className="py-5 bg-[#151515] text-[#F6F4EF] border-y border-white/10 overflow-hidden select-none">
      <div className="animate-marquee flex items-center gap-8 whitespace-nowrap">
        {/* Repeating text strip */}
        {[...items, ...items, ...items, ...items].map((text, idx) => (
          <div key={idx} className="flex items-center gap-8 text-xs font-mono tracking-[0.3em] uppercase">
            <span className="hover:text-[#B69A6A] transition-colors">{text}</span>
            <span className="text-[#B69A6A] font-serif italic text-base leading-none">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}
