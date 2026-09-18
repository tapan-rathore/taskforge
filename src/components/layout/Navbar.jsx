import { Bell, Menu, Search } from "lucide-react"

const Navbar = () => {
    return (
        <header className="flex h-16 items-center justify-between border-b border-gray-200 bg-white px-6">

            {/* Left */}
            <div className="flex items-center gap-4">
                <button className="lg:hidden">
                    <Menu size={22} />
                </button>

                <div className="hidden items-center gap-2 rounded-lg bg-gray-100 px-3 py-2 md:flex">
                    <Search size={18} className="text-gray-500" />

                    <input
                        type="text"
                        placeholder="Search..."
                        className="w-64 bg-transparent text-sm outline-none" />
                </div>
            </div>

            {/* right side */}
            <div className="flex items-center gap-2">

                <button className="relative rounded-full p-2 hover:bg-gray-200">
                    <Bell size={20} />

                    <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-red-500" />
                </button>

                <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-900 text-sm font-medium text-white">
                        T
                    </div>

                    <div className="hidden sm:block">
                        <p className="text-sm font-medium">
                            Tapan
                        </p>
                        <p className="text-xs text-gray-500">
                            Administrator
                        </p>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Navbar