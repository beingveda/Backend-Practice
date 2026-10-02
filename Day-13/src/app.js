const express = require("express");
const NotesModel = require("./model/notes.model");
const createNotesController = require("./controllers/notes.controller");
const notesRoute = require("./routes/notes.routes")

const app = express();
app.use(express.json());

app.get("/",(req,res)=>{
    res.send("Vedant it's Done Bro")
})

app.use("/notes",notesRoute);

// app.get("/allNotes",notesRoute);


module.exports = app;