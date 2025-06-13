const Workout = require("./../models/workoutModel");
const catchAsync = require("./../utils/catchAsync");
const AppError = require("./../utils/appError");

// GET ALL WORKOUT => GET Method
exports.getAllWorkouts = catchAsync(async (req, res, next) => {
  const workouts = await Workout.find();

  if (!workouts || workouts.length === 0) {
    return next(new AppError("There is not workout yet", 404));
  }

  res.status(200).json({
    status: "Success",
    results: workouts.length,
    data: { workouts },
  });
});
