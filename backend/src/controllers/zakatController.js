const ZakatCalculation = require("../models/ZakatCalculation");

// Calculer la Zakat
const calculateZakat = async (req, res) => {
    try {
        const {
            cash,
            bankBalance,
            savings,
            gold,
            silver,
            tradeGoods,
            receivables,
            otherAssets,
            shortTermDebt,
            immediateObligations,
            nisab
        } = req.body;

        // Vérification du Nisab
        if (nisab === undefined || nisab === null) {
            return res.status(400).json({
                message: "Le Nisab est obligatoire"
            });
        }

        // Calcul du total des actifs
        const totalAssets =
            Number(cash || 0) +
            Number(bankBalance || 0) +
            Number(savings || 0) +
            Number(gold || 0) +
            Number(silver || 0) +
            Number(tradeGoods || 0) +
            Number(receivables || 0) +
            Number(otherAssets || 0);

        // Calcul du total des déductions
        const totalDeductions =
            Number(shortTermDebt || 0) +
            Number(immediateObligations || 0);

        // Base zakatable
        const zakatableBase = Math.max(
            totalAssets - totalDeductions,
            0
        );

        // Taux de Zakat : 2,5 %
        const zakatAmount = zakatableBase * 0.025;

        // Vérification du Nisab
        const eligibleForZakat = zakatableBase >= Number(nisab);

        // Enregistrer le calcul dans MongoDB
        const calculation = await ZakatCalculation.create({
            user: req.user.id,

            cash: Number(cash || 0),
            bankBalance: Number(bankBalance || 0),
            savings: Number(savings || 0),
            gold: Number(gold || 0),
            silver: Number(silver || 0),
            tradeGoods: Number(tradeGoods || 0),
            receivables: Number(receivables || 0),
            otherAssets: Number(otherAssets || 0),

            shortTermDebt: Number(shortTermDebt || 0),
            immediateObligations: Number(immediateObligations || 0),

            totalAssets,
            totalDeductions,
            zakatableBase,
            zakatAmount,
            nisab: Number(nisab)
        });

        res.status(201).json({
            message: "Calcul de la Zakat effectué avec succès",

            result: {
                totalAssets,
                totalDeductions,
                zakatableBase,
                nisab: Number(nisab),
                zakatRate: 2.5,
                zakatAmount,
                eligibleForZakat
            },

            calculationId: calculation._id
        });

    } catch (error) {
        console.error("Erreur calcul Zakat :", error);

        res.status(500).json({
            message: "Erreur lors du calcul de la Zakat",
            error: error.message
        });
    }
};


// Récupérer les calculs de l'utilisateur
const getMyCalculations = async (req, res) => {
    try {
        const calculations = await ZakatCalculation
            .find({ user: req.user.id })
            .sort({ createdAt: -1 });

        res.json({
            count: calculations.length,
            calculations
        });

    } catch (error) {
        res.status(500).json({
            message: "Erreur lors de la récupération des calculs",
            error: error.message
        });
    }
};


module.exports = {
    calculateZakat,
    getMyCalculations
};