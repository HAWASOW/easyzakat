const mongoose = require("mongoose");

const donationSchema = new mongoose.Schema(
    {
        donor: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },

        campaign: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Campaign",
            default: null
        },

        type: {
            type: String,
            enum: [
                "zakat",
                "sadaqa",
                "ramadan",
                "urgence_sociale"
            ],
            required: true
        },

        amount: {
            type: Number,
            required: true,
            min: 1
        },

        anonymous: {
            type: Boolean,
            default: false
        },

        status: {
            type: String,
            enum: [
                "pending",
                "success",
                "failed"
            ],
            default: "pending"
        },

        paymentMethod: {
            type: String,
            enum: [
                "wave",
                "orange_money",
                "free_money",
                "card",
                "bank_transfer"
            ],
            default: null
        },

        transactionReference: {
            type: String,
            default: ""
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model(
    "Donation",
    donationSchema
);