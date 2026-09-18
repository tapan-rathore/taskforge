# TaskFlow — Complete React Project Roadmap

> A production-style project management SaaS application built with React.

---

# 1. Project Overview

## Project Name

**TaskFlow**

## Project Type

Project Management / SaaS Dashboard

## Goal

Build a realistic project management platform where users can:

- Create and manage projects
- Create and manage tasks
- Organize tasks using a Kanban board
- Assign tasks to team members
- Track project progress
- Search, filter and sort tasks
- Manage team members
- Receive notifications
- Comment on tasks
- Manage their profile/settings
- Switch between light and dark themes

The project should demonstrate practical knowledge of:

- React
- React Router
- Redux Toolkit
- Axios
- REST APIs
- Authentication
- Form handling
- Reusable components
- Custom hooks
- Performance optimization
- Responsive UI
- Error handling
- Loading states
- Application architecture

---

# 2. What We Are Trying to Demonstrate

This project is NOT primarily about how many features we can add.

The goal is to demonstrate that we understand:

```text
How to structure a React application
            ↓
How components communicate
            ↓
How application state is managed
            ↓
How APIs are consumed
            ↓
How authentication works
            ↓
How routes are protected
            ↓
How complex UI state is handled
            ↓
How a production application is organized
```

Therefore:

> Every feature should have a reason for existing.

We should not add Redux just because "Redux is on the resume."

We should use Redux where centralized application state actually makes sense.

---

# 3. Technology Stack

## Frontend

```text
React
Vite
JavaScript
Tailwind CSS
```

## Routing

```text
React Router
```

## State Management

```text
Redux Toolkit
React Redux
```

## HTTP Client

```text
Axios
```

## Forms

Recommended:

```text
React Hook Form
```

Optional validation:

```text
Zod
```

## Charts

Use one chart library when we reach the dashboard.

Example:

```text
Recharts
```

## Drag & Drop

Use a modern drag-and-drop library when we implement Kanban.

## Icons

Example:

```text
Lucide React
```

## Notifications

Example:

```text
React Hot Toast
```

## Backend

Initially:

```text
Mock API / JSON Server / suitable REST API
```

Later:

```text
Node.js
Express
MongoDB
```

The frontend should be designed so that replacing the mock API with a real backend does not require rewriting the entire application.

---

# 4. Development Philosophy

We will build TaskFlow in layers.

```text
Foundation
    ↓
UI Architecture
    ↓
Routing
    ↓
Authentication
    ↓
API Layer
    ↓
Redux
    ↓
Projects
    ↓
Tasks
    ↓
Kanban
    ↓
Team
    ↓
Dashboard
    ↓
Advanced Features
    ↓
Performance
    ↓
Testing
    ↓
Deployment
```

Do NOT jump directly to:

```text
Redux
Authentication
Backend
WebSockets
```

before understanding the application structure.

---

# 5. High-Level Application Structure

The application will have two major areas.

```text
TaskFlow
│
├── Public Area
│
│   ├── Login
│   ├── Register
│   └── Forgot Password
│
│
└── Private Application
    │
    ├── Dashboard
    ├── Projects
    ├── Tasks
    ├── Team
    ├── Notifications
    └── Settings
```

---

# 6. Application Routes

Our route structure will eventually look approximately like:

```text
/
│
├── /login
├── /register
│
└── /app
    │
    ├── /dashboard
    │
    ├── /projects
    │
    ├── /projects/:projectId
    │
    ├── /tasks
    │
    ├── /tasks/:taskId
    │
    ├── /team
    │
    ├── /notifications
    │
    └── /settings
```

We will use a layout architecture similar to:

```text
Router
│
├── AuthLayout
│   ├── Login
│   ├── Register
│   └── ForgotPassword
│
└── ProtectedRoute
    │
    └── MainLayout
        │
        ├── Sidebar
        ├── Navbar
        └── Outlet
```

---

# 7. Why Use Layouts?

Imagine every page contains:

```jsx
<Navbar />
<Sidebar />
<Page />
<Footer />
```

That creates duplication.

Instead:

```text
MainLayout
│
├── Navbar
├── Sidebar
└── Outlet
```

