import React from 'react';
import '../app/globals.css'
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import VehicleSearchForm from '@/components/VehiculesSearchForm';
import Link from 'next/link';

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



const defaultVehicles: VehicleProps[] = [
  {
    id: 6,
    brand: 'Toyota',
    model: 'Camry',
    year: 2022,
    color: 'Silver',
    price: 25000,
    description: 'Spacious family sedan.',
    image: '/assets/pictures/vehicles/toyota-camry.png',
    status: 1, // En stock
    createdAt: '2022-10-01',
    updatedAt: '2022-10-05',
  },
  {
    id: 7,
    brand: 'Honda',
    model: 'Civic',
    year: 2021,
    color: 'Blue',
    price: 22000,
    description: 'Fuel-efficient compact car.',
    image: '/assets/pictures/vehicles/honda-civic.jpg',
    status: 1, // En stock
    createdAt: '2022-09-15',
    updatedAt: '2022-09-20',
  },
  {
    id: 8,
    brand: 'Ford',
    model: 'F-150',
    year: 2022,
    color: 'Red',
    price: 35000,
    description: 'Powerful pickup truck.',
    image: '/assets/pictures/vehicles/f-150.jpg',
    status: 0, // En rupture de stock
    createdAt: '2022-11-05',
    updatedAt: '2022-11-10',
  },
  {
    id: 9,
    brand: 'Chevrolet',
    model: 'Equinox',
    year: 2021,
    color: 'Gray',
    price: 28000,
    description: 'Compact SUV for urban adventures.',
    image: '/assets/pictures/vehicles/chevrolet-equinox.jpg',
    status: 1, // En stock
    createdAt: '2022-08-25',
    updatedAt: '2022-08-30',
  },
  {
    id: 10,
    brand: 'Nissan',
    model: 'Altima',
    year: 2020,
    color: 'Black',
    price: 20000,
    description: 'Reliable midsize sedan.',
    image: '/assets/pictures/vehicles/nissan-altima.jpg',
    status: 1, // En stock
    createdAt: '2022-07-12',
    updatedAt: '2022-07-15',
  },
  {
    id: 11,
    brand: 'Jeep',
    model: 'Wrangler',
    year: 2023,
    color: 'Green',
    price: 38000,
    description: 'Off-road adventure vehicle.',
    image: '/assets/pictures/vehicles/JEEP-WRANGLER.png',
    status: 1, // En stock
    createdAt: '2022-12-10',
    updatedAt: '2022-12-15',
  },
];


  

const VehicleList: React.FC = () => {
  const [vehicles, setVehicles] = React.useState<VehicleProps[]>(defaultVehicles); // Initialisez avec les données par défaut

  React.useEffect(() => {
    fetch('https://garage-3c4p.onrender.com/api/vehicles')
      .then((response) => response.json())
      .then((data) => {
        // Fusionnez les données existantes avec les nouvelles données de l'API
        setVehicles((prevVehicles) => [...prevVehicles, ...data]);
      })
      .catch((error) => {
        console.error('Une erreur s\'est produite lors de la récupération des véhicules.', error);
      });
  }, []);

  
    return (
      <>
      <Navbar />
      <VehicleSearchForm />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12 mb-12">
        {vehicles.map((vehicle) => (
           <Link key={vehicle.id} href={`/vehicles/${vehicle.id}`}>
          <div key={vehicle.id} className="bg-white shadow-md rounded-lg overflow-hidden">
            <img
              src={vehicle.image}
              alt={`${vehicle.brand} ${vehicle.model}`}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold">
                {vehicle.year} {vehicle.brand} {vehicle.model}
              </h2>
              <p className="text-gray-600">{vehicle.color}</p>
              <p className="text-gray-700 mt-2">{vehicle.description}</p>
              <div className="mt-4 flex justify-between items-center">
                <p className="text-xl font-semibold">€{vehicle.price}</p>
                {vehicle.status === 1 ? (
                  <span className="bg-green-500 text-white py-1 px-2 rounded-full">
                    En Stock
                  </span>
                ) : (
                  <span className="bg-red-500 text-white py-1 px-2 rounded-full">
                    Rupture de Stock
                  </span>
                )}
              </div>
            </div>
          </div>
          </Link>
        ))}
      </div>
      <Footer />
    </>
    );
  };


  
  export default VehicleList;