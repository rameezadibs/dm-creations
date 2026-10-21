import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, Camera } from 'lucide-react';

export default function Navbar({ onOpenBooking }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkSection, setIsDarkSection] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      setIsScrolled(scrollPos > 40);

      // Detect if user has scrolled into any dark section (Visual Statement, Showreel, Experience, Social Strip, Footer)
      const darkSections = document.querySelectorAll('.dark-section, #footer-section');
      const navTriggerY = 70; // Pixel offset where navbar checks background

      let inDark = false;
      darkSections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= navTriggerY && rect.bottom >= navTriggerY) {
          inDark = true;
        }
      });

      setIsDarkSection(inDark);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scrolling when mobile menu is active
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Contact', href: '/contact' },
  ];

  const isDarkTheme = isDarkSection;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? isDarkTheme
              ? 'py-3.5 bg-[#111111]/90 backdrop-blur-md border-b border-white/10'
              : 'py-3.5 bg-[#F6F4EF]/90 backdrop-blur-md border-b border-[#DEDCD6]/80 shadow-subtle'
            : 'py-6 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo Treatment */}
            <Link
              to="/"
              className="flex items-center group focus:outline-none"
              aria-label="DM Creation Home"
            >
              <div className="relative h-12 sm:h-14 w-auto flex items-center">
                <img
                  src={isDarkTheme ? '/dm-logo-white.png' : '/dm-logo-black.png'}
                  alt="DM Creation Logo"
                  className="h-12 sm:h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.href;
                return (
                  <Link
                    key={link.label}
                    to={link.href}
                    className={`relative text-xs font-mono uppercase tracking-[0.2em] transition-colors py-1 ${
                      isDarkTheme
                        ? isActive
                          ? 'text-[#F6F4EF] font-semibold'
                          : 'text-white/70 hover:text-white'
                        : isActive
                        ? 'text-[#151515] font-semibold'
                        : 'text-[#666666] hover:text-[#151515]'
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <motion.div
                        layoutId="navUnderline"
                        className={`absolute bottom-0 left-0 right-0 h-[1.5px] ${isDarkTheme ? 'bg-[#B69A6A]' : 'bg-[#151515]'}`}
                        transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* CTA + Mobile Menu Button */}
            <div className="flex items-center space-x-4">
              <button
                onClick={onOpenBooking}
                className={`hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-xs font-mono uppercase tracking-widest border transition-all duration-300 group ${
                  isDarkTheme
                    ? 'bg-transparent text-[#F6F4EF] border-white/20 hover:border-[#B69A6A] hover:text-[#B69A6A]'
                    : 'bg-[#151515] text-[#F6F4EF] border-[#151515] hover:bg-transparent hover:text-[#151515]'
                }`}
              >
                <span>BOOK A SHOOT</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>

              {/* Hamburger Button for Mobile */}
              <button
                onClick={() => setMobileMenuOpen(true)}
                className={`md:hidden p-2 rounded focus:outline-none transition-colors ${
                  isDarkTheme ? 'text-white hover:bg-white/10' : 'text-[#151515] hover:bg-[#151515]/5'
                }`}
                aria-label="Open mobile menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Fullscreen Editorial Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-50 bg-[#111111] text-[#F6F4EF] flex flex-col justify-between p-6 sm:p-10"
          >
            {/* Top Bar inside Menu */}
            <div className="flex items-center justify-between border-b border-white/10 pb-6">
              <div className="flex items-center gap-3">
                <img
                  src="/dm-logo-white.png"
                  alt="DM Creation Logo"
                  className="h-9 w-auto object-contain"
                />
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-full border border-white/20 hover:border-white transition-colors"
                aria-label="Close mobile menu"
              >
                <X className="w-6 h-6 text-white" />
              </button>
            </div>

            {/* Large Typography Navigation Links */}
            <div className="my-auto py-8 space-y-6">
              <span className="text-[11px] font-mono text-[#B69A6A] uppercase tracking-widest block mb-4">
                // NAVIGATION
              </span>
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * idx, duration: 0.4 }}
                >
                  <Link
                    to={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="group flex items-center justify-between text-3xl sm:text-5xl font-bold tracking-tight uppercase hover:text-[#B69A6A] transition-colors"
                  >
                    <span>{link.label}</span>
                    <span className="text-sm font-mono text-white/30 font-normal group-hover:text-[#B69A6A] transition-colors">
                      0{idx + 1}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Mobile Footer & CTA */}
            <div className="border-t border-white/10 pt-6 space-y-4">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full flex items-center justify-center gap-2 py-4 bg-[#F6F4EF] text-[#151515] font-mono uppercase tracking-widest text-sm font-semibold hover:bg-[#B69A6A] transition-colors"
              >
                <span>BOOK A SHOOT</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <div className="flex justify-between items-center text-[11px] font-mono text-white/50 pt-2">
                <span>PHOTOGRAPHY • FILM • LIVE • 360°</span>
                <span>DM CREATION</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
