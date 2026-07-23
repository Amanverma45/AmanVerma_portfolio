import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { Home, User, Briefcase, Cpu, Mail, Menu, X, ArrowRight } from 'lucide-react'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setScrolled(true)
            } else {
                setScrolled(false)
            }
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    // Prevent background scrolling when mobile menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.classList.add('overflow-hidden')
        } else {
            document.body.classList.remove('overflow-hidden')
        }
        return () => {
            document.body.classList.remove('overflow-hidden')
        }
    }, [isOpen])

    const navLinks = [
        { name: 'Home', path: '/', icon: Home },
        { name: 'About', path: '/about', icon: User },
        { name: 'Projects', path: '/projects', icon: Briefcase },
        { name: 'Skills', path: '/skills', icon: Cpu },
        { name: 'Contact', path: '/contact', icon: Mail },
    ]

    return (
        <>
            <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled
                ? 'py-3 sm:py-4 glassmorphism shadow-[0_4px_30px_rgba(0,0,0,0.3)] border-b border-white/10'
                : 'py-5 sm:py-6 bg-transparent'
                }`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
                    {/* Left: Professional Logo */}
                    <NavLink
                        to="/"
                        className="flex items-center space-x-3 group"
                    >
                        {/* Initials Badge - Solid Purple Accent */}
                        <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/35 transition-all duration-300 shadow-[0_0_10px_rgba(168,85,247,0.1)]">
                            <span className="text-purple-400 font-semibold text-sm">AV</span>
                        </div>
                        {/* Logo Text & Subtitle - Normal Fonts */}
                        <div className="flex flex-col">
                            <span className="text-white font-semibold text-lg sm:text-xl transition-colors duration-300 group-hover:text-purple-400">
                                Aman<span className="text-purple-500">.</span>
                            </span>
                            <span className="text-xs text-purple-400 font-normal">
                                MERN Stack Developer
                            </span>
                        </div>
                    </NavLink>

                    {/* Center: Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-1 glassmorphism-light rounded-full px-3 py-1 sm:px-4 sm:py-1.5 border border-white/5">
                        {navLinks.map((link) => {
                            const Icon = link.icon
                            return (
                                <NavLink
                                    key={link.name}
                                    to={link.path}
                                    className={({ isActive }) => `
                                  flex items-center space-x-2 px-3 py-1.5 lg:px-4 lg:py-2 rounded-full text-xs lg:text-sm font-medium transition-all duration-300 relative group
                                  ${isActive
                                            ? 'text-white bg-purple-500/20 border border-purple-500/30'
                                            : 'text-gray-400 hover:text-white hover:bg-white/5 border border-transparent'}
                                `}
                                >
                                    <Icon className="w-3.5 h-3.5 lg:w-4 lg:h-4" />
                                    <span>{link.name}</span>
                                    {/* Hover underline slide-in effect */}
                                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-1/3"></span>
                                </NavLink>
                            )
                        })}
                    </div>

                    {/* Right: Contact CTA (Desktop) */}
                    <div className="hidden md:block">
                        <NavLink
                            to="/contact"
                            className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-xs lg:text-sm font-medium text-white rounded-full group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white transition-all duration-300 hover:shadow-[0_0_15px_rgba(168,85,247,0.5)]"
                        >
                            <span className="relative px-4 py-1.5 lg:px-5 lg:py-2 transition-all ease-in duration-75 bg-slate-950 rounded-full group-hover:bg-opacity-0 flex items-center gap-2">
                                Let's Connect
                                <ArrowRight className="w-3.5 h-3.5 lg:w-4 lg:h-4 transition-transform group-hover:translate-x-1" />
                            </span>
                        </NavLink>
                    </div>

                    {/* Mobile Toggle Menu */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(true)}
                            aria-label="Open Menu"
                            className="group relative p-3 flex flex-col justify-center items-end rounded-xl bg-white/5 hover:bg-purple-600/10 border border-white/5 hover:border-purple-500/35 text-gray-400 hover:text-purple-400 transition-all duration-500 focus:outline-none"
                        >
                            {/* Rare Animated Glowing Aura */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm rounded-xl pointer-events-none" />
                            
                            {/* 3-Line Custom Hamburger */}
                            <div className="relative w-5 h-4.5 z-10 flex flex-col justify-between items-end">
                                <span className="h-1 w-5 rounded bg-current transition-all duration-300 ease-in-out group-hover:w-3" />
                                <span className="h-1 w-3 rounded bg-current transition-all duration-300 ease-in-out group-hover:w-5" />
                                <span className="h-1 w-5 rounded bg-current transition-all duration-300 ease-in-out group-hover:w-3" />
                            </div>
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Drawer Backdrop */}
            <div className={`md:hidden fixed inset-0 z-45 bg-black/70 backdrop-blur-sm transition-opacity duration-500 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                }`} onClick={() => setIsOpen(false)} />

            {/* Mobile Drawer Panel */}
            <div className={`md:hidden fixed inset-y-0 right-0 z-50 w-full sm:w-[360px] h-screen glassmorphism border-l border-white/10 flex flex-col p-6 overflow-y-auto transition-transform duration-500 ease-out transform ${isOpen ? 'translate-x-0' : 'translate-x-full'
                }`}>
                {/* Header inside drawer */}
                <div className="flex justify-between items-center pb-6 border-b border-white/10">
                    <NavLink
                        to="/"
                        onClick={() => setIsOpen(false)}
                        className="flex items-center space-x-3 group"
                    >
                        {/* Initials Badge - Solid Purple Accent */}
                        <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-purple-500/10 border border-purple-500/35 shadow-[0_0_10px_rgba(168,85,247,0.1)]">
                            <span className="text-purple-400 font-semibold text-xs">AV</span>
                        </div>
                        {/* Logo Text & Subtitle */}
                        <div className="flex flex-col">
                            <span className="text-white font-semibold text-base group-hover:text-purple-400">
                                Aman<span className="text-purple-500">.</span>
                            </span>
                            <span className="text-[11px] text-purple-400 font-normal">
                                MERN Stack Developer
                            </span>
                        </div>
                    </NavLink>
                    <button
                        onClick={() => setIsOpen(false)}
                        aria-label="Close Menu"
                        className="group relative p-2.5 flex items-center justify-center rounded-xl bg-white/5 hover:bg-red-500/10 border border-white/5 hover:border-red-500/30 text-gray-400 hover:text-red-400 transition-all duration-500 focus:outline-none"
                    >
                        <div className="absolute inset-0 bg-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm rounded-xl pointer-events-none" />
                        <X className="w-5 h-5 transition-transform duration-500 group-hover:rotate-180 z-10" />
                    </button>
                </div>

                {/* Navigation Links */}
                <div className="flex flex-col space-y-2 mt-5">
                    {navLinks.map((link, idx) => {
                        const Icon = link.icon
                        return (
                            <NavLink
                                key={link.name}
                                to={link.path}
                                onClick={() => setIsOpen(false)}
                                style={{ animationDelay: `${idx * 75}ms` }}
                                className={({ isActive }) => `
                                    flex items-center space-x-4 py-2.5 px-3.5 rounded-xl text-base font-medium transition-all duration-300
                                    ${isOpen ? 'animate-slide-up opacity-0' : 'opacity-0'}
                                    ${isActive
                                        ? 'text-white bg-purple-500/25 border border-purple-500/30'
                                        : 'text-gray-300 hover:text-white hover:bg-white/5 border border-transparent'}
                                `}
                            >
                                <Icon className="w-5 h-5 text-purple-400" />
                                <span>{link.name}</span>
                            </NavLink>
                        )
                    })}

                    <NavLink
                        to="/contact"
                        onClick={() => setIsOpen(false)}
                        style={{ animationDelay: `${navLinks.length * 75}ms` }}
                        className={`
                            mt-4 flex items-center justify-center gap-2 py-3 bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-500 hover:to-blue-400 text-white rounded-xl font-semibold shadow-lg shadow-purple-500/20 transition-all hover:shadow-purple-500/40 text-base
                            ${isOpen ? 'animate-slide-up opacity-0' : 'opacity-0'}
                        `}
                    >
                        <span>Get In Touch</span>
                        <ArrowRight className="w-4 h-4" />
                    </NavLink>
                </div>

                {/* Footer inside drawer */}
                <div className="mt-auto pt-6 text-center text-xs text-gray-500 border-t border-white/5">
                    © {new Date().getFullYear()} Aman. All rights reserved.
                </div>
            </div>
        </>
    )
}

export default Navbar