import React from 'react';

export default function EventHighlightsSection() {
  return (
    <section id="highlights" className="py-16 md:py-24 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-slate-900">
              Sorotan Acara
            </h2>
          </div>
          <p className="text-slate-600 text-sm sm:text-base font-normal max-w-md">
            Dari panggung utama hingga pertemuan tatap muka, setiap sesi dirancang untuk menghasilkan keputusan dan kesepakatan nyata.
          </p>
        </div>

        {/* Bento Grid matching mockup Page 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Left Tall Card: Keynote Sessions */}
          <div className="lg:col-span-5 relative rounded-3xl overflow-hidden shadow-lg border border-slate-200 group h-[420px] lg:h-auto min-h-[420px] flex flex-col justify-end">
            <img
              src="/images/scaleup/keynote.jpg"
              alt="Sesi Keynote (Masterclass)"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#16053b]/95 via-[#16053b]/40 to-transparent" />
            
            <div className="relative z-10 p-7 text-white space-y-2">
              <span className="inline-block bg-white/20 text-white backdrop-blur-md text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-2 border border-white/20">
                Panggung Utama
              </span>
              <h3 className="font-display font-bold text-2xl sm:text-3xl text-white">
                Sesi Keynote (Masterclass)
              </h3>
              <p className="text-slate-200 text-xs sm:text-sm leading-relaxed max-w-sm">
                Pemimpin nasional dan global menentukan arah transformasi BUMD untuk dekade mendatang.
              </p>
            </div>
          </div>

          {/* Right 2x2 Grid (4 Cards) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            {/* Card 1: Executive Panel Discussion */}
            <div className="relative rounded-3xl overflow-hidden shadow-md border border-slate-200 group h-56 flex flex-col justify-end">
              <img
                src="/images/scaleup/panel.jpg"
                alt="Diskusi Panel Eksekutif"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#16053b]/95 via-[#16053b]/40 to-transparent" />
              
              <div className="relative z-10 p-5 text-white">
                <h4 className="font-display font-bold text-lg text-white mb-1">
                  Diskusi Panel Eksekutif
                </h4>
                <p className="text-slate-200 text-xs leading-relaxed">
                  Diskusi mendalam mengenai tata kelola, pendanaan, dan pertumbuhan.
                </p>
              </div>
            </div>

            {/* Card 2: Business Matching Session */}
            <div className="relative rounded-3xl overflow-hidden shadow-md border border-slate-200 group h-56 flex flex-col justify-end">
              <img
                src="/images/scaleup/matching.jpg"
                alt="Sesi Business Matching"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#16053b]/95 via-[#16053b]/40 to-transparent" />
              
              <div className="relative z-10 p-5 text-white">
                <h4 className="font-display font-bold text-lg text-white mb-1">
                  Sesi Business Matching
                </h4>
                <p className="text-slate-200 text-xs leading-relaxed">
                  Pertemuan bisnis terarah antara BUMD, mitra teknologi, dan investor.
                </p>
              </div>
            </div>

            {/* Card 3: Technology Showcase */}
            <div className="relative rounded-3xl overflow-hidden shadow-md border border-slate-200 group h-56 flex flex-col justify-end">
              <img
                src="/images/scaleup/showcase.jpg"
                alt="Showcase Teknologi"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#16053b]/95 via-[#16053b]/40 to-transparent" />
              
              <div className="relative z-10 p-5 text-white">
                <h4 className="font-display font-bold text-lg text-white mb-1">
                  Showcase Teknologi
                </h4>
                <p className="text-slate-200 text-xs leading-relaxed">
                  Demonstrasi langsung solusi digital untuk efisiensi dan daya saing BUMD.
                </p>
              </div>
            </div>

            {/* Card 4: Strategic Networking */}
            <div className="relative rounded-3xl overflow-hidden shadow-md border border-slate-200 group h-56 flex flex-col justify-end">
              <img
                src="/images/scaleup/networking.jpg"
                alt="Networking Strategis"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#16053b]/95 via-[#16053b]/40 to-transparent" />
              
              <div className="relative z-10 p-5 text-white">
                <h4 className="font-display font-bold text-lg text-white mb-1">
                  Networking Strategis
                </h4>
                <p className="text-slate-200 text-xs leading-relaxed">
                  Resepsi eksekutif bersama para pemimpin dan pengambil kebijakan dari seluruh Indonesia.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
