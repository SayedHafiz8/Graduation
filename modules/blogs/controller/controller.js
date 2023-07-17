const Blog=require("../model/model")
const {StatusCodes}=require("http-status-codes")

const axios = require("axios");


const addBlog = (req,res)=>{
  console.log(req.filename)
  console.log(req)
  
  axios.post('http://127.0.0.1:5000', {video : req.filename}).then((response) =>{

    console.log(response.data)
    res.send(response.data)
      
  }).catch((error) => {
    // console.error(error);
    res.send("Error")
  });
}


module.exports= {addBlog}