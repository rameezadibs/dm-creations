import React from 'react';
import { MessageCircle } from 'lucide-react';
import { useCursor } from '../context/CursorContext';

export default function WhatsAppButton() {
  const { setCursor, resetCursor } = useCursor();

  return (
    <aside aria-label="Quick contact via WhatsApp">
      <a
        href="https://wa.me/971528351320?text=Hello%20DM%20Creation,%20I%20would%20like%20to%20inquire%20about%20booking%20a%20production."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with DM Creation on WhatsApp"
        onMouseEnter={() => setCursor('pointer', 'CHAT')}
        onMouseLeave={resetCursor}
        className="fixed bottom-6 right-6 z-40 group flex items-center gap-2.5 bg-[#25D366] text-white p-3.5 sm:px-4 sm:py-3.5 rounded-full shadow-[0_10px_30px_rgba(37,211,102,0.35)] hover:shadow-[0_15px_35px_rgba(37,211,102,0.5)] transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2"
      >
        <MessageCircle className="w-6 h-6 fill-current" />
        <span className="hidden sm:inline font-mono text-xs uppercase tracking-wider font-semibold">
          WhatsApp Us
        </span>
      </a>
    </aside>
  );
}
