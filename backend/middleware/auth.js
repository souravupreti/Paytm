const jwt =require("jsonwebtoken")
const authUser=async(req,res,next)=>{
    const token =req.cookies.auth_token;
    if(!token){
        res.status(400).json({
            message:"unautorized"
        })
    }
    const decoded=jwt.verify(token,process.env.JWT_KEY)
    console.log(decoded)
    if (!decoded ) {
        return res.status(403).json({ message: "Invalid token payload" });
    }
    req.user = decoded._id;
    next();

}
module.exports=authUser