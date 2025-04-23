import {string,object} from "yup";


export const ContactValidation = object({
    name:string().required("name field must not be empty"),
    phone:string().required("Phone field must not me empty"),
    email:string().email().required("Email field must not me empty"),
});





















