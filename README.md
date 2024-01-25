# 
npm start 
Access the application in your web browser: http://localhost:3000   


API Endpoints
GET /show: View all tasks.
POST /add_task: Add a new task.
GET /complate/:id: Mark a task as complete.
POST /update/:id: Edit a task.
GET /delete/:id: Delete a task.

npm test

Key Decisions
Data Persistence: MongoDB is used as the database for storing tasks.
Validation: Joi is used for request payload validation.
Error Handling: Graceful error handling is implemented for database operations and validation.
