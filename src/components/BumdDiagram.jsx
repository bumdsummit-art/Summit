import React from 'react';
import { Landmark, Cpu, Link as LinkIcon, Users } from 'lucide-react';

export default function BumdDiagram() {
  return (
    <div className="relative w-full max-w-[620px] mx-auto p-5 sm:p-7 rounded-[36px] bg-[#121214] border border-slate-800 shadow-2xl overflow-hidden group/diagram">
      
      {/* Custom Keyframe Animations */}
      <style>{`
        @keyframes orbGlowPulse {
          0%, 100% {
            box-shadow: 0 0 35px rgba(56, 189, 248, 0.65), 0 0 65px rgba(249, 87, 42, 0.55), inset 0 0 25px rgba(56, 189, 248, 0.45);
            transform: scale(1);
          }
          50% {
            box-shadow: 0 0 50px rgba(56, 189, 248, 0.9), 0 0 85px rgba(249, 87, 42, 0.8), inset 0 0 35px rgba(56, 189, 248, 0.65);
            transform: scale(1.025);
          }
        }
        @keyframes energyDash {
          to {
            stroke-dashoffset: -32;
          }
        }
        @keyframes floatSubtle1 { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-3px); } }
        @keyframes floatSubtle2 { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(3px); } }
        
        .animate-orb-glow { animation: orbGlowPulse 4s ease-in-out infinite; }
        .animate-energy-line { stroke-dasharray: 8 6; animation: energyDash 1.8s linear infinite; }
        .animate-float-1 { animation: floatSubtle1 5s ease-in-out infinite; }
        .animate-float-2 { animation: floatSubtle2 5.5s ease-in-out infinite; }
      `}</style>

      {/* SVG Membrane & Energy Lines (Cleanly outside cards) */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none z-10"
        viewBox="0 0 600 450"
        preserveAspectRatio="none"
      >
        <defs>
          <filter id="neonGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3.5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>

          <linearGradient id="waveBlueOrange1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.85" />
            <stop offset="60%" stopColor="#60a5fa" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#f9572a" stopOpacity="0.85" />
          </linearGradient>

          <linearGradient id="tentacleStroke" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="50%" stopColor="#60a5fa" />
            <stop offset="100%" stopColor="#f9572a" />
          </linearGradient>

          {/* Organic Membrane Glass Fill */}
          <linearGradient id="membraneFill" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1d4ed8" stopOpacity="0.25" />
            <stop offset="50%" stopColor="#38bdf8" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#f9572a" stopOpacity="0.25" />
          </linearGradient>
        </defs>

        {/* Fluid Organic 4-Arm Star Membrane connecting orb to the 4 inner corner nodes */}
        {/* Top-Left Tentacle Path */}
        <path
          d="M 255 178 Q 242 166 235 158"
          fill="none"
          stroke="url(#tentacleStroke)"
          strokeWidth="5"
          strokeLinecap="round"
          filter="url(#neonGlow)"
        />
        <path
          d="M 255 178 Q 242 166 235 158"
          fill="none"
          stroke="#ffffff"
          strokeWidth="2"
          className="animate-energy-line opacity-95"
        />

        {/* Top-Right Tentacle Path */}
        <path
          d="M 345 178 Q 358 166 365 158"
          fill="none"
          stroke="url(#tentacleStroke)"
          strokeWidth="5"
          strokeLinecap="round"
          filter="url(#neonGlow)"
        />
        <path
          d="M 345 178 Q 358 166 365 158"
          fill="none"
          stroke="#ffffff"
          strokeWidth="2"
          className="animate-energy-line opacity-95"
        />

        {/* Bottom-Left Tentacle Path */}
        <path
          d="M 255 272 Q 242 284 235 292"
          fill="none"
          stroke="url(#tentacleStroke)"
          strokeWidth="5"
          strokeLinecap="round"
          filter="url(#neonGlow)"
        />
        <path
          d="M 255 272 Q 242 284 235 292"
          fill="none"
          stroke="#ffffff"
          strokeWidth="2"
          className="animate-energy-line opacity-95"
        />

        {/* Bottom-Right Tentacle Path */}
        <path
          d="M 345 272 Q 358 284 365 292"
          fill="none"
          stroke="url(#tentacleStroke)"
          strokeWidth="5"
          strokeLinecap="round"
          filter="url(#neonGlow)"
        />
        <path
          d="M 345 272 Q 358 284 365 292"
          fill="none"
          stroke="#ffffff"
          strokeWidth="2"
          className="animate-energy-line opacity-95"
        />
      </svg>

      {/* 2x2 Grid Container for 4 Cards */}
      <div className="grid grid-cols-2 gap-x-8 gap-y-16 relative z-20 my-2">
        
        {/* Card 1: Government (Top Left) */}
        <div className="animate-float-1 bg-gradient-to-br from-white via-slate-50 to-sky-50/40 rounded-[28px] p-4 sm:p-5 border-[3px] border-[#3b82f6]/90 shadow-[0_8px_25px_rgba(59,130,246,0.18)] hover:shadow-[0_12px_30px_rgba(59,130,246,0.3)] transition-all duration-300 relative group overflow-hidden min-h-[145px] flex flex-col justify-between">
          
          {/* Inner Corner Node Dock Dot (Bottom-Right of Card 1) */}
          <div className="absolute bottom-2 right-2 w-5 h-5 rounded-full bg-[#2563eb] border-2 border-white flex items-center justify-center shadow-[0_0_12px_rgba(59,130,246,0.9)] z-30">
            <div className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
          </div>

          {/* Bottom Right Corner Wave Graphic */}
          <div className="absolute bottom-0 right-0 w-32 h-20 pointer-events-none opacity-90">
            <svg viewBox="0 0 140 90" className="w-full h-full" fill="none">
              <path d="M 0 90 C 40 70, 85 35, 140 10 L 140 90 Z" fill="url(#waveBlueOrange1)" />
              <path d="M 20 90 C 60 75, 95 45, 140 25 L 140 90 Z" fill="#ffffff" opacity="0.4" />
            </svg>
          </div>

          <div className="relative z-10">
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-[#e0e7ff] text-[#1e1b4b] flex items-center justify-center mb-3 shadow-xs group-hover:scale-110 transition-transform">
              <Landmark className="w-6 h-6 stroke-[2.4]" />
            </div>
            <h4 className="font-display font-black text-slate-900 text-lg sm:text-xl tracking-tight leading-tight">
              Pemerintah
            </h4>
            <p className="text-xs sm:text-sm font-semibold text-slate-500 mt-1">
              Kebijakan dan mandat
            </p>
          </div>
        </div>

        {/* Card 2: Digital Transformation (Top Right) */}
        <div className="animate-float-2 bg-gradient-to-br from-white via-slate-50 to-sky-50/40 rounded-[28px] p-4 sm:p-5 border-[3px] border-[#3b82f6]/90 shadow-[0_8px_25px_rgba(59,130,246,0.18)] hover:shadow-[0_12px_30px_rgba(59,130,246,0.3)] transition-all duration-300 relative group overflow-hidden min-h-[145px] flex flex-col justify-between">
          
          {/* Inner Corner Node Dock Dot (Bottom-Left of Card 2) */}
          <div className="absolute bottom-2 left-2 w-5 h-5 rounded-full bg-[#2563eb] border-2 border-white flex items-center justify-center shadow-[0_0_12px_rgba(59,130,246,0.9)] z-30">
            <div className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
          </div>

          {/* Bottom Right Corner Wave Graphic */}
          <div className="absolute bottom-0 right-0 w-32 h-20 pointer-events-none opacity-90">
            <svg viewBox="0 0 140 90" className="w-full h-full" fill="none">
              <path d="M 0 90 C 40 70, 85 35, 140 10 L 140 90 Z" fill="url(#waveBlueOrange1)" />
              <path d="M 20 90 C 60 75, 95 45, 140 25 L 140 90 Z" fill="#ffffff" opacity="0.4" />
            </svg>
          </div>

          <div className="relative z-10">
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-[#e0e7ff] text-[#1e1b4b] flex items-center justify-center mb-3 shadow-xs group-hover:scale-110 transition-transform">
              <Cpu className="w-6 h-6 stroke-[2.4]" />
            </div>
            <h4 className="font-display font-black text-slate-900 text-lg sm:text-xl tracking-tight leading-tight">
              Transformasi Digital
            </h4>
            <p className="text-xs sm:text-sm font-semibold text-slate-500 mt-1">
              Sistem dan data
            </p>
          </div>
        </div>

        {/* Card 3: Strategic Partnership (Bottom Left) */}
        <div className="animate-float-2 bg-gradient-to-br from-white via-slate-50 to-orange-50/30 rounded-[28px] p-4 sm:p-5 border-[3px] border-[#3b82f6]/90 shadow-[0_8px_25px_rgba(59,130,246,0.18)] hover:shadow-[0_12px_30px_rgba(59,130,246,0.3)] transition-all duration-300 relative group overflow-hidden min-h-[145px] flex flex-col justify-between">
          
          {/* Inner Corner Node Dock Dot (Top-Right of Card 3) */}
          <div className="absolute top-2 right-2 w-5 h-5 rounded-full bg-[#ea580c] border-2 border-white flex items-center justify-center shadow-[0_0_12px_rgba(249,87,42,0.9)] z-30">
            <div className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
          </div>

          {/* Bottom Right Corner Wave Graphic */}
          <div className="absolute bottom-0 right-0 w-32 h-20 pointer-events-none opacity-90">
            <svg viewBox="0 0 140 90" className="w-full h-full" fill="none">
              <path d="M 0 90 C 40 70, 85 35, 140 10 L 140 90 Z" fill="url(#waveBlueOrange1)" />
              <path d="M 20 90 C 60 75, 95 45, 140 25 L 140 90 Z" fill="#ffffff" opacity="0.4" />
            </svg>
          </div>

          <div className="relative z-10">
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-[#ffedd5] text-[#ea580c] flex items-center justify-center mb-3 shadow-xs group-hover:scale-110 transition-transform">
              <LinkIcon className="w-6 h-6 stroke-[2.4]" />
            </div>
            <h4 className="font-display font-black text-slate-900 text-lg sm:text-xl tracking-tight leading-tight">
              Kemitraan Strategis
            </h4>
            <p className="text-xs sm:text-sm font-semibold text-slate-500 mt-1">
              Sektor swasta dan publik
            </p>
          </div>
        </div>

        {/* Card 4: Enterprise Network (Bottom Right) */}
        <div className="animate-float-1 bg-gradient-to-br from-white via-slate-50 to-sky-50/40 rounded-[28px] p-4 sm:p-5 border-[3px] border-[#3b82f6]/90 shadow-[0_8px_25px_rgba(59,130,246,0.18)] hover:shadow-[0_12px_30px_rgba(59,130,246,0.3)] transition-all duration-300 relative group overflow-hidden min-h-[145px] flex flex-col justify-between">
          
          {/* Inner Corner Node Dock Dot (Top-Left of Card 4) */}
          <div className="absolute top-2 left-2 w-5 h-5 rounded-full bg-[#ea580c] border-2 border-white flex items-center justify-center shadow-[0_0_12px_rgba(249,87,42,0.9)] z-30">
            <div className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
          </div>

          {/* Bottom Right Corner Wave Graphic */}
          <div className="absolute bottom-0 right-0 w-32 h-20 pointer-events-none opacity-90">
            <svg viewBox="0 0 140 90" className="w-full h-full" fill="none">
              <path d="M 0 90 C 40 70, 85 35, 140 10 L 140 90 Z" fill="url(#waveBlueOrange1)" />
              <path d="M 20 90 C 60 75, 95 45, 140 25 L 140 90 Z" fill="#ffffff" opacity="0.4" />
            </svg>
          </div>

          <div className="relative z-10">
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-[#e0e7ff] text-[#1e1b4b] flex items-center justify-center mb-3 shadow-xs group-hover:scale-110 transition-transform">
              <Users className="w-6 h-6 stroke-[2.4]" />
            </div>
            <h4 className="font-display font-black text-slate-900 text-lg sm:text-xl tracking-tight leading-tight">
              Jaringan Korporasi
            </h4>
            <p className="text-xs sm:text-sm font-semibold text-slate-500 mt-1">
              Kolaborasi antardaerah
            </p>
          </div>
        </div>

      </div>

      {/* Central Glowing BUMD Orb (Exact Center) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-auto">
        <div className="relative flex items-center justify-center">
          
          {/* Outer Glowing Neon Ring */}
          <div className="absolute -inset-1.5 rounded-full bg-gradient-to-r from-[#3b82f6] via-[#60a5fa] to-[#f9572a] opacity-90 blur-md animate-orb-glow" />

          {/* Core Orb Container */}
          <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-full bg-gradient-to-b from-[#190d3d] via-[#0b0521] to-[#04020a] text-white flex flex-col items-center justify-center text-center p-3 border-[3.5px] border-sky-300 shadow-2xl relative z-10 group/orb hover:scale-105 transition-transform duration-300 overflow-hidden">
            
            {/* Top-Left Cyan Lens Flare Accent */}
            <div className="absolute -top-3 -left-3 w-16 h-16 rounded-full bg-sky-400/30 blur-md" />
            
            {/* Bottom-Right Orange Lens Flare Accent */}
            <div className="absolute -bottom-3 -right-3 w-16 h-16 rounded-full bg-orange-500/30 blur-md" />

            {/* Shimmer Flare Curve */}
            <div className="absolute top-2 left-4 w-10 h-3 rounded-full bg-white/25 blur-xs transform -rotate-45" />

            <span className="font-display font-black text-2xl sm:text-3xl tracking-wider leading-none text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
              BUMD
            </span>
            <span className="text-[10px] sm:text-xs font-bold text-slate-200 tracking-tight mt-1 opacity-95">
              Badan Usaha Daerah
            </span>
          </div>
          </div>

        </div>
      </div>

    </div>
  );
}
