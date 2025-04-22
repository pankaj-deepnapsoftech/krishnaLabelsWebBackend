import {Router} from "express";
// local import
import AuthRouter from "./auth.routes.js";

const router  = Router();

router.use("/auth",AuthRouter)


export default router;



