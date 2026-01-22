# Conflict Resolution Report (≈300 words)

## 1) Conflict Scenario
Describe:
- which file conflicted
- which branches were involved
- what each branch changed

The merge conflict occurred in the files `README.md` and `src/app.js` while merging the `feature/database-connection` branch into the `main` branch.

The conflict involved the following branches:
- `main`
- `feature/database-connection`

Each branch modified overlapping sections of the same files:

In `README.md`, the `main` branch already contained documentation updates from previously merged feature branches, including descriptions of user authentication and API endpoints. At the same time, the `feature/database-connection` branch added new documentation describing the database connection functionality. Because both branches edited the same section of the README file, Git could not automatically determine which changes should take precedence.

In `src/app.js`, the `main` branch included updates related to application initialization and route setup from other merged features. The `feature/database-connection` branch introduced database connection logic that was added near the same initialization area of the file. Since both branches changed overlapping lines in this file, Git flagged the conflict and required manual resolution.

## 2) What You Saw
Describe the conflict markers and include your screenshot reference.

When the merge conflict occurred, Git inserted conflict markers directly into the affected files (`README.md` and `src/app.js`) to highlight the conflicting sections.

The conflict markers appeared in the following format:

<<<<<<< HEAD
Code from the main branch
=======
Code from the feature/database-connection branch
>>>>>>> feature/database-connection

The section between `<<<<<<< HEAD` and `=======` represented the changes from the `main` branch, while the section between `=======` and `>>>>>>> feature/database-connection` represented the changes from the feature branch. These markers indicated that Git could not automatically decide which version of the code should be kept.
(I will put load photo else where) 

## 3) Resolution Strategy
Explain:
- what you kept vs removed (and why)
- how you verified your final version works (run app/tests)

During conflict resolution, changes from both branches were reviewed line by line to determine which content should be kept or removed.

In `README.md`, all valid documentation from both branches was preserved. The existing sections describing user authentication and API endpoints from the `main` branch were kept, while the database connection documentation from the `feature/database-connection` branch was added. Duplicate or conflicting headings were removed to ensure the README remained clear, structured, and free of redundant information.

In `src/app.js`, the database connection logic introduced in the `feature/database-connection` branch was kept because it added required functionality for the application. At the same time, existing application initialization and route configuration code from the `main` branch was preserved to avoid breaking previously implemented features. Conflicting lines that duplicated setup logic were removed to prevent redundant execution and potential runtime errors.

After resolving the conflicts, all conflict markers were removed and the files were saved. The application was then verified by running the project locally using the development server command. The application started successfully without errors, and core functionality such as routing and server initialization continued to work as expected. This confirmed that the final merged version was stable and functional.


## 4) Prevention Methods
Discuss 2–4 prevention methods, such as:
- smaller PRs
- communicating before refactors
- avoiding editing the same lines
- using feature flags
- rebasing/merging from main frequently

Merge conflicts can be reduced or avoided entirely by following established team-based development practices.

One effective strategy is keeping pull requests small and focused. Smaller PRs limit the number of changed files and lines of code, making it less likely that multiple developers will modify the same areas simultaneously. This also makes reviews easier and conflicts simpler to resolve if they do occur.

Another important prevention method is clear communication before making major changes, such as refactoring shared files. Informing the team before modifying core files like application entry points or configuration files allows others to avoid overlapping changes during the same development period.

Avoiding edits to the same lines of code whenever possible also reduces conflicts. Teams can achieve this by dividing responsibilities clearly and structuring code so that features are isolated into separate modules rather than centralized files.

Finally, frequently merging or rebasing from the main branch helps keep feature branches up to date. Regularly pulling changes from `main` ensures that conflicts are discovered early, when they are smaller and easier to resolve, rather than accumulating over time.
