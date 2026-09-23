import React from 'react';
import { Flame, Instagram, Facebook, MessageSquare, Youtube, MapPin, Phone, Mail, Clock } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const Footer: React.FC = () => {
  const footerLinks = [
    { name: 'Overview', href: '#overview' },
    { name: 'Menu', href: '#menu' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Photos', href: '#photos' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <footer className="bg-[#070707] border-t border-[#C0C0C0]/15 pt-16 pb-12 text-zinc-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-12">
          
          {/* Brand & Tagline Column */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <a href="#overview" className="flex items-center gap-3 group mb-4">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[#FFD21F] shadow-lg group-hover:border-[#E21B23] transition-colors shrink-0 bg-[#FFD21F]">
                <img
                  src={RESTAURANT_INFO.logo}
                  alt="Yamama Shawaya Official Logo"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-extrabold text-xl tracking-wider text-white">
                  YAMAMA <span className="text-[#FFD21F]">SHAWAYA</span>
                </span>
                <span className="text-[10px] font-mono tracking-widest text-[#FFD21F]/90 uppercase font-semibold">
                  {RESTAURANT_INFO.energySlogan}
                </span>
              </div>
            </a>
            
            <p className="text-sm text-zinc-300 font-medium mb-3">
              Fresh flavours. Quality food. Great moments.
            </p>
            
            <p className="text-xs text-zinc-500 leading-relaxed mb-6 max-w-sm">
              Authentic Middle Eastern rotisserie shawaya, shaved chicken shawarmas, and charcoal grills prepared fresh daily using genuine spices and premium halal poultry.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a
                href={RESTAURANT_INFO.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-[#FFD21F] hover:text-[#FFD21F] flex items-center justify-center transition-colors"
                aria-label="Yamama Shawaya Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={RESTAURANT_INFO.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-[#FFD21F] hover:text-[#FFD21F] flex items-center justify-center transition-colors"
                aria-label="Yamama Shawaya Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={RESTAURANT_INFO.socials.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-[#25D366] hover:text-[#25D366] flex items-center justify-center transition-colors"
                aria-label="Yamama Shawaya WhatsApp"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
              <a
                href={RESTAURANT_INFO.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-[#E21B23] hover:text-[#E21B23] flex items-center justify-center transition-colors"
                aria-label="Yamama Shawaya YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-[#FFD21F] mb-4">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-xs text-zinc-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Culinary Highlights */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-[#FFD21F] mb-4">
              House Specialties
            </h4>
            <ul className="space-y-2 text-xs text-zinc-400">
              <li>Chicken Shawaya</li>
              <li>Signature Shawarma</li>
              <li>Bukhari Spiced Rice</li>
              <li>Shish Tawook Grills</li>
              <li>Yamama Royal Feast</li>
              <li>Fresh Limonana Juice</li>
            </ul>
          </div>

          {/* Direct Contact info */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-[#FFD21F] mb-4">
              Direct Contact
            </h4>
            <ul className="space-y-3 text-xs">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#FFD21F] shrink-0 mt-0.5" />
                <a
                  href={RESTAURANT_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-300 hover:text-[#FFD21F] transition-colors leading-relaxed"
                  title="Open location on Google Maps"
                >
                  {RESTAURANT_INFO.address}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#FFD21F] shrink-0" />
                <a href={`tel:${RESTAURANT_INFO.phone}`} className="text-zinc-300 hover:text-white font-mono">
                  {RESTAURANT_INFO.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#FFD21F] shrink-0" />
                <a href={`mailto:${RESTAURANT_INFO.email}`} className="text-zinc-300 hover:text-white">
                  {RESTAURANT_INFO.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#FFD21F] shrink-0 mt-0.5" />
                <span className="text-zinc-400">{RESTAURANT_INFO.hours}</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright */}
        <div className="pt-8 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>© 2026 YAMAMA SHAWAYA. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <span className="text-zinc-500">Halal Certified Dining</span>
            <span aria-hidden="true">·</span>
            <span className="text-zinc-500">Made Fresh Daily</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
