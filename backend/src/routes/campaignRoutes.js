const express = require("express");

const {
    createCampaign,
    getCampaigns,
    getCampaignById,
    updateCampaign,
    deleteCampaign
} = require("../controllers/campaignController");

const protect = require("../middleware/authMiddleware");

const router = express.Router();

// Voir toutes les campagnes
router.get("/", getCampaigns);

// Voir une campagne
router.get("/:id", getCampaignById);

// Créer une campagne
router.post("/", protect, createCampaign);

// Modifier une campagne
router.put("/:id", protect, updateCampaign);

// Supprimer une campagne
router.delete("/:id", protect, deleteCampaign);

module.exports = router;