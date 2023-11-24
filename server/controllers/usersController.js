const { dbPromise } = require("../data/db");

async function getAllUsers(req, res) {
  try {
    const db = await dbPromise;
    const users = await db.all("SELECT * FROM users");
    res.json(users);
  } catch (err) {
    console.error("Erreur lors de la récupération des utilisateurs :", err);
    res
      .status(500)
      .json({ error: "Erreur lors de la récupération des utilisateurs." });
  }
}

module.exports = {
  getAllUsers,
};
