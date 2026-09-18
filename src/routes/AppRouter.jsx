import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import NotFound from "../pages/Notfound";
import Dashboard from "../pages/dashboard";
import Projects from "../pages/projects";
import Tasks from "../pages/tasks";
import Team from "../pages/notification";
import Notifications from "../pages/settings";
import Settings from "../pages/Settings";

const router = createBrowserRouter([
    {
        path: "/app",
        element: <MainLayout />,
        errorElement: <NotFound />,
        children: [
            {
                index: true,
                element: <Dashboard />
            },
            {
                path: "dashboard",
                element: <Dashboard />
            },
            {
                path: "projects",
                element: <Projects />
            },
            {
                path: "tasks",
                element: <Tasks />
            },
            {
                path: "team",
                element: <Team />
            },
            {
                path: "notifications",
                element: <Notifications />
            },
            {
                path: "settings",
                element: <Settings />
            }
        ]
    }
]);

const AppRouter = () => {
    return <RouterProvider router={router} />
}

export default AppRouter