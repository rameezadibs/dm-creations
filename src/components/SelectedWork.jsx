import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Camera, Film, Radio, RotateCw, Plus } from 'lucide-react';
import { useCursor } from '../context/CursorContext';

export default function SelectedWork({ onOpenBooking, onOpenProjectModal }) {
  const { setCursor, resetCursor } = useCursor();
  const [filter, setFilter] = useState('ALL');

  const categories = ['ALL', 'PHOTOGRAPHY', 'FILM', 'LIVE STREAM', '360° BOOTH'];

  const projects = [
    {
      id: 1,
      title: 'THE ROYAL PALM GALA',
      category: 'PHOTOGRAPHY',
      type: 'EVENT PHOTOGRAPHY',
      location: 'DUBAI, UAE',
      image: '/images/work-1.jpg',
      format: 'LANDSCAPE',
      aspect: 'aspect-[16/10]',
      colSpan: 'lg:col-span-8',
      year: '2026',
    },
    {
      id: 2,
      title: 'NOMAD: COUTURE STILLS',
      category: 'PHOTOGRAPHY',
      type: 'EDITORIAL PORTRAIT',
      location: 'AL QUDRA DESERT',
      image: '/images/work-2.jpg',
      format: 'PORTRAIT',
      aspect: 'aspect-[3/4]',
      colSpan: 'lg:col-span-4',
      year: '2026',
    },
    {
      id: 3,
      title: 'TWILIGHT HARBOR VOWS',
      category: 'PHOTOGRAPHY',
      type: 'DESTINATION EVENT',
      location: 'BULGARI RESORT',
      image: '/images/work-3.jpg',
      format: 'PORTRAIT',
      aspect: 'aspect-[4/5]',
      colSpan: 'lg:col-span-5',
      year: '2026',
    },
    {
      id: 4,
      title: 'APEX GLOBAL SUMMIT',
      category: 'LIVE STREAM',
      type: 'MULTI-CAM BROADCAST',
      location: 'DUBAI OPERA',
      image: '/images/work-4.jpg',
      format: 'LANDSCAPE',
      aspect: 'aspect-[16/10]',
      colSpan: 'lg:col-span-7',
      year: '2026',
    },
    {
      id: 5,
      title: 'NOCTURNE SOUND FESTIVAL',
      category: 'FILM',
      type: 'CINEMATIC SHOWREEL',
      location: 'ABU DHABI',
      image: '/images/work-5.jpg',
      format: 'FULL_WIDTH',
      aspect: 'aspect-[21/9]',
      colSpan: 'lg:col-span-12',
      year: '2026',
    },
    {
      id: 6,
      title: 'METAVERSE 360 IMMERSION',
      category: '360° BOOTH',
      type: 'INTERACTIVE BOOTH',
      location: 'DIFC',
      image: '/images/work-6.jpg',
      format: 'LANDSCAPE',
      aspect: 'aspect-[16/9]',
      colSpan: 'lg:col-span-12',
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
            <h2 className="text-4xl sm:text-6xl font-bold uppercase tracking-tight text-[#151515]">
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
              className={`px-4 py-2 text-xs font-mono uppercase tracking-wider border transition-all duration-300 ${
                filter === cat
                  ? 'bg-[#151515] text-[#F6F4EF] border-[#151515]'
                  : 'bg-white text-[#666666] border-[#DEDCD6] hover:border-[#151515] hover:text-[#151515]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Irregular Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className={`${project.colSpan} group relative`}
              >
                <div
                  className="relative bg-white p-3 sm:p-4 border border-[#DEDCD6] shadow-editorial cursor-pointer overflow-hidden"
                  onMouseEnter={() => setCursor('view', 'VIEW ↗')}
                  onMouseLeave={resetCursor}
                  onClick={() => onOpenProjectModal?.(project)}
                >
                  {/* Subtle Viewfinder Frame Markers */}
                  <div className="absolute top-2 left-2 w-3 h-3 border-t border-l border-[#151515]/30 pointer-events-none z-20" />
                  <div className="absolute top-2 right-2 w-3 h-3 border-t border-r border-[#151515]/30 pointer-events-none z-20" />
                  <div className="absolute bottom-2 left-2 w-3 h-3 border-b border-l border-[#151515]/30 pointer-events-none z-20" />
                  <div className="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-[#151515]/30 pointer-events-none z-20" />

                  {/* Image Container with Hover Scale */}
                  <div className={`relative ${project.aspect} overflow-hidden bg-[#151515]`}>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover img-hover-scale"
                      loading="lazy"
                    />

                    {/* Dark Editorial Overlay that reveals on hover */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-between p-6 sm:p-8 text-white z-10 backdrop-blur-[2px]">
                      {/* Top Bar */}
                      <div className="flex items-center justify-between font-mono text-[11px] tracking-widest text-[#B69A6A]">
                        <span>[EXP {index + 1} / 06]</span>
                        <span>{project.location}</span>
                      </div>

                      {/* Center / Bottom Info */}
                      <div>
                        <span className="text-xs font-mono uppercase tracking-widest text-white/70 block mb-1">
                          {project.type}
                        </span>
                        <h4 className="text-2xl sm:text-4xl font-bold uppercase tracking-tight text-[#F6F4EF] mb-4">
                          {project.title}
                        </h4>
                        <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#B69A6A] font-semibold border-b border-[#B69A6A] pb-1">
                          <span>VIEW PROJECT</span>
                          <ArrowUpRight className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Static Editorial Caption Below Image */}
                  <div className="mt-3 sm:mt-4 flex items-center justify-between text-xs font-mono">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-[#151515] uppercase tracking-wider">
                        {project.title}
                      </span>
                      <span className="text-[#9E9C96]">•</span>
                      <span className="text-[#666666] text-[11px] uppercase">
                        {project.type}
                      </span>
                    </div>
                    <span className="text-[#9E9C96] text-[11px]">
                      {project.year}
                    </span>
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
