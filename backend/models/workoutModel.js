const mongoose = require("mongoose");

const workoutSchema = new mongoose.Schema(
  {
    date: { type: Date, required: [true, 'A date workout is required'] },
    type: { type: String, required: [true, 'A type workout is required'] }, // CrossFit, pesas, etc.
    exercises: [
      {
        name: String,
        rounds: Number,
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
