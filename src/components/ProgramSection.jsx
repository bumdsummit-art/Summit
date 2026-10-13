import React, { useState } from 'react';
import { Sparkles, X, Clock, MapPin } from 'lucide-react';

export default function ProgramSection() {
  const [selectedFormat, setSelectedFormat] = useState(null);

  const formats = [
    {
      code: 'FORMAT 01',
      title: 'Masterclass',
      subtitle: 'Foto: sesi masterclass',
      image: '/images/masterclass.jpg',
      desc: 'Sesi pembelajaran mendalam bersama pemimpin, praktisi, dan expert terkemuka.',
      detail: 'Sesi kelas eksekutif eksklusif 90 menit yang membahas topik-topik krusial seperti restrukturisasi finansial BUMD, penerapan Governance Risk & Compliance (GRC), skema kemitraan pemerintah swasta, dan strategi transformasi digital.',
      features: ['Sertifikat resmi masterclass', 'Modul & toolkit eksklusif', 'Q&A interaktif dengan pakar']
    },
    {
      code: 'FORMAT 02',
      title: 'Forum',
      subtitle: 'Foto: panel forum',
      image: '/images/forum.jpg',
      desc: 'Diskusi strategis bersama pembuat kebijakan, pelaku industri, akademisi, dan thought leaders.',
      detail: 'Panel diskusi tingkat tinggi menghadirkan jajaran Menteri, Kepala Daerah, Dirut BUMD Unggulan, dan pengamat ekonomi untuk mengupas kebijakan nasional dan solusi konkret untuk kemajuan BUMD.',
      features: ['Keynote speech pejabat tinggi', 'Diskusi panel lintas sektor', 'Tanya jawab langsung']
    },
    {
      code: 'FORMAT 03',
      title: 'Networking',
      subtitle: 'Foto: networking',
      image: '/images/networking.jpg',
      desc: 'Koneksi berkualitas dengan sesama pemimpin BUMD, investor, dan mitra strategis.',
      detail: 'Sesi khusus Networking Dinner & Business Matchmaking yang dirancang untuk membangun kemitraan bisnis konkret antar BUMD lintas daerah, perbankan, dan investor nasional maupun internasional.',
      features: ['Executive Gala Dinner', 'Matchmaking 1-on-1 session', 'Pertemuan direksi & investor']
    },
    {
      code: 'FORMAT 04',
      title: 'Pameran Bisnis',
      subtitle: 'Foto: area showcase',
      image: '/images/showcase.jpg',
      desc: 'Pameran solusi, inovasi, dan peluang bisnis dari BUMD, mitra, dan penyedia teknologi.',
      detail: 'Area pameran eksklusif menampilkan produk unggulan BUMD, teknologi smart city, platform digitalisasi keuangan, dan solusi efisiensi energi yang siap diimplementasikan oleh BUMD.',
      features: ['20+ Booth pameran inovasi', 'Demo solusi teknologi', 'Pitching session peluang proyek']
    },
  ];

  return (
    <section id="program" className="py-16 md:py-24 bg-slate-100 text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-slate-500 block mb-2 font-mono">
            03 — FORMAT PROGRAM
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-slate-900 max-w-3xl leading-tight">
            Rangkaian pengalaman eksekutif untuk insight, koneksi, dan peluang nyata.
          </h2>
        </div>

        {/* 4 Program Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {formats.map((item) => (
            <div
              key={item.code}
              onClick={() => setSelectedFormat(item)}
              className="group bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between"
            >
              {/* Image Preview Container */}
              <div className="relative h-48 sm:h-52 overflow-hidden bg-slate-200">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-80" />
                <div className="absolute top-3 left-3 bg-slate-900/90 text-amber-400 font-mono text-[10px] font-bold px-2.5 py-1 rounded-md border border-slate-700/80 uppercase">
                  {item.code}
                </div>
                <div className="absolute bottom-3 left-3 text-xs text-slate-300 italic font-mono opacity-90">
                  {item.subtitle}
                </div>
              </div>

              {/* Content */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-xl font-bold text-slate-900 mb-2 group-hover:text-indigo-600 transition">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    {item.desc}
                  </p>
                </div>

                <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-600 group-hover:text-amber-700 pt-3 border-t border-slate-100">
                  <span>Lihat Detail Program</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Program Detail Modal */}
      {selectedFormat && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in">
          <div className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl border border-slate-200">
            <div className="relative h-64">
              <img
                src={selectedFormat.image}
                alt={selectedFormat.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent" />
              <button
                onClick={() => setSelectedFormat(null)}
                className="absolute top-4 right-4 bg-slate-900/80 text-white hover:bg-slate-900 p-2 rounded-full backdrop-blur-sm transition"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-400 bg-amber-950/60 px-2.5 py-1 rounded-md border border-amber-500/30">
                  {selectedFormat.code}
                </span>
                <h3 className="font-serif text-3xl font-bold mt-2 text-white">
                  {selectedFormat.title}
                </h3>
              </div>
            </div>

            <div className="p-6 md:p-8 space-y-6">
              <p className="text-slate-700 text-base leading-relaxed">
                {selectedFormat.detail}
              </p>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 font-mono">
                  Sorotan Pengalaman
                </h4>
                <ul className="space-y-2">
                  {selectedFormat.features.map((feat, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-slate-800 font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-slate-100 flex justify-end">
                <button
                  onClick={() => setSelectedFormat(null)}
                  className="bg-slate-900 hover:bg-slate-800 text-white font-medium px-6 py-2.5 rounded-xl text-sm transition"
                >
                  Tutup
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
