import mongoose from "mongoose"

const catschema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    }
},{timstamps:true})

export const Category = mongoose.model("Category",catschema)