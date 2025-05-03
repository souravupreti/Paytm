const express = require('express');
const router = express.Router();

const authUser = require('../middleware/auth');
const {send,fill} = require('../controllers/payment');


router.put("/send/:id",authUser,send)
router.get("/filter",authUser,fill)

module.exports=router;