import React from 'react';

export default function PartnersCollaborationSection() {
  const partners = [
    {
      role: 'Organizer',
      name: 'IIRC - ITSB Innovation & Research Centre',
      logo: '/images/iirc-logo.png',
      imgClass: 'h-24 sm:h-28 lg:h-32 w-auto max-w-[94%] group-hover:scale-105',
    },
    {
      role: 'Knowledge Partner',
      name: 'Tenggara Strategics',
      logo: '/images/logos/tenggara.png',
      imgClass: 'w-full max-w-[96%] h-auto max-h-16 sm:max-h-20 lg:max-h-24 scale-105 group-hover:scale-110',
    },
    {
      role: 'Strategic Partner',
      name: 'Harmoni Bisnis Antaranta',
      logo: '/images/logos/harmoni.png',
      imgClass: 'w-full max-w-[94%] h-auto max-h-18 sm:max-h-22 lg:max-h-26 scale-105 group-hover:scale-110',
    },
    {
      role: 'Strategic Partner',
      name: 'EDC Forum',
      logo: '/images/logos/edc.png',
      imgClass: 'w-full max-w-[98%] h-auto max-h-16 sm:max-h-18 lg:max-h-22 scale-110 group-hover:scale-115',
    },
    {
      role: 'In Collaboration with',
      name: 'Techconnect',
      logo: '/images/logos/techconnect.png',
      imgClass: 'w-full max-w-[98%] h-auto max-h-16 sm:max-h-18 lg:max-h-22 scale-110 group-hover:scale-115',
    },
    {
      role: 'In Collaboration with',
      name: 'ITSB Corporation',
      logo: '/images/logos/itsb-corporation.png',
      imgClass: 'w-full max-w-[96%] h-auto max-h-18 sm:max-h-20 lg:max-h-24 scale-105 group-hover:scale-110',
    },
  ];

  return (
    <section className="py-14 md:py-20 bg-slate-50/50 border-t border-slate-100">
      <div className="max-w-7xl 2xl:max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-10">
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-slate-900">
            Didukung oleh Kolaborasi Strategis
          </h2>
        </div>

        {/* Single Unified Flexible Container Box */}
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xl py-8 sm:py-10 px-3 sm:px-6 lg:px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-8 lg:gap-y-0 gap-x-0 items-stretch">
            {partners.map((partner, index) => (
              <div
                key={index}
                className={`flex flex-col items-center justify-between h-full px-2 sm:px-3 lg:px-3 text-center group ${
                  index !== partners.length - 1 ? 'lg:border-r lg:border-slate-200/80' : ''
                }`}
              >
                <span className="text-[11px] sm:text-xs font-semibold text-slate-500 block mb-4 whitespace-nowrap">
                  {partner.role}
                </span>
                
                <div className="w-full flex-1 flex items-center justify-center min-h-[100px] sm:min-h-[120px] lg:min-h-[135px] px-1">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className={`${partner.imgClass} object-contain transition-transform duration-300 filter drop-shadow-xs`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

