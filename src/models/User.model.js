import {Schema,model} from "mongoose";


const UserSchema = new Schema({
    email:{type:String,required:true},
    password:{type:String,required:true},
    ip:{type:String},
});

export const UserModle = model("User",UserSchema);





