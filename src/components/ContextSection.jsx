import React from 'react';
import { AlertTriangle, TrendingDown, ShieldAlert, FileText, Info } from 'lucide-react';

export default function ContextSection() {
  return (
    <section className="py-16 md:py-24 bg-slate-100 text-slate-900 border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12 items-start">
          <div className="lg:col-span-4">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-500 block mb-2 font-mono">
              01 — KONTEKS
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-slate-900 leading-tight">
              Aset besar belum berarti nilai ekonomi besar.
            </h2>
          </div>

          <div className="lg:col-span-8 lg:pt-6">
            <p className="text-slate-700 text-lg md:text-xl font-normal leading-relaxed max-w-3xl">
              BUMD mengelola aset yang sangat besar, namun kontribusi kepada daerah masih terbatas. Tantangannya bukan kepemilikan aset, melainkan kemampuan menciptakan nilai ekonomi yang berkelanjutan.
            </p>
          </div>
        </div>

        {/* 4 Main Macro Financial Stats Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-10">
          
          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition">
            <div className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif text-slate-900 mb-2">
              ±1.100
            </div>
            <div className="text-sm font-medium text-slate-600">
              BUMD di Indonesia
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition">
            <div className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif text-slate-900 mb-2">
              Rp1.240,9 T
            </div>
            <div className="text-sm font-medium text-slate-600">
              Total aset
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition">
            <div className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif text-slate-900 mb-2">
              Rp24,1 T
            </div>
            <div className="text-sm font-medium text-slate-600">
              Laba bersih agregat
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition">
            <div className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif text-slate-900 mb-2">
              ±Rp13 T
            </div>
            <div className="text-sm font-medium text-slate-600">
              Dividen ke daerah
            </div>
          </div>

        </div>

        {/* Comparison Bar Visualization */}
        <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-200 shadow-sm mb-10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-700">
              Perbandingan Aset terhadap Dividen ke Daerah
            </h3>
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-700 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200">
              <Info className="w-3.5 h-3.5 text-amber-600" />
              Rasio indikatif ±1% (bukan ROA resmi)
            </span>
          </div>

          {/* Bar chart representation */}
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-xs font-bold text-slate-600 mb-1">
                <span>Total Aset BUMD</span>
                <span>Rp 1.240,9 Triliun (100%)</span>
              </div>
              <div className="w-full bg-slate-100 h-6 rounded-lg overflow-hidden p-0.5 border border-slate-200">
                <div className="bg-indigo-900 h-full rounded-md flex items-center px-3 text-xs text-white font-medium">
                  Aset BUMD
                </div>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs font-bold text-slate-600 mb-1">
                <span>Dividen ke Daerah</span>
                <span className="text-amber-700 font-bold">± Rp 13 Triliun (~1.04%)</span>
              </div>
              <div className="w-full bg-slate-100 h-6 rounded-lg overflow-hidden p-0.5 border border-slate-200">
                <div className="bg-gradient-to-r from-amber-500 to-amber-600 h-full rounded-md min-w-[24px] w-[1.04%] flex items-center justify-end px-2 text-xs text-white font-bold">
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Health & Risk Stat Indicator Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-8">
          
          <div className="bg-red-50/60 border border-red-200/80 p-5 rounded-xl">
            <div className="text-3xl md:text-4xl font-bold font-serif text-red-700 mb-1">
              300
            </div>
            <div className="text-xs md:text-sm font-semibold text-red-900">
              BUMD merugi / tidak sehat
            </div>
          </div>

          <div className="bg-amber-50/60 border border-amber-200/80 p-5 rounded-xl">
            <div className="text-3xl md:text-4xl font-bold font-serif text-amber-800 mb-1">
              342
            </div>
            <div className="text-xs md:text-sm font-semibold text-amber-950">
              BUMD belum memiliki SPI
            </div>
          </div>

          <div className="bg-yellow-50/60 border border-yellow-300/80 p-5 rounded-xl">
            <div className="text-3xl md:text-4xl font-bold font-serif text-yellow-800 mb-1">
              49,56%
            </div>
            <div className="text-xs md:text-sm font-semibold text-yellow-950">
              Zona kuning, asesmen BPKP
            </div>
          </div>

          <div className="bg-rose-50/60 border border-rose-300/80 p-5 rounded-xl">
            <div className="text-3xl md:text-4xl font-bold font-serif text-rose-800 mb-1">
              17,59%
            </div>
            <div className="text-xs md:text-sm font-semibold text-rose-950">
              Zona merah, asesmen BPKP
            </div>
          </div>

        </div>

        {/* Source citation */}
        <p className="text-xs text-slate-500 italic leading-relaxed">
          Sumber: Kemendagri – Data dan Kinerja BUMD 2025–2026; BPKP – Masukan terkait Pengawasan BUMD, April 2026; BSKDN – Top BUMD Award 2026.
        </p>

      </div>
    </section>
  );
}
