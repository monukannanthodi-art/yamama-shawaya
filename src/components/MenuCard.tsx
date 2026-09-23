import React, { useState } from 'react';
import { Plus, Check, Flame, Leaf, Eye } from 'lucide-react';
import { MenuItem, RESTAURANT_INFO } from '../data/restaurantData';

interface MenuCardProps {
  item: MenuItem;
  onAddToCart: (item: MenuItem) => void;
  onQuickView: (item: MenuItem) => void;
}

export const MenuCard: React.FC<MenuCardProps> = ({ item, onAddToCart, onQuickView }) => {
  const [added, setAdded] = useState(false);

  const handleAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    onAddToCart(item);
    setAdded(true);
    setTimeout(() => setAdded(false), 1200);
  };

  return (
    <article
      onClick={() => onQuickView(item)}
      className="group bg-[#141414] border border-[#C0C0C0]/15 hover:border-[#FFD21F]/60 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between cursor-pointer relative"
    >
      <div>
        {/* Food Image Container */}
        <div className="relative aspect-[4/3] w-full overflow-hidden bg-zinc-900">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
            referrerPolicy="no-referrer"
            loading="lazy"
          />
          {/* Subtle gradient scrim */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-black/20" />

          {/* Clean Top Indicators */}
          <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
            {/* Dietary Symbol: Non-Veg red dot or Veg green leaf */}
            <div className="flex items-center gap-1.5 bg-[#0B0B0B]/85 backdrop-blur-md px-2 py-1 rounded text-[11px] font-medium border border-white/10">
              {item.isVeg ? (
                <span className="flex items-center gap-1 text-emerald-400">
                  <Leaf className="w-3 h-3" />
                  <span>Veg</span>
                </span>
              ) : (
                <span className="flex items-center gap-1 text-red-400">
                  <span className="w-2 h-2 rounded-full bg-[#E21B23]" />
                  <span>Halal Meat</span>
                </span>
              )}
            </div>

            {/* Popular or Spicy Indicator */}
            {item.isPopular && (
              <span className="text-[11px] font-semibold text-[#FFD21F] bg-[#0B0B0B]/90 border border-[#FFD21F]/40 px-2 py-0.5 rounded tracking-wide">
                Popular
              </span>
            )}
            {item.isSpicy && !item.isPopular && (
              <span className="text-[11px] font-semibold text-[#E21B23] bg-[#0B0B0B]/90 border border-[#E21B23]/40 px-2 py-0.5 rounded flex items-center gap-1">
                <Flame className="w-3 h-3 text-[#E21B23]" />
                <span>Spicy</span>
              </span>
            )}
          </div>

          {/* Quick view icon on hover */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-[2px]">
            <span className="bg-zinc-900/90 text-white text-xs font-medium px-3 py-1.5 rounded-lg border border-white/20 flex items-center gap-1.5 shadow-lg">
              <Eye className="w-3.5 h-3.5 text-[#FFD21F]" />
              Quick View
            </span>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-5">
          {/* Unboxed Metadata (Zero-Pill Rule) */}
          <div className="flex items-center gap-2 text-[11px] text-zinc-400 mb-1.5 uppercase tracking-wider font-mono">
            <span>{item.category}</span>
            {item.portion && (
              <>
                <span aria-hidden="true">·</span>
                <span>{item.portion}</span>
              </>
            )}
          </div>

          {/* Food Title */}
          <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-[#FFD21F] transition-colors leading-snug mb-2 font-display">
            {item.name}
          </h3>

          {/* Description */}
          <p className="text-xs text-zinc-400 line-clamp-2 leading-relaxed">
            {item.description}
          </p>
        </div>
      </div>

      {/* Card Footer: Price & Add Button */}
      <div className="p-5 pt-0 mt-2 flex items-center justify-between border-t border-white/[0.06] pt-3">
        <div className="flex items-baseline gap-2">
          <span className="text-base sm:text-lg font-bold font-mono text-[#FFD21F] tabular-nums">
            {RESTAURANT_INFO.currency} {item.price.toFixed(2)}
          </span>
          {item.originalPrice && (
            <span className="text-xs text-zinc-500 line-through font-mono tabular-nums">
              {item.originalPrice.toFixed(2)}
            </span>
          )}
        </div>

        <button
          onClick={handleAdd}
          className={`px-3.5 py-2 rounded-lg text-xs font-bold tracking-wide uppercase transition-all duration-200 flex items-center gap-1.5 active:scale-95 ${
            added
              ? 'bg-emerald-600 text-white'
              : 'bg-[#E21B23] hover:bg-[#c9141c] text-white shadow-md hover:shadow-[#E21B23]/30'
          }`}
          aria-label={`Add ${item.name} to order`}
        >
          {added ? (
            <>
              <Check className="w-3.5 h-3.5" />
              <span>Added</span>
            </>
          ) : (
            <>
              <Plus className="w-3.5 h-3.5" />
              <span>Add</span>
            </>
          )}
        </button>
      </div>
    </article>
  );
};
