## Basic CRUD Applications

CRUD (Create, Read, Update, Delete) applications form the foundation of web development, allowing you to learn how data flows through an app. Here’s a closer look at four beginner-friendly CRUD projects you can try.

## Task Tracker

This app helps users track and manage tasks with functionalities like adding, deleting, and updating tasks.

Below are the essential details of this project.

## Aspect	                     Details

Brief Working	            Users can add, edit, and delete tasks while tracking their progress.
Tools Used	                Express.js, MongoDB, Node.js
Skills Gained	            CRUD operations, database handling, RESTful API creation

## Features:

[Add, update, delete tasks
Mark tasks as completed
User-friendly interface]

## Application: 
A task tracker can be used in personal productivity apps, team project management, or even for time management purposes.

## Challenges and how to overcome them:

[Challenges	How to Overcome
Handling data persistence	Use a database like MongoDB
User authentication	Implement user authentication with JWT
Dynamic updates in the UI	Use front-end libraries like React]



###################################################################################################################
1. Set up Express.js server

    Initialize an Express.js application.

    Use middleware like express.json() to handle JSON requests.

    Set up routes to handle different CRUD operations.

2. Database Setup (MongoDB)

    Use a library like Mongoose to define a schema for the tasks collection in MongoDB.

        Each task document would typically include:

            title: the task name

            description: a brief description of the task

            status: to track if the task is completed or not

            created_at: timestamp when the task was created

            updated_at: timestamp when the task was last modified

3. CRUD Operations
Create Task (POST request)

    Route: /tasks

    When a POST request is made to /tasks, this endpoint will:

        Validate the request body to ensure it contains the necessary fields (title, description, etc.).

        Create a new task in the MongoDB database using the Mongoose model.

        Respond with the newly created task and a success status.

Logic:

    Use Mongoose’s create() or save() method to add the new task to the database.

    Return a response with the task data (excluding sensitive details like _id if needed).

Read Tasks (GET request)

    Route: /tasks

    When a GET request is made to /tasks, this endpoint will:

        Query the MongoDB database to retrieve all tasks associated with the authenticated user.

        Return the list of tasks as a JSON response.

Logic:

    Use Mongoose’s find() method to fetch tasks.

    Optionally, you can add filters (like completed status) to return only relevant tasks.

Update Task (PUT or PATCH request)

    Route: /tasks/:id

    When a PUT or PATCH request is made to /tasks/:id (with the task ID in the URL):

        Find the task in the database using the provided id.

        Update the task with the new data sent in the request body (e.g., mark it as completed, update description).

        Save the updated task in the database.

        Respond with the updated task data.

Logic:

    Use Mongoose’s findByIdAndUpdate() or findOneAndUpdate() to update the task.

    Ensure to handle validation and error checking (e.g., task not found).

    Optionally, you can use PATCH for partial updates.

Delete Task (DELETE request)

    Route: /tasks/:id

    When a DELETE request is made to /tasks/:id (with the task ID in the URL):

        Find and delete the task from the MongoDB database using the provided task ID.

        Respond with a success message or status indicating that the task has been deleted.

Logic:

    Use Mongoose’s findByIdAndDelete() to remove the task from the database.

    Handle the case where the task doesn’t exist and return a 404 error.

4. User Authentication (JWT)

    If you want to restrict tasks to individual users:

        Login: When a user logs in, generate a JWT token and send it to the client.

        Middleware: For each of the task-related routes, verify the JWT token to ensure the user is authenticated.

        Route protection: Use a middleware to decode the JWT and attach the user’s information (e.g., user ID) to the request object. This way, you can associate tasks with the authenticated user.

Logic:

    Use libraries like jsonwebtoken to sign and verify tokens.

    Include the token in the Authorization header of requests, then verify it in a middleware before proceeding to task operations.

    Ensure that tasks are created, updated, and deleted only by the authenticated user.

5. Error Handling

    You’ll want to handle errors like:

        Validation errors (e.g., missing required fields).

        Task not found (e.g., trying to update or delete a task that doesn’t exist).

        MongoDB connection issues.

        Unauthorized requests if JWT authentication fails.

Logic:

    Use Express’s error-handling middleware to catch any unhandled errors and send appropriate responses (e.g., 400 for bad requests, 404 for not found, 500 for internal server errors).

    Include descriptive error messages in the responses to help with debugging.

6. Example Middleware (JWT verification)

    This middleware will verify the JWT on each request to ensure the user is logged in before accessing the task routes.

    The middleware can decode the token and extract the user ID, which will be used to perform operations only on the authenticated user's tasks.

## Summary of Logic:

    Routes: Define routes to handle the different CRUD operations.

    Database: Use Mongoose to interact with MongoDB.

    Authentication: Protect routes using JWT authentication middleware.

    CRUD Operations:

        Create: Insert new tasks into MongoDB.

        Read: Fetch tasks from MongoDB.

        Update: Modify existing tasks in MongoDB.

        Delete: Remove tasks from MongoDB.

  ##  Error Handling: Ensure proper error responses for various edge cases.

This is the overall structure and logic for the server part of the Task Tracker app. You would have to implement these features in an actual server environment, but this gives you the foundation for managing task-related data with Express.js, MongoDB, and JWT authentication.

