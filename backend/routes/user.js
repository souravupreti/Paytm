const express = require('express');
const router = express.Router();


const{register,login, UserDetail}=require("../controllers/user");
const authUser = require('../middleware/auth');



router.post("/register",register);
router.post("/login",login);
router.get("/user-details",authUser,UserDetail)

module.exports=router;