const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
// const xss = require('xss');
const rateLimit = require("express-rate-limit");
const mongoSanitize = require("express-mongo-sanitize");

const AppError = require("./utils/appError");
const globalErrorHandler = require("./controllers/errorController");

const userRouter = require("./routes/userRoutes");
const workoutRouter = require("./routes/workoutRoutes");
const cors = require("cors");

const app = express();

// Set security HTTP headers
app.use(helmet());

app.use(cors({ origin: "http://localhost:5173", credentials: true }));

// Only for development, NOT production
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev")); // ⬆️
}

const limiter = rateLimit({
  // 100 requests from the same IP in 1 hour
  max: 100,
  // window Milliseconds
  // 1 hour
  windowMs: 60 * 60 * 1000,
  message: "Too many requests from this IP, please try again later in an hour!",
});
// app.use("/api", limiter);

// Data sanitization againist NoSQL query injection
app.use(mongoSanitize());

// Data sanitization againist XSS
// app.use(xss());

// Body parser, reading data from body int req.body
// for application/json
// app.use(express.json());
app.use(express.json({ limit: "10kb" }));

app.use("/api/v1/users", userRouter);
app.use("/api/v1/workouts", workoutRouter);

app.all("*", (req, res, next) => {
  ////// There is three(3) ways for response Error
  // 1)
  // res.status(404).json({
  //   status: 'fail',
  //   message: `Can't find ${req.originalUrl} on this server!!.`
  // });
  //
  // 2)
  // const err = new Error(`Can't find ${req.originalUrl} on this server!!.`);
  // err.status = 'fail';
  // err.statusCode = 404;
  // next(err);
  //
  // 3)
  // AppError is a file called appError.js in 'utils' folder
  next(new AppError(`Can't find ${req.originalUrl} on this server!!.`, 404));
});

app.use(globalErrorHandler);

module.exports = app;
