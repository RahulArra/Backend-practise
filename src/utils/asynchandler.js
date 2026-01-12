const asynchandler = (reqesthandler)=>{
    (req,res,next)=>{
        Promise.resolve(reqesthandler(req,res,next)).catch((err)=>next(err))
    }
}


export{asynchandler}



// const asynchandler =(fn)=> async (req,res,next)=>{
//     try{
//         await fn(req,res,next)
//     }catch(error){
//         res.status(error.code || 500).json({
//             success:false,
//             message:error.message
//         })
//     }
// } // function is passed as parameter , it is called higher order function



// it is an wrapper code ,so what we are doing here is , instead of always making a function in await async all these stuff , we are just sending that function to this file so that we can use the async await function for all other files , 
// in simple terms for resuablity and modularity => used for try catch wala code