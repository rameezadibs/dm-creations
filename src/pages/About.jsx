import React from 'react';
import { ArrowUpRight, Camera, Film, Radio, RotateCw, Focus, Sparkles } from 'lucide-react';

export default function About({ onOpenBooking }) {
  return (
    <div className="pt-32 pb-24 bg-[#F6F4EF] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16 pb-8 border-b border-[#DEDCD6]">
          <div className="flex items-center gap-2 text-xs font-mono tracking-[0.25em] text-[#B69A6A] uppercase font-semibold mb-3">
            <span>// THE STUDIO ARCHIVE</span>
            <span>•</span>
            <span>ABOUT US</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-bold uppercase tracking-tight text-[#151515] leading-tight mb-6">
            WE ARE
            <br />
            <span className="font-serif italic font-normal text-[#B69A6A]">visual</span> ARCHITECTS.
          </h1>
          <p className="text-base sm:text-lg text-[#666666] font-light leading-relaxed">
            DM Creation was conceived around a single conviction: human moments are too rare to be captured with ordinary, formulaic templates. We approach every event, broadcast, and production with the rigor of a cinema studio and the eye of an editorial house.
          </p>
        </div>

        {/* Studio Image & Story Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          <div className="lg:col-span-7">
            <div className="relative bg-white p-3 sm:p-4 border border-[#DEDCD6] shadow-editorial">
              <div className="relative aspect-[16/10] overflow-hidden bg-[#151515]">
                <img
                  src="/images/statement-bts.jpg"
                  alt="DM Creation Studio Team in action"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="pt-3 flex justify-between text-xs font-mono text-[#666666]">
                <span>FIELD PRODUCTION CREW</span>
                <span className="text-[#B69A6A]">DUBAI // WORLDWIDE</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-6 text-[#666666] font-light text-sm sm:text-base leading-relaxed">
            <h3 className="text-2xl font-bold uppercase tracking-tight text-[#151515]">
              CRAFT OVER CONVENIENCE
            </h3>
            <p>
              Whether deploying high-speed cine lenses for a private celebration or running 12-camera broadcast flypacks for international assemblies, our technical execution serves one master: pure, unadulterated visual truth.
            </p>
            <p>
              We reject rigid, stiff posing in favor of anticipatory observation—capturing real energy the millisecond it unfolds.
            </p>
            <button
              onClick={() => onOpenBooking?.('Studio Collaboration')}
              className="mt-4 px-6 py-3.5 bg-[#151515] text-[#F6F4EF] hover:bg-[#B69A6A] hover:text-[#151515] transition-all text-xs font-mono uppercase tracking-widest font-semibold flex items-center gap-2"
            >
              <span>WORK WITH DM CREATION</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
