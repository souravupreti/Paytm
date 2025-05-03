const mongoose=require("mongoose")

const db=async()=>{
    try {
        const connect=await mongoose.connect("mongodb://localhost:27017/expense?directConnection=true");
    console.log(`MongoDB connected: ${connect.connection.host}`)
    } catch (error) {
        console.error(error)
        
    }
}
module.exports=db