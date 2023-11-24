const dbHelper = require("../data/db");
const db = dbHelper.getDb();

const Vehicle = require("../model/vehicleModel");

// Créer un nouveau véhicule
const createVehicle = (req, res) => {
  const newVehicle = new Vehicle(req.body);
  newVehicle.year = parseInt(newVehicle.year);
  newVehicle.price = parseFloat(newVehicle.price);

  newVehicle.save();

  db.serialize(() => {
    db.run(
      "INSERT INTO Vehicle (brand, model, year, color, price, description, image, status, createdAt, updatedAt) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
      [
        newVehicle.brand,
        newVehicle.model,
        newVehicle.year,
        newVehicle.color,
        newVehicle.price,
        newVehicle.description,
        newVehicle.image,
        newVehicle.status,
        newVehicle.createdAt,
        newVehicle.updatedAt,
      ],
      (err) => {
        if (err) {
          console.error(
            "Erreur lors de la création du véhicule :",
            err.message
          );
          res.status(500).json({
            message:
              "Une erreur s'est produite lors de la création du véhicule.",
          });
        } else {
          res.status(201).json({ message: "Véhicule créé avec succès." });
        }
      }
    );
  });
};

// Obtenir la liste de tous les véhicules
const getAllVehicles = (req, res) => {
  db.all("SELECT * FROM Vehicle", (err, vehicles) => {
    if (err) {
      console.error(
        "Erreur lors de la récupération des véhicules :",
        err.message
      );
      res.status(500).json({
        message:
          "Une erreur s'est produite lors de la récupération des véhicules.",
      });
    } else {
      res.status(200).json(vehicles);
    }
  });
};
const updateVehicle = (req, res) => {
  const vehicleId = req.params.id;
  const updatedData = req.body; // Les données mises à jour sont dans le corps de la requête

  db.run(
    "UPDATE Vehicle SET brand=?, model=?, year=?, color=?, price=?, description=?, image=?, status=?, updatedAt=? WHERE id=?",
    [
      updatedData.brand,
      updatedData.model,
      updatedData.year,
      updatedData.color,
      updatedData.price,
      updatedData.description,
      updatedData.image,
      updatedData.status,
      updatedData.updatedAt,
      vehicleId,
    ],

    Vehicle.findByIdAndUpdate(vehicleId, updatedData, (err, updatedVehicle) => {
      if (err) {
        console.error(
          "Erreur lors de la mise à jour du véhicule :",
          err.message
        );
        res.status(500).json({
          message:
            "Une erreur s'est produite lors de la mise à jour du véhicule.",
        });
      } else {
        res.status(200).json(updatedVehicle);
      }
    })
  );
};

const deleteVehicle = (req, res) => {
  const vehicleId = req.params.id;

  db.run("DELETE FROM Vehicle WHERE id=?", [vehicleId], (err) => {
    if (err) {
      console.error("Erreur lors de la suppression du véhicule :", err.message);
      res
        .status(500)
        .json({
          message:
            "Une erreur s'est produite lors de la suppression du véhicule.",
        });
    } else {
      res.status(200).json({ message: "Véhicule supprimé avec succès." });
    }
  });
};

module.exports = {
  updateVehicle,
  createVehicle,
  deleteVehicle,
  getAllVehicles,
};
