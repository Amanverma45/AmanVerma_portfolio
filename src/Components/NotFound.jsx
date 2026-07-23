import React from 'react'
import { Link } from 'react-router-dom'
import { Home, AlertCircle } from 'lucide-react'

const NotFound = () => {
    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center pt-28 pb-16 overflow-hidden px-6 text-center">
            {/* Ambient Background Glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-purple-600/5 blur-[150px] pointer-events-none animate-pulse-slow" />
            
            <div className="relative z-10 space-y-6 max-w-md flex flex-col items-center animate-fade-in">
                {/* 404 Visual Icon */}
                <div className="p-4 bg-purple-500/10 text-purple-400 rounded-2xl border border-purple-500/20 animate-glow">
                    <AlertCircle className="w-16 h-16" />
                </div>
                
                <h1 className="text-7xl font-black text-white tracking-tight bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                    404
                </h1>
                
                <h2 className="text-2xl font-bold text-white">
                    Page Not Found
                </h2>
                
                <p className="text-gray-400 text-sm sm:text-base font-light leading-relaxed">
                    Oops! The page you are looking for does not exist or has been moved. Let's get you back on track!
                </p>

                <Link
                    to="/"
                    className="inline-flex items-center space-x-2 px-6 py-3 bg-purple-600 hover:bg-purple-500 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-purple-600/20 hover:shadow-purple-600/40 hover:-translate-y-0.5 text-sm"
                >
                    <Home className="w-4 h-4" />
                    <span>Back to Home</span>
                </Link>
            </div>
        </section>
    )
}

export default NotFound
