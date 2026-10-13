import React from 'react';

export default function SpeakersSection() {
  const row1 = [
    {
      name: 'Pramono Anung',
      position: 'Gubernur DKI Jakarta',
      image: '/images/speakers/Pramono Anung.png',
    },
    {
      name: 'Dr. Drs. Agus Fatoni, M.Si.',
      position: 'Dirjen Bina Keuangan Daerah, Kemendagri',
      image: '/images/speakers/Dr. Agus Fatoni.png',
    },
    {
      name: 'Gita Wirjawan',
      position: 'Menteri Perdagangan RI 2011–2014',
      image: '/images/speakers/Gita Wirjawan.png',
    },
    {
      name: 'Swasono Satyo',
      position: 'CHRO Sinarmas Mining and Multiartha',
      image: '/images/speakers/Swasono Satyo.png',
    },
    {
      name: 'Budi Djatmiko',
      position: 'Komisaris Utama PT Pos Indonesia',
      image: '/images/speakers/Budi Djatmiko.png',
    },
  ];

  const row2 = [
    {
      name: 'Syaefuloh Hidayat',
      position: 'Kepala BP BUMD DKI Jakarta',
      image: '/images/speakers/Syaefuloh.png',
    },
    {
      name: 'Welfizon Yuza',
      position: 'Direktur Utama Transjakarta',
      image: '/images/speakers/Welfizon Yuza.png',
    },
    {
      name: 'Rico Usthavia',
      position: 'Direktur Operasional CIMB Niaga',
      image: '/images/speakers/Rico Usthavia.png',
    },
    {
      name: 'Arief Nasrudin',
      position: 'Direktur Utama PAM Jaya',
      image: '/images/speakers/Arief Nasrudin.png',
    },
    {
      name: 'Riyadi Suparno',
      position: 'Direktur Eksekutif Tenggara Strategics',
      image: '/images/speakers/Riyadi Suparno.png',
    },
    {
      name: 'Tina Melinda',
      position: 'Direktur IIRC',
      image: '/images/speakers/Tina Melinda.png',
    },
  ];

  return (
    <section id="speakers" className="py-16 md:py-24 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Dark Purple Outer Container matching original design mockup */}
        <div className="bg-gradient-to-br from-[#1c084a] via-[#240a5e] to-[#2d0c75] rounded-3xl p-6 sm:p-10 md:p-12 text-white shadow-2xl border border-purple-900/50">
          
          <div className="mb-10">
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white">
              Jajaran Pembicara dan Pemimpin Sesi
            </h2>
          </div>

          {/* Row 1: 5 Columns (5 Banjar) */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 mb-6">
            {row1.map((speaker, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/15 rounded-2xl p-4 text-center hover:bg-white/10 transition duration-300 backdrop-blur-sm group flex flex-col justify-between"
              >
                {/* Image Frame */}
                <div className="w-full h-44 sm:h-48 rounded-xl bg-gradient-to-b from-purple-300/10 to-white/10 border border-purple-300/20 overflow-hidden mb-3.5 flex items-end justify-center relative">
                  <img
                    src={speaker.image}
                    alt={speaker.name}
                    className="max-h-full object-contain object-bottom group-hover:scale-105 transition-transform duration-500 drop-shadow-lg"
                  />
                </div>

                {/* Speaker Info: Only Name & Position */}
                <div className="flex-1 flex flex-col justify-center">
                  <h3 className="font-display font-bold text-sm sm:text-base text-white mb-1 leading-snug">
                    {speaker.name}
                  </h3>
                  <p className="text-xs font-semibold text-[#f9572a] leading-tight">
                    {speaker.position}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Row 2: 6 Columns (6 Banjar) */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
            {row2.map((speaker, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/15 rounded-2xl p-4 text-center hover:bg-white/10 transition duration-300 backdrop-blur-sm group flex flex-col justify-between"
              >
                {/* Image Frame */}
                <div className="w-full h-40 sm:h-44 rounded-xl bg-gradient-to-b from-purple-300/10 to-white/10 border border-purple-300/20 overflow-hidden mb-3.5 flex items-end justify-center relative">
                  <img
                    src={speaker.image}
                    alt={speaker.name}
                    className="max-h-full object-contain object-bottom group-hover:scale-105 transition-transform duration-500 drop-shadow-lg"
                  />
                </div>

                {/* Speaker Info: Only Name & Position */}
                <div className="flex-1 flex flex-col justify-center">
                  <h3 className="font-display font-bold text-sm sm:text-base text-white mb-1 leading-snug">
                    {speaker.name}
                  </h3>
                  <p className="text-xs font-semibold text-[#f9572a] leading-tight">
                    {speaker.position}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
