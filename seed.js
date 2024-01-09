// seed.js
const mongoose = require('mongoose');
const Thought = require('./models/Thought'); 

mongoose.connect('mongodb://localhost:27017/socialNetworkDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const seedThoughts = [
  {
    thoughtText: 'This is a seeded thought!',
    username: 'seeduser1',
    reactions: [] 
  },
  {
    thoughtText: 'Here is another thought, seeded into the database.',
    username: 'seeduser2',
    reactions: []
  },

];

const seedDB = async () => {
  await Thought.deleteMany({}); // Caution: This will delete all existing documents!
  await Thought.insertMany(seedThoughts);
  console.log('Database seeded!');
};

seedDB().then(() => {
  mongoose.connection.close();
});
