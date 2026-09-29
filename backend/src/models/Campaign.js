const mongoose = require("mongoose");

const campaignSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true
        },

        organization: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },

        category: {
            type: String,
            enum: [
                "zakat",
                "sadaqa",
                "ramadan",
                "urgence_sociale"
            ],
            required: true
        },

        description: {
            type: String,
            required: true,
            trim: true
        },

        objective: {
            type: Number,
            required: true,
            min: 0
        },

        collected: {
            type: Number,
            default: 0,
            min: 0
        },

        startDate: {
            type: Date,
            required: true
        },

        endDate: {
            type: Date,
            required: true
        },

        location: {
            type: String,
            trim: true
        },

        status: {
            type: String,
            enum: [
                "draft",
                "validation",
                "active",
                "terminated"
            ],
            default: "draft"
        },

        media: {
            type: String,
            default: ""
        },

        impactReport: {
            type: String,
            default: ""
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model(
    "Campaign",
    campaignSchema
);