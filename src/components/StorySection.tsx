import React, { useEffect, useRef, useState } from 'react';
import { MapPin, Clock, Award, Leaf } from 'lucide-react';

export default function StorySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [sliderIndex, setSliderIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const scrollProgress = Math.max(0, Math.min(1, (window.innerHeight - rect.top) / window.innerHeight));
        
        const elements = sectionRef.current.querySelectorAll('.scroll-reveal');
        elements.forEach((element, index) => {
          const delay = index * 0.2;
          const progress = Math.max(0, scrollProgress - delay);
          const opacity = Math.min(1, progress * 2);
          const transform = `translateY(${Math.max(0, 50 - progress * 50)}px)`;
          
          (element as HTMLElement).style.opacity = opacity.toString();
          (element as HTMLElement).style.transform = transform;
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Slider automatique (prêt pour plusieurs images)
  useEffect(() => {
    const interval = setInterval(() => {
      setSliderIndex((prev) => (prev + 1) % 1); // 1 image pour l'instant
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: MapPin,
      title: '0 kilomètre',
      description: 'De nos toits parisiens à votre table en circuit ultra-court'
    },
    {
      icon: Clock,
      title: '< 24 heures',
      description: 'Pressage immédiat après récolte pour préserver tous les arômes'
    },
    {
      icon: Award,
      title: '850 mg/kg',
      description: 'Taux de polyphénols exceptionnel grâce au terroir urbain'
    },
    {
      icon: Leaf,
      title: '100% bio',
      description: 'Agriculture urbaine certifiée sans pesticides ni engrais chimiques'
    }
  ];

  const sliderImages = [
    {
      src: '/Toits.png',
      alt: 'Oliviers sur les toits de Paris'
    }
  ];

  return (
    <section id="story" ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#F5F4EB] to-white">
      <div className="max-w-7xl mx-auto">
        {/* Slider d'image Rooftop */}
        <div className="relative aspect-[16/7] w-full mb-12 rounded-3xl overflow-hidden shadow-xl">
          <img
            src={sliderImages[sliderIndex].src}
            alt={sliderImages[sliderIndex].alt}
            className="w-full h-full object-cover transition-all duration-1000"
            style={{filter: 'brightness(0.85)'}}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
        </div>
        {/* Texte immersif */}
        <div className="text-center mb-16">
          <h2 className="scroll-reveal text-4xl sm:text-5xl lg:text-6xl font-bold text-[#3F4B3A] mb-6 opacity-0">
            Sur les toits de Paris
            <br />
            <span className="bg-gradient-to-r from-[#C9A76D] to-[#B8860B] bg-clip-text text-transparent">
              L'oliveraie urbaine
            </span>
          </h2>
          <p className="scroll-reveal text-lg text-[#9BAA8B] max-w-3xl mx-auto opacity-0">
            Là où le ciel rencontre la ville, des oliviers centenaires s'épanouissent au-dessus de l'agitation parisienne. 
            Sur ces toits baignés de lumière, chaque arbre raconte une histoire de patience, de passion et d'innovation. 
            Ici, la nature reprend ses droits, offrant une huile d'olive d'exception, née au cœur de la capitale.
          </p>
        </div>

        {/* Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Image */}
          <div className="scroll-reveal relative aspect-square lg:aspect-[4/3] overflow-hidden rounded-3xl opacity-0">
            <img 
              src="/1.png" 
              alt="Bouteille Lutetia Oliva"
              className="w-full h-full object-contain bg-gradient-to-br from-[#3F4B3A] to-[#9BAA8B] p-12"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="text-xl font-bold mb-2">Design Art Déco</h3>
              <p className="text-sm opacity-90">Étiquette dorée, bouchon liège FSC</p>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div className="scroll-reveal opacity-0">
              <h3 className="text-3xl font-bold text-[#3F4B3A] mb-4">
                Un design intemporel
              </h3>
              <p className="text-[#9BAA8B] text-lg leading-relaxed">
                Notre logo Art Déco capture l'essence de Paris dans les années 20. 
                Chaque élément a été pensé : le "L" pour Lutetia, les branches d'olivier 
                pour la tradition méditerranéenne, et cette goutte pourpre qui évoque 
                la couleur unique de notre huile parisienne.
              </p>
            </div>

            <div className="scroll-reveal opacity-0">
              <h4 className="text-xl font-semibold text-[#3F4B3A] mb-3">
                L'âme de la marque
              </h4>
              <p className="text-[#9BAA8B] leading-relaxed">
                Ce logo incarne notre vision : marier tradition et modernité, 
                élégance et terroir. Il orne fièrement chacune de nos bouteilles, 
                symbole d'excellence et de raffinement parisien.
              </p>
            </div>

            <div className="scroll-reveal opacity-0">
              <button className="group relative px-6 py-3 bg-[#C9A76D] text-white font-semibold rounded-full overflow-hidden transition-all duration-300 hover:scale-105">
                <span className="relative z-10">Découvrir l'histoire</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#B8860B] to-[#FFD700] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="scroll-reveal text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/20 hover:shadow-lg transition-all duration-300 hover:scale-105 opacity-0">
            <div className="w-16 h-16 bg-gradient-to-br from-[#C9A76D] to-[#B8860B] rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl text-white">🌿</span>
            </div>
            <h4 className="text-xl font-bold text-[#3F4B3A] mb-2">Agriculture urbaine</h4>
            <p className="text-[#9BAA8B] text-sm">Des oliviers cultivés sur les toits, en harmonie avec la ville.</p>
          </div>
          <div className="scroll-reveal text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/20 hover:shadow-lg transition-all duration-300 hover:scale-105 opacity-0">
            <div className="w-16 h-16 bg-gradient-to-br from-[#C9A76D] to-[#B8860B] rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl text-white">☀️</span>
            </div>
            <h4 className="text-xl font-bold text-[#3F4B3A] mb-2">Lumière & terroir</h4>
            <p className="text-[#9BAA8B] text-sm">Un microclimat unique, entre soleil et brise urbaine.</p>
          </div>
          <div className="scroll-reveal text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/20 hover:shadow-lg transition-all duration-300 hover:scale-105 opacity-0">
            <div className="w-16 h-16 bg-gradient-to-br from-[#C9A76D] to-[#B8860B] rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl text-white">🏙️</span>
            </div>
            <h4 className="text-xl font-bold text-[#3F4B3A] mb-2">Vue panoramique</h4>
            <p className="text-[#9BAA8B] text-sm">Des oliviers avec vue sur la Tour Eiffel et les toits de Paris.</p>
          </div>
          <div className="scroll-reveal text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/20 hover:shadow-lg transition-all duration-300 hover:scale-105 opacity-0">
            <div className="w-16 h-16 bg-gradient-to-br from-[#C9A76D] to-[#B8860B] rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl text-white">💧</span>
            </div>
            <h4 className="text-xl font-bold text-[#3F4B3A] mb-2">Pureté & fraîcheur</h4>
            <p className="text-[#9BAA8B] text-sm">Une huile pressée sur place, d'une fraîcheur inégalée.</p>
          </div>
        </div>
      </div>
    </section>
  );
}