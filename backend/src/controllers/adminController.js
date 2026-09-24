const User = require("../models/User");

// Récupérer tous les utilisateurs
const getUsers = async (req, res) => {
    try {

        // Vérifier le rôle de l'utilisateur connecté
        if (req.user.role !== "admin" && req.user.role !== "superadmin") {
            return res.status(403).json({
                message: "Accès réservé aux administrateurs"
            });
        }

        const users = await User.find()
            .select("-password")
            .sort({ createdAt: -1 });

        res.json({
            count: users.length,
            users
        });

    } catch (error) {
        console.error("Erreur récupération utilisateurs :", error);

        res.status(500).json({
            message: "Erreur lors de la récupération des utilisateurs",
            error: error.message
        });
    }
};

module.exports = {
    getUsers
};