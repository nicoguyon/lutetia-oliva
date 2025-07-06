import React, { useEffect, useRef, useState } from 'react';
import { MapPin, Clock, Award, Leaf, ChevronLeft, ChevronRight } from 'lucide-react';

export default function StorySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [sliderIndex, setSliderIndex] = useState(0);
  const [designSliderIndex, setDesignSliderIndex] = useState(0);

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

  // Slider automatique pour le design
  useEffect(() => {
    const interval = setInterval(() => {
      setDesignSliderIndex((prev) => (prev + 1) % designSliderImages.length);
    }, 5000);
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

  const designSliderImages = [
    {
      src: '/11.png',
      alt: 'Bouteille Lutetia Oliva sur pont, Tour Eiffel',
      title: "Paris, source d'inspiration",
      description: "Une huile née au cœur de la Ville Lumière, symbole de prestige."
    },
    {
      src: '/12.png',
      alt: 'Chef devant le Louvre avec bouteille Lutetia Oliva',
      title: "Excellence gastronomique",
      description: "L'huile Lutetia Oliva, choisie par les chefs parisiens pour sublimer la haute cuisine."
    },
    {
      src: '/13.png',
      alt: 'Bouteille et chef, salade tomates/mozza',
      title: "Saveurs authentiques",
      description: "La pureté de notre huile rehausse les produits frais de saison."
    },
    {
      src: '/14.png',
      alt: 'Couple élégant, terrasse Lutetia',
      title: "Élégance à la parisienne",
      description: "Un art de vivre raffiné, où chaque repas devient une célébration."
    },
    {
      src: '/15.png',
      alt: 'Couple chic, restaurant doré',
      title: "Moments d'exception",
      description: "Partagez l'excellence Lutetia Oliva dans les plus belles adresses de Paris."
    },
    {
      src: '/16.png',
      alt: 'Couple terrasse, ambiance lumineuse',
      title: "Instants précieux",
      description: "Lutetia Oliva accompagne vos plus beaux souvenirs parisiens."
    },
    {
      src: '/17.png',
      alt: 'Couple doré, ambiance rooftop',
      title: "L'amour du goût",
      description: "Quand la passion rencontre la tradition sur les toits de Paris."
    },
    {
      src: '/18.png',
      alt: 'Oliviers illuminés, Paris nuit',
      title: "L'oliveraie urbaine",
      description: "Un écrin de nature au sommet de la capitale, illuminé à la tombée de la nuit."
    },
    {
      src: '/19.png',
      alt: 'Oliviers, Paris au lever du soleil',
      title: "Aube sur Lutetia",
      description: "La magie d'un nouveau jour sur les oliviers parisiens."
    },
    {
      src: '/20.png',
      alt: 'Ambiance mode Place Vendôme',
      title: "Icône parisienne",
      description: "L'audace et le style, l'esprit Lutetia Oliva au cœur de Paris."
    }
  ];

  const nextSlide = () => {
    setDesignSliderIndex((prev) => (prev + 1) % designSliderImages.length);
  };

  const prevSlide = () => {
    setDesignSliderIndex((prev) => (prev - 1 + designSliderImages.length) % designSliderImages.length);
  };

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

        {/* Slider Design - Nouveau */}
        <div className="slider-container mb-0">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-[#3F4B3A] mb-4">
              Découvrez notre design
            </h3>
            <p className="text-[#9BAA8B] text-lg max-w-2xl mx-auto">
              Chaque détail de notre bouteille raconte une histoire. Explorez les différentes vues de notre design Art Déco parisien.
            </p>
          </div>

          {/* Slider Container */}
          <div className="relative max-w-4xl mx-auto">
            {/* Image principale */}
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={designSliderImages[designSliderIndex].src}
                alt={designSliderImages[designSliderIndex].alt}
                className="w-full h-full object-cover transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              
              {/* Overlay text */}
              <div className="absolute bottom-8 left-8 text-white">
                <h4 className="text-2xl font-bold mb-2">
                  {designSliderImages[designSliderIndex].title}
                </h4>
                <p className="text-lg opacity-90">
                  {designSliderImages[designSliderIndex].description}
                </p>
              </div>

              {/* Navigation buttons */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 group"
              >
                <ChevronLeft className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
              </button>
              
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 group"
              >
                <ChevronRight className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
              </button>
            </div>

            {/* Indicateurs */}
            <div className="flex justify-center space-x-3 mt-6">
              {designSliderImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setDesignSliderIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    designSliderIndex === index 
                      ? 'bg-[#C9A76D] scale-125' 
                      : 'bg-[#9BAA8B]/50 hover:bg-[#9BAA8B]/75'
                  }`}
                />
              ))}
            </div>

            {/* Compteur */}
            <div className="text-center mt-4">
              <span className="text-[#9BAA8B] font-medium">
                {designSliderIndex + 1} / {designSliderImages.length}
              </span>
            </div>
          </div>
        </div>
        {/* Image situation.png */}
        <div className="flex justify-center my-12">
          <img src="/situation.png" alt="Bouteilles Lutetia Oliva alignées" className="rounded-3xl shadow-2xl max-w-4xl w-full object-cover" />
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