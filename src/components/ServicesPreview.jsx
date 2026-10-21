import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Play, Radio, RotateCw, Camera, Video, MonitorPlay, Sparkles } from 'lucide-react';
import { useCursor } from '../context/CursorContext';

export default function ServicesPreview({ onOpenBooking, onOpenVideo }) {
  const { setCursor, resetCursor } = useCursor();

  return (
    <section
      id="services-section"
      aria-label="DM Creation Production Services - Photography, Videography, Live Streaming & 360 Booth"
      className="pt-6 sm:pt-8 pb-4 sm:pb-6 bg-[#F6F4EF] border-b border-[#DEDCD6]/60"
      itemScope
      itemType="https://schema.org/ItemList"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 pb-8 border-b border-[#DEDCD6]">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-2.5 h-2.5 bg-[#151515]" aria-hidden="true" />
              <span className="text-xs font-mono tracking-[0.25em] text-[#666666] uppercase font-semibold">
                WHAT WE DO // SERVICES & DISCIPLINES
              </span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-bold uppercase tracking-tight text-[#151515]">
              FOUR WAYS
              <br />
              <span className="font-serif italic font-normal text-[#B69A6A] lowercase">
                to tell
              </span>{' '}
              YOUR STORY.
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-sm sm:text-base text-[#666666] max-w-md font-light">
            Specialized visual production services in Dubai, Abu Dhabi, and worldwide. From high-fashion editorial portraits to multi-camera live broadcasts and interactive 360 spinner experiences.
          </p>
        </div>

        {/* 01 / PHOTOGRAPHY — Clean Light Editorial Portrait Composition */}
        <article
          className="mb-24 sm:mb-36"
          itemScope
          itemProp="itemListElement"
          itemType="https://schema.org/Service"
        >
          <meta itemProp="serviceType" content="Editorial & Event Photography Dubai" />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            {/* Visual (7 cols) */}
            <div className="lg:col-span-7 order-2 lg:order-1">
              <div className="relative bg-white p-3 sm:p-4 border border-[#DEDCD6] shadow-editorial group">
                <div className="relative aspect-[4/3] sm:aspect-[16/11] overflow-hidden bg-[#151515]">
                  <img
                    src="/home/1.png"
                    alt="DM Creation - Luxury Wedding & Editorial Event Photography in Dubai"
                    title="DM Creation Professional Photography Services"
                    className="w-full h-full object-cover img-hover-scale"
                    loading="lazy"
                    width="700"
                    height="480"
                    itemProp="image"
                  />
                  {/* Subtle Viewfinder Framing Marks */}
                  <div className="absolute top-3 left-3 w-3 h-3 border-t border-l border-white/70" aria-hidden="true" />
                  <div className="absolute top-3 right-3 w-3 h-3 border-t border-r border-white/70" aria-hidden="true" />
                  <div className="absolute bottom-3 left-3 w-3 h-3 border-b border-l border-white/70" aria-hidden="true" />
                  <div className="absolute bottom-3 right-3 w-3 h-3 border-b border-r border-white/70" aria-hidden="true" />

                  <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm text-white px-3 py-1 font-mono text-[10px] uppercase tracking-widest flex items-center gap-2">
                    <Camera className="w-3 h-3 text-[#B69A6A]" aria-hidden="true" />
                    <span>NATURAL LIGHT // CANDID EDITORIAL</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Typography & Details (5 cols) */}
            <div className="lg:col-span-5 order-1 lg:order-2">
              <div className="flex items-center gap-2 font-mono text-xs text-[#B69A6A] uppercase tracking-widest mb-3">
                <span>01</span>
                <span>/</span>
                <span itemProp="name">PHOTOGRAPHY</span>
              </div>
              <h3 className="text-3xl sm:text-4xl font-bold uppercase tracking-tight text-[#151515] leading-tight mb-4">
                REAL MOMENTS.
                <br />
                <span className="font-serif italic font-normal text-[#B69A6A]">BEAUTIFULLY</span> FRAMED.
              </h3>
              <p className="text-sm sm:text-base text-[#666666] font-light leading-relaxed mb-6" itemProp="description">
                From high-profile celebrity portraits and luxury Dubai weddings to corporate galas and architectural brand campaigns, we capture raw, unscripted emotion with natural skin tones and tailored editorial lighting.
              </p>

              <div className="space-y-2 mb-8 text-xs font-mono text-[#666666]">
                <div className="flex items-center justify-between border-b border-[#DEDCD6] py-1.5">
                  <span>DISCIPLINES</span>
                  <span className="text-[#151515]">Portraits, Weddings, Galas, Architecture, Fashion</span>
                </div>
                <div className="flex items-center justify-between border-b border-[#DEDCD6] py-1.5">
                  <span>DELIVERABLES</span>
                  <span className="text-[#151515]">High-Res Curated Editorial Gallery & RAW Archives</span>
                </div>
              </div>

              <button
                onClick={() => onOpenBooking('Photography')}
                aria-label="Book professional photography services with DM Creation"
                className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] font-semibold text-[#151515] group hover:text-[#B69A6A] transition-colors"
              >
                <span>EXPLORE PHOTOGRAPHY</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>
            </div>
          </div>
        </article>

        {/* 02 / VIDEOGRAPHY — Cinematic Widescreen Film Still with Play Button */}
        <article
          className="mb-24 sm:mb-36"
          itemScope
          itemProp="itemListElement"
          itemType="https://schema.org/Service"
        >
          <meta itemProp="serviceType" content="Cinematic Videography & Film Production Dubai" />
          <div className="bg-[#151515] text-[#F6F4EF] p-6 sm:p-10 lg:p-12 border border-[#262626] shadow-cinematic">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-8 pb-6 border-b border-white/10">
              <div>
                <div className="flex items-center gap-2 font-mono text-xs text-[#B69A6A] uppercase tracking-widest mb-2">
                  <Video className="w-3.5 h-3.5" aria-hidden="true" />
                  <span itemProp="name">02 / VIDEOGRAPHY</span>
                </div>
                <h3 className="text-3xl sm:text-5xl font-bold uppercase tracking-tight text-[#F6F4EF]">
                  STORIES DESERVE{' '}
                  <span className="font-serif italic font-normal text-[#B69A6A]">movement.</span>
                </h3>
              </div>
              <p className="mt-4 lg:mt-0 text-sm text-white/70 max-w-sm font-light" itemProp="description">
                Cinematic video production and documentary films in Dubai. Captured with 4K cinema primes, anamorphic lenses, and color-graded with rich analog film emulation.
              </p>
            </div>

            {/* Cinematic Wide Frame (Aspect 2.39:1) */}
            <div
              className="relative aspect-[21/9] sm:aspect-[2.39/1] overflow-hidden bg-black group cursor-pointer border border-white/10"
              onClick={() => onOpenVideo('https://youtu.be/4J1SNIb0Qyo?si=MHkestrUdDmVcpf6')}
              onMouseEnter={() => setCursor('play', 'PLAY ▶')}
              onMouseLeave={resetCursor}
              role="button"
              aria-label="Play DM Creation Cinematic Videography Film"
            >
              <img
                src="/images/service-video.jpg"
                alt="DM Creation Cinematic Videography and Motion Picture Production Dubai"
                title="DM Creation Cinematic Film Production"
                className="w-full h-full object-cover img-hover-scale opacity-90 group-hover:opacity-100"
                loading="lazy"
                width="1200"
                height="500"
                itemProp="image"
              />

              {/* Film Still Letterbox & Markers */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 pointer-events-none" aria-hidden="true" />

              {/* Center Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/10 backdrop-blur-md border border-white/30 flex items-center justify-center text-white group-hover:bg-[#B69A6A] group-hover:border-[#B69A6A] group-hover:text-[#151515] transition-all duration-300 shadow-cinematic"
                >
                  <Play className="w-6 h-6 sm:w-7 sm:h-7 fill-current ml-1" />
                </motion.div>
              </div>

              {/* Bottom Cinema Specs */}
              <div className="absolute bottom-3 sm:bottom-4 inset-x-4 sm:inset-x-6 flex items-center justify-between text-[11px] font-mono text-white/80">
                <span>CINEMA SCOPE 2.39:1 // 4K 24FPS</span>
                <span className="text-[#B69A6A]">[CLICK TO PLAY FILM]</span>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
              <span className="text-xs font-mono text-white/50 uppercase tracking-widest">
                DIRECTED BY DM CREATION • UAE & WORLDWIDE
              </span>
              <button
                onClick={() => onOpenVideo('https://youtu.be/4J1SNIb0Qyo?si=MHkestrUdDmVcpf6')}
                aria-label="View DM Creation videography film"
                className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] font-semibold text-[#F6F4EF] hover:text-[#B69A6A] transition-colors"
              >
                <span>VIEW FILM</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </article>

        {/* 03 / LIVE STREAMING — Broadcast Control UI Aesthetic */}
        <article
          className="mb-24 sm:mb-36"
          itemScope
          itemProp="itemListElement"
          itemType="https://schema.org/Service"
        >
          <meta itemProp="serviceType" content="4K Multi-Camera Live Streaming Broadcast Dubai" />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            {/* Typography (5 cols) */}
            <div className="lg:col-span-5">
              <div className="flex items-center gap-2 font-mono text-xs text-[#B69A6A] uppercase tracking-widest mb-3">
                <Radio className="w-3.5 h-3.5 animate-pulse text-red-500" aria-hidden="true" />
                <span itemProp="name">03 / LIVE STREAMING</span>
              </div>
              <h3 className="text-3xl sm:text-4xl font-bold uppercase tracking-tight text-[#151515] leading-tight mb-4">
                YOUR MOMENT.
                <br />
                EVERYWHERE.{' '}
                <span className="font-serif italic font-normal text-[#B69A6A]">as it happens.</span>
              </h3>
              <p className="text-sm sm:text-base text-[#666666] font-light leading-relaxed mb-6" itemProp="description">
                Enterprise multi-camera live streaming and broadcast production across the UAE. Connecting your global summit, hybrid gala, or product launch to worldwide audiences with redundant 5G bonding and ultra-low latency.
              </p>

              {/* Broadcast Specs Grid */}
              <div className="grid grid-cols-2 gap-3 mb-8 text-[11px] font-mono bg-white p-4 border border-[#DEDCD6]">
                <div>
                  <span className="text-[#9E9C96] block mb-0.5">LATENCY</span>
                  <span className="font-bold text-[#151515]">&lt; 0.5s ULTRA-LOW</span>
                </div>
                <div>
                  <span className="text-[#9E9C96] block mb-0.5">CAMERA UNITS</span>
                  <span className="font-bold text-[#151515]">1 - 12 MULTI-CAM 4K</span>
                </div>
                <div className="border-t border-[#DEDCD6] pt-2">
                  <span className="text-[#9E9C96] block mb-0.5">REDUNDANCY</span>
                  <span className="font-bold text-[#151515]">DUAL BONDED 5G/SAT</span>
                </div>
                <div className="border-t border-[#DEDCD6] pt-2">
                  <span className="text-[#9E9C96] block mb-0.5">PLATFORMS</span>
                  <span className="font-bold text-[#151515]">YOUTUBE, ZOOM, CUSTOM CDN</span>
                </div>
              </div>

              <button
                onClick={() => onOpenBooking('Live Streaming')}
                aria-label="Request 4K live streaming broadcast specifications"
                className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] font-semibold text-[#151515] hover:text-[#B69A6A] transition-colors group"
              >
                <span>REQUEST BROADCAST SPECS</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>
            </div>

            {/* Broadcast Multi-Cam UI Frame (7 cols) */}
            <div className="lg:col-span-7">
              <div className="relative bg-[#111111] p-3 sm:p-4 border border-white/10 shadow-cinematic text-white">
                {/* Broadcast Monitor Bar */}
                <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/10 text-[10px] font-mono text-white/70">
                  <div className="flex items-center gap-2">
                    <span className="flex items-center gap-1 text-red-500 font-bold">
                      <span className="w-2 h-2 rounded-full bg-red-500 animate-rec-pulse" />
                      LIVE
                    </span>
                    <span className="text-white/40">|</span>
                    <span>PROG: MASTER FEED 4K</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-[#B69A6A]">00:42:18:14</span>
                    <span className="bg-red-900/60 text-red-400 px-1.5 py-0.5 rounded text-[9px]">REC</span>
                  </div>
                </div>

                <div className="relative aspect-[16/10] overflow-hidden bg-black group">
                  <img
                    src="/images/service-live.jpg"
                    alt="DM Creation Live Streaming Multi-Camera Broadcast Production Dubai"
                    title="DM Creation Live Streaming Production"
                    className="w-full h-full object-cover img-hover-scale opacity-90"
                    loading="lazy"
                    width="700"
                    height="437"
                    itemProp="image"
                  />

                  {/* Corner crop indicators */}
                  <div className="absolute top-3 left-3 w-3 h-3 border-t border-l border-white/80" aria-hidden="true" />
                  <div className="absolute top-3 right-3 w-3 h-3 border-t border-r border-white/80" aria-hidden="true" />
                  <div className="absolute bottom-3 left-3 w-3 h-3 border-b border-l border-white/80" aria-hidden="true" />
                  <div className="absolute bottom-3 right-3 w-3 h-3 border-b border-r border-white/80" aria-hidden="true" />

                  {/* Mini Camera Feeds in Picture-in-Picture */}
                  <div className="absolute bottom-3 right-3 flex gap-1.5 bg-black/80 p-1.5 border border-white/20">
                    <div className="w-16 h-10 bg-zinc-900 border border-green-500 relative flex items-center justify-center text-[8px] font-mono">
                      <span>CAM 01</span>
                    </div>
                    <div className="w-16 h-10 bg-zinc-900 border border-white/20 relative flex items-center justify-center text-[8px] font-mono text-white/50">
                      <span>CAM 02</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* 04 / 360° BOOTH — Dynamic Playful Circular Spinner Experience */}
        <article
          itemScope
          itemProp="itemListElement"
          itemType="https://schema.org/Service"
        >
          <meta itemProp="serviceType" content="Interactive 360 Photo Booth Rental Dubai" />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            {/* Visual with Circular Spinner Graphics (7 cols) */}
            <div className="lg:col-span-7 order-2 lg:order-1">
              <div
                className="relative bg-white p-4 sm:p-6 border border-[#DEDCD6] shadow-editorial group overflow-hidden"
                onMouseEnter={() => setCursor('spin', 'SPIN ↻')}
                onMouseLeave={resetCursor}
              >
                {/* Rotating 360 Badge Overlay */}
                <div className="absolute top-6 right-6 z-20">
                  <div className="relative w-20 h-20 flex items-center justify-center">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
                      className="absolute inset-0 rounded-full border-2 border-dashed border-[#B69A6A]"
                    />
                    <div className="w-14 h-14 rounded-full bg-[#151515] text-[#F6F4EF] flex flex-col items-center justify-center font-mono text-[9px] font-bold">
                      <RotateCw className="w-3.5 h-3.5 mb-0.5 text-[#B69A6A]" />
                      <span>360°</span>
                    </div>
                  </div>
                </div>

                <div className="relative aspect-[4/3] sm:aspect-[16/10] overflow-hidden bg-[#111111]">
                  <img
                    src="/images/service-360.jpg"
                    alt="DM Creation 360 degree video booth rental for corporate events and weddings in Dubai"
                    title="DM Creation 360 Video Booth Experience"
                    className="w-full h-full object-cover img-hover-scale"
                    loading="lazy"
                    width="700"
                    height="437"
                    itemProp="image"
                  />
                  {/* Subtle Circular Ring Highlight */}
                  <div className="absolute inset-0 border-[1.5px] border-white/20 rounded-full m-8 pointer-events-none" aria-hidden="true" />

                  <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-sm text-white px-3 py-1 font-mono text-[10px] uppercase tracking-widest flex items-center gap-2">
                    <span>INSTANT SLOW-MO • GUEST SHARING AIRDROP</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Typography (5 cols) */}
            <div className="lg:col-span-5 order-1 lg:order-2">
              <div className="flex items-center gap-2 font-mono text-xs text-[#B69A6A] uppercase tracking-widest mb-3">
                <RotateCw className="w-3.5 h-3.5 text-[#B69A6A]" aria-hidden="true" />
                <span itemProp="name">04 / 360° BOOTH</span>
              </div>
              <h3 className="text-3xl sm:text-4xl font-bold uppercase tracking-tight text-[#151515] leading-tight mb-4">
                STEP IN. SPIN.{' '}
                <span className="font-serif italic font-normal text-[#B69A6A]">stand out.</span>
              </h3>
              <p className="text-sm sm:text-base text-[#666666] font-light leading-relaxed mb-6" itemProp="description">
                The premier interactive event activation in Dubai and the UAE. High-speed motorized 360 camera arm producing instant slow-motion cinematic video clips customized with client logos, audio tracks, and instant guest AirDrop sharing.
              </p>

              <div className="space-y-2 mb-8 text-xs font-mono text-[#666666]">
                <div className="flex items-center justify-between border-b border-[#DEDCD6] py-1.5">
                  <span>CAPACITY</span>
                  <span className="text-[#151515]">Up to 5 Guests Simultaneously</span>
                </div>
                <div className="flex items-center justify-between border-b border-[#DEDCD6] py-1.5">
                  <span>EXPORT</span>
                  <span className="text-[#151515]">Instant AirDrop, QR, WhatsApp Sharing</span>
                </div>
                <div className="border-b border-[#DEDCD6] py-1.5 flex items-center justify-between">
                  <span>BRANDING</span>
                  <span className="text-[#151515]">Custom Video Overlays & Audio Tracks</span>
                </div>
              </div>

              <button
                onClick={() => onOpenBooking('360° Booth')}
                aria-label="Book 360 photo booth rental with DM Creation"
                className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] font-semibold text-[#151515] hover:text-[#B69A6A] transition-colors group"
              >
                <span>EXPLORE 360° EXPERIENCES</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
