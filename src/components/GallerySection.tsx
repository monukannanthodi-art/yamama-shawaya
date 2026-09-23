import React, { useState } from 'react';
import { Camera, ChevronLeft, ChevronRight, X, Maximize2 } from 'lucide-react';
import { GALLERY_ITEMS, GalleryItem } from '../data/restaurantData';

export const GallerySection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const categories = ['All', 'Shawaya', 'Shawarma', 'Grills', 'Rice Dishes', 'Interior', 'Preparation'];

  const filteredGallery = selectedCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === selectedCategory);

  const openLightbox = (index: number) => {
    setActiveLightboxIndex(index);
  };

  const closeLightbox = () => {
    setActiveLightboxIndex(null);
  };

  const showNext = () => {
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((activeLightboxIndex + 1) % filteredGallery.length);
    }
  };

  const showPrev = () => {
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex(
        (activeLightboxIndex - 1 + filteredGallery.length) % filteredGallery.length
      );
    }
  };

  return (
    <section id="photos" className="py-24 bg-[#0B0B0B] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-[#FFD21F] tracking-widest uppercase mb-2">
            <Camera className="w-4 h-4 text-[#FFD21F]" />
            <span>Visual Culinary Experience</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight mb-3">
            OUR FOOD & <span className="text-[#FFD21F]">MOMENTS</span>
          </h2>
          <p className="text-sm sm:text-base text-zinc-400">
            A glimpse into our open-fire roasting, golden poultry, sizzling grills, and warm restaurant ambiance.
          </p>
        </div>

        {/* Filter categories */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wider transition-all whitespace-nowrap ${
                selectedCategory === cat
                  ? 'bg-[#FFD21F] text-black font-bold shadow-md'
                  : 'bg-[#141414] text-zinc-400 hover:text-white border border-[#C0C0C0]/15'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGallery.map((item, index) => (
            <div
              key={item.id}
              onClick={() => openLightbox(index)}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-zinc-900 border border-[#C0C0C0]/15 hover:border-[#FFD21F]/60 cursor-pointer shadow-lg transition-all duration-300"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

              {/* Top right zoom icon */}
              <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 text-white/80 group-hover:text-[#FFD21F] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0 backdrop-blur-sm">
                <Maximize2 className="w-4 h-4" />
              </div>

              {/* Bottom Caption */}
              <div className="absolute bottom-4 left-4 right-4 text-left">
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#FFD21F] block mb-1">
                  {item.category}
                </span>
                <h3 className="text-base font-bold text-white font-display">
                  {item.title}
                </h3>
                <p className="text-xs text-zinc-300 mt-1 line-clamp-1">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Modern Lightbox Modal */}
      {activeLightboxIndex !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-md animate-in fade-in">
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 z-50 text-white hover:text-[#FFD21F] p-2 rounded-full bg-zinc-900/80 transition-colors"
            aria-label="Close photo preview"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Previous Arrow */}
          <button
            onClick={showPrev}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-50 text-white hover:text-[#FFD21F] p-3 rounded-full bg-zinc-900/80 transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next Arrow */}
          <button
            onClick={showNext}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-50 text-white hover:text-[#FFD21F] p-3 rounded-full bg-zinc-900/80 transition-colors"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Lightbox Content */}
          <div className="max-w-4xl w-full max-h-[85vh] flex flex-col items-center">
            <div className="relative w-full h-[60vh] sm:h-[70vh] flex items-center justify-center overflow-hidden rounded-2xl bg-zinc-950">
              <img
                src={filteredGallery[activeLightboxIndex].image}
                alt={filteredGallery[activeLightboxIndex].title}
                className="max-w-full max-h-full object-contain rounded-xl"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="mt-4 text-center max-w-xl">
              <span className="text-xs font-mono text-[#FFD21F] uppercase tracking-wider block mb-1">
                {filteredGallery[activeLightboxIndex].category} • {activeLightboxIndex + 1} of {filteredGallery.length}
              </span>
              <h4 className="text-lg font-bold text-white font-display">
                {filteredGallery[activeLightboxIndex].title}
              </h4>
              <p className="text-xs text-zinc-400 mt-1">
                {filteredGallery[activeLightboxIndex].description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
