"use client"

import React from 'react';
import Link from 'next/link';
import ImageLogo from '../../public/assets/pictures/logo.jpeg'

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white shadow">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/">
            <span className="text-xl font-bold text-gray-800 lg:text-2xl cursor-pointer">
             <img className='rounded-lg' width={150} src='../assets/pictures/logo.jpeg' alt='logo'/>
            </span>
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <Link href="/">
            <span className="text-gray-800 hover:text-gray-600 transition-colors duration-300 cursor-pointer">
              Accueil
            </span>
          </Link>
          <Link href='/services'>
            <span className="text-gray-800 hover:text-gray-600 transition-colors duration-300 cursor-pointer">
              Services
            </span>
          </Link>
          <Link href="/vehicles">
            <span className="text-gray-800 hover:text-gray-600 transition-colors duration-300 cursor-pointer">
              Véhicules d'occasion
            </span>
          </Link>
          <Link href="/contact">
            <span className="text-gray-800 hover:text-gray-600 transition-colors duration-300 cursor-pointer">
              Nous contacter
            </span>
          </Link>
        </div>
        <div className="hidden lg:block">
          <Link href="/login">
            <span className="px-3 py-2 rounded-md text-sm font-medium bg-blue-500 text-white hover:bg-blue-600 cursor-pointer">
              Espace Pro
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