Then:

```jsx
<Outlet />
```

renders the current page.

Therefore:

```text
/dashboard
/projects
/tasks
/team
```

all share the same application shell.

This demonstrates proper React Router architecture.

---

# 8. Initial Folder Structure

Start with this:

```text
src/
│
├── assets/
│
├── components/
│   │
│   ├── common/
│   ├── layout/
│   ├── ui/
│   ├── dashboard/
│   ├── projects/
│   ├── tasks/
│   └── team/
│
├── pages/
│   │
│   ├── auth/
│   ├── dashboard/
│   ├── projects/
│   ├── tasks/
│   ├── team/
│   ├── notifications/
│   └── settings/
│
├── layouts/
│   ├── AuthLayout.jsx
│   └── MainLayout.jsx
│
├── routes/
│   ├── AppRouter.jsx
│   └── ProtectedRoute.jsx
│
├── store/
│   ├── store.js
│   └── slices/
│
├── services/
│
├── hooks/
│
├── utils/
│
├── constants/
│
├── App.jsx
└── main.jsx
```

---

# 9. Why This Folder Structure?

## components/

Reusable UI pieces.

Example:

```text
Button
Modal
Input
Card
Navbar
Sidebar
TaskCard
ProjectCard
```

A component should generally represent a reusable piece of UI.

---

## pages/

Actual route-level screens.

Example:

```text
Dashboard.jsx
Projects.jsx
ProjectDetails.jsx
Tasks.jsx
Team.jsx
Settings.jsx
```

A page combines components.

For example:

```text
Projects.jsx

    ↓

SearchBar
FilterBar
ProjectCard
Pagination
EmptyState
```

---

## layouts/

Defines the common application structure.

```text
MainLayout
AuthLayout
```

---

## routes/

Responsible for routing logic.

```text
AppRouter
ProtectedRoute
```

---

## store/

Global application state.

```text
authSlice
projectSlice
taskSlice
teamSlice
uiSlice
notificationSlice
```

---

## services/

API communication.

```text
authService
projectService
taskService
teamService
```

Components should NOT directly contain all API logic.

---

## hooks/

Reusable React logic.

Example:

```text
useDebounce
useModal
useTheme
useAuth
```

---

## utils/

Pure helper functions.

Example:

```text
formatDate()
calculateProgress()
formatCurrency()
```

---

# 10. Phase 0 — Project Setup

## Goal

Create a clean React project.

### Tasks

```text
[ ] Create Vite project
[ ] Install dependencies
[ ] Configure Tailwind
[ ] Configure React Router
[ ] Configure Redux Toolkit
[ ] Configure Axios
[ ] Configure icons
[ ] Configure toast notifications
[ ] Create folder structure
[ ] Setup Git
[ ] Create initial README
```

Initial dependencies will roughly include:

```text
react
react-dom
react-router-dom
@reduxjs/toolkit
react-redux
axios
lucide-react
react-hot-toast
```

Additional libraries will be installed only when needed.

---

# 11. Phase 1 — Application Shell

## Goal

Before implementing business logic, create the application's visual structure.

Build:

```text
MainLayout
│
├── Sidebar
│
├── Navbar
│
└── Main Content
```

### Sidebar

Include:

```text
TaskFlow

Dashboard
Projects
Tasks
Team
Notifications
Settings

────────────

User Profile
Logout
```

### Navbar

Include:

```text
☰
Search
Notifications
Theme
Profile
```

---

# 12. Why Build the Shell First?

Because every private page will use it.

If we build it first:

```text
Dashboard
Projects
Tasks
Team
Settings
```

can all reuse the same structure.

It also lets us test:

- responsive design
- routing
- nested routes
- sidebar behavior
- mobile navigation

before the application becomes complicated.

---

# 13. Phase 2 — Routing

Create:

```text
AppRouter
```

Routes:

```text
/login
/register

/app/dashboard
/app/projects
/app/projects/:projectId
/app/tasks
/app/tasks/:taskId
/app/team
/app/notifications
/app/settings
```

Use nested routes.

Conceptually:

```text
/app
   │
   └── MainLayout
          │
          ├── dashboard
          ├── projects
          ├── tasks
          ├── team
          └── settings
```

