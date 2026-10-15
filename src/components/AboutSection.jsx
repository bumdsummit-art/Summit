import React from 'react';

// Bottom Dual-Wave vector graphic matching Screenshot 2 reference
function CardWave() {
  return (
    <div className="absolute bottom-0 left-0 right-0 h-11 sm:h-12 overflow-hidden pointer-events-none select-none">
      <svg
        viewBox="0 0 360 52"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="w-full h-full"
      >
        <defs>
          {/* Primary Violet / Purple Gradient */}
          <linearGradient id="wavePurpleGrad" x1="0%" y1="50%" x2="100%" y2="50%">
            <stop offset="0%" stopColor="#4f46e5" />
            <stop offset="45%" stopColor="#6366f1" />
            <stop offset="100%" stopColor="#8b5cf6" />
          </linearGradient>

          {/* Secondary Soft Violet Crest */}
          <linearGradient id="wavePurpleSoft" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#818cf8" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#c084fc" stopOpacity="0.08" />
          </linearGradient>

          {/* Primary Vibrant Orange / Amber Gradient */}
          <linearGradient id="waveOrangeGrad" x1="0%" y1="50%" x2="100%" y2="50%">
            <stop offset="0%" stopColor="#ea580c" />
            <stop offset="45%" stopColor="#f97316" />
            <stop offset="100%" stopColor="#f59e0b" />
          </linearGradient>

          {/* Secondary Soft Orange Swell */}
          <linearGradient id="waveOrangeSoft" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fb923c" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#fde047" stopOpacity="0.15" />
          </linearGradient>
        </defs>

        {/* Soft Violet Backdrop Wave */}
        <path
          d="M0 30C50 18 120 20 180 32C240 44 290 42 360 36V52H0V30Z"
          fill="url(#wavePurpleSoft)"
        />

        {/* Left Purple Wave flowing down toward the center-right */}
        <path
          d="M0 34C40 24 90 26 140 34C180 41 220 45 260 47L0 52V34Z"
          fill="url(#wavePurpleGrad)"
          fillOpacity="0.9"
        />

        {/* Soft Orange Backdrop Wave */}
        <path
          d="M100 52C150 42 200 26 260 17C290 12 325 13 360 17V52H100Z"
          fill="url(#waveOrangeSoft)"
        />

        {/* Primary Right Orange/Amber Wave Sweeping Upwards to the Corner */}
        <path
          d="M120 52C170 44 220 30 270 21C300 16 330 17 360 21V52H120Z"
          fill="url(#waveOrangeGrad)"
        />
      </svg>
    </div>
  );
}

