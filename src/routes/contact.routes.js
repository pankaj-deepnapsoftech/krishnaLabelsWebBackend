import {Router} from "express";
import { Validator } from "../helper/validator.js";
import { ContactValidation } from "../validation/contact.validation.js";
import { CreateLead, GetLead } from "../controllers/contact.controller.js";
import { isAuthenticated } from "../middleware/isAuthenticate.js";

const router = Router();

router.route("/create-contact").post(isAuthenticated,Validator(ContactValidation),CreateLead);
router.route("/get-contact").get(isAuthenticated,GetLead);


export default router;

