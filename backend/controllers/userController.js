const User = require("./../models/userModel");
const catchAsync = require("./../utils/catchAsync");

// GET ALL USERS
exports.getAllUsers = catchAsync(async (req, res, next) => {
  const users = await User.find();

  if (!users || users.length === 0) {
    return next(new AppError("There is not users yet", 404));
  }

  res.status(200).json({
    status: "Success",
    results: users.length,
    data: { users },
  });
});

// POST USER
exports.createUser = catchAsync(async (req, res, next) => {
  const newUser = await User.create(req.body);

  res.status(201).json({
    status: "Created user successfully",
    data: {
      user: newUser,
    },
  });
});
