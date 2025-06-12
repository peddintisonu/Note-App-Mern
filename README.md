# My Notes - MERN Stack Application

A clean, responsive, and full-featured note-taking application built with the MERN stack (MongoDB, Express, React, Node.js). Includes dark/light themes and is designed for a seamless user experience without requiring user authentication.

**[➡️ Live Demo Link Here ⬅️]** *(This can be added later after deploying)*

---

## Features

-   **Full CRUD Functionality:** Create, Read, Update, and Delete notes.
-   **Modern UI:** Clean and intuitive interface for managing notes.
-   **Theming:** Switch between a "Coffee" light theme and a cohesive dark theme. Your preference is saved in local storage.
-   **Responsive Design:** Looks great on desktops, tablets, and mobile devices.
-   **Toast Notifications:** User-friendly, non-blocking notifications for actions like saving, deleting, or validation errors.
-   **No Login Required:** Anonymous and immediate access to note-taking.
-   **Client-Side Routing:** Fast navigation between pages handled by React Router.
-   **Custom Fonts & Icons:** Uses the self-hosted 'Poppins' font and `react-icons` for a polished look.

---

## Tech Stack

-   **Frontend:**
    -   React.js
    -   Vite (Build Tool)
    -   React Router
    -   Axios (for API requests)
    -   React Toastify
    -   React Icons
-   **Backend:**
    -   Node.js
    -   Express.js
    -   MongoDB (with Mongoose)
    -   CORS
-   **Database:**
    -   MongoDB Atlas (or local MongoDB instance)

---

## Getting Started (Local Setup)

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

-   [Node.js](https://nodejs.org/) (which includes npm) installed on your machine.
-   A MongoDB database connection string (either from a local installation or a free [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) account).

### Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/peddintisonu/Note-App-Mern.git
    cd Note-App-Mern
    ```

2.  **Install Backend Dependencies:**
    ```bash
    cd backend
    npm install
    ```

3.  **Create a `.env` file in the `backend` directory:**
    Create a new file named `.env` and add your environment variables. Use the `.env.example` as a guide.
    ```
    PORT=5000
    MONGO_URI=your_mongodb_connection_string_here
    ```

4.  **Install Frontend Dependencies:**
    ```bash
    cd ../frontend
    npm install
    ```

5.  **Create a `.env` file in the `frontend` directory:**
    This file should point to your local backend server.
    ```
    VITE_API_URL=http://localhost:5000/api
    ```

### Running the Application

You will need two separate terminals to run both the backend and frontend servers simultaneously.

1.  **Run the Backend Server (from the `backend` directory):**
    ```bash
    npm run dev
    ```
    The server should now be running on `http://localhost:5000`.

2.  **Run the Frontend Server (from the `frontend` directory):**
    ```bash
    npm run dev
    ```
    The application will be accessible at `http://localhost:5173` (or whatever port Vite chooses).