---

# 14. Phase 3 — Authentication UI

Create:

```text
Login
Register
ForgotPassword
```

Do not connect a real backend immediately.

First build the UI.

Login form:

```text
Email
Password

[ Login ]

Forgot password?
Don't have an account? Register
```

Register:

```text
Name
Email
Password
Confirm Password

[ Create Account ]
```

---

# 15. Phase 4 — Form Handling

Introduce:

```text
React Hook Form
```

Learn and implement:

```text
register()
handleSubmit()
formState.errors
watch()
reset()
```

Add validation.

Examples:

```text
Email required
Password minimum length
Passwords must match
```

---

# 16. Phase 5 — Authentication State

Now introduce Redux.

Create:

```text
authSlice.js
```

State:

```js
{
    user: null,
    token: null,
    isAuthenticated: false,
    loading: false,
    error: null
}
```

Actions/thunks:

```text
login
register
logout
getCurrentUser
```

---

# 17. Protected Routes

Create:

```text
ProtectedRoute.jsx
```

Logic:

```text
Is user authenticated?
        │
    ┌───┴───┐
    │       │
   YES      NO
    │       │
 render     redirect
 app        /login
```

This is an important real-world routing concept.

---

# 18. Phase 6 — API Architecture

Create:

```text
services/
│
├── api.js
├── authService.js
├── projectService.js
├── taskService.js
├── teamService.js
└── notificationService.js
```

---

# 19. Axios Instance

Instead of:

```js
axios.get("https://api.example.com/projects");
```

everywhere, create one Axios instance.

Concept:

```text
api
│
├── baseURL
├── headers
└── interceptors
```

Then services use:

```js
api.get("/projects");
api.post("/projects");
api.patch("/projects/:id");
api.delete("/projects/:id");
```

---

# 20. Why Separate Services?

Bad:

```text
Component
    ↓
Axios
    ↓
API
```

everywhere.

Better:

```text
Component
    ↓
Redux / Service
    ↓
API Service
    ↓
Axios
    ↓
Backend
```

Benefits:

- easier maintenance
- reusable API logic
- easier debugging
- easier backend replacement
- cleaner components

---

# 21. Phase 7 — Project Management

Now implement the actual application.

Create:

```text
/projects
```

Features:

```text
[ ] View projects
[ ] Create project
[ ] Edit project
[ ] Delete project
[ ] Search projects
[ ] Filter projects
[ ] Project details
```

Project model:

```js
{
    id,
    name,
    description,
    status,
    priority,
    owner,
    members,
    startDate,
    dueDate,
    createdAt
}
```

---

# 22. Project UI

Project list:

```text
Projects

[ Search... ]

[ All ] [ Active ] [ Completed ]

[ + New Project ]

--------------------------------

Project Card
Project Card
Project Card
Project Card
```

Project details:

```text
Project Header
Project Information

Progress

Tasks
Team
Activity
```

---

# 23. Phase 8 — Redux Project State

Create:

```text
projectSlice.js
```

State:

```js
{
    projects: [],
    selectedProject: null,
    loading: false,
    error: null
}
```

Async operations:

```text
fetchProjects
fetchProject
createProject
updateProject
deleteProject
```

Use:

```text
createAsyncThunk
```

for asynchronous operations.

---

# 24. Phase 9 — Task Management

This is the heart of TaskFlow.

Task model:

```js
{
    id,
    title,
    description,
    status,
    priority,
    projectId,
    assignee,
    labels,
    dueDate,
    comments,
    createdAt,
    updatedAt
}
```

Statuses:

```text
TODO
IN_PROGRESS
REVIEW
DONE
```

Priority:

```text
LOW
MEDIUM
HIGH
URGENT
```

---

# 25. Tasks Page

Create:

```text
/tasks
```

Features:

```text
[ ] Task list
[ ] Search
[ ] Filter
[ ] Sort
[ ] Create task
[ ] Edit task
[ ] Delete task
[ ] Assign task
[ ] Change status
```

---

# 26. Phase 10 — Kanban Board

Create:

```text
/projects/:projectId/board
```

Structure:

