const dbHelper = require("../data/db");
const db = dbHelper.getDb();

const Review = require("../model/avisModel");

// Créer un nouvel avis

const createReview = (req, res) => {
  //const newReview = new Review(req.body);
  const { name, comment, rating, createdAt } = req.body;
  const newReview = new Review(name, comment, rating, createdAt);

  console.log(newReview);
  newReview.save();

  db.serialize(() => {
    db.run(
      "INSERT INTO avis (name, comment, rating, createdAt ) VALUES (?, ?, ?, ?)",
      [
        newReview.name,
        newReview.comment,
        newReview.rating,
        newReview.createdAt,
      ],
      (err) => {
        if (err) {
          console.error("Erreur lors de la création de l'avis :", err.message);
          res.status(500).json({
            message: "Une erreur s'est produite lors de la création de l'avis.",
          });
        } else {
          res.status(201).json({ message: "Avis créé avec succès." });
        }
      }
    );
  });
};

const getAllReviews = (req, res) => {
  db.all("SELECT * FROM avis", (err, reviews) => {
    if (err) {
      console.error("Erreur lors de la récupération des avis :", err.message);
      res.status(500).json({
        message: "Une erreur s'est produite lors de la récupération des avis.",
      });
    } else {
      res.status(200).json(reviews);
    }
  });
};

// Mettre à jour un avis par ID
const updateReview = (req, res) => {
  const { name, comment, createdAt, rating } = req.body;
  const reviewId = req.params.id;

  db.serialize(() => {
    db.run(
      "UPDATE avis SET comment = ?, createdAt = ?, rating = ?, userId = ? WHERE id = ?",
      [name, comment, createdAt, rating, reviewId],
      (err) => {
        if (err) {
          console.error(
            "Erreur lors de la mise à jour de l'avis :",
            err.message
          );
          res.status(500).json({
            message:
              "Une erreur s'est produite lors de la mise à jour de l'avis.",
          });
        } else {
          res.status(200).json({ message: "Avis mis à jour avec succès." });
        }
      }
    );
  });
};

// Supprimer un avis par ID
const deleteReview = (req, res) => {
  const reviewId = req.params.id;

  db.serialize(() => {
    db.run("DELETE FROM avis WHERE id = ?", [reviewId], (err) => {
      if (err) {
        console.error("Erreur lors de la suppression de l'avis :", err.message);
        res.status(500).json({
          message:
            "Une erreur s'est produite lors de la suppression de l'avis.",
        });
      } else {
        res.status(200).json({ message: "Avis supprimé avec succès." });
      }
    });
  });
};

module.exports = {
  createReview,
  getAllReviews,
  updateReview,
  deleteReview,
};
