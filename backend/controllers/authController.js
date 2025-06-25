const User = require("./../models/userModel");
const catchAsync = require("./../utils/catchAsync");
const AppError = require("./../utils/appError");

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

const createSendToken = (user, statusCode, res) => {
  const token = signToken(user._id);

  const cookieOptions = {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
  };
  if (process.env.NODE_ENV === "production") cookieOptions.secure = true;

  res.cookie("jwt", token, cookieOptions);

  // Remove password from output
  user.password = undefined;

  res.status(statusCode).json({
    status: "success",
    token,
    data: {
      user,
    },
  });
};

exports.login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;

  // 1. Verificar que lleguen email y password
  if (!email || !password) {
    return next(new AppError("Por favor, proporciona email y contraseña", 400));
  }

  // 2. Buscar el usuario por email
  const user = await User.findOne({ email }).select("+password");

  if (!user || !(await bcrypt.compare(password, user.password))) {
    return next(new AppError("Email o contraseña incorrectos", 401));
  }

  // 3. Si todo bien
  createSendToken(user, 200, res);
});

exports.signup = catchAsync(async (req, res, next) => {

  const hashedPassword = await bcrypt.hash(req.body.password, 12);

  const newUser = await User.create({
    name: req.body.name,
    email: req.body.email,
    password: hashedPassword,
    passwordConfirm: hashedPassword,
  });
  createSendToken(newUser, 201, res);
});
