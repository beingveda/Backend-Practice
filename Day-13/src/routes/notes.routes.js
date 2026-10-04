const express = require('express');
const {createNotesController,getNotesController, getSingleNoteController, updateNotesController, deleteNoteController} = require('../controllers/notes.controller');
const NotesModel = require('../model/notes.model');


const router = express.Router();

//CREATE API
router.post("/create",createNotesController)

//READ API
router.get("/allNotes",getNotesController)
router.get("/:id", getSingleNoteController)

//UPDATE API
router.put("/:id",updateNotesController)
module.exports = router;

//DELETE API
router.delete("/:id",deleteNoteController)