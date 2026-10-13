import React, { useState, useEffect } from 'react';
import { 
  Users, 
  Cpu, 
  Landmark, 
  Handshake, 
  TrendingUp, 
  Globe
} from 'lucide-react';

export default function AboutSection() {
  const [activeStep, setActiveStep] = useState(0);

  const objectives = [
    {
      id: 1,
      num: '01',
      stage: 'Fondasi Kepemimpinan',
      title: 'Perkuat Kepemimpinan',
      subtitle: 'Meningkatkan kapabilitas pemimpin BUMD',
      icon: Users,
      color: 'from-blue-600 to-indigo-700',
      accentColor: '#4f46e5',
      lightBg: 'bg-indigo-50/60',
      badgeBorder: 'border-indigo-200',
      badgeText: 'text-indigo-700',
    },
    {
      id: 2,
      num: '02',
      stage: 'Akselerasi Teknologi',
      title: 'Akselerasi Transformasi Digital',
      subtitle: 'Mempercepat transformasi digital dan operasional',
      icon: Cpu,
      color: 'from-violet-600 to-purple-800',
      accentColor: '#7c3aed',
      lightBg: 'bg-violet-50/60',
      badgeBorder: 'border-violet-200',
      badgeText: 'text-violet-700',
    },
    {
      id: 3,
      num: '03',
      stage: 'Akuntabilitas & Kepatuhan',
      title: 'Tingkatkan Tata Kelola',
      subtitle: 'Mendorong tata kelola yang sehat dan efektif',
      icon: Landmark,
      color: 'from-purple-700 to-pink-700',
      accentColor: '#9333ea',
      lightBg: 'bg-purple-50/60',
      badgeBorder: 'border-purple-200',
      badgeText: 'text-purple-700',
    },
    {
      id: 4,
      num: '04',
      stage: 'Ekosistem & Kemitraan',
      title: 'Koneksikan Solusi Bisnis',
      subtitle: 'Mempertemukan BUMD dengan penyedia solusi',
      icon: Handshake,
      color: 'from-pink-600 to-[#f9572a]',
      accentColor: '#db2777',
      lightBg: 'bg-pink-50/60',
      badgeBorder: 'border-pink-200',
      badgeText: 'text-pink-700',
    },
    {
      id: 5,
      num: '05',
      stage: 'Pertumbuhan & Permodalan',
      title: 'Buka Peluang Investasi',
      subtitle: 'Membuka peluang investasi dan kemitraan',
      icon: TrendingUp,
      color: 'from-[#f9572a] to-amber-600',
      accentColor: '#f9572a',
      lightBg: 'bg-orange-50/60',
      badgeBorder: 'border-orange-200',
      badgeText: 'text-[#f9572a]',
    },
    {
      id: 6,
      num: '06',
      stage: 'Sinergi Nasional',
      title: 'Bangun Kolaborasi Antardaerah',
      subtitle: 'Membangun jaringan kolaborasi antardaerah',
      icon: Globe,
      color: 'from-amber-500 to-orange-600',
      accentColor: '#f59e0b',
      lightBg: 'bg-amber-50/60',
      badgeBorder: 'border-amber-200',
      badgeText: 'text-amber-700',
    },
  ];

  // Automatic sequential highlighter every 2 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % objectives.length);
    }, 2000); // 2 detik bergantian
    return () => clearInterval(timer);
  }, [objectives.length]);

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
                Tujuan Acara
              </h2>
              <h3 className="font-display font-bold text-xl sm:text-2xl md:text-3xl text-slate-800 mt-2">
                Membangun BUMD yang <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#240a5e] via-purple-700 to-[#f9572a]">Kompetitif dan Berkelanjutan</span>
              </h3>
            </div>

            {/* Accent underline */}
            <div className="w-24 h-1.5 rounded-full bg-gradient-to-r from-[#240a5e] via-[#f9572a] to-amber-400" />

            {/* Subtitle / Mission Statement */}
            <p className="text-slate-600 text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed pt-1">
              Mendorong BUMD menjadi organisasi yang unggul, adaptif, dan siap menciptakan dampak ekonomi daerah secara nyata dan berkelanjutan.
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
                  Peta jalan transformasi dari penguatan kepemimpinan daerah hingga terciptanya kemitraan terpadu berskala nasional.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* ==================================================================== */}
        {/* DESKTOP ASCENDING TRAJECTORY ROADMAP (AUTO-HIGHLIGHTING EVERY 2S)    */}
        {/* ==================================================================== */}
        <div className="hidden lg:block mb-12">
          
          <div className="bg-white rounded-3xl p-8 xl:p-10 border border-slate-200/90 shadow-xl shadow-purple-950/5 relative overflow-hidden">
            
            {/* Top Status Header */}
            <div className="border-b border-slate-100 pb-5 mb-8">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#f9572a] block mb-1">
                  TRAYEKTORI TRANSFORMASI
                </span>
                <p className="text-sm font-semibold text-slate-800">
                  Enam pilar akselerasi berkesinambungan menuju kemandirian ekonomi BUMD:
                </p>
              </div>
            </div>

            {/* Ascending Stepper Cards Grid with Pure SVG Flow Vector */}
            <div className="relative pt-6 pb-6">
              
              {/* Dynamic SVG Ascending Ribbon Curve connecting all 6 nodes */}
              <div className="absolute inset-0 pointer-events-none select-none z-0">
                <svg className="w-full h-full" viewBox="0 0 1000 240" fill="none" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="roadmapGrad" x1="0%" y1="100%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#4f46e5" stopOpacity="0.4" />
                      <stop offset="25%" stopColor="#7c3aed" stopOpacity="0.6" />
                      <stop offset="50%" stopColor="#9333ea" stopOpacity="0.8" />
                      <stop offset="75%" stopColor="#f9572a" stopOpacity="0.9" />
                      <stop offset="100%" stopColor="#f59e0b" stopOpacity="1" />
                    </linearGradient>
                    <linearGradient id="roadmapGradGlow" x1="0%" y1="100%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#4f46e5" stopOpacity="0.1" />
                      <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.25" />
                    </linearGradient>
                  </defs>

                  {/* Wide Glow Under-stroke */}
                  <path
                    d="M 50 185 Q 260 175, 450 135 T 950 40"
                    stroke="url(#roadmapGradGlow)"
                    strokeWidth="16"
                    strokeLinecap="round"
                  />

                  {/* Main Gradient Trajectory Line */}
                  <path
                    d="M 50 185 Q 260 175, 450 135 T 950 40"
                    stroke="url(#roadmapGrad)"
                    strokeWidth="4"
                    strokeDasharray="8 6"
                    strokeLinecap="round"
                  />

                  {/* Terminal Arrow Head */}
                  <polygon
                    points="950,40 930,35 940,55"
                    fill="#f59e0b"
                  />
                </svg>
              </div>

              {/* 6 Ascending Step Columns with Automatic Highlight Transition */}
              <div className="grid grid-cols-6 gap-3.5 relative z-10">
                {objectives.map((item, index) => {
                  const IconComp = item.icon;
                  const isActive = activeStep === index;
                  
                  // Ascending vertical offsets matching the upward curve from reference
                  const offsets = [
                    'mt-20',   // Step 1: Base elevation
                    'mt-16',   // Step 2
                    'mt-12',   // Step 3
                    'mt-8',    // Step 4
                    'mt-4',    // Step 5
                    'mt-0',    // Step 6: Peak elevation
                  ];

                  return (
                    <div
                      key={item.id}
                      className={`transition-all duration-500 flex flex-col justify-between ${offsets[index]}`}
                    >
                      {/* Top Node Connector & Icon */}
                      <div className="flex flex-col items-center mb-3">
                        {/* Node circle */}
                        <div className="relative">
                          {isActive && (
                            <span className="animate-ping absolute -inset-1 rounded-full bg-orange-400 opacity-60" />
                          )}
                          <div 
                            className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 shadow-md ${
                              isActive
                                ? 'bg-gradient-to-br ' + item.color + ' text-white scale-110 shadow-lg ring-4 ring-orange-200/80 shadow-orange-500/20'
                                : 'bg-white border-2 border-slate-200 text-slate-500 scale-95 opacity-80'
                            }`}
                          >
                            <IconComp className={`w-6 h-6 transition-colors duration-300 ${isActive ? 'text-white' : 'text-slate-500'}`} />
                          </div>
                        </div>

                        {/* Connector Pin / Stalk */}
                        <div className={`w-0.5 h-4 transition-colors duration-500 ${isActive ? 'bg-[#f9572a]' : 'bg-slate-200'}`} />
                        
                        {/* Milestone Number Badge */}
                        <span className={`px-2 py-0.5 rounded-full text-[10px] font-mono font-extrabold uppercase tracking-wider transition-all duration-500 ${
                          isActive 
                            ? 'bg-[#1a0647] text-white shadow-xs scale-105' 
                            : 'bg-slate-100 text-slate-400'
                        }`}>
                          {item.num}
                        </span>
                      </div>

                      {/* Card Content with Auto Highlighter Styling */}
                      <div 
                        className={`p-4 rounded-2xl border transition-all duration-500 flex-1 flex flex-col justify-between text-center min-h-[175px] relative overflow-hidden ${
                          isActive
                            ? 'bg-gradient-to-b from-white via-purple-50/60 to-purple-50/90 border-purple-400 shadow-xl shadow-purple-900/15 ring-2 ring-purple-400/30 -translate-y-2'
                            : 'bg-white/95 border-slate-200/80 opacity-75 shadow-xs'
                        }`}
                      >
                        {/* Top subtle highlight glow line when active */}
                        {isActive && (
                          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-[#f9572a] to-amber-400" />
                        )}

                        <div>
                          <span className={`text-[10px] font-mono font-bold block mb-1 uppercase tracking-tight transition-colors duration-300 ${
                            isActive ? item.badgeText : 'text-slate-400'
                          }`}>
                            {item.stage}
                          </span>
                          <h4 className={`font-display font-bold text-xs xl:text-sm leading-snug mb-1.5 transition-colors duration-300 ${
                            isActive ? 'text-[#1a0647]' : 'text-slate-700'
                          }`}>
                            {item.title}
                          </h4>
                        </div>

                        <p className={`text-[11px] leading-relaxed transition-colors duration-300 ${
                          isActive ? 'text-slate-700 font-medium' : 'text-slate-500'
                        }`}>
                          {item.subtitle}
                        </p>

                        {/* Subtle bottom indicator dot */}
                        <div className="pt-2 mt-2 border-t border-slate-100/80 flex items-center justify-center">
                          <span className={`w-1.5 h-1.5 rounded-full transition-all duration-500 ${
                            isActive ? 'bg-[#f9572a] scale-125' : 'bg-slate-200'
                          }`} />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

            </div>

          </div>

        </div>

        {/* ==================================================================== */}
        {/* MOBILE & TABLET RESPONSIVE ROADMAP (AUTO-HIGHLIGHTING EVERY 2S)     */}
        {/* ==================================================================== */}
        <div className="lg:hidden space-y-4 mb-12">
          
          <div className="mb-2">
            <span className="text-xs font-mono font-bold text-[#f9572a] uppercase tracking-wider">
              6 Pilar Sasaran Strategis:
            </span>
          </div>

          <div className="relative pl-6 sm:pl-8 space-y-3.5 before:absolute before:left-3 before:top-4 before:bottom-4 before:w-1 before:bg-gradient-to-b before:from-[#4f46e5] before:via-[#9333ea] before:via-[#f9572a] before:to-amber-400 before:rounded-full">
            {objectives.map((item, idx) => {
              const IconComp = item.icon;
              const isSelected = activeStep === idx;

              return (
                <div
                  key={item.id}
                  className={`p-4 sm:p-5 rounded-2xl border transition-all duration-500 relative ${
                    isSelected
                      ? 'bg-gradient-to-br from-white to-purple-50/90 border-purple-400 shadow-md ring-2 ring-purple-300/40 -translate-y-0.5'
                      : 'bg-white border-slate-200/90 opacity-80'
                  }`}
                >
                  {/* Pin Dot on the left spine */}
                  <div className={`absolute -left-[19px] sm:-left-[27px] top-6 w-4 h-4 rounded-full border-2 border-white shadow-sm transition-all duration-500 flex items-center justify-center ${
                    isSelected ? 'bg-[#f9572a] scale-125' : 'bg-slate-300'
                  }`} />

                  {/* Header info */}
                  <div className="flex items-start justify-between gap-3 mb-1.5">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-all duration-500 ${
                        isSelected 
                          ? 'bg-gradient-to-br ' + item.color + ' text-white shadow-md' 
                          : 'bg-slate-100 text-slate-400'
                      }`}>
                        <IconComp className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className={`text-[10px] font-mono font-bold px-1.5 py-0.5 rounded transition-colors ${
                            isSelected ? 'bg-[#1a0647] text-white' : 'bg-slate-100 text-slate-500'
                          }`}>
                            {item.num}
                          </span>
                          <span className={`text-[10px] font-mono font-bold uppercase ${
                            isSelected ? item.badgeText : 'text-slate-400'
                          }`}>
                            {item.stage}
                          </span>
                        </div>
                        <h4 className={`font-display font-bold text-base transition-colors ${
                          isSelected ? 'text-[#1a0647]' : 'text-slate-700'
                        }`}>
                          {item.title}
                        </h4>
                      </div>
                    </div>
                  </div>

                  <p className={`text-xs sm:text-sm font-semibold transition-colors ${
                    isSelected ? 'text-slate-800' : 'text-slate-500'
                  }`}>
                    {item.subtitle}
                  </p>
                </div>
              );
            })}
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
