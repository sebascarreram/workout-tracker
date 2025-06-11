const mongoose = require("mongoose");

const workoutSchema = new mongoose.Schema(
  {
    date: { type: Date, required: true },
    type: { type: String, required: true }, // CrossFit, pesas, etc.
    exercises: [
      {
        name: String,
        reps: Number,
        weight: Number,
        duration: String,
      },
    ],
    notes: String,
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);

const workout = mongoose.model("Workout", workoutSchema);

module.exports = workout
