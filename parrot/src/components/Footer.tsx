"use client"
import React,{useState} from 'react';
import Link from 'next/link';
import AvisForm from '../pages/avis';


const Footer: React.FC = () => {
  const [showAvisForm, setShowAvisForm] = useState(false);

  const handleAvisButtonClick = () => {
    setShowAvisForm(!showAvisForm); 
  };
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-6 py-8 grid grid-cols-1 sm:grid-cols-3 gap-8">
        {/* Section Horaires */}
        <div className="text-center sm:text-left">
          <h3 className="text-lg font-semibold">HORAIRES</h3>
          <p className="mt-4">Lun, Mar, Mer, Jeu: 11h00 - 20h00</p>
          <p>Ven: 12h00 - 20h00</p>
          <p>Sam, Dim: Fermé</p>
        </div>

        {/* Section Satisfaction Client */}
        <div className="text-center">
          <h3 className="text-lg font-semibold">SATISFAIT DE NOS SERVICES ?</h3>
          
      {showAvisForm && <AvisForm />}
          <Link href="/avis" className="mt-4 inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
           <button onClick={handleAvisButtonClick}>Laissez un avis</button>
          </Link>
        </div>

        {/* Section Nous Contacter */}
        <div className="text-center sm:text-right">
          <h3 className="text-lg font-semibold">NOUS-CONTACTER</h3>
          <p className="mt-4">2 rue du château, 93000 PARIS</p>
          <p>garageparrot@gmail.com</p>
          <p>05 63 09 81 66</p>
        </div>
      </div>
      <div className="border-t border-gray-700 text-center py-4">
        &copy; {new Date().getFullYear()} Garage Parrot. Tous droits réservés.
      </div>
    </footer>
  );
};

export default Footer;
