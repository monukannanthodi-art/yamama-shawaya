import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag, Phone, Flame, MapPin } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ cartCount, onOpenCart }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Overview', href: '#overview' },
    { name: 'Menu', href: '#menu' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Photos', href: '#photos' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0B0B0B]/95 backdrop-blur-md border-b border-[#C0C0C0]/15 py-3 shadow-2xl'
          : 'bg-gradient-to-b from-[#0B0B0B]/90 via-[#0B0B0B]/60 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Wordmark with Official Logo Emblem */}
          <a
            href="#overview"
            className="flex items-center gap-2.5 sm:gap-3 group transition-transform duration-200 hover:scale-[1.02]"
            aria-label="Yamama Shawaya Home"
          >
            <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full overflow-hidden border-2 border-[#FFD21F] shadow-lg group-hover:border-[#E21B23] group-hover:shadow-[#FFD21F]/40 transition-all shrink-0 bg-[#FFD21F]">
              <img
                src={RESTAURANT_INFO.logo}
                alt="Yamama Shawaya Official Logo"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-extrabold text-lg sm:text-xl tracking-wider text-white group-hover:text-[#FFD21F] transition-colors leading-tight">
                YAMAMA <span className="text-[#FFD21F]">SHAWAYA</span>
              </span>
              <span className="text-[9px] sm:text-[10px] font-mono tracking-widest text-[#FFD21F]/90 uppercase font-semibold">
                {RESTAURANT_INFO.energySlogan}
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium tracking-wide text-zinc-300 hover:text-[#FFD21F] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#FFD21F] hover:after:w-full after:transition-all after:duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action Zone: Contact Number + Cart + Order CTA + Mobile Menu Button */}
          <div className="flex items-center gap-2 sm:gap-3 lg:gap-4">
            {/* Quick Location Badge (Desktop) */}
            <a
              href="#contact"
              className="hidden xl:flex items-center gap-1.5 text-xs text-zinc-300 hover:text-[#FFD21F] px-2.5 py-1.5 rounded-lg border border-zinc-800 hover:border-[#FFD21F]/40 transition-colors bg-zinc-900/60"
              title="Oradampalam - Valiyaveettilpadi, Tirurkad, Perinthalmanna"
            >
              <MapPin className="w-3.5 h-3.5 text-[#E21B23] shrink-0" />
              <span className="text-[11px] font-medium text-zinc-300">Tirurkad, Perinthalmanna</span>
            </a>

            {/* Quick Call Button with Contact Number */}
            <a
              href={`tel:${RESTAURANT_INFO.phone}`}
              className="flex items-center gap-1.5 sm:gap-2 text-xs text-white bg-zinc-900/90 hover:bg-zinc-800 px-2.5 sm:px-3 py-1.5 rounded-lg border border-[#FFD21F]/40 hover:border-[#FFD21F] shadow-sm hover:shadow-[#FFD21F]/20 transition-all group"
              title="Call Yamama Shawaya"
              aria-label={`Call Yamama Shawaya at ${RESTAURANT_INFO.phone}`}
            >
              <div className="w-5 h-5 rounded-full bg-[#FFD21F]/20 flex items-center justify-center text-[#FFD21F] group-hover:bg-[#FFD21F] group-hover:text-black transition-colors shrink-0">
                <Phone className="w-3 h-3" />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-[9px] text-zinc-400 font-medium uppercase tracking-wider hidden md:block leading-none">Contact Us</span>
                <span className="font-mono font-bold text-[11px] sm:text-xs text-[#FFD21F] group-hover:text-white tracking-wide transition-colors">
                  {RESTAURANT_INFO.phone}
                </span>
              </div>
            </a>

            {/* Cart Trigger */}
            <button
              onClick={onOpenCart}
              className="relative p-2 text-zinc-200 hover:text-[#FFD21F] rounded-lg border border-[#C0C0C0]/20 hover:border-[#FFD21F]/40 transition-colors"
              aria-label={`View shopping cart with ${cartCount} items`}
            >
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-[#E21B23] text-white font-bold text-[10px] w-5 h-5 rounded-full flex items-center justify-center shadow-md animate-pulse">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Primary CTA: Order Now */}
            <button
              onClick={onOpenCart}
              className="bg-[#E21B23] hover:bg-[#c8141c] text-white text-xs sm:text-sm font-bold tracking-wider uppercase px-4 sm:px-5 py-2.5 rounded-lg shadow-lg hover:shadow-[#E21B23]/40 active:scale-95 transition-all flex items-center gap-2 whitespace-nowrap"
            >
              <span>Order Now</span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-zinc-300 hover:text-white rounded-lg focus:outline-none"
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0B0B0B]/98 border-b border-[#C0C0C0]/20 px-4 pt-3 pb-6 mt-3 shadow-2xl backdrop-blur-xl animate-in slide-in-from-top-2">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-zinc-200 hover:text-[#FFD21F] py-2 px-3 rounded-md hover:bg-zinc-900 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-3 border-t border-zinc-800 flex flex-col gap-2 mt-2">
              <a
                href={RESTAURANT_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 text-xs text-zinc-300 py-2.5 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-[#FFD21F]/40 transition-colors"
              >
                <MapPin className="w-4 h-4 text-[#E21B23]" />
                <span className="truncate">Oradampalam, Tirurkad, Perinthalmanna</span>
              </a>
              <a
                href={`tel:${RESTAURANT_INFO.phone}`}
                className="flex items-center justify-center gap-2.5 text-sm font-semibold text-white py-3 rounded-lg bg-zinc-900 border border-[#FFD21F]/40 hover:border-[#FFD21F] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#FFD21F]" />
                <span>Call Directly: <strong className="font-mono text-[#FFD21F] tracking-wider">{RESTAURANT_INFO.phone}</strong></span>
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCart();
                }}
                className="w-full bg-[#E21B23] text-white text-sm font-bold uppercase py-3 rounded-lg shadow-lg"
              >
                Order Now Online
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
