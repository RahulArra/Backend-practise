import mongoose from "mongoose"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
const userschema = new  mongoose.Schema(
    {
        userName:{
            type:String,
            required:true,
            unique:true,
            lowercase:true,
            trim:true,
            index:true
        },
        email:{
            type:String,
            required:true,
            unique:true,
            lowercase:true,
            trim:true,
            
        },
        fullName:{
            type:String,
            required:true,

            trim:true,
            index:true
        },
        Avatar:{
            type:String, // cloudinary url
            required:true,
            
        },
        watcHistory:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"Video"
        },
        password:{
            type:String,
            required:[true,"password is required"]
        },
        refreshToken:{
            type:String
        },
        coverImage:{
            type:String
        }
},{timestamps:true})

userschema.pre("save", async function(next){
    if(this.isModified("password")){
            this.password= bcrypt.hash(this.password,10)
    }
    next()
}) // as the username pass take time we use async


userschema.methods.isPasswordCorrect = async function(password){
    return await bcrypt.compare(password,this.password) // as the cmoparision take time we make it await
}

userschema.methods.generateAccessToken = function(){
    return jwt.sign(
        {
            _id:this._id,
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY,
        }
    )
}

userschema.methods.generateRefreshToken = function(){
    return jwt.sign(
        {
            _id:this._id,
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: REFRESH_TOKEN_EXPIRY
        }
    )
}

export const User = mongoose.model("User",userschema)