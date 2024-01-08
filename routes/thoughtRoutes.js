// routes/thoughtRoutes.js
const express = require('express');
const { getAllThoughts } = require('../controllers/thoughtController');
const router = express.Router();

router.route('/').get(getAllThoughts);

// Add more routes for POST, PUT, DELETE

module.exports = router;
