-- Créez une table "users" avec des colonnes "id", "name" et "email"
CREATE TABLE IF NOT EXISTS users (
  id INTEGER PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL,
  password TEXT NOT NULL
);
-- Table "vehicule" avec des colonnes "id", "brand", "model", "year", "color", "price", "description", "image", "status", "createdAt" et "updatedAt"
CREATE TABLE IF NOT EXISTS Vehicule (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  brand TEXT NOT NULL,
  model TEXT NOT NULL,
  year INTEGER NOT NULL,
  color TEXT NOT NULL,
  price REAL NOT NULL,
  description TEXT,
  image TEXT,
  status INTEGER NOT NULL,
  createdAt TEXT NOT NULL,
  updatedAt TEXT NOT NULL
);

-- Table "avis" avec des colonnes "id", "userId", "rating", "comment" et "createdAt"
CREATE TABLE IF NOT EXISTS avis (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
   rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
  comment TEXT,
  createdAt TEXT NOT NULL
);