const dbHelper = require("../data/db");
const db = dbHelper.getDb();

class Review {
  constructor(name, comment, rating, createdAt) {
    this.name = name;
    this.comment = comment;
    this.rating = rating;
    this.createdAt = createdAt;
  }

  // Méthode pour sauvegarder l'avis dans la base de données
  save() {
    db.serialize(() => {
      db.run(`
      CREATE TABLE IF NOT EXISTS avis (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
        comment TEXT,
        createdAt TEXT NOT NULL
      )
      `);

      module.exports = db;
    });
    // Utilisez ici votre logique d'insertion SQL
  }

  // Vous pouvez également ajouter d'autres méthodes utiles ici
}
module.exports = Review;

db.on("error", (err) => {
  console.error("Erreur de base de données :", err.message);
});

db.on("open", () => {
  console.log("Base de données SQLite3 ouverte avec succès.");
});

db.on("close", () => {
  console.log("Base de données SQLite3 fermée.");
});
