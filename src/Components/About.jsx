import React from 'react'
import { Link } from 'react-router-dom'
import { Terminal, Code, Database, Server, User, ArrowRight } from 'lucide-react'

const About = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden">
            {/* Ambient Background Glow */}
            <div className="absolute top-1/3 right-1/4 w-80 h-80 rounded-full bg-purple-600/5 blur-[120px] pointer-events-none animate-pulse-slow" />
            <div className="absolute bottom-1/4 left-1/4 w-96 h-96 rounded-full bg-blue-500/5 blur-[150px] pointer-events-none animate-pulse-slow" style={{ animationDelay: '2s' }} />

            <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">

                {/* Section Header */}
                <div className="flex flex-col items-center text-center space-y-3 mb-12 sm:mb-16 animate-fade-in">
                    <span className="text-xs sm:text-sm font-semibold tracking-[0.25em] text-purple-400 font-mono lowercase">
                        // who i am
                    </span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
                        About Me
                    </h2>
                    <div className="w-16 h-1 bg-purple-500 rounded-full mt-2" />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">

                    {/* Left Column: Profile Picture & Terminal Mockup */}
                    <div className="lg:col-span-5 flex flex-col space-y-6 items-center animate-fade-in" style={{ animationDelay: '0.2s' }}>

                         {/* Live Morphing Profile Image Container */}
                        <div className="relative w-56 h-56 flex items-center justify-center group mb-2">
                            {/* Dynamic Glowing Live Backdrop (Rotates and Morphs) */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-purple-600 to-blue-500 rounded-3xl opacity-35 blur-xl group-hover:opacity-60 transition-opacity duration-500 animate-morph" style={{ animationDelay: '1s' }} />

                            {/* Inner Profile frame (Slowly morphs shape) */}
                            <div className="relative w-52 h-52 overflow-hidden border border-purple-500/30 group-hover:border-purple-500/60 shadow-[0_0_30px_rgba(168,85,247,0.15)] transition-all duration-500 animate-morph bg-slate-950">
                                {/* User Profile Image */}
                                <img
                                    src="/profile.png"
                                    alt="Aman Verma"
                                    className="w-full h-full object-cover object-top filter brightness-[0.98] contrast-[1.04] saturate-[1.02] transition-all duration-500 scale-105 group-hover:scale-110"
                                    onError={(e) => {
                                        // Fallback UI placeholder if profile.png is missing
                                        e.target.src = 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=400&auto=format&fit=crop'
                                    }}
                                />
                                
                                {/* Ambient gradient overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                                {/* Light sheen sweep effect on hover */}
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out pointer-events-none" />

                                {/* Multi-colored Neon Glowing Particles - Bottom 30% only */}
                                <div className="absolute bottom-0 left-0 right-0 h-[30%] overflow-hidden pointer-events-none select-none z-10">
                                    {[...Array(16)].map((_, i) => {
                                        const colors = ['bg-cyan-400/60', 'bg-purple-400/60', 'bg-pink-400/60', 'bg-emerald-400/60']
                                        const color = colors[i % colors.length]
                                        return (
                                            <span
                                                key={i}
                                                className={`absolute bottom-0 w-1 h-1 ${color} rounded-full blur-[0.5px] animate-sparkle`}
                                                style={{
                                                    left: `${5 + i * 5.8 + Math.random() * 3}%`,
                                                    animationDelay: `${i * 0.18}s`,
                                                    animationDuration: `${1.4 + Math.random() * 1.4}s`,
                                                }}
                                            />
                                        )
                                    })}
                                </div>
                            </div>

                            {/* Floating Status Badge (Live Status) */}
                            <div className="absolute -top-1 -right-1 px-3.5 py-1 bg-purple-600 hover:bg-purple-500 text-white rounded-full text-[9px] font-extrabold tracking-wider uppercase animate-bounce-slow flex items-center gap-1.5 shadow-lg shadow-purple-600/30 z-20 select-none">
                                <span className="relative flex h-1.5 w-1.5">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500"></span>
                                </span>
                                Developer
                            </div>
                        </div>

                        {/* Terminal Mockup */}
                        <div className="w-full glassmorphism rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                            {/* Terminal Window Header */}
                            <div className="bg-white/5 px-4 py-3 flex items-center justify-between border-b border-white/5">
                                <div className="flex items-center space-x-2">
                                    <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                                    <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                                    <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                                </div>
                                <span className="text-xs text-gray-400 font-mono flex items-center gap-1.5">
                                    <Terminal className="w-3.5 h-3.5 text-purple-400" />
                                    aman_verma.json
                                </span>
                                <div className="w-12" /> {/* spacer */}
                            </div>

                            {/* Terminal Code Content */}
                            <div className="p-6 text-left font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto text-gray-300">
                                <span className="text-purple-400">const</span> <span className="text-blue-400">developer</span> = &#123;
                                <div className="pl-4 sm:pl-6 mt-1">
                                    <span className="text-gray-400">name:</span> <span className="text-emerald-300">"Aman Verma"</span>,
                                </div>
                                <div className="pl-4 sm:pl-6">
                                    <span className="text-gray-400">role:</span> <span className="text-emerald-300">"MERN Stack Developer"</span>,
                                </div>
                                <div className="pl-4 sm:pl-6">
                                    <span className="text-gray-400">skills:</span> [
                                    <span className="text-amber-300">"MongoDB"</span>, <span className="text-amber-300">"Express"</span>, <span className="text-amber-300">"React"</span>, <span className="text-amber-300">"Node"</span>
                                    ],
                                </div>
                                <div className="pl-4 sm:pl-6">
                                    <span className="text-gray-400">focus:</span> [
                                    <span className="text-amber-300">"Scalable APIs"</span>, <span className="text-amber-300">"Clean Code"</span>, <span className="text-amber-300">"UI/UX"</span>
                                    ],
                                </div>
                                <div className="pl-4 sm:pl-6">
                                    <span className="text-gray-400">location:</span> <span className="text-emerald-300">"India"</span>,
                                </div>
                                <div className="pl-4 sm:pl-6">
                                    <span className="text-gray-400">availability:</span> <span className="text-purple-400">true</span>
                                </div>
                                <span className="text-purple-400">&#125;;</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Paragraph Descriptions */}
                    <div className="lg:col-span-7 flex flex-col space-y-6 text-left animate-fade-in" style={{ animationDelay: '0.4s' }}>
                        <h3 className="text-xl sm:text-2xl font-semibold text-white">
                            Building responsive, performant web applications from scratch.
                        </h3>

                        <p className="text-gray-300 font-light leading-relaxed text-sm sm:text-base">
                            I am a passionate Full-Stack MERN Developer dedicated to crafting high-performance web solutions. I love bridging the gap between elegant interface design and robust, secure backend architectures, ensuring that apps not only look outstanding but compile and scale seamlessly.
                        </p>

                        <p className="text-gray-300 font-light leading-relaxed text-sm sm:text-base">
                            On the client-side, I design interfaces using React and Tailwind CSS, focusing on interactivity, clean layouts, and responsiveness. For the backend, I build secure RESTful APIs and handle server logic using Express and Node.js, storing data efficiently in MongoDB database structures.
                        </p>

                        {/* Tech Stack Cards */}
                        <div className="grid grid-cols-3 gap-3 pt-2">
                            <div className="glassmorphism-light p-3.5 rounded-xl flex flex-col items-center text-center space-y-1.5 border border-white/5">
                                <Code className="w-5 h-5 text-blue-400" />
                                <span className="text-xs text-gray-300 font-medium">React</span>
                            </div>
                            <div className="glassmorphism-light p-3.5 rounded-xl flex flex-col items-center text-center space-y-1.5 border border-white/5">
                                <Server className="w-5 h-5 text-green-400" />
                                <span className="text-xs text-gray-300 font-medium">Node / Express</span>
                            </div>
                            <div className="glassmorphism-light p-3.5 rounded-xl flex flex-col items-center text-center space-y-1.5 border border-white/5">
                                <Database className="w-5 h-5 text-emerald-400" />
                                <span className="text-xs text-gray-300 font-medium">MongoDB</span>
                            </div>
                        </div>

                        {/* Contact Me CTA */}
                        <div className="pt-4 flex">
                            <Link
                                to="/contact"
                                className="inline-flex items-center space-x-2 px-6 py-3 bg-purple-600 hover:bg-purple-500 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-purple-600/20 hover:shadow-purple-600/40 hover:-translate-y-0.5 text-sm"
                            >
                                <User className="w-4 h-4" />
                                <span>Get in Touch</span>
                                <ArrowRight className="w-3.5 h-3.5" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Ambient Bottom Sparkles - 80% Width of Screen */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-44 overflow-hidden pointer-events-none select-none z-0">
                {[...Array(25)].map((_, i) => (
                    <span
                        key={i}
                        className="absolute bottom-0 w-1 sm:w-1.5 h-1 sm:h-1.5 bg-purple-500/40 rounded-full animate-sparkle-bg"
                        style={{
                            left: `${5 + (i * 3.8) + Math.random() * 2}%`,
                            animationDelay: `${i * 0.15}s`,
                            animationDuration: `${2.5 + Math.random() * 2.2}s`,
                        }}
                    />
                ))}
            </div>
        </section>
    )
}

export default About