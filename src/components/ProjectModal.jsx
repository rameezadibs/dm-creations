import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowUpRight, Camera, MapPin, Calendar, Layers } from 'lucide-react';

export default function ProjectModal({ project, onClose, onOpenBooking }) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-[#111111]/90 backdrop-blur-md"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 280 }}
          className="relative w-full max-w-4xl bg-[#F6F4EF] text-[#151515] p-6 sm:p-10 border border-[#DEDCD6] shadow-cinematic z-10 max-h-[90vh] overflow-y-auto"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-full hover:bg-black/5 text-[#151515] transition-colors"
            aria-label="Close project modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Corner Viewfinder Marks */}
          <div className="absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 border-[#151515]/40 pointer-events-none" />
          <div className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 border-[#151515]/40 pointer-events-none" />
          <div className="absolute bottom-3 left-3 w-3 h-3 border-b-2 border-l-2 border-[#151515]/40 pointer-events-none" />
          <div className="absolute bottom-3 right-3 w-3 h-3 border-b-2 border-r-2 border-[#151515]/40 pointer-events-none" />

          {/* Header */}
          <div className="mb-6">
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#B69A6A] uppercase mb-2">
              <span>{project.category}</span>
              <span>•</span>
              <span>{project.type}</span>
            </div>
            <h3 className="text-3xl sm:text-5xl font-bold uppercase tracking-tight text-[#151515]">
              {project.title}
            </h3>
          </div>

          {/* Image Feature */}
          <div className="relative aspect-[16/10] overflow-hidden bg-black mb-6 border border-[#DEDCD6]">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Metadata Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 bg-white border border-[#DEDCD6] mb-6 text-xs font-mono">
            <div>
              <span className="text-[#9E9C96] block mb-1">LOCATION</span>
              <span className="font-semibold text-[#151515]">{project.location}</span>
            </div>
            <div>
              <span className="text-[#9E9C96] block mb-1">YEAR</span>
              <span className="font-semibold text-[#151515]">{project.year}</span>
            </div>
            <div>
              <span className="text-[#9E9C96] block mb-1">FORMAT</span>
              <span className="font-semibold text-[#151515]">RAW 4K / 35MM OPTICS</span>
            </div>
            <div>
              <span className="text-[#9E9C96] block mb-1">PRODUCTION</span>
              <span className="font-semibold text-[#B69A6A]">DM CREATION</span>
            </div>
          </div>

          <p className="text-sm sm:text-base text-[#666666] font-light leading-relaxed mb-8">
            Comprehensive creative direction and live production executed with bespoke camera framing, color grading, and archival-grade post-production. Designed to deliver impact both during live proceedings and across long-term editorial retrospectives.
          </p>

          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[#DEDCD6]">
            <span className="text-xs font-mono text-[#9E9C96]">
              [PROJECT ID: DM-EXP-{project.id}]
            </span>
            <button
              onClick={() => {
                onClose();
                onOpenBooking(project.title);
              }}
              className="px-6 py-3 bg-[#151515] text-[#F6F4EF] hover:bg-[#B69A6A] hover:text-[#151515] text-xs font-mono uppercase tracking-widest font-semibold transition-all inline-flex items-center gap-2"
            >
              <span>INQUIRE ABOUT THIS STYLE</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
