const dns = require("dns");
dns.setServers(["8.8.8.8", "8.8.4.4"]);

const express = require("express");
const connectDB = require("./config/db")
const NotesModel = require("./model/note.model")

const app = express();
app.use(express.json());

connectDB();


app.get("/",(req,res)=>{
    res.send("DONE");
})

app.post("/create", async (req,res)=>{
    let {title, description} = req.body

    const newNote = await NotesModel.create({
        title,
        description,
    });

    res.send({
        success:true,
        message: "Note Created Successfully",
        data: newNote,
    })

})


module.exports = app;