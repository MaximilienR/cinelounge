const router = require("express").Router();
const userController = require("../controllers/SignUp.controller");
router.post("/register", userController.SignUp);

module.exports=router;