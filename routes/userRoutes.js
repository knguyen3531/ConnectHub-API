// routes/userRoutes.js
const express = require('express');
const {
  getAllUsers,
  createUser,
  updateUser,
  deleteUser
} = require('../controllers/userController');

const router = express.Router();

// Route to get all users and create a new user
router.route('/')
  .get(getAllUsers)
  .post(createUser); // Add route to create a new user

// Route to update and delete a user by their ID
router.route('/:userId')
  .put(updateUser)
  .delete(deleteUser);

module.exports = router;
