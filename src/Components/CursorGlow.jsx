import React, { useState, useEffect } from 'react'

const CursorGlow = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 })
    const [isTouchDevice, setIsTouchDevice] = useState(true)

    useEffect(() => {
        const checkTouchDevice = () => {
            const isTouch = window.matchMedia('(pointer: coarse)').matches || window.innerWidth < 768
            setIsTouchDevice(isTouch)
        }

        checkTouchDevice()
        window.addEventListener('resize', checkTouchDevice)

        const handleMouseMove = (e) => {
            setPosition({ x: e.clientX, y: e.clientY })
        }

        if (!isTouchDevice) {
            window.addEventListener('mousemove', handleMouseMove)
        }

        return () => {
            window.removeEventListener('resize', checkTouchDevice)
            window.removeEventListener('mousemove', handleMouseMove)
        }
    }, [isTouchDevice])

    if (isTouchDevice) return null

    return (
        <div
            className="fixed pointer-events-none z-[99] -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-purple-600/5 blur-[50px] transition-transform duration-300 ease-out"
            style={{
                left: `${position.x}px`,
                top: `${position.y}px`
            }}
        />
    )
}

export default CursorGlow
