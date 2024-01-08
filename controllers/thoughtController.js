// controllers/thoughtController.js
const Thought = require('../models/Thought');

exports.getAllThoughts = async (req, res) => {
  try {
    const thoughts = await Thought.find({});
    res.json(thoughts);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Add more controller functions for POST, PUT, DELETE
