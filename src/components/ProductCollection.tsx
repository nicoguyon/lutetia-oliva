import React, { useState } from 'react';
import ProductCard from './ProductCard';
import { Filter, Grid, List } from 'lucide-react';

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

interface ProductCollectionProps {
  onAddToCart: (product: Product) => void;
  onProductClick?: () => void;
}

export default function ProductCollection({ onAddToCart, onProductClick }: ProductCollectionProps) {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [filter, setFilter] = useState<'all' | 'rooftop' | 'limited'>('all');

  const products: Product[] = [
    {
      id: '1',
      name: 'Récolte Rooftop',
      tagline: 'Première pression à froid',
      price: 24,
      volume: '500ml',
      image: '/1.png',
      rating: 4.9,
      reviews: 127,
      badge: '0 km',
      polyphenols: '850 mg/kg'
    },
    {
      id: '5',
      name: 'Acoua Olivbis',
      tagline: 'Alexebasa Virā',
      price: 39,
      volume: '500ml',
      image: '/acoua-olivbis.png',
      rating: 5.0,
      reviews: 12,
      badge: 'Nouveau',
      polyphenols: '950 mg/kg'
    },
    {
      id: '2',
      name: 'Cuvée Hausmann',
      tagline: 'Édition limitée 2024',
      price: 32,
      volume: '250ml',
      image: '/haussmann.png',
      rating: 4.8,
      reviews: 89,
      badge: 'Limitée',
      polyphenols: '920 mg/kg'
    },
    {
      id: '3',
      name: 'Aqua Parisienne',
      tagline: 'Infusion méditerranéenne',
      price: 28,
      volume: '500ml',
      image: '/1.png',
      rating: 4.7,
      reviews: 156,
      polyphenols: '780 mg/kg'
    },
  ];

  const filteredProducts = products.filter(product => {
    if (filter === 'all') return true;
    if (filter === 'rooftop') return product.name.includes('Rooftop');
    if (filter === 'limited') return product.badge === 'Limitée';
    return true;
  });

  return (
    <section id="collection" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#3F4B3A] mb-6">
            Notre Collection
          </h2>
          <p className="text-lg text-[#9BAA8B] max-w-2xl mx-auto">
            Chaque goutte raconte l'histoire des toits parisiens. 
            Découvrez nos huiles d'olive artisanales, pressées à quelques kilomètres de chez vous.
          </p>
        </div>

        {/* Filters & View Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-between mb-12 space-y-4 sm:space-y-0">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === 'all' 
                  ? 'bg-[#C9A76D] text-white' 
                  : 'bg-[#F5F4EB] text-[#3F4B3A] hover:bg-[#C9A76D] hover:text-white'
              }`}
            >
              Tout voir
            </button>
            <button
              onClick={() => setFilter('rooftop')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === 'rooftop' 
                  ? 'bg-[#C9A76D] text-white' 
                  : 'bg-[#F5F4EB] text-[#3F4B3A] hover:bg-[#C9A76D] hover:text-white'
              }`}
            >
              Rooftop
            </button>
            <button
              onClick={() => setFilter('limited')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === 'limited' 
                  ? 'bg-[#C9A76D] text-white' 
                  : 'bg-[#F5F4EB] text-[#3F4B3A] hover:bg-[#C9A76D] hover:text-white'
              }`}
            >
              Éditions limitées
            </button>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-lg transition-all duration-300 ${
                viewMode === 'grid' 
                  ? 'bg-[#C9A76D] text-white' 
                  : 'bg-[#F5F4EB] text-[#3F4B3A] hover:bg-[#C9A76D] hover:text-white'
              }`}
            >
              <Grid className="w-5 h-5" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-lg transition-all duration-300 ${
                viewMode === 'list' 
                  ? 'bg-[#C9A76D] text-white' 
                  : 'bg-[#F5F4EB] text-[#3F4B3A] hover:bg-[#C9A76D] hover:text-white'
              }`}
            >
              <List className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Products Grid */}
        <div className={`grid gap-8 ${
          viewMode === 'grid' 
            ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
            : 'grid-cols-1 lg:grid-cols-2'
        }`}>
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
              onProductClick={onProductClick}
            />
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <button className="group relative px-8 py-4 bg-gradient-to-r from-[#3F4B3A] to-[#9BAA8B] text-white font-semibold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <span className="relative z-10">Voir toute la collection</span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#C9A76D] to-[#B8860B] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>
      </div>
    </section>
  );
}