```text
TODO
│
├── Task
├── Task
└── Task

IN PROGRESS
│
├── Task
└── Task

REVIEW
│
└── Task

DONE
│
├── Task
└── Task
```

Implement drag and drop.

When a task moves:

```text
TODO
 ↓
IN_PROGRESS
```

the application should update its status.

---

# 27. Why Kanban Is Important

This gives us a realistic complex UI.

You will need to understand:

```text
Drag event
    ↓
Identify task
    ↓
Identify destination
    ↓
Update state
    ↓
Update UI
    ↓
Persist change through API
```

This is much more valuable than a simple CRUD project.

---

# 28. Phase 11 — Task Details

Clicking a task opens:

```text
Task Details
```

Display:

```text
Title
Description
Status
Priority
Assignee
Due Date
Labels
Comments
Activity
```

Actions:

```text
Edit
Delete
Change status
Change priority
Assign user
Add comment
```

---

# 29. Phase 12 — Team Management

Create:

```text
/team
```

Display:

```text
Team Members

Name
Email
Role
Status
Tasks
```

Roles:

```text
Admin
Manager
Member
Viewer
```

Implement:

```text
[ ] Add member
[ ] Remove member
[ ] Assign role
[ ] Assign tasks
```

---

# 30. Role-Based UI

Example:

```text
Admin
├── Manage team
├── Delete project
└── Manage settings

Manager
├── Create project
├── Manage tasks
└── Manage team tasks

Member
├── View projects
├── Update assigned tasks
└── Add comments

Viewer
└── Read-only access
```

This introduces an important real-world frontend concept:

> UI permissions are different from backend security.

The frontend can hide/disable actions for UX, but the backend must ultimately enforce authorization.

---

# 31. Phase 13 — Dashboard

Now build the dashboard using the data already available.

Dashboard cards:

```text
Total Projects
Active Projects
Total Tasks
Completed Tasks
Overdue Tasks
```

Example:

```text
┌─────────────┐
│ Total Tasks │
│     42      │
└─────────────┘
```

---

# 32. Dashboard Charts

Add:

```text
Tasks by Status
Tasks by Priority
Project Progress
Weekly Activity
```

Example:

```text
Task Status

TODO          ███████
IN PROGRESS   █████
REVIEW        ███
DONE          ███████████
```

Use a chart library rather than manually drawing charts.

---

# 33. Phase 14 — Search

Implement global search.

Search:

```text
Projects
Tasks
Team Members
```

Use:

```text
Debouncing
```

Flow:

```text
User types
    ↓
Wait ~300ms
    ↓
Send request
    ↓
Display results
```

This demonstrates a useful frontend optimization technique.

---

# 34. Phase 15 — Filtering

Task filters:

```text
Status
Priority
Assignee
Project
Due Date
```

Example:

```text
Status: In Progress
Priority: High
Assignee: Tapan
```

Results should update without unnecessary API requests where appropriate.

---

# 35. Phase 16 — Sorting

Implement:

```text
Newest
Oldest
Priority
Due Date
Title
```

Understand when sorting should happen:

```text
Client-side
```

versus:

```text
Server-side
```

For large datasets, server-side filtering/sorting/pagination is generally preferable.

---

# 36. Phase 17 — Pagination

Implement pagination when appropriate.

Example:

```text
← Previous

1  2  3  4  5

Next →
```

Understand:

```text
page
limit
offset
total
```

---

# 37. Phase 18 — Notifications

Create:

```text
/notifications
```

Examples:

```text
Rahul assigned you a task.

Priya commented on your task.

Checkout UI is due tomorrow.

You were added to E-commerce project.
```

Notification state:

```js
{
    notifications: [],
    unreadCount: 0
}
```

---

# 38. Phase 19 — Comments

Task comments:

```text
Task
│
├── Description
│
├── Comments
│   ├── User A
│   ├── User B
│   └── Current User
│
└── Add Comment
```

Implement:

```text
Create comment
Edit comment
Delete comment
```

---

# 39. Phase 20 — Dark Mode

Implement:

```text
Light
Dark
System
```

Persist preference.

Possible state:

```js
{
    theme: "dark"
}
```

