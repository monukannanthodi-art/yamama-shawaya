import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, Phone, ArrowRight, Check } from 'lucide-react';
import { MenuItem, RESTAURANT_INFO } from '../data/restaurantData';

export interface CartItem {
  item: MenuItem;
  quantity: number;
  notes?: string;
}

interface OrderCartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (itemId: string, newQuantity: number) => void;
  onRemoveItem: (itemId: string) => void;
  onClearCart: () => void;
}

export const OrderCartDrawer: React.FC<OrderCartDrawerProps> = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart
}) => {
  const [orderType, setOrderType] = useState<'delivery' | 'takeaway' | 'dinein'>('delivery');
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [customerAddress, setCustomerAddress] = useState('');
  const [orderPlacedSuccess, setOrderPlacedSuccess] = useState(false);

  if (!isOpen) return null;

  const subtotal = cartItems.reduce(
    (sum, entry) => sum + entry.item.price * entry.quantity,
    0
  );
  const freeDeliveryThreshold = 300;
  const standardDeliveryFee = 40;
  const deliveryFee = orderType === 'delivery' ? (subtotal >= freeDeliveryThreshold || subtotal === 0 ? 0 : standardDeliveryFee) : 0;
  const total = subtotal + deliveryFee;

  const handleSendWhatsAppOrder = () => {
    if (cartItems.length === 0) return;

    let message = `🍗 *YAMAMA SHAWAYA NEW ORDER*\n`;
    message += `──────────────────\n`;
    message += `*Type:* ${orderType.toUpperCase()}\n`;
    if (customerName) message += `*Customer:* ${customerName}\n`;
    if (customerPhone) message += `*Phone:* ${customerPhone}\n`;
    if (orderType === 'delivery' && customerAddress) message += `*Address:* ${customerAddress}\n`;
    message += `──────────────────\n*ITEMS:*\n`;

    cartItems.forEach((entry, idx) => {
      message += `${idx + 1}. ${entry.item.name} x${entry.quantity} - ${RESTAURANT_INFO.currency}${(entry.item.price * entry.quantity).toFixed(2)}\n`;
      if (entry.notes) message += `   ↳ Note: ${entry.notes}\n`;
    });

    message += `──────────────────\n`;
    message += `*Subtotal:* ${RESTAURANT_INFO.currency}${subtotal.toFixed(2)}\n`;
    if (orderType === 'delivery') {
      message += `*Delivery:* ${deliveryFee === 0 ? 'FREE' : `${RESTAURANT_INFO.currency}${deliveryFee.toFixed(2)}`}\n`;
    }
    message += `*Total Amount:* ${RESTAURANT_INFO.currency}${total.toFixed(2)}\n`;
    message += `──────────────────\nPlease confirm my order. Thank you!`;

    const encoded = encodeURI(message);
    window.open(`https://wa.me/${RESTAURANT_INFO.whatsappClean}?text=${encoded}`, '_blank');
    setOrderPlacedSuccess(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/80 backdrop-blur-sm animate-in fade-in">
      <div className="absolute inset-0" onClick={onClose} />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#121212] border-l border-[#C0C0C0]/20 flex flex-col shadow-2xl">
          
          {/* Drawer Header */}
          <div className="p-4 sm:p-5 border-b border-zinc-800 flex items-center justify-between bg-zinc-950">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full overflow-hidden border border-[#FFD21F] bg-[#FFD21F] shrink-0">
                <img
                  src={RESTAURANT_INFO.logo}
                  alt="Yamama Logo"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex flex-col">
                <h2 className="text-base font-bold font-display text-white leading-tight">Your Order Bag</h2>
                <span className="text-[10px] font-mono text-[#FFD21F]">Yamama Shawaya Express</span>
              </div>
              <span className="text-xs font-mono bg-zinc-800 text-zinc-300 px-2 py-0.5 rounded-full ml-1">
                {cartItems.reduce((acc, item) => acc + item.quantity, 0)}
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Drawer Body */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            
            {/* Free Delivery Callout */}
            {orderType === 'delivery' && (
              <div className="p-3 rounded-xl bg-zinc-900 border border-[#FFD21F]/20 text-xs">
                {subtotal >= freeDeliveryThreshold ? (
                  <span className="text-emerald-400 font-semibold flex items-center gap-1.5">
                    <Check className="w-4 h-4" /> You unlocked FREE Delivery!
                  </span>
                ) : (
                  <span className="text-zinc-300">
                    Add <strong className="text-[#FFD21F]">{RESTAURANT_INFO.currency}{(freeDeliveryThreshold - subtotal).toFixed(2)}</strong> more for <strong className="text-white">FREE Delivery</strong>
                  </span>
                )}
              </div>
            )}

            {/* Order Type Selector */}
            <div>
              <label className="block text-[11px] font-mono text-zinc-400 uppercase tracking-wider mb-1.5">
                Dining Option:
              </label>
              <div className="grid grid-cols-3 gap-2">
                {(['delivery', 'takeaway', 'dinein'] as const).map((type) => (
                  <button
                    key={type}
                    onClick={() => setOrderType(type)}
                    className={`py-2 text-xs font-bold capitalize rounded-lg border transition-all ${
                      orderType === type
                        ? 'bg-[#FFD21F] text-black border-[#FFD21F]'
                        : 'bg-zinc-900 text-zinc-400 border-zinc-800 hover:text-white'
                    }`}
                  >
                    {type === 'dinein' ? 'Dine In' : type}
                  </button>
                ))}
              </div>
            </div>

            {/* Empty State */}
            {cartItems.length === 0 ? (
              <div className="py-16 text-center">
                <ShoppingBag className="w-12 h-12 text-zinc-700 mx-auto mb-3" />
                <h3 className="text-base font-bold text-white mb-1">Your order bag is empty</h3>
                <p className="text-xs text-zinc-500 mb-6">Explore our fresh shawaya & shawarma menu.</p>
                <button
                  onClick={onClose}
                  className="bg-[#E21B23] hover:bg-[#c9141c] text-white text-xs font-bold uppercase tracking-wider px-6 py-2.5 rounded-lg"
                >
                  Browse Menu
                </button>
              </div>
            ) : (
              <div className="space-y-3">
                {cartItems.map((entry) => (
                  <div
                    key={entry.item.id}
                    className="p-3.5 rounded-xl bg-zinc-900/80 border border-zinc-800 flex items-start gap-3"
                  >
                    <img
                      src={entry.item.image}
                      alt={entry.item.name}
                      className="w-16 h-16 object-cover rounded-lg shrink-0 border border-zinc-800"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-1">
                        <h4 className="text-xs sm:text-sm font-bold text-white truncate">{entry.item.name}</h4>
                        <button
                          onClick={() => onRemoveItem(entry.item.id)}
                          className="text-zinc-500 hover:text-[#E21B23] p-1"
                          aria-label="Remove item"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      {entry.notes && (
                        <p className="text-[11px] text-zinc-400 truncate mt-0.5">Note: {entry.notes}</p>
                      )}

                      <div className="flex items-center justify-between mt-2">
                        <span className="text-xs font-mono font-bold text-[#FFD21F] tabular-nums">
                          {RESTAURANT_INFO.currency}{(entry.item.price * entry.quantity).toFixed(2)}
                        </span>

                        <div className="flex items-center border border-zinc-700 rounded-md overflow-hidden bg-black/40">
                          <button
                            onClick={() => onUpdateQuantity(entry.item.id, entry.quantity - 1)}
                            className="p-1 text-zinc-400 hover:text-white"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-2 text-xs font-mono font-bold text-white tabular-nums">
                            {entry.quantity}
                          </span>
                          <button
                            onClick={() => onUpdateQuantity(entry.item.id, entry.quantity + 1)}
                            className="p-1 text-zinc-400 hover:text-white"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Customer Details Inputs */}
                <div className="pt-4 border-t border-zinc-800 space-y-3">
                  <h4 className="text-xs font-mono uppercase text-zinc-400">Order Information</h4>
                  <input
                    type="text"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    placeholder="Your Name (e.g. Omar)"
                    className="w-full px-3 py-2 bg-zinc-900 border border-zinc-800 rounded-lg text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-[#FFD21F]"
                  />
                  <input
                    type="tel"
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    placeholder="Mobile / WhatsApp Number"
                    className="w-full px-3 py-2 bg-zinc-900 border border-zinc-800 rounded-lg text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-[#FFD21F]"
                  />
                  {orderType === 'delivery' && (
                    <input
                      type="text"
                      value={customerAddress}
                      onChange={(e) => setCustomerAddress(e.target.value)}
                      placeholder="Delivery Address / Building & Flat"
                      className="w-full px-3 py-2 bg-zinc-900 border border-zinc-800 rounded-lg text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-[#FFD21F]"
                    />
                  )}
                  {orderType === 'dinein' && (
                    <input
                      type="text"
                      value={customerAddress}
                      onChange={(e) => setCustomerAddress(e.target.value)}
                      placeholder="Table Number (if seated)"
                      className="w-full px-3 py-2 bg-zinc-900 border border-zinc-800 rounded-lg text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-[#FFD21F]"
                    />
                  )}
                </div>
              </div>
            )}

          </div>

          {/* Drawer Footer with Totals & WhatsApp CTA */}
          {cartItems.length > 0 && (
            <div className="p-5 border-t border-zinc-800 bg-zinc-950 space-y-3">
              <div className="space-y-1.5 text-xs text-zinc-400">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-mono text-white tabular-nums">{RESTAURANT_INFO.currency}{subtotal.toFixed(2)}</span>
                </div>
                {orderType === 'delivery' && (
                  <div className="flex justify-between">
                    <span>Delivery Fee</span>
                    <span className="font-mono text-white tabular-nums">
                      {deliveryFee === 0 ? <span className="text-emerald-400 font-bold">FREE</span> : `${RESTAURANT_INFO.currency}${deliveryFee.toFixed(2)}`}
                    </span>
                  </div>
                )}
                <div className="flex justify-between text-sm font-bold text-white pt-2 border-t border-zinc-800">
                  <span>Estimated Total</span>
                  <span className="font-mono text-[#FFD21F] text-base tabular-nums">{RESTAURANT_INFO.currency}{total.toFixed(2)}</span>
                </div>
              </div>

              {/* Order via WhatsApp */}
              <button
                onClick={handleSendWhatsAppOrder}
                className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-black font-bold text-xs uppercase tracking-wider py-3.5 rounded-xl shadow-lg flex items-center justify-center gap-2 transition-all"
              >
                <span>Send Order via WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              {/* Direct Phone Order Alternative */}
              <div className="flex items-center justify-between pt-1">
                <a
                  href={`tel:${RESTAURANT_INFO.phone}`}
                  className="text-xs text-zinc-400 hover:text-white flex items-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5 text-[#FFD21F]" />
                  <span>Call to Order: {RESTAURANT_INFO.phone}</span>
                </a>
                <button
                  onClick={onClearCart}
                  className="text-[11px] text-zinc-500 hover:text-[#E21B23]"
                >
                  Clear Bag
                </button>
              </div>

              {orderPlacedSuccess && (
                <div className="p-2.5 rounded-lg bg-emerald-950/60 border border-emerald-500/40 text-[11px] text-emerald-300 text-center animate-in fade-in">
                  WhatsApp opened with your items. Send the message to finalize!
                </div>
              )}
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
