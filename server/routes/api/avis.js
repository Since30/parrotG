const express = require("express");
const router = express.Router();
const avisController = require("../../controllers/avisController");

router.get("/", avisController.getAllReviews);
// router.get("/:id", avisController.getOneReview);
router.post("/", avisController.createReview);
router.put("/:id", avisController.updateReview);
router.delete("/:id", avisController.deleteReview);

module.exports = router;
