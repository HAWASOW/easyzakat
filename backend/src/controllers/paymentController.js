const Payment = require("../models/Payment");
const Donation = require("../models/Donation");


// Créer un paiement
const createPayment = async (req, res) => {
    try {
        const { donation, provider, fees } = req.body;

        if (!donation || !provider) {
            return res.status(400).json({
                message: "Le don et le moyen de paiement sont obligatoires"
            });
        }

        // Vérifier que le don existe
        const existingDonation = await Donation.findById(donation);

        if (!existingDonation) {
            return res.status(404).json({
                message: "Don introuvable"
            });
        }

        // Vérifier que le don appartient à l'utilisateur connecté
        if (existingDonation.donor.toString() !== req.user.id) {
            return res.status(403).json({
                message: "Vous ne pouvez pas payer ce don"
            });
        }

        const payment = await Payment.create({
            donation: existingDonation._id,
            donor: req.user.id,
            amount: existingDonation.amount,
            provider,
            fees: fees || 0,
            status: "initiated"
        });

        res.status(201).json({
            message: "Paiement créé avec succès",
            payment
        });

    } catch (error) {
        console.error("Erreur création paiement :", error);

        res.status(500).json({
            message: "Erreur lors de la création du paiement",
            error: error.message
        });
    }
};


// Récupérer mes paiements
const getMyPayments = async (req, res) => {
    try {
        const payments = await Payment.find({
            donor: req.user.id
        })
        .populate("donation")
        .sort({ createdAt: -1 });

        res.json({
            count: payments.length,
            payments
        });

    } catch (error) {
        console.error("Erreur récupération paiements :", error);

        res.status(500).json({
            message: "Erreur lors de la récupération des paiements",
            error: error.message
        });
    }
};


// Récupérer un paiement par son ID
const getPaymentById = async (req, res) => {
    try {
        const payment = await Payment.findById(req.params.id)
            .populate("donation")
            .populate("donor", "firstName lastName email");

        if (!payment) {
            return res.status(404).json({
                message: "Paiement introuvable"
            });
        }

        // Vérifier que le paiement appartient à l'utilisateur connecté
        if (payment.donor._id.toString() !== req.user.id) {
            return res.status(403).json({
                message: "Accès non autorisé"
            });
        }

        res.json({
            payment
        });

    } catch (error) {
        console.error("Erreur récupération paiement :", error);

        res.status(500).json({
            message: "Erreur lors de la récupération du paiement",
            error: error.message
        });
    }
};


// Modifier le statut d'un paiement
const updatePaymentStatus = async (req, res) => {
    try {
        const { status, transactionReference } = req.body;

        const allowedStatuses = [
            "initiated",
            "pending",
            "success",
            "failed"
        ];

        if (!allowedStatuses.includes(status)) {
            return res.status(400).json({
                message: "Statut de paiement invalide"
            });
        }

        const payment = await Payment.findById(req.params.id);

        if (!payment) {
            return res.status(404).json({
                message: "Paiement introuvable"
            });
        }

        if (payment.donor.toString() !== req.user.id) {
            return res.status(403).json({
                message: "Accès non autorisé"
            });
        }

        payment.status = status;

        if (transactionReference) {
            payment.transactionReference = transactionReference;
        }

        await payment.save();

        // Synchroniser le statut du don
        const donation = await Donation.findById(payment.donation);

        if (donation) {
            if (status === "success") {
                donation.status = "success";
            } else if (status === "failed") {
                donation.status = "failed";
            } else {
                donation.status = "pending";
            }

            if (transactionReference) {
                donation.transactionReference = transactionReference;
            }

            await donation.save();
        }

        res.json({
            message: "Statut du paiement modifié avec succès",
            payment
        });

    } catch (error) {
        console.error("Erreur modification paiement :", error);

        res.status(500).json({
            message: "Erreur lors de la modification du paiement",
            error: error.message
        });
    }
};


module.exports = {
    createPayment,
    getMyPayments,
    getPaymentById,
    updatePaymentStatus
};