social-network-api/
│
├── config/
│   └── db.js             # Database connection configuration
│
├── models/
│   ├── User.js           # User model
│   ├── Thought.js        # Thought model
│   └── Reaction.js       # Reaction subdocument schema for Thought
│
├── routes/
│   ├── userRoutes.js     # Routes for user operations
│   └── thoughtRoutes.js  # Routes for thought operations
│
├── controllers/
│   ├── userController.js     # Logic for user-related routes
│   └── thoughtController.js  # Logic for thought-related routes
│
├── utils/
│   └── dateUtils.js      # Utility functions for date formatting (if needed)
│
├── package.json          # Node.js package definition
├── server.js             # Entry point of your application
└── README.md             # Documentation for your project
