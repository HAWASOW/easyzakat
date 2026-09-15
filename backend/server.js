const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());

// Route de test
app.get("/", (req, res) => {
  res.json({
    message: "API EasyZakat fonctionne correctement"
  });
});

// Démarrage du serveur
app.listen(PORT, () => {
  console.log(`🚀 Serveur EasyZakat lancé sur http://localhost:${PORT}`);
});