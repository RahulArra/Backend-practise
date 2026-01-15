import {v2 as cloudinary} from "cloudinary"
import { response } from "express"
import fs from "fs"



cloudinary.config({
    cloud_name : process.env.CLOUDINARY_CLOUD_NAME ,
    api_key: process.env.CLOUDAINARY_API_KEY,
    api_secret:process.env.CLOUDINARY_API_SECRET
});




const uploadonCLoudinary = async (localFilePath) =>{
    try{
        if(!localFilePath) return null
        
        const response = await cloudinary.uploader.upload(localFilePath,{
            resource_type : "auto"
        })
        //files has been uploaded successfully
        console.log("uploaded succesfully onn cloudinary",response.url)
        return response
    }catch(error){
        fs.unlinkSync(localFilePath) // remove file from local server as upload operation got failed
        return null;
    }
}
