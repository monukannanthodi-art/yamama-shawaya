import React from 'react';
import { Utensils, Award, Flame, ShieldCheck, HeartHandshake, BadgePercent, Check } from 'lucide-react';
import { WHY_CHOOSE_US } from '../data/restaurantData';

export const WhyChooseUs: React.FC = () => {
  const iconMap: Record<string, React.FC<{ className?: string }>> = {
    Utensils,
    Award,
    Flame,
    ShieldCheck,
    HeartHandshake,
    BadgePercent
  };

  return (
    <section className="py-24 bg-[#0B0B0B] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold text-[#FFD21F] uppercase tracking-widest block mb-2 font-mono">
            Excellence In Every Bite
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight mb-4">
            WHY <span className="text-[#FFD21F]">YAMAMA SHAWAYA?</span>
          </h2>
          <p className="text-sm sm:text-base text-zinc-400">
            We don’t compromise on roasting time, meat quality, or the authentic hospitality that defines our dining experience.
          </p>
        </div>

        {/* 6 Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_CHOOSE_US.map((item) => {
            const IconComponent = iconMap[item.icon] || Flame;
            return (
              <div
                key={item.id}
                className="bg-[#141414] border border-[#C0C0C0]/15 hover:border-[#FFD21F]/60 rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 group relative overflow-hidden flex flex-col justify-between shadow-xl"
              >
                {/* Subtle hover gradient */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#FFD21F]/5 rounded-full blur-2xl group-hover:bg-[#FFD21F]/15 transition-all" />

                <div>
                  <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-[#C0C0C0]/20 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:border-[#FFD21F]/50 transition-all">
                    <IconComponent className="w-6 h-6 text-[#FFD21F]" />
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 font-display group-hover:text-[#FFD21F] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center gap-2 text-[11px] text-[#FFD21F] font-mono">
                  <Check className="w-3.5 h-3.5" />
                  <span>Yamama Quality Standard</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
