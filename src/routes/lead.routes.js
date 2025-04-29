import { Router } from "express";
import { Validator } from "../helper/validator.js";
import { leadValidation } from "../validation/leads.validation.js";
import { createlead, getlead } from "../controllers/leads.controller.js";
import { isAuthenticated } from "../middleware/isAuthenticate.js";

const router = Router();


router.route("/create-leads").post(isAuthenticated,Validator(leadValidation),createlead)
router.route("/get-leads").get(isAuthenticated,getlead)



export default router;





