import React, { useState } from 'react'
import { Globe, ArrowUpRight } from 'lucide-react'

const Projects = () => {
    const projectList = [
        {
            title: 'SwapHub',
            description: 'A modern peer-to-peer item swapping marketplace platform. Enables users to upload items, list exchange preferences, negotiate deals, and barter items seamlessly.',
            tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS', 'Socket.io'],
            link: 'https://swaphub45.netlify.app',
            image: '/swaphub.png',
            category: 'Full-Stack MERN'
        },
        {
            title: 'YN Events',
            description: 'A premium event planning and decoration portfolio platform. Features categorised event galleries, dynamic inquiry forms, booking engines, and highly responsive transitions.',
            tech: ['React', 'Tailwind CSS', 'Framer Motion', 'Express', 'Node.js', 'MongoDB'],
            link: 'https://yn-event.netlify.app',
            image: '/yn-events.png',
            category: 'MERN & UI'
        },
        {
            title: 'CareerBridge',
            description: 'An advanced job matching and recruitment portal. Bridges the gap between job seekers and employers with resume trackers, job posting dashboards, and real-time alerts.',
            tech: ['React', 'Redux Toolkit', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
            link: 'https://yourcareerbridge.netlify.app',
            image: '/careerbridge.png',
            category: 'Full-Stack MERN'
        }
    ]

    const categories = ['All', 'Full-Stack MERN', 'MERN & UI']
    const [activeFilter, setActiveFilter] = useState('All')

    const filteredProjects = activeFilter === 'All'
        ? projectList
        : projectList.filter(project => project.category === activeFilter)

    return (
        <section className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden">
            {/* Ambient Background Glows */}
            <div className="absolute top-1/4 left-1/3 w-80 h-80 rounded-full bg-purple-600/5 blur-[120px] pointer-events-none animate-pulse-slow" />
            <div className="absolute bottom-1/4 right-1/3 w-96 h-96 rounded-full bg-blue-500/5 blur-[150px] pointer-events-none animate-pulse-slow" style={{ animationDelay: '1.5s' }} />

            <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
                
                {/* Section Header */}
                <div className="flex flex-col items-center text-center space-y-3 mb-10 animate-fade-in">
                    <span className="text-xs sm:text-sm font-semibold tracking-[0.25em] text-purple-400 font-mono lowercase">
                        // featured works
                    </span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
                        My Projects
                    </h2>
                    <div className="w-16 h-1 bg-purple-500 rounded-full mt-2" />
                    <p className="text-gray-400 text-sm sm:text-base max-w-lg mt-4 font-light leading-relaxed">
                        A showcase of full-stack web applications and UI solutions built with MERN stack, high performance, and clean code principles.
                    </p>
                </div>

                {/* Filter Buttons */}
                <div className="flex justify-center items-center gap-3 mb-12 animate-fade-in" style={{ animationDelay: '0.1s' }}>
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveFilter(category)}
                            className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-xl border transition-all duration-300 ${
                                activeFilter === category
                                    ? 'bg-purple-600 border-purple-500 text-white shadow-lg shadow-purple-600/20'
                                    : 'bg-white/5 border-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
                            }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project, index) => (
                        <a
                            key={project.title}
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group block relative glassmorphism rounded-2xl p-5 md:p-6 transition-all duration-300 hover:-translate-y-2 border border-white/5 hover:border-purple-500/40 hover:shadow-[0_8px_30px_rgba(168,85,247,0.2)] animate-slide-up"
                            style={{ animationDelay: `${index * 120}ms` }}
                        >
                            {/* Project Screenshot Display */}
                            <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-6 border border-white/10 group-hover:border-purple-500/30 transition-all duration-300 bg-slate-950/40">
                                <img 
                                    src={project.image} 
                                    alt={project.title} 
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    onError={(e) => {
                                        // Fallback design if image is missing/loading
                                        e.target.style.display = 'none';
                                    }}
                                />
                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
                            </div>

                            {/* Project Header Icons */}
                            <div className="flex justify-between items-start mb-4">
                                <div className="p-2.5 bg-purple-500/10 rounded-lg border border-purple-500/20 text-purple-400 group-hover:bg-purple-500/20 group-hover:text-white transition-all duration-300">
                                    <Globe className="w-5 h-5" />
                                </div>
                                <div className="text-gray-500 group-hover:text-purple-400 transition-colors duration-300">
                                    <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                                </div>
                            </div>

                            {/* Category Badge */}
                            <span className="text-[10px] text-purple-400 font-mono uppercase tracking-wider font-semibold">
                                {project.category}
                            </span>

                            {/* Title */}
                            <h3 className="text-xl font-bold text-white mt-2 group-hover:text-purple-300 transition-colors duration-300">
                                {project.title}
                            </h3>

                            {/* Description */}
                            <p className="text-gray-400 text-sm font-light mt-3 leading-relaxed min-h-[84px]">
                                {project.description}
                            </p>

                            {/* Tech Stack Tags */}
                            <div className="flex flex-wrap gap-2 mt-6">
                                {project.tech.map((tag, tagIndex) => (
                                    <span
                                        key={tagIndex}
                                        className="px-2.5 py-1 bg-white/5 border border-white/5 rounded-lg text-xs text-gray-300 font-medium font-sans"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </a>
                    ))}
                </div>

            </div>
        </section>
    )
}

export default Projects