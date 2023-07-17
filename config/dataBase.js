const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

const connection=()=>
    mongoose.connect("mongodb://0.0.0.0/deepFake_DB").then(()=>{
    console.log("connected.......")
}).catch((err)=>{
    console.log(err)
})


module.exports=connection