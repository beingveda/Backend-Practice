const mongoose = require("mongoose");

const notesSchema = new mongoose.Schema({
    title : {
        type:String,
        required: true,
    },
    description: {
        minlength:[5, "Minimum 5 characters are required"],
        type:String,
        required:true,
    }
});

const NotesModel = mongoose.model("notes",notesSchema)

module.exports = NotesModel;