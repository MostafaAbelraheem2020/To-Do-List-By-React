
# To Do List Application (React)


A simple, responsive To-Do List app built with React and Material UI. It supports adding, editing, deleting, and marking tasks complete, and persists data using localStorage.

![App Screenshot](/public/images/To%20Do%20List%20Screenshot.png)
## Tools & Technologies
- React
- React Router
- Material UI (@mui/material, @mui/icons-material)
- Context API for state management (MainContext, ToastContext, FilterdContext)
- uuid for generating task IDs
- localStorage (key: storageTasks)

## Project Structure (important files)
- src/App.js — main app setup and context providers
- src/index.js — entry point and router setup
- src/components/ToDoList.js — layout and page composition
- src/components/Header/HomeBar.js — header and filters
- src/components/Content/Content.js — task logic (add/edit/delete)
- src/components/Content/ToDo.js — single task item component
- src/components/Content/MaySnackBar.js — short notifications (snackbars)
- src/components/Header/myAvatar.js — user avatar / badge
- src/components/FooterFolder/Footer.js — footer
- src/components/themes.js — MUI theme configuration

## Getting Started (run locally)
1. Install dependencies:
```bash
npm install
tart development server:
Build for production:
Run tests:
How to Use
Add task: use the input field at the bottom and click Add.
Edit task: click the edit (pencil) icon to open the edit dialog.
Delete task: click the delete icon and confirm.
Mark complete/incomplete: click the check icon.
Filter tasks: use header filters (All / To Do / Completed).
Notes for Developers
Tasks persist in localStorage under the key storageTasks.
Context shapes:
MainContext — contains tasks and setters.
ToastContext — handles snackbar messages and controls.
To extend:
Add user authentication
Add cloud sync / remote storage
Implement drag-and-drop ordering
Improve mobile responsiveness


