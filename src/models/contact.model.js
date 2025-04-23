import { Schema, model } from "mongoose";

const contactSchema = new Schema({
    name: { type: String, required: true },
    phone:{type:String,required:true},
    email:{type:String,required:true},
    message:{type:String}
});

export const ContactModel = model("Contact",contactSchema);




