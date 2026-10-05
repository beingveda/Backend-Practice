const express = require('express');
const {createNotesController,getNotesController, getSingleNoteController, updateNotesController, deleteNoteController, singleEntityUpdateController} = require('../controllers/notes.controller');
const NotesModel = require('../model/notes.model');


const router = express.Router();

//CREATE API
router.post("/create",createNotesController)

//READ API
router.get("/allNotes",getNotesController)
router.get("/:id", getSingleNoteController)

//UPDATE API: PUT
router.put("/:id",updateNotesController)

//UPDATE API : PATCH
router.put("/:id",singleEntityUpdateController)



//DELETE API
router.delete("/:id",deleteNoteController)


module.exports = router;