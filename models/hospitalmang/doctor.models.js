import mongoose from "mongooose"


const hospitalschemaaa = new mongoose.Schema({
    type:mongoose.Schme.Type.ObjectId,
    ref:"Hospital"
})

const doctorschema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    salary:{
        type:Number,
        required:true
    },
    qualification:{
        type:String,
        required:true
    },
    experienceInYears:{
        type:Number,
        default:0
    },
    worksIn:[hospitalschemaaa
    ]
},{timestamps:true})

export const Doctor = mongoose.model("Doctor",doctorschema)