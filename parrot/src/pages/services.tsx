
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../app/globals.css'

const ServicesPage: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-semibold text-center text-gray-800 mb-8">Nos Services</h1>

        {/* Section Mécanique */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Mécanique</h2>
          <p className="text-gray-600 mb-4">
            Nous offrons une gamme complète de services mécaniques, y compris l'entretien périodique, les diagnostics et les réparations majeures.
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>Changement d'huile - à partir de 50€</li>
            <li>Diagnostic moteur - 70€</li>
            <li>Réparation de freins - à partir de 150€</li>
          </ul>
          <p className="italic text-red-500">Promotion: 10% de réduction sur le diagnostic moteur jusqu'au 31/12/2023.</p>
        </div>

        {/* Section Carrosserie */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Carrosserie</h2>
          <p className="text-gray-600 mb-4">
            Services de carrosserie de haute qualité pour réparer ou restaurer votre véhicule à son état d'origine.
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>Réparation de rayures - à partir de 100€</li>
            <li>Peinture complète - à partir de 500€</li>
          </ul>
          <p className="italic text-green-500">Offre spéciale: Peinture complète avec une réduction de 15% pour les nouveaux clients.</p>
        </div>

        {/* Section Pneus */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Pneus</h2>
          <p className="text-gray-600">
            Services complets pour vos pneus, y compris le montage, l'équilibrage et la réparation.
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>Changement de pneus - 40€ par pneu</li>
            <li>Équilibrage des pneus - 15€ par pneu</li>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ServicesPage;

