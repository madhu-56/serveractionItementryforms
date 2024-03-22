import mongoose, {Schema} from "mongoose";

const registerSchema = new Schema({
    username:{type:String,reqired:true},

    phone:{type:Number,required:true},

    email:{type:String,required:true},
    password:{type:String,required:true}
    
});

const register = mongoose.models.info || mongoose.model('info',registerSchema )
export default register;