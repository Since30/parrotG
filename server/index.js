const db = require("./data/db");
const cors = require("cors");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
require("dotenv").config();

const jwt = require("jsonwebtoken");
const secret = process.env.JWT_SECRET;

app.use(bodyParser.json());

const servicesRoutes = require("./routes/api/services");
const vehiclesRoutes = require("./routes/api/vehicles");
const contactRoutes = require("./routes/api/contact");
const usersRoutes = require("./routes/api/user");
const authRoutes = require("./routes/api/auth");
const avisRoutes = require("./routes/api/avis");

app.use(cors());
db.initDb();

app.use(bodyParser.json());
app.use("/auth", authRoutes);
app.use("/api/services", servicesRoutes);
app.use("/api/vehicles", vehiclesRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/users", usersRoutes);
app.use("/api/avis", avisRoutes);

app.use(express.json());

const authController = require("./controllers/authController");
authController.createAdminAccount();

const user = {
  id: 1,
  username: "test",
};

// Créer le token JWT
const token = jwt.sign(user, secret, { expiresIn: "1h" });

// Vérifier le token JWT
jwt.verify(token, secret, (err, decoded) => {
  if (err) {
    console.error("Erreur de vérification du JWT :", err);
  } else {
    console.log("Données du JWT décryptées :", decoded);
  }
});

console.log("JWT :", token);

app.get("/", (req, res) => {
  res.send("Bienvenue sur l'api garage V parrot!");
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
