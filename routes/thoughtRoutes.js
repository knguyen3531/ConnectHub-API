// routes/thoughtRoutes.js
const express = require('express');
const {
  getAllThoughts,
  createThought,
  updateThought,
  deleteThought,
  addReaction,    
  removeReaction  
} = require('../controllers/thoughtController');

const router = express.Router();

// Route to get all thoughts and create a new thought
router.route('/')
  .get(getAllThoughts)
  .post(createThought);

// Route to update and delete a thought by its ID
router.route('/:thoughtId')
  .put(updateThought)
  .delete(deleteThought);

// Route to add a reaction to a thought
router.route('/:thoughtId/reactions')
  .post(addReaction); 

// Route to remove a reaction from a thought
router.route('/:thoughtId/reactions/:reactionId')
  .delete(removeReaction); 

module.exports = router;
