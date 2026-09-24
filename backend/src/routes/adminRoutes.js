const express = require("express");

const {
    getUsers
} = require("../controllers/adminController");

const {
    getCampaigns,
    createCampaign
} = require("../controllers/adminCampaignController");


const protect = require("../middleware/authMiddleware");

const router = express.Router();

// Utilisateurs
router.get("/users", protect, getUsers);

// Campagnes
router.get("/campaigns", protect, getCampaigns);
router.post("/campaigns", protect, createCampaign);

module.exports = router;