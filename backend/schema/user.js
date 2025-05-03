const mongoose=require("mongoose");

const userSchema = new mongoose.Schema({
    email:{
      type:String,
      required:true
    },
    password: {
      type: String,
      required: true,
      minLength: 6
    },
    firstName: {
      type: String,
      required: true,
      trim: true,
      maxLength: 50
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
      maxLength: 50
    },
    amount:{
      type:Number,
      default:0
    }
  });
  module.exports=mongoose.model("User",userSchema)