import mongoose from "mongooose"

const hospitalschema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    addresline:{
        type:String,
        required:true
    },
    pincode:{
        type:Strinf,
        required:true
    },
    specilisation:[
        {
            type:String
        }
    ]
},{timestamps:true})

export const Hospital = mongoose.model("Hospital",hospitalschema)