const express = require('express');
const router = express.Router();
const {
  getNotes,
  createNote,
  updateNote,
  deleteNote,
} = require('../controllers/noteController');

// Route for getting all notes and creating a new note
router.route('/').get(getNotes).post(createNote);

// Route for updating and deleting a specific note by ID
router.route('/:id').put(updateNote).delete(deleteNote);

module.exports = router;