**MERN Booking App**

**Description:**

This is a MERN (MongoDB, Express, React, Node.js) stack project that implements a booking app (Airbnb Clone). The app allows users to book places and manage their own places. Users can create and update their places. The app provides a seamless and user-friendly experience for booking places.

**Features:**

1. User Registration and Authentication:
   - Users can register for an account and log in securely.
   - Passwords are hashed and stored securely in the database.

2. Home Page:
   - The home page displays a list of available places for booking.
   - Users can browse through the list and view details of each place.

3. Place Booking:
   - Users can select a place they want to book and specify booking details (e.g., dates, number of guests).
   - Upon successful booking, the place's availability is updated.

4. User's Places Management:
   - Logged-in users can view and manage the places they have created.
   - Users can create new places, update existing ones, and delete places they no longer want to offer for booking.

5. Image Upload:
   - When creating or updating a place, users can upload images to showcase the place to potential guests.

**Installation:**

1. Clone the repository:

   ```
   git clone https://github.com/Mudit-Jxin7/Airbnb.git
   cd Airbnb
   ```

2. Install dependencies:

   ```
   cd client
   npm install
   cd ../server
   npm install
   ```

3. Configure Environment Variables:
  Create a `.env` file in the `server` directory and set the following environment variables: <br/>
     ```
     MONGO_URI=<your_mongodb_uri>
     ```

4. Start the Development Server:

   ```
   cd server
   npm run dev
   ```

   This will start the backend server on `http://localhost:4000`.

   ```
   cd client
   npm start
   ```

   This will start the frontend development server on `http://127.0.0.1:5173`.

**Folder Structure:**

```
Airbnb/
  ├── client/
  │    ├── public/
  │    └── src/
  │         ├── pages/
  │         ├── App.js
  │         └── ...
  ├── server/
  │    ├── models/
  │    ├── index.js
  │    └── ...
  └── ...
```

**Tech Stack:**

- Frontend:
  - React.js
  - HTML/CSS

- Backend:
  - Node.js with Express.js
  - MongoDB for database

**Contributing:**

Contributions to the project are welcome! If you find any issues or have new feature suggestions, feel free to submit a pull request or open an issue on the repository.
