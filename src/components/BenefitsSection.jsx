import React from 'react';
import { UserCheck, Building, GraduationCap, Coins, Users, CheckCircle2 } from 'lucide-react';

export default function BenefitsSection() {
  const categories = [
    {
      role: 'Direksi & Komisaris BUMD',
      desc: 'Pengambil keputusan strategis dalam mendorong kinerja, inovasi, dan tata kelola BUMD.',
      icon: UserCheck,
    },
    {
      role: 'Pemda (Provinsi / Kabupaten / Kota)',
      desc: 'Perwakilan pemerintah daerah yang berperan dalam kebijakan, pembinaan, dan pengembangan BUMD.',
      icon: Building,
    },
    {
      role: 'Akademisi & Lembaga Riset',
      desc: 'Perspektif berbasis riset, inovasi, dan pengembangan kapasitas organisasi.',
      icon: GraduationCap,
    },
    {
      role: 'Investor & Lembaga Keuangan',
      desc: 'Mitra strategis untuk mendorong investasi, pendanaan, dan keberlanjutan bisnis BUMD.',
      icon: Coins,
    },
    {
      role: 'Mitra Strategis',
      desc: 'Mitra bisnis, asosiasi, dan lembaga pendukung sinergi sektor publik–swasta.',
      icon: Users,
    },
  ];

  const targetBenefits = [
    {
      tag: 'UNTUK DIREKSI BUMD',
      title: 'Perkuat leadership, ciptakan kinerja unggul',
      desc: 'Wawasan dan strategi teruji dari pakar nasional dan global, benchmarking praktik terbaik antar BUMD, serta jejaring untuk peluang bisnis baru.',
      color: 'border-l-indigo-600 bg-indigo-50/40',
    },
    {
      tag: 'UNTUK PEMDA',
      title: 'Dorong pertumbuhan daerah yang berkelanjutan',
      desc: 'Insight kebijakan dan model bisnis BUMD yang mendorong PAD, sinergi BUMD–OPD, serta solusi inovatif untuk tantangan pembangunan daerah.',
      color: 'border-l-amber-500 bg-amber-50/40',
    },
    {
      tag: 'UNTUK MITRA BISNIS & INVESTOR',
      title: 'Temukan peluang, bangun kolaborasi berdampak',
      desc: 'Akses langsung ke pengambil keputusan BUMD di seluruh Indonesia untuk memperkenalkan solusi dan membangun kemitraan jangka panjang.',
      color: 'border-l-purple-600 bg-purple-50/40',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-indigo-600 block mb-2 font-mono">
            04 — PESERTA & MANFAAT
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-slate-900 max-w-3xl leading-tight">
            Satu forum, tiga perspektif, satu tujuan.
          </h2>
        </div>

        {/* Stakeholder Category List */}
        <div className="bg-slate-50 rounded-2xl border border-slate-200/90 divide-y divide-slate-200/90 overflow-hidden mb-16 shadow-sm">
          {categories.map((cat, i) => {
            const IconComponent = cat.icon;
            return (
              <div
                key={i}
                className="p-5 sm:p-6 md:px-8 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-white transition-colors"
              >
                <div className="flex items-center gap-4 md:w-1/3">
                  <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center shrink-0">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-base md:text-lg">
                    {cat.role}
                  </h3>
                </div>

                <div className="md:w-2/3 text-slate-600 text-sm md:text-base leading-relaxed pl-14 md:pl-0">
                  {cat.desc}
                </div>
              </div>
            );
          })}
        </div>

        {/* 3 Specific Benefit Target Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {targetBenefits.map((item, idx) => (
            <div
              key={idx}
              className={`p-7 rounded-2xl border border-slate-200/80 border-l-4 shadow-sm hover:shadow-md transition flex flex-col justify-between ${item.color}`}
            >
              <div>
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-600 block mb-3">
                  {item.tag}
                </span>

                <h3 className="font-serif text-xl font-bold text-slate-900 mb-3 leading-snug">
                  {item.title}
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {item.desc}
                </p>
              </div>

              <div className="flex items-center gap-2 text-xs font-semibold text-slate-800 pt-4 border-t border-slate-200/60">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Manfaat Utama Sesi</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
