const NotesModel = require("../model/notes.model")

const  createNotesController = async(req,res)=>{
   try {
    
    let {title, description} = req.body;

    let newNote = await NotesModel.create({
        title,
        description,
    });

    return res.status(200).json({
        message: "Note created successfully",
        data: newNote,
    })
    
   } catch (error) {
    console.log("Error in creation at POST Api")
   }
};

const getNotesController = async (req,res)=>{
    try {
        let allNotes = await NotesModel.find();
        res.status(200).json({
            message: 'All notes fetched',
            data : allNotes,
        })
    } catch (error) {
        console.log("error while fetching api",error);
    }}

module.exports = createNotesController;
module.exports = getNotesController;