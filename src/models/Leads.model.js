import {Schema,model} from "mongoose";


const LeadsSchema = new Schema({
    fullname:{type:String,required:true},
    email:{type:String,required:true},
    contact:{type:String,required:true},
    purpose:{type:String,required:true}
});

export const LeadsModel = model("Leads",LeadsSchema);