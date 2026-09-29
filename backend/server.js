const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const connectDB = require("./src/config/db");
const authRoutes = require("./src/routes/authRoutes");
const zakatRoutes = require("./src/routes/zakatRoutes");
const campaignRoutes = require("./src/routes/campaignRoutes");
const donationRoutes = require("./src/routes/donationRoutes");
const paymentRoutes = require("./src/routes/paymentRoutes");
const adminRoutes = require("./src/routes/adminRoutes");


dotenv.config();

const app = express();

// Connexion MongoDB
connectDB();

// Middlewares
app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/zakat", zakatRoutes);
app.use("/api/campaigns", campaignRoutes);
app.use("/api/donations", donationRoutes);
app.use("/api/payments", paymentRoutes);
app.use("/api/admin", adminRoutes);



// Route de test
app.get("/", (req, res) => {
    res.json({
        message: "API EasyZakat fonctionne correctement"
    });
});

// Port
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Serveur EasyZakat lancé sur le port ${PORT}`);
});