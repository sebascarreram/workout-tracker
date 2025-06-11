const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: String,
    email: {
      type: String,
      required: [true, "Please provide your email"],
      lowercase: true, // exAMplE@exAmple.com -> example@example.com,
      maxlength: [50, "Your email must have less or equal then 50 characters"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Please provide a password"],
      minlength: 8,
    }, // se hashea
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
