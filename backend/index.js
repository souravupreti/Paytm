const express = require("express");
const app=express();
const dotenv=require("dotenv")
const morgan=require("morgan")
const db = require("./Db/db");
const userRoute = require("./routes/user");
var cookieParser = require('cookie-parser')
const Trans=require("../backend/routes/trans")
const cors=require("cors")
app.use(cookieParser())
dotenv.config({

})
app.use(cors({
}))

app.use(express.json()) 
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'))
app.use("/trans",Trans)
app.use("/user",userRoute)
db()
app.listen(3000,()=>{
    console.log("server sun in port3000")
})