// routes/thoughtRoutes.js
const express = require('express');
const {
  getAllThoughts,
  createThought,
  updateThought,
  deleteThought
} = require('../controllers/thoughtController');

const router = express.Router();

// Route to get all thoughts
router.route('/')
  .get(getAllThoughts)
  .post(createThought); // Add route to create a new thought

// Route to update and delete a thought by its ID
router.route('/:thoughtId')
  .put(updateThought)
  .delete(deleteThought);

module.exports = router;
