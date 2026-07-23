import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Mail, Briefcase, Code, Database, Server, Download } from 'lucide-react'

const Home = () => {
    const words = ["MERN Stack Developer", "Backend API Specialist", "Frontend Craftsman", "Full Stack Engineer"]
    const [wordIndex, setWordIndex] = useState(0)
    const [subIndex, setSubIndex] = useState(0)
    const [reverse, setReverse] = useState(false)
    const [displayedText, setDisplayedText] = useState("")

    useEffect(() => {
        if (subIndex === words[wordIndex].length + 1 && !reverse) {
            const timeout = setTimeout(() => setReverse(true), 2200) // Hold word for 2.2 seconds
            return () => clearTimeout(timeout)
        }

        if (subIndex === 0 && reverse) {
            setReverse(false)
            setWordIndex((prev) => (prev + 1) % words.length)
            return
        }

        const timeout = setTimeout(() => {
            setSubIndex((prev) => prev + (reverse ? -1 : 1))
        }, reverse ? 45 : 85)

        return () => clearTimeout(timeout)
    }, [subIndex, wordIndex, reverse])

    useEffect(() => {
        setDisplayedText(words[wordIndex].substring(0, subIndex))
    }, [subIndex, wordIndex])

    return (
        <section className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden">
            {/* Ambient Background Glows */}
            <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-purple-600/10 blur-[120px] pointer-events-none animate-pulse-slow" />
            <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-96 h-96 rounded-full bg-blue-500/10 blur-[150px] pointer-events-none animate-pulse-slow" style={{ animationDelay: '2s' }} />

            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 w-full">
                
                {/* Left Column: Hero Content */}
                <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6 md:space-y-8 animate-fade-in">
                    
                    {/* Seeking Opportunity Badge */}
                    <div className="inline-flex items-center space-x-2.5 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/25 animate-bounce-slow">
                        <span className="relative flex h-2.5 w-2.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                        </span>
                        <span className="text-xs sm:text-sm font-medium text-purple-200 tracking-wide">
                            Actively Seeking Opportunity
                        </span>
                    </div>

                    {/* Main Title & Role */}
                    <div className="space-y-3">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
                            Hi, I am <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">Aman Verma</span>
                        </h1>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-purple-400/90 tracking-wide min-h-[46px] flex items-center">
                            <span className="border-r-2 border-purple-400 pr-1.5 animate-pulse">
                                {displayedText}
                            </span>
                        </h2>
                    </div>

                    {/* Professional Description */}
                    <p className="text-gray-300 text-base sm:text-lg max-w-xl leading-relaxed font-light">
                        I build scalable, secure full-stack web applications and robust APIs using the MERN stack. I specialize in crafting responsive frontends with React and Tailwind CSS, supported by solid backend systems—all developed with clean, readable, and highly maintainable code.
                    </p>

                    {/* Action Call to Buttons */}
                    <div className="flex flex-wrap gap-4 pt-2 w-full sm:w-auto">
                        <Link
                            to="/projects"
                            className="flex-1 sm:flex-initial inline-flex items-center justify-center space-x-2 px-6 py-3.5 bg-purple-600 hover:bg-purple-500 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-purple-600/20 hover:shadow-purple-600/40 hover:-translate-y-0.5 text-sm"
                        >
                            <Briefcase className="w-5 h-5" />
                            <span>View Projects</span>
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                        <Link
                            to="/contact"
                            className="flex-1 sm:flex-initial inline-flex items-center justify-center space-x-2 px-6 py-3.5 bg-white/5 hover:bg-white/10 text-white font-semibold rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-0.5 text-sm"
                        >
                            <Mail className="w-5 h-5" />
                            <span>Contact Me</span>
                        </Link>
                        <a
                            href="/resume.pdf"
                            download="Aman_Verma_Resume.pdf"
                            className="flex-1 sm:flex-initial inline-flex items-center justify-center space-x-2 px-6 py-3.5 bg-purple-500/10 hover:bg-purple-500/20 text-purple-400 hover:text-purple-300 font-semibold rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:-translate-y-0.5 text-sm"
                        >
                            <Download className="w-5 h-5" />
                            <span>Download CV</span>
                        </a>
                    </div>
                </div>

                {/* Right Column: Visual Tech Display / Mockup (Hidden on mobile/tablet for cleaner mobile view, shown on lg screens) */}
                <div className="hidden lg:col-span-5 lg:flex flex-col items-center justify-center relative animate-fade-in" style={{ animationDelay: '0.3s' }}>
                    <div className="relative w-80 h-80 sm:w-96 sm:h-96 flex items-center justify-center">
                        {/* Orbiting Tech Stack Card */}
                        <div className="absolute inset-0 rounded-full border border-purple-500/10 animate-spin-slow" />
                        
                        {/* Central Glowing Shield */}
                        <div className="w-48 h-48 rounded-full bg-purple-600/5 border border-purple-500/20 flex flex-col items-center justify-center glassmorphism shadow-2xl z-20 animate-pulse-slow">
                            <span className="text-5xl font-black text-white bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">MERN</span>
                            <span className="text-[10px] text-gray-400 tracking-[0.2em] uppercase mt-2">Full Stack</span>
                        </div>

                        {/* Interactive floating tech icons around center */}
                        {/* React Icon */}
                        <div className="absolute top-4 left-1/2 -translate-x-1/2 p-4 bg-slate-950/80 border border-blue-500/30 rounded-2xl shadow-xl shadow-blue-500/5 animate-bounce-slow flex flex-col items-center">
                            <Code className="w-8 h-8 text-blue-400" />
                            <span className="text-xs text-gray-300 mt-1 font-medium">React</span>
                        </div>
                        
                        {/* Node Icon */}
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 p-4 bg-slate-950/80 border border-green-500/30 rounded-2xl shadow-xl shadow-green-500/5 animate-bounce-slow flex flex-col items-center" style={{ animationDelay: '1.5s' }}>
                            <Server className="w-8 h-8 text-green-400" />
                            <span className="text-xs text-gray-300 mt-1 font-medium">Node.js</span>
                        </div>

                        {/* MongoDB Icon */}
                        <div className="absolute left-0 top-1/2 -translate-y-1/2 p-4 bg-slate-950/80 border border-emerald-500/30 rounded-2xl shadow-xl shadow-emerald-500/5 animate-bounce-slow flex flex-col items-center" style={{ animationDelay: '0.7s' }}>
                            <Database className="w-8 h-8 text-emerald-400" />
                            <span className="text-xs text-gray-300 mt-1 font-medium">MongoDB</span>
                        </div>

                        {/* Express Icon */}
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 p-4 bg-slate-950/80 border border-purple-500/30 rounded-2xl shadow-xl shadow-purple-500/5 animate-bounce-slow flex flex-col items-center" style={{ animationDelay: '2.2s' }}>
                            <Server className="w-8 h-8 text-purple-400" />
                            <span className="text-xs text-gray-300 mt-1 font-medium">Express</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home