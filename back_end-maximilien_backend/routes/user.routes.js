const { authJwt } = require("../middleware");
const router = require("express").Router();
const contactTest = require("../controllers/contactTest.controller");
const userController = require("../controllers/user.controllers");
const authController = require("../controllers/auth.controller");

/*test*/
router.post("/message", contactTest.contact);
/*test*/

router.get("/all", userController.allAccess);
router.get("/user", [authJwt.verifyToken], userController.userBoard);

router.get(
  "/mod",
  [authJwt.verifyToken, authJwt.isModerator],
  userController.moderatorBoard
);

router.get(
  "/admin",
  [authJwt.verifyToken],
  [authJwt.verifyToken, authJwt.isAdmin],
  userController.adminBoard
);
router.put("/:id", authController.updateUser);
module.exports = router;
