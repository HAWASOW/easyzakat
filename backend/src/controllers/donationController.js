const Donation = require("../models/Donation");
const Campaign = require("../models/Campaign");

// ==========================================
// CRÉER UN DON
// ==========================================

const createDonation = async (req, res) => {
    try {
        const {
            campaign,
            type,
            amount,
            anonymous,
            paymentMethod
        } = req.body;

        // Vérification des champs obligatoires
        if (!type || amount === undefined) {
            return res.status(400).json({
                message: "Le type et le montant du don sont obligatoires"
            });
        }

        // Vérifier le montant
        if (Number(amount) <= 0) {
            return res.status(400).json({
                message: "Le montant du don doit être supérieur à 0"
            });
        }

        // Si une campagne est indiquée, vérifier qu'elle existe
        if (campaign) {
            const existingCampaign = await Campaign.findById(campaign);

            if (!existingCampaign) {
                return res.status(404).json({
                    message: "Campagne introuvable"
                });
            }
        }

        // Créer le don
        const donation = await Donation.create({
            donor: req.user.id,
            campaign: campaign || null,
            type,
            amount: Number(amount),
            anonymous: anonymous || false,
            paymentMethod: paymentMethod || null,
            status: "pending"
        });

        res.status(201).json({
            message: "Don créé avec succès",
            donation
        });

    } catch (error) {
        console.error("Erreur création don :", error);

        res.status(500).json({
            message: "Erreur lors de la création du don",
            error: error.message
        });
    }
};


// ==========================================
// RÉCUPÉRER TOUS LES DONS
// ==========================================

const getDonations = async (req, res) => {
    try {
        const donations = await Donation.find()
            .populate(
                "donor",
                "firstName lastName email role"
            )
            .populate(
                "campaign",
                "name category objective collected status"
            )
            .sort({ createdAt: -1 });

        res.json({
            count: donations.length,
            donations
        });

    } catch (error) {
        console.error("Erreur récupération dons :", error);

        res.status(500).json({
            message: "Erreur lors de la récupération des dons",
            error: error.message
        });
    }
};


// ==========================================
// RÉCUPÉRER MES DONS
// ==========================================

const getMyDonations = async (req, res) => {
    try {
        const donations = await Donation.find({
            donor: req.user.id
        })
            .populate(
                "campaign",
                "name category objective collected status"
            )
            .sort({ createdAt: -1 });

        res.json({
            count: donations.length,
            donations
        });

    } catch (error) {
        console.error("Erreur récupération de mes dons :", error);

        res.status(500).json({
            message: "Erreur lors de la récupération de vos dons",
            error: error.message
        });
    }
};


// ==========================================
// RÉCUPÉRER UN DON PAR ID
// ==========================================

const getDonationById = async (req, res) => {
    try {
        const donation = await Donation.findById(req.params.id)
            .populate(
                "donor",
                "firstName lastName email role"
            )
            .populate(
                "campaign",
                "name category objective collected status"
            );

        if (!donation) {
            return res.status(404).json({
                message: "Don introuvable"
            });
        }

        res.json({
            donation
        });

    } catch (error) {
        console.error("Erreur récupération don :", error);

        res.status(500).json({
            message: "Erreur lors de la récupération du don",
            error: error.message
        });
    }
};


// ==========================================
// MODIFIER LE STATUT D'UN DON
// ==========================================

const updateDonationStatus = async (req, res) => {
    try {
        const { status } = req.body;

        const allowedStatuses = [
            "pending",
            "success",
            "failed"
        ];

        if (!allowedStatuses.includes(status)) {
            return res.status(400).json({
                message: "Statut de don invalide"
            });
        }

        const donation = await Donation.findById(
            req.params.id
        );

        if (!donation) {
            return res.status(404).json({
                message: "Don introuvable"
            });
        }

        donation.status = status;

        await donation.save();

        res.json({
            message: "Statut du don modifié avec succès",
            donation
        });

    } catch (error) {
        console.error("Erreur modification statut don :", error);

        res.status(500).json({
            message: "Erreur lors de la modification du statut",
            error: error.message
        });
    }
};


// ==========================================
// EXPORT
// ==========================================

module.exports = {
    createDonation,
    getDonations,
    getMyDonations,
    getDonationById,
    updateDonationStatus
};