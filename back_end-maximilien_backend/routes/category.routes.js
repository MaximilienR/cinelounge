const router = require("express").Router();
const categoryController = require("../controllers/category.controller");

router.get("/", categoryController.getCategory);
// router.get("/:id", categoryController.getCategoryById);

router.post("/", categoryController.addCategory);

module.exports = router;
