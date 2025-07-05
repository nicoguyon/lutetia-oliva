import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Droplet, Building, Fingerprint, Book, ShoppingBag } from 'lucide-react';

interface NavigationProps {
  cartCount: number;
  onCartClick: () => void;
}

export default function Navigation({ cartCount, onCartClick }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Collection', href: '/#collection', icon: Droplet, isExternal: true },
    { label: 'Rooftop', href: '/#story', icon: Building, isExternal: true },
    { label: 'Traçabilité', href: '/#trace', icon: Fingerprint, isExternal: true },
    { label: 'Histoire', href: '/histoire', icon: Book, isExternal: false },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/80 backdrop-blur-xl border-b border-white/20 shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="relative group cursor-pointer block">
              <img 
                src="/logo-lutetia.png" 
                alt="Lutetia Oliva Logo"
                className="w-12 h-12 rounded-full transition-all duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 w-10 h-10 rounded-full bg-gradient-to-br from-[#C9A76D] to-[#B8860B] opacity-0 group-hover:opacity-20 blur-xl transition-all duration-300"></div>
            </a>
            <div className="ml-3 hidden sm:block">
              <h1 className="text-lg font-bold text-[#3F4B3A]">Lutetia Oliva</h1>
              <p className="text-xs text-[#9BAA8B] -mt-1">Récolte Parisienne</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              item.isExternal ? (
                <Link
                  key={item.label}
                  to={item.href}
                  className="group relative flex items-center space-x-2 text-sm font-medium text-[#3F4B3A] hover:text-[#C9A76D] transition-colors duration-300"
                >
                  <item.icon className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
                  <span>{item.label}</span>
                  <div className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-[#C9A76D] to-[#B8860B] transition-all duration-300 group-hover:w-full"></div>
                </Link>
              ) : (
                <Link
                  key={item.label}
                  to={item.href}
                  className="group relative flex items-center space-x-2 text-sm font-medium text-[#3F4B3A] hover:text-[#C9A76D] transition-colors duration-300"
                >
                  <item.icon className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
                  <span>{item.label}</span>
                  <div className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-[#C9A76D] to-[#B8860B] transition-all duration-300 group-hover:w-full"></div>
                </Link>
              )
            ))}
          </div>

          {/* Cart & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <button
              onClick={onCartClick}
              className="relative group p-2 rounded-full bg-[#F5F4EB] hover:bg-[#C9A76D] transition-all duration-300 hover:scale-110"
            >
              <ShoppingBag className="w-5 h-5 text-[#3F4B3A] group-hover:text-white" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#D100FF] text-white text-xs rounded-full flex items-center justify-center font-bold">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-full bg-[#F5F4EB] hover:bg-[#C9A76D] transition-all duration-300"
            >
              {isMenuOpen ? (
                <X className="w-5 h-5 text-[#3F4B3A]" />
              ) : (
                <Menu className="w-5 h-5 text-[#3F4B3A]" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden fixed inset-0 bg-white/95 backdrop-blur-xl z-40 transition-all duration-500 ${
        isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}>
        <div className="flex flex-col justify-center items-center h-full space-y-8">
          {navItems.map((item, index) => (
            <Link
              key={item.label}
              to={item.href}
              onClick={() => setIsMenuOpen(false)}
              className="group flex items-center space-x-4 text-2xl font-medium text-[#3F4B3A] hover:text-[#C9A76D] transition-all duration-300"
              style={{
                animation: isMenuOpen ? `slideInUp 0.6s ease-out ${index * 0.1}s both` : 'none'
              }}
            >
              <item.icon className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
              <span>{item.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}