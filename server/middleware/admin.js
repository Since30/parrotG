// Middleware isAdmin
function isAdmin(req, res, next) {
  if (req.isAuthenticated() && req.user.role === "admin") {
    return next();
  } else {
    return res.status(403).json({ message: "Accès refusé" });
  }
}

// Routes pour les voitures
app.post("/api/cars", isAdmin, (req, res) => {
  res.send("Création d’une voiture");
  console.log(req.body);
});

app.get("/api/cars", isAdmin, (req, res) => {
  res.send("Liste des voitures");
});

app.get("/api/cars/:id", isAdmin, (req, res) => {
  res.send("Détails d’une voiture");
});

app.put("/api/cars/:id", isAdmin, (req, res) => {
  res.send("Modification d’une voiture");
});

app.delete("/api/cars/:id", isAdmin, (req, res) => {
  res.send("Suppression d’une voiture");
});

// Routes pour les utilisateurs
app.post("/api/users", isAdmin, (req, res) => {
  res.send("Création d’un utilisateur");
  console.log(req.body);
});

app.get("/api/users", isAdmin, (req, res) => {
  res.send("Liste des utilisateurs");
});

app.get("/api/users/:id", isAdmin, (req, res) => {
  res.send("Détails d’un utilisateur");
});

app.put("/api/users/:id", isAdmin, (req, res) => {
  res.send("Modification d’un utilisateur");
});

app.delete("/api/users/:id", isAdmin, (req, res) => {
  res.send("Suppression d’un utilisateur");
});
