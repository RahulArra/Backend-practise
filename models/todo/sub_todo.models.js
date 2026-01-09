import mongoose from "mongoose";

const subtoscheme = new mongoose.SchemaType({
    content:{type:String,
        required:true,

    },
    complete:{
        type:Boolean,
        default:false
    },
    createdBy : {
        type: mongoose.Schema.Types.ObjectId,
        ref:"User"
    }
},{timestamps:true})

export const Subtodo = new mongoose.model("Subtodo",subtoscheme)