Understand the difference between:

```text
UI state
```

and:

```text
server/application state
```

Theme belongs to UI/client state.

---

# 40. Phase 21 — Loading States

Every async operation should have a meaningful loading state.

Examples:

```text
Fetching projects...
Fetching tasks...
Creating project...
Deleting task...
Updating profile...
```

Use:

```text
Skeletons
Spinners
Disabled buttons
Progress indicators
```

Avoid making the entire application freeze while one small component is loading.

---

# 41. Phase 22 — Error Handling

Handle:

```text
Network error
401 Unauthorized
403 Forbidden
404 Not Found
500 Server Error
Validation errors
Timeouts
```

Create reusable UI:

```text
ErrorState
EmptyState
NotFound
```

---

# 42. Phase 23 — Empty States

Never leave a blank screen.

Instead:

```text
No projects yet.

Create your first project to get started.

[ + Create Project ]
```

For tasks:

```text
No tasks found.

Try changing your filters.
```

This is an important production UI practice.

---

# 43. Phase 24 — Reusable UI Components

Build a reusable UI system.

Example:

```text
components/ui/

Button
Input
Select
Modal
Dropdown
Badge
Avatar
Card
Table
Tabs
Tooltip
Skeleton
Spinner
EmptyState
ErrorState
```

The objective is:

```text
Write once
    ↓
Reuse everywhere
```

---

# 44. Phase 25 — Custom Hooks

Create hooks where logic repeats.

Examples:

```text
useDebounce()
useModal()
useAuth()
useTheme()
usePagination()
useLocalStorage()
```

Example:

```text
useDebounce(search)
```

can be reused for:

```text
Project Search
Task Search
Member Search
Global Search
```

---

# 45. Phase 26 — Performance Optimization

Only optimize after the application works.

Learn and apply:

```text
React.memo
useMemo
useCallback
lazy()
Suspense
```

Also consider:

```text
Code splitting
Lazy routes
Image optimization
Avoid unnecessary renders
Stable keys
Pagination
Debounced search
```

Important:

> Do not use useMemo/useCallback everywhere just to say you used them.

Optimization should solve an actual problem.

---

# 46. Phase 27 — React Architecture Review

At this stage, stop and review the entire application.

Ask:

```text
Is this component too large?

Is this logic duplicated?

Should this state be local?

Should this state be global?

Does this belong in Redux?

Should this be a custom hook?

Should this API call live in services?

Is this component reusable?

Is this page doing too much?
```

Refactor before adding more features.

---

# 47. State Management Strategy

One of the most important things to learn from this project:

> Not everything belongs in Redux.

Use local state for:

```text
Modal open/close
Input value
Temporary UI state
Dropdown state
Form state
```

Use Redux for shared application state such as:

```text
Authenticated user
Projects
Tasks
Notifications
Global UI preferences
```

Conceptually:

```text
Local UI state
       ↓
useState / useReducer

Global application state
       ↓
Redux Toolkit

Server data
       ↓
API + Redux async workflows
```

---

# 48. API Data Flow

Understand this flow completely:

```text
Component
    ↓
dispatch(fetchProjects())
    ↓
Redux Thunk
    ↓
projectService
    ↓
Axios
    ↓
Backend API
    ↓
Response
    ↓
Thunk fulfilled
    ↓
Redux reducer
    ↓
Redux store
    ↓
useSelector()
    ↓
Component
    ↓
UI
```

This is one of the most important flows in the entire project.

---

# 49. Project Data Flow

For example:

```text
User clicks "Create Project"
            ↓
Form submission
            ↓
dispatch(createProject(data))
            ↓
Redux thunk
            ↓
projectService.createProject()
            ↓
Axios POST
            ↓
Backend
            ↓
Response
            ↓
Redux fulfilled
            ↓
projects state updated
            ↓
Project list re-renders
```

You should be able to explain this in an interview.

---

# 50. Backend Evolution

We will initially make the frontend work with mock data.

Then eventually replace:

```text
Mock API
```

with:

```text
Node.js
   ↓
Express
   ↓
MongoDB
```

Backend structure can eventually become:

