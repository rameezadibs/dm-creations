import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Volume2, Maximize, Film } from 'lucide-react';

export default function VideoModal({ isOpen, onClose, videoUrl = 'https://www.youtube.com/embed/4J1SNIb0Qyo?autoplay=1&rel=0' }) {
  const isYouTube = videoUrl && (videoUrl.includes('youtube.com') || videoUrl.includes('youtu.be'));
  
  // Format embed URL if necessary
  const getEmbedUrl = (url) => {
    if (!url) return 'https://www.youtube.com/embed/4J1SNIb0Qyo?autoplay=1&rel=0';
    if (url.includes('embed/')) return url.includes('autoplay') ? url : `${url}?autoplay=1&rel=0`;
    if (url.includes('youtu.be/')) {
      const id = url.split('youtu.be/')[1].split('?')[0];
      return `https://www.youtube.com/embed/${id}?autoplay=1&rel=0`;
    }
    if (url.includes('watch?v=')) {
      const id = url.split('watch?v=')[1].split('&')[0];
      return `https://www.youtube.com/embed/${id}?autoplay=1&rel=0`;
    }
    return url;
  };

  const embedUrl = isYouTube ? getEmbedUrl(videoUrl) : videoUrl;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-10">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/95 backdrop-blur-xl"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ type: 'spring', damping: 25, stiffness: 250 }}
            className="relative w-full max-w-5xl bg-[#111111] border border-white/10 shadow-cinematic z-10 overflow-hidden"
          >
            {/* Top Bar with Cinema Metadata */}
            <div className="flex items-center justify-between px-4 sm:px-6 py-3 border-b border-white/10 text-white/70 text-xs font-mono">
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1.5 text-red-500">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                  CINEMA 4K DCI
                </span>
                <span className="hidden sm:inline text-white/30">|</span>
                <span className="hidden sm:inline">24.000 FPS • PRORES 422 HQ</span>
              </div>
              <button
                onClick={onClose}
                className="p-1 rounded hover:bg-white/10 transition-colors text-white"
                aria-label="Close video"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Video Player Area */}
            <div className="relative aspect-video bg-black flex items-center justify-center overflow-hidden">
              {isYouTube ? (
                <iframe
                  src={embedUrl}
                  title="DM Creation Cinematic Videography"
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              ) : (
                <video
                  src={embedUrl}
                  poster="/images/showreel-thumb.jpg"
                  controls
                  autoPlay
                  className="w-full h-full object-cover"
                />
              )}

              {/* Viewfinder subtle crosshair overlay on corners */}
              <div className="absolute top-4 left-4 w-4 h-4 border-t border-l border-white/30 pointer-events-none" />
              <div className="absolute top-4 right-4 w-4 h-4 border-t border-r border-white/30 pointer-events-none" />
              <div className="absolute bottom-4 left-4 w-4 h-4 border-b border-l border-white/30 pointer-events-none" />
              <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-white/30 pointer-events-none" />
            </div>

            {/* Bottom Info Bar */}
            <div className="px-4 sm:px-6 py-3 flex items-center justify-between bg-[#151515] border-t border-white/10 text-white/60 text-[11px] font-mono">
              <span>DM CREATION • DIRECTOR'S CUT 2026</span>
              <span className="text-[#B69A6A]">DUBAI / GLOBAL PRODUCTIONS</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
