import React from 'react';
import { Link } from 'react-router-dom';

export default function HistoirePage() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#F5F4EB] to-white min-h-screen">
      <div className="max-w-4xl mx-auto text-center">
        <Link to="/" className="inline-block mb-8">
          <img src="/logo-lutetia.png" alt="Logo Lutetia Oliva" className="mx-auto w-24 h-24 rounded-full shadow-lg hover:scale-110 transition-transform duration-300" />
        </Link>
        <h1 className="text-5xl font-bold text-[#3F4B3A] mb-8">L'Histoire de Lutetia Oliva</h1>
        <p className="text-lg text-[#9BAA8B] mb-12">
          Lutetia Oliva, c'est la rencontre entre l'élégance parisienne et la tradition méditerranéenne. 
          Notre aventure commence sur les toits de Paris, où des oliviers centenaires s'épanouissent au-dessus de la ville lumière.
        </p>
        <img src="/Toits.png" alt="Oliviers sur les toits de Paris" className="mx-auto w-full max-w-2xl h-72 object-cover rounded-3xl shadow-xl mb-10" />
        <div className="text-left space-y-8 text-[#3F4B3A] text-lg">
          <div>
            <h2 className="text-2xl font-bold mb-2">Un projet visionnaire</h2>
            <p>
              Inspirés par l'Art Déco et l'histoire de Lutèce, nous avons voulu créer une huile d'olive unique, 
              cultivée, pressée et embouteillée au cœur de Paris. Chaque goutte raconte l'histoire d'une ville, 
              d'un terroir urbain et d'une passion pour l'excellence.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-2">Des valeurs fortes</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Transparence et traçabilité totale</li>
              <li>Respect de la nature et agriculture urbaine durable</li>
              <li>Design et raffinement à la parisienne</li>
              <li>Production locale, circuit ultra-court</li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-2">Une huile d'exception</h2>
            <p>
              Nos oliviers bénéficient d'un microclimat unique, entre soleil, brise urbaine et savoir-faire ancestral. 
              Le résultat : une huile d'olive aux arômes complexes, riche en polyphénols, symbole de l'art de vivre à la française.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-2">L'esprit Lutetia Oliva</h2>
            <p>
              Plus qu'une huile, Lutetia Oliva est une invitation à redécouvrir Paris sous un nouveau jour. 
              C'est la fierté d'une agriculture urbaine innovante, le goût du partage, et l'envie de transmettre un art de vivre.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 