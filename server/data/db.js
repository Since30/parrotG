const sqlite3 = require("sqlite3").verbose();
const { open } = require("sqlite");
const path = require("path");

// Initialisation de dbPromise pour ouvrir la base de données
const dbPromise = open({
  filename: path.join(__dirname, "../data/my-database.sqlite"),
  driver: sqlite3.Database,
});

const getDb = () => {
  return new sqlite3.Database(
    path.join(__dirname, "../data/my-database.sqlite")
  );
};

const initDb = async () => {
  try {
    const db = await dbPromise;

    // Créez les tables si elles n'existent pas déjà
    await db.exec(`
      CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        email TEXT UNIQUE NOT NULL,
        password TEXT NOT NULL
      );

      CREATE TABLE IF NOT EXISTS Vehicle (
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

      CREATE TABLE IF NOT EXISTS avis (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
        comment TEXT,
        createdAt TEXT NOT NULL
      );
    `);

    console.log("Les tables ont été créées avec succès");
  } catch (err) {
    console.error(
      "Erreur lors de l'initialisation de la base de données :",
      err
    );
  }
};

module.exports = {
  dbPromise,
  getDb,
  initDb,
};
