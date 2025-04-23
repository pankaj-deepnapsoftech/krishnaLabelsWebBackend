import {Router} from "express";
import { CreateUser, logedInUser, login, logout } from "../controllers/user.controller.js";
import { Validator } from "../helper/validator.js";
import { AuthRegisterValidation } from "../validation/auth.validation.js";

const router  = Router();


router.route("/register").post(Validator(AuthRegisterValidation),CreateUser);
router.route("/login").post(Validator(AuthRegisterValidation),login);
router.route("/logout").get(logout);
router.route("/logedin-user").get(logedInUser);


export default router;

