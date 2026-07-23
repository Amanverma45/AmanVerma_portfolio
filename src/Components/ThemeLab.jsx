import React, { useState, useEffect } from 'react'
import { X, Palette, Sparkles, RefreshCw, Layers } from 'lucide-react'
import { themePalettes, applyThemeColor } from '../utils/theme'

const ThemeLab = ({ isOpen, onClose }) => {
    const [activeColor, setActiveColor] = useState('purple')
    const [isAuto, setIsAuto] = useState(true)
    const [activeFx, setActiveFx] = useState('cyber-grid')

    // Load initial states on open
    useEffect(() => {
        if (isOpen) {
            const savedColor = localStorage.getItem('theme-color') || 'purple'
            const savedAuto = localStorage.getItem('theme-auto') !== 'false'
            const savedFx = localStorage.getItem('theme-bgfx') || 'cyber-grid'

            setActiveColor(savedColor)
            setIsAuto(savedAuto)
            setActiveFx(savedFx)
        }
    }, [isOpen])

    const handleColorClick = (colorKey) => {
        applyThemeColor(colorKey, true)
        setActiveColor(colorKey)
        setIsAuto(false)
    }

    const toggleAutoTheme = () => {
        const newVal = !isAuto
        setIsAuto(newVal)
        if (newVal) {
            localStorage.setItem('theme-auto', 'true')
            // Apply a random theme instantly
            const keys = Object.keys(themePalettes)
            const randomColor = keys[Math.floor(Math.random() * keys.length)]
            applyThemeColor(randomColor, false)
            setActiveColor(randomColor)
        } else {
            localStorage.setItem('theme-auto', 'false')
            // Keep current color locked
            localStorage.setItem('theme-color', activeColor)
        }
    }

    const handleFxClick = (fxKey) => {
        localStorage.setItem('theme-bgfx', fxKey)
        setActiveFx(fxKey)
        window.dispatchEvent(new Event('bgfx-changed'))
    }

    const fxOptions = [
        { key: 'none', name: 'None' },
        { key: 'cyber-grid', name: 'Cyber Grid Waves' },
        { key: 'spider-jaal', name: 'Spider Jaal (Network)' },
        { key: 'matrix-lines', name: 'Digital Rain Coding' }
    ]

    return (
        <>
            {/* Backdrop */}
            <div
                className={`fixed inset-0 z-45 bg-black/60 backdrop-blur-sm transition-opacity duration-500 ${
                    isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                }`}
                onClick={onClose}
            />

            {/* Sidebar Panel */}
            <div
                className={`fixed inset-y-0 right-0 z-50 w-full sm:w-[360px] h-screen glassmorphism border-l border-white/10 flex flex-col p-6 overflow-y-auto transition-transform duration-500 ease-out transform ${
                    isOpen ? 'translate-x-0' : 'translate-x-full'
                }`}
            >
                {/* Header */}
                <div className="flex justify-between items-center pb-5 border-b border-white/10">
                    <div className="flex items-center space-x-2.5">
                        <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-purple-500/10 border border-purple-500/35">
                            <Palette className="w-4 h-4 text-purple-400" />
                        </div>
                        <span className="text-white font-bold text-lg tracking-wide">Theme Lab</span>
                    </div>
                    <button
                        onClick={onClose}
                        aria-label="Close Panel"
                        className="group relative p-2 flex items-center justify-center rounded-xl bg-white/5 hover:bg-red-500/10 border border-white/5 hover:border-red-500/30 text-gray-400 hover:text-red-400 transition-all duration-500 focus:outline-none"
                    >
                        <X className="w-4 h-4 transition-transform duration-500 group-hover:rotate-180 z-10" />
                    </button>
                </div>

                {/* Color Palette Section */}
                <div className="mt-6">
                    <div className="flex items-center space-x-2 text-gray-300 mb-4 text-sm font-semibold tracking-wide">
                        <Sparkles className="w-4 h-4 text-purple-400" />
                        <span>Color Palette</span>
                    </div>
                    
                    {/* Theme Grid */}
                    <div className="grid grid-cols-5 gap-3.5">
                        {Object.entries(themePalettes).map(([key, item]) => {
                            const isSelected = activeColor === key && !isAuto
                            return (
                                <button
                                    key={key}
                                    onClick={() => handleColorClick(key)}
                                    title={item.name}
                                    className={`relative aspect-square rounded-xl cursor-pointer transition-all duration-300 hover:scale-108 active:scale-92 border ${
                                        isSelected 
                                            ? 'border-white ring-2 ring-purple-500/40 shadow-lg' 
                                            : 'border-white/10 hover:border-white/30'
                                    }`}
                                    style={{ backgroundColor: item.colors[500] }}
                                >
                                    {/* Selection Glow Indicator */}
                                    {isSelected && (
                                        <div className="absolute inset-1 border border-black/20 rounded-lg flex items-center justify-center">
                                            <div className="w-2.5 h-2.5 rounded-full bg-white shadow-sm" />
                                        </div>
                                    )}
                                </button>
                            )
                        })}
                    </div>
                </div>

                {/* Auto Rotation Switch */}
                <div className="mt-8 pt-6 border-t border-white/5 flex justify-between items-center">
                    <div className="flex flex-col text-left">
                        <span className="text-sm font-semibold text-white tracking-wide">Auto-Rotate Theme</span>
                        <span className="text-xs text-gray-400 mt-0.5">Pick random color on reload</span>
                    </div>
                    <button
                        onClick={toggleAutoTheme}
                        className={`relative w-12 h-6.5 rounded-full p-1 transition-colors duration-300 focus:outline-none flex items-center ${
                            isAuto ? 'bg-purple-600' : 'bg-white/10'
                        }`}
                    >
                        <div
                            className={`w-4.5 h-4.5 rounded-full bg-white shadow-md transform transition-transform duration-300 flex items-center justify-center ${
                                isAuto ? 'translate-x-5.5' : 'translate-x-0'
                            }`}
                        >
                            {isAuto && <RefreshCw className="w-2.5 h-2.5 text-purple-600 animate-spin-slow" />}
                        </div>
                    </button>
                </div>

                {/* Background FX Section */}
                <div className="mt-8 pt-6 border-t border-white/5">
                    <div className="flex items-center space-x-2 text-gray-300 mb-4 text-sm font-semibold tracking-wide">
                        <Layers className="w-4 h-4 text-purple-400" />
                        <span>Background FX</span>
                    </div>

                    <div className="flex flex-col space-y-2.5">
                        {fxOptions.map(option => {
                            const isSelected = activeFx === option.key
                            return (
                                <button
                                    key={option.key}
                                    onClick={() => handleFxClick(option.key)}
                                    className={`w-full text-left px-4 py-3 rounded-xl border text-sm font-medium transition-all duration-300 flex justify-between items-center ${
                                        isSelected
                                            ? 'bg-purple-500/20 border-purple-500/40 text-white shadow-inner'
                                            : 'bg-white/5 border-transparent text-gray-400 hover:bg-white/10 hover:text-white'
                                    }`}
                                >
                                    <span>{option.name}</span>
                                    {isSelected && (
                                        <div className="w-2 h-2 rounded-full bg-purple-500 shadow-[0_0_8px_rgba(168,85,247,0.8)]" />
                                    )}
                                </button>
                            )
                        })}
                    </div>
                </div>

                {/* Footer */}
                <div className="mt-auto pt-6 text-center text-[10px] text-gray-500 border-t border-white/5">
                    Select dynamic themes to personalize your experience.
                </div>
            </div>
        </>
    )
}

export default ThemeLab
