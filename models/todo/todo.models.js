import mongoose from "mongoose"

const todoscheme = new mongoose.SchemaType({
    content:{
        type:String,
        required:true
    },
    complete:{
        type:Boolean,
        default:false
    },
    createdBy:{
        type:mongoose.Scheme.Type.ObjectId,
        ref:"User"
    },
    subTodos:[
        {
            type:mongoose.Scheme.Type.objectid,
            ref : "Subtodo"
        }
    ] //Array of sub todo
},{timestamps:true})

export const Todo = mongoose.model("Todo",todoscheme)