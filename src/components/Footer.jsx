import React from 'react';
import { Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0d0728] text-white pt-16 pb-8 border-t border-purple-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid matching Mockup Page 4 */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-purple-900/40">
          
          {/* Brand Info (Span 5) */}
          <div className="md:col-span-5 space-y-4">
            <a href="#" className="flex items-center gap-2">
              <span className="font-display font-black text-2xl tracking-tight text-white">
                BUMD Scale Up Summit <span className="text-[#f9572a]">2026</span>
              </span>
            </a>

            <p className="text-purple-200 text-sm leading-relaxed max-w-sm font-normal">
              Konferensi tingkat tinggi eksekutif yang menghubungkan jajaran pimpinan BUMD, pemerintah daerah, investor, dan penyedia inovasi teknologi.
            </p>
          </div>

          {/* Organizer (Span 3) */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-purple-300 block">
              Penyelenggara
            </span>
            <div className="pt-1">
              <img
                src="/images/iirc-logo.png"
                alt="IIRC - ITSB Innovation & Research Centre"
                className="h-16 sm:h-20 max-w-[240px] w-auto object-contain brightness-125"
              />
            </div>
          </div>

          {/* Contact (Span 2) */}
          <div className="md:col-span-2 space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-purple-300 block">
              Sekretariat & Narahubung
            </span>
            <div className="space-y-2.5 text-xs text-slate-200">
              <div className="font-sans text-xs font-semibold text-white">Tim Kemitraan & Kepesertaan</div>
              
              {/* Email with Icon */}
              <a
                href="mailto:bumd.summit@itsb.ac.id"
                className="flex items-center gap-2 text-purple-200 hover:text-white transition group"
              >
                <Mail className="w-3.5 h-3.5 text-[#f9572a] shrink-0" />
                <span className="truncate">bumd.summit@itsb.ac.id</span>
              </a>

              {/* Phone with Icon */}
              <a
                href="https://wa.me/6285973209723"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-purple-200 hover:text-white transition group font-sans"
              >
                <Phone className="w-3.5 h-3.5 text-[#f9572a] shrink-0" />
                <span>085973209723 (Aprilia)</span>
              </a>
            </div>
          </div>

          {/* Follow (Span 2) */}
          <div className="md:col-span-2 space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-purple-300 block">
              Kanal Informasi Resmi
            </span>
            <div className="flex items-center gap-3">
              {/* Instagram Logo */}
              <a
                href="https://www.instagram.com/iirc.id/?hl=en"
                target="_blank"
                rel="noreferrer"
                className="w-11 h-11 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/15 flex items-center justify-center text-purple-100 hover:text-white transition shadow-sm hover:scale-105"
                aria-label="Instagram"
                title="Instagram @iirc.id"
              >
                <svg className="w-5 h-5 fill-none stroke-current stroke-[2]" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>

              {/* LinkedIn Logo */}
              <a
                href="https://id.linkedin.com/company/iirc-itsb"
                target="_blank"
                rel="noreferrer"
                className="w-11 h-11 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/15 flex items-center justify-center text-purple-100 hover:text-white transition shadow-sm hover:scale-105"
                aria-label="LinkedIn"
                title="LinkedIn IIRC ITSB"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                </svg>
              </a>

              {/* YouTube Logo */}
              <a
                href="https://www.youtube.com/@iirc.official"
                target="_blank"
                rel="noreferrer"
                className="w-11 h-11 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/15 flex items-center justify-center text-purple-100 hover:text-white transition shadow-sm hover:scale-105"
                aria-label="YouTube"
                title="YouTube @iirc.official"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar matching Mockup Page 4 */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-purple-300/80 font-mono">
          <div>
            © 2026 IIRC ITSB Innovation & Research Centre. Hak cipta dilindungi undang-undang.
          </div>
          <div>
            25–26 November 2026, Samisara Grand Ballroom, Jakarta
          </div>
        </div>

      </div>
    </footer>
  );
}
