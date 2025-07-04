import React from 'react';
import { CheckCircle, MapPin, Droplet, Award, Shield, QrCode } from 'lucide-react';

export default function TraceabilitySection() {
  return (
    <section id="trace" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#F5F4EB] to-white min-h-screen">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#3F4B3A] mb-6">
            La transparence, du toit à votre table
          </h2>
          <p className="text-lg text-[#9BAA8B] max-w-2xl mx-auto">
            Chaque bouteille Lutetia Oliva est traçable, de la récolte sur nos toits parisiens jusqu'à votre cuisine. Découvrez chaque étape de notre circuit ultra-court.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mb-16">
          <div className="absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-[#C9A76D] to-[#B8860B] rounded-full" />
          <div className="space-y-12 pl-16">
            {/* Étape 1 */}
            <div className="relative flex items-start">
              <div className="absolute -left-8 top-0">
                <MapPin className="w-8 h-8 text-[#C9A76D] bg-white rounded-full p-1 shadow-lg" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#3F4B3A]">Récolte sur le rooftop</h3>
                <p className="text-[#9BAA8B]">Oliviers cultivés à Paris, Porte de Versailles</p>
              </div>
            </div>
            {/* Étape 2 */}
            <div className="relative flex items-start">
              <div className="absolute -left-8 top-0">
                <Droplet className="w-8 h-8 text-[#C9A76D] bg-white rounded-full p-1 shadow-lg" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#3F4B3A]">Pressage à froid</h3>
                <p className="text-[#9BAA8B]">Moins de 24h après la récolte, pour préserver tous les arômes</p>
              </div>
            </div>
            {/* Étape 3 */}
            <div className="relative flex items-start">
              <div className="absolute -left-8 top-0">
                <Award className="w-8 h-8 text-[#C9A76D] bg-white rounded-full p-1 shadow-lg" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#3F4B3A]">Mise en bouteille & contrôle</h3>
                <p className="text-[#9BAA8B]">Chaque lot est analysé et certifié (polyphénols, pureté, bio)</p>
              </div>
            </div>
            {/* Étape 4 */}
            <div className="relative flex items-start">
              <div className="absolute -left-8 top-0">
                <Shield className="w-8 h-8 text-[#C9A76D] bg-white rounded-full p-1 shadow-lg" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#3F4B3A]">Expédition & livraison</h3>
                <p className="text-[#9BAA8B]">Livraison rapide, circuit ultra-court, fraîcheur garantie</p>
              </div>
            </div>
          </div>
        </div>

        {/* Numéro de lot & QR code */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 mb-16">
          <div className="bg-white/80 rounded-2xl p-8 shadow-xl flex flex-col items-center">
            <QrCode className="w-16 h-16 text-[#C9A76D] mb-4" />
            <p className="text-lg font-semibold text-[#3F4B3A] mb-2">Numéro de lot</p>
            <div className="text-2xl font-mono bg-[#F5F4EB] px-6 py-2 rounded-lg text-[#B8860B] tracking-widest mb-2">
              LOT-2024-07-OLIVA
            </div>
            <p className="text-[#9BAA8B] text-sm">Scannez le QR code sur votre bouteille pour tout savoir sur sa provenance.</p>
          </div>
          <div className="flex flex-col items-center">
            <img src="/Toits.png" alt="Oliviers sur les toits de Paris" className="w-80 h-56 object-cover rounded-2xl shadow-lg mb-4" />
            <p className="text-[#9BAA8B] text-sm">Rooftop Porte de Versailles, Paris</p>
          </div>
        </div>

        {/* Certifications */}
        <div className="flex flex-wrap items-center justify-center gap-8 mt-8">
          <div className="flex items-center space-x-2 bg-white/80 px-6 py-3 rounded-full shadow">
            <CheckCircle className="w-6 h-6 text-[#C9A76D]" />
            <span className="font-semibold text-[#3F4B3A]">Bio</span>
          </div>
          <div className="flex items-center space-x-2 bg-white/80 px-6 py-3 rounded-full shadow">
            <CheckCircle className="w-6 h-6 text-[#C9A76D]" />
            <span className="font-semibold text-[#3F4B3A]">Vegan</span>
          </div>
          <div className="flex items-center space-x-2 bg-white/80 px-6 py-3 rounded-full shadow">
            <CheckCircle className="w-6 h-6 text-[#C9A76D]" />
            <span className="font-semibold text-[#3F4B3A]">Sans pesticides</span>
          </div>
          <div className="flex items-center space-x-2 bg-white/80 px-6 py-3 rounded-full shadow">
            <CheckCircle className="w-6 h-6 text-[#C9A76D]" />
            <span className="font-semibold text-[#3F4B3A]">Traçabilité totale</span>
          </div>
        </div>
      </div>
    </section>
  );
} 