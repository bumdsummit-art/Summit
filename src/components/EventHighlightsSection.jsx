import React from 'react';

export default function EventHighlightsSection() {
  return (
    <section id="highlights" className="py-16 md:py-24 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-slate-900">
              Event Highlights
            </h2>
          </div>
          <p className="text-slate-600 text-sm sm:text-base font-normal max-w-md">
            From the main stage to one-on-one meetings, every session is designed to end in a decision or a deal.
          </p>
        </div>

        {/* Bento Grid matching mockup Page 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Left Tall Card: Keynote Sessions */}
          <div className="lg:col-span-5 relative rounded-3xl overflow-hidden shadow-lg border border-slate-200 group h-[420px] lg:h-auto min-h-[420px] flex flex-col justify-end">
            <img
              src="/images/scaleup/keynote.jpg"
              alt="Keynote Sessions (Masterclass)"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#16053b]/95 via-[#16053b]/40 to-transparent" />
            
            <div className="relative z-10 p-7 text-white space-y-2">
              <span className="inline-block bg-white/20 text-white backdrop-blur-md text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-2 border border-white/20">
                Main stage
              </span>
              <h3 className="font-display font-bold text-2xl sm:text-3xl text-white">
                Keynote Sessions (Masterclass)
              </h3>
              <p className="text-slate-200 text-xs sm:text-sm leading-relaxed max-w-sm">
                National and global leaders set the direction for the next decade of regional enterprise.
              </p>
            </div>
          </div>

          {/* Right 2x2 Grid (4 Cards) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            {/* Card 1: Executive Panel Discussion */}
            <div className="relative rounded-3xl overflow-hidden shadow-md border border-slate-200 group h-56 flex flex-col justify-end">
              <img
                src="/images/scaleup/panel.jpg"
                alt="Executive Panel Discussion"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#16053b]/95 via-[#16053b]/40 to-transparent" />
              
              <div className="relative z-10 p-5 text-white">
                <h4 className="font-display font-bold text-lg text-white mb-1">
                  Executive Panel Discussion
                </h4>
                <p className="text-slate-200 text-xs leading-relaxed">
                  Candid debate on governance, funding and growth.
                </p>
              </div>
            </div>

            {/* Card 2: Business Matching Session */}
            <div className="relative rounded-3xl overflow-hidden shadow-md border border-slate-200 group h-56 flex flex-col justify-end">
              <img
                src="/images/scaleup/matching.jpg"
                alt="Business Matching Session"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#16053b]/95 via-[#16053b]/40 to-transparent" />
              
              <div className="relative z-10 p-5 text-white">
                <h4 className="font-display font-bold text-lg text-white mb-1">
                  Business Matching Session
                </h4>
                <p className="text-slate-200 text-xs leading-relaxed">
                  Pre-arranged meetings between BUMD and partners.
                </p>
              </div>
            </div>

            {/* Card 3: Technology Showcase */}
            <div className="relative rounded-3xl overflow-hidden shadow-md border border-slate-200 group h-56 flex flex-col justify-end">
              <img
                src="/images/scaleup/showcase.jpg"
                alt="Technology Showcase"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#16053b]/95 via-[#16053b]/40 to-transparent" />
              
              <div className="relative z-10 p-5 text-white">
                <h4 className="font-display font-bold text-lg text-white mb-1">
                  Technology Showcase
                </h4>
                <p className="text-slate-200 text-xs leading-relaxed">
                  Live demos of solutions built for public enterprises.
                </p>
              </div>
            </div>

            {/* Card 4: Strategic Networking */}
            <div className="relative rounded-3xl overflow-hidden shadow-md border border-slate-200 group h-56 flex flex-col justify-end">
              <img
                src="/images/scaleup/networking.jpg"
                alt="Strategic Networking"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#16053b]/95 via-[#16053b]/40 to-transparent" />
              
              <div className="relative z-10 p-5 text-white">
                <h4 className="font-display font-bold text-lg text-white mb-1">
                  Strategic Networking
                </h4>
                <p className="text-slate-200 text-xs leading-relaxed">
                  Evening reception with leaders from across Indonesia.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
