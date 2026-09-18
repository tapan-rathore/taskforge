import { ArrowLeft, CheckSquare } from "lucide-react"
import { Link } from 'react-router-dom'

const ForgotPassword = () => {
    return (
        <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-6">

            {/* Back */}
            <Link to="/login"
                className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-slate-800 mb-8"
            >
                <ArrowLeft size={16} />
                Back to login
            </Link>

            {/* Heading */}
            <div className="text-center mb-6">
                <div className="w-14 h-14 rounded-full bg-indigo-50 mx-auto flex items-center justify-center mb-2">
                    <CheckSquare size={26}
                        className="text-indigo-600"
                    />
                </div>

                <h1 className="text-2xl font-bold text-slate-900">
                    Forgot your password?
                </h1>

                <p className="text-sm text-slate-500 mt-1">
                    Enter your email address and we'll send you a link to reset your password.
                </p>
            </div>

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

                {/* Login */}
                <button
                    type="submit"
                    className="w-full h-11 rounded-lg bg-indigo-600 text-white text-sm font-semibold hover:bg-indigo-700 transition active:scale-[0.98]">
                    Send reset link
                </button>
            </form>

            {/* Register */}
            <p className="text-center text-sm text-slate-500 mt-5">
                Remember your password{" "}
                <Link
                    to="/login"
                    className="font-semibold text-indigo-600 hover:text-indigo-800">
                    Sign in
                </Link>
            </p>
        </div>

    )
}

export default ForgotPassword