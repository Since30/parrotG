// import { useEffect, useState } from 'react';
// import '../app/globals.css';
// import AddVehiclesForm from '../components/AddVehiclesForm';

// interface Vehicle {
//   id: number;
//   brand: string;
//   model: string;
//   year: number;
//   color: string;
//   price: number;
//   description: string;
//   image: string;
//   status: number;
//   createdAt: string;
//   updatedAt: string;
// }

// interface Review {
//   id: number;
//   userId: number;
//   comment: string;
//   rating: number;
//   createdAt: string;
// }

// interface NewVehicle {
//   brand: string;
//   model: string;
//   year: number;
//   color: string;
//   price: number;
//   description: string;
//   image: string;
//   status: number;
// }

// function Dashboard() {
//   const [reviews, setReviews] = useState<Review[]>([]);
//   const [vehicles, setVehicles] = useState<Vehicle[]>([]);

//   const [showAddVehicleForm, setShowAddVehicleForm] = useState<boolean>(false);

//   useEffect(() => {
//     // Récupérer les avis depuis l'API
//     fetch('https://garage-3c4p.onrender.com/api/avis') // Assurez-vous que l'URL est correcte
//       .then((response) => response.json())
//       .then((data) => setReviews(data))
//       .catch((error) => console.error('Erreur lors de la récupération des avis:', error));

//     // Récupérer les véhicules depuis l'API
//     fetch('https://garage-3c4p.onrender.com/api/vehicles') // Assurez-vous que l'URL est correcte
//       .then((response) => response.json())
//       .then((data) => setVehicles(data))
//       .catch((error) => console.error('Erreur lors de la récupération des véhicules:', error));
//   }, []);

//   const handleAddVehicle = (newVehicle: NewVehicle) => {
//     fetch('https://garage-3c4p.onrender.com/api/vehicles', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(newVehicle),
      
//     })
   
//       .then((response) => response.json())
//       .then((data) => {
//         setVehicles([...vehicles, data]);
//         setShowAddVehicleForm(false); 
//       })
//       .catch((error) => console.error('Erreur lors de l\'ajout du véhicule:', error));
//       console.log(newVehicle);
//   };

//   const handleAddReview = (newReview: Review) => {
//     // Ajouter le nouvel avis à la liste des avis
//     setReviews([...reviews, newReview]);
//   };

//   const handleEditReview = (reviewId: number, updatedReview: Review) => {
//     // Rechercher l'avis à mettre à jour dans la liste
//     const updatedReviews = reviews.map((review) =>
//       review.id === reviewId ? updatedReview : review
//     );

//     // Mettre à jour la liste des avis avec l'avis modifié
//     setReviews(updatedReviews);
//   };

//   const handleDeleteReview = (reviewId: number) => {
//     // Filtrer la liste des avis pour supprimer l'avis avec l'ID donné
//     const updatedReviews = reviews.filter((review) => review.id !== reviewId);

//     // Mettre à jour la liste des avis sans l'avis supprimé
//     setReviews(updatedReviews);
//   };




  

//   return (
//     <div className="container mx-auto p-4">
//   <div>
//     <h1 className="text-2xl font-bold mb-4">Tableau de bord</h1>

//     <h2 className="text-xl font-semibold mb-2">Avis Clients</h2>
//     <button
//       className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded mb-4"
//       onClick={() => handleAddReview}
//     >
//       Ajouter un avis
//     </button>
//     <div className="grid grid-cols-1 gap-4">
//       {reviews.map((review) => (
//         <div key={review.id} className="bg-white shadow-md p-4 rounded-lg">
//           <p>{review.comment}</p>
//           <p className="mt-2">Évaluation : {review.rating}</p>
//           <div className="mt-4">
//             <button
//               className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded mr-2"
//               onClick={() => handleEditReview(review.id, review)}
//             >
//               Modifier
//             </button>
//             <button
//               className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded"
//               onClick={() => handleDeleteReview(review.id)}
//             >
//               Supprimer
//             </button>
//           </div>
//         </div>
//       ))}
//     </div>
//   </div>
//   <div>
//     <h2 className="text-xl font-semibold mb-2">Véhicules d'Occasion</h2>
//     {showAddVehicleForm ? (
//       <AddVehiclesForm onAddVehicle={handleAddVehicle} />
//     ) : (
//       <button
//         className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded mb-4"
//         onClick={() => setShowAddVehicleForm(true)}
//       >
//         Ajouter un véhicule
//       </button>
//     )}
//     <div className="grid grid-cols-1 gap-4">
//       {vehicles.map((vehicle) => (
//         <div key={vehicle.id} className="bg-white shadow-md p-4 rounded-lg">
//           <p>Marque : {vehicle.brand}</p>
//           <p>Modèle : {vehicle.model}</p>
//           <p>Année : {vehicle.year}</p>
//           <p>Couleur : {vehicle.color}</p>
//           <p>Prix : {vehicle.price}</p>
//           <p>Description : {vehicle.description}</p>
//           <p>Image : {vehicle.image}</p>
//           <p>Statut : {vehicle.status}</p>
//           <p>Créé le : {vehicle.createdAt}</p>
//           <p>Modifié le : {vehicle.updatedAt}</p>
//           <div className="mt-4">
//             <button
//               className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded mr-2"
//             >
//               Modifier
//             </button>
//             <button
//               className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded"
//             >
//               Supprimer
//             </button>
//           </div>
//         </div>
//       ))}
//     </div>
//   </div>
// </div>

