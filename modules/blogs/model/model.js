const mongoose  = require("mongoose");

const blogSchema=new mongoose.Schema({   
    createdBy:{type:mongoose.Schema.Types.ObjectId,ref:"user"},
    blogImgURL:String

},{
    timestamps:true,
})
const Blog=mongoose.model("blog",blogSchema);
module.exports=Blog;