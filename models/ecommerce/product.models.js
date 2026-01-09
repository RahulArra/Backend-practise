import mongoose from "mongoose"
import { Category } from "./categories.models"

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    productImage:{
        type:String
    },
    price:{
        type:Number,
        default:0
    },
    stoke:{
        type:Number,
        default:0
    },
    Category:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Category",
        required:true
    },
    owner:{
        typee:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }
},{timestamp:true})

export const Product = mongoose.model("Product",productSchema)