import {Router} from "express";
// local import
import AuthRouter from "./auth.routes.js";
import ContactRouter from "./contact.routes.js";
import LoadRouter from "./lead.routes.js";
import ProductRouter from "./product.routes.js";
import { isAuthenticated } from "../middleware/isAuthenticate.js";

const router  = Router();

router.use("/auth",AuthRouter);
router.use("/contact",ContactRouter);
router.use("/lead", LoadRouter);
router.use("/product",isAuthenticated, ProductRouter);


export default router;