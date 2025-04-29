import {Router} from "express";
import { CreateUser, logedInUser, login, logout } from "../controllers/user.controller.js";
import { Validator } from "../helper/validator.js";
import { AuthRegisterValidation } from "../validation/auth.validation.js";
import { isAuthenticated } from "../middleware/isAuthenticate.js";

const router  = Router();


router.route("/register").post(Validator(AuthRegisterValidation),CreateUser);
router.route("/login").post(Validator(AuthRegisterValidation),login);
router.route("/logout").get(isAuthenticated,logout);
router.route("/logedin-user").get(isAuthenticated,logedInUser);


export default router;

