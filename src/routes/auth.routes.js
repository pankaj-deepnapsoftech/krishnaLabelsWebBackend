import {Router} from "express";
import { CreateUser, login } from "../controllers/user.controller.js";
import { Validator } from "../helper/validator.js";
import { AuthRegisterValidation } from "../validation/auth.validation.js";

const router  = Router();


router.route("/register").post(Validator(AuthRegisterValidation),CreateUser);
router.route("/login").post(Validator(AuthRegisterValidation),login);


export default router;

