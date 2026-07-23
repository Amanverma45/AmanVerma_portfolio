import React from 'react'
import { Database, Cpu, Globe, Terminal, GitBranch, Code2, ShieldCheck, Network, Key, Layers, Server } from 'lucide-react'

const GithubIcon = (props) => (
    <svg 
        {...props} 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
    >
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
)

const Skills = () => {
    const skillCategories = [
        {
            title: 'Frontend Development',
            skills: [
                { name: 'React.js', level: 92, icon: Globe, color: 'text-cyan-400', glow: 'shadow-cyan-500/20' },
                { name: 'Tailwind CSS', level: 95, icon: Layers, color: 'text-sky-400', glow: 'shadow-sky-500/20' },
                { name: 'JavaScript ES6+', level: 90, icon: Code2, color: 'text-yellow-400', glow: 'shadow-yellow-500/20' },
                { name: 'Redux Toolkit', level: 85, icon: Cpu, color: 'text-purple-400', glow: 'shadow-purple-500/20' },
            ]
        },
        {
            title: 'Backend Development',
            skills: [
                { name: 'Node.js', level: 88, icon: Server, color: 'text-green-400', glow: 'shadow-green-500/20' },
                { name: 'Express.js', level: 90, icon: Terminal, color: 'text-gray-300', glow: 'shadow-gray-400/20' },
                { name: 'REST APIs', level: 92, icon: Network, color: 'text-teal-400', glow: 'shadow-teal-500/20' },
                { name: 'JWT Auth', level: 88, icon: Key, color: 'text-indigo-400', glow: 'shadow-indigo-500/20' },
            ]
        },
        {
            title: 'Databases & Tools',
            skills: [
                { name: 'MongoDB', level: 87, icon: Database, color: 'text-emerald-400', glow: 'shadow-emerald-500/20' },
                { name: 'Git', level: 90, icon: GitBranch, color: 'text-orange-400', glow: 'shadow-orange-500/20' },
                { name: 'GitHub', level: 92, icon: GithubIcon, color: 'text-white', glow: 'shadow-white/20' },
                { name: 'Postman', level: 88, icon: ShieldCheck, color: 'text-orange-500', glow: 'shadow-orange-500/20' },
            ]
        }
    ]

    return (
        <section className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden">
            <div className="absolute top-10 left-10 w-96 h-96 rounded-full bg-purple-600/5 blur-[150px] pointer-events-none animate-pulse-slow" />
            <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-blue-500/5 blur-[150px] pointer-events-none animate-pulse-slow" style={{ animationDelay: '2s' }} />

            <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
                
                <div className="flex flex-col items-center text-center space-y-3 mb-16 animate-fade-in">
                    <span className="text-xs sm:text-sm font-semibold tracking-[0.25em] text-purple-400 font-mono lowercase">
                        // technical capability
                    </span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
                        My Skills & Expertise
                    </h2>
                    <div className="w-16 h-1 bg-purple-500 rounded-full mt-2" />
                    <p className="text-gray-400 text-sm sm:text-base max-w-lg mt-4 font-light leading-relaxed">
                        A detailed breakdown of my technological stack in full-stack MERN development, styling frameworks, database engines, and version control tools.
                    </p>
                </div>

                <div className="space-y-12">
                    {skillCategories.map((category, catIndex) => (
                        <div key={catIndex} className="space-y-6">
                            <h3 className="text-xl font-bold text-gray-200 pl-4 border-l-2 border-purple-500 tracking-wide">
                                {category.title}
                            </h3>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                                {category.skills.map((skill, skillIndex) => {
                                    const IconComponent = skill.icon
                                    return (
                                        <div
                                            key={skillIndex}
                                            className="group relative glassmorphism rounded-2xl p-6 border border-white/5 hover:border-purple-500/40 hover:shadow-[0_0_25px_rgba(168,85,247,0.15)] transition-all duration-500 hover:-translate-y-1.5 overflow-hidden animate-fade-in"
                                            style={{ animationDelay: `${(catIndex * 4 + skillIndex) * 80}ms` }}
                                        >
                                            <div className="absolute -top-10 -right-10 w-24 h-24 bg-purple-500/5 rounded-full blur-xl group-hover:bg-purple-500/10 transition-all duration-500" />
                                            
                                            <div className="flex items-center space-x-4 mb-4 relative z-10">
                                                <div className="relative flex items-center justify-center w-12 h-12 rounded-xl bg-white/5 border border-white/10 group-hover:border-purple-500/40 transition-colors duration-500">
                                                    <IconComponent className={`w-6 h-6 ${skill.color} transition-all duration-700 group-hover:scale-110 group-hover:rotate-[360deg]`} />
                                                </div>
                                                <div>
                                                    <h4 className="font-bold text-white group-hover:text-purple-300 transition-colors duration-300">
                                                        {skill.name}
                                                    </h4>
                                                    <span className="text-xs text-purple-400 font-mono">
                                                        {skill.level}% Proficiency
                                                    </span>
                                                </div>
                                            </div>

                                            <div className="relative w-full h-2 bg-white/5 rounded-full overflow-hidden mt-6">
                                                <div 
                                                    className="absolute top-0 left-0 h-full bg-gradient-to-r from-purple-600 to-purple-400 rounded-full transition-all duration-1000 ease-out shadow-[0_0_8px_rgba(168,85,247,0.4)]"
                                                    style={{ width: `${skill.level}%` }}
                                                />
                                                <div 
                                                    className="absolute top-0 left-0 h-full w-12 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12 animate-laser-pulse"
                                                />
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}

export default Skills