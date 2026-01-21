// Navbar.jsx
import { useState } from "react";
import { HiX ,HiMenu} from "react-icons/hi";
import roimalogo from "../public/roima.png"

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);

    return (
        <nav className="bg-white shadow-md fixed w-full mb-4 dark:bg-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20 items-center">
                    {/* Logo */}
                    <div className="flex-shrink-0 ">

                        <img
                            src={roimalogo}
                            alt="Roima Logo"
                            className="h-10 w-auto object-contain"
                        />

                    </div>

                    <div className="hidden md:flex space-x-4  items-center">

                        <>
                            <span className="text-gray-700">Welcome, here </span>
                            <p

                                className="text-gray-700 hover:text-indigo-600"
                            >
                                Home
                            </p>
                            <p

                                className="block px-2 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600"
                            >
                                <i className="fa-solid fa-user"></i>
                            </p>
                        </>

                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="text-gray-700 hover:text-indigo-600 focus:outline-none"
                        >
                            {menuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`md:hidden bg-white shadow-md overflow-hidden transition-all duration-300 ${menuOpen ? "max-h-screen" : "max-h-0"
                    }`}
            >
                <>
                    <div className="px-4 py-3 border-b border-gray-200">
                        <span className="text-gray-700">Welcome, here</span>
                    </div>
                    <p
                        className="block px-4 py-3 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600"
                    >
                        Home
                    </p>


                </>

            </div>
        </nav>
    );
}