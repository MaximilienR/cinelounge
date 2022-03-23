const router = require("express").Router();
const productController = require("../controllers/product.controller");
const multer = require("multer");
// const upload = multer();

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, `${__dirname}/../../front_end/public/uploads/products/`);
  },
  filename: function (req, file, cb) {
    console.log("body :", req.body);
    let date = new Date(Date.now());
    const fileName =
      req.body.name + date.getHours() + date.getMinutes() + ".jpg";
    cb(null, fileName);
  },
});
var upload = multer({ storage: storage });

router.get("/", productController.getProduct);
// router.get("/:id", productController.getProductById);
router.get("/:id", productController.getProductById);
router.get("/search/:categories", productController.getSortedByCategories);
router.get(
  "/search/:categories/:subcategories",
  productController.getSortedBySubCategories
);

// router.get("/search/:categories")  sort fait ref aux subcat(horreur, action ... cf maquette)

router.post("/", upload.single("image"), productController.addProduct);
router.put("/:id", upload.single("image"), productController.updateProduct);
// router.patch("/:id  ", upload.single("image"), productController.updateProduct);
router.delete("/:id", productController.deleteProduct);

module.exports = router;
