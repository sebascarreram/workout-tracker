const User = require("./../models/userModel");
const catchAsync = require("./../utils/catchAsync");
const AppError = require("./../utils/appError");
const mongoose = require("mongoose")

// GET ALL USERS => GET Method
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

// GET USER BY ID => GET Method

exports.getUser = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  
  // ✅ Validar que el ID sea un ObjectId válido
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return next(new AppError(`Invalid ID format: ${id}`, 400));
  }
  const user = await User.findById(id);

  if (!user) {
    return next(
      new AppError(`No USER found with that ID: ${req.params.id}`, 404)
    );
  }

  // Status 200 is successed
  res.status(200).json({
    status: "Success found",
    data: { user },
  });
});

// POST USER => POST Method
exports.createUser = catchAsync(async (req, res, next) => {
  const newUser = await User.create(req.body);

  res.status(201).json({
    status: "Created user successfully",
    data: {
      user: newUser,
    },
  });
});
