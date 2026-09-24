const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema(
    {
        donation: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Donation",
            required: true
        },

        donor: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },

        amount: {
            type: Number,
            required: true,
            min: 1
        },

        provider: {
            type: String,
            enum: [
                "wave",
                "orange_money",
                "free_money",
                "card",
                "bank_transfer"
            ],
            required: true
        },

        status: {
            type: String,
            enum: [
                "initiated",
                "pending",
                "success",
                "failed"
            ],
            default: "initiated"
        },

        transactionReference: {
            type: String,
            default: ""
        },

        fees: {
            type: Number,
            default: 0,
            min: 0
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("Payment", paymentSchema);