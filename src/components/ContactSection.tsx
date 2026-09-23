import React, { useState } from 'react';
import { MapPin, Phone, MessageSquare, Mail, Clock, Send, Check, ExternalLink, Copy } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const ContactSection: React.FC = () => {
  const [copiedType, setCopiedType] = useState<string | null>(null);
  const [formSent, setFormSent] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    guests: '2',
    date: '',
    time: '20:00',
    notes: ''
  });

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2000);
  };

  const handleReservationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSent(true);
    setTimeout(() => {
      setFormSent(false);
      setFormData({
        name: '',
        phone: '',
        guests: '2',
        date: '',
        time: '20:00',
        notes: ''
      });
    }, 3500);
  };

  return (
    <section id="contact" className="py-24 bg-[#0E0E0E] relative border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold text-[#FFD21F] uppercase tracking-widest block mb-2 font-mono">
            Visit Us or Order Direct
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight mb-4">
            GET IN <span className="text-[#FFD21F]">TOUCH</span>
          </h2>
          <p className="text-sm sm:text-base text-zinc-400">
            Have questions, catering inquiries, or want to reserve a table for family and friends? We are ready to serve you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-6 space-y-4">
            
            {/* Address Card */}
            <div className="bg-[#141414] border border-[#C0C0C0]/15 rounded-2xl p-6 flex items-start justify-between group hover:border-[#FFD21F]/40 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-zinc-900 border border-[#C0C0C0]/15 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-[#FFD21F]" />
                </div>
                <div>
                  <span className="text-xs font-mono uppercase text-zinc-400 block mb-1">Restaurant Address</span>
                  <p className="text-sm font-semibold text-white leading-snug">{RESTAURANT_INFO.address}</p>
                  <span className="text-[11px] text-zinc-500 mt-1 block">Free parking available for guests</span>
                </div>
              </div>
              <a
                href={RESTAURANT_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[#FFD21F] hover:underline flex items-center gap-1 shrink-0 p-2"
                title="View on Google Maps"
              >
                <span>Map</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* Direct Phone Card */}
            <div className="bg-[#141414] border border-[#C0C0C0]/15 rounded-2xl p-6 flex items-center justify-between group hover:border-[#FFD21F]/40 transition-colors">
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-zinc-900 border border-[#C0C0C0]/15 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-[#FFD21F]" />
                </div>
                <div>
                  <span className="text-xs font-mono uppercase text-zinc-400 block">Phone Orders</span>
                  <a
                    href={`tel:${RESTAURANT_INFO.phone}`}
                    className="text-sm sm:text-base font-bold font-mono text-white hover:text-[#FFD21F] transition-colors"
                  >
                    {RESTAURANT_INFO.phone}
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleCopy(RESTAURANT_INFO.phone, 'phone')}
                  className="p-2 text-zinc-400 hover:text-white rounded-lg bg-zinc-900/60"
                  title="Copy Phone Number"
                >
                  {copiedType === 'phone' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
                <a
                  href={`tel:${RESTAURANT_INFO.phone}`}
                  className="bg-[#E21B23] hover:bg-[#c9141c] text-white text-xs font-bold px-3 py-2 rounded-lg"
                >
                  Call
                </a>
              </div>
            </div>

            {/* WhatsApp Card */}
            <div className="bg-[#141414] border border-[#C0C0C0]/15 rounded-2xl p-6 flex items-center justify-between group hover:border-[#25D366]/40 transition-colors">
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-emerald-950/40 border border-emerald-500/20 flex items-center justify-center shrink-0">
                  <MessageSquare className="w-5 h-5 text-[#25D366]" />
                </div>
                <div>
                  <span className="text-xs font-mono uppercase text-zinc-400 block">WhatsApp Quick Chat</span>
                  <a
                    href={`https://wa.me/${RESTAURANT_INFO.whatsappClean}?text=Hello%20Yamama%20Shawaya,%20I%20would%20like%20to%20order!`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm sm:text-base font-bold font-mono text-white hover:text-[#25D366] transition-colors"
                  >
                    {RESTAURANT_INFO.whatsapp}
                  </a>
                </div>
              </div>
              <a
                href={`https://wa.me/${RESTAURANT_INFO.whatsappClean}?text=Hello%20Yamama%20Shawaya,%20I%20would%20like%20to%20place%20an%20order!`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] hover:bg-[#20ba59] text-black font-bold text-xs px-3.5 py-2 rounded-lg flex items-center gap-1.5"
              >
                <span>WhatsApp</span>
              </a>
            </div>

            {/* Opening Hours & Email Card */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-[#141414] border border-[#C0C0C0]/15 rounded-2xl p-5">
                <div className="flex items-center gap-3 mb-2">
                  <Clock className="w-4 h-4 text-[#FFD21F]" />
                  <span className="text-xs font-mono uppercase text-zinc-400">Opening Hours</span>
                </div>
                <p className="text-xs font-semibold text-white">{RESTAURANT_INFO.hours}</p>
                <div className="flex items-center gap-1.5 text-[11px] text-emerald-400 mt-2 font-medium">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Open Now for Dine-In & Delivery</span>
                </div>
              </div>

              <div className="bg-[#141414] border border-[#C0C0C0]/15 rounded-2xl p-5">
                <div className="flex items-center gap-3 mb-2">
                  <Mail className="w-4 h-4 text-[#FFD21F]" />
                  <span className="text-xs font-mono uppercase text-zinc-400">Email Inquiries</span>
                </div>
                <a
                  href={`mailto:${RESTAURANT_INFO.email}`}
                  className="text-xs font-semibold text-white hover:text-[#FFD21F] break-all"
                >
                  {RESTAURANT_INFO.email}
                </a>
                <span className="text-[11px] text-zinc-500 block mt-2">Catering & Events response within 2h</span>
              </div>
            </div>

            {/* Simulated Live Google Maps Card */}
            <div className="rounded-2xl overflow-hidden border border-[#C0C0C0]/15 bg-zinc-900 relative">
              <div className="p-4 bg-zinc-950 flex items-center justify-between border-b border-zinc-800">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#E21B23]" />
                  <span className="text-xs font-bold text-white">YAMAMA SHAWAYA — Tirurkad, Perinthalmanna</span>
                </div>
                <a
                  href={RESTAURANT_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] text-[#FFD21F] hover:underline flex items-center gap-1"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
              <div className="relative h-48 bg-[#181818] flex items-center justify-center p-6 text-center">
                <div className="absolute inset-0 bg-grid-pattern opacity-30" />
                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-[#E21B23] flex items-center justify-center text-white shadow-xl animate-bounce mb-2">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <span className="text-xs sm:text-sm font-bold text-white font-display">Oradampalam - Valiyaveettilpadi, Tirurkad</span>
                  <span className="text-[11px] text-zinc-400 mt-0.5">Perinthalmanna, Kerala - 679321</span>
                  <a
                    href={RESTAURANT_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 bg-zinc-800 hover:bg-zinc-700 text-white text-[11px] font-semibold px-3 py-1.5 rounded-lg border border-zinc-700 flex items-center gap-1"
                  >
                    <span>Get Driving Directions</span>
                    <ExternalLink className="w-3 h-3 text-[#FFD21F]" />
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Reservation / Table Request Form */}
          <div className="lg:col-span-6 bg-[#141414] border border-[#C0C0C0]/20 rounded-3xl p-6 sm:p-8 shadow-2xl">
            <div className="mb-6">
              <span className="text-[11px] font-mono text-[#FFD21F] uppercase tracking-wider block mb-1">
                Fast Response Form
              </span>
              <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
                Reserve Table or Send Inquiry
              </h3>
              <p className="text-xs text-zinc-400 mt-1">
                Let us know your preferred time or special requirements.
              </p>
            </div>

            {formSent ? (
              <div className="py-12 text-center">
                <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-4">
                  <Check className="w-8 h-8" />
                </div>
                <h4 className="text-lg font-bold text-white mb-2 font-display">Reservation Request Received!</h4>
                <p className="text-xs text-zinc-300 max-w-sm mx-auto leading-relaxed">
                  Thank you! Our restaurant manager will confirm your table shortly via WhatsApp or SMS at {formData.phone || 'your phone'}.
                </p>
              </div>
            ) : (
              <form onSubmit={handleReservationSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 uppercase mb-1.5">
                      Your Full Name:
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Zaid Khalid"
                      className="w-full px-3.5 py-2.5 bg-zinc-900 border border-zinc-800 rounded-xl text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-[#FFD21F]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 uppercase mb-1.5">
                      Contact Phone / WhatsApp:
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. +971 50 123 4567"
                      className="w-full px-3.5 py-2.5 bg-zinc-900 border border-zinc-800 rounded-xl text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-[#FFD21F]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 uppercase mb-1.5">
                      Number of Guests:
                    </label>
                    <select
                      value={formData.guests}
                      onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-zinc-900 border border-zinc-800 rounded-xl text-xs text-white focus:outline-none focus:border-[#FFD21F]"
                    >
                      <option value="1">1 Person</option>
                      <option value="2">2 Guests</option>
                      <option value="4">4 Guests</option>
                      <option value="6">6 Guests</option>
                      <option value="8+">8+ Guests (Family)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 uppercase mb-1.5">
                      Date:
                    </label>
                    <input
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-zinc-900 border border-zinc-800 rounded-xl text-xs text-white focus:outline-none focus:border-[#FFD21F]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 uppercase mb-1.5">
                      Preferred Time:
                    </label>
                    <input
                      type="time"
                      value={formData.time}
                      onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-zinc-900 border border-zinc-800 rounded-xl text-xs text-white focus:outline-none focus:border-[#FFD21F]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zinc-300 uppercase mb-1.5">
                    Special Requests or Notes:
                  </label>
                  <textarea
                    rows={3}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="Birthday celebration, high chair needed, extra garlic toum, etc."
                    className="w-full px-3.5 py-2.5 bg-zinc-900 border border-zinc-800 rounded-xl text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-[#FFD21F]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#E21B23] hover:bg-[#c9141c] text-white font-bold text-xs uppercase tracking-wider py-3.5 rounded-xl transition-all shadow-xl hover:shadow-[#E21B23]/40 flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Reservation / Inquiry</span>
                </button>

                <p className="text-[11px] text-zinc-500 text-center">
                  Prefer instant confirmation? Call or WhatsApp us directly at {RESTAURANT_INFO.phone}.
                </p>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