```text
server/
│
├── controllers/
├── routes/
├── models/
├── middleware/
├── services/
├── utils/
│
├── app.js
└── server.js
```

This allows TaskFlow to become a full-stack project later.

---

# 51. Backend API Design

Eventually APIs might look like:

```text
POST   /api/auth/login
POST   /api/auth/register
GET    /api/auth/me

GET    /api/projects
POST   /api/projects
GET    /api/projects/:id
PATCH  /api/projects/:id
DELETE /api/projects/:id

GET    /api/tasks
POST   /api/tasks
GET    /api/tasks/:id
PATCH  /api/tasks/:id
DELETE /api/tasks/:id

GET    /api/team
POST   /api/team
PATCH  /api/team/:id
DELETE /api/team/:id

GET    /api/notifications
PATCH  /api/notifications/:id
```

---

# 52. Authentication Evolution

Initial:

```text
Mock authentication
```

Then:

```text
JWT authentication
```

Eventually:

```text
Login
   ↓
Backend
   ↓
JWT
   ↓
Client
   ↓
Authenticated requests
```

Axios interceptors can eventually be used to attach authentication information to requests.

---

# 53. Security Concepts to Understand

Even though this is primarily a frontend project, understand:

```text
Authentication
Authorization
JWT
Protected routes
Role-based access
CORS
Environment variables
Token handling
Input validation
```

Never put secrets directly into:

```text
React source code
```

Use environment variables for appropriate configuration.

Remember:

> Frontend environment variables are not secret storage if they are bundled into browser code.

---

# 54. Responsive Design Strategy

Design for:

```text
Mobile
Tablet
Desktop
```

Do not simply make everything:

```text
w-full
```

and call it responsive.

Think about how the application changes.

Desktop:

```text
Sidebar + Content
```

Mobile:

```text
Navbar
↓
Drawer
↓
Content
```

Kanban may require:

```text
horizontal scrolling
```

rather than forcing four columns into a tiny screen.

---

# 55. Accessibility

Implement:

```text
Semantic HTML
Keyboard navigation
Accessible labels
Focus states
ARIA where necessary
Color contrast
Button accessibility
Form error messaging
```

For example:

Bad:

```jsx
<div onClick={handleClick}>
```

Better when it represents an action:

```jsx
<button onClick={handleClick}>
```

---

# 56. Testing Phase

After the application is stable, introduce testing.

Start with:

```text
Component tests
```

Then:

```text
Integration tests
```

Potential tools:

```text
Vitest
React Testing Library
```

Test important behavior:

```text
Login form validation
Task creation
Task filtering
Project creation
Protected routes
Kanban interactions
```

Do not try to achieve 100% coverage blindly.

Test important behavior.

---

# 57. Git Strategy

Use Git throughout the project.

Do NOT make one giant commit:

```text
final project
```

Instead:

```text
feat: create application shell
feat: add project routing
feat: implement login form
feat: add authentication state
feat: add project management
feat: add task management
feat: implement kanban board
fix: handle project loading state
fix: prevent duplicate task creation
refactor: extract reusable modal
```

This gives you realistic Git experience.

---

# 58. Branch Strategy

For larger features:

```text
main
 │
 ├── feature/authentication
 ├── feature/projects
 ├── feature/tasks
 ├── feature/kanban
 └── feature/dashboard
```

Merge completed features into:

```text
main
```

---

# 59. Environment Variables

Example:

```text
.env
.env.example
```

Possible values:

```text
VITE_API_URL=
VITE_API_KEY=
```

Never commit:

```text
.env
```

if it contains secrets.

Commit:

```text
.env.example
```

instead.

---

# 60. Documentation

Your GitHub repository should contain a strong README.

Include:

```text
Project Overview
Features
Tech Stack
Screenshots
Architecture
Installation
Environment Variables
Running Locally
API Information
Future Improvements
```

Also include:

```text
Architecture Diagram
```

when the project is mature enough.

---

# 61. Deployment

Frontend:

```text
Build
    ↓
Production
    ↓
Deploy
```

Possible platforms include:

```text
Vercel
Netlify
```

Backend later can be deployed separately.

Database:

```text
MongoDB Atlas
```

