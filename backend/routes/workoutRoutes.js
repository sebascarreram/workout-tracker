const express = require("express");

const workoutController = require("./../controllers/workoutController");

const router = express.Router();

router
  .route("/")
  .get(workoutController.getAllWorkouts)
  .post(workoutController.createWorkout);

// router.route("/:id").get(userController.getWorkout);

module.exports = router;
