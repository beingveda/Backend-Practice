const multer = require("multer");

//disk storage for local
// const storage = multer.diskStorage({
//     destination:(req,file,cb) =>{
//         cb(null,"uploads/");
//     },
//     filename:(req,file,cb)=>{

//         //size and ratio and format check kr sakte ho

//         console.log("diskstorage me file aagyai",file);
//         cb(null, Date.now() + file.originalname)
//     },
// });


//for server
const storage = multer.memoryStorage();

const upload = multer({storage}); 

module.exports = upload;