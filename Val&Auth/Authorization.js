const jwt=require("jsonwebtoken");
const { StatusCodes } = require('http-status-codes');
const rbac=require("../rbac/rbac")

module.exports=(endPoint)=>{
    return async(req,res,next)=>{
        try {
            const token=req.headers.authorization;
            const decodedToken=jwt.verify(token,process.env.SECRETJWT);
            console.log(decodedToken)
            const isAllowed= await rbac.can(decodedToken.role,endPoint)
            console.log(isAllowed,"isAllowed")
            console.log(decodedToken.role)
            req.user=decodedToken;
            if(isAllowed) {
                next();
            }else{
                res.status(StatusCodes.UNAUTHORIZED).json({message:"UnAuthorized",})
            }
            
           } catch (error) {
            return res.status(StatusCodes.UNAUTHORIZED).json({
                message:"Unauthorized"
            })
           }
    }

};   
