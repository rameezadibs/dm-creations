import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      quote: "DM Creation didn't just capture the event. They captured exactly how it felt.",
      client: 'CLIENT NAME [REPRESENTATIVE REFERENCE]',
      context: 'ANNUAL GALA / DUBAI',
      discipline: 'PHOTOGRAPHY & AFTERMOVIE',
    },
    {
      id: 2,
      quote: "The multi-camera broadcast stream was flawless across 4 continents. The team worked with calm, cinematic authority.",
      client: 'CLIENT NAME [REPRESENTATIVE REFERENCE]',
      context: 'GLOBAL LEADERSHIP FORUM / UAE',
      discipline: 'LIVE STREAMING PRODUCTION',
    },
    {
      id: 3,
      quote: "The 360 booth was the single most talked-about activation of our brand celebration. The energy and turnaround were immaculate.",
      client: 'CLIENT NAME [REPRESENTATIVE REFERENCE]',
      context: 'PRODUCT LAUNCH / DIFC',
      discipline: '360° BOOTH ACTIVATION',
    },
  ];

  const [currentIdx, setCurrentIdx] = useState(0);

  const prevTestimonial = () => {
    setCurrentIdx((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setCurrentIdx((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const active = testimonials[currentIdx];

  return (
    <section className="pt-12 sm:pt-16 pb-10 sm:pb-14 bg-[#F6F4EF] border-b border-[#DEDCD6]/60 relative overflow-hidden">
      {/* Huge Subtle Watermark Quotation Mark in Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none opacity-5">
        <span className="font-serif text-[28vw] leading-none text-[#151515]">
          “
        </span>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Section Tag */}
        <div className="inline-flex items-center gap-2 text-xs font-mono tracking-[0.25em] text-[#B69A6A] uppercase font-semibold mb-6">
          <Quote className="w-3.5 h-3.5 fill-current" />
          <span>EDITORIAL TESTIMONIAL // THE IMPRESSION</span>
        </div>

        {/* Large Quote Display */}
        <div className="min-h-[220px] sm:min-h-[240px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-4xl"
            >
              <blockquote className="text-2xl sm:text-4xl lg:text-5xl font-serif italic text-[#151515] leading-snug sm:leading-tight mb-8">
                “{active.quote}”
              </blockquote>

              <div className="flex flex-col items-center">
                <span className="text-xs font-mono font-bold tracking-[0.2em] uppercase text-[#151515]">
                  {active.client}
                </span>
                <span className="text-[11px] font-mono tracking-widest text-[#B69A6A] uppercase mt-1">
                  {active.context} • {active.discipline}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Elegant Minimalist Navigation Arrows */}
        <div className="mt-12 flex items-center justify-center gap-6">
          <button
            onClick={prevTestimonial}
            className="w-12 h-12 rounded-full border border-[#DEDCD6] hover:border-[#151515] hover:bg-[#151515] hover:text-[#F6F4EF] text-[#151515] transition-all flex items-center justify-center"
            aria-label="Previous quote"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>

          <span className="font-mono text-xs text-[#9E9C96] tracking-widest">
            0{currentIdx + 1} / 0{testimonials.length}
          </span>

          <button
            onClick={nextTestimonial}
            className="w-12 h-12 rounded-full border border-[#DEDCD6] hover:border-[#151515] hover:bg-[#151515] hover:text-[#F6F4EF] text-[#151515] transition-all flex items-center justify-center"
            aria-label="Next quote"
          >
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Editable placeholder disclaimer note */}
        <p className="mt-8 text-[10px] font-mono text-[#9E9C96] uppercase tracking-wider">
          * Representative client testimonials displayed for visual layout reference.
        </p>
      </div>
    </section>
  );
}
