"use client"
import React from 'react';
import Image from 'next/image';
import Picture2 from '../../public/assets/carrosserie.jpg';
import Picture3 from '../../public/assets/mecanique.jpg';
import Picture4 from '../../public/assets/pneu.jpg';

const services = [
  {
    id: 1,
    name: 'CARROSSERIE',
    description: 'Nos spécialistes en carrosserie utilisent des techniques de pointe pour réparer et restaurer lapparence de votre véhicule. Que ce soit pour des dommages légers ou majeurs, nous sommes là pour vous offrir un service de qualité et redonner à votre voiture son éclat d\'origine. Prenez rendez-vous dès aujourd\'hui et offrez une nouvelle jeunesse à votre véhicule. Votre satisfaction est notre priorité absolue',
    image: Picture2,
  },
  {
    id: 2,
    name: 'MÉCANIQUE',
    description: 'Nous assurons le montage professionnel de pneus pour tous types de véhicules. Notre équipe expérimentée offre un service rapide et fiable. Que ce soit pour un changement saisonnier, un remplacement usuel ou une amélioration de performance, nous sommes là pour vous aider. Nous utilisons des équipements de pointe et suivons les procédures recommandées par les fabricants pour un montage précis et sécurisé',
    image: Picture3,
  },
    {
        id: 3,
        name: 'PNEUS',
        description: 'Nous assurons le montage professionnel de pneus pour tous types de véhicules. Notre équipe expérimentée offre un service rapide et fiable. Que ce soit pour un changement saisonnier, un remplacement usuel ou une amélioration de performance, nous sommes là pour vous aider. Nous utilisons des équipements de pointe et suivons les procédures recommandées par les fabricants pour un montage précis et sécurisé',
        image: Picture4,
    },
  
];

const ServicesSection: React.FC = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto px-6 py-24">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service) => (
          <div key={service.id} className="p-4">
            <div className="bg-white h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
              <Image
                src={service.image}
                alt={service.name}
                width={500} // Ces valeurs doivent correspondre au ratio de vos images
                height={400}
                className="lg:h-48 md:h-36 w-full object-cover object-center"
              />
              <div className="p-6">
                <h2 className="text-base font-medium text-indigo-600 mb-1">{service.name}</h2>
                <h1 className="text-2xl font-semibold mb-3">{service.description}</h1>
                <button className="text-indigo-500 inline-flex items-center">En savoir plus</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </section>
  );
};

export default ServicesSection;
