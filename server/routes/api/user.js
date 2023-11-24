const express = require("express");
const { getAllUsers } = require("../../controllers/usersController");
const { login } = require("../../controllers/authController");

const router = express.Router();

// Route pour obtenir la liste des utilisateurs
router.get("/", getAllUsers);

// Route pour créer un nouvel utilisateur
router.post("/", (req, res) => {
  res.send("Création d’un utilisateur");
  console.log(req.body);
});

// Route pour créer un nouvel utilisateur
router.post("/login", (req, res) => {
  login(req, res);
});

module.exports = router;
