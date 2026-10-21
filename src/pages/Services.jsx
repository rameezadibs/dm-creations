import React from 'react';
import { Camera, Film, Radio, RotateCw, ArrowUpRight, Check } from 'lucide-react';

export default function Services({ onOpenBooking }) {
  const servicesList = [
    {
      id: '01',
      title: 'PHOTOGRAPHY',
      subtitle: 'Editorial & Event Stills',
      desc: 'High-fidelity portraiture, luxury galas, architectural coverage, and unscripted celebration moments with refined editorial lighting.',
      features: ['Medium format & 35mm primes', 'Natural skin-tone color grading', 'Private curated client gallery', 'Archival delivery'],
      image: '/images/service-photo.jpg',
    },
    {
      id: '02',
      title: 'VIDEOGRAPHY',
      subtitle: 'Cinematic Films & Aftermovies',
      desc: 'Full cinematic production using anamorphic optics, fluid gimbal tracking, drone cinematography, and tailored motion graphics.',
      features: ['4K DCI & 2.39:1 CinemaScope', 'Custom sound design & mix', 'Teaser & feature-length cuts', 'Color graded with film emulation'],
      image: '/images/service-video.jpg',
    },
    {
      id: '03',
      title: 'LIVE STREAMING',
      subtitle: 'Broadcast Multi-Cam Production',
      desc: 'Flawless real-time global transmission for conferences, summits, and hybrid gatherings with dual-bonded redundancy.',
      features: ['Up to 12-camera live switching', 'Sub-second ultra-low latency', 'Bonded 5G / satellite uplinks', 'Custom branded broadcast graphics'],
      image: '/images/service-live.jpg',
    },
    {
      id: '04',
      title: '360° BOOTH',
      subtitle: 'Interactive Experiential Activation',
      desc: 'High-speed motorized orbital camera platform generating immediate slow-motion video keepsakes with custom music and branding.',
      features: ['Instant AirDrop & QR sharing', 'Custom animated video overlays', 'LED ambient studio lighting', 'Dedicated on-site director'],
      image: '/images/service-360.jpg',
    },
  ];

  return (
    <div className="pt-32 pb-24 bg-[#F6F4EF] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16 pb-8 border-b border-[#DEDCD6]">
          <div className="flex items-center gap-2 text-xs font-mono tracking-[0.25em] text-[#B69A6A] uppercase font-semibold mb-3">
            <span>// CAPABILITIES</span>
            <span>•</span>
            <span>DISCIPLINES</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-bold uppercase tracking-tight text-[#151515] leading-tight mb-6">
            FOUR CORE
            <br />
            <span className="font-serif italic font-normal text-[#B69A6A]">visual</span> PRODUCTIONS.
          </h1>
          <p className="text-base sm:text-lg text-[#666666] font-light leading-relaxed">
            Every service is calibrated to provide distinctive artistic direction, uncompromising technical reliability, and an unforgettable client experience.
          </p>
        </div>

        <div className="space-y-16">
          {servicesList.map((srv) => (
            <div
              key={srv.id}
              className="bg-white p-6 sm:p-10 border border-[#DEDCD6] shadow-editorial grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              <div className="lg:col-span-6">
                <div className="flex items-center gap-2 text-xs font-mono text-[#B69A6A] uppercase tracking-widest mb-2">
                  <span>{srv.id}</span>
                  <span>/</span>
                  <span>{srv.subtitle}</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold uppercase tracking-tight text-[#151515] mb-4">
                  {srv.title}
                </h2>
                <p className="text-sm sm:text-base text-[#666666] font-light leading-relaxed mb-6">
                  {srv.desc}
                </p>

                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {srv.features.map((feat, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs font-mono text-[#151515]">
                      <Check className="w-3.5 h-3.5 text-[#B69A6A]" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => onOpenBooking?.(srv.title)}
                  className="px-6 py-3.5 bg-[#151515] text-[#F6F4EF] hover:bg-[#B69A6A] hover:text-[#151515] transition-all text-xs font-mono uppercase tracking-widest font-semibold inline-flex items-center gap-2"
                >
                  <span>BOOK {srv.title}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>

              <div className="lg:col-span-6">
                <div className="relative aspect-[16/10] overflow-hidden bg-black border border-[#DEDCD6]">
                  <img
                    src={srv.image}
                    alt={srv.title}
                    className="w-full h-full object-cover img-hover-scale"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
