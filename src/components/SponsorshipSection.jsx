import React from 'react';
import { Ticket, Hotel, Building2, Check, ArrowRight } from 'lucide-react';

export default function SponsorshipSection() {
  const whatsappUrl = "https://wa.me/6285973209723";
  const corporateWhatsappUrl = "https://wa.me/6285973209723?text=Halo%20Admin,%20saya%20tertarik%20dengan%20Corporate%20Package%20BUMD%20Scale%20Up%20Summit%202026";
  const registrationFormUrl = "https://forms.gle/kdhtCunAkdp23zm79";

  return (
    <section id="sponsorship" className="py-16 md:py-24 bg-gradient-to-b from-purple-50/40 via-white to-slate-50 relative overflow-hidden border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* 3 Package Cards matching the exact screenshot design */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch pt-6 mb-16">
          
          {/* Card 1: ENTRY TICKET */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative group">
            <div>
              {/* Top Icon Circle */}
              <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-[#1e074f] to-[#3b1285] text-white flex items-center justify-center mx-auto mb-5 shadow-md shadow-purple-950/20">
                <Ticket className="w-8 h-8 text-purple-200" />
              </div>

              {/* Title & Subtitle */}
              <div className="text-center mb-6">
                <h3 className="font-display font-black text-2xl text-[#1e074f] uppercase tracking-tight">
                  PAKET REGULER
                </h3>
                <p className="text-xs font-semibold text-slate-600 mt-1">
                  Akses Penuh ke Forum & Networking (Non-Inap)
                </p>
              </div>

              {/* Price Banner Box */}
              <div className="bg-gradient-to-r from-[#190642] via-[#240a5e] to-[#1c074b] text-white py-4 px-6 rounded-2xl text-center shadow-inner mb-8 flex items-baseline justify-center gap-1.5">
                <span className="text-sm font-bold text-slate-300">Rp</span>
                <span className="font-display font-black text-4xl sm:text-5xl tracking-tight">5.3</span>
                <span className="text-xs font-bold text-slate-300 uppercase tracking-wider">JUTA</span>
              </div>

              {/* Features List */}
              <ul className="space-y-3.5 text-xs sm:text-sm text-slate-700 mb-6">
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#1e074f] text-white flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span className="font-medium">Akses penuh seluruh sesi forum dan masterclass</span>
                </li>

                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#1e074f] text-white flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span className="font-medium">Networking dengan peserta, pembicara, dan mitra bisnis</span>
                </li>

                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#1e074f] text-white flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span className="font-medium">Materi presentasi dan e-sertifikat resmi</span>
                </li>

                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#1e074f] text-white flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span className="font-medium">Makan siang, coffee break, & summit kit</span>
                </li>

                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#1e074f] text-white flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span className="font-medium">Akses ke area pameran dan business showcase</span>
                </li>
              </ul>
            </div>

            {/* Action Button: DAFTAR SEKARANG */}
            <div className="pt-2">
              <a
                href={registrationFormUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full py-4 px-6 rounded-2xl font-display font-extrabold text-sm text-white bg-gradient-to-r from-[#190642] via-[#240a5e] to-[#3b1285] hover:from-[#130434] hover:to-[#2e0e6b] shadow-lg shadow-purple-950/20 transition-all duration-300 flex items-center justify-center gap-2 group/btn uppercase tracking-wider"
              >
                <span>DAFTAR SEKARANG</span>
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Card 2: RESIDENTIAL TWIN (PALING DIREKOMENDASIKAN) */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-[#f9572a] shadow-2xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between relative group md:-translate-y-2">
            
            {/* Top Recommended Crown Badge */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#ea580c] via-[#f9572a] to-[#f97316] text-white text-[11px] font-extrabold uppercase tracking-wider px-4 py-1.5 rounded-full shadow-lg flex items-center gap-1.5 whitespace-nowrap border border-amber-300/40">
              <span>👑</span>
              <span>PALING DIREKOMENDASIKAN</span>
            </div>

            <div>
              {/* Top Icon Circle */}
              <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-[#ea580c] to-[#f97316] text-white flex items-center justify-center mx-auto mb-5 shadow-md shadow-orange-500/30">
                <Hotel className="w-8 h-8 text-amber-100" />
              </div>

              {/* Title & Subtitle */}
              <div className="text-center mb-6">
                <h3 className="font-display font-black text-2xl text-[#f9572a] uppercase tracking-tight">
                  RESIDENTIAL TWIN
                </h3>
                <p className="text-xs font-semibold text-slate-600 mt-1">
                  Akses Penuh + Akomodasi Twin Sharing
                </p>
              </div>

              {/* Price Banner Box */}
              <div className="bg-gradient-to-r from-[#ea580c] via-[#f9572a] to-[#f97316] text-white py-4 px-6 rounded-2xl text-center shadow-lg shadow-orange-500/25 mb-8 flex items-baseline justify-center gap-1.5">
                <span className="text-sm font-bold text-orange-100">Rp</span>
                <span className="font-display font-black text-4xl sm:text-5xl tracking-tight">7.5</span>
                <span className="text-xs font-bold text-orange-100 uppercase tracking-wider">JUTA</span>
              </div>

              {/* Features List */}
              <ul className="space-y-3.5 text-xs sm:text-sm text-slate-700 mb-6">
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#f9572a] text-white flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span className="font-semibold text-slate-900">Semua fasilitas Paket Reguler</span>
                </li>

                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#f9572a] text-white flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span className="font-medium">Akomodasi 3 hari 2 malam (twin sharing)</span>
                </li>

                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#f9572a] text-white flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span className="font-medium">Sarapan pagi di hotel</span>
                </li>

                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#f9572a] text-white flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span className="font-medium">Antar jemput bandara (pp) sesuai jadwal resmi acara <span className="text-slate-500">(Biaya tambahan)</span></span>
                </li>
              </ul>
            </div>

            {/* Action Button: DAFTAR SEKARANG */}
            <div className="pt-2">
              <a
                href={registrationFormUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full py-4 px-6 rounded-2xl font-display font-extrabold text-sm text-white bg-gradient-to-r from-[#ea580c] via-[#f9572a] to-[#f97316] hover:from-[#c2410c] hover:to-[#ea580c] shadow-lg shadow-orange-500/30 transition-all duration-300 flex items-center justify-center gap-2 group/btn uppercase tracking-wider"
              >
                <span>DAFTAR SEKARANG</span>
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Card 3: CORPORATE PACKAGE */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative group">
            <div>
              {/* Top Icon Circle */}
              <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-[#1e1b4b] via-[#240a5e] to-[#4338ca] text-white flex items-center justify-center mx-auto mb-5 shadow-md shadow-indigo-950/20">
                <Building2 className="w-8 h-8 text-indigo-200" />
              </div>

              {/* Title */}
              <div className="text-center mb-8">
                <h3 className="font-display font-black text-2xl text-[#1e074f] uppercase tracking-tight max-w-[200px] mx-auto leading-tight">
                  PAKET KORPORAT
                </h3>
              </div>

              {/* Action Button: HUBUNGI KAMI -> linking directly to WhatsApp */}
              <div className="mb-6">
                <a
                  href={corporateWhatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-4 px-6 rounded-2xl font-display font-extrabold text-sm text-white bg-gradient-to-r from-[#2563eb] via-[#240a5e] to-[#4338ca] hover:from-[#1d4ed8] hover:to-[#3730a3] shadow-lg shadow-indigo-900/30 transition-all duration-300 flex items-center justify-center gap-2 group/btn uppercase tracking-wider"
                >
                  <span>HUBUNGI KAMI</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </div>

              {/* Line Separator */}
              <div className="border-b border-slate-200 mb-5" />

              {/* Description & Kalimat Ajakan Below Separator */}
              <div className="space-y-2.5 text-center px-1">
                <p className="text-xs sm:text-sm text-slate-700 font-semibold leading-relaxed">
                  Tersedia paket korporat untuk peserta lebih dari 1 (satu) orang.
                </p>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Daftarkan tim & delegasi instansi Anda sekarang untuk mendapatkan penawaran spesial serta benefit eksklusif paket korporat BUMD!
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* Bottom Ribbon Wave Accent matching the screenshot */}
      <div className="w-full h-8 bg-gradient-to-r from-[#240a5e] via-[#9333ea] via-[#e11d48] via-[#f9572a] to-[#facc15] opacity-90 transform -skew-y-1 translate-y-4" />
      <div className="w-full h-4 bg-gradient-to-r from-[#1c074b] via-[#c026d3] via-[#f9572a] to-[#facc15] opacity-95" />
    </section>
  );
}
