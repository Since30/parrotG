import React, { useState } from 'react';

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

interface AddVehiclesFormProps {
  onAddVehicle: (newVehicle: NewVehicle) => void;
}

const AddVehiclesForm: React.FC<AddVehiclesFormProps> = ({ onAddVehicle }) => {
  const [newVehicle, setNewVehicle] = useState<NewVehicle>({
    brand: '',
    model: '',
    year: 0,
    color: '',
    price: 0,
    description: '',
    image: '',
    status: 0,
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setNewVehicle({ ...newVehicle, [name]: value });
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      // Vous pouvez maintenant traiter le fichier ici (par exemple, l'envoyer sur le serveur).
      // Vous pouvez accéder au fichier en utilisant la variable `file`.
      console.log('Fichier téléchargé:', file);
      // Vous pouvez également mettre à jour l'état `newVehicle` avec l'URL de l'image.
      setNewVehicle({ ...newVehicle, image: URL.createObjectURL(file) });
    }
  };
  

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onAddVehicle(newVehicle); // Supprimez "as Vehicle" car newVehicle est déjà de type NewVehicle
    // Réinitialiser le formulaire du nouveau véhicule
    setNewVehicle({
      brand: '',
      model: '',
      year: 0,
      color: '',
      price: 0,
      description: '',
      image: '',
      status: 0,
    });
  };
  return (
    <form onSubmit={handleSubmit} className="p-4 bg-gray-100 rounded-lg">
  <div className="mb-4">
    <label className="block text-gray-700 font-bold mb-2">Marque:</label>
    <input
      type="text"
      name="brand"
      value={newVehicle.brand}
      onChange={handleChange}
      required
      className="border rounded p-2 w-full"
    />
  </div>
  <div className="mb-4">
    <label className="block text-gray-700 font-bold mb-2">Modèle:</label>
    <input
      type="text"
      name="model"
      value={newVehicle.model}
      onChange={handleChange}
      required
      className="border rounded p-2 w-full"
    />
  </div>
  <div className="mb-4">
    <label className="block text-gray-700 font-bold mb-2">Année:</label>
    <input
      type="number"
      name="year"
      value={newVehicle.year}
      onChange={handleChange}
      required
      className="border rounded p-2 w-full"
    />
  </div>
  <div className="mb-4">
    <label className="block text-gray-700 font-bold mb-2">Couleur:</label>
    <input
      type="text"
      name="color"
      value={newVehicle.color}
      onChange={handleChange}
      required
      className="border rounded p-2 w-full"
    />
  </div>
  <div className="mb-4">
    <label className="block text-gray-700 font-bold mb-2">Prix:</label>
    <input
      type="number"
      name="price"
      value={newVehicle.price}
      onChange={handleChange}
      required
      className="border rounded p-2 w-full"
    />
  </div>
  <div className="mb-4">
    <label className="block text-gray-700 font-bold mb-2">Description:</label>
    <textarea
      name="description"
      value={newVehicle.description}
      onChange={handleChange}
      className="border rounded p-2 w-full"
    />
  </div>
  <div className="mb-4">
    <label className="block text-gray-700 font-bold mb-2">Image (URL):</label>
    <input
      type="text"
      name="image"
      value={newVehicle.image}
      onChange={handleChange}
      className="border rounded p-2 w-full mb-2"
      placeholder="URL de l'image (ou téléchargez depuis votre ordinateur)"
    />
    <input
      type="file"
      accept="image/*"
      onChange={handleImageUpload}
    />
  </div>
  <div className="mb-4">
    <label className="block text-gray-700 font-bold mb-2">Statut:</label>
    <input
      type="number"
      name="status"
      value={newVehicle.status}
      onChange={handleChange}
      required
      className="border rounded p-2 w-full"
    />
  </div>
  <button
    type="submit"
    className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
  >
    Ajouter un véhicule
  </button>
</form>
  );
};

export default AddVehiclesForm;
