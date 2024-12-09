# To-Do List Application

A simple To-Do list application that allows users to add, complete, delete, and organize tasks based on their status. This project is built with **Node.js** and **Express.js** for the backend, and plain HTML, CSS, and JavaScript for the frontend. Data is stored in-memory on the server.

## Features

- Add new tasks to your To-Do list.
- Mark tasks as completed while keeping them visible on the list.
- Delete tasks from the list.
- Automatically organize tasks:
  - Open tasks appear at the top (oldest first).
  - Completed tasks appear at the bottom.

## Technologies Used

- Backend: [Node.js](https://nodejs.org) with [Express.js](https://expressjs.com)
- Frontend: Plain HTML5, CSS3, and JavaScript (no framework).
- Data is stored in-memory on the server.

## Setup Instructions

1. **Clone the repository**:
   ```bash
   git clone https://github.com/NemesioNav/ToDoList.git
   cd ToDoList
2. **Install dependencies**: Make sure you have Node.js installed on your system. Then, run:
    ```bash
    npm install
3. **Run the server**:
    ```bash
    node server.js
    ```
    The server will start on http://localhost:3000 by default.
4. **Access the application**: Open your browser and navigate to http://localhost:3000 to use the To-Do list app.

## File Structure

* **server.js**: Backend logic, including API endpoints for handiling tasks.
* **public/**: Contains frontend files.
    * `index.html`: The main HTML page.
    * `script.js`: Handles frontend logic for interacting with the server.
    * `style.css`: Contains basic styles for the application.
* **node_modules/**: Dependencies installed via npm.
* **package.json**: Project metadata and dependencies.
* **package-lock.json**: Dependency lockfile.
* **README.md**: Documentation for the project.

## API Endpoints

Here’s a quick overview of the API endpoints:
* `GET /tasks`: Fetch all tasks.
* `POST /tasks`: Add a new task.
* `PUT /tasks/:id`: Mark a task as completed or update it.
* `DELETE /tasks/:id`: Delete a task.