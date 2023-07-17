const router=require("express").Router();
const validateRequest=require("../../../Val&Auth/validation")
const {signupSchema,deleteUesrSchema,updateUserSchema,loginSchema}=require("../joi/joi")
const isAuthorized=require("../../../Val&Auth/Authorization")
const {GET_ALL_USER,SOFT_DELETE_USER,DELETE_USER,UPDATE_USER}=require("../endPoints")

const {signup, getAllUser, deleteUser, deleteSoftUser, updateUser,searchUser,login}=require('../controller/controller');

router.post('/signup',(req,res,next)=>{
    console.log(req.body)
    next()
},validateRequest(signupSchema),signup);
router.get("/getAllUser",isAuthorized(GET_ALL_USER),getAllUser);
router.delete("/deleteUser/:id",validateRequest(deleteUesrSchema),isAuthorized(DELETE_USER),deleteUser);
router.patch("/deleteSoftUser/:id",isAuthorized(SOFT_DELETE_USER),deleteSoftUser);
router.put("/updateUser/:id",validateRequest(updateUserSchema),updateUser);
router.get("/search/:searchKey/:email",searchUser);
router.post("/login",validateRequest(loginSchema),login)




module.exports=router;