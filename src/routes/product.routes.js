import  upload  from "../utils/image.multer.js";

import { Router } from "express";
import { Validator } from "../helper/validator.js";
import { ProductValidation } from "../validation/product.validation.js";
import { CreateProduct, GetProduct, GetProductpage, DeleteProduct, UpdateProduct } from "../controllers/product.controller.js";
import { isAuthenticated } from "../middleware/isAuthenticate.js";

const router = Router();


router.route("/create-product").post(isAuthenticated,upload.single("image"), Validator(ProductValidation),CreateProduct);
router.route("/get-product").get(isAuthenticated,GetProduct);
router.route("/get-product-list").get(isAuthenticated,GetProductpage);
router.route("/delete/:id").delete(isAuthenticated,DeleteProduct);
router.route("/update-product/:id").patch(isAuthenticated,upload.single("image"), Validator(ProductValidation), UpdateProduct);

export default router;