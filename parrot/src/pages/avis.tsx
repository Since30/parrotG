import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import 'tailwindcss/tailwind.css';

interface Review {
  id: number;
  name: string;
  comment: string;
  createdAt: string;
  rating: number; 
}

const Avis: React.FC = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState<number>(0); // Initialisation de la propriété rating

  useEffect(() => {
    // Récupérer les avis depuis l'API/backend et les mettre à jour dans state (reviews)
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('https://garage-3c4p.onrender.com/api/avis', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          comment,
          rating, 
        }),
      });
      
      if (response.ok) {
        // Le serveur a accepté l'avis, vous pouvez mettre à jour l'état de votre formulaire ou effectuer d'autres actions.
        setName('');
        setComment('');
        // Mettre à jour la liste des avis sur la page d'accueil (étape 3).
        // ...
      } else {
        // Gérez les erreurs en cas d'échec de la requête.
        console.error('Erreur lors de l\'envoi de l\'avis.');
      }
    } catch (error) {
      console.error('Une erreur s\'est produite.', error);
    }
    // Envoyer le nouvel avis à l'API/backend pour enregistrement
    // Mettre à jour la liste des avis (reviews) avec le nouvel avis
    const newReview: Review = {
      id: reviews.length + 1,
      name,
      comment,
      createdAt: new Date().toLocaleDateString(),
      rating, 
    };
    setReviews([...reviews, newReview]);
    setName('');
    setComment('');
    setRating(0); 
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto p-6">
        <h1 className="text-xl font-semibold mb-5 text-center">Avis des clients</h1>
        {/* Afficher la liste des avis */}
        {reviews.map((review) => (
          <div key={review.id} className="mb-4">
            <p className="font-semibold">{review.name}</p>
            <p>{review.comment}</p>
            <p className="text-gray-500">{review.createdAt}</p>
            <p className="text-gray-500">Note : {review.rating}/5</p> {/* Afficher la notation */}
          </div>
        ))}
        <form onSubmit={handleSubmit} className="w-full max-w-lg mx-auto">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
              Votre nom
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 rounded leading-tight focus:outline-none focus:bg-white"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="comment" className="block text-gray-700 font-bold mb-2">
              Votre avis
            </label>
            <textarea
              id="comment"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 rounded leading-tight focus:outline-none focus:bg-white"
              rows={4}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="rating" className="block text-gray-700 font-bold mb-2">
              Note (sur 5 étoiles)
            </label>
            <input
              type="number"
              id="rating"
              value={rating}
              onChange={(e) => setRating(Number(e.target.value))}
              min={1}
              max={5}
              className="w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 rounded leading-tight focus:outline-none focus:bg-white"
              required
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Ajouter un avis
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Avis;
