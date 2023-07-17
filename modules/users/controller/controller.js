const userModel=require("../model/model")
const jwt=require("jsonwebtoken")
const {hashPassword,comparePassword}=require("../../../hashing")
const {StatusCodes}=require("http-status-codes")
// const nodemailer = require("nodemailer");




const signup=async(req,res)=>{
    try {
        const users= req.body;
        const user= await userModel.findOne({email:users.email})
        if(user){
            res.status(StatusCodes.BAD_REQUEST).json({
                message:"This email is already regitered"
            })
        }else{
            users.password=await hashPassword(users.password)
            await userModel.insertMany(users).then((result)=>{
                res.json({messege:'Done',result})
            }).catch((err)=>{
                res.json({messege:"ERROR",err})
            });
        }
        
    } catch (error) {
        res.json({messege:"failed",error})
    };
};



const getAllUser=async(req,res)=>{
    
    try {
        
            const usersList=await userModel.find({isDeleted:false}).select("-password")
            res.json({messege:"Done",usersList})
        
    } catch (error) {
        res.json({
            error:error.message
        })
    }
    
    
}



const deleteUser=async(req,res)=>{
    try {
        const {id}=req.params;
        
    await userModel.findByIdAndDelete({_id:id})
        res.json({messege:"done"})
    
    } catch (error) {
        res.json({messege:"failed",error})
    }
}



const deleteSoftUser=async(req,res)=>{
        try {
            const {id}=req.params;
            await userModel.findByIdAndUpdate({_id:id},{isDeleted:true})
            res.json({messege:"done"})
        } catch (error) {
            res.json({messege:"ERROR"})
        }
}




const updateUser=async(req,res)=>{
    try {
        const {id}=req.params;
        const user=req.body;
        await userModel.findByIdAndUpdate({_id:id},user)
        res.json({messege:"Done"})
    } catch (error) {
        res.json({messege:"ERROR"})
    }
}




const searchUser=async(req,res)=>{
    const {searchKey,email}=req.params;
    const user=  await userModel.find({$or:[{name:new RegExp(searchKey.toLowerCase())},{email}]})
    res.json({messege:"done",user})
}




const login=async(req,res)=>{
try {
    const {email,password}=req.body;
    
    const user=await userModel.findOne({email})
    
    
    if(!user){
        res.json({message:"You must register first"})
    }else{
        const Matched=await comparePassword(password,user.password)
        console.log(Matched)
        if(Matched){
            const token=jwt.sign(user.toJSON(),process.env.SECRETJWT)
            res.status(200).json({
                message:"Logedin",
                data:{
                    token
                }
            })
        }else{
            res.json({message:"Invalid password"})
        }
    }
    
} catch (error) {
    res.json({messege:"ERROR",error:error.message})
}    
}








module.exports={
    signup,
    getAllUser,
    deleteUser,
    deleteSoftUser,
    updateUser,
    searchUser,
    login
}