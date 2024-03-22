import mongoose from "mongoose";
const Dbconnect =async () =>{
    try{
    
        await mongoose.connect("mongodb://127.0.0.1:27017/product")
        console.log("DB connected")
    }catch(error)
    {
        console.log("DB Not Connected")
    }
      
}

export default Dbconnect;

