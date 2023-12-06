// pages/vehicles/[id].tsx
import React from 'react';
import { GetServerSideProps, NextPage } from 'next';

interface VehicleProps {
  id: number;
  brand: string;
  model: string;
  year: number;
  color: string;
  price: number;
  description: string;
  image: string;
  status: number;
  createdAt: string;
  updatedAt: string;
}

const VehicleDetail: NextPage<{ vehicle: VehicleProps | null }> = ({ vehicle }) => {
  if (!vehicle) {
    return <div>Véhicule non trouvé</div>;
  }

  return (
    <div className="container mx-auto p-4">
      {/* Contenu de la page de détail du véhicule */}
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <img
          src={vehicle.image}
          alt={`${vehicle.brand} ${vehicle.model}`}
          className="w-full h-64 object-cover"
        />
        {/* Autres détails du véhicule ici */}
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params!;
  let vehicle = null;

  try {
    const response = await fetch(`https://garage-3c4p.onrender.com/api/vehicles/${id}`);
    if (response.ok) {
      vehicle = await response.json();
    }
  } catch (error) {
    console.error('Erreur lors de la récupération des détails du véhicule', error);
  }

  return {
    props: { vehicle },
  };
};

export default VehicleDetail;
