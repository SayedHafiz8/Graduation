const router = require('express').Router()
const validateRequest=require("../../../Val&Auth/validation")
const isAuthorized=require("../../../Val&Auth/Authorization")
const {ADD_BLOG,DELETE_BLOG} =require("../endPoints")
const {addBlogSchema,deleteSchema} =require("../joi/joi")


const multer=require("multer")

const {addBlog,deleteBlog} = require("../controller/controller")


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
      const prefix = Date.now() + '_' + file.originalname
      req.filename=prefix
      cb(null, prefix)
    }
  })
  
  const uploads = multer({ storage: storage })

  // const uploadMiddlewareImage = upload.single("video")



router.post("/addBlog",isAuthorized(ADD_BLOG),uploads.single("video"),addBlog)
// router.delete("/deleteBlog/:id",isAuthorized(DELETE_BLOG),validateRequest(deleteSchema),deleteBlog)


  module.exports=router;