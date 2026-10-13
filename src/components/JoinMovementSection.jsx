import React, { useState } from 'react';
import { Calendar, MapPin, ArrowRight, CheckCircle2, X } from 'lucide-react';

export default function JoinMovementSection() {
  const [registerModal, setRegisterModal] = useState(false);
  const [success, setSuccess] = useState(false);

  return (
    <section id="register" className="py-16 md:py-24 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Banner Card matching Page 4 */}
        <div className="relative bg-gradient-to-br from-[#1c084a] via-[#240a5e] to-[#2e0c75] rounded-3xl p-8 sm:p-12 md:p-16 text-white shadow-2xl border border-purple-900/50 overflow-hidden">
          
          {/* Bottom Curved Wave Ribbon Accent matching mockup */}
          <div className="absolute -bottom-10 -left-10 right-0 h-28 bg-gradient-to-r from-purple-900 via-purple-600 via-rose-500 via-[#f9572a] to-amber-400 opacity-60 rounded-t-full transform -rotate-3 pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              
              <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-white leading-tight">
                Join The <br />
                Transformation <br />
                Movement
              </h2>

              <p className="text-purple-200 text-base sm:text-lg max-w-lg font-medium">
                Connect, collaborate, and shape the future of regional enterprises.
              </p>

              {/* Date & Location Badges */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold border border-white/15">
                  <Calendar className="w-4 h-4 text-[#f9572a]" />
                  <span>25–26 November 2026</span>
                </div>

                <a
                  href="https://www.google.com/maps/place/Samisara+Grand+Ballroom+Sopodel+Tower/@-6.2308452,106.8058742,2865m/data=!3m1!1e3!4m10!1m2!2m1!1sSamisara+Grand+Ballroom+Jakarta!3m6!1s0x2e69f343eb0cbb17:0xd7b3cf9e7cb479!8m2!3d-6.2308452!4d106.8238986!15sCh9TYW1pc2FyYSBHcmFuZCBCYWxscm9vbSBKYWthcnRhWiEiH3NhbWlzYXJhIGdyYW5kIGJhbGxyb29tIGpha2FydGGSAQtldmVudF92ZW51ZZoBRENpOURRVWxSUVVOdlpFTm9kSGxqUmpsdlQydDRibEo2WkZWaVJVMHpZMGhGTVZJemFIZGFXR2g0Vkd0d2ExVnVZeEFC4AEA-gEECAAQPA!16s%2Fg%2F11h4v0x9kw!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDkzMC4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-md px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold border border-white/15 transition group"
                  title="Buka lokasi di Google Maps"
                >
                  <MapPin className="w-4 h-4 text-[#f9572a]" />
                  <span>Samisara Grand Ballroom, Jakarta</span>
                </a>
              </div>

            </div>

            {/* Right Card Box matching mockup Page 4 */}
            <div className="lg:col-span-5 bg-white/10 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-white/20 shadow-xl space-y-5">
              
              <h3 className="font-display font-bold text-2xl text-white">
                Secure your seat
              </h3>

              <p className="text-xs sm:text-sm text-purple-200 leading-relaxed">
                Seats are limited to invited executives and registered delegates.
              </p>

              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSfTvSuwTech1J7o7VppO5TAvzogNqXUOjW0rakDOF8xm9h8Qw/viewform"
                target="_blank"
                rel="noreferrer"
                className="w-full py-4 px-6 rounded-full text-sm font-bold text-white bg-[#f9572a] hover:bg-[#e0451a] shadow-xl shadow-[#f9572a]/30 transition flex items-center justify-center gap-2 group"
              >
                <span>Register Your Seat</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <div className="text-center pt-1">
                <a
                  href="#sponsorship"
                  className="text-xs text-purple-200 hover:text-white underline font-semibold transition"
                >
                  Or explore sponsorship packages
                </a>
              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Registration Modal */}
      {registerModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative border border-slate-200">
            <button
              onClick={() => {
                setRegisterModal(false);
                setSuccess(false);
              }}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-700"
            >
              <X className="w-5 h-5" />
            </button>

            {success ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="font-display font-bold text-2xl text-slate-900">Registration Submitted!</h3>
                <p className="text-xs text-slate-600">
                  Thank you for registering for BUMD Scale Up Summit 2026. Our team will contact you shortly to confirm your seat and pass details.
                </p>
                <button
                  onClick={() => {
                    setRegisterModal(false);
                    setSuccess(false);
                  }}
                  className="px-6 py-2.5 bg-[#240a5e] text-white text-xs font-bold rounded-xl"
                >
                  Close Window
                </button>
              </div>
            ) : (
              <form onSubmit={(e) => {
                e.preventDefault();
                setSuccess(true);
              }} className="space-y-4">
                <h3 className="font-display font-bold text-xl text-slate-900 mb-1">
                  Delegate Registration
                </h3>
                <p className="text-xs text-slate-600 mb-4">
                  Fill in your details below to register your seat for BUMD Scale Up Summit 2026.
                </p>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Full Name *</label>
                  <input required type="text" placeholder="Dr. Jane Doe" className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm" />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Title / Position *</label>
                  <input required type="text" placeholder="Chief Executive Officer" className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm" />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Organization / BUMD *</label>
                  <input required type="text" placeholder="PT BUMD Nusantara" className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm" />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Corporate Email *</label>
                  <input required type="email" placeholder="jane@bumd.co.id" className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm" />
                </div>

                <button type="submit" className="w-full py-3.5 bg-[#f9572a] text-white font-bold text-xs rounded-full shadow-lg shadow-[#f9572a]/30 hover:bg-[#e0451a] transition">
                  Confirm Registration
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
