 const mongoose = require("mongoose");

 const notesSchema = new mongoose.Schema({
    title:{
        required: true,
        type: String,
    },
    description: {
        type:String,
        minLength: 5,
    }
 });

 const NotesModel = mongoose.model("notes",notesSchema);

 module.exports = NotesModel;