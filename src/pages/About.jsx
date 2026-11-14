import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import {
  ArrowUpRight,
  ArrowDown,
  Crosshair,
  MoveRight,
} from 'lucide-react';
import { useCursor } from '../context/CursorContext';

export default function About({ onOpenBooking }) {
  const { setCursor, resetCursor } = useCursor();

  // Dynamic SEO Page Title & Meta Description Boost
  useEffect(() => {
    document.title = "About DM Creation | Premier Photography, Videography & Visual Production Studio Dubai";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        "Discover DM Creation: Dubai's premier visual production studio specializing in high-fashion editorial photography, cinematic videography, 4K multi-cam live streaming, and interactive 360 photo booth rentals across UAE and worldwide."
      );
    }
  }, []);

  // Scroll tracking for parallax effects
  const containerRef = useRef(null);
  const fullBleedRef = useRef(null);
  const { scrollYProgress: fullBleedScroll } = useScroll({
    target: fullBleedRef,
    offset: ['start end', 'end start'],
  });
  const fullBleedY = useTransform(fullBleedScroll, [0, 1], ['-8%', '8%']);

  // Section 04: The Way We See (Crop inspection state)
  const [activeCropIndex, setActiveCropIndex] = useState(0);

  const observationCrops = [
    {
      id: 'glance',
      title: 'THE GLANCE',
      label: 'FRAME CROP 01',
      tagline: 'An unspoken connection across the table',
      coords: 'X: 18% • Y: 42%',
      focalPosition: 'object-[20%_45%]',
      zoomScale: 'scale-[1.8] translate-x-[25%] -translate-y-[8%]',
      note: 'The brief eye contact between two guests that says everything without a single word.',
    },
    {
      id: 'detail',
      title: 'THE DETAIL',
      label: 'FRAME CROP 02',
      tagline: 'Clasped hands & candlelight reflections',
      coords: 'X: 68% • Y: 82%',
      focalPosition: 'object-[65%_85%]',
      zoomScale: 'scale-[2.4] -translate-x-[22%] -translate-y-[32%]',
      note: 'Rings catching the warm glow of tea lights, fingers interlaced on textured linen.',
    },
    {
      id: 'energy',
      title: 'THE ENERGY',
      label: 'FRAME CROP 03',
      tagline: 'Unfiltered, radiant laughter',
      coords: 'X: 52% • Y: 38%',
      focalPosition: 'object-[52%_40%]',
      zoomScale: 'scale-[2.1] -translate-x-[4%] -translate-y-[5%]',
      note: 'The peak of genuine laughter—not a posed head-tilt, but pure spontaneous emotion.',
    },
    {
      id: 'inbetween',
      title: 'THE IN-BETWEEN',
      label: 'FRAME CROP 04',
      tagline: 'The champagne flute & ambient architecture',
      coords: 'X: 84% • Y: 58%',
      focalPosition: 'object-[82%_60%]',
      zoomScale: 'scale-[2.2] -translate-x-[35%] -translate-y-[15%]',
      note: 'The amber room tone, Gothic stone arches, and bubbles rising quietly in crystal glass.',
    },
  ];

  // Section 08: What We Bring
  const whatWeBring = [
    {
      num: '01',
      title: 'ATTENTION',
      tag: 'OBSERVATION OVER SCRIPT',
      desc: 'We notice what matters. The quiet interactions, the glance across the room, the second before the speech begins.',
    },
    {
      num: '02',
      title: 'INSTINCT',
      tag: 'TIMING IS UNREPEATABLE',
      desc: 'Because the best moments don’t wait for second takes. We anticipate movement before the shutter even clicks.',
    },
    {
      num: '03',
      title: 'CRAFT',
      tag: 'RIGOR & INTENTIONALITY',
      desc: 'Every frame deserves intention. High-speed cine optics, controlled natural light, and meticulous post-grading.',
    },
    {
      num: '04',
      title: 'ENERGY',
      tag: 'ATMOSPHERE & RAPPORT',
      desc: 'Good work happens when people feel comfortable. We blend in effortlessly so the celebration remains genuine.',
    },
  ];

  return (
    <div ref={containerRef} className="bg-[#F6F4EF] text-[#151515] overflow-x-hidden selection:bg-[#151515] selection:text-[#F6F4EF]">
      {/* Schema.org Structured Data (JSON-LD) for Search Engines & Google Rich Results */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'AboutPage',
            '@id': 'https://dmcreation.ae/about#webpage',
            url: 'https://dmcreation.ae/about',
            name: 'About DM Creation | Premier Photography, Videography & Visual Production Studio Dubai',
            description: "Learn about DM Creation: Dubai's premier visual production studio specializing in high-fashion editorial photography, cinematic videography, 4K multi-camera live streaming, and interactive 360 photo booth rentals across UAE and worldwide.",
            mainEntity: {
              '@type': ['ProfessionalService', 'Organization'],
              '@id': 'https://dmcreation.ae/#organization',
              name: 'DM Creation',
              alternateName: 'DM Creation Visual Production Studio Dubai',
              url: 'https://dmcreation.ae/',
              logo: 'https://dmcreation.ae/dm-logo-black.png',
              image: 'https://dmcreation.ae/about/hero.png',
              priceRange: '$$$$',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Dubai',
                addressRegion: 'Dubai',
                addressCountry: 'AE',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: '25.2048',
                longitude: '55.2708',
              },
              foundingDate: '2014',
              foundingLocation: {
                '@type': 'Place',
                name: 'Dubai, United Arab Emirates',
              },
              slogan: 'Visual Storytellers & Cinematography — The moments people remember rarely happen twice.',
              knowsAbout: [
                'Luxury Event Photography Dubai',
                'Cinematic Videography UAE',
                'Commercial Video Production Dubai',
                '4K Multi-Camera Live Streaming Broadcast',
                'Interactive 360 Photo Booth Rental Dubai',
                'Fashion Editorial Photography',
                'Corporate Summit & Gala Coverage',
                'Color Grading & Digital Cinematography',
              ],
              hasPart: [
                {
                  '@type': 'WebPageElement',
                  '@id': 'https://dmcreation.ae/about#story-section',
                  name: 'Our Story // Frame 02 — Studio Heritage & Evolution',
                  description: "The journey of DM Creation from analog stills to premier Dubai 4K cinema production, live broadcast streaming, and 360 photo booth experiences.",
                },
                {
                  '@type': 'WebPageElement',
                  '@id': 'https://dmcreation.ae/about#cta-section',
                  name: 'Book DM Creation — Production Inquiries & Visual Commissions',
                  description: 'Reserve premier Dubai event photography, 4K commercial cinematography, live streaming broadcasts, and interactive 360 photo booth rentals across UAE and worldwide.',
                  potentialAction: {
                    '@type': 'ReserveAction',
                    target: 'https://dmcreation.ae/about#cta-section',
                    result: {
                      '@type': 'Reservation',
                      name: 'DM Creation Visual Production Booking',
                    },
                  },
                },
              ],
              areaServed: [
                { '@type': 'City', name: 'Dubai' },
                { '@type': 'City', name: 'Abu Dhabi' },
                { '@type': 'Country', name: 'United Arab Emirates' },
                { '@type': 'Place', name: 'Worldwide' },
              ],
              hasOfferCatalog: {
                '@type': 'OfferCatalog',
                name: 'Visual Production Services',
                itemListElement: [
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Editorial & Event Photography Dubai',
                      description: 'Luxury high-fashion portraiture, corporate summit coverage, commercial campaigns, and candid wedding photography.',
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Cinematic Videography & Film Production',
                      description: '4K ProRes cinema cameras, brand commercials, showreels, and documentary-style event films.',
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: '4K Live Streaming & Multi-Camera Broadcast',
                      description: 'Low-latency broadcast flypacks for global summits, luxury hybrid galas, and live stage events.',
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Interactive 360° Photo Booth Experience',
                      description: 'Branded 360 video spinner booth with dynamic slow-motion video, studio LED lighting, and instant AirDrop sharing.',
                    },
                  },
                ],
              },
            },
            breadcrumb: {
              '@type': 'BreadcrumbList',
              itemListElement: [
                {
                  '@type': 'ListItem',
                  position: 1,
                  name: 'Home',
                  item: 'https://dmcreation.ae/',
                },
                {
                  '@type': 'ListItem',
                  position: 2,
                  name: 'About Us',
                  item: 'https://dmcreation.ae/about',
                },
              ],
            },
          }),
        }}
      />

      {/* =========================================================================
          01 — ABOUT HERO (Highly SEO-Structured Semantic Spread)
          ========================================================================= */}
      <section
        id="about-hero"
        itemScope
        itemType="https://schema.org/AboutPage"
        aria-labelledby="about-hero-heading"
        className="relative pt-32 sm:pt-40 pb-2 sm:pb-2.5 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-[#DEDCD6]"
      >
        {/* Top Semantic Breadcrumb & Location Bar */}
        <div className="flex flex-wrap items-center justify-between text-[11px] font-mono uppercase tracking-[0.22em] text-[#666666] pb-6 border-b border-[#DEDCD6]/80 mb-10 sm:mb-14">
          <nav aria-label="Breadcrumb" className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#B69A6A]" aria-hidden="true" />
            <Link to="/" className="hover:text-[#151515] transition-colors">HOME</Link>
            <span className="text-[#DEDCD6]">/</span>
            <span className="text-[#151515] font-semibold" aria-current="page">ABOUT DM CREATION</span>
            <span className="text-[#DEDCD6]">/</span>
            <span>DUBAI // UAE</span>
          </nav>
          <div className="hidden md:flex items-center gap-6">
            <span>[ 25°12'09"N • 55°16'28"E ]</span>
            <span>PRODUCTION DOSSIER</span>
          </div>
        </div>

        {/* Hero Asymmetric Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start relative">
          {/* Left Column: Heading, SEO Description & Topical Chips */}
          <div className="lg:col-span-6 z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-white border border-[#DEDCD6] text-[10px] font-mono tracking-widest uppercase text-[#B69A6A] mb-5">
                <span>ESTABLISHED DUBAI</span>
                <span>•</span>
                <span>VISUAL ARCHITECTS</span>
              </div>

              {/* Primary H1 with Semantic Keyword Extension for Search Engines */}
              <h1
                id="about-hero-heading"
                itemProp="headline"
                className="font-serif text-6xl sm:text-7xl lg:text-[6.5vw] font-normal uppercase tracking-tight leading-[0.92] text-[#151515] mb-6"
              >
                BEHIND
                <br />
                <span className="font-serif italic font-normal text-[#B69A6A] tracking-normal">
                  THE LENS.
                </span>
                <span className="sr-only">
                  {" "}— About DM Creation: Premier Dubai Photography, Videography & Live Streaming Production Studio
                </span>
              </h1>

              {/* Keyword-Rich Semantic Description */}
              <p
                itemProp="description"
                className="text-base sm:text-lg text-[#666666] font-light leading-relaxed max-w-xl mb-6"
              >
                We're the people behind the cameras, the edits, the live feeds and the moments you'll want to experience again. As Dubai's premier <strong className="font-semibold text-[#151515]">visual production studio</strong>, DM Creation crafts high-fashion editorial photography, cinematic films, 4K multi-camera live broadcasts, and interactive 360° photo booths across the UAE and worldwide.
              </p>

              {/* High-Intent Search Keyword & Service Entity Chips */}
              <div className="flex flex-wrap gap-2 mb-8" aria-label="Core Studio Disciplines">
                <span className="px-2.5 py-1 bg-white border border-[#DEDCD6] text-[10px] font-mono tracking-wider uppercase text-[#151515] font-semibold">
                  EDITORIAL PHOTOGRAPHY
                </span>
                <span className="px-2.5 py-1 bg-white border border-[#DEDCD6] text-[10px] font-mono tracking-wider uppercase text-[#151515] font-semibold">
                  CINEMATIC VIDEOGRAPHY
                </span>
                <span className="px-2.5 py-1 bg-white border border-[#DEDCD6] text-[10px] font-mono tracking-wider uppercase text-[#151515] font-semibold">
                  4K LIVE STREAMING
                </span>
                <span className="px-2.5 py-1 bg-white border border-[#DEDCD6] text-[10px] font-mono tracking-wider uppercase text-[#151515] font-semibold">
                  360° BOOTH EXPERIENCES
                </span>
              </div>

              {/* Working Table Meta Marks with Schema properties */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6 border-t border-[#DEDCD6] text-xs font-mono text-[#666666]">
                <div>
                  <span className="block text-[10px] uppercase text-[#9E9C96]">CORE SERVICES</span>
                  <span className="font-semibold text-[#151515]">PHOTO • FILM • LIVE • 360°</span>
                </div>
                <div>
                  <span className="block text-[10px] uppercase text-[#9E9C96]">SERVICE REGION</span>
                  <span className="font-semibold text-[#151515]">DUBAI // UAE // GLOBAL</span>
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <span className="block text-[10px] uppercase text-[#9E9C96]">STUDIO ETHOS</span>
                  <span className="font-semibold text-[#151515]">AUTHENTIC STORYTELLING</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Contact Sheet Spread (Overlapping Images with SEO Image Optimization) */}
          <div className="lg:col-span-6 relative mt-6 lg:mt-0">
            {/* Film Edge Tick Marks & Guides */}
            <div className="absolute -top-4 -left-4 w-6 h-6 border-t-2 border-l-2 border-[#151515]/30 pointer-events-none" aria-hidden="true" />
            <div className="absolute -bottom-4 -right-4 w-6 h-6 border-b-2 border-r-2 border-[#151515]/30 pointer-events-none" aria-hidden="true" />

            <div className="relative">
              {/* IMAGE 01 (CENTER / MAIN): DM Creation team with track cars and cinema cameras (/about/hero.png) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="relative bg-white p-3 sm:p-4 border border-[#DEDCD6] shadow-editorial z-10"
                onMouseEnter={() => setCursor('view', 'CREW')}
                onMouseLeave={resetCursor}
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-[#151515]">
                  <img
                    src="https://res.cloudinary.com/aubynz6r/image/upload/heroo"
                    alt="DM Creation production team and cinematographers on set at Dubai Autodrome track with cameras and broadcast rigs"
                    title="DM Creation Production Crew Dubai"
                    fetchPriority="high"
                    loading="eager"
                    itemProp="image"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                  {/* Subtle viewfinder crosshair in center */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40" aria-hidden="true">
                    <Crosshair className="w-8 h-8 text-white/80 stroke-[1]" />
                  </div>
                  {/* Live REC Indicator */}
                  <div className="absolute top-3 left-3 flex items-center gap-2 bg-[#111111]/80 backdrop-blur-sm px-2 py-1 text-[10px] font-mono text-white">
                    <span className="w-2 h-2 rounded-full bg-red-600 animate-rec-pulse" aria-hidden="true" />
                    <span>REC • CAM A // 4K PRORES</span>
                  </div>
                  <div className="absolute bottom-3 right-3 bg-[#111111]/80 backdrop-blur-sm px-2 py-1 text-[10px] font-mono text-white/80">
                    PRODUCTION CREW // DUBAI
                  </div>
                </div>

                <div className="mt-3 flex items-center justify-between text-[11px] font-mono text-[#666666]">
                  <span className="font-semibold text-[#151515]">FRAME 001 // THE PRODUCTION CREW</span>
                  <span>DUBAI AUTODROME BTS</span>
                </div>
              </motion.div>

              {/* IMAGE 02 (ON LEFT): Commercial automotive night production with red SUV (/about/hero1.jpg) */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="relative sm:absolute sm:-bottom-6 sm:-left-8 w-full sm:w-64 bg-white p-2.5 border border-[#DEDCD6] shadow-editorial mt-4 sm:mt-0 z-20"
                onMouseEnter={() => setCursor('view', 'RESULT')}
                onMouseLeave={resetCursor}
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-[#151515]">
                  <img
                    src="https://res.cloudinary.com/aubynz6r/image/upload/hero1"
                    alt="High-impact commercial automotive video production by DM Creation Dubai"
                    title="Automotive Film Production by DM Creation"
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute top-2 left-2 px-1.5 py-0.5 bg-black/70 text-[9px] font-mono text-white uppercase tracking-wider">
                    PROOF
                  </div>
                </div>
                <div className="pt-2 text-[10px] font-mono text-[#666666] flex justify-between">
                  <span>FINAL FRAME</span>
                  <span className="text-[#B69A6A]">COMMERCIAL MOTION</span>
                </div>
              </motion.div>

              {/* IMAGE 03: Small detail photograph (Camera optics - top right offset) */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.9, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="hidden sm:block absolute -top-8 -right-6 w-44 bg-white p-2 border border-[#DEDCD6] shadow-subtle z-20"
                onMouseEnter={() => setCursor('view', 'OPTICS')}
                onMouseLeave={resetCursor}
              >
                <div className="relative aspect-square overflow-hidden bg-[#151515]">
                  <img
                    src="/images/hero-detail.jpg"
                    alt="Calibrated camera optics and high-precision cinema prime lenses at DM Creation visual studio"
                    title="Cinema Optics by DM Creation"
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
                <div className="pt-1.5 text-[9px] font-mono text-[#666666] flex justify-between">
                  <span>OPTICS // DETAIL</span>
                  <span>T1.5 CINE</span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom Scroll Indicator with Tight Spacing to Eliminate Dead Space */}
        <div className="mt-2 pt-2 pb-0.5 border-t border-[#DEDCD6]/60 flex items-center justify-between text-xs font-mono text-[#666666]">
          <a
            href="#story-section"
            className="inline-flex items-center gap-2 group hover:text-[#151515] transition-colors"
          >
            <span className="tracking-[0.2em] uppercase font-medium">SCROLL TO MEET DM</span>
            <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-1 transition-transform" />
          </a>
          <span className="hidden sm:inline tracking-widest text-[10px] text-[#9E9C96]">
            DUBAI • UAE • AVAILABLE FOR WORLDWIDE PRODUCTION
          </span>
        </div>
      </section>

      {/* =========================================================================
          02 — OUR STORY (Highly SEO-Structured Semantic Dark Cinematic Section)
          ========================================================================= */}
      <section
        id="story-section"
        itemScope
        itemType="https://schema.org/AboutPage"
        aria-labelledby="story-heading"
        className="dark-section bg-[#111111] text-[#F6F4EF] pt-3 sm:pt-4 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 border-b border-white/10 relative overflow-hidden"
      >
        {/* Background Cinematic Texture / Ambient Glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-[#B69A6A]/6 rounded-full blur-[140px] pointer-events-none"
          aria-hidden="true"
        />

        <div className="max-w-7xl mx-auto relative z-10">
          <article
            itemScope
            itemType="https://schema.org/Story"
            itemProp="mainEntity"
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start"
          >
            {/* Left Column: Heading, SEO Description & Topical Proof Grid */}
            <div className="lg:col-span-6 lg:sticky lg:top-24">
              {/* Studio Archive Breadcrumb Meta */}
              <div className="flex items-center gap-3 mb-2.5">
                <div className="w-5 h-[1px] bg-[#B69A6A]" aria-hidden="true" />
                <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#B69A6A] font-semibold">
                  OUR STORY / FRAME 02
                </span>
                <span className="hidden sm:inline text-white/30">•</span>
                <span className="hidden sm:inline text-[10px] font-mono text-white/50 tracking-wider">
                  STUDIO ARCHIVE // DUBAI, UAE
                </span>
              </div>

              {/* Semantic H2 with High-Volume Accessible Search Keyword Extension */}
              <h2
                id="story-heading"
                itemProp="headline"
                className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal uppercase tracking-tight text-[#F6F4EF] leading-[1.06] mb-5"
              >
                IT STARTED
                <br />
                WITH A CAMERA.
                <br />
                <span className="font-serif italic font-normal text-[#B69A6A] normal-case">
                  but it was never
                </span>
                <br />
                REALLY ABOUT
                <br />
                THE CAMERA.
                <span className="sr-only">
                  {" "}— DM Creation Dubai Story: Premier Luxury Event Photography, 4K Commercial Videography, Multi-Camera Live Streaming & 360 Photo Booth Production in UAE
                </span>
              </h2>

              {/* High-Impact SEO Narrative Structured with Semantic Topical Chapters */}
              <div itemProp="text" className="space-y-4 text-base sm:text-lg text-white/75 font-light leading-relaxed pr-0 lg:pr-6">
                <p>
                  DM Creation was founded in Dubai on an uncompromising conviction: <strong className="font-medium text-[#F6F4EF]">the moments people remember rarely happen twice</strong>. We stepped away from rigid poses and cookie-cutter scripts, creating an observational philosophy built to preserve the genuine visual legacy of luxury events across the UAE and worldwide.
                </p>

                {/* Sub-chapter 01: Stills & Intuitive Observation */}
                <div className="pt-2">
                  <h3 className="text-xs font-mono uppercase tracking-widest text-[#B69A6A] font-semibold mb-1 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#B69A6A]" aria-hidden="true" />
                    01 // EDITORIAL PHOTOGRAPHY & UNOBTRUSIVE EVENT COVERAGE
                  </h3>
                  <p className="text-sm sm:text-base text-white/70">
                    We honed our eye across high-fashion galas, luxury royal weddings at Palm Jumeirah and Madinat Jumeirah, and corporate keynote summits—documenting the milliseconds between poses where true emotion, power, and intimacy live.
                  </p>
                </div>

                {/* Editorial Quote Highlight */}
                <blockquote className="pl-4 border-l-2 border-[#B69A6A] text-[#F6F4EF] italic font-serif text-lg sm:text-xl py-0.5">
                  "The expressions between poses. The quiet breath before the keynote. The unscripted celebration that no director could ever stage."
                </blockquote>

                {/* Sub-chapter 02: Cinematic Film & Live Broadcasting */}
                <div className="pt-1">
                  <h3 className="text-xs font-mono uppercase tracking-widest text-[#B69A6A] font-semibold mb-1 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#B69A6A]" aria-hidden="true" />
                    02 // 4K CINEMA PRODUCTION & GLOBAL LIVE STREAMING
                  </h3>
                  <p className="text-sm sm:text-base text-white/70">
                    As production demands grew, still photography naturally expanded into 4K cinema film captured with ARRI, RED, and Sony FX cinema sensors. Today, our broadcast engineering flypacks power low-latency multi-camera live streams for world summits, international congresses, and hybrid luxury galas.
                  </p>
                </div>

                {/* Sub-chapter 03: Interactive 360 Booth Experiences */}
                <div className="pt-1">
                  <h3 className="text-xs font-mono uppercase tracking-widest text-[#B69A6A] font-semibold mb-1 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#B69A6A]" aria-hidden="true" />
                    03 // IMMERSIVE 360° VIDEO ACTIVATIONS & GUEST ENGAGEMENT
                  </h3>
                  <p className="text-sm sm:text-base text-white/70">
                    Completing our studio ecosystem, DM Creation delivers custom-branded 360 photo booth rentals featuring cinematic slow-motion optics, ring-light illumination, and instant AirDrop sharing that amplifies brand social reach across the GCC.
                  </p>
                </div>

                {/* Google Featured Snippet Matrix / Structured Production Dossier */}
                <div
                  itemScope
                  itemType="https://schema.org/ItemList"
                  aria-label="DM Creation Production Standards and Capabilities"
                  className="mt-6 pt-5 border-t border-white/10 bg-[#161616]/70 p-4 border border-white/10"
                >
                  <div className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#B69A6A] mb-3">
                    [ PRODUCTION METRICS & CAPABILITIES SUMMARY ]
                  </div>
                  <div className="grid grid-cols-2 gap-3 text-xs font-mono">
                    <div itemScope itemType="https://schema.org/ListItem" className="border-b border-white/10 pb-2">
                      <meta itemProp="position" content="1" />
                      <span className="block text-[10px] uppercase text-white/40" itemProp="name">STUDIO BASE</span>
                      <span className="text-[#F6F4EF] font-semibold" itemProp="description">DUBAI, UAE (DOWNTOWN // DIFC)</span>
                    </div>
                    <div itemScope itemType="https://schema.org/ListItem" className="border-b border-white/10 pb-2">
                      <meta itemProp="position" content="2" />
                      <span className="block text-[10px] uppercase text-white/40" itemProp="name">EXPERIENCE</span>
                      <span className="text-[#F6F4EF] font-semibold" itemProp="description">10+ YEARS // 500+ PRODUCTIONS</span>
                    </div>
                    <div itemScope itemType="https://schema.org/ListItem" className="border-b border-white/10 pb-2">
                      <meta itemProp="position" content="3" />
                      <span className="block text-[10px] uppercase text-white/40" itemProp="name">DISCIPLINES</span>
                      <span className="text-[#F6F4EF] font-semibold" itemProp="description">PHOTO • FILM • LIVE • 360°</span>
                    </div>
                    <div itemScope itemType="https://schema.org/ListItem" className="border-b border-white/10 pb-2">
                      <meta itemProp="position" content="4" />
                      <span className="block text-[10px] uppercase text-white/40" itemProp="name">GEAR ECOSYSTEM</span>
                      <span className="text-[#F6F4EF] font-semibold" itemProp="description">ARRI • RED • SONY FX • TERADEK</span>
                    </div>
                  </div>

                  {/* Contextual CTA for SEO Internal Linking & User Journey */}
                  <div className="mt-4 pt-3 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
                    <button
                      type="button"
                      onClick={onOpenBooking}
                      className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#B69A6A] hover:text-[#F6F4EF] transition-colors group cursor-pointer"
                    >
                      <span>START A PROJECT WITH DM</span>
                      <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </button>
                    <Link
                      to="/services"
                      className="text-[11px] font-mono uppercase tracking-wider text-white/50 hover:text-white transition-colors"
                    >
                      EXPLORE ALL SERVICES →
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Vertical Sequence of 3 Editorial Photographs with High-Ranking SEO Image Tags */}
            <div className="lg:col-span-6 space-y-7 mt-4 lg:mt-0">
              {/* Story Frame 01: The Origin (Vintage Camera / Archive) */}
              <motion.figure
                itemScope
                itemType="https://schema.org/ImageObject"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8 }}
                className="bg-[#171717] p-3 sm:p-4 border border-white/15 shadow-cinematic m-0"
                onMouseEnter={() => setCursor('view', 'ORIGIN')}
                onMouseLeave={resetCursor}
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-black">
                  <img
                    src="/images/statement-bts.jpg"
                    alt="Analog camera archives and vintage medium-format gear representing the founding storytelling roots of DM Creation photography studio Dubai"
                    title="DM Creation Studio Archive — Analog Camera Roots"
                    itemProp="contentUrl"
                    loading="lazy"
                    decoding="async"
                    width="800"
                    height="500"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-sm px-2.5 py-1 text-[10px] font-mono text-[#F6F4EF] border border-white/10">
                    ARCHIVE // ROLL 001
                  </div>
                  <div className="absolute bottom-3 right-3 bg-black/80 backdrop-blur-sm px-2 py-0.5 text-[9px] font-mono text-[#B69A6A]">
                    FOUNDATION
                  </div>
                </div>
                <figcaption className="pt-3 flex flex-col gap-1">
                  <div className="flex items-center justify-between text-xs font-mono text-white/70">
                    <span className="font-semibold text-[#F6F4EF]" itemProp="name">
                      ROLL 01 • THE ANALOG ROOTS & EYE FOR DETAIL
                    </span>
                    <span className="text-[#B69A6A] font-mono text-[11px]">FRAME 01</span>
                  </div>
                  <p className="text-[11px] text-white/50 font-mono leading-relaxed" itemProp="caption">
                    Before digital sensors and high-speed live streams, our foundation was built on patient observation, natural light mastery, and anticipation.
                  </p>
                </figcaption>
              </motion.figure>

              {/* Story Frame 02: The Transition to Cinema & Commercial Production */}
              <motion.figure
                itemScope
                itemType="https://schema.org/ImageObject"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8 }}
                className="bg-[#171717] p-3 sm:p-4 border border-white/15 shadow-cinematic m-0"
                onMouseEnter={() => setCursor('view', 'CINEMA')}
                onMouseLeave={resetCursor}
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-black">
                  <img
                    src="/images/service-video.jpg"
                    alt="Professional 4K digital cinema clapperboard and precision timecode slate during a high-end commercial video production in Dubai by DM Creation"
                    title="DM Creation 4K Cinema Production Slate Dubai"
                    itemProp="contentUrl"
                    loading="lazy"
                    decoding="async"
                    width="800"
                    height="500"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-sm px-2.5 py-1 text-[10px] font-mono text-[#F6F4EF] border border-white/10">
                    SLATE A01 // 4K CINEMA
                  </div>
                  <div className="absolute bottom-3 right-3 bg-red-600/90 text-white px-2 py-0.5 text-[10px] font-mono">
                    FPS 23.98 • PRORES RAW
                  </div>
                </div>
                <figcaption className="pt-3 flex flex-col gap-1">
                  <div className="flex items-center justify-between text-xs font-mono text-white/70">
                    <span className="font-semibold text-[#F6F4EF]" itemProp="name">
                      ROLL 02 • THE CINEMATIC EVOLUTION
                    </span>
                    <span className="text-[#B69A6A] font-mono text-[11px]">TIMECODE 16:21:34</span>
                  </div>
                  <p className="text-[11px] text-white/50 font-mono leading-relaxed" itemProp="caption">
                    Scaling into high-end brand commercials, luxury showreels, and full-length event documentaries using industry-leading cinema bodies and prime lenses.
                  </p>
                </figcaption>
              </motion.figure>

              {/* Story Frame 03: Multi-Camera Broadcast & Immersive 360 Experiences */}
              <motion.figure
                itemScope
                itemType="https://schema.org/ImageObject"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8 }}
                className="bg-[#171717] p-3 sm:p-4 border border-white/15 shadow-cinematic m-0"
                onMouseEnter={() => setCursor('view', 'BROADCAST')}
                onMouseLeave={resetCursor}
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-black">
                  <img
                    src="/images/work-1.jpg"
                    alt="Multi-camera 4K live broadcast engineering flypack and symphony stage coverage for luxury international summit in Dubai by DM Creation"
                    title="DM Creation Multi-Camera Live Streaming & Event Production Dubai"
                    itemProp="contentUrl"
                    loading="lazy"
                    decoding="async"
                    width="800"
                    height="500"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-sm px-2.5 py-1 text-[10px] font-mono text-[#F6F4EF] border border-white/10">
                    BROADCAST // LIVE STREAM & 360°
                  </div>
                  <div className="absolute bottom-3 right-3 bg-[#111111]/90 text-white/90 px-2 py-0.5 text-[10px] font-mono border border-white/10">
                    MULTI-CAM 4K
                  </div>
                </div>
                <figcaption className="pt-3 flex flex-col gap-1">
                  <div className="flex items-center justify-between text-xs font-mono text-white/70">
                    <span className="font-semibold text-[#F6F4EF]" itemProp="name">
                      ROLL 03 • MULTI-DISCIPLINARY PRODUCTION POWERHOUSE
                    </span>
                    <span className="text-[#B69A6A] font-mono text-[11px]">TODAY</span>
                  </div>
                  <p className="text-[11px] text-white/50 font-mono leading-relaxed" itemProp="caption">
                    Synchronizing live multi-camera broadcasts with interactive 360 photo booth rentals and editorial stills to capture events from every angle.
                  </p>
                </figcaption>
              </motion.figure>
            </div>
          </article>
        </div>
      </section>

      {/* =========================================================================
          04 — THE WAY WE SEE (Crop Observation Matrix: ONE Photo, Multiple Enlarged Crops)
          ========================================================================= */}
      <section className="pt-10 sm:pt-14 pb-5 sm:pb-7 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-[#DEDCD6]">
        {/* Section Header */}
        <div className="max-w-3xl mb-8 sm:mb-10">
          <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-[0.25em] text-[#B69A6A] mb-4">
            <span>// 04</span>
            <span>•</span>
            <span>THE WAY WE SEE</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-6xl font-normal uppercase tracking-tight text-[#151515] leading-[1.04] mb-6">
            WE NOTICE
            <br />
            THE THINGS
            <br />
            <span className="font-serif italic font-normal text-[#B69A6A] lowercase">
              others miss.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-[#666666] font-light leading-relaxed">
            A great frame isn’t always the obvious one. Sometimes it’s happening at the edge of the room, between two people, or for half a second before anyone notices. That’s where we look.
          </p>
        </div>

        {/* Observation Composition: Full Master Photograph + Interactive Crops */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {/* Main Full Master Photograph (Left 6 Cols) */}
          <div className="lg:col-span-6 flex flex-col">
            <div className="bg-white p-3 sm:p-5 border border-[#DEDCD6] shadow-editorial relative flex-1 flex flex-col justify-between">
              {/* Camera Viewfinder Corners */}
              <div className="corner-frame flex-1 flex flex-col">
                <div className="relative aspect-[16/10] overflow-hidden bg-[#151515] flex-1">
                  <img
                    src="/images/about-observation.jpg"
                    alt="Master event gathering photograph used for observation study"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />

                  {/* Visual Focal Target Box Overlay corresponding to active crop */}
                  <motion.div
                    key={activeCropIndex}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                    className={`absolute border-2 border-[#B69A6A] pointer-events-none ${
                      activeCropIndex === 0
                        ? 'top-[35%] left-[16%] w-[26%] h-[35%]'
                        : activeCropIndex === 1
                        ? 'top-[65%] left-[58%] w-[28%] h-[30%]'
                        : activeCropIndex === 2
                        ? 'top-[30%] left-[44%] w-[22%] h-[32%]'
                        : 'top-[45%] left-[72%] w-[22%] h-[30%]'
                    }`}
                  >
                    <span className="absolute -top-5 left-0 bg-[#B69A6A] text-[#151515] text-[9px] font-mono px-1.5 py-0.5 font-bold uppercase tracking-wider">
                      {observationCrops[activeCropIndex].title}
                    </span>
                    <div className="absolute -top-1 -left-1 w-2 h-2 bg-[#B69A6A]" />
                    <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-[#B69A6A]" />
                  </motion.div>

                  {/* Watermark Frame Index */}
                  <div className="absolute bottom-3 left-3 bg-[#111111]/80 backdrop-blur-sm px-2.5 py-1 text-[10px] font-mono text-white/90">
                    MASTER FRAME // 04 • LUXURY RECEPTION
                  </div>
                </div>
              </div>

              {/* Master Bar Info */}
              <div className="mt-3 flex flex-wrap items-center justify-between text-[11px] font-mono text-[#666666] pt-2.5 border-t border-[#DEDCD6]/60">
                <span className="text-[#151515] font-semibold">ONE UNSTAGED MOMENT</span>
                <span>FOUR CRITICAL OBSERVATIONS</span>
              </div>
            </div>
          </div>

          {/* Active Enlarged Crop & Selectors (Right 6 Cols) */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-4">
            {/* The Enlarged Crop Display */}
            <div className="bg-white p-4 sm:p-5 border border-[#DEDCD6] shadow-editorial flex-1 flex flex-col">
              <div className="flex items-center justify-between text-xs font-mono mb-2.5">
                <span className="text-[#B69A6A] font-semibold">{observationCrops[activeCropIndex].label}</span>
                <span className="text-[#666666]">{observationCrops[activeCropIndex].coords}</span>
              </div>

              {/* Crop Frame using high-res container crop */}
              <div className="relative aspect-[16/10] overflow-hidden bg-[#111111] border border-[#DEDCD6]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeCropIndex}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="w-full h-full relative overflow-hidden"
                  >
                    <img
                      src="/images/about-observation.jpg"
                      alt={observationCrops[activeCropIndex].title}
                      className={`w-full h-full object-cover ${observationCrops[activeCropIndex].focalPosition} transition-all duration-700`}
                    />
                    <div className="absolute inset-0 border border-white/10 pointer-events-none" />
                    <div className="absolute top-2 right-2 bg-black/70 px-2 py-0.5 text-[9px] font-mono text-[#B69A6A]">
                      ENLARGED CROP
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="mt-3.5">
                <h4 className="text-xl font-bold uppercase tracking-tight text-[#151515]">
                  {observationCrops[activeCropIndex].title}
                </h4>
                <p className="text-xs font-mono text-[#B69A6A] uppercase tracking-wider mt-0.5 mb-1.5">
                  {observationCrops[activeCropIndex].tagline}
                </p>
                <p className="text-sm text-[#666666] font-light leading-relaxed">
                  {observationCrops[activeCropIndex].note}
                </p>
              </div>
            </div>

            {/* Clickable Selectors for the 4 Crops */}
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 gap-2.5">
              {observationCrops.map((crop, idx) => {
                const isActive = activeCropIndex === idx;
                return (
                  <button
                    key={crop.id}
                    onClick={() => setActiveCropIndex(idx)}
                    className={`p-3 text-left border transition-all duration-300 font-mono text-xs ${
                      isActive
                        ? 'bg-[#151515] text-[#F6F4EF] border-[#151515] shadow-sm'
                        : 'bg-white text-[#666666] border-[#DEDCD6] hover:border-[#151515] hover:text-[#151515]'
                    }`}
                  >
                    <div className="flex items-center justify-between text-[10px] mb-1">
                      <span className={isActive ? 'text-[#B69A6A]' : 'text-[#9E9C96]'}>
                        0{idx + 1}
                      </span>
                      {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#B69A6A]" />}
                    </div>
                    <div className="font-bold tracking-wider">{crop.title}</div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>


      {/* =========================================================================
          08 — WHAT WE BRING (Cinematic Dark Section Matching VisualStatement)
          ========================================================================= */}
      <section className="dark-section bg-[#111111] text-[#F6F4EF] pt-7 sm:pt-9 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8 border-b border-white/10 relative overflow-hidden">
        {/* Background Cinematic Texture / Ambient Glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#B69A6A]/5 rounded-full blur-[140px] pointer-events-none"
          aria-hidden="true"
        />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Section Header */}
          <div className="max-w-3xl mb-10 sm:mb-14">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-[1px] bg-[#B69A6A]" aria-hidden="true" />
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#B69A6A] font-semibold">
                WHAT WE BRING TO THE FRAME
              </span>
            </div>
            <h2 className="font-serif text-4xl sm:text-6xl font-normal uppercase tracking-tight text-[#F6F4EF] leading-[1.04] mb-6">
              MORE THAN
              <br />
              <span className="font-serif italic font-normal text-[#B69A6A] lowercase">
                a camera.
              </span>
            </h2>
            <p className="text-base sm:text-lg text-white/70 font-light leading-relaxed">
              The gear is merely the instrument. The value lies in discernment, reaction speed, and human connection.
            </p>
          </div>

          {/* Editorial Pillars Grid (No Images) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {whatWeBring.map((item) => (
              <div
                key={item.num}
                className="bg-[#171717] p-6 sm:p-8 border border-white/10 hover:border-[#B69A6A]/50 transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/10">
                  <span className="text-xs font-mono text-[#B69A6A] font-semibold tracking-widest">
                    {item.num} // PILLAR
                  </span>
                  <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest">
                    {item.tag}
                  </span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl font-normal uppercase tracking-tight text-[#F6F4EF] group-hover:text-[#B69A6A] transition-colors duration-300 mb-3">
                  {item.title}
                </h3>

                <p className="text-sm sm:text-base text-white/70 font-light leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* =========================================================================
          10 — ONE FRAME / FULL-BLEED MOMENT (Photographic Exhibition Wall Pause)
          ========================================================================= */}
      <section
        ref={fullBleedRef}
        className="relative h-[70vh] sm:h-[85vh] min-h-[500px] w-full overflow-hidden bg-[#111111] border-y border-[#DEDCD6]"
      >
        {/* Parallax Background Image */}
        <motion.div
          style={{ y: fullBleedY }}
          className="absolute inset-0 w-full h-[120%] -top-[10%]"
        >
          <img
            src="https://res.cloudinary.com/aubynz6r/image/upload/frame"
            alt="One decisive photographic moment — DM Creation full production team and commercial automotive shoot"
            className="w-full h-full object-cover opacity-85"
            loading="lazy"
          />
        </motion.div>

        {/* Subtle Atmospheric Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/60 pointer-events-none" />

        {/* Minimal Centered / Editorial Quote Overlay */}
        <div className="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-between py-12 sm:py-16 text-[#F6F4EF]">
          <div className="flex items-center justify-between text-[11px] font-mono uppercase tracking-[0.25em] text-[#B69A6A]">
            <span>// 10 — ONE DECISIVE FRAME</span>
            <span>EXHIBITION ARCHIVE</span>
          </div>

          <div className="max-w-2xl">
            <h3 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal uppercase tracking-tight text-[#F6F4EF] leading-[1.08] mb-4">
              SOMEWHERE
              <br />
              BETWEEN PLANNING
              <br />
              AND CHAOS
            </h3>
            <p className="text-xl sm:text-3xl font-serif italic text-[#B69A6A]">
              is the moment we’re looking for.
            </p>
          </div>

          <div className="flex items-center justify-between text-xs font-mono text-white/60">
            <span>PHOTOGRAPHIC EXHIBITION WALL</span>
            <span>[ 00:24:18:12 ]</span>
          </div>
        </div>
      </section>

      {/* =========================================================================
          11 — FINAL CTA (Highly SEO-Structured Commercial Conversion Spread)
          ========================================================================= */}
      <section
        id="cta-section"
        itemScope
        itemType="https://schema.org/ContactPoint"
        aria-labelledby="cta-heading"
        className="pt-8 sm:pt-12 pb-8 sm:pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#DEDCD6]"
      >
        <meta itemProp="contactType" content="Visual Production Inquiries & VIP Commissions" />
        <meta itemProp="areaServed" content="Dubai, Abu Dhabi, United Arab Emirates, GCC, Worldwide" />
        <meta itemProp="availableLanguage" content="English, Arabic" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading, Supporting Copy, Category Quick-Select & Action Buttons */}
          <div className="lg:col-span-8">
            {/* Semantic Header Breadcrumb & Status */}
            <div className="flex flex-wrap items-center gap-3 text-xs font-mono uppercase tracking-[0.22em] text-[#B69A6A] mb-5">
              <span>// 11</span>
              <span>•</span>
              <span className="font-semibold">YOUR STORY / NEXT FRAME</span>
              <span className="hidden sm:inline text-[#DEDCD6]">•</span>
              <span className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-white border border-[#DEDCD6] text-[10px] text-[#151515]">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" aria-hidden="true" />
                COMMISSIONS OPEN // 2026-2027
              </span>
            </div>

            {/* Primary H2 with High-Volume Search Engine Accessible Extension */}
            <h2
              id="cta-heading"
              className="font-serif text-5xl sm:text-7xl lg:text-8xl font-normal uppercase tracking-tight text-[#151515] leading-[0.96] mb-6"
            >
              ENOUGH
              <br />
              ABOUT US.
              <br />
              <span className="font-serif italic font-normal text-[#B69A6A] normal-case">
                let’s talk
              </span>
              <br />
              ABOUT YOU.
              <span className="sr-only">
                {" "}— Book Premier Dubai Event Photography, 4K Cinema Production, Live Streaming & 360 Photo Booth Services | DM Creation UAE
              </span>
            </h2>

            {/* Keyword-Rich Narrative Description */}
            <p className="text-base sm:text-xl text-[#666666] font-light leading-relaxed max-w-2xl mb-8">
              Whether you’re staging a luxury wedding on Palm Jumeirah, hosting a global keynote summit in Downtown Dubai, or launching an international brand campaign—DM Creation delivers editorial photography, 4K cinema films, zero-latency live streams, and interactive 360 booths tailored to your vision.
            </p>

            {/* Interactive Discipline Quick-Select Hotspots (Direct Booking Dispatch) */}
            <div className="mb-8" aria-label="Select Production Discipline to Book">
              <span className="block text-[11px] font-mono uppercase tracking-widest text-[#9E9C96] mb-3">
                [ SELECT DISCIPLINE TO INITIATE BOOKING ]
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <button
                  type="button"
                  onClick={() => onOpenBooking?.('Photography')}
                  className="p-3 bg-white border border-[#DEDCD6] hover:border-[#B69A6A] hover:bg-[#F6F4EF]/50 transition-all text-left flex items-start justify-between group cursor-pointer"
                >
                  <div>
                    <span className="text-[10px] font-mono text-[#B69A6A] font-semibold block">01 // STILLS</span>
                    <span className="text-xs font-mono font-bold uppercase text-[#151515]">EDITORIAL PHOTOGRAPHY</span>
                    <span className="text-[11px] text-[#666666] block font-light">Luxury galas, portraits, candid moments</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#B69A6A] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>

                <button
                  type="button"
                  onClick={() => onOpenBooking?.('Videography')}
                  className="p-3 bg-white border border-[#DEDCD6] hover:border-[#B69A6A] hover:bg-[#F6F4EF]/50 transition-all text-left flex items-start justify-between group cursor-pointer"
                >
                  <div>
                    <span className="text-[10px] font-mono text-[#B69A6A] font-semibold block">02 // FILM</span>
                    <span className="text-xs font-mono font-bold uppercase text-[#151515]">4K CINEMA PRODUCTION</span>
                    <span className="text-[11px] text-[#666666] block font-light">Brand commercials, showreels, event films</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#B69A6A] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>

                <button
                  type="button"
                  onClick={() => onOpenBooking?.('Live Streaming')}
                  className="p-3 bg-white border border-[#DEDCD6] hover:border-[#B69A6A] hover:bg-[#F6F4EF]/50 transition-all text-left flex items-start justify-between group cursor-pointer"
                >
                  <div>
                    <span className="text-[10px] font-mono text-[#B69A6A] font-semibold block">03 // BROADCAST</span>
                    <span className="text-xs font-mono font-bold uppercase text-[#151515]">MULTI-CAM LIVE STREAMING</span>
                    <span className="text-[11px] text-[#666666] block font-light">Zero-latency broadcast flypacks for summits</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#B69A6A] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>

                <button
                  type="button"
                  onClick={() => onOpenBooking?.('360° Booth')}
                  className="p-3 bg-white border border-[#DEDCD6] hover:border-[#B69A6A] hover:bg-[#F6F4EF]/50 transition-all text-left flex items-start justify-between group cursor-pointer"
                >
                  <div>
                    <span className="text-[10px] font-mono text-[#B69A6A] font-semibold block">04 // INTERACTIVE</span>
                    <span className="text-xs font-mono font-bold uppercase text-[#151515]">360° BOOTH EXPERIENCES</span>
                    <span className="text-[11px] text-[#666666] block font-light">Branded video spinners & instant AirDrop</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#B69A6A] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 mb-10">
              <button
                type="button"
                onClick={() => onOpenBooking?.('General Inquiry')}
                className="px-8 py-4 bg-[#151515] text-[#F6F4EF] hover:bg-[#B69A6A] hover:text-[#151515] transition-all text-xs font-mono uppercase tracking-widest font-semibold flex items-center gap-2 group shadow-editorial cursor-pointer"
              >
                <span>START A PROJECT WITH DM</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>

              <Link
                to="/portfolio"
                className="px-8 py-4 bg-white text-[#151515] hover:border-[#151515] border border-[#DEDCD6] transition-all text-xs font-mono uppercase tracking-widest font-semibold flex items-center gap-2 group"
              >
                <span>EXPLORE OUR WORK</span>
                <MoveRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                to="/contact"
                className="text-xs font-mono uppercase tracking-wider text-[#666666] hover:text-[#151515] underline underline-offset-4 transition-colors py-2"
              >
                DIRECT STUDIO CONTACT →
              </Link>
            </div>

            {/* SEO Trust Signals & Fast Response Guarantees (Structured Answer Box) */}
            <div
              itemScope
              itemType="https://schema.org/ItemList"
              className="pt-6 border-t border-[#DEDCD6] grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-mono text-[#666666]"
            >
              <div>
                <span className="block text-[10px] uppercase text-[#9E9C96]">RESPONSE PROMISE</span>
                <span className="font-semibold text-[#151515]">WITHIN 4 HOURS</span>
              </div>
              <div>
                <span className="block text-[10px] uppercase text-[#9E9C96]">SERVICE REACH</span>
                <span className="font-semibold text-[#151515]">UAE & WORLDWIDE</span>
              </div>
              <div>
                <span className="block text-[10px] uppercase text-[#9E9C96]">EXPRESS DELIVERY</span>
                <span className="font-semibold text-[#151515]">24-48H PREVIEWS</span>
              </div>
              <div>
                <span className="block text-[10px] uppercase text-[#9E9C96]">COMMISSIONS</span>
                <span className="font-semibold text-[#151515]">VIP & BESPOKE</span>
              </div>
            </div>
          </div>

          {/* Right Column: Framed Editorial Visual Proof with Schema Image Optimization */}
          <div className="lg:col-span-4">
            <motion.figure
              itemScope
              itemType="https://schema.org/ImageObject"
              whileHover={{ rotate: 0, scale: 1.02 }}
              className="bg-white p-3.5 border border-[#DEDCD6] shadow-editorial sm:rotate-2 transition-transform duration-500 max-w-xs mx-auto lg:ml-auto m-0"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-[#151515]">
                <img
                  src="/images/cta-image.jpg"
                  alt="Book luxury wedding photography and editorial cinema production in Dubai with DM Creation"
                  title="Book DM Creation Dubai Photography & Film Production"
                  itemProp="contentUrl"
                  loading="lazy"
                  decoding="async"
                  width="600"
                  height="800"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute top-2 left-2 bg-black/85 backdrop-blur-sm px-2 py-0.5 text-[9px] font-mono text-white border border-white/10 uppercase tracking-wider">
                  FRAME // NEXT
                </div>
                <div className="absolute bottom-2 right-2 bg-black/80 backdrop-blur-sm px-2 py-0.5 text-[9px] font-mono text-[#B69A6A]">
                  BOOKING 2026
                </div>
              </div>
              <figcaption className="pt-3 text-[11px] font-mono text-[#666666] flex flex-col gap-1">
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-[#151515]" itemProp="name">YOUR FUTURE FRAME</span>
                  <span className="text-[#B69A6A] font-bold">RESERVE NOW ↗</span>
                </div>
                <p className="text-[10px] text-[#9E9C96]" itemProp="caption">
                  Bespoke event coverage across Dubai, Abu Dhabi, GCC & destination productions worldwide.
                </p>
              </figcaption>
            </motion.figure>
          </div>
        </div>
      </section>
    </div>
  );
}
