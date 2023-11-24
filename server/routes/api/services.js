const express = require("express");
const { getAllServices } = require("../../controllers/servicesController");
const router = express.Router();

// Route pour récupérer les services
router.get("/", getAllServices);

// Route pour ajouter un nouveau service
router.post("/", (req, res) => {
  res.send("Ajout d’un service");
});

// Exporter le routeur
module.exports = router;
