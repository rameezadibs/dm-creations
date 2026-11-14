import React from 'react';
import { ArrowUpRight, Mail, Phone, MapPin, Clock, MessageSquare, Calendar, ShieldCheck, Globe2 } from 'lucide-react';

export default function Contact({ onOpenBooking }) {
  return (
    <div className="pt-32 pb-24 bg-[#F6F4EF] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16 pb-8 border-b border-[#DEDCD6]">
          <div className="flex items-center gap-2 text-xs font-mono tracking-[0.25em] text-[#B69A6A] uppercase font-semibold mb-3">
            <span>// INQUIRIES & DIRECT ACCESS</span>
            <span>•</span>
            <span>COMMISSION DESK</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl font-normal uppercase tracking-tight text-[#151515] leading-tight mb-6">
            START THE
            <br />
            <span className="font-serif italic font-normal text-[#B69A6A]">visual</span> DIALOGUE.
          </h1>
          <p className="text-base sm:text-lg text-[#666666] font-light leading-relaxed">
            Whether securing dates for an international multi-day assembly or commissioning an intimate editorial production, connect directly with our studio directors.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Studio Coordinates (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white p-6 sm:p-8 border border-[#DEDCD6] shadow-editorial space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-[#DEDCD6]">
                <h3 className="font-serif text-xl font-normal uppercase tracking-tight text-[#151515]">
                  STUDIO COORDINATES
                </h3>
                <span className="text-[10px] font-mono tracking-widest text-[#B69A6A] uppercase border border-[#B69A6A]/30 px-2 py-0.5">
                  HQ • DXB
                </span>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#B69A6A] flex-shrink-0 mt-0.5" />
                <div className="text-xs font-mono">
                  <span className="text-[#9E9C96] block uppercase mb-0.5">LOCATION</span>
                  <span className="font-semibold text-[#151515]">Dubai Design District / Worldwide</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#B69A6A] flex-shrink-0 mt-0.5" />
                <div className="text-xs font-mono">
                  <span className="text-[#9E9C96] block uppercase mb-0.5">DIRECT EMAIL</span>
                  <a
                    href="mailto:info.dmcreation@gmail.com"
                    className="font-semibold text-[#151515] hover:text-[#B69A6A] transition-colors"
                  >
                    info.dmcreation@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#B69A6A] flex-shrink-0 mt-0.5" />
                <div className="text-xs font-mono">
                  <span className="text-[#9E9C96] block uppercase mb-0.5">PHONE / WHATSAPP</span>
                  <a
                    href="tel:+971528351320"
                    className="font-semibold text-[#151515] hover:text-[#B69A6A] transition-colors"
                  >
                    +971 52 835 1320
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-[#B69A6A] flex-shrink-0 mt-0.5" />
                <div className="text-xs font-mono">
                  <span className="text-[#9E9C96] block uppercase mb-0.5">OPERATING HOURS</span>
                  <span className="font-semibold text-[#151515]">Mon - Sat: 09:00 - 20:00 (GST)</span>
                </div>
              </div>
            </div>

            <div className="p-6 bg-[#151515] text-[#F6F4EF] border border-[#262626] font-mono text-xs">
              <span className="text-[#B69A6A] block uppercase mb-2 tracking-widest">// BOOKING NOTICE</span>
              <p className="text-white/70 font-light leading-relaxed">
                Dates for prime wedding weekends and high-volume summit seasons are secured on a first-confirmed retainer basis. Early inquiry recommended 6–12 months prior to production.
              </p>
            </div>
          </div>

          {/* Direct Commission & Concierge Channels (7 cols - NO FORM) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-white p-6 sm:p-10 border border-[#DEDCD6] shadow-editorial relative">
              <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-[#151515]" />
              <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-[#151515]" />
              <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-[#151515]" />
              <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-[#151515]" />

              <div className="mb-8 pb-5 border-b border-[#DEDCD6]">
                <div className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#B69A6A] mb-1 font-semibold">
                  // INSTANT CHANNELS
                </div>
                <h2 className="font-serif text-2xl sm:text-3xl font-normal uppercase tracking-tight text-[#151515]">
                  DIRECT PRODUCTION DESK
                </h2>
                <p className="text-xs sm:text-sm text-[#666666] font-light mt-2 leading-relaxed">
                  No automated ticket queues or submission forms. Connect directly via our executive channels for instantaneous communication and availability validation.
                </p>
              </div>

              {/* Action Channels Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                {/* WhatsApp Direct */}
                <a
                  href="https://wa.me/971528351320?text=Hello%20DM%20Creation,%20I%20would%20like%20to%20inquire%20about%20booking%20a%20production."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-5 bg-[#F6F4EF] hover:bg-[#151515] transition-all duration-300 border border-[#DEDCD6] flex flex-col justify-between"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="p-2.5 bg-white group-hover:bg-[#222222] text-[#151515] group-hover:text-[#B69A6A] transition-colors border border-[#DEDCD6] group-hover:border-transparent">
                      <MessageSquare className="w-5 h-5" />
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-[#9E9C96] group-hover:text-[#B69A6A] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#B69A6A] block mb-1">
                      PRIORITY CHAT
                    </span>
                    <h4 className="text-base font-bold uppercase text-[#151515] group-hover:text-white transition-colors">
                      WhatsApp Direct
                    </h4>
                    <p className="text-xs font-mono text-[#666666] group-hover:text-white/70 mt-1">
                      +971 52 835 1320
                    </p>
                  </div>
                </a>

                {/* Direct Email */}
                <a
                  href="mailto:info.dmcreation@gmail.com?subject=Production%20Inquiry%20%E2%80%94%20DM%20Creation"
                  className="group p-5 bg-[#F6F4EF] hover:bg-[#151515] transition-all duration-300 border border-[#DEDCD6] flex flex-col justify-between"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="p-2.5 bg-white group-hover:bg-[#222222] text-[#151515] group-hover:text-[#B69A6A] transition-colors border border-[#DEDCD6] group-hover:border-transparent">
                      <Mail className="w-5 h-5" />
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-[#9E9C96] group-hover:text-[#B69A6A] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#B69A6A] block mb-1">
                      OFFICIAL BRIEFINGS
                    </span>
                    <h4 className="text-base font-bold uppercase text-[#151515] group-hover:text-white transition-colors">
                      Direct Email
                    </h4>
                    <p className="text-xs font-mono text-[#666666] group-hover:text-white/70 mt-1 truncate">
                      info.dmcreation@gmail.com
                    </p>
                  </div>
                </a>

                {/* Direct Phone Call */}
                <a
                  href="tel:+971528351320"
                  className="group p-5 bg-[#F6F4EF] hover:bg-[#151515] transition-all duration-300 border border-[#DEDCD6] flex flex-col justify-between"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="p-2.5 bg-white group-hover:bg-[#222222] text-[#151515] group-hover:text-[#B69A6A] transition-colors border border-[#DEDCD6] group-hover:border-transparent">
                      <Phone className="w-5 h-5" />
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-[#9E9C96] group-hover:text-[#B69A6A] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#B69A6A] block mb-1">
                      DIRECT CALL
                    </span>
                    <h4 className="text-base font-bold uppercase text-[#151515] group-hover:text-white transition-colors">
                      Studio Line
                    </h4>
                    <p className="text-xs font-mono text-[#666666] group-hover:text-white/70 mt-1">
                      +971 52 835 1320
                    </p>
                  </div>
                </a>

                {/* Production Calendar Reservation */}
                <button
                  type="button"
                  onClick={() => onOpenBooking?.('General Inquiry')}
                  className="group p-5 bg-[#F6F4EF] hover:bg-[#151515] transition-all duration-300 border border-[#DEDCD6] flex flex-col justify-between text-left"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="p-2.5 bg-white group-hover:bg-[#222222] text-[#151515] group-hover:text-[#B69A6A] transition-colors border border-[#DEDCD6] group-hover:border-transparent">
                      <Calendar className="w-5 h-5" />
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-[#9E9C96] group-hover:text-[#B69A6A] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#B69A6A] block mb-1">
                      CALENDAR RESERVATION
                    </span>
                    <h4 className="text-base font-bold uppercase text-[#151515] group-hover:text-white transition-colors">
                      Lock Production Date
                    </h4>
                    <p className="text-xs font-mono text-[#666666] group-hover:text-white/70 mt-1">
                      Launch Date Selector
                    </p>
                  </div>
                </button>
              </div>

              {/* Protocol Commitments */}
              <div className="pt-6 border-t border-[#DEDCD6] grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="flex items-start gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-[#B69A6A] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-[#151515] block uppercase font-mono text-[11px]">
                      CONFIDENTIALITY & NDA
                    </span>
                    <p className="text-[#666666] font-light mt-0.5 leading-relaxed">
                      Custom non-disclosure agreements available for high-profile commissions and embargoed events.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Globe2 className="w-4 h-4 text-[#B69A6A] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-[#151515] block uppercase font-mono text-[11px]">
                      WORLDWIDE DISPATCH
                    </span>
                    <p className="text-[#666666] font-light mt-0.5 leading-relaxed">
                      Lead directors deploy globally with full cinema-grade transport kits and multi-camera units.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
