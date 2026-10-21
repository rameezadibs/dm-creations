import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowDown, Aperture, Eye } from 'lucide-react';

export default function Hero({ onOpenBooking, onScrollToWork }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const imageReveal = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1.1, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section
      aria-label="DM Creation Visual Production Studio Dubai"
      className="relative pt-28 sm:pt-36 pb-10 sm:pb-14 px-4 sm:px-6 lg:px-8 bg-[#F6F4EF] overflow-hidden border-b border-[#DEDCD6]/60"
    >
      {/* Background Subtle Viewfinder Grid Watermarks */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.035] flex items-center justify-center select-none" aria-hidden="true">
        <span className="font-serif italic text-[18vw] leading-none font-bold text-[#151515]">
          DM
        </span>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Top Studio Metadata Bar */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap items-center justify-between gap-4 border-b border-[#DEDCD6] pb-4 mb-8 sm:mb-12 text-xs font-mono text-[#666666]"
        >
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-[#151515]" aria-hidden="true" />
            <span className="font-semibold text-[#151515] tracking-widest uppercase">
              DM CREATION // VISUAL PRODUCTION STUDIO
            </span>
          </div>

          <div className="hidden md:flex items-center gap-6 tracking-widest uppercase text-[11px]" aria-hidden="true">
            <span>[F/1.4 CINEMA]</span>
            <span>[ISO 200]</span>
            <span>[4K / 8K RAW]</span>
            <span className="text-[#B69A6A]">EST. DUBAI</span>
          </div>

          <div className="text-[11px] font-mono tracking-widest uppercase text-[#151515]">
            DUBAI • ABU DHABI • UAE • WORLDWIDE
          </div>
        </motion.div>

        {/* Main Editorial Hero Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start"
        >
          {/* Left / Center: Oversized Typography + CTAs + Services list (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            {/* Primary SEO H1 Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-5xl sm:text-7xl xl:text-[5.5rem] font-extrabold uppercase tracking-tight text-[#151515] leading-[0.92] mb-6 sm:mb-8"
            >
              WE CAPTURE
              <br />
              WHAT WORDS
              <br />
              <span className="font-serif italic font-normal tracking-normal text-[#B69A6A] lowercase">
                can't.
              </span>
            </motion.h1>

            {/* Keyword-Rich Subheading for Search Engine Context */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-xl text-[#666666] font-light max-w-xl leading-relaxed mb-8 sm:mb-10"
            >
              <strong className="font-semibold text-[#151515]">DM Creation</strong> is a premier Dubai-based studio delivering{' '}
              <span className="text-[#151515] font-medium">editorial photography</span>,{' '}
              <span className="text-[#151515] font-medium">cinematic videography</span>,{' '}
              <span className="text-[#151515] font-medium">4K live streaming</span>, and{' '}
              <span className="text-[#151515] font-medium">interactive 360° photo booth experiences</span> crafted with cinema-grade precision for luxury events, private celebrations, and global brands.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-4 mb-12 sm:mb-16"
            >
              <button
                onClick={onScrollToWork}
                aria-label="View selected visual production portfolio"
                className="px-7 py-4 bg-[#151515] text-[#F6F4EF] hover:bg-[#B69A6A] hover:text-[#151515] transition-all duration-300 text-xs font-mono uppercase tracking-[0.2em] font-medium flex items-center gap-2 group shadow-editorial"
              >
                <span>VIEW OUR WORK</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>

              <button
                onClick={onOpenBooking}
                aria-label="Book a photography or videography shoot with DM Creation"
                className="px-7 py-4 bg-[#151515] text-[#F6F4EF] hover:bg-[#B69A6A] hover:text-[#151515] transition-all duration-300 text-xs font-mono uppercase tracking-[0.2em] font-medium flex items-center gap-2 group shadow-editorial"
              >
                <span>BOOK A SHOOT</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </motion.div>

            {/* SEO-Optimized Core Disciplines Pill Strip */}
            <motion.nav
              aria-label="DM Creation Core Disciplines"
              variants={itemVariants}
              className="border-t border-[#DEDCD6] pt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-[11px] font-mono tracking-wider text-[#666666] uppercase"
            >
              <span className="text-[#151515] font-semibold">CORE DISCIPLINES:</span>
              <a href="#services-section" className="hover:text-[#151515] transition-colors" title="Editorial and Event Photography Dubai">01. PHOTOGRAPHY</a>
              <span aria-hidden="true">/</span>
              <a href="#services-section" className="hover:text-[#151515] transition-colors" title="Cinematic Videography and Commercial Film Production">02. VIDEOGRAPHY</a>
              <span aria-hidden="true">/</span>
              <a href="#services-section" className="hover:text-[#151515] transition-colors" title="Multi-Camera 4K Live Streaming Broadcast">03. LIVE STREAMING</a>
              <span aria-hidden="true">/</span>
              <a href="#services-section" className="hover:text-[#151515] transition-colors" title="Interactive 360 Video Booth Rental Dubai">04. 360° BOOTH</a>
            </motion.nav>
          </div>

          {/* Right: Asymmetrical 3-Image Composition with hero.PNG in Center (5 cols) */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0">
            {/* Composition Wrapper */}
            <div className="relative w-full max-w-lg mx-auto lg:max-w-none">
              {/* Media Element 1 (Center Dominant Frame): hero.PNG */}
              <motion.div
                variants={imageReveal}
                className="relative z-10 w-4/5 sm:w-3/4 ml-auto overflow-hidden shadow-editorial bg-white p-2 border border-[#DEDCD6]"
              >
                <div className="relative aspect-[3/4] overflow-hidden group bg-[#151515]">
                  <img
                    src="/home/hero.PNG"
                    alt="DM Creation - Luxury Wedding and Editorial Photography Dubai"
                    title="DM Creation Editorial Event Photography"
                    className="w-full h-full object-cover img-hover-scale"
                    loading="eager"
                    fetchPriority="high"
                    width="600"
                    height="800"
                  />
                  {/* Subtle Viewfinder Framing Marks */}
                  <div className="absolute top-3 left-3 w-3 h-3 border-t border-l border-white/80 pointer-events-none" aria-hidden="true" />
                  <div className="absolute top-3 right-3 w-3 h-3 border-t border-r border-white/80 pointer-events-none" aria-hidden="true" />
                  <div className="absolute bottom-3 left-3 w-3 h-3 border-b border-l border-white/80 pointer-events-none" aria-hidden="true" />
                  <div className="absolute bottom-3 right-3 w-3 h-3 border-b border-r border-white/80 pointer-events-none" aria-hidden="true" />

                  {/* Corner Label */}
                  <div className="absolute bottom-3 left-7 right-7 flex items-center justify-between text-[10px] font-mono text-white/90 bg-black/50 backdrop-blur-sm px-2.5 py-1">
                    <span>DM CREATION</span>
                    <span>EDITORIAL 35MM</span>
                  </div>
                </div>
              </motion.div>

              {/* Media Element 2: Small Landscape Cinematic Film Frame (Overlapping Bottom Left) */}
              <motion.div
                variants={imageReveal}
                className="absolute -bottom-8 -left-4 sm:-left-8 z-20 w-3/5 sm:w-7/12 shadow-cinematic bg-[#111111] p-1.5 border border-white/20"
              >
                <div className="relative aspect-[16/10] overflow-hidden group">
                  <img
                    src="/images/hero-cinematic.jpg"
                    alt="Cinematic videography and motion film production in Dubai by DM Creation"
                    title="DM Creation Cinematic Videography"
                    className="w-full h-full object-cover img-hover-scale brightness-95"
                    loading="eager"
                    width="480"
                    height="300"
                  />
                  <div className="absolute top-2 left-2 flex items-center gap-1.5 bg-black/70 px-2 py-0.5 rounded text-[9px] font-mono text-[#F6F4EF]" aria-hidden="true">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-rec-pulse" />
                    <span>REC • 24FPS</span>
                  </div>
                </div>
              </motion.div>

              {/* Media Element 3: Detail Landscape/Square Optics Frame (Tucked Upper Left) */}
              <motion.div
                variants={imageReveal}
                className="hidden sm:block absolute -top-8 -left-6 z-0 w-2/5 shadow-subtle bg-white p-1.5 border border-[#DEDCD6]"
              >
                <div className="relative aspect-square overflow-hidden group">
                  <img
                    src="/images/hero-detail.jpg"
                    alt="Cinema optics and prime lenses for high-end production"
                    title="Professional Camera Optics - DM Creation"
                    className="w-full h-full object-cover img-hover-scale grayscale group-hover:grayscale-0 transition-all duration-500"
                    loading="eager"
                    width="300"
                    height="300"
                  />
                  <div className="absolute bottom-1 right-2 text-[8px] font-mono text-white bg-black/60 px-1.5 py-0.5" aria-hidden="true">
                    OPTICS 50MM
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-8 sm:mt-12 pt-4 border-t border-[#DEDCD6]/60 flex items-center justify-between text-xs font-mono text-[#666666]"
        >
          <div className="flex items-center gap-2 tracking-widest uppercase">
            <span>SCROLL TO EXPLORE</span>
            <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
          </div>

          <div className="text-[11px] tracking-widest uppercase text-[#9E9C96]">
            FRAME 01 // 11
          </div>
        </motion.div>
      </div>
    </section>
  );
}
