const express = require("express");
const { getAllContacts } = require("../../controllers/contactController");
const router = express.Router();

router.get("/", getAllContacts);
// Recevoir une demande de contact
router.post("/", (req, res) => {
  // Ici, vous traiterez la demande de contact
  res.send("Demande de contact reçue");
});

module.exports = router;
