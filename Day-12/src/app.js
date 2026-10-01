const dns = require("dns");

dns.setServers(["8.8.8.8", "8.8.4.4"]);

const express = require("express");
const connectDB = require("./config/db")

const app = express();

connectDB();



app.get("/",(req,res)=>{
    res.send("DONE");
})




module.exports = app;