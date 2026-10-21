import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useCursor } from '../context/CursorContext';

export default function CustomCursor() {
  const { cursorType, cursorText } = useCursor();
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [isPointerHovered, setIsPointerHovered] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Precision spring physics
  const dotSpringConfig = { damping: 45, stiffness: 600, mass: 0.15 };
  const ringSpringConfig = { damping: 28, stiffness: 280, mass: 0.4 };

  const dotX = useSpring(mouseX, dotSpringConfig);
  const dotY = useSpring(mouseY, dotSpringConfig);
  const ringX = useSpring(mouseX, ringSpringConfig);
  const ringY = useSpring(mouseY, ringSpringConfig);

  useEffect(() => {
    // Disable custom cursor on touch devices, coarse pointers, or mobile viewports
    const checkIsMobileOrTouch = () => {
      const isTouch = window.matchMedia('(pointer: coarse)').matches || 
                      'ontouchstart' in window || 
                      navigator.maxTouchPoints > 0 ||
                      window.innerWidth < 1024;
      setIsTouchDevice(isTouch);
      return isTouch;
    };

    if (checkIsMobileOrTouch()) {
      return;
    }

    const handleResize = () => {
      if (checkIsMobileOrTouch()) {
        setIsVisible(false);
      }
    };

    const handleMouseMove = (e) => {
      if (checkIsMobileOrTouch()) return;
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);

      // Check if hovering clickable interactive elements
      const target = e.target;
      const isInteractive = target && (
        target.closest('button') ||
        target.closest('a') ||
        target.closest('[role="button"]') ||
        target.closest('.cursor-pointer') ||
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA' ||
        target.tagName === 'SELECT'
      );
      setIsPointerHovered(Boolean(isInteractive));
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [mouseX, mouseY, isVisible]);

  if (isTouchDevice || !isVisible) return null;

  // Render contextual cursor states
  const isCustomState = cursorType !== 'default';

  return (
    <>
      {/* Outer Viewfinder Targeting Ring / Action Capsule */}
      <motion.div
        className="hidden lg:flex fixed top-0 left-0 pointer-events-none z-[9999] items-center justify-center font-mono select-none"
        style={{
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      >
        <motion.div
          animate={{
            width: isCustomState ? 86 : isPointerHovered ? 44 : 28,
            height: isCustomState ? 86 : isPointerHovered ? 44 : 28,
            backgroundColor: isCustomState
              ? 'rgba(17, 17, 17, 0.95)'
              : isPointerHovered
              ? 'rgba(182, 154, 106, 0.15)'
              : 'rgba(21, 21, 21, 0.08)',
            borderColor: isCustomState
              ? '#B69A6A'
              : isPointerHovered
              ? '#B69A6A'
              : 'rgba(21, 21, 21, 0.4)',
            borderWidth: isCustomState ? 1.5 : isPointerHovered ? 1.5 : 1,
            scale: 1,
          }}
          transition={{ type: 'spring', damping: 25, stiffness: 350 }}
          className="rounded-full flex items-center justify-center text-center shadow-lg backdrop-blur-[2px] relative"
        >
          {/* Subtle Viewfinder Crosshair Ticks when idle or hovering */}
          {!isCustomState && (
            <>
              <div className="absolute -top-1 w-1.5 h-[1.5px] bg-[#B69A6A]" />
              <div className="absolute -bottom-1 w-1.5 h-[1.5px] bg-[#B69A6A]" />
              <div className="absolute -left-1 h-1.5 w-[1.5px] bg-[#B69A6A]" />
              <div className="absolute -right-1 h-1.5 w-[1.5px] bg-[#B69A6A]" />
            </>
          )}

          {/* Action text for interactive media items */}
          {isCustomState && (
            <motion.div
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.7 }}
              className="px-2 flex flex-col items-center justify-center"
            >
              <span className="text-[10px] tracking-[0.2em] font-bold text-[#B69A6A] uppercase">
                {cursorText || (cursorType === 'view' ? 'VIEW ↗' : cursorType === 'play' ? 'PLAY ▶' : 'SPIN ↻')}
              </span>
              <span className="text-[7px] text-[#F6F4EF]/50 tracking-widest uppercase">
                DM CREATION
              </span>
            </motion.div>
          )}
        </motion.div>
      </motion.div>

      {/* Center Precision Optics Dot (Always Dark Obsidian / Champagne) */}
      {!isCustomState && (
        <motion.div
          className="hidden lg:block fixed top-0 left-0 pointer-events-none z-[10000] rounded-full select-none"
          style={{
            x: dotX,
            y: dotY,
            translateX: '-50%',
            translateY: '-50%',
          }}
          animate={{
            width: isPointerHovered ? 6 : 4,
            height: isPointerHovered ? 6 : 4,
            backgroundColor: isPointerHovered ? '#B69A6A' : '#151515',
          }}
          transition={{ duration: 0.15 }}
        />
      )}
    </>
  );
}
