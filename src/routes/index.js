import {Router} from "express";
// local import
import AuthRouter from "./auth.routes.js";
import ContactRouter from "./contact.routes.js";

const router  = Router();

router.use("/auth",AuthRouter)
router.use("/contact",ContactRouter)


export default router;



