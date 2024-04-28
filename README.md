# Notable App

This is a full-stack web application called Notable, designed to help users manage their notes effectively. The application is built with a React frontend and a Django backend, with PostgreSQL as the database. Notable allows users to create, view, edit, and delete notes, with seamless navigation provided by React Router.

## Frontend

The frontend of Notable is built using React, a popular JavaScript library for building user interfaces. It consists of the following components:

### Components

- **List of Notes**: Displays a list of note titles.
- **View/Edit Note**: Allows users to view and edit the full content of a selected note.
- **Create New Note**: Provides a form for users to create a new note, including fields for title and content.

### React Router

React Router is used for navigation between different views in the application. It ensures smooth transitions between the list view and the note view/edit mode.

## Backend (Python with Django)

The backend of Notable is implemented using Django, a high-level Python web framework. It provides a RESTful API with endpoints for performing CRUD operations on notes.

### Endpoints

- `GET /api/notes/`: Retrieves a list of all notes.
- `GET /api/notes/<id>/`: Retrieves details of a specific note.
- `POST /api/notes/`: Creates a new note.
- `PUT /api/notes/<id>/`: Updates an existing note.
- `DELETE /api/notes/<id>/`: Deletes a note.

### Django Models

Django models are used to define the Note schema, which includes fields for title and content. The Note model is synced with a PostgreSQL database, ensuring data persistence.

## Database: PostgreSQL

PostgreSQL is used as the database backend for Notable. Proper database migrations are implemented to synchronize the Django models with the database schema.

## Frontend-Backend Interaction

The React frontend communicates with the Django backend via HTTP requests to the defined API endpoints. Axios or fetch is used to make these requests from the React components to the Django API.

## Additional Features

Basic form validation is implemented both on the frontend and backend to ensure data integrity. For example, required fields are validated to prevent submission of incomplete data.

## Getting Started

To run the Notable application locally, follow these steps:

1. Clone this repository to your local machine.
2. Navigate to the frontend directory and run `npm install` to install dependencies.
3. Start the frontend server by running `npm start`.
4. Navigate to the backend directory and create a virtual environment using `python -m venv venv`.
5. Activate the virtual environment with `source venv/bin/activate` (Linux/Mac) or `venv\Scripts\activate` (Windows).
6. Install backend dependencies with `pip install -r requirements.txt`.
7. Apply database migrations with `python manage.py migrate`.
8. Start the Django server with `python manage.py runserver`.
9. You can now access the Notable application at http://localhost:3000 in your web browser.

## Contributors

- Your Name

Feel free to contribute to this project by submitting pull requests or reporting issues on GitHub. Thank you for using Notable!
