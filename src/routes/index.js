import {Router} from "express";
// local import
import AuthRouter from "./auth.routes.js";
import ContactRouter from "./contact.routes.js";
import LoadRouter from "./lead.routes.js"

const router  = Router();

router.use("/auth",AuthRouter);
router.use("/contact",ContactRouter);
router.use("/lead",LoadRouter);


export default router;



