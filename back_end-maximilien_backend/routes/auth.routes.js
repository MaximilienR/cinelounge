const {
  checkRolesExisted,
  checkDuplicateUserNameOrEmail,
} = require("../middleware");
const router = require("express").Router();
const authController = require("../controllers/auth.controller");

router.get("/check/:token", authController.checkMail);

router.post(
  "/signup",
  [checkDuplicateUserNameOrEmail, checkRolesExisted],
  authController.signup
);
router.post("/signin", authController.signin);

router.post("/updatePassword", authController.updatePassword);

router.get("/check/:token", authController.checkMail);

module.exports = router;
