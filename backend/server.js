const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userRouter = require("./routes/userRoutes")

require("dotenv").config();

const app = express();

// Middlewares
app.use(cors({ origin: "*" }));
app.use(express.json());

// Rutas
app.get("/", (req, res) => {
  res.send("API funcionando");
});

app.use('/api/v1/users', userRouter);

const DB = process.env.MONGO_URI.replace(
  "<db_password>",
  process.env.PASSWORD_MONGO
);
// console.log("URI Final:", DB); // 👉 muestra la URI que se va a usar

// Conexión MongoDB
mongoose
  .connect(DB)
  .then(() => {
    console.log("Connecting to MongoDB...");
    app.listen(process.env.PORT || 8080, () => {
      console.log(`DB Connection successful 🎉: ${process.env.PORT || 5000}`);
    });
  })
  .catch((err) => console.error(err));
