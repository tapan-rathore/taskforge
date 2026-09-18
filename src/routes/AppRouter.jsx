import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import NotFound from "../pages/NotFound";
import Dashboard from "../pages/Dashboard";
import Projects from "../pages/Projects";
import Tasks from "../pages/Tasks";
import Team from "../pages/Team";
import Notifications from "../pages/Notification";
import Settings from "../pages/Settings";
import Login from "../pages/auth/Login";
import AuthLayout from "../layouts/AuthLayout";
import Register from "../pages/auth/Register";
import ForgotPassword from "../pages/auth/ForgotPassword";

const router = createBrowserRouter([
    {
        path: "/",
        element: <AuthLayout />,
        errorElement: <NotFound />,
        children: [
            {
                index:true,
                element: <Login/>
            },
            {
                path: "login",
                element: <Login />
            },
            {
                path: "register",
                element: <Register />
            },
            {
                path: "forgot-password",
                element: <ForgotPassword />
            }
        ]
    },
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