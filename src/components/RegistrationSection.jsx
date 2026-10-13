import React, { useState } from 'react';
import { QrCode, Phone, Mail, CheckCircle2, Copy, Send, Sparkles } from 'lucide-react';

export default function RegistrationSection() {
  const [formData, setFormData] = useState({
    nama: '',
    jabatan: '',
    instansi: '',
    paket: 'Residential Twin (Rp8 jt)',
    email: '',
    whatsapp: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [copiedText, setCopiedText] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.nama || !formData.email || !formData.whatsapp) {
      alert('Mohon lengkapi Nama, Email, dan WhatsApp.');
      return;
    }
    setSubmitted(true);
  };

  const copyToClipboard = (text, label) => {
    navigator.clipboard.writeText(text);
    setCopiedText(label);
    setTimeout(() => setCopiedText(''), 2500);
  };

  return (
    <section id="registrasi" className="py-16 md:py-24 bg-slate-100 text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-slate-500 block mb-2 font-mono">
            07 — REGISTRASI
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-slate-900 max-w-3xl leading-tight">
            Daftarkan delegasi Anda.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Form Column */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-lg">
            {submitted ? (
              <div className="text-center py-10 space-y-4 animate-fade-in">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-slate-900">
                  Pendaftaran Berhasil Dikirim!
                </h3>
                <p className="text-slate-600 text-sm max-w-md mx-auto">
                  Terima kasih, Bapak/Ibu <strong>{formData.nama}</strong>. Tim kami akan segera menghubungi Anda melalui WhatsApp/Email untuk konfirmasi pendaftaran dan penerbitan invoice resmi.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      nama: '',
                      jabatan: '',
                      instansi: '',
                      paket: 'Residential Twin (Rp8 jt)',
                      email: '',
                      whatsapp: '',
                    });
                  }}
                  className="mt-4 bg-slate-900 text-white text-xs font-bold px-6 py-3 rounded-xl hover:bg-slate-800 transition"
                >
                  Daftarkan Delegasi Lain
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  
                  {/* Nama Lengkap */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Nama lengkap *
                    </label>
                    <input
                      type="text"
                      name="nama"
                      value={formData.nama}
                      onChange={handleChange}
                      placeholder="cth. Dr. Budi Santoso, S.E."
                      required
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:bg-white transition"
                    />
                  </div>

                  {/* Jabatan */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Jabatan
                    </label>
                    <input
                      type="text"
                      name="jabatan"
                      value={formData.jabatan}
                      onChange={handleChange}
                      placeholder="cth. Direktur Utama / Komisaris"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:bg-white transition"
                    />
                  </div>

                  {/* Instansi / BUMD */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Instansi / BUMD
                    </label>
                    <input
                      type="text"
                      name="instansi"
                      value={formData.instansi}
                      onChange={handleChange}
                      placeholder="cth. PT Bank BPD Daerah"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:bg-white transition"
                    />
                  </div>

                  {/* Paket Partisipasi */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Paket partisipasi
                    </label>
                    <select
                      name="paket"
                      value={formData.paket}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:bg-white transition font-medium"
                    >
                      <option value="Entry Ticket (Rp6,5 jt)">Entry Ticket (Rp6,5 jt)</option>
                      <option value="Residential Twin (Rp8 jt)">Residential Twin (Rp8 jt)</option>
                      <option value="Residential Single (Rp9,5 jt)">Residential Single (Rp9,5 jt)</option>
                    </select>
                  </div>

                  {/* Email Kantor */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Email kantor *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="delegasi@bumd.co.id"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:bg-white transition"
                    />
                  </div>

                  {/* Nomor WhatsApp */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Nomor WhatsApp *
                    </label>
                    <input
                      type="tel"
                      name="whatsapp"
                      value={formData.whatsapp}
                      onChange={handleChange}
                      placeholder="+62 812 3456 7890"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:bg-white transition"
                    />
                  </div>

                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full bg-indigo-950 hover:bg-indigo-900 text-white font-bold py-4 px-6 rounded-xl text-base shadow-xl shadow-indigo-950/20 transition flex items-center justify-center gap-2 group"
                  >
                    <span>Kirim Pendaftaran</span>
                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <p className="text-xs text-slate-500 text-center mt-3">
                    Tim kami akan menghubungi Anda untuk konfirmasi dan penerbitan invoice resmi.
                  </p>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Contact Person & Online QR Box */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Online Registration QR Box */}
            <div className="bg-indigo-950 text-white p-6 rounded-3xl border border-indigo-900 shadow-xl flex items-center gap-5">
              <div className="w-24 h-24 bg-white p-2 rounded-2xl shrink-0 flex items-center justify-center">
                {/* SVG QR Code Simulation */}
                <svg viewBox="0 0 100 100" className="w-full h-full text-slate-900 fill-current">
                  <path d="M0,0 h35 v35 h-35 z M10,10 h15 v15 h-15 z M65,0 h35 v35 h-35 z M75,10 h15 v15 h-15 z M0,65 h35 v35 h-35 z M10,75 h15 v15 h-15 z M45,10 h10 v10 h-10 z M45,35 h15 v15 h-15 z M65,65 h10 v10 h-10 z M85,65 h15 v15 h-15 z M45,75 h10 v25 h-10 z M75,85 h25 v10 h-25 z" />
                </svg>
              </div>
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-400 block mb-1">
                  Registrasi Online
                </span>
                <a
                  href="https://www.bumdsummit2026.com"
                  target="_blank"
                  rel="noreferrer"
                  className="font-serif text-lg font-bold text-white hover:text-amber-300 transition underline decoration-amber-400/50"
                >
                  www.bumdsummit2026.com
                </a>
                <p className="text-xs text-slate-300 mt-1">
                  Scan QR code untuk pengisian formulir pendaftaran cepat online.
                </p>
              </div>
            </div>

            {/* Contact Persons Box */}
            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-6">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 block border-b border-slate-100 pb-3">
                CONTACT PERSON
              </span>

              {/* CP 1 */}
              <div className="space-y-1.5">
                <h4 className="font-bold text-slate-900 text-base">
                  Zidane Fathir
                </h4>
                <p className="text-xs text-slate-500 font-medium">
                  Project Representative, Harmoni Organizer
                </p>
                <div className="pt-2 flex flex-col gap-1 text-xs font-mono text-slate-700">
                  <div
                    onClick={() => copyToClipboard('+62 851-5698-9729', 'phone1')}
                    className="inline-flex items-center gap-2 hover:text-indigo-600 cursor-pointer font-bold"
                  >
                    <Phone className="w-3.5 h-3.5 text-amber-600" />
                    +62 851-5698-9729
                    {copiedText === 'phone1' && <span className="text-[10px] text-emerald-600 font-sans">Tersalin!</span>}
                  </div>
                  <div
                    onClick={() => copyToClipboard('zidane.fathir@harmoni.co.id', 'email1')}
                    className="inline-flex items-center gap-2 hover:text-indigo-600 cursor-pointer"
                  >
                    <Mail className="w-3.5 h-3.5 text-indigo-600" />
                    zidane.fathir@harmoni.co.id
                    {copiedText === 'email1' && <span className="text-[10px] text-emerald-600 font-sans">Tersalin!</span>}
                  </div>
                </div>
              </div>

              <div className="border-t border-slate-100 pt-4" />

              {/* CP 2 */}
              <div className="space-y-1.5">
                <h4 className="font-bold text-slate-900 text-base">
                  Fadhil Muhammad Pradana
                </h4>
                <p className="text-xs text-slate-500 font-medium">
                  Business Development Lead, IIRC
                </p>
                <div className="pt-2 flex flex-col gap-1 text-xs font-mono text-slate-700">
                  <div
                    onClick={() => copyToClipboard('+62 878-8318-4796', 'phone2')}
                    className="inline-flex items-center gap-2 hover:text-indigo-600 cursor-pointer font-bold"
                  >
                    <Phone className="w-3.5 h-3.5 text-amber-600" />
                    +62 878-8318-4796
                    {copiedText === 'phone2' && <span className="text-[10px] text-emerald-600 font-sans">Tersalin!</span>}
                  </div>
                  <div
                    onClick={() => copyToClipboard('fadhil.pradana@itsb.ac.id', 'email2')}
                    className="inline-flex items-center gap-2 hover:text-indigo-600 cursor-pointer"
                  >
                    <Mail className="w-3.5 h-3.5 text-indigo-600" />
                    fadhil.pradana@itsb.ac.id
                    {copiedText === 'email2' && <span className="text-[10px] text-emerald-600 font-sans">Tersalin!</span>}
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
