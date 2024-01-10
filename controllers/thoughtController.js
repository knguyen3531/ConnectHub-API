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

// POST a new thought
exports.createThought = async (req, res) => {
  try {
    const newThought = await Thought.create(req.body);
    await User.findByIdAndUpdate(
      req.body.userId,
      { $push: { thoughts: newThought._id } },
      { new: true }
    );
    res.status(201).json(newThought);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// PUT to update a thought by _id
exports.updateThought = async (req, res) => {
  try {
    const updatedThought = await Thought.findByIdAndUpdate(req.params.thoughtId, req.body, {
      new: true,
      runValidators: true,
    });
    if (!updatedThought) {
      return res.status(404).json({ message: 'Thought not found' });
    }
    res.json(updatedThought);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// DELETE a thought by _id
exports.deleteThought = async (req, res) => {
  try {
    const thoughtToDelete = await Thought.findByIdAndDelete(req.params.thoughtId);
    if (!thoughtToDelete) {
      return res.status(404).json({ message: 'Thought not found' });
    }
    res.status(200).json({ message: 'Thought deleted' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// POST to create a reaction stored in a single thought's reactions array field
exports.addReaction = async (req, res) => {
  try {
    const thought = await Thought.findByIdAndUpdate(
      req.params.thoughtId,
      { $push: { reactions: req.body } },
      { new: true, runValidators: true }
    );
    if (!thought) {
      return res.status(404).json({ message: 'Thought not found' });
    }
    res.json(thought);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// DELETE to pull and remove a reaction by the reaction's reactionId value
exports.removeReaction = async (req, res) => {
  try {
    const thought = await Thought.findByIdAndUpdate(
      req.params.thoughtId,
      { $pull: { reactions: { reactionId: req.params.reactionId } } },
      { new: true }
    );
    if (!thought) {
      return res.status(404).json({ message: 'Thought not found' });
    }
    res.json(thought);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};