const express = require("express");
const app = express();

app.use("/user",(req,res,next)=>{
    console.log("first");
    next();
})

app.use("/user",(req,res,next)=>{
    console.log("second");
    next();
})

app.use("/user",(req,res,next)=>{
    console.log("third");
    next();
})

app.use("/user",(req,res,next)=>{
    console.log("fourth");
    res.send("I am fourth")
})







app.listen(3000,()=>{
    console.log("Listening at port 3000")
})