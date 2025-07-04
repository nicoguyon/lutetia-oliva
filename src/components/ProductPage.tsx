import React, { useState, useRef, useEffect } from 'react';
import { X, Star, MapPin, Clock, Award, Leaf, ChevronLeft, ChevronRight, Plus, Minus, Heart, Share2, Shield, Truck, RotateCcw, Info } from 'lucide-react';

interface ProductPageProps {
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (product: any) => void;
}

interface ProductImage {
  id: string;
  src: string;
  alt: string;
  type: 'product' | 'lifestyle' | 'detail';
}

export default function ProductPage({ isOpen, onClose, onAddToCart }: ProductPageProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('500ml');
  const [activeTab, setActiveTab] = useState('description');
  const galleryRef = useRef<HTMLDivElement>(null);

  // Utilisation des nouvelles images
  const productImages: ProductImage[] = [
    {
      id: '1',
      src: '/1.png',
      alt: 'Bouteille Lutetia Oliva - Vue principale',
      type: 'product'
    },
    {
      id: '2',
      src: '/ef480767ef1ece37df058bba2a5c721eaa92b11ceb4ca7d608715d9a72f56b37.png',
      alt: 'Huile d\'olive coulant sur pain artisanal',
      type: 'lifestyle'
    },
    {
      id: '3',
      src: '/26c3ce945a9863f3ebf8ed5f08c9f3c2fe4463e5b1ff46b47f83ac089561d842.png',
      alt: 'Bouteille avec Tour Eiffel au coucher du soleil',
      type: 'lifestyle'
    },
    {
      id: '4',
      src: '/9f4a4306bacba10fbd63bcf639855adb5a78790584ade7949aa1d3b657f905e8.png',
      alt: 'Collection de bouteilles sur étagère en bois',
      type: 'product'
    },
    {
      id: '5',
      src: '/nico16184_dark-green_matte_glass_olive_oil_bottle_Lutetia_Oliva_41bb75ab-9467-4819-9ebd-8b5d521748a6.webp',
      alt: 'Bouteille sur balcon parisien avec herbes fraîches',
      type: 'lifestyle'
    }
  ];

  const product = {
    id: 'lutetia-rooftop',
    name: 'Lutetia Oliva',
    tagline: 'Récolte Rooftop - Première Pression',
    price: 24,
    originalPrice: 32,
    volumes: ['250ml', '500ml', '750ml'],
    rating: 4.9,
    reviews: 127,
    inStock: true,
    badge: '0 km',
    polyphenols: '850 mg/kg',
    harvest: 'Octobre 2024',
    pressing: '< 24h après récolte',
    certification: 'Bio, Vegan',
    description: "L'huile d'olive qui coule comme la lumière, depuis les toits de Paris jusqu'à votre table. Récoltée sur notre rooftop de 2,500 m² à la Porte de Versailles, chaque goutte porte l'empreinte unique de notre terroir urbain parisien.",
    tastingNotes: [
      "Notes d'herbe fraîche et de pierre chaude",
      "Finale légèrement fumée signature de Paris",
      "Texture soyeuse et dorée",
      "Arômes complexes du terroir urbain"
    ],
    pairings: [
      "Pain artisanal grillé",
      "Burrata crémeuse",
      "Légumes grillés",
      "Poissons nobles"
    ]
  };

  const reviews = [
    {
      id: 1,
      name: "Marie C.",
      location: "Paris 16e",
      rating: 5,
      comment: "Une huile d'exception ! Le design Art Déco est sublime et le goût unique avec cette note fumée parisienne.",
      date: "Il y a 2 jours",
      verified: true
    },
    {
      id: 2,
      name: "Antoine M.",
      location: "Neuilly",
      rating: 5,
      comment: "Incroyable de penser que cette huile vient des toits de Paris. Le taux de polyphénols est impressionnant.",
      date: "Il y a 1 semaine",
      verified: true
    },
    {
      id: 3,
      name: "Sophie L.",
      location: "Boulogne",
      rating: 4,
      comment: "Packaging magnifique, parfait pour offrir. L'huile a un goût vraiment distinctif.",
      date: "Il y a 2 semaines",
      verified: true
    }
  ];

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % productImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + productImages.length) % productImages.length);
  };

  const handleAddToCart = () => {
    onAddToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      volume: selectedSize,
      image: productImages[0].src,
      quantity: quantity
    });
  };

  const getPriceBySize = (size: string) => {
    switch (size) {
      case '250ml': return 18;
      case '500ml': return 24;
      case '750ml': return 36;
      default: return 24;
    }
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 transition-all duration-500"
        onClick={onClose}
      />

      {/* Product Page */}
      <div className="fixed inset-0 z-50 overflow-hidden">
        <div className="h-full overflow-y-auto">
          <div className="min-h-full bg-[#F5F4EB] pt-16">
            {/* Header */}
            <div className="sticky top-0 bg-white/80 backdrop-blur-xl border-b border-white/20 z-40">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                  <button
                    onClick={onClose}
                    className="flex items-center space-x-2 text-[#3F4B3A] hover:text-[#C9A76D] transition-colors duration-200"
                  >
                    <ChevronLeft className="w-5 h-5" />
                    <span className="font-medium">Retour</span>
                  </button>
                  
                  <div className="flex items-center space-x-4">
                    <button className="p-2 text-[#3F4B3A] hover:text-[#D100FF] transition-colors duration-200">
                      <Heart className="w-5 h-5" />
                    </button>
                    <button className="p-2 text-[#3F4B3A] hover:text-[#C9A76D] transition-colors duration-200">
                      <Share2 className="w-5 h-5" />
                    </button>
                    <button
                      onClick={onClose}
                      className="p-2 text-[#3F4B3A] hover:text-[#C9A76D] transition-colors duration-200"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Gallery Section */}
                <div className="space-y-6">
                  {/* Main Image */}
                  <div className="relative aspect-square bg-white/60 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/20 group">
                    <img
                      src={productImages[currentImageIndex].src}
                      alt={productImages[currentImageIndex].alt}
                      className="w-full h-full object-contain p-8 transition-transform duration-700 group-hover:scale-105"
                    />
                    
                    {/* Navigation Arrows */}
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white text-[#3F4B3A] rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white text-[#3F4B3A] rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>

                    {/* Image Counter */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-3 py-1 bg-black/50 backdrop-blur-sm text-white text-sm rounded-full">
                      {currentImageIndex + 1} / {productImages.length}
                    </div>
                  </div>

                  {/* Thumbnail Gallery */}
                  <div className="grid grid-cols-5 gap-3" ref={galleryRef}>
                    {productImages.map((image, index) => (
                      <button
                        key={image.id}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`aspect-square rounded-xl overflow-hidden border-2 transition-all duration-200 ${
                          index === currentImageIndex
                            ? 'border-[#C9A76D] ring-2 ring-[#C9A76D]/20'
                            : 'border-white/20 hover:border-[#C9A76D]/50'
                        }`}
                      >
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="w-full h-full object-contain bg-white/40 p-2"
                        />
                      </button>
                    ))}
                  </div>
                </div>

                {/* Product Info Section */}
                <div className="space-y-8">
                  {/* Header */}
                  <div>
                    <div className="flex items-center space-x-2 mb-3">
                      <span className="px-3 py-1 bg-[#C9A76D] text-white text-sm font-bold rounded-full">
                        {product.badge}
                      </span>
                      <span className="px-3 py-1 bg-[#9BAA8B]/20 text-[#3F4B3A] text-sm rounded-full">
                        {product.certification}
                      </span>
                    </div>
                    
                    <h1 className="text-4xl font-bold text-[#3F4B3A] mb-2">
                      {product.name}
                    </h1>
                    <p className="text-lg text-[#9BAA8B] mb-4">{product.tagline}</p>
                    
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="flex items-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(product.rating) 
                                ? 'fill-[#FFD700] text-[#FFD700]' 
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                        <span className="text-sm text-[#9BAA8B] ml-2">
                          {product.rating} ({product.reviews} avis)
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Key Features */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center space-x-3 p-4 bg-white/40 rounded-xl">
                      <Award className="w-6 h-6 text-[#C9A76D]" />
                      <div>
                        <p className="font-semibold text-[#3F4B3A]">{product.polyphenols}</p>
                        <p className="text-sm text-[#9BAA8B]">Polyphénols</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 p-4 bg-white/40 rounded-xl">
                      <Clock className="w-6 h-6 text-[#C9A76D]" />
                      <div>
                        <p className="font-semibold text-[#3F4B3A]">{product.pressing}</p>
                        <p className="text-sm text-[#9BAA8B]">Pressage</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 p-4 bg-white/40 rounded-xl">
                      <MapPin className="w-6 h-6 text-[#C9A76D]" />
                      <div>
                        <p className="font-semibold text-[#3F4B3A]">Paris 15e</p>
                        <p className="text-sm text-[#9BAA8B]">Rooftop</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 p-4 bg-white/40 rounded-xl">
                      <Leaf className="w-6 h-6 text-[#C9A76D]" />
                      <div>
                        <p className="font-semibold text-[#3F4B3A]">{product.harvest}</p>
                        <p className="text-sm text-[#9BAA8B]">Récolte</p>
                      </div>
                    </div>
                  </div>

                  {/* Size Selection */}
                  <div>
                    <h3 className="text-lg font-semibold text-[#3F4B3A] mb-3">Format</h3>
                    <div className="grid grid-cols-3 gap-3">
                      {product.volumes.map((volume) => (
                        <button
                          key={volume}
                          onClick={() => setSelectedSize(volume)}
                          className={`p-3 border-2 rounded-xl text-center transition-all duration-200 ${
                            selectedSize === volume
                              ? 'border-[#C9A76D] bg-[#C9A76D]/10 text-[#C9A76D]'
                              : 'border-white/20 bg-white/20 text-[#3F4B3A] hover:border-[#C9A76D]/50'
                          }`}
                        >
                          <div className="font-semibold">{volume}</div>
                          <div className="text-sm opacity-70">{getPriceBySize(volume)}€</div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Price & Quantity */}
                  <div className="flex items-center justify-between p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/20">
                    <div>
                      <div className="flex items-baseline space-x-3">
                        <span className="text-3xl font-bold text-[#3F4B3A]">
                          {getPriceBySize(selectedSize)}€
                        </span>
                        {getPriceBySize(selectedSize) < product.originalPrice && (
                          <span className="text-lg text-[#9BAA8B] line-through">
                            {product.originalPrice}€
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-[#9BAA8B]">
                        Livraison gratuite dès 50€
                      </p>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => setQuantity(Math.max(1, quantity - 1))}
                          className="w-8 h-8 bg-white hover:bg-[#C9A76D] hover:text-white rounded-full flex items-center justify-center transition-colors duration-200"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="w-8 text-center font-medium">{quantity}</span>
                        <button
                          onClick={() => setQuantity(quantity + 1)}
                          className="w-8 h-8 bg-white hover:bg-[#C9A76D] hover:text-white rounded-full flex items-center justify-center transition-colors duration-200"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Add to Cart */}
                  <div className="space-y-3">
                    <button
                      onClick={handleAddToCart}
                      className="w-full py-4 bg-gradient-to-r from-[#C9A76D] to-[#B8860B] text-white font-semibold rounded-full hover:scale-105 transition-transform duration-200 hover:shadow-2xl"
                    >
                      Ajouter au panier - {(getPriceBySize(selectedSize) * quantity).toFixed(2)}€
                    </button>
                    
                    <div className="grid grid-cols-3 gap-3 text-sm">
                      <div className="flex items-center justify-center space-x-1 text-[#9BAA8B]">
                        <Shield className="w-4 h-4" />
                        <span>Paiement sécurisé</span>
                      </div>
                      <div className="flex items-center justify-center space-x-1 text-[#9BAA8B]">
                        <Truck className="w-4 h-4" />
                        <span>Livraison 24h</span>
                      </div>
                      <div className="flex items-center justify-center space-x-1 text-[#9BAA8B]">
                        <RotateCcw className="w-4 h-4" />
                        <span>Retour gratuit</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Product Details Tabs */}
              <div className="mt-16">
                <div className="border-b border-[#9BAA8B]/20">
                  <nav className="flex space-x-8">
                    {['description', 'degustation', 'avis'].map((tab) => (
                      <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`py-4 px-2 border-b-2 font-medium text-sm transition-colors duration-200 ${
                          activeTab === tab
                            ? 'border-[#C9A76D] text-[#C9A76D]'
                            : 'border-transparent text-[#9BAA8B] hover:text-[#3F4B3A]'
                        }`}
                      >
                        {tab === 'description' && 'Description'}
                        {tab === 'degustation' && 'Dégustation'}
                        {tab === 'avis' && `Avis (${product.reviews})`}
                      </button>
                    ))}
                  </nav>
                </div>

                <div className="py-8">
                  {activeTab === 'description' && (
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      <div>
                        <h3 className="text-2xl font-bold text-[#3F4B3A] mb-4">
                          L'histoire de notre huile
                        </h3>
                        <p className="text-[#9BAA8B] leading-relaxed mb-6">
                          {product.description}
                        </p>
                        <p className="text-[#9BAA8B] leading-relaxed">
                          Comme les aqueducs romains qui alimentaient Lutèce, notre huile coule 
                          des hauteurs parisiennes vers vos cuisines. Chaque bouteille porte 
                          l'empreinte unique de notre terroir urbain avec ses notes de pierre 
                          chaude et sa finale légèrement fumée.
                        </p>
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold text-[#3F4B3A] mb-4">
                          Notes de dégustation
                        </h4>
                        <ul className="space-y-2">
                          {product.tastingNotes.map((note, index) => (
                            <li key={index} className="flex items-center space-x-2 text-[#9BAA8B]">
                              <div className="w-2 h-2 bg-[#C9A76D] rounded-full"></div>
                              <span>{note}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}

                  {activeTab === 'degustation' && (
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      <div>
                        <h3 className="text-2xl font-bold text-[#3F4B3A] mb-4">
                          Accords parfaits
                        </h3>
                        <div className="grid grid-cols-2 gap-4">
                          {product.pairings.map((pairing, index) => (
                            <div key={index} className="p-4 bg-white/40 rounded-xl text-center">
                              <p className="font-medium text-[#3F4B3A]">{pairing}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold text-[#3F4B3A] mb-4">
                          Conseils de dégustation
                        </h4>
                        <div className="space-y-4">
                          <div className="flex items-start space-x-3">
                            <Info className="w-5 h-5 text-[#C9A76D] mt-0.5" />
                            <div>
                              <p className="font-medium text-[#3F4B3A]">Température idéale</p>
                              <p className="text-sm text-[#9BAA8B]">18-20°C pour révéler tous les arômes</p>
                            </div>
                          </div>
                          <div className="flex items-start space-x-3">
                            <Info className="w-5 h-5 text-[#C9A76D] mt-0.5" />
                            <div>
                              <p className="font-medium text-[#3F4B3A]">Conservation</p>
                              <p className="text-sm text-[#9BAA8B]">À l'abri de la lumière, 18 mois après ouverture</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === 'avis' && (
                    <div className="space-y-6">
                      {reviews.map((review) => (
                        <div key={review.id} className="p-6 bg-white/40 rounded-xl">
                          <div className="flex items-start justify-between mb-3">
                            <div>
                              <div className="flex items-center space-x-2">
                                <p className="font-semibold text-[#3F4B3A]">{review.name}</p>
                                {review.verified && (
                                  <span className="px-2 py-1 bg-[#C9A76D] text-white text-xs rounded-full">
                                    Vérifié
                                  </span>
                                )}
                              </div>
                              <p className="text-sm text-[#9BAA8B]">{review.location} • {review.date}</p>
                            </div>
                            <div className="flex items-center space-x-1">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`w-4 h-4 ${
                                    i < review.rating 
                                      ? 'fill-[#FFD700] text-[#FFD700]' 
                                      : 'text-gray-300'
                                  }`}
                                />
                              ))}
                            </div>
                          </div>
                          <p className="text-[#3F4B3A]">{review.comment}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}