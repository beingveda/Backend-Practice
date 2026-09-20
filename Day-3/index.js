const express = require("express");

const app = express();



app.use("/about",(req,res)=>{
    res.send("I am your about page");
})

app.use("/contact",(req,res)=>{
    res.send("I am your contact page");
})



app.use("/",(req,res)=>{
    res.send("loda")
})


app.listen(4000,()=>{
    console.log("Listening at port 4000");
})