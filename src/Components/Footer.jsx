import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className="w-full bg-[#030014]/80 backdrop-blur-md border-t border-white/5 py-8 relative z-20">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
                
                {/* Brand Logo Info */}
                <div className="flex flex-col items-center md:items-start text-center md:text-left">
                    <span className="text-white font-semibold text-lg">
                        Aman<span className="text-purple-500">.</span>
                    </span>
                    <span className="text-xs text-purple-400 font-mono mt-0.5">
                        MERN Stack Developer
                    </span>
                </div>

                {/* Copyright info */}
                <div className="text-center">
                    <p className="text-gray-500 text-xs sm:text-sm font-light">
                        &copy; 2026 Aman Verma. All rights reserved.
                    </p>
                    <p className="text-[11px] text-gray-600 font-light mt-1">
                        Built with ❤️ using React, Tailwind CSS & Vite
                    </p>
                </div>

                {/* Footer Navigation Links */}
                <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
                    <Link to="/" className="text-gray-400 hover:text-white transition-colors duration-300">Home</Link>
                    <Link to="/about" className="text-gray-400 hover:text-white transition-colors duration-300">About</Link>
                    <Link to="/projects" className="text-gray-400 hover:text-white transition-colors duration-300">Projects</Link>
                    <Link to="/skills" className="text-gray-400 hover:text-white transition-colors duration-300">Skills</Link>
                    <Link to="/contact" className="text-gray-400 hover:text-white transition-colors duration-300">Contact</Link>
                </div>

            </div>
        </footer>
    )
}

export default Footer
