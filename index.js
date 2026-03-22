const express = require("express");
const PORT = 9000;
// const path = require("path")
// const multer = require("multer")
// const cloudinary = require("cloudinary").v2;
const server = express();
// require("dotenv").config()
// server.use(express.static(path.resolve("public")))

// const { CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET } = process.env;

// if (!CLOUDINARY_API_KEY || !CLOUDINARY_API_SECRET, !CLOUDINARY_CLOUD_NAME) {
//     console.log("env not loaded")
// }
// else {
//     console.log("env loaded")
// }


// const upload = multer({
//     storage: multer.memoryStorage(),
//     limits: { fileSize: 2 * 1024 * 1024 }
// })

// const UploadToCloudinary = async(buffer) =>{
//     return new Promise((resolve , reject) => {
//        const stream = cloudinary.uploader.upload_stream(
//       { resource_type: "image" ,
//         folder : "krishna-uploads"
//       }, 
//       (error, result) => {
//         if (error) {
//           reject(error);
//         } else {
//           resolve(result); 
//         }
//       }
//     );
//         stream.end(buffer)
//     })
// }

// cloudinary.config({
//     cloud_name: CLOUDINARY_CLOUD_NAME,
//     api_key: CLOUDINARY_API_KEY,
//     api_secret: CLOUDINARY_API_SECRET
// }
// )

server.get("/upload-image" , (req , res) =>{
    // try {
    //     if(!req.file){
    //         return res.json({message : "No files"})
    //     }
    //   const response = await UploadToCloudinary(req.file.buffer)
    //   console.log(response)        
    // } catch (error) {
    //     return res.status(500).json({message : error})
    // }

    const date = new Date().toLocaleTimeString("en-IN", {
        timeZone: "Asia/Kolkata",
        hour12: false
    })

    const day = String(date.getDate()).padStart(2, '0')
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const year = date.getFullYear()

    const current = `${day} ${month} ${year}`

    console.log(current) // 22 03 2026
    
    const hours = String(date.getHours()).padStart(2, "0")
    const mins = String(date.getMinutes()).padStart(2, "0")
    const secs = String(date.getSeconds()).padStart(2, "0")

    const time = `${hours}:${mins}:${secs}`

    res.json({message: "working done by abubakar", date: current, time: time})
})

server.listen(PORT, "0.0.0.0", () => {
    console.log("Server started on 9000")
})