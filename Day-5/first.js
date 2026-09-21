const express = require("express");
const app = express();

app.use("/user",(req,res)=>{
    res.send("hello ji")
})







app.listen(3000,()=>{
    console.log("Listening at port 3000")
})