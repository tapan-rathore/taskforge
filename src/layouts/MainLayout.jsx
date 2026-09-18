import Sidebar from "../components/layout/Sidebar"
import Navbar from "../components/layout/Navbar"
import { Outlet } from "react-router-dom"

const MainLayout = () => {
    return (
        <div className="flex min-h-screen bg-gray-50">
            <Sidebar />

            <div className="flex min-w-0 flex-1 flex-col">
                <Navbar />

                <main className="flex-1 p-6">
                    <Outlet />
                </main>
            </div>
        </div>
    )
}

export default MainLayout