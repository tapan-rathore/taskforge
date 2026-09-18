import { Eye, EyeOff } from "lucide-react"
import { useState } from "react"
import { Link } from "react-router-dom"

const Register = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    return (
        <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-6">

            {/* Heading */}
            <div className="text-center mb-6">
                <h1 className="text-2xl font-bold text-slate-900">
                    Create your account
                </h1>

                <p className="text-sm text-slate-500 mt-1">
                    Join Taskflow and start managing your work
                </p>
            </div>

            <form className="space-y-3">

                {/* Name */}
                <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                        Full name
                    </label>

                    <input
                        type="text"
                        placeholder="Enter your name"
                        className="w-full h-11 px-4 rounded-lg border border-slate-300 outline-none text-sm transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                    />
                </div>
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
                    <label className="text-sm font-medium text-slate-700 mb-2">
                        Password
                    </label>

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

                {/* Confirm Password */}
                <div>
                    <label className="text-sm font-medium text-slate-700">
                        Confirm Password
                    </label>

                    <div className="relative">
                        <input
                            type={showConfirmPassword ? "text" : "password"}
                            placeholder="Enter your password"
                            className="w-full h-11 px-4 rounded-lg border border-slate-300 outline-none text-sm transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                        />

                        <button
                            type="button"
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600">
                            {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                        </button>
                    </div>
                </div>

                {/* Submit */}
                <button
                    type="submit"
                    className="w-full h-11 rounded-lg bg-indigo-600 text-white text-sm font-semibold hover:bg-indigo-700 transition active:scale-[0.98]">
                    Create account
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
                Already have an account?{" "}
                <Link
                    to="/login"
                    className="font-semibold text-indigo-600 hover:text-indigo-800">
                    Sign in
                </Link>
            </p>

        </div>

    )
}

export default Register