import mongoose from "mongoose"

const orderitemschema = new mongoose.Schema({
    productId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Product"
    },
    quantity:{
        type:Number,
        required:true
    }
})

const orderschema = new mongoose.Schema({
    orderprice:{
        type:Number,
        required:true
},
    customer:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    orderItems:{
        type:[orderitemschema]
    },
    Address:{
        type:String,
        required:true,
    },
    status:{
        type:String,
        enum:["Pending","Cancelled","Delivered"],
        default:"Pending"
    }
},{timestamps:true})

export const Order = mongoose.model("Order",orderschema)