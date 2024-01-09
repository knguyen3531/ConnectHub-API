// seedUsers.js
const mongoose = require('mongoose');
const User = require('./models/User');

mongoose.connect('mongodb://localhost:27017/socialNetworkDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const seedUsers = [
  {
    username: 'user1',
    email: 'user1@example.com',
    thoughts: [], 
    friends: [] 
  },
  {
    username: 'user2',
    email: 'user2@example.com',
    thoughts: [],
    friends: []
  },

];

const seedDB = async () => {
  await User.deleteMany({}); // Caution: This will delete all existing documents!
  await User.insertMany(seedUsers);
  console.log('Users database seeded!');
};

seedDB().then(() => {
  mongoose.connection.close();
});
