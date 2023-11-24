import React, { useState } from 'react';

const VehicleSearchForm: React.FC = () => {
  const [searchParams, setSearchParams] = useState({
    brand: '',
    model: '',
    year: '',
    color: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const queryParams = {
      brand: searchParams.brand,
      model: searchParams.model,
      year: searchParams.year,
      color: searchParams.color,
    };

    // Vous pouvez maintenant utiliser queryParams pour effectuer une requête de recherche
    // Par exemple, en utilisant la fonction fetch pour interroger votre API

    try {
      const response = await fetch(`https://garage-3c4p.onrender.com/api/vehicles?${new URLSearchParams(queryParams).toString()}`);
      if (response.ok) {
        const data = await response.json();
        // Faites quelque chose avec les données de la recherche
        console.log(data);
      } else {
        // Gérez les erreurs ici
        console.error('Erreur de recherche');
      }
    } catch (error) {
      console.error('Erreur lors de la recherche', error);
    }
  };

  return (
    <div className="bg-gray-200 p-4 rounded-md shadow-md mt-12">
      <h2 className="text-xl font-semibold mb-4">Recherche de véhicules</h2>
      <form onSubmit={handleSubmit} className="flex space-x-2">
        <input
          type="text"
          className="w-1/4 p-2 border rounded-md"
          placeholder="Marque"
          value={searchParams.brand}
          onChange={(e) => setSearchParams({ ...searchParams, brand: e.target.value })}
        />
        <input
          type="text"
          className="w-1/4 p-2 border rounded-md"
          placeholder="Modèle"
          value={searchParams.model}
          onChange={(e) => setSearchParams({ ...searchParams, model: e.target.value })}
        />
        <input
          type="text"
          className="w-1/4 p-2 border rounded-md"
          placeholder="Année"
          value={searchParams.year}
          onChange={(e) => setSearchParams({ ...searchParams, year: e.target.value })}
        />
        <input
          type="text"
          className="w-1/4 p-2 border rounded-md"
          placeholder="Couleur"
          value={searchParams.color}
          onChange={(e) => setSearchParams({ ...searchParams, color: e.target.value })}
        />
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
        >
          Rechercher
        </button>
      </form>
    </div>
  );
};

export default VehicleSearchForm;