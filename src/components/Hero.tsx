import React, { useEffect, useRef, useState } from 'react';
import { Play, ChevronDown, Pause } from 'lucide-react';

export default function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [bgIndex, setBgIndex] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isVideoEnded, setIsVideoEnded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (titleRef.current && scrollIndicatorRef.current) {
        const scrollY = window.scrollY;
        const opacity = Math.max(0, 1 - scrollY / 600);
        const transform = `translateY(${scrollY * 0.5}px)`;
        
        titleRef.current.style.opacity = opacity.toString();
        titleRef.current.style.transform = transform;
        scrollIndicatorRef.current.style.opacity = opacity.toString();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Slider automatique avec gestion spéciale pour la vidéo
  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | null = null;
    if (bgIndex !== 0) {
      interval = setInterval(() => {
        setBgIndex((prev) => (prev + 1) % 3);
      }, 8000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [bgIndex]);

  // Gestion de la vidéo
  useEffect(() => {
    if (videoRef.current) {
      if (bgIndex === 0) {
        // Quand la vidéo est active
        setIsVideoEnded(false); // Reset l'état de fin
        videoRef.current.currentTime = 0; // Remettre à zéro
        videoRef.current.play().then(() => {
          setIsVideoPlaying(true);
        }).catch(() => {
          setIsVideoPlaying(false);
        });
      } else {
        // Quand la vidéo n'est pas active
        videoRef.current.pause();
        setIsVideoPlaying(false);
      }
    }
  }, [bgIndex]);

  const handleVideoEnded = () => {
    setIsVideoPlaying(false);
    setIsVideoEnded(true);
    // Attendre 2 secondes après la fin de la vidéo avant de passer au slide suivant
    setTimeout(() => {
      setBgIndex((prev) => (prev + 1) % 3);
    }, 2000);
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Slider d'arrière-plan */}
      <div className="absolute inset-0 z-0 transition-all duration-1000">
        {bgIndex === 0 ? (
          <>
            <div className="absolute inset-0 bg-black/30 z-10 transition-opacity duration-1000 opacity-100" />
            <video
              ref={videoRef}
              className="w-full h-full object-cover transition-opacity duration-1000 opacity-100"
              muted
              playsInline
              onEnded={handleVideoEnded}
            >
              <source src="/hero-video.mp4" type="video/mp4" />
              <source src="/hero-video.webm" type="video/webm" />
              Votre navigateur ne supporte pas la lecture de vidéos.
            </video>
          </>
        ) : bgIndex === 1 ? (
          <>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/30 z-10 transition-opacity duration-1000 opacity-100" />
            <div className="w-full h-full bg-gradient-to-br from-[#3F4B3A] via-[#9BAA8B] to-[#C9A76D] opacity-90 transition-opacity duration-1000" />
            <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[#C9A76D]/10 blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-[#9BAA8B]/10 blur-3xl animate-pulse" style={{animationDelay: '2s'}} />
          </>
        ) : (
          <>
            <div className="absolute inset-0 bg-black/20 z-10 transition-opacity duration-1000 opacity-100" />
            <img 
              src="/oliviers-paris.png" 
              alt="Oliviers sur les toits de Paris" 
              className="w-full h-full object-cover transition-opacity duration-1000 opacity-100" 
              style={{filter: 'brightness(0.7)'}}
            />
          </>
        )}
      </div>

      {/* Indicateurs de slide */}
      <div className="absolute top-8 right-8 z-30 flex space-x-2">
        {[0, 1, 2].map((index) => (
          <button
            key={index}
            onClick={() => {
              setBgIndex(index);
              setIsVideoEnded(false); // Reset l'état de fin quand on clique manuellement
            }}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              bgIndex === index 
                ? 'bg-white scale-125' 
                : 'bg-white/50 hover:bg-white/75'
            }`}
          />
        ))}
      </div>

      {/* Hero Content */}
      <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8">
        <h1 
          ref={titleRef}
          className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-8 leading-tight flex flex-col items-center"
        >
          <img 
            src="/logo-lutetia.png" 
            alt="Lutetia Oliva Logo"
            className="w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 mb-6 opacity-0 animate-fadeInUp rounded-full"
            style={{animationDelay: '0.2s', animationFillMode: 'both'}}
          />
          <span className="block opacity-0 animate-fadeInUp" style={{animationDelay: '0.5s', animationFillMode: 'both'}}>
            L'huile d'olive
          </span>
          <span className="block opacity-0 animate-fadeInUp bg-gradient-to-r from-[#C9A76D] to-[#FFD700] bg-clip-text text-transparent" style={{animationDelay: '0.8s', animationFillMode: 'both'}}>
            née sur les toits
          </span>
          <span className="block opacity-0 animate-fadeInUp" style={{animationDelay: '1.1s', animationFillMode: 'both'}}>
            de Paris
          </span>
        </h1>

        <p className="text-lg sm:text-xl text-white/90 mb-12 max-w-3xl mx-auto text-center opacity-0 animate-fadeInUp" style={{animationDelay: '1.4s', animationFillMode: 'both'}}>
          L'huile d'olive au design Art Déco. 850 mg de polyphénols. 0 kilomètre. 100% Paris. 
          <br />
          <span className="text-[#C9A76D] font-semibold">L'élégance parisienne dans chaque goutte dorée.</span>
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 opacity-0 animate-fadeInUp" style={{animationDelay: '1.7s', animationFillMode: 'both'}}>
          <button className="group relative px-8 py-4 bg-gradient-to-r from-[#C9A76D] to-[#B8860B] text-white font-semibold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <span className="relative z-10">Découvrir la collection</span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#FFD700] to-[#C9A76D] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute inset-0 bg-white/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>

          <button
            className="group flex items-center space-x-2 px-6 py-4 bg-white/10 backdrop-blur-sm text-white border border-white/20 rounded-full hover:bg-white/20 transition-all duration-300"
            onClick={() => {
              if (bgIndex === 0 && videoRef.current) {
                if (isVideoPlaying) {
                  videoRef.current.pause();
                  setIsVideoPlaying(false);
                } else {
                  videoRef.current.play();
                  setIsVideoPlaying(true);
                }
              }
            }}
          >
            {bgIndex === 0 && isVideoPlaying ? (
              <Pause className="w-5 h-5 fill-current" />
            ) : (
              <Play className="w-5 h-5 fill-current" />
            )}
            <span className="font-medium">
              {bgIndex === 0 ? (isVideoPlaying ? 'Pause' : 'Lecture') : 'Voir la récolte'}
            </span>
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div 
        ref={scrollIndicatorRef}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 opacity-0 animate-fadeInUp"
        style={{animationDelay: '2s', animationFillMode: 'both'}}
      >
        <div className="flex flex-col items-center space-y-2">
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce"></div>
          </div>
          <ChevronDown className="w-5 h-5 text-white/60 animate-bounce" />
        </div>
      </div>
    </section>
  );
}