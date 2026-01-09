import mongoose from "mongooose"

const patientschema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    diagnosed:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    bloodgroup:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        enum:["Male","Female","Other"],
        required:true
    },
    admittedin:{
        type:mongoose.Schema.Type.ObjectId,
        ref:"Hospital"
    }
},{timestamps:true})

export const Patient = mongoose.model("Patient",patientschema)