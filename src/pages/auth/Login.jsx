import { Eye, EyeOff } from "lucide-react"
import { useState } from "react"
import { Link } from "react-router-dom"

const Login = () => {
    const [showPassword, setShowPassword] = useState(false)

    return (
        < div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-6" >

            {/* Heading */}
            < div className="text-center mb-6" >
                <h1 className="text-2xl font-bold text-slate-900">
                    Welcome back
                </h1>

                <p className="text-sm text-slate-500 mt-1">
                    Sign in to your account to continue
                </p>
            </div >

            <form className="space-y-3">

                {/* Email */}
                <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                        Email address
                    </label>

                    <input
                        type="email"
                        placeholder="you@example.com"
                        className="w-full h-11 px-4 rounded-lg border border-slate-300 outline-none text-sm transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                    />
                </div>
                {/* Password */}
                <div>
                    <div className="flex items-center justify-between mb-2">
                        <label className="text-sm font-medium text-slate-700">
                            Password
                        </label>

                        <Link
                            to="/forgot-password"
                            className="text-sm font-medium text-indigo-600 hover:text-indigo-800"
                        >
                            Forgot password?
                        </Link>
                    </div>

                    <div className="relative">
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="Enter your password"
                            className="w-full h-11 px-4 rounded-lg border border-slate-300 outline-none text-sm transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                        />

                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600">
                            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                        </button>
                    </div>
                </div>

                {/* Remember me */}
                <div className="flex items-center gap-2">
                    <input
                        type="checkbox"
                        id="remember"
                        className="w-4 h-4 accent-indigo-600"
                    />

                    <label
                        htmlFor="remember"
                        className="text-sm text-slate-600"
                    >
                        Remember me
                    </label>
                </div>

                {/* Login */}
                <button
                    type="submit"
                    className="w-full h-11 rounded-lg bg-indigo-600 text-white text-sm font-semibold hover:bg-indigo-700 transition active:scale-[0.98]">
                    Sign in
                </button>
            </form>

            {/* Divider */}
            <div className="flex items-center gap-4 my-4">
                <div className="h-px bg-slate-200 flex-1" />
                <span className="text-xs text-slate-400">
                    OR
                </span>
                <div className="h-px bg-slate-200 flex-1" />
            </div>

            {/* Social */}
            <div className="grid grid-cols-3 gap-3">
                <button className="h-10 border border-slate-200 rounded-lg text-sm">
                    Google
                </button>

                <button className="h-10 border border-slate-200 rounded-lg text-sm">
                    GitHub
                </button>

                <button className="h-10 border border-slate-200 rounded-lg text-sm">
                    Microsoft
                </button>
            </div>

            {/* Register */}
            <p className="text-center text-sm text-slate-500 mt-5">
                Don't have an account?{" "}
                <Link
                    to="/register"
                    className="font-semibold text-indigo-600 hover:text-indigo-800">
                    Create one
                </Link>
            </p>
        </div >

    )
}

export default Login