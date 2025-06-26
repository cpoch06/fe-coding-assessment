# 📝 To-Do List App – Frontend Coding Assessment

This is a full-stack CRUD To-Do List App built with **Next.js (App Router)**. It demonstrates creating and managing tasks with API routes handled as middleware-style functions via `app/api`.

---

## 📌 Overview

This assessment is designed to evaluate your frontend skills in the following areas:

- Creating a structure, component-based UI
- Handling asynchronous data with API endpoints
- Implementing CRUD operations (Create, Read, Update, Delete)
- Writing clean, maintainable code
- Making the UI responsive and mobile-friendly

---

## ⚙️ Getting Started

### Prerequisites

- Node.js (v20 or later)

### Setup & Running the App

1. **Fork this repository to your own GitHub account**  
   Click the "Fork" button at the top right of this page.

2. **Clone your forked repository**

### Install dependencies

```bash
npm install
```

### Start dev server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

---

## ✅ Your Tasks

- [ ] Add new tasks via an input field
- [ ] Display a list of tasks
- [ ] Mark tasks as complete/incomplete
- [ ] Edit task titles
- [ ] Delete tasks
- [ ] Responsive UI with Tailwind

---

## 🧪 API Endpoints

| Method | Endpoint     | Description            |
| ------ | ------------ | ---------------------- |
| GET    | `/api/todos` | Fetch all todos        |
| POST   | `/api/todos` | Create a new todo      |
| PUT    | `/api/todos` | Update title/completed |
| DELETE | `/api/todos` | Delete a todo          |

### ✅ Example Payloads

**POST**

```json
{ "title": "Write documentation" }
```

**PUT**

```json
{ "id": 123, "title": "Edit task title" }
```

**PUT (Toggle)**

```json
{ "id": 123, "title": "Edit documentation", "completed": true }
```

**DELETE**

```json
{ "id": 123 }
```

---

## 🚀 Features Completed

- Fully functional CRUD To-Do List with Next.js App Router
- Responsive, modern UI using Tailwind CSS
- Add, edit, delete, and toggle complete/incomplete for tasks
- All task operations use the provided `/api/todos/route.ts` API endpoints
- Mobile-friendly navigation with a hamburger menu and overlay
- Clean, accessible, and consistent design for both light and dark modes
- Task IDs are now displayed in a consistent, user-friendly format
- Error handling and loading states for all async operations
- No unnecessary API wrapper files; all API calls use the provided Next.js API route

## 🛠️ What Could Be Improved

- Add persistent storage (currently, tasks are in-memory and reset on server restart)
- Add user authentication for personal task lists
- Add due dates, priorities, or categories for tasks
- Add animations for task actions (add, edit, delete)
- Add tests (unit/integration) for components and API
- Improve accessibility (a11y) and keyboard navigation
- Add pagination or search for large task lists
- Add notifications or toasts for actions

---

## 🧑‍💻 Technical Decisions

### Component Structure
- The app is split into focused, reusable components: `TaskForm`, `TaskList`, `TaskManager`, and `DeleteModal` for clarity and maintainability.
- A custom hook (`useTasks`) manages all task-related state and API logic, keeping components clean and focused on UI.

### State Management
- React's `useState` and `useEffect` are used for local and side-effect state.
- Async actions (add, edit, delete, toggle) are handled with local loading/error state for responsive feedback.
- A dedicated local state is used for the add button to prevent unwanted loading animations from global state changes.

### API Integration
- All CRUD operations use direct `fetch` calls to the Next.js API route (`/api/todos`), ensuring a clear separation between frontend and backend.
- No unnecessary API wrapper files are used, keeping the codebase lean.

### TypeScript
- All components and hooks are fully typed for safety and maintainability.
- Shared types are defined in a central `types.ts` file.

### UI/UX
- The UI is fully responsive and mobile-friendly, using Tailwind CSS for rapid, consistent styling.
- Subtle, professional animations are used for task add, edit, and delete actions to enhance user experience.
- The app uses a technical, professional system font stack for a modern look and avoids external font dependencies.

### Error Handling
- All async actions have error handling and user feedback.
- Errors are displayed in a dismissible alert at the top of the task manager.

### Accessibility
- Semantic HTML and accessible button labels are used throughout.
- The UI is designed to be usable with keyboard and screen readers, with further improvements possible.

---



## 🧑‍💻 Submission

Please submit:

- GitHub repository link with your implementation
- Short summary of what features were completed and what could be improved

---

Good luck! We're excited to see what you build.
