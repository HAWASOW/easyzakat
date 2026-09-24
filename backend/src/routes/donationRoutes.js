const express = require("express");

const {
    createDonation,
    getDonations,
    getMyDonations,
    getDonationById,
    updateDonationStatus
} = require("../controllers/donationController");

const protect = require("../middleware/authMiddleware");

const router = express.Router();

// Voir tous les dons
router.get("/", getDonations);

// Voir mes dons
router.get("/my-donations", protect, getMyDonations);

// Voir un don par ID
router.get("/:id", getDonationById);

// Créer un don
router.post("/", protect, createDonation);

// Modifier le statut
router.put("/:id/status", protect, updateDonationStatus);

module.exports = router;