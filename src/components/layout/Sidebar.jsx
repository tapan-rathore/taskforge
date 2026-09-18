import { Bell, CheckSquare, FolderKanban, LayoutDashboard, Presentation, Settings, Users } from "lucide-react"
import { NavLink } from "react-router-dom"

const navigationItems = [
    {
        name: "Dashboard",
        path: "/app/dashboard",
        icon: LayoutDashboard
    },
    {
        name: "Projects",
        path: "/app/projects",
        icon: FolderKanban
    },
    {
        name: "Tasks",
        path: "/app/tasks",
        icon: CheckSquare
    },
    {
        name: "Team",
        path: "/app/team",
        icon: Users
    },
    {
        name: "Notifications",
        path: "/app/notifications",
        icon: Bell
    },
    {
        name: "Settings",
        path: "/app/settings",
        icon: Settings
    },
]

const Sidebar = () => {
    return (
        <aside className="w-52 min-h-screen border-r border-gray-200 bg-white">
            {/* Project logo */}
            <div className="flex h-16 px-4 items-center border-b border-gray-200 bg-white">
                <h1 className="text-xl font-bold">
                    TaskForge
                </h1>
            </div>

            {/* sidebar Buttons */}
            <nav className="p-2">
                <ul className="space-y-1">
                    {navigationItems.map((item) => {
                        const Icon = item.icon;

                        return (
                            <li key={item.name}>
                                <NavLink
                                    to={item.path}
                                    className={({ isActive }) => `
                                    flex w-full items-center gap-3 rounded-lg px-4 py-3 text-sm transition ${isActive ? "bg-gray-900 text-white":"text-gray-600 hover:bg-gray-100"}`}>
                                    <Icon size={20} />
                                    <span>{item.name}</span>
                                </NavLink>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </aside>
    )
}

export default Sidebar