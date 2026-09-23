import React from 'react';
import { Flame, CheckCircle, ArrowRight, Sparkles } from 'lucide-react';
import { SPECIAL_OFFER, RESTAURANT_INFO, MENU_ITEMS } from '../data/restaurantData';

interface SpecialOfferProps {
  onOrderSpecial: () => void;
}

export const SpecialOffer: React.FC<SpecialOfferProps> = ({ onOrderSpecial }) => {
  return (
    <section className="py-20 bg-[#0B0B0B] relative overflow-hidden">
      {/* Background ambient accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-7xl h-full bg-gradient-to-r from-[#FFD21F]/5 via-[#E21B23]/10 to-[#FFD21F]/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-[#FFD21F] tracking-widest uppercase mb-2">
            <Sparkles className="w-4 h-4 text-[#FFD21F]" />
            <span>Limited Time Deal</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight mb-3">
            YAMAMA <span className="text-[#FFD21F]">SPECIAL</span>
          </h2>
          <p className="text-base sm:text-lg text-zinc-300 font-medium">
            {SPECIAL_OFFER.subtitle}
          </p>
        </div>

        {/* Heroic Promotional Card */}
        <div className="relative rounded-3xl bg-gradient-to-br from-[#161616] via-[#121212] to-[#0E0E0E] border-2 border-[#FFD21F]/40 hover:border-[#FFD21F] shadow-2xl transition-all duration-300 overflow-hidden">
          
          {/* Top highlight bar */}
          <div className="h-1.5 w-full bg-gradient-to-r from-[#FFD21F] via-[#E21B23] to-[#FFD21F]" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center p-6 sm:p-10 lg:p-12">
            
            {/* Left Image Showcase */}
            <div className="lg:col-span-6 relative">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
                <img
                  src={SPECIAL_OFFER.image}
                  alt={SPECIAL_OFFER.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
                
                {/* Floating Discount Tag */}
                <div className="absolute top-4 left-4 bg-[#E21B23] text-white font-extrabold text-xs uppercase px-3.5 py-1.5 rounded-lg shadow-lg tracking-wider flex items-center gap-1.5">
                  <Flame className="w-4 h-4" />
                  <span>{SPECIAL_OFFER.savings}</span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 text-left">
                  <span className="text-[11px] font-mono text-[#FFD21F] uppercase tracking-wider block mb-1">
                    Whole Chicken + Spiced Rice Feast
                  </span>
                  <span className="text-sm font-semibold text-white">
                    Feeds 4–5 Family & Friends
                  </span>
                </div>
              </div>
            </div>

            {/* Right Information & CTA */}
            <div className="lg:col-span-6 flex flex-col items-start text-left">
              
              <div className="inline-block bg-[#FFD21F]/15 border border-[#FFD21F]/40 text-[#FFD21F] text-xs font-bold tracking-wider uppercase px-3 py-1 rounded-md mb-4">
                {SPECIAL_OFFER.badge}
              </div>

              <h3 className="text-2xl sm:text-4xl font-display font-extrabold text-white tracking-tight mb-4">
                {SPECIAL_OFFER.title}
              </h3>

              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed mb-6">
                {SPECIAL_OFFER.description}
              </p>

              {/* Items included list */}
              <div className="space-y-2.5 mb-8 w-full">
                {SPECIAL_OFFER.highlights.map((point, index) => (
                  <div key={index} className="flex items-center gap-3 text-xs sm:text-sm text-zinc-200">
                    <CheckCircle className="w-4 h-4 text-[#FFD21F] shrink-0" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>

              {/* Pricing & CTA Button */}
              <div className="flex flex-wrap items-center gap-6 w-full pt-4 border-t border-zinc-800">
                <div className="flex flex-col">
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl sm:text-4xl font-mono font-extrabold text-[#FFD21F] tabular-nums">
                      {RESTAURANT_INFO.currency} {SPECIAL_OFFER.offerPrice.toFixed(2)}
                    </span>
                    <span className="text-sm text-zinc-500 line-through font-mono tabular-nums">
                      {RESTAURANT_INFO.currency} {SPECIAL_OFFER.originalPrice.toFixed(2)}
                    </span>
                  </div>
                  <span className="text-[11px] text-emerald-400 font-medium tracking-wide">
                    Complimentary sauces & bread included
                  </span>
                </div>

                <button
                  onClick={onOrderSpecial}
                  className="ml-auto bg-[#E21B23] hover:bg-[#c9141c] text-white font-bold text-xs sm:text-sm uppercase tracking-wider px-7 py-3.5 rounded-xl shadow-xl hover:shadow-[#E21B23]/40 active:scale-95 transition-all flex items-center gap-2 group"
                >
                  <span>ORDER THIS OFFER</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
