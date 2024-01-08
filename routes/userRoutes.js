// routes/userRoutes.js
const express = require('express');
const { getAllUsers } = require('../controllers/userController');
const router = express.Router();

router.route('/').get(getAllUsers);

// Add more routes for POST, PUT, DELETE

module.exports = router;
