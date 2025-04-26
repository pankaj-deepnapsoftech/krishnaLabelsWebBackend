import  upload  from "../utils/image.multer.js";

import { Router } from "express";
import { Validator } from "../helper/validator.js";
import { ProductValidation } from "../validation/product.validation.js";
import { CreateProduct, GetProduct, GetProductpage, DeleteProduct, UpdateProduct } from "../controllers/product.controller.js";

const router = Router();


router.route("/create-product").post(upload.single("image"), Validator(ProductValidation),CreateProduct)
router.route("/get-product").get(GetProduct);
router.route("/get-product-list").get(GetProductpage);
router.route("/delete/:id").delete(DeleteProduct);
router.route("/update-product/:id").patch(upload.single("image"), Validator(ProductValidation), UpdateProduct);

export default router;