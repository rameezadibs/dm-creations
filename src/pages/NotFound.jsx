import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import SEO from '../components/SEO';
import { SITE_URL } from '../config/seo';

export default function NotFound() {
  return (
    <main className="min-h-[75vh] flex items-center justify-center pt-32 pb-20 px-4 sm:px-6 lg:px-8 text-center bg-[#F6F4EF]">
      <SEO
        title="404 — Frame Not Found | DM Creation Dubai"
        description="The page or visual dossier you are looking for has been moved or does not exist. Explore DM Creation's photography and film productions."
        canonical={`${SITE_URL}/404`}
      />
      <div className="max-w-xl mx-auto border border-[#DEDCD6] bg-white p-8 sm:p-14 shadow-editorial">
        <span className="font-mono text-xs text-[#B69A6A] tracking-[0.3em] uppercase block mb-3">
          // ERROR 404 • FRAME UNREACHABLE
        </span>
        <h1 className="font-serif text-4xl sm:text-6xl font-normal uppercase tracking-tight text-[#151515] mb-4">
          OUT OF FOCUS.
        </h1>
        <p className="text-sm sm:text-base text-[#666666] font-light leading-relaxed mb-8">
          The requested coordinate does not exist on our production server or has been relocated.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/"
            className="px-6 py-3 bg-[#151515] text-[#F6F4EF] hover:bg-[#B69A6A] hover:text-[#151515] transition-all text-xs font-mono uppercase tracking-widest inline-flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>RETURN TO HOME</span>
          </Link>
          <Link
            to="/portfolio"
            className="px-6 py-3 border border-[#151515] text-[#151515] hover:bg-[#151515] hover:text-white transition-all text-xs font-mono uppercase tracking-widest inline-flex items-center gap-2"
          >
            <span>VIEW ARCHIVE</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </main>
  );
}
