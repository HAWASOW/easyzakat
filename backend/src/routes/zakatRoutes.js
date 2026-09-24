const express = require("express");

const {
    calculateZakat,
    getMyCalculations
} = require("../controllers/zakatController");

const protect = require("../middleware/authMiddleware");

const router = express.Router();

// Calculer la Zakat
router.post("/calculate", protect, calculateZakat);

// Voir mes anciens calculs
router.get("/my-calculations", protect, getMyCalculations);

module.exports = router;