import React from 'react';
import { Camera, Film, Radio, RotateCw, ArrowUpRight } from 'lucide-react';

export default function Experience({ onOpenBooking }) {
  const pillars = [
    {
      num: '01',
      title: 'PHOTOGRAPHY',
      tagline: 'Professional visual storytelling.',
      description:
        'Crafted editorial stills with balanced ambient lighting, authentic composition, and emotional resonance that stand the test of time.',
      icon: Camera,
    },
    {
      num: '02',
      title: 'FILM',
      tagline: 'Cinematic stories made to move.',
      description:
        'Narrative rhythm, dynamic camera motion, and color grading tuned for cinematic presence across all screens.',
      icon: Film,
    },
    {
      num: '03',
      title: 'LIVE',
      tagline: 'Reliable real-time production.',
      description:
        'Broadcast-standard multi-camera switching, bonded high-speed feeds, and live sound mixing for global audiences.',
      icon: Radio,
    },
    {
      num: '04',
      title: '360°',
      tagline: 'Interactive experiences people remember.',
      description:
        'Motorized high-speed orbital capture providing guests with immediate shareable slow-motion branded videos.',
      icon: RotateCw,
    },
  ];

  return (
    <section
      id="experience-section"
      className="dark-section pt-10 sm:pt-14 pb-10 sm:pb-14 bg-[#111111] text-[#F6F4EF] relative overflow-hidden border-b border-white/10"
    >
      {/* Background Cinematic Texture / Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#B69A6A]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Editorial Section Header */}
        <div className="max-w-3xl mb-10 sm:mb-14">
          <div className="flex items-center gap-2 text-xs font-mono tracking-[0.25em] text-[#B69A6A] uppercase font-semibold mb-3">
            <span>// THE DISTINCTION</span>
            <span>•</span>
            <span>WHY DM CREATION</span>
          </div>

          <h2 className="text-4xl sm:text-6xl font-bold uppercase tracking-tight text-[#F6F4EF] leading-[1.04]">
            THE CAMERA IS OUR TOOL.
            <br />
            <span className="font-serif italic font-normal text-[#B69A6A] lowercase">
              the experience is
            </span>{' '}
            THE DIFFERENCE.
          </h2>
        </div>

        {/* Editorial Rows Breakdown (Clean horizontal borders) */}
        <div className="border-t border-white/20">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.num}
                className="py-10 sm:py-14 border-b border-white/10 grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-start group hover:bg-white/[0.03] transition-colors px-4 -mx-4"
              >
                {/* Number & Icon (2 cols) */}
                <div className="md:col-span-2 flex items-center justify-between md:block">
                  <span className="font-mono text-2xl sm:text-3xl font-light text-white/40 group-hover:text-[#B69A6A] transition-colors">
                    {pillar.num}
                  </span>
                  <div className="md:mt-4 text-[#F6F4EF]">
                    <Icon className="w-5 h-5 text-white/50 group-hover:text-[#B69A6A] transition-colors" />
                  </div>
                </div>

                {/* Title & Tagline (4 cols) */}
                <div className="md:col-span-4">
                  <h3 className="text-2xl sm:text-3xl font-bold uppercase tracking-tight text-[#F6F4EF] mb-1">
                    {pillar.title}
                  </h3>
                  <span className="text-sm font-serif italic text-[#B69A6A] block">
                    {pillar.tagline}
                  </span>
                </div>

                {/* Description (5 cols) */}
                <div className="md:col-span-5">
                  <p className="text-sm sm:text-base text-white/70 font-light leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                {/* Action Indicator (1 col) */}
                <div className="md:col-span-1 flex justify-end">
                  <button
                    onClick={() => onOpenBooking(pillar.title)}
                    className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-[#F6F4EF] group-hover:bg-[#B69A6A] group-hover:text-[#111111] group-hover:border-[#B69A6A] transition-all"
                    aria-label={`Inquire about ${pillar.title}`}
                  >
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