export default function AboutSection() {
  const keyCards = [
    {
      num: '01',
      badgeBg: 'bg-[#fff2e8]',
      badgeText: 'text-[#ea580c]',
      category: 'FONDASI KEPEMIMPINAN',
      categoryColor: 'text-[#ea580c]',
      title: 'Perkuat Kepemimpinan',
      subtitle: 'Meningkatkan kapabilitas pemimpin BUMD',
    },
    {
      num: '02',
      badgeBg: 'bg-[#eff3ff]',
      badgeText: 'text-[#4338ca]',
      category: 'AKSELERASI TEKNOLOGI',
      categoryColor: 'text-[#4f46e5]',
      title: 'Akselerasi Transformasi Digital',
      subtitle: 'Mempercepat transformasi digital dan operasional',
    },
    {
      num: '03',
      badgeBg: 'bg-[#fffbeb]',
      badgeText: 'text-[#d97706]',
      category: 'AKUNTABILITAS & KEPATUHAN',
      categoryColor: 'text-[#d97706]',
      title: 'Tingkatkan Tata Kelola',
      subtitle: 'Mendorong tata kelola yang sehat dan efektif',
    },
    {
      num: '04',
      badgeBg: 'bg-[#f5f3ff]',
      badgeText: 'text-[#7c3aed]',
      category: 'EKOSISTEM & KEMITRAAN',
      categoryColor: 'text-[#7c3aed]',
      title: 'Koneksikan Solusi Bisnis',
      subtitle: 'Mempertemukan BUMD dengan penyedia solusi',
    },
    {
      num: '05',
      badgeBg: 'bg-[#fff1f0]',
      badgeText: 'text-[#ea580c]',
      category: 'PERTUMBUHAN & PERMODALAN',
      categoryColor: 'text-[#ea580c]',
      title: 'Buka Peluang Investasi',
      subtitle: 'Membuka peluang investasi dan kemitraan',
    },
    {
      num: '06',
      badgeBg: 'bg-[#eef2ff]',
      badgeText: 'text-[#4338ca]',
      category: 'SINERGI NASIONAL',
      categoryColor: 'text-[#4338ca]',
      title: 'Bangun Kolaborasi Antardaerah',
      subtitle: 'Membangun jaringan kolaborasi antardaerah',
    },
  ];

  return (
    <section id="about" className="py-16 sm:py-20 md:py-28 bg-gradient-to-b from-white via-slate-50/70 to-white text-slate-900 border-t border-slate-100 relative overflow-hidden">
      
      {/* Background Decorative Grid & Ambient Glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[600px] h-[400px] bg-gradient-to-br from-purple-200/25 via-pink-100/20 to-transparent rounded-full blur-3xl -translate-y-1/2" />
        <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-orange-100/30 via-purple-100/20 to-transparent rounded-full blur-3xl" />
        <div 
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `radial-gradient(#1a0647 1px, transparent 1px)`,
            backgroundSize: '24px 24px'
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ==================================================================== */}
        {/* TOP HEADER: BRANDING, TITLE, SUBTITLE & STRONGER REGIONS BANNER     */}
        {/* ==================================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-14 md:mb-16">
          
          <div className="lg:col-span-8 space-y-4">
            {/* Main Headline */}
            <div>
              <h2 className="font-display font-black text-3xl sm:text-5xl md:text-6xl text-[#1a0647] tracking-tight leading-[1.05]">
                Arah & Sasaran Strategis
              </h2>
              <h3 className="font-display font-bold text-xl sm:text-2xl md:text-3xl text-slate-800 mt-2">
                Membangun BUMD yang <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#240a5e] via-purple-700 to-[#f9572a]">Berkualitas, Berkelanjutan, dan Berdaya Saing Global</span>
              </h3>
            </div>

            {/* Accent underline */}
            <div className="w-24 h-1.5 rounded-full bg-gradient-to-r from-[#240a5e] via-[#f9572a] to-amber-400" />

            {/* Subtitle / Mission Statement */}
            <p className="text-slate-600 text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed pt-1">
              Mendorong transformasi BUMD menjadi entitas bisnis yang unggul, berdaya saing tinggi, serta mampu memberikan kontribusi nyata bagi pertumbuhan ekonomi daerah secara berkelanjutan.
            </p>
          </div>

          {/* Right Slogan Banner */}
          <div className="lg:col-span-4 flex lg:justify-end">
            <div className="w-full sm:max-w-sm lg:w-full rounded-2xl bg-gradient-to-br from-[#1c084a] via-[#2a0c6d] to-[#120432] p-5 sm:p-6 text-white shadow-xl border border-purple-800/40 relative overflow-hidden group">
              {/* Background gradient & tech grid */}
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-amber-400/20 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-700 pointer-events-none" />
              <div className="absolute -bottom-10 -left-10 w-28 h-28 bg-[#f9572a]/20 rounded-full blur-xl pointer-events-none" />
              
              <div className="relative z-10 space-y-2">
                <h4 className="font-display font-black text-xl sm:text-2xl text-white tracking-wide uppercase leading-tight">
                  DAERAH MAJU <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-orange-300 to-[#f9572a]">
                    INDONESIA JAYA
                  </span>
                </h4>
                
                <p className="text-purple-200/90 text-xs leading-relaxed font-normal pt-1">
                  Peta jalan transformasi terpadu: dari penguatan fondasi kepemimpinan daerah hingga perluasan aliansi bisnis strategis berskala nasional.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* ==================================================================== */}
        {/* NEW KEY CARDS SECTION: PERJALANAN TRANSFORMASI (6 PILAR AKSELERASI) */}
        {/* ==================================================================== */}
        <div className="mb-14 md:mb-16">
          
          {/* Overline with Gradient Pill Bar and Main Question/Headline */}
          <div className="mb-6 sm:mb-8">
            <div className="flex items-center gap-3 mb-2.5">
              <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#ea580c]">
                PERJALANAN TRANSFORMASI
              </span>
              <div className="h-1 w-14 sm:w-16 rounded-full bg-gradient-to-r from-purple-800 via-pink-600 to-amber-400" />
            </div>

            <h3 className="font-display font-extrabold text-2xl sm:text-3xl md:text-4xl text-[#0e072b] tracking-tight leading-[1.2] max-w-4xl">
              Enam pilar akselerasi berkesinambungan menuju kemandirian ekonomi BUMD:
            </h3>
          </div>

          {/* 6 Key Cards Grid (2 rows x 3 columns on desktop, responsive) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {keyCards.map((card) => (
              <div
                key={card.num}
                className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200/80 p-6 sm:p-7 pb-14 sm:pb-16 relative overflow-hidden flex flex-col justify-between shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 min-h-[220px] group"
              >
                <div>
                  {/* Milestone Number Badge */}
                  <div className={`inline-flex items-center justify-center px-4 py-1.5 rounded-xl font-display font-extrabold text-sm sm:text-base ${card.badgeBg} ${card.badgeText}`}>
                    {card.num}
                  </div>

                  {/* Category Overline */}
                  <span className={`block text-[11px] sm:text-xs font-extrabold uppercase tracking-wider mt-4 sm:mt-5 ${card.categoryColor}`}>
                    {card.category}
                  </span>

                  {/* Card Title */}
                  <h4 className="font-display font-extrabold text-lg sm:text-xl lg:text-[22px] text-[#0e072b] mt-1.5 leading-snug">
                    {card.title}
                  </h4>

                  {/* Card Subtitle */}
                  <p className="text-slate-500 text-xs sm:text-sm mt-2 leading-relaxed font-normal">
                    {card.subtitle}
                  </p>
                </div>

                {/* Bottom Decorative Dual-Wave Graphic */}
                <CardWave />
              </div>
            ))}
          </div>

        </div>

        {/* ==================================================================== */}
        {/* BOTTOM MOTTO CAPSULE / RIBBON: BELAJAR • BERBAGI • TERHUBUNG...     */}
        {/* ==================================================================== */}
        <div className="relative pt-2">
          
          {/* Glowing Multi-color Gradient Border Container */}
          <div className="rounded-full p-1 bg-gradient-to-r from-[#1c084a] via-[#7c3aed] via-[#c026d3] via-[#f9572a] to-amber-400 shadow-xl shadow-purple-950/10">
            <div className="bg-white rounded-full px-6 py-4 sm:px-10 sm:py-5 flex items-center justify-center w-full">
              
              {/* The 5 Key Principles from Mockup - Full Width & Centered */}
              <div className="flex flex-wrap items-center justify-between sm:justify-around w-full max-w-5xl gap-x-3 sm:gap-x-6 gap-y-2 text-center">
                <span className="font-display font-black text-sm sm:text-base md:text-xl text-[#1a0647] hover:text-[#f9572a] transition-colors cursor-default tracking-wide">
                  BELAJAR
                </span>
                <span className="text-[#f9572a] font-bold text-base md:text-xl select-none">•</span>

                <span className="font-display font-black text-sm sm:text-base md:text-xl text-[#1a0647] hover:text-[#f9572a] transition-colors cursor-default tracking-wide">
                  BERBAGI
                </span>
                <span className="text-[#f9572a] font-bold text-base md:text-xl select-none">•</span>

                <span className="font-display font-black text-sm sm:text-base md:text-xl text-[#1a0647] hover:text-[#f9572a] transition-colors cursor-default tracking-wide">
                  TERHUBUNG
                </span>
                <span className="text-[#f9572a] font-bold text-base md:text-xl select-none">•</span>

                <span className="font-display font-black text-sm sm:text-base md:text-xl text-[#1a0647] hover:text-[#f9572a] transition-colors cursor-default tracking-wide">
                  BERKOLABORASI
                </span>
                <span className="text-[#f9572a] font-bold text-base md:text-xl select-none">•</span>

                <span className="font-display font-black text-sm sm:text-base md:text-xl text-[#1a0647] hover:text-[#f9572a] transition-colors cursor-default tracking-wide">
                  BERTUMBUH
                </span>
              </div>

            </div>
          </div>

          {/* Smooth Bottom Ribbon Border Gradient accent */}
          <div className="h-1.5 w-full rounded-full bg-gradient-to-r from-transparent via-[#f9572a]/40 to-transparent mt-4 opacity-50" />

        </div>

      </div>

    </section>
  );
}
