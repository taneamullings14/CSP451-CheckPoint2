# Collaboration Workflow Report

## 1) Issues Created
List the 3 issues you created (one per feature) and what each issue requested.

Because GitHub Issues were disabled for the forked repository, issues were simulated and documented in `docs/issues.txt`. Each issue represented a feature request assigned to a specific feature branch.

**Issue 1: User Authentication**
This issue requested improvements to the user authentication functionality. The goal was to enhance the login form behavior, validate user input, and ensure proper handling of login requests. This issue was addressed in the `feature/user-authentication` branch.

**Issue 2: Database Connection**
This issue requested the addition of database connection logic to the application. The task included creating or configuring a database module, establishing a connection during application startup, and ensuring the connection logic was reliable. This issue was addressed in the `feature/database-connection` branch.

**Issue 3: API Endpoints**
This issue requested the creation of a REST API structure for the application. The goal was to define API routes and endpoints, particularly for user-related data, and ensure responses were returned in proper JSON format. This issue was addressed in the `feature/api-endpoints` branch.

## 2) PR Summary (3 PRs)
For each PR:
- PR title
- linked issue
- key changes
- screenshots included? (Y/N)

 **PR Title:** [Feature] User Authentication
- **Linked Issue:** Issue 1 – User Authentication (simulated in docs/issues.txt)
- **Key Changes:**
  - Improved login form behavior
  - Added validation for username and password input
  - Updated documentation related to authentication functionality
- **Screenshots Included:** Yes

### Pull Request 2: Database Connection
- **PR Title:** [Feature] Database Connection
- **Linked Issue:** Issue 2 – Database Connection (simulated in docs/issues.txt)
- **Key Changes:**
  - Added database connection logic to the application
  - Integrated database initialization into application startup
  - Updated README documentation to describe database functionality
- **Screenshots Included:** Yes

### Pull Request 3: API Endpoints
- **PR Title:** [Feature] API Endpoints
- **Linked Issue:** Issue 3 – API Endpoints (simulated in docs/issues.txt)
- **Key Changes:**
  - Created REST API route structure
  - Implemented user-related API endpoints
  - Ensured API responses return proper JSON data
- **Screenshots Included:** Yes
(I will place screenshots else where)

## 3) Review Simulation Evidence
Explain:
- at least 2 review comments per PR (what was said and why)
- which PR had "Request changes" and how it was addressed
- how you ensured quality before merging

Each pull request underwent a simulated code review process to reflect real-world team collaboration practices. Since the project was completed individually, review feedback was provided through inline pull request comments.

For the **User Authentication** pull request, review comments focused on improving code clarity and robustness. Comments suggested adding clearer variable naming and improving validation handling for empty input fields. These comments were made to ensure the authentication logic was easy to understand and resilient to user input errors.

For the **Database Connection** pull request, review comments emphasized maintainability and best practices. Feedback included suggesting additional comments to explain the purpose of the database connection logic and recommending the use of environment variables for configuration. These comments were intended to improve long-term maintainability and security awareness.

For the **API Endpoints** pull request, review comments addressed input validation and response handling. Suggestions included validating request parameters before processing and adding clarification comments for HTTP status code usage. This helped ensure that the API behavior was predictable and aligned with REST standards.

The **User Authentication** pull request was selected as the pull request requiring changes. After review feedback was provided, a follow-up commit was pushed to the `feature/user-authentication` branch to address the comments. This included minor code adjustments and additional comments for clarity. Once these changes were made, a final review comment confirmed that all feedback had been addressed.

Quality was ensured before merging by reviewing all changes for correctness, resolving merge conflicts manually, verifying that the application ran successfully after each merge, and using the "Squash and merge" strategy to maintain a clean and readable commit history. Direct commits to the main branch were avoided to preserve code integrity.


## 4) Merge Strategy
Confirm you used **Squash and merge** and explain one benefit (clean history, easier rollback, etc.).


All pull requests in this project were merged into the `main` branch using the **Squash and merge** strategy.

Squash and merge was chosen because it condenses all commits from a feature branch into a single, meaningful commit on the main branch. This results in a cleaner and more readable commit history, making it easier to understand what changes were introduced by each feature. A clean history also simplifies troubleshooting and potential rollbacks, as each feature can be identified and reverted without navigating through multiple incremental commits.
