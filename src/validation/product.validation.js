// validation/productValidation.js
import { object, string } from 'yup';

export const ProductValidation = object({
    product_name:string().required("Product name is a required field"),
    description:string().required("Description is a required field"),
    // price: number().typeError("Price must be a number").required("Price is a required field")
    price: string().required("Price is a required field")
});

               
