import React from 'react';
import { Lightbulb, Users, Cpu, Handshake } from 'lucide-react';

export default function WhyJoinSection() {
  const benefits = [
    {
      title: 'Wawasan Kepemimpinan Strategis',
      desc: 'Dapatkan perspektif langsung dari para pemimpin industri dan pakar transformasi bisnis.',
      icon: Lightbulb,
    },
    {
      title: 'Networking Eksekutif',
      desc: 'Terhubung langsung dengan pengambil kebijakan, pimpinan BUMD, dan mitra strategis.',
      icon: Users,
    },
    {
      title: 'Transformasi Digital',
      desc: 'Eksplorasi solusi teknologi terdepan untuk kesiapan organisasi menghadapi masa depan.',
      icon: Cpu,
    },
    {
      title: 'Kolaborasi Bisnis',
      desc: 'Temukan peluang investasi, ekspansi pasar, dan kemitraan strategis antardaerah.',
      icon: Handshake,
    },
  ];

  return (
    <section id="why-join" className="py-16 md:py-24 bg-gradient-to-b from-white via-purple-50/20 to-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="mb-12">
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-slate-900">
            Mengapa Perlu Hadir
          </h2>
        </div>

        {/* 4 Cards Grid matching Page 2 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="bg-white p-7 rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-11 h-11 rounded-xl bg-[#240a5e] text-white flex items-center justify-center mb-6 shadow-md shadow-purple-900/10">
                    <IconComponent className="w-5 h-5 text-purple-200" />
                  </div>

                  <h3 className="font-display font-bold text-lg text-slate-900 mb-3 leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
