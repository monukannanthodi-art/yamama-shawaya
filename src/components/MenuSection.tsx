import React, { useState, useMemo } from 'react';
import { Search, Flame, X, ShoppingBag, Plus, Minus, Clock, Utensils } from 'lucide-react';
import { MENU_CATEGORIES, MENU_ITEMS, MenuItem, RESTAURANT_INFO } from '../data/restaurantData';
import { MenuCard } from './MenuCard';

interface MenuSectionProps {
  onAddToCart: (item: MenuItem, quantity?: number, notes?: string) => void;
  onOpenOrder: () => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({ onAddToCart, onOpenOrder }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [modalQuantity, setModalQuantity] = useState<number>(1);
  const [spiceLevel, setSpiceLevel] = useState<'Mild' | 'Medium' | 'Fiery'>('Medium');
  const [specialNotes, setSpecialNotes] = useState<string>('');
  const [showFullMenuModal, setShowFullMenuModal] = useState<boolean>(false);

  // Filter items based on category and search query
  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      const matchesCategory =
        activeCategory === 'all' || item.category === activeCategory;
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const handleOpenItemModal = (item: MenuItem) => {
    setSelectedItem(item);
    setModalQuantity(1);
    setSpiceLevel(item.isSpicy ? 'Fiery' : 'Medium');
    setSpecialNotes('');
  };

  const handleModalAddToCart = () => {
    if (selectedItem) {
      const fullNote = `${spiceLevel} Spice${specialNotes ? ` - ${specialNotes}` : ''}`;
      onAddToCart(selectedItem, modalQuantity, fullNote);
      setSelectedItem(null);
    }
  };

  return (
    <section id="menu" className="py-24 bg-[#0B0B0B] relative">
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#FFD21F]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#E21B23]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#FFD21F] tracking-widest uppercase mb-3">
            <Flame className="w-4 h-4 text-[#E21B23]" />
            <span>Flame Roasted & Freshly Crafted</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight mb-4">
            OUR <span className="text-[#FFD21F]">MENU</span>
          </h2>
          <p className="text-base sm:text-lg text-zinc-400">
            Delicious flavours made fresh for you. Authentic Arabic rotisserie shawaya, slow-shaved shawarmas, fragrant rice meals, and signature dips.
          </p>
        </div>

        {/* Search & Category Filter Controls */}
        <div className="mb-10 flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Category Tabs (Segmented control style) */}
          <div className="w-full md:w-auto overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            <div className="flex items-center gap-1.5 p-1.5 bg-[#141414] border border-[#C0C0C0]/15 rounded-xl whitespace-nowrap min-w-max">
              {MENU_CATEGORIES.map((cat) => {
                const isActive = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                      isActive
                        ? 'bg-[#FFD21F] text-black shadow-md font-bold'
                        : 'text-zinc-400 hover:text-white hover:bg-zinc-800/60'
                    }`}
                  >
                    {cat.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search shawaya, shawarma..."
              className="w-full pl-10 pr-4 py-2 bg-[#141414] border border-[#C0C0C0]/15 rounded-xl text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-[#FFD21F] transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-white"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Menu Grid */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 bg-[#121212] rounded-2xl border border-zinc-800">
            <Utensils className="w-10 h-10 text-zinc-600 mx-auto mb-3" />
            <p className="text-zinc-300 font-semibold mb-1">No dishes match your search.</p>
            <p className="text-xs text-zinc-500 mb-4">Try clearing the search or exploring all categories.</p>
            <button
              onClick={() => {
                setActiveCategory('all');
                setSearchQuery('');
              }}
              className="text-xs text-[#FFD21F] underline hover:text-white"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item) => (
              <MenuCard
                key={item.id}
                item={item}
                onAddToCart={(it) => onAddToCart(it, 1)}
                onQuickView={handleOpenItemModal}
              />
            ))}
          </div>
        )}

        {/* View Full Menu CTA Row */}
        <div className="mt-14 text-center flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => setShowFullMenuModal(true)}
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl border border-[#FFD21F] text-[#FFD21F] hover:bg-[#FFD21F] hover:text-black font-bold text-xs tracking-wider uppercase transition-all duration-200"
          >
            VIEW FULL MENU DIRECTORY
          </button>
          <button
            onClick={onOpenOrder}
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#E21B23] hover:bg-[#c9141c] text-white font-bold text-xs tracking-wider uppercase transition-all shadow-lg hover:shadow-[#E21B23]/40"
          >
            ORDER NOW FOR DINE-IN / DELIVERY
          </button>
        </div>

      </div>

      {/* Item Quick View & Customization Modal */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div
            className="bg-[#141414] border border-[#C0C0C0]/20 rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl relative"
            role="dialog"
            aria-modal="true"
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-black/60 text-white hover:text-[#FFD21F] flex items-center justify-center transition-colors"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Image */}
            <div className="relative h-56 w-full overflow-hidden bg-zinc-900">
              <img
                src={selectedItem.image}
                alt={selectedItem.name}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-black/30" />
              <div className="absolute bottom-3 left-4">
                <span className="text-[11px] font-mono text-[#FFD21F] uppercase tracking-wider block">
                  {selectedItem.category}
                </span>
                <h3 className="text-xl font-bold text-white font-display">
                  {selectedItem.name}
                </h3>
              </div>
            </div>

            {/* Modal Details */}
            <div className="p-6">
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-4">
                {selectedItem.description}
              </p>

              {/* Meta indicators */}
              <div className="grid grid-cols-2 gap-3 mb-5 p-3 rounded-xl bg-zinc-900/80 border border-white/5 text-xs">
                <div className="flex items-center gap-2 text-zinc-300">
                  <Clock className="w-4 h-4 text-[#FFD21F]" />
                  <span>Prep: {selectedItem.prepTime || '10-15 mins'}</span>
                </div>
                <div className="flex items-center gap-2 text-zinc-300">
                  <Utensils className="w-4 h-4 text-[#FFD21F]" />
                  <span>Portion: {selectedItem.portion || 'Standard'}</span>
                </div>
              </div>

              {/* Spice Level Selector */}
              <div className="mb-5">
                <label className="block text-xs font-semibold text-zinc-300 mb-2 uppercase tracking-wider">
                  Select Spice Level:
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {(['Mild', 'Medium', 'Fiery'] as const).map((lvl) => (
                    <button
                      key={lvl}
                      type="button"
                      onClick={() => setSpiceLevel(lvl)}
                      className={`py-2 px-3 text-xs font-semibold rounded-lg border transition-all ${
                        spiceLevel === lvl
                          ? 'bg-[#E21B23] text-white border-[#E21B23]'
                          : 'bg-zinc-900 text-zinc-400 border-zinc-800 hover:text-white'
                      }`}
                    >
                      {lvl}
                    </button>
                  ))}
                </div>
              </div>

              {/* Special Instructions */}
              <div className="mb-5">
                <label className="block text-xs font-semibold text-zinc-300 mb-1.5 uppercase tracking-wider">
                  Special Request (Optional):
                </label>
                <input
                  type="text"
                  value={specialNotes}
                  onChange={(e) => setSpecialNotes(e.target.value)}
                  placeholder="Extra garlic toum, no pickles, toasted Saj..."
                  className="w-full px-3 py-2 bg-zinc-900 border border-zinc-800 rounded-lg text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-[#FFD21F]"
                />
              </div>

              {/* Quantity and Add CTA */}
              <div className="flex items-center justify-between pt-4 border-t border-zinc-800">
                <div className="flex items-center gap-3">
                  <div className="flex items-center border border-zinc-700 rounded-lg overflow-hidden bg-zinc-900">
                    <button
                      onClick={() => setModalQuantity(Math.max(1, modalQuantity - 1))}
                      className="px-2.5 py-1.5 text-zinc-400 hover:text-white transition-colors"
                      aria-label="Decrease quantity"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="px-3 text-xs font-mono font-bold text-white tabular-nums">
                      {modalQuantity}
                    </span>
                    <button
                      onClick={() => setModalQuantity(modalQuantity + 1)}
                      className="px-2.5 py-1.5 text-zinc-400 hover:text-white transition-colors"
                      aria-label="Increase quantity"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>
                  <span className="text-base font-bold font-mono text-[#FFD21F] tabular-nums">
                    {RESTAURANT_INFO.currency} {(selectedItem.price * modalQuantity).toFixed(2)}
                  </span>
                </div>

                <button
                  onClick={handleModalAddToCart}
                  className="bg-[#E21B23] hover:bg-[#c9141c] text-white text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-lg flex items-center gap-2 shadow-lg hover:shadow-[#E21B23]/30 transition-all"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Add to Order</span>
                </button>
              </div>

            </div>
          </div>
        </div>
      )}

      {/* Full Menu Directory Modal */}
      {showFullMenuModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in">
          <div className="bg-[#121212] border border-[#C0C0C0]/20 rounded-2xl max-w-4xl w-full max-h-[85vh] flex flex-col overflow-hidden shadow-2xl">
            {/* Header */}
            <div className="p-6 border-b border-zinc-800 flex items-center justify-between">
              <div>
                <h3 className="text-xl sm:text-2xl font-display font-bold text-white">
                  YAMAMA SHAWAYA — Full Menu & Pricing
                </h3>
                <p className="text-xs text-zinc-400">All prices in {RESTAURANT_INFO.currency}. 100% Halal Certified.</p>
              </div>
              <button
                onClick={() => setShowFullMenuModal(false)}
                className="w-8 h-8 rounded-full bg-zinc-800 hover:bg-zinc-700 text-white flex items-center justify-center transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* List by category */}
            <div className="p-6 overflow-y-auto space-y-8 divide-y divide-zinc-800/60">
              {MENU_CATEGORIES.filter((c) => c.id !== 'all').map((cat) => {
                const itemsInCat = MENU_ITEMS.filter((i) => i.category === cat.id);
                if (itemsInCat.length === 0) return null;
                return (
                  <div key={cat.id} className="pt-6 first:pt-0">
                    <h4 className="text-sm font-bold uppercase tracking-widest text-[#FFD21F] mb-4 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E21B23]" />
                      {cat.label}
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {itemsInCat.map((item) => (
                        <div
                          key={item.id}
                          className="flex items-start justify-between p-3 rounded-xl bg-zinc-900/60 border border-zinc-800/80 hover:border-zinc-700"
                        >
                          <div className="pr-3">
                            <div className="flex items-center gap-2">
                              <h5 className="text-sm font-bold text-white">{item.name}</h5>
                              {item.isSpicy && <Flame className="w-3.5 h-3.5 text-[#E21B23]" />}
                            </div>
                            <p className="text-xs text-zinc-400 mt-1 line-clamp-2">{item.description}</p>
                            <span className="text-[11px] text-zinc-500 font-mono mt-1 block">{item.portion}</span>
                          </div>
                          <div className="flex flex-col items-end shrink-0 gap-2">
                            <span className="font-mono text-sm font-bold text-[#FFD21F]">
                              {RESTAURANT_INFO.currency} {item.price.toFixed(2)}
                            </span>
                            <button
                              onClick={() => {
                                onAddToCart(item, 1);
                                setShowFullMenuModal(false);
                              }}
                              className="text-[11px] font-bold bg-[#E21B23] hover:bg-[#c9141c] text-white px-2.5 py-1 rounded"
                            >
                              Add
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Footer */}
            <div className="p-4 border-t border-zinc-800 bg-[#0E0E0E] flex items-center justify-between">
              <span className="text-xs text-zinc-400">Call {RESTAURANT_INFO.phone} for custom party platters.</span>
              <button
                onClick={() => setShowFullMenuModal(false)}
                className="px-5 py-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-white text-xs font-semibold"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
