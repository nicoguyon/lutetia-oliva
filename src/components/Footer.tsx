import React from 'react';
import { Droplet, MapPin, Phone, Mail, Instagram, Facebook, Youtube } from 'lucide-react';

export default function Footer() {
  const links = {
    company: [
      { name: 'Notre histoire', href: '#story' },
      { name: 'Le rooftop', href: '#rooftop' },
      { name: 'Presse', href: '#press' },
      { name: 'Carrières', href: '#careers' }
    ],
    products: [
      { name: 'Collection', href: '#collection' },
      { name: 'Éditions limitées', href: '#limited' },
      { name: 'Coffrets cadeaux', href: '#gifts' },
      { name: 'Professionnels', href: '#pro' }
    ],
    support: [
      { name: 'Contact', href: '#contact' },
      { name: 'Livraison', href: '#shipping' },
      { name: 'Retours', href: '#returns' },
      { name: 'FAQ', href: '#faq' }
    ]
  };

  return (
    <footer className="bg-[#3F4B3A] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <img 
                  src="/logo-lutetia.png" 
                  alt="Lutetia Oliva Logo"
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h3 className="text-lg font-bold">Lutetia Oliva</h3>
                  <p className="text-sm text-[#9BAA8B]">Récolte Parisienne</p>
                </div>
              </div>
              <p className="text-[#9BAA8B] text-sm leading-relaxed">
                L'huile d'olive au design Art Déco qui coule comme la lumière, 
                depuis les toits de Paris jusqu'à votre table.
              </p>
              <div className="flex space-x-3">
                <a href="#" className="w-8 h-8 bg-white/10 hover:bg-[#C9A76D] rounded-full flex items-center justify-center transition-colors duration-200">
                  <Instagram className="w-4 h-4" />
                </a>
                <a href="#" className="w-8 h-8 bg-white/10 hover:bg-[#C9A76D] rounded-full flex items-center justify-center transition-colors duration-200">
                  <Facebook className="w-4 h-4" />
                </a>
                <a href="#" className="w-8 h-8 bg-white/10 hover:bg-[#C9A76D] rounded-full flex items-center justify-center transition-colors duration-200">
                  <Youtube className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Entreprise</h4>
              <ul className="space-y-2">
                {links.company.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-[#9BAA8B] hover:text-white transition-colors duration-200">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Products */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Produits</h4>
              <ul className="space-y-2">
                {links.products.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-[#9BAA8B] hover:text-white transition-colors duration-200">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Support</h4>
              <ul className="space-y-2">
                {links.support.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-[#9BAA8B] hover:text-white transition-colors duration-200">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Info */}
          <div className="mt-12 pt-8 border-t border-white/10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-[#C9A76D]" />
                <div>
                  <p className="font-medium">Rooftop Porte de Versailles</p>
                  <p className="text-sm text-[#9BAA8B]">75015 Paris, France</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#C9A76D]" />
                <div>
                  <p className="font-medium">+33 1 23 45 67 89</p>
                  <p className="text-sm text-[#9BAA8B]">Lun-Ven 9h-18h</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#C9A76D]" />
                <div>
                  <p className="font-medium">bonjour@lutetiaoliva.com</p>
                  <p className="text-sm text-[#9BAA8B]">Réponse sous 24h</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-sm text-[#9BAA8B]">
              © 2024 Lutetia Oliva. Tous droits réservés.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-sm text-[#9BAA8B] hover:text-white transition-colors duration-200">
                Mentions légales
              </a>
              <a href="#" className="text-sm text-[#9BAA8B] hover:text-white transition-colors duration-200">
                Confidentialité
              </a>
              <a href="#" className="text-sm text-[#9BAA8B] hover:text-white transition-colors duration-200">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}