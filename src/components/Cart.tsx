import React from 'react';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { loadStripe } from '@stripe/stripe-js';

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  volume: string;
}

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, quantity: number) => void;
  onRemoveItem: (id: string) => void;
}

export default function Cart({ isOpen, onClose, items, onUpdateQuantity, onRemoveItem }: CartProps) {
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  const handleCheckout = async () => {
    const stripe = await loadStripe('pk_test_51RhJ3SDaaNfDCITY85nD8En5FQHmKAomOVkVgmTNwKwC7KD8P3IcvZN5Sw9kZSmq5iYvJBL1Wfe0xO0Ng9MRT6YR00FjumhfTP');
    const response = await fetch('http://localhost:4242/create-checkout-session', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ cartItems: items })
    });
    const data = await response.json();
    if (data.url) {
      window.location.href = data.url;
    }
  };

  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-50 transition-all duration-300 ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={onClose}
      />

      {/* Cart Panel */}
      <div 
        className={`fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl z-50 transform transition-all duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <div className="flex items-center space-x-2">
              <ShoppingBag className="w-5 h-5 text-[#C9A76D]" />
              <h2 className="text-xl font-bold text-[#3F4B3A]">
                Votre sélection ({itemCount})
              </h2>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
            >
              <X className="w-5 h-5 text-[#9BAA8B]" />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {items.length === 0 ? (
              <div className="text-center py-12">
                <ShoppingBag className="w-12 h-12 text-[#9BAA8B] mx-auto mb-4" />
                <p className="text-[#9BAA8B]">Votre panier est vide</p>
                <p className="text-sm text-[#9BAA8B] mt-2">
                  Ajoutez nos huiles d'olive artisanales
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {items.map((item) => (
                  <div key={item.id} className="flex items-center space-x-4 p-4 bg-[#F5F4EB] rounded-xl">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h4 className="font-semibold text-[#3F4B3A]">{item.name}</h4>
                      <p className="text-sm text-[#9BAA8B]">{item.volume}</p>
                      <p className="text-sm font-medium text-[#C9A76D]">{item.price}€</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => onUpdateQuantity(item.id, Math.max(0, item.quantity - 1))}
                        className="w-8 h-8 bg-white hover:bg-[#C9A76D] hover:text-white rounded-full flex items-center justify-center transition-colors duration-200"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="w-8 text-center font-medium">{item.quantity}</span>
                      <button
                        onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                        className="w-8 h-8 bg-white hover:bg-[#C9A76D] hover:text-white rounded-full flex items-center justify-center transition-colors duration-200"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="border-t border-gray-200 p-6 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-lg font-semibold text-[#3F4B3A]">Total</span>
                <span className="text-2xl font-bold text-[#C9A76D]">{total.toFixed(2)}€</span>
              </div>
              <button 
                className="w-full py-4 bg-gradient-to-r from-[#C9A76D] to-[#B8860B] text-white font-semibold rounded-full hover:scale-105 transition-transform duration-200"
                onClick={handleCheckout}
              >
                Procéder au paiement
              </button>
              <p className="text-xs text-[#9BAA8B] text-center">
                Livraison gratuite dès 50€ d'achat
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}