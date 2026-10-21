import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle2, Mail, Phone, MapPin, Clock, Camera } from 'lucide-react';

export default function Contact({ onOpenBooking }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Photography',
    date: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-32 pb-24 bg-[#F6F4EF] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16 pb-8 border-b border-[#DEDCD6]">
          <div className="flex items-center gap-2 text-xs font-mono tracking-[0.25em] text-[#B69A6A] uppercase font-semibold mb-3">
            <span>// INQUIRIES</span>
            <span>•</span>
            <span>GET IN TOUCH</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-bold uppercase tracking-tight text-[#151515] leading-tight mb-6">
            START THE
            <br />
            <span className="font-serif italic font-normal text-[#B69A6A]">visual</span> DIALOGUE.
          </h1>
          <p className="text-base sm:text-lg text-[#666666] font-light leading-relaxed">
            Whether booking an upcoming multi-day international assembly or an intimate editorial commission, connect with our production desk to lock dates and discuss creative direction.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Contact Details (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-white p-6 sm:p-8 border border-[#DEDCD6] shadow-editorial space-y-6">
              <h3 className="text-xl font-bold uppercase tracking-tight text-[#151515] pb-4 border-b border-[#DEDCD6]">
                STUDIO COORDINATES
              </h3>

              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#B69A6A] flex-shrink-0 mt-0.5" />
                <div className="text-xs font-mono">
                  <span className="text-[#9E9C96] block uppercase mb-0.5">LOCATION [EDITABLE]</span>
                  <span className="font-semibold text-[#151515]">Dubai Design District / Worldwide</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#B69A6A] flex-shrink-0 mt-0.5" />
                <div className="text-xs font-mono">
                  <span className="text-[#9E9C96] block uppercase mb-0.5">DIRECT EMAIL</span>
                  <a href="mailto:info.dmcreation@gmail.com" className="font-semibold text-[#151515] hover:text-[#B69A6A] transition-colors">
                    info.dmcreation@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#B69A6A] flex-shrink-0 mt-0.5" />
                <div className="text-xs font-mono">
                  <span className="text-[#9E9C96] block uppercase mb-0.5">PHONE / WHATSAPP</span>
                  <a href="tel:+971528351320" className="font-semibold text-[#151515] hover:text-[#B69A6A] transition-colors">
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
                Dates for prime wedding weekends and high-volume summit seasons are secured on a first-confirmed retainer basis.
              </p>
            </div>
          </div>

          {/* Inquiry Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white p-6 sm:p-10 border border-[#DEDCD6] shadow-editorial relative">
              <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-[#151515]" />
              <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-[#151515]" />
              <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-[#151515]" />
              <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-[#151515]" />

              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-mono uppercase tracking-wider text-[#666666] mb-1">
                        YOUR NAME *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-[#F6F4EF] border border-[#DEDCD6] focus:border-[#151515] focus:outline-none text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-mono uppercase tracking-wider text-[#666666] mb-1">
                        EMAIL ADDRESS *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-[#F6F4EF] border border-[#DEDCD6] focus:border-[#151515] focus:outline-none text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-mono uppercase tracking-wider text-[#666666] mb-1">
                        SERVICE REQUIRED
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-[#F6F4EF] border border-[#DEDCD6] focus:border-[#151515] focus:outline-none text-sm"
                      >
                        <option value="Photography">01. Photography</option>
                        <option value="Videography">02. Videography</option>
                        <option value="Live Streaming">03. Live Streaming</option>
                        <option value="360° Booth">04. 360° Booth</option>
                        <option value="Comprehensive Package">Comprehensive Package (All)</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-[11px] font-mono uppercase tracking-wider text-[#666666] mb-1">
                        ESTIMATED EVENT DATE
                      </label>
                      <input
                        type="date"
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-[#F6F4EF] border border-[#DEDCD6] focus:border-[#151515] focus:outline-none text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-[#666666] mb-1">
                      PROJECT VISION & SPECIFICS
                    </label>
                    <textarea
                      rows={5}
                      required
                      placeholder="Describe the scale, location, guest volume, and key moments you wish captured..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-[#F6F4EF] border border-[#DEDCD6] focus:border-[#151515] focus:outline-none text-sm resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-[#151515] text-[#F6F4EF] hover:bg-[#B69A6A] hover:text-[#151515] transition-all font-mono text-xs uppercase tracking-widest font-semibold flex items-center justify-center gap-2"
                  >
                    <span>TRANSMIT INQUIRY</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </form>
              ) : (
                <div className="py-16 text-center">
                  <CheckCircle2 className="w-12 h-12 text-[#B69A6A] mx-auto mb-4" />
                  <h3 className="text-2xl font-bold uppercase tracking-tight mb-2">Message Dispatched</h3>
                  <p className="text-sm text-[#666666] max-w-sm mx-auto mb-6">
                    Our lead production coordinator will review your schedule and respond within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 bg-[#151515] text-[#F6F4EF] text-xs font-mono uppercase tracking-widest hover:bg-[#B69A6A] hover:text-[#151515]"
                  >
                    SEND ANOTHER MESSAGE
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
