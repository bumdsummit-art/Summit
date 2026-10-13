import React from 'react';
import { ShieldCheck, Cpu, Leaf, Handshake, Landmark, Globe2, Quote } from 'lucide-react';

export default function PillarsSection() {
  const pillars = [
    {
      number: '01',
      title: 'Transformasi & Tata Kelola',
      desc: 'Memperkuat tata kelola, manajemen risiko, dan kepemimpinan adaptif untuk BUMD yang unggul.',
      icon: ShieldCheck,
    },
    {
      number: '02',
      title: 'Inovasi & Digitalisasi',
      desc: 'Mendorong inovasi layanan, digitalisasi proses bisnis, dan pemanfaatan teknologi untuk efisiensi dan daya saing.',
      icon: Cpu,
    },
    {
      number: '03',
      title: 'Keberlanjutan & ESG',
      desc: 'Mengintegrasikan prinsip ESG dan keberlanjutan dalam strategi dan operasi BUMD.',
      icon: Leaf,
    },
    {
      number: '04',
      title: 'Kolaborasi & Sinergi Daerah',
      desc: 'Memperkuat sinergi antar BUMD, Pemda, dan pemangku kepentingan untuk nilai ekonomi yang lebih besar.',
      icon: Handshake,
    },
    {
      number: '05',
      title: 'Investasi & Pembiayaan',
      desc: 'Membuka akses investasi, kemitraan strategis, dan skema pembiayaan inovatif untuk pertumbuhan berkelanjutan.',
      icon: Landmark,
    },
    {
      number: '06',
      title: 'Daya Saing Global & Ekspansi Pasar',
      desc: 'Mendorong BUMD untuk go global, ekspansi pasar, dan membangun brand bertaraf internasional.',
      icon: Globe2,
    },
  ];

  return (
    <section id="pilar" className="py-16 md:py-24 bg-white text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-indigo-600 block mb-2 font-mono">
            02 — PILAR STRATEGIS
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-slate-900 max-w-3xl leading-tight">
            Enam agenda strategis yang menjadi kerangka seluruh sesi summit.
          </h2>
        </div>

        {/* 6 Strategic Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16">
          {pillars.map((pillar) => {
            const IconComponent = pillar.icon;
            return (
              <div
                key={pillar.number}
                className="group relative bg-slate-50 hover:bg-slate-900 hover:text-white p-7 rounded-2xl border border-slate-200/90 hover:border-slate-800 transition-all duration-300 shadow-sm hover:shadow-xl flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-sm font-bold font-mono text-indigo-600 group-hover:text-amber-400 bg-indigo-50 group-hover:bg-amber-400/10 px-3 py-1 rounded-full transition">
                      {pillar.number}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-white group-hover:bg-white/10 flex items-center justify-center text-slate-700 group-hover:text-amber-400 shadow-sm transition">
                      <IconComponent className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold font-serif text-slate-900 group-hover:text-white mb-3">
                    {pillar.title}
                  </h3>

                  <p className="text-slate-600 group-hover:text-slate-300 text-sm leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>

                <div className="pt-6 mt-4 border-t border-slate-200 group-hover:border-white/10 flex items-center justify-between text-xs font-semibold text-indigo-600 group-hover:text-amber-400">
                  <span>Pelajari Agenda</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Highlight Quote Banner */}
        <div className="relative bg-gradient-to-r from-[#0b092b] via-[#16134b] to-[#0b092b] text-white p-8 md:p-12 rounded-3xl overflow-hidden shadow-2xl border border-indigo-900">
          <div className="absolute -right-6 -bottom-10 opacity-10 text-white">
            <Quote className="w-64 h-64" />
          </div>
          <div className="relative z-10 max-w-4xl">
            <p className="font-serif text-xl sm:text-2xl md:text-3xl font-light italic leading-relaxed text-amber-200">
              “Menjadikan BUMD sebagai motor penggerak ekonomi daerah yang cerdas, kompetitif, dan berdaya saing global.”
            </p>
            <div className="mt-4 flex items-center gap-3">
              <div className="w-8 h-0.5 bg-amber-400" />
              <span className="text-xs uppercase tracking-widest text-slate-300 font-semibold">
                Visi Strategis Summit 2026
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
