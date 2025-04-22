import {string,object} from "yup";



export const AuthRegisterValidation = object({
    email:string().email().required("Email is required Field"),
    password:string().min(8).max(16).required("Password is Required field")
});








