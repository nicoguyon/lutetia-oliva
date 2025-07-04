import React, { useState } from 'react';
import { Plus, Star, MapPin } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  tagline: string;
  price: number;
  volume: string;
  image: string;
  rating: number;
  reviews: number;
  badge?: string;
  polyphenols: string;
}

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  onProductClick?: () => void;
}

export default function ProductCard({ product, onAddToCart, onProductClick }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <article 
      className="group relative bg-white/60 backdrop-blur-sm rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-white/20"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onProductClick}
    >
      {/* Product Image */}
      <div className="relative aspect-square overflow-hidden cursor-pointer">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-contain bg-gradient-to-br from-[#F5F4EB] to-white p-8 transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Hover Shine Effect */}
        <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 transition-transform duration-700 ${
          isHovered ? 'translate-x-full' : '-translate-x-full'
        }`}></div>

        {/* Quick Add Button */}
        <button 
          onClick={() => onAddToCart(product)}
          className={`absolute top-4 right-4 w-12 h-12 bg-[#C9A76D] hover:bg-[#B8860B] text-white rounded-full flex items-center justify-center transition-all duration-300 transform ${
            isHovered ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
          } hover:scale-110 shadow-lg hover:shadow-xl z-10`}
          onClick={(e) => {
            e.stopPropagation();
            onAddToCart(product);
          }}
        >
          <Plus className="w-5 h-5" />
        </button>

        {/* Badge */}
        {product.badge && (
          <div className="absolute top-4 left-4 px-3 py-1 bg-[#D100FF] text-white text-xs font-bold rounded-full">
            {product.badge}
          </div>
        )}

        {/* Location Badge */}
        <div className="absolute bottom-4 left-4 flex items-center space-x-1 px-2 py-1 bg-black/50 backdrop-blur-sm text-white text-xs rounded-full">
          <MapPin className="w-3 h-3" />
          <span>Paris</span>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xl font-bold text-[#3F4B3A] group-hover:text-[#C9A76D] transition-colors duration-300">
            {product.name}
          </h3>
          <div className="flex items-center space-x-1">
            <Star className="w-4 h-4 fill-[#FFD700] text-[#FFD700]" />
            <span className="text-sm text-[#9BAA8B]">{product.rating}</span>
          </div>
        </div>

        <p className="text-[#9BAA8B] text-sm mb-3">{product.tagline}</p>
        
        <div className="flex items-center space-x-2 mb-4">
          <span className="px-2 py-1 bg-[#9BAA8B]/10 text-[#3F4B3A] text-xs rounded-full font-medium">
            {product.polyphenols}
          </span>
          <span className="text-[#9BAA8B] text-xs">polyphénols</span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-baseline space-x-2">
            <span className="text-2xl font-bold text-[#3F4B3A]">{product.price}€</span>
            <span className="text-sm text-[#9BAA8B]">{product.volume}</span>
          </div>
          <button 
            onClick={(e) => {
              e.stopPropagation();
              onAddToCart(product);
            }}
            className="px-4 py-2 bg-[#F5F4EB] hover:bg-[#C9A76D] text-[#3F4B3A] hover:text-white font-medium rounded-full transition-all duration-300 hover:scale-105"
          >
            Ajouter
          </button>
        </div>
      </div>

      {/* Glassmorphism overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
    </article>
  );
}