import React, { useState } from 'react';
import { Check, Minus, Sparkles, Building2, User } from 'lucide-react';

export default function PricingSection() {
  const [selectedPackage, setSelectedPackage] = useState('twin');

  const packages = [
    {
      id: 'entry',
      name: 'Tiket Reguler',
      price: 'Rp6,5 jt',
      subtitle: 'Ideal untuk partisipan non-inap',
      isPopular: false,
    },
    {
      id: 'twin',
      name: 'Residential Twin',
      price: 'Rp8 jt',
      subtitle: 'Paket terfavorit dengan akomodasi twin sharing',
      isPopular: true,
    },
    {
      id: 'single',
      name: 'Residential Single',
      price: 'Rp9,5 jt',
      subtitle: 'Privasi penuh dengan kamar single occupancy',
      isPopular: false,
    },
  ];

  const features = [
    {
      name: 'Akses seluruh sesi forum dan masterclass',
      entry: true,
      twin: true,
      single: true,
    },
    {
      name: 'Networking dengan peserta, pembicara, dan mitra bisnis',
      entry: true,
      twin: true,
      single: true,
    },
    {
      name: 'Materi presentasi dan e-sertifikat',
      entry: true,
      twin: true,
      single: true,
    },
    {
      name: 'Makan siang, coffee break, dan summit kit',
      entry: true,
      twin: true,
      single: true,
    },
    {
      name: 'Akses area pameran dan pameran bisnis',
      entry: true,
      twin: true,
      single: true,
    },
    {
      name: 'Akomodasi 2 hari 1 malam',
      entry: false,
      twin: 'Twin sharing',
      single: 'Single occupancy',
    },
    {
      name: 'Sarapan pagi di hotel',
      entry: false,
      twin: true,
      single: true,
    },
    {
      name: 'Makan malam penyambutan dan networking dinner',
      entry: false,
      twin: true,
      single: true,
    },
    {
      name: 'Antar jemput bandara (pp) sesuai jadwal resmi acara',
      entry: false,
      twin: true,
      single: true,
    },
  ];

  const handleSelectPackage = (pkgId) => {
    setSelectedPackage(pkgId);
    const regSection = document.getElementById('registrasi');
    if (regSection) {
      regSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="investasi" className="py-16 md:py-24 bg-white text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-indigo-600 block mb-2 font-mono">
            06 — INVESTASI PARTISIPASI
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-slate-900 max-w-3xl leading-tight">
            Pilih paket partisipasi yang sesuai kebutuhan delegasi Anda.
          </h2>
        </div>

        {/* Mobile View: Package Cards */}
        <div className="block lg:hidden space-y-6 mb-12">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className={`rounded-2xl p-6 border transition-all duration-300 relative ${
                pkg.isPopular
                  ? 'bg-slate-900 text-white border-slate-800 shadow-xl'
                  : 'bg-slate-50 text-slate-900 border-slate-200'
              }`}
            >
              {pkg.isPopular && (
                <span className="absolute -top-3 right-6 bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-bold text-[10px] uppercase tracking-wider px-3 py-1 rounded-full shadow-md">
                  Paling Populer
                </span>
              )}

              <div className="flex justify-between items-baseline mb-4">
                <div>
                  <h3 className="font-serif text-2xl font-bold">
                    {pkg.name}
                  </h3>
                  <p className={`text-xs mt-1 ${pkg.isPopular ? 'text-slate-300' : 'text-slate-500'}`}>
                    {pkg.subtitle}
                  </p>
                </div>
                <div className={`font-serif text-3xl font-bold ${pkg.isPopular ? 'text-amber-400' : 'text-indigo-900'}`}>
                  {pkg.price}
                </div>
              </div>

              <div className="space-y-3 pt-4 border-t border-slate-200/20 mb-6">
                {features.map((feat, idx) => {
                  const val = feat[pkg.id];
                  if (!val) return null;
                  return (
                    <div key={idx} className="flex items-start gap-2.5 text-xs">
                      <Check className={`w-4 h-4 shrink-0 mt-0.5 ${pkg.isPopular ? 'text-amber-400' : 'text-indigo-600'}`} />
                      <span>
                        {feat.name} {typeof val === 'string' ? `(${val})` : ''}
                      </span>
                    </div>
                  );
                })}
              </div>

              <button
                onClick={() => handleSelectPackage(pkg.id)}
                className={`w-full py-3 px-4 rounded-xl text-sm font-bold transition ${
                  pkg.isPopular
                    ? 'bg-amber-500 hover:bg-amber-400 text-slate-950 shadow-lg shadow-amber-500/20'
                    : 'bg-indigo-950 hover:bg-indigo-900 text-white'
                }`}
              >
                Pilih paket
              </button>
            </div>
          ))}
        </div>

        {/* Desktop View: Comparison Table matching PDF Page 1 */}
        <div className="hidden lg:block bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden shadow-sm mb-8">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-200 bg-white">
                <th className="p-6 text-xs font-bold uppercase tracking-wider text-slate-500 font-mono w-2/5">
                  FASILITAS & BENEFIT
                </th>
                {packages.map((pkg) => (
                  <th key={pkg.id} className={`p-6 text-center w-1/5 ${pkg.isPopular ? 'bg-indigo-950 text-white' : ''}`}>
                    <div className="font-serif text-xl font-bold">
                      {pkg.name}
                    </div>
                    <div className={`text-2xl font-bold font-serif mt-1 ${pkg.isPopular ? 'text-amber-400' : 'text-indigo-900'}`}>
                      {pkg.price}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-sm">
              {features.map((feat, idx) => (
                <tr key={idx} className="hover:bg-slate-100/70 transition">
                  <td className="p-5 font-medium text-slate-800">
                    {feat.name}
                  </td>

                  {/* Entry */}
                  <td className="p-5 text-center">
                    {feat.entry === true ? (
                      <Check className="w-5 h-5 text-emerald-600 mx-auto" />
                    ) : feat.entry === false ? (
                      <Minus className="w-4 h-4 text-slate-300 mx-auto" />
                    ) : (
                      <span className="text-xs font-semibold text-slate-700">{feat.entry}</span>
                    )}
                  </td>

                  {/* Twin */}
                  <td className="p-5 text-center bg-indigo-950/5">
                    {feat.twin === true ? (
                      <Check className="w-5 h-5 text-indigo-700 font-bold mx-auto" />
                    ) : feat.twin === false ? (
                      <Minus className="w-4 h-4 text-slate-300 mx-auto" />
                    ) : (
                      <span className="text-xs font-bold text-indigo-900">{feat.twin}</span>
                    )}
                  </td>

                  {/* Single */}
                  <td className="p-5 text-center">
                    {feat.single === true ? (
                      <Check className="w-5 h-5 text-emerald-600 mx-auto" />
                    ) : feat.single === false ? (
                      <Minus className="w-4 h-4 text-slate-300 mx-auto" />
                    ) : (
                      <span className="text-xs font-semibold text-slate-700">{feat.single}</span>
                    )}
                  </td>
                </tr>
              ))}

              {/* Action Buttons Row */}
              <tr className="bg-white border-t-2 border-slate-200">
                <td className="p-6 text-xs text-slate-500 italic">
                  Harga per peserta. Kuota terbatas.
                </td>
                <td className="p-6 text-center">
                  <button
                    onClick={() => handleSelectPackage('entry')}
                    className="w-full py-2.5 px-4 rounded-xl text-xs font-bold border border-slate-300 hover:bg-slate-100 transition"
                  >
                    Pilih paket
                  </button>
                </td>
                <td className="p-6 text-center bg-indigo-950/5">
                  <button
                    onClick={() => handleSelectPackage('twin')}
                    className="w-full py-2.5 px-4 rounded-xl text-xs font-bold bg-indigo-950 hover:bg-indigo-900 text-white shadow-md transition"
                  >
                    Pilih paket
                  </button>
                </td>
                <td className="p-6 text-center">
                  <button
                    onClick={() => handleSelectPackage('single')}
                    className="w-full py-2.5 px-4 rounded-xl text-xs font-bold border border-slate-300 hover:bg-slate-100 transition"
                  >
                    Pilih paket
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </section>
  );
}
