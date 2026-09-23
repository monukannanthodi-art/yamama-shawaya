import React, { useState } from 'react';
import { Flame, Award, Heart, Sparkles } from 'lucide-react';
import { ABOUT_CONTENT, RESTAURANT_INFO } from '../data/restaurantData';
import restaurantAmbianceImg from '../assets/images/restaurant_ambiance_dining_1790147101358.jpg';

export const AboutSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'story' | 'food' | 'commitment'>('story');

  const tabs = [
    { id: 'story', label: 'Our Story', icon: Sparkles },
    { id: 'food', label: 'Our Food', icon: Flame },
    { id: 'commitment', label: 'Our Commitment', icon: Award }
  ] as const;

  return (
    <section id="about" className="py-24 bg-[#0E0E0E] relative border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Visual Container */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden border border-[#C0C0C0]/20 shadow-2xl group">
              <img
                src={restaurantAmbianceImg}
                alt="Yamama Shawaya Restaurant Dining Interior"
                className="w-full h-[450px] object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              
              {/* Floating badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-[#0B0B0B]/90 backdrop-blur-md border border-[#FFD21F]/30 flex items-center gap-4">
                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-[#FFD21F] bg-[#FFD21F] shrink-0 shadow-lg group-hover:scale-105 transition-transform">
                  <img
                    src={RESTAURANT_INFO.logo}
                    alt="Yamama Shawaya Official Seal"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="text-sm font-bold text-white font-display">Yamama Shawaya Heritage</h4>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#E21B23]/40 text-[#FFD21F] font-bold">100% Halal</span>
                  </div>
                  <p className="text-xs text-zinc-300 mt-0.5">Slow-roasted flame chicken seasoned with generations of culinary mastery.</p>
                </div>
              </div>
            </div>

            {/* Subtle decorative golden border offset */}
            <div className="hidden sm:block absolute -top-3 -left-3 w-28 h-28 border-t-2 border-l-2 border-[#FFD21F]/40 rounded-tl-3xl pointer-events-none" />
          </div>

          {/* Right Text Column */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-[#FFD21F] tracking-widest uppercase mb-3 font-mono">
              <Flame className="w-4 h-4 text-[#E21B23]" />
              <span>Authentic Culinary Heritage</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight mb-6">
              ABOUT <span className="text-[#FFD21F]">YAMAMA SHAWAYA</span>
            </h2>

            <p className="text-base sm:text-lg text-zinc-300 leading-relaxed mb-8">
              {ABOUT_CONTENT.intro}
            </p>

            {/* Interactive Tabs */}
            <div className="flex items-center gap-2 p-1.5 bg-[#141414] border border-[#C0C0C0]/15 rounded-xl mb-6 w-full sm:w-auto">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex-1 sm:flex-initial flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-xs font-bold tracking-wide transition-all ${
                      isActive
                        ? 'bg-[#FFD21F] text-black shadow-md'
                        : 'text-zinc-400 hover:text-white hover:bg-zinc-800'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Tab Details Content Card */}
            <div className="bg-[#141414] border border-[#C0C0C0]/15 p-6 rounded-2xl w-full">
              {activeTab === 'story' && (
                <div className="animate-in fade-in duration-300">
                  <h3 className="text-lg font-bold text-white mb-2 font-display">Our Origin Story</h3>
                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                    {ABOUT_CONTENT.story}
                  </p>
                </div>
              )}

              {activeTab === 'food' && (
                <div className="animate-in fade-in duration-300">
                  <h3 className="text-lg font-bold text-white mb-2 font-display">Craft & Flavor Profile</h3>
                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                    {ABOUT_CONTENT.food}
                  </p>
                </div>
              )}

              {activeTab === 'commitment' && (
                <div className="animate-in fade-in duration-300">
                  <h3 className="text-lg font-bold text-white mb-2 font-display">Our Quality Promise</h3>
                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                    {ABOUT_CONTENT.commitment}
                  </p>
                </div>
              )}
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-zinc-800 w-full">
              <div>
                <span className="block text-2xl font-bold font-mono text-[#FFD21F]">100%</span>
                <span className="text-xs text-zinc-400">Halal Certified</span>
              </div>
              <div>
                <span className="block text-2xl font-bold font-mono text-[#FFD21F]">Daily</span>
                <span className="text-xs text-zinc-400">Fresh Rotisserie</span>
              </div>
              <div>
                <span className="block text-2xl font-bold font-mono text-[#FFD21F]">Signature</span>
                <span className="text-xs text-zinc-400">Garlic Toum Dip</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
