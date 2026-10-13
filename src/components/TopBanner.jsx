import React from 'react';
import { MapPin, Calendar, Building2, Globe } from 'lucide-react';

export default function TopBanner() {
  return (
    <div className="bg-[#07051e] text-slate-300 text-xs py-2.5 px-4 border-b border-white/10 select-none">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-4 gap-y-1">
          <span className="flex items-center gap-1.5 font-medium text-slate-200">
            <Calendar className="w-3.5 h-3.5 text-amber-400" />
            25–26 November 2026
          </span>
          <span className="hidden md:inline text-slate-600">•</span>
          <span className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-amber-400" />
            Samisara Grand Ballroom, Jakarta
          </span>
          <span className="hidden lg:inline text-slate-600">•</span>
          <span className="hidden lg:flex items-center gap-1.5 text-slate-400">
            <Building2 className="w-3.5 h-3.5 text-indigo-400" />
            Diselenggarakan oleh IIRC — ITSB Innovation & Research Centre
          </span>
        </div>

        <div className="flex items-center gap-4 text-[#94a3b8]">
          <div className="flex items-center gap-1 bg-white/5 px-2 py-0.5 rounded border border-white/10">
            <Globe className="w-3 h-3 text-indigo-300" />
            <span className="font-semibold text-white">ID</span>
            <span className="text-slate-500">|</span>
            <span className="hover:text-white cursor-pointer transition">EN</span>
          </div>
        </div>
      </div>
    </div>
  );
}
