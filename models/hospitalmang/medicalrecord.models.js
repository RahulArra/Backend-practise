import mongoose from "mongooose"

const medicalrepot = new mongoose.Schema({},{timestamps:true})

export const MedicalRecord = mongoose.model("MedicalRecord",medicalrepot)