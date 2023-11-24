"use client"
import React,{useState,useEffect} from 'react';


interface Review {
  id: number;
  userId: string;
  comment: string;
  createdAt: string;
  rating: number; 
}

// Supposons que vous ayez un tableau d'objets pour les témoignages
const testimonials = [
  {
    id: 1,
    userId: 'DUMESTRE RÉGIS',
    quote: "J'adore les services fournis !",
    rating: 5, // Ce sera le nombre d'étoiles à afficher
  },
  {
    id: 2,
    userId: 'RÉMI MOZANT',
    quote: "Une équipe très rigoureuse. Je recommande !",
    rating: 4,
  },
   
   
];

const TestimonialsSection: React.FC = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  useEffect(() => {
    
    fetch('https://garage-3c4p.onrender.com/api/avis')
      .then((response) => response.json())
      .then((data) => {
        setReviews(data); 
      })
      .catch((error) => {
        console.error('Une erreur s\'est produite lors de la récupération des avis.', error);
      });
  }, []);
  
  const renderStars = (rating: number) => {
    return Array.from({ length: rating }, (_, index) => (
      <span key={index} className="text-indigo-500">&#9733;</span> // Utilise l'étoile HTML entity
    ));
  };

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <h2 className="text-3xl font-medium title-font text-gray-900 mb-12 text-center">
          Les Avis
        </h2>
        <div className="flex flex-wrap -m-4">
          {reviews.map((testimonial) => (
            <div key={testimonial.id} className="p-4 md:w-1/2 w-full">
              <div className="h-full bg-gray-100 p-8 rounded">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="block w-5 h-5 text-gray-400 mb-4" viewBox="0 0 975.036 975.036">
                  <path d="..."></path>
                </svg>
                <p className="leading-relaxed mb-6">{testimonial.comment}</p>
                <div className="inline-flex items-center">
                  <div className="text-lg text-gray-900 font-medium title-font">
                    {testimonial.userId}
                  </div>
                  <div className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                    {renderStars(testimonial.rating)}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
