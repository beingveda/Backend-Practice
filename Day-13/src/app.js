const express = require("express");
const notesRoute = require("./routes/notes.routes")

const app = express();
app.use(express.json());

app.get("/",(req,res)=>{
    res.send("Vedant it's Done Bro")
})

app.use("/notes",notesRoute);


module.exports = app;