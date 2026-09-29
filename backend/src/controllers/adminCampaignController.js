const Campaign = require("../models/Campaign");

// Récupérer toutes les campagnes
const getCampaigns = async (req, res) => {
    try {

        // Vérifier que l'utilisateur est administrateur
        if (req.user.role !== "admin" && req.user.role !== "superadmin") {
            return res.status(403).json({
                message: "Accès réservé aux administrateurs"
            });
        }

        const campaigns = await Campaign.find()
            .sort({ createdAt: -1 });

        res.json({
            count: campaigns.length,
            campaigns
        });

    } catch (error) {
        console.error("Erreur récupération campagnes :", error);

        res.status(500).json({
            message: "Erreur lors de la récupération des campagnes",
            error: error.message
        });
    }
};
// Créer une campagne
const createCampaign = async (req, res) => {
    try {
        const {
            name,
            organization,
            category,
            description,
            objective,
            startDate,
            endDate,
            location,
            media
        } = req.body;

        if (
            !name ||
            !organization ||
            !category ||
            !description ||
            !objective ||
            !startDate ||
            !endDate
        ) {
            return res.status(400).json({
                message: "Tous les champs obligatoires doivent être remplis"
            });
        }

        const campaign = await Campaign.create({
            name,
            organization,
            category,
            description,
            objective,
            startDate,
            endDate,
            location,
            media
        });

        res.status(201).json({
            message: "Campagne créée avec succès",
            campaign
        });

    } catch (error) {
        console.error("Erreur création campagne :", error);

        res.status(500).json({
            message: "Erreur lors de la création de la campagne",
            error: error.message
        });
    }
};
module.exports = {
    getCampaigns,
    createCampaign
};