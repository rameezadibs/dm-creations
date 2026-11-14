import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Camera, Film, Radio, RotateCw, Plus } from 'lucide-react';
import { useCursor } from '../context/CursorContext';

export default function SelectedWork({ onOpenBooking, onOpenProjectModal }) {
  const { setCursor, resetCursor } = useCursor();
  const [filter, setFilter] = useState('ALL');

  const categories = ['ALL', 'RAK TOURISM PROJECT', 'WEDDINGS', 'BABY PHOTOSHOOT', 'CORPORATE MEETING', 'Real Estate Photography | Pagani | 2022', 'MODEL SHOOT'];

  const projects = [
    {
      id: 1,
      title: 'RAK TOURISM CAMPAIGN — SCENE 01',
      category: 'RAK TOURISM PROJECT',
      type: 'TOURISM EDITORIAL',
      location: 'RAS AL KHAIMAH, UAE',
      image: 'https://res.cloudinary.com/aubynz6r/image/upload/Screenshot_2026-11-11_112501',
      format: 'LANDSCAPE',
      aspect: 'aspect-[16/10]',
      colSpan: 'lg:col-span-6',
      year: '2026',
    },
    {
      id: 2,
      title: 'RAK TOURISM CAMPAIGN — SCENE 02',
      category: 'RAK TOURISM PROJECT',
      type: 'CINEMATIC STILLS',
      location: 'RAS AL KHAIMAH, UAE',
      image: 'https://res.cloudinary.com/aubynz6r/image/upload/Screenshot_2026-11-11_113255',
      format: 'LANDSCAPE',
      aspect: 'aspect-[16/10]',
      colSpan: 'lg:col-span-6',
      year: '2026',
    },
    {
      id: 3,
      title: 'RAK TOURISM CAMPAIGN — SCENE 03',
      category: 'RAK TOURISM PROJECT',
      type: 'DESTINATION FEATURE',
      location: 'RAS AL KHAIMAH, UAE',
      image: 'https://res.cloudinary.com/aubynz6r/image/upload/Screenshot_2026-11-11_113313',
      format: 'LANDSCAPE',
      aspect: 'aspect-[16/10]',
      colSpan: 'lg:col-span-6',
      year: '2026',
    },
    {
      id: 4,
      title: 'RAK TOURISM CAMPAIGN — SCENE 04',
      category: 'RAK TOURISM PROJECT',
      type: 'NARRATIVE VISUAL',
      location: 'RAS AL KHAIMAH, UAE',
      image: 'https://res.cloudinary.com/aubynz6r/image/upload/Screenshot_2026-11-11_113330',
      format: 'LANDSCAPE',
      aspect: 'aspect-[16/10]',
      colSpan: 'lg:col-span-6',
      year: '2026',
    },
    {
      id: 5,
      title: 'RAK TOURISM CAMPAIGN — SCENE 05',
      category: 'RAK TOURISM PROJECT',
      type: 'CAMPAIGN PRODUCTION',
      location: 'RAS AL KHAIMAH, UAE',
      image: 'https://res.cloudinary.com/aubynz6r/image/upload/Screenshot_2026-11-11_113402',
      format: 'FULL_WIDTH',
      aspect: 'aspect-[16/9]',
      colSpan: 'lg:col-span-12',
      year: '2026',
    },
    {
      id: 6,
      title: 'WEDDING ARCHIVE 01',
      category: 'WEDDINGS',
      type: 'LUXURY WEDDING',
      location: 'DUBAI, UAE',
      image: 'https://res.cloudinary.com/aubynz6r/image/upload/Screenshot_2026-11-11_113455',
      format: 'LANDSCAPE',
      aspect: 'aspect-[16/10]',
      colSpan: 'lg:col-span-6',
      year: '2026',
    },
    {
      id: 7,
      title: 'WEDDING ARCHIVE 02',
      category: 'WEDDINGS',
      type: 'LUXURY WEDDING',
      location: 'DUBAI, UAE',
      image: 'https://res.cloudinary.com/aubynz6r/image/upload/Screenshot_2026-11-11_113525',
      format: 'LANDSCAPE',
      aspect: 'aspect-[16/10]',
      colSpan: 'lg:col-span-6',
      year: '2026',
    },
    {
      id: 8,
      title: 'WEDDING ARCHIVE 03',
      category: 'WEDDINGS',
      type: 'LUXURY WEDDING',
      location: 'DUBAI, UAE',
      image: 'https://res.cloudinary.com/aubynz6r/image/upload/Screenshot_2026-11-11_113543',
      format: 'LANDSCAPE',
      aspect: 'aspect-[16/10]',
      colSpan: 'lg:col-span-6',
      year: '2026',
    },
    {
      id: 9,
      title: 'WEDDING ARCHIVE 04',
      category: 'WEDDINGS',
      type: 'LUXURY WEDDING',
      location: 'DUBAI, UAE',
      image: 'https://res.cloudinary.com/aubynz6r/image/upload/Screenshot_2026-11-11_113556',
      format: 'LANDSCAPE',
      aspect: 'aspect-[16/10]',
      colSpan: 'lg:col-span-6',
      year: '2026',
    },
    {
      id: 10,
      title: 'WEDDING ARCHIVE 05',
      category: 'WEDDINGS',
      type: 'LUXURY WEDDING',
      location: 'DUBAI, UAE',
      image: 'https://res.cloudinary.com/aubynz6r/image/upload/Screenshot_2026-11-11_113609',
      format: 'LANDSCAPE',
      aspect: 'aspect-[16/10]',
      colSpan: 'lg:col-span-6',
      year: '2026',
    },
    {
      id: 11,
      title: 'WEDDING ARCHIVE 06',
      category: 'WEDDINGS',
      type: 'LUXURY WEDDING',
      location: 'DUBAI, UAE',
      image: 'https://res.cloudinary.com/aubynz6r/image/upload/Screenshot_2026-11-11_160948',
      format: 'LANDSCAPE',
      aspect: 'aspect-[16/10]',
      colSpan: 'lg:col-span-6',
      year: '2026',
    },
    {
      id: 12,
      title: 'WEDDING ARCHIVE 07',
      category: 'WEDDINGS',
      type: 'LUXURY WEDDING',
      location: 'DUBAI, UAE',
      image: 'https://res.cloudinary.com/aubynz6r/image/upload/Screenshot_2026-11-11_161344',
      format: 'LANDSCAPE',
      aspect: 'aspect-[16/10]',
      colSpan: 'lg:col-span-6',
      year: '2026',
    },
    {
      id: 13,
      title: 'WEDDING ARCHIVE 08',
      category: 'WEDDINGS',
      type: 'LUXURY WEDDING',
      location: 'DUBAI, UAE',
      image: 'https://res.cloudinary.com/aubynz6r/image/upload/Screenshot_2026-11-11_161400',
      format: 'LANDSCAPE',
      aspect: 'aspect-[16/10]',
      colSpan: 'lg:col-span-6',
      year: '2026',
    },
    {
      id: 14,
      title: 'WEDDING ARCHIVE 09',
      category: 'WEDDINGS',
      type: 'LUXURY WEDDING',
      location: 'DUBAI, UAE',
      image: 'https://res.cloudinary.com/aubynz6r/image/upload/Screenshot_2026-11-11_161838',
      format: 'LANDSCAPE',
      aspect: 'aspect-[16/10]',
      colSpan: 'lg:col-span-6',
      year: '2026',
    },
    {
      id: 15,
      title: 'WEDDING ARCHIVE 10',
      category: 'WEDDINGS',
      type: 'LUXURY WEDDING',
      location: 'DUBAI, UAE',
      image: 'https://res.cloudinary.com/aubynz6r/image/upload/Screenshot_2026-11-11_161910',
      format: 'LANDSCAPE',
      aspect: 'aspect-[16/10]',
      colSpan: 'lg:col-span-6',
      year: '2026',
    },
    {
      id: 16,
      title: 'WEDDING ARCHIVE 11',
      category: 'WEDDINGS',
      type: 'LUXURY WEDDING',
      location: 'DUBAI, UAE',
      image: 'https://res.cloudinary.com/aubynz6r/image/upload/Screenshot_2026-11-11_161853',
      format: 'LANDSCAPE',
      aspect: 'aspect-[16/10]',
      colSpan: 'lg:col-span-6',
      year: '2026',
    },
    {
      id: 17,
      title: 'WEDDING ARCHIVE 12',
      category: 'WEDDINGS',
      type: 'LUXURY WEDDING',
      location: 'DUBAI, UAE',
      image: 'https://res.cloudinary.com/aubynz6r/image/upload/Screenshot_2026-11-11_162110',
      format: 'LANDSCAPE',
      aspect: 'aspect-[16/10]',
      colSpan: 'lg:col-span-6',
      year: '2026',
    },
    {
      id: 18,
      title: 'WEDDING ARCHIVE 13',
      category: 'WEDDINGS',
      type: 'LUXURY WEDDING',
      location: 'DUBAI, UAE',
      image: 'https://res.cloudinary.com/aubynz6r/image/upload/Screenshot_2026-11-11_162124',
      format: 'LANDSCAPE',
      aspect: 'aspect-[16/10]',
      colSpan: 'lg:col-span-6',
      year: '2026',
    },
    {
      id: 19,
      title: 'WEDDING ARCHIVE 14',
      category: 'WEDDINGS',
      type: 'LUXURY WEDDING',
      location: 'DUBAI, UAE',
      image: 'https://res.cloudinary.com/aubynz6r/image/upload/Screenshot_2026-11-11_162145',
      format: 'LANDSCAPE',
      aspect: 'aspect-[16/10]',
      colSpan: 'lg:col-span-6',
      year: '2026',
    },
    {
      id: 20,
      title: 'WEDDING ARCHIVE 15',
      category: 'WEDDINGS',
      type: 'LUXURY WEDDING',
      location: 'DUBAI, UAE',
      image: 'https://res.cloudinary.com/aubynz6r/image/upload/Screenshot_2026-11-11_162903',
      format: 'LANDSCAPE',
      aspect: 'aspect-[16/10]',
      colSpan: 'lg:col-span-6',
      year: '2026',
    },
    {
      id: 21,
      title: 'WEDDING ARCHIVE 16',
      category: 'WEDDINGS',
      type: 'LUXURY WEDDING',
      location: 'DUBAI, UAE',
      image: 'https://res.cloudinary.com/aubynz6r/image/upload/Screenshot_2026-11-11_162920',
      format: 'LANDSCAPE',
      aspect: 'aspect-[16/10]',
      colSpan: 'lg:col-span-6',
      year: '2026',
    },
    {
      id: 22,
      title: 'BABY PHOTOSHOOT 01',
      category: 'BABY PHOTOSHOOT',
      type: 'BABY PORTRAIT',
      location: 'DUBAI, UAE',
      image: 'https://res.cloudinary.com/aubynz6r/image/upload/Screenshot_2026-11-11_153021',
      format: 'LANDSCAPE',
      aspect: 'aspect-[16/10]',
      colSpan: 'lg:col-span-6',
      year: '2026',
    },
    {
      id: 23,
      title: 'BABY PHOTOSHOOT 02',
      category: 'BABY PHOTOSHOOT',
      type: 'BABY PORTRAIT',
      location: 'DUBAI, UAE',
      image: 'https://res.cloudinary.com/aubynz6r/image/upload/Screenshot_2026-11-11_153112',
      format: 'LANDSCAPE',
      aspect: 'aspect-[16/10]',
      colSpan: 'lg:col-span-6',
      year: '2026',
    },
    {
      id: 24,
      title: 'BABY PHOTOSHOOT 03',
      category: 'BABY PHOTOSHOOT',
      type: 'BABY PORTRAIT',
      location: 'DUBAI, UAE',
      image: 'https://res.cloudinary.com/aubynz6r/image/upload/Screenshot_2026-11-11_153130',
      format: 'LANDSCAPE',
      aspect: 'aspect-[16/10]',
      colSpan: 'lg:col-span-6',
      year: '2026',
    },
    {
      id: 25,
      title: 'BABY PHOTOSHOOT 04',
      category: 'BABY PHOTOSHOOT',
      type: 'BABY PORTRAIT',
      location: 'DUBAI, UAE',
      image: 'https://res.cloudinary.com/aubynz6r/image/upload/Screenshot_2026-11-11_160608',
      format: 'LANDSCAPE',
      aspect: 'aspect-[16/10]',
      colSpan: 'lg:col-span-6',
      year: '2026',
    },
    {
      id: 26,
      title: 'BABY PHOTOSHOOT 05',
      category: 'BABY PHOTOSHOOT',
      type: 'BABY PORTRAIT',
      location: 'DUBAI, UAE',
      image: 'https://res.cloudinary.com/aubynz6r/image/upload/Screenshot_2026-11-11_160626',
      format: 'LANDSCAPE',
      aspect: 'aspect-[16/10]',
      colSpan: 'lg:col-span-6',
      year: '2026',
    },
    {
      id: 27,
      title: 'BABY PHOTOSHOOT 06',
      category: 'BABY PHOTOSHOOT',
      type: 'BABY PORTRAIT',
      location: 'DUBAI, UAE',
      image: 'https://res.cloudinary.com/aubynz6r/image/upload/Screenshot_2026-11-11_160648',
      format: 'LANDSCAPE',
      aspect: 'aspect-[16/10]',
      colSpan: 'lg:col-span-6',
      year: '2026',
    },
    {
      id: 28,
      title: 'CORPORATE MEETING 01',
      category: 'CORPORATE MEETING',
      type: 'CORPORATE EVENT',
      location: 'DUBAI, UAE',
      image: 'https://res.cloudinary.com/aubynz6r/image/upload/Screenshot_2026-11-11_152040',
      format: 'LANDSCAPE',
      aspect: 'aspect-[16/10]',
      colSpan: 'lg:col-span-6',
      year: '2026',
    },
    {
      id: 29,
      title: 'CORPORATE MEETING 02',
      category: 'CORPORATE MEETING',
      type: 'CORPORATE EVENT',
      location: 'DUBAI, UAE',
      image: 'https://res.cloudinary.com/aubynz6r/image/upload/Screenshot_2026-11-11_152724',
      format: 'LANDSCAPE',
      aspect: 'aspect-[16/10]',
      colSpan: 'lg:col-span-6',
      year: '2026',
    },
    {
      id: 30,
      title: 'CORPORATE MEETING 03',
      category: 'CORPORATE MEETING',
      type: 'CORPORATE EVENT',
      location: 'DUBAI, UAE',
      image: 'https://res.cloudinary.com/aubynz6r/image/upload/Screenshot_2026-11-11_141101',
      format: 'LANDSCAPE',
      aspect: 'aspect-[16/10]',
      colSpan: 'lg:col-span-6',
      year: '2026',
    },
    {
      id: 31,
      title: 'CORPORATE MEETING 04',
      category: 'CORPORATE MEETING',
      type: 'CORPORATE EVENT',
      location: 'DUBAI, UAE',
      image: 'https://res.cloudinary.com/aubynz6r/image/upload/Screenshot_2026-11-11_152742',
      format: 'LANDSCAPE',
      aspect: 'aspect-[16/10]',
      colSpan: 'lg:col-span-6',
      year: '2026',
    },
    {
      id: 32,
      title: 'CORPORATE MEETING 05',
      category: 'CORPORATE MEETING',
      type: 'CORPORATE EVENT',
      location: 'DUBAI, UAE',
      image: 'https://res.cloudinary.com/aubynz6r/image/upload/Screenshot_2026-11-11_152825',
      format: 'LANDSCAPE',
      aspect: 'aspect-[16/10]',
      colSpan: 'lg:col-span-6',
      year: '2026',
    },
    {
      id: 33,
      title: 'CORPORATE MEETING 06',
      category: 'CORPORATE MEETING',
      type: 'CORPORATE EVENT',
      location: 'DUBAI, UAE',
      image: 'https://res.cloudinary.com/aubynz6r/image/upload/Screenshot_2026-11-11_152757',
      format: 'LANDSCAPE',
      aspect: 'aspect-[16/10]',
      colSpan: 'lg:col-span-6',
      year: '2026',
    },
    {
      id: 34,
      title: 'CORPORATE MEETING 07',
      category: 'CORPORATE MEETING',
      type: 'CORPORATE EVENT',
      location: 'DUBAI, UAE',
      image: 'https://res.cloudinary.com/aubynz6r/image/upload/Screenshot_2026-11-11_152809',
      format: 'LANDSCAPE',
      aspect: 'aspect-[16/10]',
      colSpan: 'lg:col-span-6',
      year: '2026',
    },
    {
      id: 35,
      title: 'PAGANI REAL ESTATE 01',
      category: 'Real Estate Photography | Pagani | 2022',
      type: 'REAL ESTATE PHOTOGRAPHY',
      location: 'DUBAI, UAE',
      image: 'https://res.cloudinary.com/aubynz6r/image/upload/Screenshot_2026-11-11_124935',
      format: 'LANDSCAPE',
      aspect: 'aspect-[16/10]',
      colSpan: 'lg:col-span-6',
      year: '2022',
    },
    {
      id: 36,
      title: 'PAGANI REAL ESTATE 02',
      category: 'Real Estate Photography | Pagani | 2022',
      type: 'REAL ESTATE PHOTOGRAPHY',
      location: 'DUBAI, UAE',
      image: 'https://res.cloudinary.com/aubynz6r/image/upload/Screenshot_2026-11-11_124955',
      format: 'LANDSCAPE',
      aspect: 'aspect-[16/10]',
      colSpan: 'lg:col-span-6',
      year: '2022',
    },
    {
      id: 37,
      title: 'PAGANI REAL ESTATE 03',
      category: 'Real Estate Photography | Pagani | 2022',
      type: 'REAL ESTATE PHOTOGRAPHY',
      location: 'DUBAI, UAE',
      image: 'https://res.cloudinary.com/aubynz6r/image/upload/Screenshot_2026-11-11_124920',
      format: 'LANDSCAPE',
      aspect: 'aspect-[16/10]',
      colSpan: 'lg:col-span-6',
      year: '2022',
    },
    {
      id: 38,
      title: 'PAGANI REAL ESTATE 04',
      category: 'Real Estate Photography | Pagani | 2022',
      type: 'REAL ESTATE PHOTOGRAPHY',
      location: 'DUBAI, UAE',
      image: 'https://res.cloudinary.com/aubynz6r/image/upload/Screenshot_2026-11-11_130652',
      format: 'LANDSCAPE',
      aspect: 'aspect-[16/10]',
      colSpan: 'lg:col-span-6',
      year: '2022',
    },
    {
      id: 39,
      title: 'MODEL SHOOT 01',
      category: 'MODEL SHOOT',
      type: 'EDITORIAL FASHION',
      location: 'DUBAI, UAE',
      image: 'https://res.cloudinary.com/aubynz6r/image/upload/Screenshot_2026-11-11_114554',
      format: 'LANDSCAPE',
      aspect: 'aspect-[16/10]',
      colSpan: 'lg:col-span-6',
      year: '2026',
    },
    {
      id: 40,
      title: 'MODEL SHOOT 02',
      category: 'MODEL SHOOT',
      type: 'EDITORIAL FASHION',
      location: 'DUBAI, UAE',
      image: 'https://res.cloudinary.com/aubynz6r/image/upload/Screenshot_2026-11-11_114609',
      format: 'LANDSCAPE',
      aspect: 'aspect-[16/10]',
      colSpan: 'lg:col-span-6',
      year: '2026',
    },
    {
      id: 41,
      title: 'MODEL SHOOT 03',
      category: 'MODEL SHOOT',
      type: 'EDITORIAL FASHION',
      location: 'DUBAI, UAE',
      image: 'https://res.cloudinary.com/aubynz6r/image/upload/Screenshot_2026-11-11_114622',
      format: 'LANDSCAPE',
      aspect: 'aspect-[16/10]',
      colSpan: 'lg:col-span-6',
      year: '2026',
    },
    {
      id: 42,
      title: 'MODEL SHOOT 04',
      category: 'MODEL SHOOT',
      type: 'EDITORIAL FASHION',
      location: 'DUBAI, UAE',
      image: 'https://res.cloudinary.com/aubynz6r/image/upload/Screenshot_2026-11-11_114700',
      format: 'LANDSCAPE',
      aspect: 'aspect-[16/10]',
      colSpan: 'lg:col-span-6',
      year: '2026',
    },
    {
      id: 43,
      title: 'MODEL SHOOT 05',
      category: 'MODEL SHOOT',
      type: 'EDITORIAL FASHION',
      location: 'DUBAI, UAE',
      image: 'https://res.cloudinary.com/aubynz6r/image/upload/Screenshot_2026-11-11_114743',
      format: 'LANDSCAPE',
      aspect: 'aspect-[16/10]',
      colSpan: 'lg:col-span-6',
      year: '2026',
    },
    {
      id: 44,
      title: 'MODEL SHOOT 06',
      category: 'MODEL SHOOT',
      type: 'EDITORIAL FASHION',
      location: 'DUBAI, UAE',
      image: 'https://res.cloudinary.com/aubynz6r/image/upload/Screenshot_2026-11-11_122833',
      format: 'LANDSCAPE',
      aspect: 'aspect-[16/10]',
      colSpan: 'lg:col-span-6',
      year: '2026',
    },
    {
      id: 45,
      title: 'MODEL SHOOT 07',
      category: 'MODEL SHOOT',
      type: 'EDITORIAL FASHION',
      location: 'DUBAI, UAE',
      image: 'https://res.cloudinary.com/aubynz6r/image/upload/Screenshot_2026-11-11_115020',
      format: 'LANDSCAPE',
      aspect: 'aspect-[16/10]',
      colSpan: 'lg:col-span-6',
      year: '2026',
    },
    {
      id: 46,
      title: 'MODEL SHOOT 08',
      category: 'MODEL SHOOT',
      type: 'EDITORIAL FASHION',
      location: 'DUBAI, UAE',
      image: 'https://res.cloudinary.com/aubynz6r/image/upload/Screenshot_2026-11-11_122814',
      format: 'LANDSCAPE',
      aspect: 'aspect-[16/10]',
      colSpan: 'lg:col-span-6',
      year: '2026',
    },
    {
      id: 47,
      title: 'MODEL SHOOT 09',
      category: 'MODEL SHOOT',
      type: 'EDITORIAL FASHION',
      location: 'DUBAI, UAE',
      image: 'https://res.cloudinary.com/aubynz6r/image/upload/Screenshot_2026-11-11_122905',
      format: 'LANDSCAPE',
      aspect: 'aspect-[16/10]',
      colSpan: 'lg:col-span-6',
      year: '2026',
    },
    {
      id: 48,
      title: 'MODEL SHOOT 10',
      category: 'MODEL SHOOT',
      type: 'EDITORIAL FASHION',
      location: 'DUBAI, UAE',
      image: 'https://res.cloudinary.com/aubynz6r/image/upload/Screenshot_2026-11-11_122918',
      format: 'LANDSCAPE',
      aspect: 'aspect-[16/10]',
      colSpan: 'lg:col-span-6',
      year: '2026',
    },
    {
      id: 49,
      title: 'MODEL SHOOT 11',
      category: 'MODEL SHOOT',
      type: 'EDITORIAL FASHION',
      location: 'DUBAI, UAE',
      image: 'https://res.cloudinary.com/aubynz6r/image/upload/Screenshot_2026-11-11_122851',
      format: 'LANDSCAPE',
      aspect: 'aspect-[16/10]',
      colSpan: 'lg:col-span-6',
      year: '2026',
    },
    {
      id: 50,
      title: 'MODEL SHOOT 12',
      category: 'MODEL SHOOT',
      type: 'EDITORIAL FASHION',
      location: 'DUBAI, UAE',
      image: 'https://res.cloudinary.com/aubynz6r/image/upload/Screenshot_2026-11-11_122940',
      format: 'LANDSCAPE',
      aspect: 'aspect-[16/10]',
      colSpan: 'lg:col-span-6',
      year: '2026',
    },
  ];

  const filteredProjects = filter === 'ALL'
    ? projects
    : projects.filter((p) => p.category === filter);

  return (
    <section id="portfolio-section" className="pt-4 sm:pt-6 pb-6 sm:pb-8 bg-[#F6F4EF] border-b border-[#DEDCD6]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 pb-6 border-b border-[#DEDCD6]">
          <div>
            <div className="flex items-center gap-2 mb-2 font-mono text-xs uppercase tracking-widest text-[#B69A6A]">
              <span>// ARCHIVE</span>
              <span>•</span>
              <span>SELECTED WORK</span>
            </div>
            <h2 className="font-serif text-4xl sm:text-6xl font-normal uppercase tracking-tight text-[#151515] leading-[1.08]">
              A FEW MOMENTS
              <br />
              <span className="font-serif italic font-normal text-[#B69A6A] lowercase">
                we've
              </span>{' '}
              KEPT.
            </h2>
          </div>

          <div className="mt-6 md:mt-0 max-w-sm">
            <p className="text-sm text-[#666666] font-light">
              Stories we have had the distinct privilege of capturing across photography, cinema, broadcast, and experiential mediums.
            </p>
          </div>
        </div>

        {/* Category Filter Buttons */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-4 mb-12 sm:mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 text-xs font-mono uppercase tracking-wider border transition-all duration-300 ${filter === cat
                  ? 'bg-[#151515] text-[#F6F4EF] border-[#151515]'
                  : 'bg-white text-[#666666] border-[#DEDCD6] hover:border-[#151515] hover:text-[#151515]'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Editorial Grid - 3 columns on desktop, 2 on tablet, 1 on mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-6 items-start">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="w-full relative"
              >
                <div
                  className="relative bg-white p-2.5 sm:p-3 border border-[#DEDCD6] shadow-editorial cursor-pointer overflow-hidden transition-transform duration-300 hover:-translate-y-1"
                  onClick={() => onOpenProjectModal?.(project)}
                >
                  {/* Subtle Viewfinder Frame Markers */}
                  <div className="absolute top-2 left-2 w-2.5 h-2.5 border-t border-l border-[#151515]/30 pointer-events-none z-20" />
                  <div className="absolute top-2 right-2 w-2.5 h-2.5 border-t border-r border-[#151515]/30 pointer-events-none z-20" />
                  <div className="absolute bottom-2 left-2 w-2.5 h-2.5 border-b border-l border-[#151515]/30 pointer-events-none z-20" />
                  <div className="absolute bottom-2 right-2 w-2.5 h-2.5 border-b border-r border-[#151515]/30 pointer-events-none z-20" />

                  {/* Clean Image Container */}
                  <div className="relative w-full overflow-hidden bg-transparent">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-auto block"
                      loading="lazy"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* View All Work CTA */}
        <div className="mt-6 sm:mt-8 text-center">
          <button
            onClick={() => onOpenBooking('All Works')}
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#151515] text-[#F6F4EF] hover:bg-[#B69A6A] hover:text-[#151515] transition-all duration-300 font-mono text-xs uppercase tracking-[0.25em] shadow-editorial group"
          >
            <span>VIEW ALL WORK ARCHIVE</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </button>
        </div>
      </div>
    </section>
  );
}
