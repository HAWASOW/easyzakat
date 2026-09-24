const mongoose = require("mongoose");

const zakatCalculationSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },

        // Actifs
        cash: {
            type: Number,
            default: 0,
            min: 0
        },

        bankBalance: {
            type: Number,
            default: 0,
            min: 0
        },

        savings: {
            type: Number,
            default: 0,
            min: 0
        },

        gold: {
            type: Number,
            default: 0,
            min: 0
        },

        silver: {
            type: Number,
            default: 0,
            min: 0
        },

        tradeGoods: {
            type: Number,
            default: 0,
            min: 0
        },

        receivables: {
            type: Number,
            default: 0,
            min: 0
        },

        otherAssets: {
            type: Number,
            default: 0,
            min: 0
        },

        // Déductions
        shortTermDebt: {
            type: Number,
            default: 0,
            min: 0
        },

        immediateObligations: {
            type: Number,
            default: 0,
            min: 0
        },

        // Résultats du calcul
        totalAssets: {
            type: Number,
            default: 0
        },

        totalDeductions: {
            type: Number,
            default: 0
        },

        zakatableBase: {
            type: Number,
            default: 0
        },

        zakatAmount: {
            type: Number,
            default: 0
        },

        nisab: {
            type: Number,
            required: true
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model(
    "ZakatCalculation",
    zakatCalculationSchema
);