import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Camera,
  Film,
  Radio,
  RotateCw,
  ArrowUpRight,
  ArrowRight,
  Check,
  ChevronDown,
  MapPin,
  HelpCircle,
  Play,
} from 'lucide-react';
import { useCursor } from '../context/CursorContext';
import VideoModal from '../components/VideoModal';

export default function Services({ onOpenBooking }) {
  const { setCursor, resetCursor } = useCursor();
  const [activeFaq, setActiveFaq] = useState(0);
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [activeVideoUrl, setActiveVideoUrl] = useState('');

  const handleOpenVideo = (url) => {
    setActiveVideoUrl(url);
    setVideoModalOpen(true);
  };

  // Dynamic SEO Meta Tags & Head Management
  useEffect(() => {
    // Exact high-value SEO Page Title
    document.title = "Visual Production Services Dubai | Photography, Videography & 360 Booth | DM Creation";

    // Meta Description
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        "Explore DM Creation's full suite of luxury visual services in Dubai: editorial & commercial photography, 4K cinema videography, global multi-cam live streaming, and interactive 360° photo booth rentals across the UAE & worldwide."
      );
    }

    // Canonical Link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', 'https://dmcreation.ae/services');

    // Open Graph Tags
    const setOgTag = (property, content) => {
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('property', property);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    setOgTag('og:title', 'Visual Production Services Dubai | Photography, Videography & 360 Booth | DM Creation');
    setOgTag('og:description', 'Explore DM Creation’s full suite of luxury visual services in Dubai: editorial & commercial photography, 4K cinema videography, global multi-cam live streaming, and interactive 360° photo booth rentals across UAE.');
    setOgTag('og:url', 'https://dmcreation.ae/services');
    setOgTag('og:type', 'website');
    setOgTag('og:image', 'https://dmcreation.ae/images/hero-cinematic.jpg');

    // Inject Comprehensive JSON-LD Schemas (BreadcrumbList, Service Catalog, FAQPage)
    const scriptId = 'services-structured-data';
    let scriptTag = document.getElementById(scriptId);
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = scriptId;
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }

    const structuredData = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "BreadcrumbList",
          "@id": "https://dmcreation.ae/services#breadcrumb",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://dmcreation.ae/"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Services",
              "item": "https://dmcreation.ae/services"
            }
          ]
        },
        {
          "@type": "Service",
          "@id": "https://dmcreation.ae/services#photography",
          "name": "Editorial & Event Photography Dubai",
          "serviceType": "Photography",
          "description": "High-fidelity editorial portraiture, luxury galas, architectural coverage, and unscripted celebration moments with medium format sensors and natural skin-tone color grading.",
          "provider": {
            "@type": "ProfessionalService",
            "name": "DM Creation",
            "url": "https://dmcreation.ae/"
          },
          "areaServed": [
            { "@type": "City", "name": "Dubai" },
            { "@type": "City", "name": "Abu Dhabi" },
            { "@type": "Country", "name": "United Arab Emirates" },
            { "@type": "Place", "name": "Worldwide" }
          ]
        },
        {
          "@type": "Service",
          "@id": "https://dmcreation.ae/services#videography",
          "name": "Cinematic Videography & Film Production Dubai",
          "serviceType": "Videography",
          "description": "Full cinematic motion picture production using anamorphic optics, 4K DCI, fluid gimbal tracking, licensed aerial drone cinematography, and tailored film-emulation color grading.",
          "provider": {
            "@type": "ProfessionalService",
            "name": "DM Creation",
            "url": "https://dmcreation.ae/"
          },
          "areaServed": [
            { "@type": "City", "name": "Dubai" },
            { "@type": "City", "name": "Abu Dhabi" },
            { "@type": "Country", "name": "United Arab Emirates" }
          ]
        },
        {
          "@type": "Service",
          "@id": "https://dmcreation.ae/services#livestreaming",
          "name": "4K Multi-Camera Live Streaming Services Dubai",
          "serviceType": "Live Streaming & Broadcast",
          "description": "Real-time global broadcasting for corporate conferences, summits, and hybrid galas with dual-bonded 5G/satellite redundancy and custom branded graphics.",
          "provider": {
            "@type": "ProfessionalService",
            "name": "DM Creation",
            "url": "https://dmcreation.ae/"
          },
          "areaServed": [
            { "@type": "City", "name": "Dubai" },
            { "@type": "Country", "name": "United Arab Emirates" }
          ]
        },
        {
          "@type": "Service",
          "@id": "https://dmcreation.ae/services#360booth",
          "name": "Interactive 360° Photo & Video Booth Rental Dubai",
          "serviceType": "Event Technology Activation",
          "description": "Motorized orbital camera platform creating instant slow-motion cinematic video keepsakes with custom sound design, studio ring lighting, and instant AirDrop & QR code delivery.",
          "provider": {
            "@type": "ProfessionalService",
            "name": "DM Creation",
            "url": "https://dmcreation.ae/"
          },
          "areaServed": [
            { "@type": "City", "name": "Dubai" },
            { "@type": "City", "name": "Abu Dhabi" },
            { "@type": "Country", "name": "United Arab Emirates" }
          ]
        },
        {
          "@type": "FAQPage",
          "@id": "https://dmcreation.ae/services#faq",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Can we book multiple visual production services as a bundled package?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. Most clients commission DM Creation for integrated multi-discipline coverage—such as combined Editorial Photography and Cinematic Videography, or Full Event Broadcast paired with a 360° Booth experience. Bundling ensures a unified creative director and harmonized color palette across all deliverables."
              }
            },
            {
              "@type": "Question",
              "name": "What is the typical turnaround time for photography and cinematic films?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "For photography, a private curated preview gallery (20–40 highlight frames) is delivered within 24 to 48 hours for press and social media, with the complete archival suite delivered within 7 to 10 days. Cinematic highlight trailers are typically completed within 7 to 14 days following color grading and custom sound design."
              }
            },
            {
              "@type": "Question",
              "name": "Do you hold commercial drone flight permits in Dubai and the UAE?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. DM Creation manages all statutory Dubai Civil Aviation Authority (DCAA) and GCAA drone operation clearances, airspace permits, and site security approvals for aerial cinematography across Dubai and the UAE."
              }
            },
            {
              "@type": "Question",
              "name": "Are your production teams available for destination shoots outside the UAE?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "DM Creation regularly deploys worldwide for destination weddings, luxury corporate summits, and global brand campaigns across the GCC, Europe, and Asia. Our mobile production kits are configured for frictionless international transport."
              }
            },
            {
              "@type": "Question",
              "name": "What technical redundancy do you maintain during live streaming?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Our live streaming broadcast systems utilize dual bonded cellular network encoders (multiple independent 5G/4G networks combined with hardwired gigabit LAN) alongside secondary hardware failover units, guaranteeing 99.99% uptime with sub-second transmission latency."
              }
            }
          ]
        }
      ]
    };

    scriptTag.textContent = JSON.stringify(structuredData);

    return () => {
      const el = document.getElementById(scriptId);
      if (el) el.remove();
    };
  }, []);

  const servicesList = [
    {
      id: '01',
      anchor: 'photography',
      icon: Camera,
      title: 'PHOTOGRAPHY',
      h2: 'Editorial & Event Photography in Dubai',
      subtitle: 'Editorial, Commercial & Luxury Event Stills',
      desc: 'High-fidelity portraiture, luxury galas, architectural coverage, and unscripted celebration moments captured with refined editorial lighting and natural skin tones.',
      extendedDesc: 'Our photographic discipline blends the restraint of high-fashion print editorial with the acute situational awareness required for fast-paced luxury galas, royal protocol events, and corporate summits. Every photograph is captured on flagship medium format and full-frame optics, ensuring extraordinary dynamic range and timeless archival richness.',
      specs: [
        { label: 'Optics & Sensors', value: 'Medium Format & 35mm f/1.2 Primes' },
        { label: 'Color Science', value: 'Bespoke Color Graded & Natural Skin Tone' },
        { label: 'Delivery Speed', value: '24–48h Press Teasers + Complete Archive' },
        { label: 'Handover Protocol', value: 'Private Encrypted Cloud Gallery' },
      ],
      features: [
        'Medium format & 35mm primes',
        'Natural skin-tone color grading',
        'Private curated client gallery',
        'High-resolution archival delivery',
        'Commercial usage licensing',
        'On-site digital tech station',
      ],
      applications: ['Luxury Weddings & Galas', 'Corporate Brand Campaigns', 'Executive & Editorial Portraits', 'Architectural & Interior Stills'],
      image: 'https://res.cloudinary.com/aubynz6r/image/upload/BTS',
      imageAlt: 'Professional editorial photographer setting up lighting for a luxury portrait session in Dubai',
    },
    {
      id: '02',
      anchor: 'videography',
      icon: Film,
      title: 'VIDEOGRAPHY',
      h2: 'Cinematic Videography & Film Production',
      subtitle: 'Cinematic Motion Picture & Commercial Storytelling',
      desc: 'Full cinematic production using anamorphic optics, fluid gimbal tracking, licensed aerial drone cinematography, and tailored film-emulation color grading.',
      extendedDesc: 'We reject formulaic event videography in favor of genuine cinematic storytelling. Combining cinema-grade sensor cameras, custom acoustic design, and rhythmic editorial cuts, we craft films that evoke genuine emotional resonance—from 60-second viral teasers to 20-minute feature-length anniversary documentaries.',
      specs: [
        { label: 'Resolution & Format', value: '4K DCI & 2.39:1 CinemaScope Anamorphic' },
        { label: 'Audio Architecture', value: 'Multi-Track 32-bit Float Audio Capture' },
        { label: 'Aerial Authorization', value: 'DCAA Certified Drone Flight Operations' },
        { label: 'Post-Production', value: 'Custom Score Design & Film Emulation' },
      ],
      features: [
        '4K DCI & 2.39:1 CinemaScope',
        'Custom sound design & mix',
        'Teaser & feature-length cuts',
        'Color graded with film emulation',
        'Dual-operator gimbal tracking',
        'Licensed aerial drone footage',
      ],
      applications: ['Brand Manifesto Commercials', 'Destination Wedding Films', 'Corporate Summit Aftermovies', 'Automotive & Product Launches'],
      image: 'https://img.youtube.com/vi/6KzTb-qOaZo/maxresdefault.jpg',
      imageAlt: 'Cinematic Videography & Film Production by DM Creation Dubai',
      videoUrl: 'https://youtu.be/6KzTb-qOaZo?si=xLY5gqtvB_rnZKtl',
    },
    {
      id: '03',
      anchor: 'live-streaming',
      icon: Radio,
      title: 'LIVE STREAMING',
      h2: '4K Multi-Camera Live Streaming & Broadcast',
      subtitle: 'Broadcast Multi-Cam Production & Hybrid Events',
      desc: 'Flawless real-time global transmission for conferences, summits, and hybrid gatherings with dual-bonded network redundancy and custom lower-third graphics.',
      extendedDesc: 'Engineered for high-stakes corporate summits, international congresses, and global product reveals where failure is not an option. Our mobile broadcast control unit manages up to 12 switched cameras, integrated simultaneous interpretation audio channels, and live interaction portals with zero noticeable latency.',
      specs: [
        { label: 'Camera Capacity', value: 'Up to 12 PTZ & Handheld Cinema Feeds' },
        { label: 'Uplink Redundancy', value: 'Bonded 5G Networks + Dual Satellite Link' },
        { label: 'Transmission Latency', value: 'Sub-second Ultra-Low Latency (<800ms)' },
        { label: 'Platforms', value: 'YouTube, LinkedIn, Zoom, Custom Microsites' },
      ],
      features: [
        'Up to 12-camera live switching',
        'Sub-second ultra-low latency',
        'Bonded 5G / satellite uplinks',
        'Custom branded broadcast graphics',
        'Live remote guest integration',
        'Multi-lingual simultaneous audio',
      ],
      applications: ['International Trade Summits', 'Hybrid Corporate Conferences', 'Global Product Unveilings', 'Live Concert & Gala Feeds'],
      image: 'https://res.cloudinary.com/aubynz6r/image/upload/360',
      imageAlt: 'Live multi-camera broadcast control console and stage production at a major Dubai international summit',
    },
    {
      id: '04',
      anchor: '360-booth',
      icon: RotateCw,
      title: '360° BOOTH',
      h2: 'Interactive 360° Photo & Video Booth Activation',
      subtitle: 'Interactive Experiential Activation for Luxury Events',
      desc: 'High-speed motorized orbital camera platform generating immediate slow-motion video keepsakes with custom musical branding and instant AirDrop delivery.',
      extendedDesc: 'Elevate your event entertainment into an irresistible social media sensation. Our 360° Booth platform features a glass-stage surface with programmable ambient LED perimeter lighting, custom dynamic video overlays, and an on-site creative director guiding guests to strike effortless poses.',
      specs: [
        { label: 'Platform Capacity', value: '1 to 5 Guests Simultaneously' },
        { label: 'Video Output', value: '120fps Slow-Motion with Audio Overlay' },
        { label: 'Sharing Terminal', value: 'Instant AirDrop, QR Code, WhatsApp & Email' },
        { label: 'Custom Branding', value: 'Tailored Animated Watermarks & Intros' },
      ],
      features: [
        'Instant AirDrop & QR sharing',
        'Custom animated video overlays',
        'LED ambient studio lighting',
        'Dedicated on-site creative director',
        'Real-time automated cloud sync',
        'Luxury custom prop curation',
      ],
      applications: ['VIP Gala Celebrations', 'Fashion & Beauty Activations', 'Corporate Year-End Galas', 'Music Festivals & Awards'],
      image: '/services/360.png',
      imageAlt: 'Guests enjoying a luxury 360 video booth experience with ambient studio lights and instant sharing station in Dubai',
    },
  ];

  const faqs = [
    {
      q: 'Can we book multiple visual production services as a bundled package?',
      a: 'Yes. Most clients commission DM Creation for integrated multi-discipline coverage—such as combined Editorial Photography and Cinematic Videography, or Full Event Broadcast paired with an interactive 360° Booth experience. Bundling ensures a unified creative director and harmonized color palette across all deliverables.',
    },
    {
      q: 'What is the typical turnaround time for photography and cinematic films?',
      a: 'For photography, a private curated preview gallery (20–40 highlight frames) is delivered within 24 to 48 hours for press and social media, with the complete archival suite delivered within 7 to 10 days. Cinematic highlight trailers are typically completed within 7 to 14 days following color grading and custom sound design.',
    },
    {
      q: 'Do you hold commercial drone flight permits in Dubai and the UAE?',
      a: 'Yes. DM Creation manages all statutory Dubai Civil Aviation Authority (DCAA) and GCAA drone operation clearances, airspace permits, and site security approvals for aerial cinematography across Dubai and the UAE.',
    },
    {
      q: 'Are your production teams available for destination shoots outside the UAE?',
      a: 'DM Creation regularly deploys worldwide for destination weddings, luxury corporate summits, and global brand campaigns across the GCC, Europe, and Asia. Our mobile production kits are configured for frictionless international transport.',
    },
    {
      q: 'What technical redundancy do you maintain during live streaming?',
      a: 'Our live streaming broadcast systems utilize dual bonded cellular network encoders (multiple independent 5G/4G networks combined with hardwired gigabit LAN) alongside secondary hardware failover units, guaranteeing 99.99% uptime with sub-second transmission latency.',
    },
  ];

  return (
    <div className="pt-28 pb-24 bg-[#F6F4EF] min-h-screen text-[#151515]">
      {/* Semantic Breadcrumbs for Navigation & SEO */}
      <nav aria-label="Breadcrumb" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-6">
        <ol className="flex items-center space-x-2 text-xs font-mono tracking-wider text-[#666666]">
          <li>
            <Link to="/" className="hover:text-[#B69A6A] transition-colors">
              HOME
            </Link>
          </li>
          <li aria-hidden="true" className="text-[#B69A6A] font-bold">/</li>
          <li className="text-[#151515] font-semibold" aria-current="page">
            SERVICES & DISCIPLINES
          </li>
        </ol>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ====================================================================
            PAGE HEADER: High-Hierarchy SEO H1 with descriptive keywords
            ==================================================================== */}
        <header className="max-w-4xl mb-16 pb-10 border-b border-[#DEDCD6]">
          <div className="flex items-center gap-2.5 text-xs font-mono tracking-[0.25em] text-[#B69A6A] uppercase font-semibold mb-4">
            <span className="w-2 h-2 rounded-full bg-[#B69A6A]" aria-hidden="true" />
            <span>VISUAL PRODUCTION DISCIPLINES</span>
            <span>•</span>
            <span>DUBAI & GLOBAL</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal uppercase tracking-tight text-[#151515] leading-[1.08] mb-6">
            LUXURY VISUAL
            <br />
            <span className="font-serif italic font-normal text-[#B69A6A]">production</span> SERVICES.
          </h1>

          <p className="text-base sm:text-xl text-[#555555] font-light leading-relaxed max-w-3xl">
            From editorial photography and anamorphic cinema to broadcast-grade multi-cam live streaming and interactive 360° activations, DM Creation executes end-to-end media production across Dubai, Abu Dhabi, and international destinations.
          </p>

          {/* Quick-Jump Section Anchor Pills */}
          <div className="flex flex-wrap gap-2.5 mt-8 pt-6 border-t border-[#DEDCD6]/60">
            <span className="text-xs font-mono uppercase tracking-widest text-[#888888] self-center mr-2">
              JUMP TO:
            </span>
            {servicesList.map((srv) => (
              <a
                key={srv.id}
                href={`#${srv.anchor}`}
                className="px-3.5 py-1.5 text-xs font-mono uppercase tracking-wider bg-white border border-[#DEDCD6] hover:border-[#B69A6A] hover:text-[#B69A6A] transition-all rounded-sm"
              >
                {srv.id}. {srv.title}
              </a>
            ))}
            <a
              href="#frequently-asked-questions"
              className="px-3.5 py-1.5 text-xs font-mono uppercase tracking-wider bg-white border border-[#DEDCD6] hover:border-[#B69A6A] hover:text-[#B69A6A] transition-all rounded-sm"
            >
              FAQ
            </a>
          </div>
        </header>
      </div>

      {/* ====================================================================
          SERVICES SHOWCASE: 2nd Section with background from OUR STORY / FRAME 02
          Full-bleed dark bg (#111111) behind the white service cards
          ==================================================================== */}
      <section
        aria-label="Core Services Showcase"
        className="dark-section bg-[#111111] text-[#F6F4EF] py-14 sm:py-20 px-4 sm:px-6 lg:px-8 border-y border-white/10 relative overflow-hidden mb-20"
      >
        {/* Ambient Glow Matching OUR STORY / FRAME 02 */}
        <div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#B69A6A]/5 rounded-full blur-[140px] pointer-events-none"
          aria-hidden="true"
        />

        <div className="max-w-7xl mx-auto relative z-10 space-y-12 sm:space-y-14">
          {servicesList.map((srv, index) => {
            const Icon = srv.icon;
            const isReversed = index % 2 === 1;

            return (
              <article
                key={srv.id}
                id={srv.anchor}
                className="scroll-mt-28 bg-white text-[#151515] border border-[#DEDCD6] shadow-editorial overflow-hidden transition-all duration-300 hover:border-[#B69A6A]/60"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 items-stretch ${isReversed ? 'lg:flex-row-reverse' : ''}`}>
                  {/* Left Column: Compact Editorial Details */}
                  <div className={`p-6 sm:p-8 lg:p-10 lg:col-span-7 flex flex-col justify-between ${isReversed ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div>
                      {/* Technical Kicker */}
                      <div className="flex items-center gap-2.5 text-[11px] font-mono text-[#B69A6A] uppercase tracking-widest mb-2">
                        <span className="font-bold text-xs">{srv.id}</span>
                        <span className="text-[#DEDCD6]">/</span>
                        <span className="flex items-center gap-1.5 font-medium">
                          <Icon className="w-3.5 h-3.5" aria-hidden="true" />
                          {srv.subtitle}
                        </span>
                      </div>

                      {/* Primary SEO Heading H2 */}
                      <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal uppercase tracking-tight text-[#151515] mb-2.5 leading-snug">
                        {srv.h2}
                      </h2>

                      {/* Concise Lead Paragraph */}
                      <p className="text-sm sm:text-base text-[#151515] font-normal leading-relaxed mb-4">
                        {srv.desc}
                      </p>

                      {/* Compact Technical Highlights Matrix (2 cols, concise) */}
                      <dl className="grid grid-cols-2 gap-x-4 gap-y-2 py-3 px-4 bg-[#FAF9F5] border border-[#EBE8E0] rounded-sm mb-4 text-xs">
                        {srv.specs.slice(0, 4).map((spec, i) => (
                          <div key={i} className="flex flex-col">
                            <dt className="text-[#888888] font-mono text-[10px] uppercase tracking-wider">{spec.label}</dt>
                            <dd className="font-medium text-[#151515] text-[11px] sm:text-xs truncate">{spec.value}</dd>
                          </div>
                        ))}
                      </dl>

                      {/* Inclusions Checkpoints (First 4 key points) */}
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 mb-5">
                        {srv.features.slice(0, 4).map((feat, i) => (
                          <li key={i} className="flex items-center gap-2 text-xs font-mono text-[#333333]">
                            <Check className="w-3.5 h-3.5 text-[#B69A6A] shrink-0" aria-hidden="true" />
                            <span className="truncate">{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Service CTA & Location Footer */}
                    <div className="pt-4 border-t border-[#DEDCD6] flex flex-wrap items-center justify-between gap-3">
                      <button
                        onClick={() => onOpenBooking?.(srv.title)}
                        className="px-6 py-2.5 sm:py-3 bg-[#151515] text-[#F6F4EF] hover:bg-[#B69A6A] hover:text-[#151515] transition-all text-xs font-mono uppercase tracking-widest font-semibold inline-flex items-center gap-2 shadow-sm"
                      >
                        <span>BOOK {srv.title}</span>
                        <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                      </button>

                      <div className="text-[11px] font-mono text-[#777777] flex items-center gap-1.5">
                        <MapPin className="w-3 h-3 text-[#B69A6A]" aria-hidden="true" />
                        <span>Dubai • UAE • Worldwide</span>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Visual Frame (Proportional Height) */}
                  <div
                    className={`lg:col-span-5 relative bg-black border-t lg:border-t-0 ${isReversed ? 'lg:border-r border-[#DEDCD6] lg:order-1' : 'lg:border-l border-[#DEDCD6] lg:order-2'} min-h-[260px] sm:min-h-[300px] lg:min-h-full ${srv.videoUrl ? 'group cursor-pointer' : ''}`}
                    onClick={() => srv.videoUrl && handleOpenVideo(srv.videoUrl)}
                    onMouseEnter={() => srv.videoUrl && setCursor('play', 'PLAY ▶')}
                    onMouseLeave={() => srv.videoUrl && resetCursor()}
                    role={srv.videoUrl ? 'button' : undefined}
                    tabIndex={srv.videoUrl ? 0 : undefined}
                    onKeyDown={(e) => {
                      if (srv.videoUrl && (e.key === 'Enter' || e.key === ' ')) {
                        e.preventDefault();
                        handleOpenVideo(srv.videoUrl);
                      }
                    }}
                    aria-label={srv.videoUrl ? `Play ${srv.title} showreel video` : undefined}
                  >
                    <img
                      src={srv.image}
                      alt={srv.imageAlt}
                      width={800}
                      height={600}
                      loading="lazy"
                      className="w-full h-full object-cover img-hover-scale min-h-[260px] sm:min-h-[300px] opacity-90 group-hover:opacity-100 transition-opacity"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/30 pointer-events-none" />

                    {/* Interactive Play Button for Video Deliverable */}
                    {srv.videoUrl && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-black/60 backdrop-blur-md border border-white/40 flex items-center justify-center text-white group-hover:bg-[#B69A6A] group-hover:border-[#B69A6A] group-hover:text-[#151515] transition-all duration-300 shadow-cinematic">
                          <Play className="w-5 h-5 sm:w-6 sm:h-6 fill-current translate-x-0.5" />
                        </div>
                      </div>
                    )}

                    {/* Visual Caption Tag */}
                    <div className="absolute bottom-3 left-3 right-3 bg-black/80 backdrop-blur-sm border border-white/10 px-3 py-2 text-white flex items-center justify-between">
                      <div className="text-[10px] font-mono tracking-wider uppercase text-white/90 flex items-center gap-1.5">
                        {srv.videoUrl && <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-rec-pulse" />}
                        <span>{srv.title} PRODUCTION</span>
                      </div>
                      <span className="text-[9px] font-mono text-[#B69A6A] uppercase tracking-widest">
                        {srv.videoUrl ? 'WATCH FILM ▶' : 'DM CREATION'}
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ====================================================================
            FREQUENTLY ASKED QUESTIONS SECTION
            ==================================================================== */}

        {/* ====================================================================
            SECTION 5: FAQ SECTION WITH HIGH-VALUE RICH SNIPPET MATCH
            ==================================================================== */}
        <section
          id="frequently-asked-questions"
          aria-labelledby="faq-heading"
          className="mb-28 max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 text-xs font-mono text-[#B69A6A] uppercase tracking-[0.25em] mb-2">
              <HelpCircle className="w-4 h-4" aria-hidden="true" />
              <span>FREQUENTLY ASKED QUESTIONS</span>
            </div>
            <h2 id="faq-heading" className="font-serif text-3xl sm:text-4xl font-normal uppercase tracking-tight text-[#151515]">
              COMMON QUESTIONS ON OUR VISUAL SERVICES
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = activeFaq === index;
              return (
                <div
                  key={index}
                  className="bg-white border border-[#DEDCD6] rounded-sm transition-all overflow-hidden"
                >
                  <button
                    type="button"
                    onClick={() => setActiveFaq(isOpen ? null : index)}
                    className="w-full text-left p-6 sm:p-7 flex items-center justify-between gap-4 hover:bg-[#FAF9F5] transition-colors"
                    aria-expanded={isOpen}
                  >
                    <span className="text-base sm:text-lg font-bold text-[#151515] uppercase tracking-tight">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#B69A6A] transition-transform duration-200 shrink-0 ${isOpen ? 'rotate-180' : ''}`}
                      aria-hidden="true"
                    />
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 sm:px-7 sm:pb-7 text-sm sm:text-base text-[#666666] font-light leading-relaxed border-t border-[#EBE8E0] pt-4">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* ====================================================================
            SECTION 6: FINAL CONVERSION CALL TO ACTION
            ==================================================================== */}
        <section
          aria-label="Book a Service Consultation"
          className="bg-white border-2 border-[#151515] p-8 sm:p-14 text-center max-w-4xl mx-auto shadow-editorial"
        >
          <div className="inline-flex items-center px-3.5 py-1.5 bg-[#151515] text-[#F6F4EF] text-[11px] font-mono uppercase tracking-widest mb-6">
            <span>COMMISSION DM CREATION</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-normal uppercase tracking-tight text-[#151515] mb-4">
            READY TO ELEVATE YOUR VISUAL NARRATIVE?
          </h2>

          <p className="text-base text-[#666666] font-light max-w-xl mx-auto mb-8 leading-relaxed">
            Whether planning an editorial campaign, luxury gala, or global hybrid conference, speak with our production directors to receive a tailored technical proposal.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => onOpenBooking?.('General Inquiry')}
              className="px-8 py-4 bg-[#151515] text-[#F6F4EF] hover:bg-[#B69A6A] hover:text-[#151515] transition-all text-xs font-mono uppercase tracking-widest font-semibold inline-flex items-center gap-2.5"
            >
              <span>REQUEST PROJECT PROPOSAL</span>
              <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
            </button>

            <Link
              to="/portfolio"
              className="px-8 py-4 bg-transparent border border-[#151515] text-[#151515] hover:bg-[#151515] hover:text-[#F6F4EF] transition-all text-xs font-mono uppercase tracking-widest font-semibold inline-flex items-center gap-2"
            >
              <span>EXPLORE WORK</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
        </section>
      </div>

      {/* Video Modal for Cinematic Preview */}
      <VideoModal
        isOpen={videoModalOpen}
        onClose={() => setVideoModalOpen(false)}
        videoUrl={activeVideoUrl}
      />
    </div>
  );
}
