import React, { useState, useEffect } from 'react'

const ScrollProgress = () => {
    const [scrollProgress, setScrollProgress] = useState(0)

    useEffect(() => {
        const handleScroll = () => {
            const totalHeight = document.documentElement.scrollHeight - window.innerHeight
            if (totalHeight > 0) {
                const progress = (window.scrollY / totalHeight) * 100
                setScrollProgress(progress)
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <div className="fixed top-0 left-0 right-0 h-[3px] bg-transparent z-[100] pointer-events-none">
            <div 
                className="h-full bg-gradient-to-r from-purple-600 via-purple-400 to-pink-500 transition-all duration-75 ease-out shadow-[0_1px_10px_rgba(168,85,247,0.5)]"
                style={{ width: `${scrollProgress}%` }}
            />
        </div>
    )
}

export default ScrollProgress
