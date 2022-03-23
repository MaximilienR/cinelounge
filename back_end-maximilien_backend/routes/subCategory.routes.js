const router = require("express").Router();
const subCategoryController = require("../controllers/subCategory.controller");

router.get("/", subCategoryController.getSubCategory);
// router.get("/:id", categoryController.getCategoryById);

router.post("/", subCategoryController.addSubCategory);

module.exports = router;
