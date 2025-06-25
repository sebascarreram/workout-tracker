const express = require("express");

const userController = require("./../controllers/userController");
const authController = require("./../controllers/authController");

const router = express.Router();

router
  .route("/")
  .get(userController.getAllUsers)
  .post(userController.createUser);

router.post("/login", authController.login);
router.post("/signup", authController.signup);


router.route("/:id").get(userController.getUser);

module.exports = router;
