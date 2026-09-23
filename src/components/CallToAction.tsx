import React from 'react';
import { Flame, ArrowRight, PhoneCall } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface CallToActionProps {
  onOpenOrder: () => void;
}

export const CallToAction: React.FC<CallToActionProps> = ({ onOpenOrder }) => {
  return (
    <section className="py-20 relative bg-[#0B0B0B] overflow-hidden border-t border-b border-zinc-900">
      {/* Background glow effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-900 via-[#0B0B0B] to-[#0B0B0B]" />
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-[#E21B23]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-[#FFD21F]/15 rounded-full blur-3xl pointer-events-none" />

      {/* Decorative hairline accents */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#FFD21F]/30 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#E21B23]/30 to-transparent" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Official Brand Logo Emblem */}
        <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-6 rounded-full overflow-hidden border-2 sm:border-3 border-[#FFD21F] shadow-2xl bg-[#FFD21F] hover:rotate-6 transition-transform">
          <img
            src={RESTAURANT_INFO.logo}
            alt="Yamama Shawaya Mascot Logo"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-900/90 border border-[#FFD21F]/40 text-xs font-semibold text-[#FFD21F] mb-6 shadow-md">
          <Flame className="w-4 h-4 text-[#E21B23]" />
          <span>Hot Rotisserie & Shawarma Ready Now • {RESTAURANT_INFO.energySlogan}</span>
        </div>

        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold text-white tracking-tight leading-tight mb-6">
          HUNGRY? <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD21F] via-[#FFE57F] to-[#FFD21F]">
            LET'S MAKE IT DELICIOUS.
          </span>
        </h2>

        <p className="text-base sm:text-xl text-zinc-300 max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
          Order your favourite YAMAMA SHAWAYA meal today. Fresh, juicy, and grilled to crispy perfection.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpenOrder}
            className="w-full sm:w-auto bg-[#E21B23] hover:bg-[#c9141c] text-white font-bold text-sm uppercase tracking-wider px-9 py-4 rounded-xl shadow-2xl hover:shadow-[#E21B23]/40 active:scale-95 transition-all flex items-center justify-center gap-2 group"
          >
            <span>ORDER NOW</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <a
            href="#contact"
            className="w-full sm:w-auto bg-[#141414] hover:bg-zinc-800 text-white border border-[#C0C0C0]/30 hover:border-[#FFD21F] font-bold text-sm uppercase tracking-wider px-8 py-4 rounded-xl transition-all flex items-center justify-center gap-2"
          >
            <PhoneCall className="w-4 h-4 text-[#FFD21F]" />
            <span>CONTACT US</span>
          </a>
        </div>

        {/* Quick Contact Bar below CTA */}
        <div className="mt-8 text-xs text-zinc-400 font-mono">
          <span>Call or WhatsApp: </span>
          <a href={`tel:${RESTAURANT_INFO.phone}`} className="text-[#FFD21F] hover:underline mx-1">
            {RESTAURANT_INFO.phone}
          </a>
          <span>· Fast Delivery & Takeaway Available</span>
        </div>

      </div>
    </section>
  );
};