//   );
// }

// export default Dashboard;

import React, { useEffect, useState } from 'react';
import '../app/globals.css';
import AddVehiclesForm from '../components/AddVehiclesForm';
// Importez vos autres composants ici si nécessaire

interface Vehicle {
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

interface Review {
  id: number;
  userId: number;
  comment: string;
  rating: number;
  createdAt: string;
}

interface NewVehicle {
  brand: string;
  model: string;
  year: number;
  color: string;
  price: number;
  description: string;
  image: string;
  status: number;
}


interface Review {
  id: number;
  userId: number;
  comment: string;
  rating: number;
  createdAt: string;
}

interface NewVehicle {
  brand: string;
  model: string;
  year: number;
  color: string;
  price: number;
  description: string;
  image: string;
  status: number;
}

function Dashboard() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [showAddVehicleForm, setShowAddVehicleForm] = useState<boolean>(false);

  useEffect(() => {
    fetch('https://garage-3c4p.onrender.com/api/avis')
      .then((response) => response.json())
      .then((data) => setReviews(data))
      .catch((error) => console.error('Erreur lors de la récupération des avis:', error));

    fetch('https://garage-3c4p.onrender.com/api/vehicles')
      .then((response) => response.json())
      .then((data) => setVehicles(data))
      .catch((error) => console.error('Erreur lors de la récupération des véhicules:', error));
  }, []);

  const handleAddVehicle = (newVehicle: NewVehicle) => {
    
    fetch('https://garage-3c4p.onrender.com/api/vehicles', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newVehicle),
    })
      .then((response) => response.json())
      .then((data) => {
        setVehicles([...vehicles, data]);
        setShowAddVehicleForm(false);
      })
      .catch((error) => console.error('Erreur lors de l\'ajout du véhicule:', error));
  };

  const handleAddReview = (newReview: Review) => {
    // Ajouter le nouvel avis à la liste des avis
    setReviews([...reviews, newReview]);

  };

  const handleEditReview = (reviewId: number, updatedReview: Review) => {
    
    const updatedReviews = reviews.map((review) =>
      review.id === reviewId ? updatedReview : review
    );

    
    setReviews(updatedReviews);
  };

  const handleDeleteReview = (reviewId: number) => {
    // Logique pour supprimer un avis
    setReviews(reviews.filter(review => review.id !== reviewId));
  };
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-blue-900 text-white p-4">
        <nav>
          <ul>
            <li className="mb-4">Accueil</li>
            <li className="mb-4">Profil</li>
            <li className="mb-4">Paramètres</li>
            {/* Autres éléments de menu ici */}
          </ul>
        </nav>
      </aside>
  
      {/* Contenu principal */}
      <main className="flex-1 p-8 overflow-y-auto">
        <h1 className="text-3xl font-bold mb-8">Tableau de Bord</h1>
  
        {/* Section des avis clients */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Avis Clients</h2>
          <div className="bg-white shadow-md rounded-lg p-4">
          {reviews.map((review) => (
        <div key={review.id} className="bg-white shadow-md p-4 rounded-lg">
          <p>{review.comment}</p>
          <p className="mt-2">Évaluation : {review.rating}</p>
          <div className="mt-4">
            <button
              className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded mr-2"
              onClick={() => handleEditReview(review.id, review)}
            >
              Modifier
            </button>
            <button
              className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded"
              onClick={() => handleDeleteReview(review.id)}
            >
              Supprimer
            </button>
          </div>
        </div>
      ))}
    </div>
  
        

        </section>
  
        {/* Section des véhicules */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Véhicules d'Occasion</h2>
          <div className="bg-white shadow-md rounded-lg p-4">
            {/* Ici vous pouvez ajouter un composant pour lister les véhicules */}
            {showAddVehicleForm ? (
              <AddVehiclesForm onAddVehicle={handleAddVehicle} />
            ) : (
              <button
                className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded mb-4"
                onClick={() => setShowAddVehicleForm(true)}
              >
                Ajouter un véhicule
              </button>
            )}
            <div className="grid grid-cols-1 gap-4">
              {vehicles.map((vehicle) => (
                <div key={vehicle.id} className="bg-white shadow-md p-4 rounded-lg">
                  <p>Marque : {vehicle.brand}</p>
                  <p>Modèle : {vehicle.model}</p>
                  <p>Année : {vehicle.year}</p>
                  <p>Couleur : {vehicle.color}</p>
                  <p>Prix : {vehicle.price}</p>
                  <p>Description : {vehicle.description}</p>
                  <p>Image : {vehicle.image}</p>
                  <p>Statut : {vehicle.status}</p>
                  <p>Créé le : {vehicle.createdAt}</p>
                  <p>Modifié le : {vehicle.updatedAt}</p>
                  <div className="mt-4 flex justify-between">
                    <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
                      Modifier
                    </button>
                    <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded">
                      Supprimer
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
  
        {/* Vous pouvez continuer à ajouter d'autres sections ici si nécessaire */}
  
      </main>
    </div>
  );
  
}

export default Dashboard;
