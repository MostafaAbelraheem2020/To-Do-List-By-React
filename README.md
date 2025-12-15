# To Do List (React + MUI)

Simple task manager built with React and Material UI that lets you add, edit, delete, and toggle tasks while persisting data in the browser (`localStorage`). This file was organized and formatted with assistance from AI tooling.


## Screenshots
- screenshot-1: `public/images/To Do List Screenshot-1.png`
- screenshot-2: `public/images/To Do List Screenshot-2.png`
- screenshot-3: `public/images/To Do List Screenshot-3.png`
- screenshot-4: `public/images/To Do List Screenshot-4.png`
 

## Features
- Add tasks with unique IDs.
- Edit task name or details via dialogs.
- Delete tasks with confirmation.
- Toggle completion state with quick snackbar feedback.
- Filter by all, completed, or not-completed.
- Auto-save to `localStorage` so data survives reloads.
- Responsive UI using MUI plus custom styling in `App.css`.

## Requirements
- Node.js 18+ (recommended)
- npm (bundled with Node)

## Install & Run
```bash
npm install
npm start
```

### Available Scripts
- `npm start` start dev server at http://localhost:3000
- `npm run build` create production build in `build`
- `npm test` run default CRA tests

## Project Structure
```
public/
  images/          screenshots and assets
src/
  components/
    Content/      task input/management UI + dialogs
    Context/      providers: tasks, filter, toast
    Header/       top bar with filters and avatar
    FooterFolder/ simple footer
    themes.js     custom MUI theme config
    ToDoList.js   wraps header/content/footer with filter provider
  App.js          root sets up theme and contexts
  App.css         extra styles
  index.js        entry with BrowserRouter
```


## How to Use
1) Type a task name in the input and click "Add".
2) Use top bar buttons to filter (Completed / To do / All tasks).
3) On each task card:
   - ✅ toggles completion.
   - ✏️ opens the edit dialog.
   - 🗑️ opens the delete dialog.
4) Changes persist immediately to the browser.

## Technical Notes
- **State**: `MainContext` for tasks, `FilterdContext` for filtering, `MyToastContext` for notifications.
- **Storage**: read/write `localStorage` under `storageTasks`.
- **Notifications**: `MySnackBar` renders snackbars from context values.
- **Styling**: custom theme in `components/themes.js` with primary/secondary colors.

## Future Improvements
- Cloud sync/user accounts.
- Due dates and reminders.
- Accessibility polish and keyboard shortcuts.
- Unit/integration tests for key components.

  "deployment": {
    "platform": "Vercel",
    "status": "under development",
    "createdBy": "Mostafa Abdellraheem",
    "github": "https://github.com/MostafaAbelraheem2020",
    "linkedin": "https://www.linkedin.com/in/mostafa-mohamed-63b87627a/",
    "whatsapp": "https://wa.me/01010317417"
  } 