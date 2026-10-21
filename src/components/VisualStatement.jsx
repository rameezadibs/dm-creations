import React from 'react';
import { motion } from 'framer-motion';
import { Focus, Sparkles } from 'lucide-react';

export default function VisualStatement() {
  return (
    <section
      id="visual-statement-section"
      aria-label="DM Creation Visual Storytellers and Production Philosophy"
      className="dark-section pt-10 sm:pt-14 pb-6 sm:pb-8 px-4 sm:px-6 lg:px-8 bg-[#111111] text-[#F6F4EF] relative overflow-hidden border-b border-white/10"
      itemScope
      itemType="https://schema.org/AboutPage"
    >
      {/* Background Cinematic Texture / Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#B69A6A]/5 rounded-full blur-[140px] pointer-events-none" aria-hidden="true" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Label */}
        <div className="flex items-center gap-3 mb-6 sm:mb-8">
          <div className="w-8 h-[1px] bg-[#B69A6A]" aria-hidden="true" />
          <span className="text-xs font-mono tracking-[0.25em] text-[#B69A6A] uppercase font-semibold">
            DM CREATION // VISUAL STORYTELLERS & CINEMATOGRAPHY
          </span>
        </div>

        {/* Editorial Split Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Large Statement Typography (7 cols) */}
          <div className="lg:col-span-7">
            <h2 className="text-4xl sm:text-6xl xl:text-7xl font-bold uppercase tracking-tight text-[#F6F4EF] leading-[1.02] mb-8">
              YOU LIVE
              <br />
              THE MOMENT.
              <br />
              <span className="text-white/60 font-light">WE MAKE IT</span>
              <br />
              <span className="font-serif italic font-normal text-[#B69A6A] lowercase">
                last.
              </span>
            </h2>

            <div className="max-w-xl border-l-2 border-[#B69A6A] pl-6 py-1">
              <p className="text-base sm:text-lg text-white/80 font-light leading-relaxed">
                As Dubai’s premier <strong className="font-medium text-[#F6F4EF]">visual storytelling studio</strong>, we craft high-end event photography, documentary-style wedding films, corporate summit broadcasts, and branded visual campaigns engineered to outlive the night.
              </p>
            </div>

            {/* Technical Viewfinder Specs */}
            <div className="mt-10 flex flex-wrap gap-8 text-[11px] font-mono text-white/50 uppercase tracking-wider">
              <div>
                <span className="text-[#F6F4EF] block font-semibold mb-0.5">COVERAGE</span>
                <span>DUBAI • UAE • GLOBAL PRODUCTIONS</span>
              </div>
              <div className="border-l border-white/10 pl-8">
                <span className="text-[#F6F4EF] block font-semibold mb-0.5">PHILOSOPHY</span>
                <span>AUTHENTICITY OVER POSING</span>
              </div>
              <div className="border-l border-white/10 pl-8">
                <span className="text-[#F6F4EF] block font-semibold mb-0.5">CINEMA FORMAT</span>
                <span>14-BIT RAW • 4K PRORES • 360° VIDEO</span>
              </div>
            </div>
          </div>

          {/* Candid BTS Image (5 cols) */}
          <div className="lg:col-span-5">
            <figure className="relative p-3 bg-[#151515] border border-white/10 shadow-cinematic group m-0">
              {/* Corner Viewfinder Marks */}
              <div className="absolute top-2 left-2 w-3 h-3 border-t border-l border-white/60 pointer-events-none" aria-hidden="true" />
              <div className="absolute top-2 right-2 w-3 h-3 border-t border-r border-white/60 pointer-events-none" aria-hidden="true" />
              <div className="absolute bottom-2 left-2 w-3 h-3 border-b border-l border-white/60 pointer-events-none" aria-hidden="true" />
              <div className="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-white/60 pointer-events-none" aria-hidden="true" />

              <div className="relative aspect-[4/5] overflow-hidden bg-[#111111]">
                <img
                  src="/images/statement-bts.jpg"
                  alt="DM Creation professional camera crew and cinematographers shooting on location in Dubai"
                  title="DM Creation Visual Storytellers Behind The Scenes Production"
                  className="w-full h-full object-cover img-hover-scale"
                  loading="lazy"
                  width="500"
                  height="625"
                />

                {/* Technical Overlay */}
                <figcaption className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex items-center justify-between text-white text-xs font-mono">
                  <div className="flex items-center gap-2">
                    <Focus className="w-3.5 h-3.5 text-[#B69A6A]" aria-hidden="true" />
                    <span className="text-[11px] uppercase tracking-wider">CREW IN MOTION // BTS DUBAI</span>
                  </div>
                  <span className="text-[10px] text-white/70">ROLL 04 / EXPOSURE 18</span>
                </figcaption>
              </div>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
