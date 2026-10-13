import React from 'react';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';

export default function HeroSection() {
  const gmapsUrl = "https://www.google.com/maps/place/Samisara+Grand+Ballroom+Sopodel+Tower/@-6.2308452,106.8058742,2865m/data=!3m1!1e3!4m10!1m2!2m1!1sSamisara+Grand+Ballroom+Jakarta!3m6!1s0x2e69f343eb0cbb17:0xd7b3cf9e7cb479!8m2!3d-6.2308452!4d106.8238986!15sCh9TYW1pc2FyYSBHcmFuZCBCYWxscm9vbSBKYWthcnRhWiEiH3NhbWlzYXJhIGdyYW5kIGJhbGxyb29tIGpha2FydGGSAQtldmVudF92ZW51ZZoBRENpOURRVWxSUVVOdlpFTm9kSGxqUmpsdlQydDRibEo2WkZWaVJVMHpZMGhGTVZJemFIZGFXR2g0Vkd0d2ExVnVZeEFC4AEA-gEECAAQPA!16s%2Fg%2F11h4v0x9kw!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDkzMC4wIKXMDSoASAFQAw%3D%3D";

  return (
    <section 
      className="py-10 sm:py-16 md:py-24 bg-cover bg-right sm:bg-center bg-no-repeat overflow-hidden relative min-h-[460px] sm:min-h-[550px] flex items-center"
      style={{ backgroundImage: "url('/images/bg-utama.png')" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="max-w-xl lg:max-w-2xl space-y-6 sm:space-y-8 bg-white/85 sm:bg-transparent backdrop-blur-md sm:backdrop-blur-none p-5 sm:p-0 rounded-3xl border border-white/80 sm:border-0 shadow-lg sm:shadow-none">
          
          {/* Responsive Title */}
          <div className="space-y-0.5 sm:space-y-1">
            <h1 className="font-display font-black text-3xl sm:text-5xl md:text-7xl tracking-tight text-[#240a5e] leading-[0.95]">
              BUMD
            </h1>
            <div className="font-display font-extrabold text-xl sm:text-3xl md:text-5xl tracking-tight text-[#240a5e] leading-tight">
              SCALE UP SUMMIT
            </div>
            <div className="font-display font-black text-3xl sm:text-5xl md:text-7xl tracking-tight text-[#f9572a] leading-none pt-0.5">
              2026
            </div>
          </div>

          {/* Subtitle */}
          <p className="text-slate-800 text-sm sm:text-lg md:text-xl font-medium leading-relaxed max-w-xl">
            Transforming Regional Enterprises into Intelligent, Competitive, and Globally Connected Businesses
          </p>

          {/* Two Meta Cards (Equal Height & Dimensions) */}
          <div className="flex flex-col sm:flex-row items-stretch gap-3 sm:gap-4 pt-1 sm:pt-2 max-w-xl">
            
            {/* Card 1: Date */}
            <div className="flex items-center gap-3 bg-white/95 backdrop-blur-md p-3.5 sm:p-4 rounded-xl sm:rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition flex-1 min-h-[72px] sm:min-h-[80px]">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#240a5e] text-white flex items-center justify-center shrink-0">
                <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-purple-200" />
              </div>
              <div>
                <div className="font-bold text-slate-900 text-xs sm:text-sm font-sans whitespace-nowrap">
                  25–26 November 2026
                </div>
                <div className="text-[11px] sm:text-xs text-slate-500 font-medium">
                  Two full days
                </div>
              </div>
            </div>

            {/* Card 2: Venue with GMaps Button */}
            <a
              href={gmapsUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between gap-2 bg-white/95 backdrop-blur-md p-3.5 sm:p-4 rounded-xl sm:rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md hover:border-purple-300 transition flex-1 min-h-[72px] sm:min-h-[80px] group"
              title="Buka lokasi di Google Maps"
            >
              <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#240a5e] text-white flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-purple-200" />
                </div>
                <div className="min-w-0">
                  <div className="font-bold text-slate-900 text-xs sm:text-sm font-sans truncate">
                    Samisara Grand Ballroom
                  </div>
                  <div className="text-[11px] sm:text-xs text-slate-500 font-medium">
                    Jakarta
                  </div>
                </div>
              </div>

              {/* Small GMaps Action Button Badge */}
              <div className="px-2 py-1 sm:px-2.5 rounded-lg bg-purple-50 group-hover:bg-[#240a5e] text-[#240a5e] group-hover:text-white text-[10px] font-extrabold transition-all duration-200 flex items-center gap-1 shrink-0 border border-purple-200/60 shadow-xs">
                <span>Maps</span>
                <ExternalLink className="w-3 h-3" />
              </div>
            </a>

          </div>

        </div>
      </div>

      {/* Bottom Smooth Gradient Fade Blend Overlay to seamlessly merge into the next section */}
      <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-28 bg-gradient-to-t from-white via-white/40 to-transparent pointer-events-none z-10" />
    </section>
  );
}
