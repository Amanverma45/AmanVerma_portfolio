import React, { useState } from 'react'
import { Mail, Phone, MapPin, Send, CheckCircle, ArrowRight } from 'lucide-react'

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

const LinkedinIcon = (props) => (
    <svg
        {...props}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
    </svg>
)

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    })
    const [status, setStatus] = useState('idle')

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!formData.name || !formData.email || !formData.message) return

        setStatus('submitting')

        fetch("https://formsubmit.co/ajax/av478136@gmail.com", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                Name: formData.name,
                Email: formData.email,
                Subject: formData.subject || "New Inquiry from Portfolio",
                Message: formData.message
            })
        })
            .then(response => response.json())
            .then(data => {
                if (data.success === "true" || data.success) {
                    setStatus('success')
                    setFormData({ name: '', email: '', subject: '', message: '' })
                } else {
                    setStatus('error')
                }
            })
            .catch(error => {
                console.error("Error submitting form:", error)
                setStatus('error')
            })
    }

    return (
        <section className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden">

            <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-purple-600/5 blur-[150px] pointer-events-none animate-pulse-slow" />
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-blue-500/5 blur-[120px] pointer-events-none animate-pulse-slow" style={{ animationDelay: '1.8s' }} />

            <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">

                <div className="flex flex-col items-center text-center space-y-3 mb-16 animate-fade-in">
                    <span className="text-xs sm:text-sm font-semibold tracking-[0.25em] text-purple-400 font-mono lowercase">
                        // connect with me
                    </span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
                        Contact Me
                    </h2>
                    <div className="w-16 h-1 bg-purple-500 rounded-full mt-2" />
                    <p className="text-gray-400 text-sm sm:text-base max-w-lg mt-4 font-light leading-relaxed">
                        Have a project, partnership, or opportunity you'd like to discuss? Reach out and let's build something together!
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

                    <div className="lg:col-span-5 flex flex-col space-y-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>

                        <div className="space-y-3">
                            <h3 className="text-2xl font-bold text-white">Let's start a conversation</h3>
                            <p className="text-gray-400 text-sm sm:text-base font-light leading-relaxed">
                                Feel free to get in touch. I am actively seeking full-time MERN stack developer opportunities and open to freelance collaborations.
                            </p>
                        </div>

                        <div className="space-y-4 pt-2">
                            <div className="flex items-center space-x-4 p-4 rounded-xl border border-white/5 bg-white/5 hover:border-purple-500/30 transition-all duration-300">
                                <div className="p-3 bg-purple-500/10 rounded-lg text-purple-400">
                                    <Mail className="w-5 h-5" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-xs text-purple-400 font-mono">Email Me</span>
                                    <a href="mailto:amanverma@example.com" className="text-white hover:text-purple-300 font-medium text-sm sm:text-base transition-colors duration-300">
                                        av478136@gmail.com
                                    </a>
                                </div>
                            </div>

                            {/* Phone Card */}
                            <div className="flex items-center space-x-4 p-4 rounded-xl border border-white/5 bg-white/5 hover:border-purple-500/30 transition-all duration-300">
                                <div className="p-3 bg-purple-500/10 rounded-lg text-purple-400">
                                    <Phone className="w-5 h-5" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-xs text-purple-400 font-mono">Call Me</span>
                                    <a href="tel:+919876543210" className="text-white hover:text-purple-300 font-medium text-sm sm:text-base transition-colors duration-300">
                                        +91 84358 56067
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center space-x-4 p-4 rounded-xl border border-white/5 bg-white/5 hover:border-purple-500/30 transition-all duration-300">
                                <div className="p-3 bg-purple-500/10 rounded-lg text-purple-400">
                                    <MapPin className="w-5 h-5" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-xs text-purple-400 font-mono">Location</span>
                                    <span className="text-white font-medium text-sm sm:text-base">
                                        Indore, India
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="pt-4 flex items-center space-x-4">
                            <span className="text-xs text-gray-500 font-mono uppercase tracking-wider">Social Links</span>
                            <div className="w-8 h-px bg-white/10" />
                            <a
                                href="https://github.com/Amanverma45"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2.5 rounded-lg bg-white/5 border border-white/5 hover:border-purple-500/40 text-gray-400 hover:text-white transition-all duration-300"
                            >
                                <GithubIcon className="w-5 h-5" />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/aman-verma-2b1216350/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2.5 rounded-lg bg-white/5 border border-white/5 hover:border-purple-500/40 text-gray-400 hover:text-purple-400 transition-all duration-300"
                            >
                                <LinkedinIcon className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    <div className="lg:col-span-7 animate-fade-in" style={{ animationDelay: '0.4s' }}>
                        <div className="relative glassmorphism rounded-2xl p-6 sm:p-8 border border-white/5 hover:border-purple-500/20 shadow-2xl transition-all duration-300">

                            {status === 'success' ? (
                                <div className="flex flex-col items-center text-center py-10 space-y-4 animate-slide-up">
                                    <div className="p-4 bg-purple-500/15 text-purple-400 rounded-full border border-purple-500/25 animate-glow">
                                        <CheckCircle className="w-12 h-12" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white">Message Sent!</h3>
                                    <p className="text-gray-400 text-sm max-w-xs leading-relaxed">
                                        Thank you for reaching out, Aman. Your message has been received, and I'll get back to you as soon as possible!
                                    </p>
                                    <button
                                        onClick={() => setStatus('idle')}
                                        className="mt-6 flex items-center space-x-2 px-5 py-2.5 bg-white/5 hover:bg-white/10 text-white font-medium rounded-xl border border-white/10 transition-all duration-300 text-xs"
                                    >
                                        <span>Send Another Message</span>
                                        <ArrowRight className="w-3.5 h-3.5" />
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-5">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                        <div className="flex flex-col space-y-1.5">
                                            <label htmlFor="name" className="text-xs text-purple-400 font-mono">Your Name</label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleInputChange}
                                                required
                                                placeholder="Aman Verma"
                                                className="w-full bg-white/5 border border-white/10 focus:border-purple-500 rounded-xl px-4 py-3 text-white text-sm focus:outline-none transition-colors duration-300 placeholder-gray-600"
                                            />
                                        </div>
                                        <div className="flex flex-col space-y-1.5">
                                            <label htmlFor="email" className="text-xs text-purple-400 font-mono">Email Address</label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                required
                                                placeholder="name@gmail.com"
                                                className="w-full bg-white/5 border border-white/10 focus:border-purple-500 rounded-xl px-4 py-3 text-white text-sm focus:outline-none transition-colors duration-300 placeholder-gray-600"
                                            />
                                        </div>
                                    </div>
                                    <div className="flex flex-col space-y-1.5">
                                        <label htmlFor="subject" className="text-xs text-purple-400 font-mono">Subject (Optional)</label>
                                        <input
                                            type="text"
                                            id="subject"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleInputChange}
                                            placeholder="Partnership, freelance, job opportunity..."
                                            className="w-full bg-white/5 border border-white/10 focus:border-purple-500 rounded-xl px-4 py-3 text-white text-sm focus:outline-none transition-colors duration-300 placeholder-gray-600"
                                        />
                                    </div>
                                    <div className="flex flex-col space-y-1.5">
                                        <label htmlFor="message" className="text-xs text-purple-400 font-mono">Message Details</label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            rows="5"
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            required
                                            placeholder="Write your message details here..."
                                            className="w-full bg-white/5 border border-white/10 focus:border-purple-500 rounded-xl px-4 py-3 text-white text-sm focus:outline-none transition-colors duration-300 placeholder-gray-600 resize-none"
                                        />
                                    </div>
                                    {status === 'error' && (
                                        <div className="p-3 bg-red-500/10 border border-red-500/20 text-red-400 rounded-xl text-xs text-center font-medium animate-fade-in">
                                            Something went wrong. Please try again or email me directly at av478136@gmail.com
                                        </div>
                                    )}

                                    <button
                                        type="submit"
                                        disabled={status === 'submitting'}
                                        className="w-full flex items-center justify-center space-x-2 px-6 py-3.5 bg-purple-600 hover:bg-purple-500 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-purple-600/20 hover:shadow-purple-600/40 hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed text-sm cursor-pointer"
                                    >
                                        {status === 'submitting' ? (
                                            <>
                                                <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                                </svg>
                                                <span>Sending Message...</span>
                                            </>
                                        ) : (
                                            <>
                                                <Send className="w-4 h-4" />
                                                <span>Send Message</span>
                                            </>
                                        )}
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>

                </div>

            </div>
        </section>
    )
}

export default Contact