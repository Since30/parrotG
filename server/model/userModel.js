const dbHelper = require("../data/db");

const dbPromise = dbHelper.dbPromise;

const User = {
  create: async (name, email, password) => {
    const db = await dbPromise;
    const query = "INSERT INTO users (name, email, password) VALUES (?, ?, ?)";
    const params = [name, email, password];
    await db.run(query, params);
  },

  findOneByEmail: async (email) => {
    const db = await dbPromise;
    const query = "SELECT * FROM users WHERE email = ? LIMIT 1";
    const params = [email];
    return db.get(query, params);
  },

  save: () => {},
  // Ajoutez la méthode findOne ici pour rechercher un utilisateur par ID ou d'autres critères si nécessaire
};

module.exports = User;
