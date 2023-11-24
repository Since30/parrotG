"use client"
import React from 'react';
import Image from 'next/image'; 
import Link from 'next/link';
import Picture1 from '../../public/assets/garageCars.jpg';

const HeroSection: React.FC = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10">
          {/* Assurez-vous que les chemins d'images sont corrects */}
          <Image 
            alt="voiture dans le garage"
            src={Picture1}
            width={720}
            height={600}
            className="object-cover object-center rounded"
          />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Expérience automobile d'exception, à portée de main chez Garage Parrot
          </h1>
          <p className="mb-8 leading-relaxed">
            Bienvenue chez V.PARROT, votre automobile de confiance! Nous sommes spécialisés
            dans la mécanique et la carrosserie de la motorisation de pointe. Notre équipe de professionnels
            expérimentés s'assure de prendre soin de votre véhicule d'A à Z.
          </p>
          <div className="flex justify-center">
            <Link href="/services"><button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
              Découvrir nos services
            </button></Link>
            <Link href="/vehicles">
            <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
              Voir les occasions
            </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
