import React from 'react';
import { Sparkles, Flame, Clock, ShieldCheck } from 'lucide-react';

export const QuickHighlights: React.FC = () => {
  const highlights = [
    {
      id: 'fresh',
      title: 'Fresh Ingredients',
      description: 'Fresh and quality ingredients prepared daily with premium cuts and crisp farm greens.',
      icon: Sparkles,
      accent: 'border-[#FFD21F]/30 hover:border-[#FFD21F]',
      iconColor: 'text-[#FFD21F]'
    },
    {
      id: 'authentic',
      title: 'Authentic Taste',
      description: 'Rich and flavorful shawaya-inspired dishes perfected with heritage Middle Eastern seasonings.',
      icon: Flame,
      accent: 'border-[#E21B23]/30 hover:border-[#E21B23]',
      iconColor: 'text-[#E21B23]'
    },
    {
      id: 'fast',
      title: 'Fast Service',
      description: 'Fresh food served quickly and efficiently so you enjoy hot, juicy meals without delay.',
      icon: Clock,
      accent: 'border-[#FFD21F]/30 hover:border-[#FFD21F]',
      iconColor: 'text-[#FFD21F]'
    },
    {
      id: 'hygiene',
      title: 'Quality & Hygiene',
      description: 'Prepared with attention to cleanliness and quality in a spotless open-grill environment.',
      icon: ShieldCheck,
      accent: 'border-[#C0C0C0]/30 hover:border-zinc-300',
      iconColor: 'text-zinc-200'
    }
  ];

  return (
    <section className="relative z-20 -mt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {highlights.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.id}
              className={`bg-[#121212] border ${item.accent} p-6 rounded-2xl shadow-xl transition-all duration-300 hover:-translate-y-1 group relative overflow-hidden`}
            >
              {/* Subtle background glow */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-white/[0.02] rounded-full blur-2xl group-hover:bg-[#FFD21F]/10 transition-colors" />

              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-[#C0C0C0]/15 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <Icon className={`w-6 h-6 ${item.iconColor}`} />
                </div>
                <h3 className="text-base font-bold text-white tracking-wide font-display">
                  {item.title}
                </h3>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};
