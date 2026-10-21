import React from 'react';
import { ArrowUpRight, MessageSquare, Sparkles } from 'lucide-react';

export default function FinalCTA({ onOpenBooking }) {
  return (
    <section
      aria-label="Book DM Creation - Photography, Videography & Visual Production Dubai"
      className="pt-10 sm:pt-14 pb-20 sm:pb-28 bg-[#F6F4EF] border-b border-[#DEDCD6]/60 relative"
      itemScope
      itemType="https://schema.org/ContactPoint"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Large Beautiful Event Photograph with Viewfinder Frame (6 cols) */}
          <div className="lg:col-span-6 relative">
            <figure className="relative bg-white p-3 sm:p-5 border border-[#DEDCD6] shadow-editorial group m-0">
              {/* Subtle Camera Viewfinder Crop Marks */}
              <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-[#151515]" aria-hidden="true" />
              <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-[#151515]" aria-hidden="true" />
              <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-[#151515]" aria-hidden="true" />
              <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-[#151515]" aria-hidden="true" />

              <div className="relative aspect-[4/3] sm:aspect-[16/11] overflow-hidden bg-[#151515]">
                <img
                  src="/images/cta-image.jpg"
                  alt="DM Creation editorial photography and cinema production in Dubai UAE"
                  title="DM Creation Event and Fashion Photography Dubai"
                  className="w-full h-full object-cover img-hover-scale"
                  loading="lazy"
                  width="700"
                  height="480"
                  itemProp="image"
                />

                {/* Subtle Viewfinder Framing Watermark */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none" aria-hidden="true">
                  <div className="border border-white/30 w-3/4 h-3/4 flex items-center justify-center">
                    <span className="font-mono text-[11px] text-white/80 uppercase tracking-[0.3em] bg-black/40 backdrop-blur-sm px-3 py-1">
                      ┌ THE MOMENT ┐
                    </span>
                  </div>
                </div>
              </div>

              <figcaption className="mt-3 flex items-center justify-between text-xs font-mono text-[#666666]">
                <span>DM CREATION ARCHIVE // DUBAI</span>
                <span className="text-[#B69A6A]">READY TO RECORD</span>
              </figcaption>
            </figure>
          </div>

          {/* Right: Large Typography & CTAs (6 cols) */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="flex items-center gap-2 text-xs font-mono tracking-[0.25em] text-[#B69A6A] uppercase font-semibold mb-4">
              <span>COLLABORATE WITH US // DUBAI • UAE</span>
            </div>

            <h2 className="text-4xl sm:text-6xl xl:text-7xl font-bold uppercase tracking-tight text-[#151515] leading-[0.98] mb-6">
              GOT A MOMENT
              <br />
              <span className="font-serif italic font-normal text-[#B69A6A] lowercase">
                worth
              </span>{' '}
              KEEPING?
            </h2>

            <p className="text-base sm:text-lg text-[#666666] font-light leading-relaxed mb-8 sm:mb-10 max-w-lg">
              Let's turn your luxury celebration, corporate summit, brand campaign, or private event into an indelible visual artifact. Inquire today for photography, videography, live broadcasting, or 360 photo booth bookings in Dubai and worldwide.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => onOpenBooking('General Inquiry')}
                aria-label="Book your photography or videography shoot with DM Creation"
                className="px-8 py-4 bg-[#151515] text-[#F6F4EF] hover:bg-[#B69A6A] hover:text-[#151515] transition-all duration-300 text-xs font-mono uppercase tracking-[0.2em] font-medium flex items-center gap-2 group shadow-editorial"
              >
                <span>BOOK YOUR SHOOT</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>

              <button
                onClick={() => onOpenBooking('Conversation')}
                aria-label="Start a conversation with the DM Creation production team"
                className="px-8 py-4 bg-[#151515] text-[#F6F4EF] hover:bg-[#B69A6A] hover:text-[#151515] transition-all duration-300 text-xs font-mono uppercase tracking-[0.2em] font-medium flex items-center gap-2 group shadow-editorial"
              >
                <span>START A CONVERSATION</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>

            {/* Quick reassurance line */}
            <div className="mt-8 pt-6 border-t border-[#DEDCD6] text-[11px] font-mono text-[#9E9C96] tracking-wider uppercase flex flex-wrap justify-between gap-2">
              <span>// AVAILABILITY ACROSS UAE & WORLDWIDE PRODUCTIONS</span>
              <span className="text-[#B69A6A]">RESPONSE WITHIN 24 HOURS</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
