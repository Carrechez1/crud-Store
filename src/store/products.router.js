const router = require("express").Router();
const productServices = require("./products.services");

router.get("/", productServices.getProducts);
router.post("/", productServices.createProduct);
router.get("/:id", productServices.getproductById);
router.patch("/:id", productServices.patchProduct);
router.delete("/:id", productServices.deleteProduct);

module.exports = router;