The final application should have:

```text
Live URL
GitHub Repository
README
Screenshots
```

---

# 62. Final Production Checklist

## UI

```text
[ ] Responsive
[ ] Consistent spacing
[ ] Consistent typography
[ ] Loading states
[ ] Error states
[ ] Empty states
[ ] Toast messages
[ ] Dark mode
[ ] Mobile navigation
```

## React

```text
[ ] Reusable components
[ ] Proper component boundaries
[ ] Custom hooks
[ ] Controlled forms
[ ] Appropriate state management
[ ] Performance review
```

## Routing

```text
[ ] Nested routes
[ ] Dynamic routes
[ ] Protected routes
[ ] 404 page
[ ] Navigation states
```

## Redux

```text
[ ] authSlice
[ ] projectSlice
[ ] taskSlice
[ ] teamSlice
[ ] notificationSlice
[ ] Proper async states
```

## API

```text
[ ] Central Axios instance
[ ] Service layer
[ ] Error handling
[ ] Authentication handling
[ ] Loading handling
```

## Code Quality

```text
[ ] No unnecessary duplication
[ ] No console errors
[ ] No dead code
[ ] Meaningful variable names
[ ] Reusable utilities
[ ] Clean folder structure
```

---

# 63. Development Order — Master Checklist

This is the checklist you should actually follow.

```text
PHASE 0
[ ] Project setup
[ ] Dependencies
[ ] Git
[ ] Folder architecture

PHASE 1
[ ] MainLayout
[ ] Navbar
[ ] Sidebar
[ ] Responsive shell

PHASE 2
[ ] React Router
[ ] Nested routes
[ ] Route pages
[ ] 404

PHASE 3
[ ] Login UI
[ ] Register UI
[ ] Forgot password UI

PHASE 4
[ ] Form handling
[ ] Validation
[ ] Error messages

PHASE 5
[ ] authSlice
[ ] Login state
[ ] Logout
[ ] ProtectedRoute

PHASE 6
[ ] Axios instance
[ ] API services
[ ] Error handling
[ ] API configuration

PHASE 7
[ ] Project list
[ ] Project card
[ ] Create project
[ ] Edit project
[ ] Delete project
[ ] Project details

PHASE 8
[ ] projectSlice
[ ] Async thunks
[ ] Loading/error states

PHASE 9
[ ] Task list
[ ] Create task
[ ] Edit task
[ ] Delete task
[ ] Task details
[ ] Task filters

PHASE 10
[ ] Kanban board
[ ] Drag & drop
[ ] Change task status
[ ] Persist board changes

PHASE 11
[ ] Team page
[ ] Members
[ ] Roles
[ ] Assignment

PHASE 12
[ ] Dashboard
[ ] Statistics
[ ] Charts
[ ] Recent activity

PHASE 13
[ ] Global search
[ ] Debouncing
[ ] Filtering
[ ] Sorting
[ ] Pagination

PHASE 14
[ ] Notifications
[ ] Comments
[ ] Activity

PHASE 15
[ ] Dark mode
[ ] Theme persistence
[ ] Responsive improvements

PHASE 16
[ ] Loading skeletons
[ ] Empty states
[ ] Error states
[ ] Toasts

PHASE 17
[ ] Custom hooks
[ ] Reusable components
[ ] Refactoring

PHASE 18
[ ] Performance optimization
[ ] Lazy loading
[ ] Code splitting

PHASE 19
[ ] Testing
[ ] Component tests
[ ] Integration tests

PHASE 20
[ ] Backend
[ ] MongoDB
[ ] Authentication
[ ] REST APIs

PHASE 21
[ ] Deployment
[ ] README
[ ] Screenshots
[ ] Live demo

PHASE 22
[ ] Resume bullets
[ ] GitHub cleanup
[ ] Portfolio presentation
```

---

# 64. How We Will Work Together

Do NOT ask for the entire codebase at once.

We will work like this:

```text
You complete Phase 0
        ↓
You show me your code
        ↓
I review it
        ↓
Fix problems
        ↓
Understand why
        ↓
Move to next step
```

For every feature, we will follow:

