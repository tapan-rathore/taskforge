import { Outlet } from "react-router-dom"
import { CheckSquare } from "lucide-react"

const AuthLayout = () => {
    return (
        <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center px-4 py-6">
            {/* Logo */}
            <div className="flex justify-center mb-4">
                <a
                    href="/"
                    className="flex items-center gap-2">
                    <div className="w-9 h-9 rounded-xl bg-indigo-600 flex items-center justify-center">
                        <CheckSquare size={20} className="text-white" />
                    </div>

                    <span className="text-xl font-bold text-slate-900">
                        Task<span className="text-indigo-600">Forge</span>
                    </span>
                </a>
            </div>

            <main className="w-full max-w-md">
                <Outlet />
            </main>
        </div>
    )
}

export default AuthLayout