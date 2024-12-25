# Rmbr-password-manager-
A secure and efficient password manager built with the MERN stack (MongoDB, Express, React, Node.js) and styled using Tailwind CSS. This app allows users to safely store and manage their passwords with robust encryption.


## Features

- **User Authentication**: Secure login and registration with JWT (for the MERN version).
- **Password Storage**:
  - **Local Storage Version**: Passwords are stored in the browser's local storage.
  - **MERN Version**: Passwords are encrypted and stored securely in MongoDB.
- **Categorization**: Organize passwords by categories (e.g., Work, Personal, Social Media).
- **Search & Sort**: Quickly find stored credentials with a search bar and sorting options.
- **Responsive Design**: Fully responsive UI built with Tailwind CSS.
- **Edit & Delete**: Update or remove stored passwords with ease.
  

## Tech Stack

### Frontend
- **React**: For building the UI.
- **Tailwind CSS**: For modern, responsive styling.


## Installation

### Local Storage Version

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/password-vault.git
   cd password-vault
   ```
2. **Install Dependencies**:
   ```bash
   cd client
   npm install
   ```
3. **Run the Application**:
   ```bash
   npm start
   ```
4. **Access the App**:
   Open your browser and navigate to `http://localhost:3000`.
### Backend (MERN Version)
- **Express.js**: For handling server-side logic and APIs.
- **Node.js**: Runtime environment for backend development.

### Database (MERN Version)
- **MongoDB**: For secure storage of passwords.

### MERN Version

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/password-vault.git
   cd password-vault
   ```

2. **Install Dependencies**:
   - Frontend:
     ```bash
     cd client
     npm install
     ```
   - Backend:
     ```bash
     cd ../server
     npm install
     ```

3. **Setup Environment Variables**:
   - Create a `.env` file in the `server` directory with the following:
     ```env
     PORT=5000
     MONGO_URI=your_mongo_connection_string
     JWT_SECRET=your_jwt_secret
     ```

4. **Run the Application**:
   - Backend:
     ```bash
     cd server
     npm start
     ```
   - Frontend:
     ```bash
     cd client
     npm start
     ```

5. **Access the App**:
   Open your browser and navigate to `http://localhost:3000`.
