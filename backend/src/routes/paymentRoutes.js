const express = require("express");

const {
    createPayment,
    getMyPayments,
    getPaymentById,
    updatePaymentStatus
} = require("../controllers/paymentController");

const protect = require("../middleware/authMiddleware");

const router = express.Router();


// Créer un paiement
router.post("/", protect, createPayment);


// Récupérer mes paiements
router.get("/my-payments", protect, getMyPayments);


// Récupérer un paiement par son ID
router.get("/:id", protect, getPaymentById);


// Modifier le statut d'un paiement
router.put("/:id/status", protect, updatePaymentStatus);


module.exports = router;