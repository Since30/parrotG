
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../app/globals.css'

const ContactPage: React.FC = () => {
  const [demandType, setDemandType] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    // Ici, vous enverriez les données à votre API ou les traiteriez comme nécessaire
    console.log({ demandType, name, email, message });
  };

  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center min-h-screen">
        <div className="w-full max-w-lg p-6">
          <h1 className="text-xl font-semibold mb-5 text-center">Contactez-nous</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="demand-type">
                Type de demande
              </label>
              <div className="relative">
                <select
                  className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="demand-type"
                  value={demandType}
                  onChange={(e) => setDemandType(e.target.value)}
                >
                  <option value="">Sélectionnez une option</option>
                  <option value="information">Demande d'information</option>
                  <option value="devis">Demande de devis</option>
                  <option value="rendez-vous">Demande de rendez-vous</option>
                  <option value="reclamation">Réclamation</option>
                </select>
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                Nom
              </label>
              <input
                className="block w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 rounded leading-tight focus:outline-none focus:bg-white"
                id="name"
                type="text"
                placeholder="Votre nom"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                className="block w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 rounded leading-tight focus:outline-none focus:bg-white"
                id="email"
                type="text"
                placeholder="Votre email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                className="block w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 rounded leading-tight focus:outline-none focus:bg-white"
                id="message"
                placeholder="Votre message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Envoyer
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;