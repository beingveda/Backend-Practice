const express = require("express");

const app = express();

const notes = [];

app.use(express.json())

app.get("/notes",(req,res)=>{
    res.send(notes)
});

app.post("/notes",(req,res)=>{
    notes.push(req.body)

    console.log(notes)
    
    res.send("Note created");
})

app.delete("/notes/:index",(req,res)=>{
    console.log(req.params.index );
    res.send("Deleted successflly")
})

app.patch("/notes/:index",(req,res)=>{
    notes[ req.params.index ].description = req.body.description
    res.send("note updated successfully")
})













module.exports = app;