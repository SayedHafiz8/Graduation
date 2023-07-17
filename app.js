require("dotenv").config()
const express=require("express");
const cors = require('cors')
const port=process.env.PORT;
const path= require("path")

const app=express();
app.use(cors())

app.use(express.json());
app.use(express.static(path.join(__dirname,'/uploads/')))

const connection=require("./config/dataBase")
connection()
const userRouter=require("./modules/users/router/router")
const bloRouter=require("./modules/blogs/router/router")
app.use(userRouter)
app.use(bloRouter);








app.listen(process.env.PORT)