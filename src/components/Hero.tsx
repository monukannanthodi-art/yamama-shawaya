import React from 'react';
import { Flame, ArrowRight, ShieldCheck, Sparkles, Utensils, Clock } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import heroShawayaImg from '../assets/images/hero_shawaya_chicken_1790147049085.jpg';

interface HeroProps {
  onOpenOrder: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenOrder }) => {
  return (
    <section id="overview" className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden bg-[#0B0B0B]">
      {/* Background Photography with measured contrast scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroShawayaImg}
          alt="Yamama Golden Rotisserie Chicken Shawaya"
          className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000 ease-out"
          referrerPolicy="no-referrer"
        />
        {/* Layered dark scrim & golden glow gradients */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0B] via-[#0B0B0B]/85 to-[#0B0B0B]/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-[#0B0B0B]/40 to-[#0B0B0B]/70" />
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#FFD21F]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 right-0 w-[500px] h-[500px] bg-[#E21B23]/10 rounded-full blur-3xl pointer-events-none" />
      </div>

      {/* Decorative hairline grid & border accent */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#C0C0C0]/20 to-transparent z-10" />

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Trust Statement Badge & Slogan */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-[#FFD21F]/30 text-xs text-zinc-200 backdrop-blur-md shadow-sm">
                <span className="w-2 h-2 rounded-full bg-[#FFD21F] animate-ping" />
                <span className="font-medium text-[#FFD21F] tracking-wide">
                  Fresh Ingredients • Authentic Flavours • Made Fresh Daily
                </span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E21B23]/25 border border-[#E21B23]/50 text-[11px] font-mono font-bold text-white uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-[#FFD21F]" />
                <span>{RESTAURANT_INFO.energySlogan}</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/70 border border-emerald-500/40 text-[11px] font-mono font-medium text-emerald-300">
                <Clock className="w-3 h-3 text-emerald-400" />
                <span>Open 12:00 PM – 12:00 AM</span>
              </div>
            </div>

            {/* Main Brand Heading with Official Mascot Logo */}
            <div className="flex items-center gap-4 sm:gap-6 mb-5">
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full overflow-hidden border-2 sm:border-3 border-[#FFD21F] shadow-2xl shrink-0 bg-[#FFD21F] hover:scale-105 transition-transform duration-300">
                <img
                  src={RESTAURANT_INFO.logo}
                  alt="Yamama Shawaya Official Mascot Logo"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h1 className="text-4xl sm:text-6xl xl:text-7xl font-display font-extrabold text-white tracking-tight leading-[1.08]">
                YAMAMA <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD21F] via-[#FFE36B] to-[#FFD21F] drop-shadow-sm">
                  SHAWAYA
                </span>
              </h1>
            </div>

            {/* Supporting Headline */}
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-[#FFD21F] tracking-wide mb-5 flex items-center gap-2">
              <Flame className="w-6 h-6 text-[#E21B23] inline shrink-0 animate-pulse" />
              Fresh. Juicy. Grilled to Perfection.
            </h2>

            {/* Additional Text */}
            <p className="text-base sm:text-lg text-zinc-300 max-w-2xl leading-relaxed mb-8">
              Experience delicious shawaya, juicy grilled chicken, and flavorful meals prepared fresh for you. Slow-roasted over fiery rotisseries with heritage Arabic marinades and served hot with warm saj bread, fragrant rice, and creamy garlic toum.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <button
                onClick={onOpenOrder}
                className="w-full sm:w-auto bg-[#E21B23] hover:bg-[#c4131b] text-white font-bold text-sm tracking-wider uppercase px-8 py-4 rounded-xl shadow-xl hover:shadow-[#E21B23]/40 active:scale-95 transition-all flex items-center justify-center gap-2 group"
              >
                <span>ORDER NOW</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#menu"
                className="w-full sm:w-auto bg-zinc-900/80 hover:bg-zinc-800 text-[#FFD21F] hover:text-white border border-[#FFD21F]/40 hover:border-[#FFD21F] font-semibold text-sm tracking-wider uppercase px-7 py-4 rounded-xl transition-all flex items-center justify-center gap-2 backdrop-blur-md"
              >
                <span>VIEW MENU</span>
              </a>
            </div>

            {/* Trust Markers Bar */}
            <div className="mt-10 pt-8 border-t border-[#C0C0C0]/15 grid grid-cols-3 gap-4 w-full max-w-lg">
              <div className="flex flex-col">
                <span className="text-lg sm:text-xl font-bold font-mono text-[#FFD21F]">100%</span>
                <span className="text-xs text-zinc-400">Fresh Halal Chicken</span>
              </div>
              <div className="flex flex-col">
                <span className="text-lg sm:text-xl font-bold font-mono text-[#FFD21F]">24-Hour</span>
                <span className="text-xs text-zinc-400">Aromatic Marinade</span>
              </div>
              <div className="flex flex-col">
                <span className="text-lg sm:text-xl font-bold font-mono text-[#FFD21F]">Flame</span>
                <span className="text-xs text-zinc-400">Rotisserie Roasted</span>
              </div>
            </div>

          </div>

          {/* Right Visual Floating Card */}
          <div className="lg:col-span-5 hidden lg:block">
            <div className="relative group">
              {/* Outer decorative ring */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#FFD21F]/40 to-[#E21B23]/40 rounded-2xl blur-lg group-hover:opacity-100 transition duration-500 opacity-70" />
              
              <div className="relative bg-[#131313] border border-[#C0C0C0]/20 rounded-2xl overflow-hidden p-3 shadow-2xl">
                <div className="relative h-96 w-full rounded-xl overflow-hidden">
                  <img
                    src={heroShawayaImg}
                    alt="Yamama Signature Roasted Shawaya Platter"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                  
                  {/* Floating badge inside image */}
                  <div className="absolute top-3 left-3 bg-[#0B0B0B]/85 backdrop-blur-md border border-[#FFD21F]/40 rounded-lg px-3 py-1.5 flex items-center gap-2">
                    <Sparkles className="w-3.5 h-3.5 text-[#FFD21F]" />
                    <span className="text-[11px] font-semibold text-white tracking-wider uppercase">Signature Roast</span>
                  </div>

                  {/* Floating Official Brand Seal */}
                  <div className="absolute top-3 right-3 w-12 h-12 rounded-full overflow-hidden border-2 border-[#FFD21F] shadow-xl bg-[#FFD21F] group-hover:scale-110 transition-transform">
                    <img
                      src={RESTAURANT_INFO.logo}
                      alt="Yamama Shawaya Logo Seal"
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 text-left">
                    <span className="text-xs text-[#FFD21F] font-semibold uppercase tracking-wider block mb-1">Popular Combo</span>
                    <h3 className="text-xl font-bold text-white font-display">Shawaya Chicken Combo</h3>
                    <p className="text-xs text-zinc-300 mt-1 line-clamp-2">(Rotisserie grilled) served with fragrant bishawari rice and authentic dips.</p>
                    <div className="flex items-center justify-between mt-3 pt-2 border-t border-white/10">
                      <span className="text-lg font-bold font-mono text-[#FFD21F]">₹200.00</span>
                      <button
                        onClick={onOpenOrder}
                        className="bg-[#E21B23] hover:bg-[#c8141c] text-white text-xs font-bold px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1"
                      >
                        <Utensils className="w-3 h-3" />
                        <span>Order Now</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
