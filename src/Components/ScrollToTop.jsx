import React, { useState, useEffect } from 'react'
import { ChevronUp } from 'lucide-react'

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false)

    // Toggle Visibility based on scroll position
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true)
            } else {
                setIsVisible(false)
            }
        }

        window.addEventListener('scroll', toggleVisibility)
        return () => window.removeEventListener('scroll', toggleVisibility)
    }, [])

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    if (!isVisible) return null

    return (
        <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="fixed bottom-6 right-6 z-50 p-3 bg-purple-600/90 hover:bg-purple-500 text-white rounded-xl shadow-[0_0_15px_rgba(168,85,247,0.3)] hover:shadow-[0_0_25px_rgba(168,85,247,0.5)] border border-purple-400/30 hover:scale-105 active:scale-95 transition-all duration-300 animate-fade-in"
        >
            <ChevronUp className="w-5 h-5" />
        </button>
    )
}

export default ScrollToTop
