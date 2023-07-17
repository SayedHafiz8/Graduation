const { string } = require("joi");
const mongoose=require("mongoose");

const userSchema=mongoose.Schema({
    firstName:{
        type:String,
        required:[true,"First name is required"]
    },
    lastName:{
        type:String,
        required:[true,"Last name is required"]
    },
    email:{
        type:String,
        required:[true,"email is required"]
    },
    role:{
        type:String,
        default:"user"
    },
    password:{
        type:String,
        required:[true,"password is required"]
    },
    isDeleted:{
        type:Boolean,
        default:false
    },
    
},{
    timestamps:true
})
const userModel=mongoose.model("user",userSchema)
module.exports=userModel;