const express = require("express");
const mongoose = require("mongoose");

require("dotenv").config();

const app = require("./app");
const port = process.env.PORT || 3000;

const server = app.listen(port, () => {
  console.log(`App running on port ${port}... 🔗`);
});

// Rutas
// app.get("/", (req, res) => {
//   res.send("API funcionando");
// });

const DB = process.env.MONGO_URI.replace(
  "<db_password>",
  process.env.PASSWORD_MONGO
);
// console.log("URI Final:", DB); // 👉 muestra la URI que se va a usar


// Connect methods
mongoose
  .connect(DB)
  .then(() => console.log("DB Connection successful 🎉"))
  .catch((err) => {
    console.error("MongoDB connection error:", err);
    process.exit(1); // Para salir si falla
  });

process.on("unhandledRejection", (err) => {
  console.log("UNHANDLED REJECTION 💥 Shutting down");
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});
