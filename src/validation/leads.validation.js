import {string,object} from "yup";


export const leadValidation = object({
    fullname:string().required("fullname is required field"),
    email:string().email().required("Email is required field"),
    contact:string().required("Contact is required field"),
    purpose:string().required("purpose is required field")
})                  





