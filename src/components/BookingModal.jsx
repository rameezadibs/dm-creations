import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, ArrowUpRight, Camera, Video, Radio, RotateCw } from 'lucide-react';

export default function BookingModal({ isOpen, onClose, defaultService = 'Photography' }) {
  const [selectedService, setSelectedService] = useState(defaultService);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    details: '',
  });

  const services = [
    { id: 'Photography', label: 'Photography', icon: Camera },
    { id: 'Videography', label: 'Videography', icon: Video },
    { id: 'Live Streaming', label: 'Live Streaming', icon: Radio },
    { id: '360° Booth', label: '360° Booth', icon: RotateCw },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      // simulate inquiry sent
    }, 400);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#111111]/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-2xl bg-[#F6F4EF] text-[#151515] p-6 sm:p-10 shadow-cinematic border border-[#DEDCD6] z-10 overflow-hidden"
          >
            {/* Viewfinder corner crop marks */}
            <div className="absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 border-[#151515]/40 pointer-events-none" />
            <div className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 border-[#151515]/40 pointer-events-none" />
            <div className="absolute bottom-3 left-3 w-3 h-3 border-bottom-2 border-l-2 border-[#151515]/40 pointer-events-none" />
            <div className="absolute bottom-3 right-3 w-3 h-3 border-bottom-2 border-r-2 border-[#151515]/40 pointer-events-none" />

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-2 rounded-full hover:bg-[#151515]/5 transition-colors text-[#151515]"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {!submitted ? (
              <div>
                <div className="mb-6">
                  <div className="flex items-center gap-2 text-[11px] font-mono tracking-widest text-[#B69A6A] uppercase mb-1">
                    <span>// INQUIRY DESK</span>
                    <span>•</span>
                    <span>DM CREATION</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold tracking-tight uppercase">
                    Book A <span className="font-serif italic font-normal text-[#B69A6A]">Shoot</span>
                  </h3>
                  <p className="text-sm text-[#666666] mt-1 font-light">
                    Tell us about your moment, scale, and creative vision. We respond within 24 hours.
                  </p>
                </div>

                {/* Service Selection */}
                <div className="mb-6">
                  <label className="block text-[11px] font-mono uppercase tracking-wider text-[#666666] mb-2">
                    SELECT SERVICE
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {services.map((item) => {
                      const Icon = item.icon;
                      const isSelected = selectedService === item.id;
                      return (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => setSelectedService(item.id)}
                          className={`flex items-center gap-2 p-2.5 text-xs font-medium border transition-all text-left ${
                            isSelected
                              ? 'bg-[#151515] text-[#F6F4EF] border-[#151515]'
                              : 'bg-white text-[#151515] border-[#DEDCD6] hover:border-[#151515]'
                          }`}
                        >
                          <Icon className={`w-3.5 h-3.5 ${isSelected ? 'text-[#B69A6A]' : 'text-[#666666]'}`} />
                          <span className="truncate">{item.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Form Fields */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-mono uppercase tracking-wider text-[#666666] mb-1">
                        YOUR NAME *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Maya Al Mansoor"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-white border border-[#DEDCD6] focus:border-[#151515] focus:outline-none text-sm transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-mono uppercase tracking-wider text-[#666666] mb-1">
                        EMAIL ADDRESS *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="maya@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-white border border-[#DEDCD6] focus:border-[#151515] focus:outline-none text-sm transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-mono uppercase tracking-wider text-[#666666] mb-1">
                        PHONE / WHATSAPP
                      </label>
                      <input
                        type="tel"
                        placeholder="+971 50 000 0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-white border border-[#DEDCD6] focus:border-[#151515] focus:outline-none text-sm transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-mono uppercase tracking-wider text-[#666666] mb-1">
                        EVENT / SHOOT DATE
                      </label>
                      <input
                        type="date"
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-white border border-[#DEDCD6] focus:border-[#151515] focus:outline-none text-sm transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-[#666666] mb-1">
                      PROJECT DETAILS & VISION
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Tell us about the location, mood, coverage hours, or specific requirements..."
                      value={formData.details}
                      onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-white border border-[#DEDCD6] focus:border-[#151515] focus:outline-none text-sm transition-colors resize-none"
                    />
                  </div>

                  <div className="pt-2 flex items-center justify-between">
                    <span className="text-[11px] font-mono text-[#9E9C96]">
                      [FRAME READY: 24h RESPONSE]
                    </span>
                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-[#151515] text-[#F6F4EF] hover:bg-[#B69A6A] hover:text-[#151515] transition-all duration-300 text-xs font-mono uppercase tracking-widest"
                    >
                      <span>SUBMIT INQUIRY</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>
                </form>
              </div>
            ) : (
              <div className="py-12 text-center">
                <CheckCircle2 className="w-12 h-12 text-[#B69A6A] mx-auto mb-4" />
                <h3 className="text-2xl font-bold uppercase tracking-tight mb-2">
                  Inquiry Received
                </h3>
                <p className="text-sm text-[#666666] max-w-md mx-auto mb-6">
                  Thank you, <span className="font-semibold text-[#151515]">{formData.name || 'Friend'}</span>. Our creative director will review your event date and get back to you with custom framing options.
                </p>
                <button
                  onClick={handleReset}
                  className="px-6 py-2.5 bg-[#151515] text-[#F6F4EF] text-xs font-mono uppercase tracking-widest hover:bg-[#B69A6A] hover:text-[#151515] transition-colors"
                >
                  CLOSE
                </button>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
