# Social Network API

## Description

This Social Network API is a backend application built with Node.js, Express, MongoDB, and Mongoose. It's designed to simulate a basic social network where users can share thoughts, react to friends' thoughts, and manage a friends list.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)
- [Questions](#questions)
- [Walkthrough Video](#walkthrough-video)

## Installation

To install this application, follow these steps:

1. Clone the repository from GitHub.
2. Navigate to the project directory and run `npm install` to install the required dependencies.
3. Ensure MongoDB is installed and running on your machine.
4. Run `node server.js` to start the application.

## Usage

This API can be interacted with using API testing tools like Insomnia or Postman. It supports the following operations:

- Users:
  - Create a new user (`POST /api/users`)
  - View all users (`GET /api/users`)
  - View a single user by ID (`GET /api/users/:userId`)
  - Update a user (`PUT /api/users/:userId`)
  - Delete a user (`DELETE /api/users/:userId`)
  - Add a friend (`POST /api/users/:userId/friends/:friendId`)
  - Remove a friend (`DELETE /api/users/:userId/friends/:friendId`)

- Thoughts:
  - Create a new thought (`POST /api/thoughts`)
  - View all thoughts (`GET /api/thoughts`)
  - View a single thought by ID (`GET /api/thoughts/:thoughtId`)
  - Update a thought (`PUT /api/thoughts/:thoughtId`)
  - Delete a thought (`DELETE /api/thoughts/:thoughtId`)

- Reactions:
  - Add a reaction to a thought (`POST /api/thoughts/:thoughtId/reactions`)
  - Remove a reaction from a thought (`DELETE /api/thoughts/:thoughtId/reactions/:reactionId`)

## Features

- RESTful API for managing users, thoughts, and reactions in a social network application.
- Utilizes MongoDB, a NoSQL database, to handle large amounts of unstructured data.
- Includes models for users, thoughts, and reactions with appropriate relationship setup and validations.

## Testing

You can test the API routes using Insomnia or Postman by sending HTTP requests and observing the responses. Ensure the server is running before testing.

## Contributing

Contributions to this project are welcome. Please ensure to update tests as appropriate.

## License

This project is licensed under the [MIT License](LICENSE).

Url: https://github.com/knguyen3531/ConnectHub-API.git
