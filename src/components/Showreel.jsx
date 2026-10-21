import React from 'react';
import { motion } from 'framer-motion';
import { Play, Film, Disc } from 'lucide-react';
import { useCursor } from '../context/CursorContext';

export default function Showreel({ onOpenVideo }) {
  const { setCursor, resetCursor } = useCursor();

  return (
    <section
      id="showreel-section"
      className="dark-section pt-8 sm:pt-10 pb-20 sm:pb-28 bg-[#111111] text-[#F6F4EF] relative overflow-hidden border-y border-white/10"
    >
      {/* Background Cinematic Texture / Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#B69A6A]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Metadata */}
        <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
          <div className="flex items-center gap-2 text-xs font-mono tracking-[0.3em] uppercase text-[#B69A6A] mb-3">
            <Film className="w-3.5 h-3.5" />
            <span>DM CREATION // CINEMATIC SHOWREEL</span>
          </div>

          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold uppercase tracking-tight text-[#F6F4EF] max-w-4xl leading-[1.05]">
            SOME MOMENTS
            <br />
            NEED MORE
            <br />
            <span className="font-serif italic font-normal text-[#B69A6A] lowercase">
              than a
            </span>{' '}
            PHOTO.
          </h2>
        </div>

        {/* 16:9 Cinematic Video Masterpiece Container */}
        <div className="max-w-5xl mx-auto">
          <div
            onClick={onOpenVideo}
            onMouseEnter={() => setCursor('play', 'PLAY ▶')}
            onMouseLeave={resetCursor}
            className="relative aspect-video bg-black rounded-none border border-white/20 shadow-cinematic overflow-hidden group cursor-pointer"
          >
            {/* Master Thumbnail */}
            <img
              src="/images/showreel-thumb.jpg"
              alt="DM Creation Cinematic Showreel preview"
              className="w-full h-full object-cover img-hover-scale opacity-80 group-hover:opacity-100 transition-opacity duration-700"
              loading="lazy"
            />

            {/* Cinematic Letterbox Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/40 pointer-events-none" />

            {/* Corner Viewfinder Marks */}
            <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-white/70 pointer-events-none" />
            <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-white/70 pointer-events-none" />
            <div className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-white/70 pointer-events-none" />
            <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-white/70 pointer-events-none" />

            {/* Center Play Button Overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
              <motion.div
                whileHover={{ scale: 1.15 }}
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white/10 backdrop-blur-md border border-white/30 flex items-center justify-center text-white group-hover:bg-[#B69A6A] group-hover:border-[#B69A6A] group-hover:text-[#111111] transition-all duration-300 shadow-cinematic mb-4"
              >
                <Play className="w-8 h-8 fill-current ml-1" />
              </motion.div>
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-white/90 group-hover:text-[#B69A6A] transition-colors font-medium">
                PLAY SHOWREEL
              </span>
            </div>

            {/* Bottom Metadata Strip */}
            <div className="absolute bottom-4 inset-x-6 flex items-center justify-between text-[11px] font-mono text-white/70">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-rec-pulse" />
                4K DCI • MASTER SHOWREEL
              </span>
              <span className="hidden sm:inline text-[#B69A6A]">
                SOUND ON RECOMMENDED
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
