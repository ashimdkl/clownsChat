# ClownsCord Chat App
# (For fun Project, to talk with friends) 

ClownsCord is a web-based chat application that allows users to easily authenticate and engage in conversations within a secure and friendly environment. The application is built with Node.js and Express for the backend, and React for the frontend, showcasing real-time communication features.

## Features

- User authentication
- Real-time chat functionalities
- Customizable user profiles
- Secure communication with encrypted messages

## Technologies Used

### Backend

- **Node.js**: A JavaScript runtime built on Chrome's V8 JavaScript engine.
- **Express**: A minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.
- **axios**: A promise-based HTTP client for the browser and Node.js. Used for making HTTP requests from Node.js to external services.
- **cors**: A node.js package for providing a Connect/Express middleware that can be used to enable CORS (Cross-Origin Resource Sharing).

### Frontend

- **React**: A JavaScript library for building user interfaces.
- **axios**: Used for making HTTP requests from the frontend to the backend server.
- **react-chat-engine-pretty**: A library that integrates with Chat Engine to provide beautiful chat UI components.

## APIs Used

- **Chat Engine API**: Used to create and manage chat rooms, users, and messages.

## Setup and Installation

1. Clone the repository to your local machine.
2. Navigate into the project directory.
3. Install the dependencies for both the frontend and backend:
    ```
    npm install
    ```
4. To start the server, run:
    ```
    node server.js
    ```
    This will start the backend server on port 3001.
5. To start the React frontend application, navigate to the frontend directory and run:
    ```
    npm start
    ```
    This will start the frontend application and open it in your default web browser.

## Usage

Once both the backend and frontend are running, you can use the application by navigating to the local server's address in your web browser (usually `http://localhost:3000`). From there, you can create a new user, log in, and start chatting.

## Contributing

Contributions to ClownsCord are welcome! Please fork the repository and submit a pull request with your proposed changes.

## License

[MIT License](LICENSE)
