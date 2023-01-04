import mongoose from "mongoose";

const userSchema=mongoose.Schema(
    {
        name:
        {
            type:String,
            required:[true, "Name is Required"],
            maxLenght:[30, "Name need not to me more then 30 char"]
        },
        email:
        {
            type:String,
            required:[true, "emial is required"],
            unique:true
            
        },
        password:
        {
            type:String,
            required:true,
            minLenght:[8,"Passwood must be greater then 8 charater"]
        },
        forgetPasswordToken:String,
        forgetPassowrdDate:String
    },
    {
        timestamps:true
    }
)

export default mongoose.model('User',userSchema)