```text
WHAT?
 ↓
WHY?
 ↓
ARCHITECTURE
 ↓
IMPLEMENTATION
 ↓
CODE
 ↓
TEST
 ↓
REFACTOR
```

For example, before creating `projectSlice.js`, we will first understand:

```text
What is project state?
Why does it belong in Redux?
What should the state shape be?
What should the service do?
What should the component do?
What should the thunk do?
What should the reducer do?
```

Then we implement it.

---

# 65. Rules For This Project

## Rule 1

Don't copy code without understanding it.

## Rule 2

Don't create a component just to make the folder look professional.

## Rule 3

Don't put everything into Redux.

## Rule 4

Don't put API calls randomly inside components.

## Rule 5

Don't optimize before identifying a performance problem.

## Rule 6

Don't add libraries unless we have a reason.

## Rule 7

Every major feature should be committed to Git.

## Rule 8

Every bug should be understood before being patched.

## Rule 9

Prefer simple solutions before complex ones.

## Rule 10

The final project should be something you can explain completely in an interview.

---

# 66. What You Should Be Able to Explain in an Interview

By the end, you should be able to answer:

### React

```text
Why did you use React?
How does your component architecture work?
Where did you use local state?
Where did you use global state?
Why?
```

### Redux

```text
Why Redux Toolkit?
What is a slice?
What is createAsyncThunk?
How does data flow through Redux?
```

### Router

```text
How do protected routes work?
Why nested routes?
How do dynamic routes work?
```

### API

```text
Why Axios?
Why create an Axios instance?
Where do API calls live?
How do you handle errors?
```

### Authentication

```text
How does login work?
How do protected routes work?
What is authentication?
What is authorization?
```

### Performance

```text
Where did you optimize?
Why useMemo?
Why useCallback?
What is code splitting?
What causes unnecessary renders?
```

### Architecture

```text
Why this folder structure?
Why services?
Why custom hooks?
Why separate pages and components?
```

If you can explain these confidently, the project has achieved its purpose.

---

# 67. Resume Version

Eventually, the project can be presented as:

## TaskFlow — Project Management SaaS

**React.js · Redux Toolkit · React Router · Axios · Tailwind CSS · REST API**

- Built a responsive project management platform supporting project creation, task management, Kanban workflows, team collaboration, search, filtering, and dashboard analytics.
- Implemented centralized application state with Redux Toolkit and asynchronous API workflows using Axios and reusable service modules.
- Developed protected and nested routing with dynamic project/task pages and reusable application layouts.
- Implemented drag-and-drop task management, debounced search, filtering, sorting, notifications, comments, role-based UI, dark mode, and responsive layouts.
- Added production-oriented loading, error, empty, and authentication states with reusable React components and custom hooks.

Only keep bullets that accurately describe what we actually implement.

---

# 68. Final Goal

The finished application should conceptually look like:

```text
                         TASKFLOW
                            │
        ┌───────────────────┴───────────────────┐
        │                                       │
   Authentication                         Application
        │                                       │
   ┌────┼────┐                  ┌───────────────┼──────────────┐
   │    │    │                  │               │              │
 Login Register Reset       Dashboard       Projects         Tasks
                                            │                 │
                                            │              Kanban
                                            │                 │
                                            └───────┬─────────┘
                                                    │
                                             Team / Comments
                                                    │
                                             Notifications
                                                    │
                                               Settings
```

The most important thing:

> **We are going to build this incrementally.**

You don't need to know every technology before starting.

At each phase, we will learn the concept **when the project actually needs it**.

---

# 69. First Milestone

We start with ONLY:

```text
Phase 0
+
Phase 1
```

Your immediate target is:

```text
TaskFlow
│
├── React + Vite
├── Tailwind
├── React Router
├── Redux Toolkit
│
└── MainLayout
    ├── Sidebar
    ├── Navbar
    └── Main Content
```

Do not build authentication, projects, tasks, or Kanban yet.

First establish a clean foundation.

Once the foundation is stable:

```text
Phase 2 → Routing
Phase 3 → Authentication UI
Phase 4 → Forms
Phase 5 → Authentication State
...
```

This keeps the project manageable and ensures you understand **why every piece exists**.

# END