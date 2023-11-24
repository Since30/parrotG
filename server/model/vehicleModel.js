const dbHelper = require("../data/db");
const db = dbHelper.getDb();

class Vehicle {
  constructor(vehicle) {
    this.id = vehicle.id;
    this.brand = vehicle.brand;
    this.model = vehicle.model;
    this.year = vehicle.year;
    this.color = vehicle.color;
    this.price = vehicle.price;
    this.description = vehicle.description;
    this.image = vehicle.image;
    this.status = vehicle.status;
    this.createdAt = vehicle.createdAt;
    this.updatedAt = vehicle.updatedAt;
  }

  save() {
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }
}

db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS Vehicle (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      brand TEXT NOT NULL,
      model TEXT NOT NULL,l
      year INTEGER NOT NULL,
      color TEXT NOT NULL,
      price REAL NOT NULL,
      description TEXT,
      image TEXT,
      status INTEGER NOT NULL,
      createdAt DATETIME NOT NULL,
      updatedAt DATETIME NOT NULL
    )
  `);

  module.exports = db;
});

db.on("error", (err) => {
  console.error("Erreur de base de données :", err.message);
});

db.on("open", () => {
  console.log("Base de données SQLite3 ouverte avec succès.");
});

db.on("close", () => {
  console.log("Base de données SQLite3 fermée.");
});

module.exports = Vehicle;
