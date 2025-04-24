import {Router} from "express";
import { Validator } from "../helper/validator.js";
import { ContactValidation } from "../validation/contact.validation.js";
import { CreateLead, GetLead } from "../controllers/contact.controller.js";

const router = Router();

router.route("/create-contact").post(Validator(ContactValidation),CreateLead);
router.route("/get-contact").get(GetLead);


export default router;

