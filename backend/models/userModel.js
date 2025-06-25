const mongoose = require("mongoose");
const validator = require("validator");

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
    },
    passwordConfirm: {
      type: String,
      required: [true, "Please confirm ur password"],
      validate: {
        // This only works on CREATE and SAVE
        validator: function (el) {
          return el === this.password;
        },
        message: "Passwords are not same",
      },
    },
  },
  { timestamps: true }
);

userSchema.methods.correctPassword = async function(
  candidatePassword,
  userPassword
) {
  return await bcrypt.compare(candidatePassword, userPassword);
};

const User = mongoose.model("User", userSchema);

module.exports = User;
