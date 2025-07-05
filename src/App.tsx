import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import ProductCollection from './components/ProductCollection';
import StorySection from './components/StorySection';
import TraceabilitySection from './components/TraceabilitySection';
import Cart from './components/Cart';
import Footer from './components/Footer';
import ProductPage from './components/ProductPage';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import HistoirePage from './components/HistoirePage';

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  volume: string;
}

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

// Scroll automatique vers l'ancre si présente dans l'URL
function ScrollToHash() {
  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100); // petit délai pour que le DOM soit prêt
      }
    }
  }, [location]);
  return null;
}

function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isProductPageOpen, setIsProductPageOpen] = useState(false);

  const handleAddToCart = (product: Product) => {
    setCartItems(prev => {
      const existingItem = prev.find(item => item.id === product.id);
      if (existingItem) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, {
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: 1,
        image: product.image,
        volume: product.volume
      }];
    });
  };

  const handleUpdateQuantity = (id: string, quantity: number) => {
    if (quantity === 0) {
      setCartItems(prev => prev.filter(item => item.id !== id));
    } else {
      setCartItems(prev =>
        prev.map(item =>
          item.id === id ? { ...item, quantity } : item
        )
      );
    }
  };

  const handleRemoveItem = (id: string) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const handleProductClick = () => {
    setIsProductPageOpen(true);
  };

  return (
    <BrowserRouter>
      <ScrollToHash />
      <Routes>
        <Route path="/" element={
          <div className="min-h-screen bg-[#F5F4EB]">
            <Navigation 
              cartCount={cartCount} 
              onCartClick={() => setIsCartOpen(true)} 
            />
            <Hero />
            <ProductCollection 
              onAddToCart={handleAddToCart} 
              onProductClick={handleProductClick}
            />
            <StorySection />
            <TraceabilitySection />
            <Footer />
            <Cart
              isOpen={isCartOpen}
              onClose={() => setIsCartOpen(false)}
              items={cartItems}
              onUpdateQuantity={handleUpdateQuantity}
              onRemoveItem={handleRemoveItem}
            />
            <ProductPage
              isOpen={isProductPageOpen}
              onClose={() => setIsProductPageOpen(false)}
              onAddToCart={handleAddToCart}
            />
          </div>
        } />
        <Route path="/histoire" element={<HistoirePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;