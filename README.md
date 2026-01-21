# CSP451 Checkpoint  2

## Project Overview
This project simulates a 3-person team working on a weba app.
It includes user authentication, database connection, and API endpoints.

## User Authentication
_ GET /login - shows login form
_ POST /login - validates username/password

- Login form includes basic validation to ensure user credentials are correct.
- All authentication logic is handled in the `feature/user-authentication` branch.

## Database Connection
- GET /api/users - fetches all users 
- GET /api/users/:id - fetches a single user by ID
 
- Database module connects to a local or cloud database.
- Connection logic is implemented in the `feature/database-connection` branch.

## API Endpoints
- POST /api/users - creates a new user
- PUT /api/users/:id - updates an existing user
- DELETE /api/users/:id - deletes a user

- All endpoints follow REST conventions.
- API structure and controllers are implemented in the `feature/api-endpoints` branch.

## Notes
- Each feature branch contains at least 50 lines of functional code.
- Documentation updated per branch requirements.
- Merge conflicts resolved manually before committing.
