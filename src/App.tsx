import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { QuickHighlights } from './components/QuickHighlights';
import { MenuSection } from './components/MenuSection';
import { SpecialOffer } from './components/SpecialOffer';
import { ReviewsSection } from './components/ReviewsSection';
import { GallerySection } from './components/GallerySection';
import { AboutSection } from './components/AboutSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { CallToAction } from './components/CallToAction';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { OrderCartDrawer, CartItem } from './components/OrderCartDrawer';
import { MenuItem, MENU_ITEMS } from './data/restaurantData';
import { Check, ShoppingBag } from 'lucide-react';

export default function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  useEffect(() => {
    // Ensure all favicon link elements are present and point to Yamama logo
    const iconLinks = document.querySelectorAll("link[rel*='icon']");
    iconLinks.forEach((link) => {
      const el = link as HTMLLinkElement;
      if (!el.href.includes('favicon.svg') && !el.href.includes('favicon-32x32') && !el.href.includes('favicon.ico')) {
        el.href = '/favicon-32x32.png?v=3';
      }
    });
  }, []);

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 2400);
  };

  const handleAddToCart = (item: MenuItem, quantity = 1, notes?: string) => {
    setCartItems((prevItems) => {
      const existingIndex = prevItems.findIndex((ci) => ci.item.id === item.id);
      if (existingIndex > -1) {
        const updated = [...prevItems];
        updated[existingIndex].quantity += quantity;
        if (notes) updated[existingIndex].notes = notes;
        return updated;
      } else {
        return [...prevItems, { item, quantity, notes }];
      }
    });

    showToast(`Added ${quantity}x ${item.name} to order`);
  };

  const handleUpdateQuantity = (itemId: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      handleRemoveItem(itemId);
    } else {
      setCartItems((prev) =>
        prev.map((ci) =>
          ci.item.id === itemId ? { ...ci, quantity: newQuantity } : ci
        )
      );
    }
  };

  const handleRemoveItem = (itemId: string) => {
    setCartItems((prev) => prev.filter((ci) => ci.item.id !== itemId));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const handleOrderSpecial = () => {
    // Look up the royal feast special item or construct one
    const specialItem = MENU_ITEMS.find((m) => m.id === 'sp-1') || MENU_ITEMS[0];
    handleAddToCart(specialItem, 1, 'Yamama Special Offer Deal');
    setIsCartOpen(true);
  };

  const totalCartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-[#0B0B0B] text-white flex flex-col font-sans selection:bg-[#FFD21F] selection:text-black">
      
      {/* Sticky Navigation Bar */}
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* 1. Hero / Overview Section */}
        <Hero onOpenOrder={() => setIsCartOpen(true)} />

        {/* 2. Quick Highlights Feature Cards */}
        <QuickHighlights />

        {/* 3. Interactive Menu Section with Categories & Filters */}
        <MenuSection
          onAddToCart={handleAddToCart}
          onOpenOrder={() => setIsCartOpen(true)}
        />

        {/* 4. Special Offer Section */}
        <SpecialOffer onOrderSpecial={handleOrderSpecial} />

        {/* 5. Reviews & Customer Testimonials */}
        <ReviewsSection />

        {/* 6. Food & Moments Photo Gallery with Lightbox */}
        <GallerySection />

        {/* 7. About Yamama Shawaya */}
        <AboutSection />

        {/* 8. Why Choose Us */}
        <WhyChooseUs />

        {/* 9. High-Impact Call to Action Banner */}
        <CallToAction onOpenOrder={() => setIsCartOpen(true)} />

        {/* 10. Contact Section & Map */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Slide-over Order Cart Drawer */}
      <OrderCartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* Floating Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#161616] border border-[#FFD21F]/50 text-white px-4 py-3 rounded-xl shadow-2xl flex items-center gap-3 animate-in slide-in-from-bottom-5 duration-200">
          <div className="w-7 h-7 rounded-full bg-[#FFD21F] text-black flex items-center justify-center shrink-0">
            <Check className="w-4 h-4 stroke-[3]" />
          </div>
          <span className="text-xs sm:text-sm font-medium">{toastMessage}</span>
          <button
            onClick={() => setIsCartOpen(true)}
            className="ml-2 text-xs font-bold text-[#FFD21F] hover:underline flex items-center gap-1"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>View</span>
          </button>
        </div>
      )}

      {/* Sticky Quick Order Floating Pill on Mobile */}
      <div className="sm:hidden fixed bottom-4 left-4 right-4 z-40">
        <button
          onClick={() => setIsCartOpen(true)}
          className="w-full bg-[#E21B23] hover:bg-[#c9141c] text-white font-bold text-xs uppercase tracking-wider py-3.5 px-4 rounded-xl shadow-2xl flex items-center justify-between"
        >
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-4 h-4" />
            <span>Order Online</span>
          </div>
          <div className="flex items-center gap-2">
            {totalCartCount > 0 && (
              <span className="bg-black/40 text-white px-2 py-0.5 rounded-full text-[11px] font-mono">
                {totalCartCount} items
              </span>
            )}
            <span>View Bag →</span>
          </div>
        </button>
      </div>

    </div>
  );
}
