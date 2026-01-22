
# CSP451 Web Starter — Week 2 Checkpoint 2

This repository is a **starter template** for practicing:
- Git branching strategies (GitHub Flow / Git Flow-lite)
- Pull Requests + review workflow
- Intentional merge conflicts + manual resolution
- Clean history using **Squash and merge**

## Quick Start

```bash
npm install
npm run dev
```

Open: http://localhost:3000

## Structure

- `src/app.js` — Express server entry
- `src/routes/` — route modules
- `src/controllers/` — controller functions
- `src/services/` — reusable services (auth helpers, etc.)
- `src/db/` — database module (starts as a stub)
- `public/` — static UI (includes `/login`)
- `docs/` — reports + screenshots checklist

## Required Branches
Create these branches exactly:
- `feature/user-authentication`
- `feature/database-connection`
- `feature/api-endpoints`

## Suggested Conflict Targets
To intentionally create a merge conflict, edit the same lines in one of:
- `README.md`
- `src/app.js`
- `src/routes/api.js`

## How to Run Tests (lightweight)
```bash
npm test
npm run lint
```

## Database Connection

This project includes a simulated database connection module to demonstrate how an application initializes and manages a dtabase connection without requiring a real database. 

The connection is initialied on server startup, and a status endpoint is exposed at:

GET /db-status

- Add databases connection module
- Configure connection logic

## User Authentication
- GET /login - shows login form
- POST /login - validates username/password

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

