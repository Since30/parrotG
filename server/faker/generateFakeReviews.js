const { faker } = require("@faker-js/faker");
const dbHelper = require("../data/db");
const db = dbHelper.getDb();

db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS avis (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      userId INTEGER NOT NULL,
      rating INTEGER NOT NULL,
      comment TEXT,
      createdAt TEXT NOT NULL
    )
  `),
    (err) => {
      if (err) {
        console.error("Erreur lors de la création de la table", err);
      } else {
        console.log("Déjà crée");
      }
    };

  // Générer et insérer 10 fausses critiques
  for (let i = 0; i < 10; i++) {
    const fakeReview = {
      comment: faker.lorem.sentence(),
      createdAt: new Date().toISOString(),
      rating: faker.random.number({ min: 1, max: 5 }),
    };

    console.log(fakeReview);

    db.run(
      `
      INSERT INTO avis (comment, createdAt, rating)
      VALUES (?, ?, ?)
    `,
      [fakeReview.comment, fakeReview.createdAt, fakeReview.rating],
      (err) => {
        if (err) {
          console.error("Erreur lors de l'insertion de la critique :", err);
        } else {
          console.log(`Avis ${i + 1} inséré avec succès.`);
        }
      }
    );
  }
});

db.close();
