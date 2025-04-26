import {Router} from "express";
// local import
import AuthRouter from "./auth.routes.js";
import ContactRouter from "./contact.routes.js";
import LoadRouter from "./lead.routes.js";
import ProductRouter from "./product.routes.js";

const router  = Router();

router.use("/auth",AuthRouter);
router.use("/contact",ContactRouter);
router.use("/lead", LoadRouter);
router.use("/product", ProductRouter);


export default router;