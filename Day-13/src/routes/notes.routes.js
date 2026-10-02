const express = require('express');
const createNotesController = require('../controllers/notes.controller');
const getNotesController = require('../controllers/notes.controller');

const router = express.Router();

router.post("/create",createNotesController)

router.get("/allNotes",getNotesController)


module.exports = router;