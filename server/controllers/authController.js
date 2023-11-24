const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../model/userModel");

const secretKey = process.env.JWT_SECRET;

const createAdminAccount = async () => {
  try {
    const adminEmail = process.env.ADMIN_EMAIL;
    const adminPassword = process.env.ADMIN_PASSWORD;

    const existingAdmin = await User.findOneByEmail(adminEmail);
    if (existingAdmin) {
      console.log("Le compte administrateur existe déjà.");
      return;
    }

    const hashedPassword = await bcrypt.hash(adminPassword, 10);
    console.log(adminEmail);
    const newAdmin = User.create("Admin", adminEmail, hashedPassword);

    // await newAdmin.save();
    console.log("Compte administrateur créé avec succès.");
  } catch (error) {
    console.error(
      "Erreur lors de la création du compte administrateur :",
      error
    );
  }
};

const authController = {
  signup: async (req, res) => {
    try {
      const { name, email, password } = req.body;

      const existingUser = await User.findOneByEmail(email);
      if (existingUser) {
        return res
          .status(400)
          .json({ message: "L'adresse e-mail est déjà utilisée." });
      }

      const hashedPassword = await bcrypt.hash(password, 10);

      const newUser = User.create(name, email, hashedPassword);

      //await newUser.save();

      const token = jwt.sign(newUser.email, secretKey);

      res.status(201).json({ token });
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ message: "Une erreur s'est produite lors de l'inscription." });
    }
  },

  login: async (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    try {
      const { email, password } = req.body;

      const user = await User.findOneByEmail(email);
      if (!user) {
        return res.status(401).json({
          message: "L'adresse e-mail est incorrecte.",
        });
      }

      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        return res.status(401).json({
          message: "Le mot de passe est incorrect.",
        });
      }
      const _user = {
        id: user.id,
        username: user.name,
      };

      const token = jwt.sign(_user, secretKey, { expiresIn: "1h" });
      // res.status(200).json({ message: "Succès" });
      res.status(200).json({ token });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        message: "Une erreur s'est produite lors de la connexion.",
        errorMessage: error,
      });
    }
  },

  logout: async (req, res) => {
    res.status(200).json({ message: "Déconnexion réussie." });
  },

  checkAuthStatus: async (req, res) => {
    res.status(200).json({ isAuthenticated: true });
  },
};

module.exports = { authController, createAdminAccount };
