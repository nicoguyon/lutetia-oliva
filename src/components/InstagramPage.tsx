import React from 'react';
import Navigation from './Navigation';
import Footer from './Footer';

// Exemple de données (à remplacer par vos vraies URLs)
const instagramMedia = [
  { type: 'video', src: '/influencer1.mp4', alt: 'Vidéo Influenceur Lutetia Oliva 1' },
  { type: 'image', src: '/influencer3.jpg', alt: 'Influenceurs Lutetia Oliva 3' },
  { type: 'image', src: '/influencer4.jpg', alt: 'Influenceuse Lutetia Oliva 4' },
  { type: 'video', src: '/influencer2.mp4', alt: 'Vidéo Influenceur Lutetia Oliva' },
  { type: 'video', src: '/Simulation.mp4', alt: 'Vidéo Simulation Influenceur Lutetia Oliva' },
  { type: 'image', src: '/Party.png', alt: 'Photo soirée Lutetia Oliva' },
  { type: 'image', src: '/Cartoon.png', alt: 'Illustration cartoon Lutetia Oliva' },
  // Ajoutez ici vos autres médias
];

export default function InstagramPage() {
  return (
    <div className="min-h-screen bg-[#F5F4EB]">
      <Navigation cartCount={0} onCartClick={() => {}} />
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#3F4B3A] mb-4">Ils parlent de nous</h1>
          <p className="text-lg text-[#9BAA8B] max-w-2xl mx-auto">
            Découvrez les photos et stories Instagram de nos ambassadeurs et influenceurs. Merci pour votre soutien et vos partages !
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {instagramMedia.map((media, idx) => (
            <div key={idx} className="aspect-[9/16] bg-white rounded-3xl shadow-2xl overflow-hidden flex items-center justify-center mx-auto max-w-xs sm:max-w-sm md:max-w-md" style={{maxWidth: 400}}>
              {media.type === 'image' ? (
                <img src={media.src} alt={media.alt} className="w-full h-full object-cover" style={{maxWidth: '100%', maxHeight: '100%'}} />
              ) : (
                <video src={media.src} controls className="w-full h-full object-cover" style={{maxWidth: '100%', maxHeight: '100%'}} />
              )}
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
} 