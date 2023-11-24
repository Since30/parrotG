const express = require("express");
// Ancien code : const { getAllVehicles } = require("../../controllers/vehiculesController");
const {
  getAllVehicles,
  createVehicle,
} = require("../../controllers/vehiculesController");
const router = express.Router();

// Route pour récupérer les véhicules d'occasion
router.get("/", getAllVehicles);

// Route pour ajouter un nouveau véhicule
router.post("/", (req, res) => {
  // Je pense que tu dois faire comme ça:
  createVehicle(req, res);
  //res.send("Ajout d’un véhicule d’occasion avec succes!");
});

router.put("/vehicles/:id", (req, res) => {
  res.send(`Modification du véhicule d’occasion ${req.params.id}`);
});

router.delete("/vehicles:id", (req, res) => {
  res.send(`Suppression du véhicule d’occasion ${req.params.id}`);
});

// Exporter le routeur
module.exports = router;
