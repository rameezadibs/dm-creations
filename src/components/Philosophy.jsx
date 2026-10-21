import React from 'react';
import { motion } from 'framer-motion';
import { Aperture, Sparkles, Layers } from 'lucide-react';

export default function Philosophy() {
  return (
    <section className="py-24 sm:py-36 bg-[#F6F4EF] border-b border-[#DEDCD6]/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="flex items-center gap-2 text-xs font-mono tracking-[0.25em] text-[#B69A6A] uppercase font-semibold mb-3">
            <Aperture className="w-3.5 h-3.5" />
            <span>OUR APPROACH // THE METHOD</span>
          </div>

          <h2 className="text-4xl sm:text-6xl font-bold uppercase tracking-tight text-[#151515] leading-[1.02] mb-6">
            NO STIFF POSES.
            <br />
            NO BORING FRAMES.
            <br />
            <span className="font-serif italic font-normal text-[#B69A6A] lowercase">
              just
            </span>{' '}
            REAL ENERGY.
          </h2>

          <p className="text-base sm:text-lg text-[#666666] font-light leading-relaxed">
            The best moments rarely happen on command. We stay relentlessly ready for the unprompted laughs, the spontaneous movement, the subtle glances and everything in between.
          </p>
        </div>

        {/* Contact Sheet / Creative Director's Board (Overlapping & Tilted frames) */}
        <div className="relative pt-6 pb-12">
          {/* Subtle Film Sprocket Strip Background Accent */}
          <div className="hidden lg:block absolute -top-4 inset-x-0 h-4 film-perforations opacity-20 pointer-events-none" />

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative">
            {/* Frame 1: Rotated -1.5 deg (4 cols) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="md:col-span-4 transform md:-rotate-1.5 transition-transform duration-500 hover:rotate-0"
            >
              <div className="bg-white p-3 border border-[#DEDCD6] shadow-editorial group">
                <div className="relative aspect-[3/4] overflow-hidden bg-[#111111]">
                  <img
                    src="/images/bts-1.jpg"
                    alt="DM Creation director and camera team at work"
                    className="w-full h-full object-cover img-hover-scale"
                    loading="lazy"
                  />
                  {/* Contact Sheet Index Label */}
                  <div className="absolute top-2 left-2 bg-black/70 px-2 py-0.5 text-[9px] font-mono text-white/90">
                    FRAME #081 • 50MM F/1.2
                  </div>
                </div>
                <div className="pt-2 text-[10px] font-mono text-[#666666] flex justify-between">
                  <span>BTS // ON-LOCATION SETUP</span>
                  <span>ROLL 08</span>
                </div>
              </div>
            </motion.div>

            {/* Frame 2: Dominant Center Frame (5 cols) */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="md:col-span-5 relative z-10 -mt-4 md:-mt-8"
            >
              <div className="bg-white p-4 border-2 border-[#151515] shadow-cinematic group">
                {/* Viewfinder Corners */}
                <div className="absolute top-2 left-2 w-3.5 h-3.5 border-t-2 border-l-2 border-[#151515]" />
                <div className="absolute top-2 right-2 w-3.5 h-3.5 border-t-2 border-r-2 border-[#151515]" />
                <div className="absolute bottom-2 left-2 w-3.5 h-3.5 border-b-2 border-l-2 border-[#151515]" />
                <div className="absolute bottom-2 right-2 w-3.5 h-3.5 border-b-2 border-r-2 border-[#151515]" />

                <div className="relative aspect-[4/3] overflow-hidden bg-[#151515]">
                  <img
                    src="/images/bts-2.jpg"
                    alt="Candid celebration moment captured in real time"
                    className="w-full h-full object-cover img-hover-scale"
                    loading="lazy"
                  />
                  <div className="absolute bottom-3 left-3 bg-black/80 backdrop-blur-sm text-[#F6F4EF] px-3 py-1 font-mono text-[10px] tracking-widest uppercase">
                    CANDID HARVEST // 00:01:24
                  </div>
                </div>

                <div className="pt-3 flex items-center justify-between text-xs font-mono">
                  <span className="font-bold text-[#151515]">THE UNGUARDED SECOND</span>
                  <span className="text-[#B69A6A]">FRAME #082</span>
                </div>
              </div>
            </motion.div>

            {/* Frame 3: Rotated +2 deg (3 cols) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="md:col-span-3 transform md:rotate-2 transition-transform duration-500 hover:rotate-0"
            >
              <div className="bg-white p-3 border border-[#DEDCD6] shadow-editorial group">
                <div className="relative aspect-[3/4] overflow-hidden bg-[#111111]">
                  <img
                    src="/images/bts-3.jpg"
                    alt="Camera crew preparing rigging and lighting"
                    className="w-full h-full object-cover img-hover-scale"
                    loading="lazy"
                  />
                  <div className="absolute top-2 left-2 bg-black/70 px-2 py-0.5 text-[9px] font-mono text-white/90">
                    FRAME #083 • GIMBAL BALANCING
                  </div>
                </div>
                <div className="pt-2 text-[10px] font-mono text-[#666666] flex justify-between">
                  <span>CREW FOCUS</span>
                  <span>ROLL 08</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
