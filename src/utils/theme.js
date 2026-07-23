export const themePalettes = {
    purple: {
        name: 'Purple',
        colors: { 300: '#d8b4fe', 400: '#c084fc', 500: '#a855f7', 600: '#9333ea', glow: 'rgba(168, 85, 247, 0.15)' }
    },
    blue: {
        name: 'Blue',
        colors: { 300: '#93c5fd', 400: '#60a5fa', 500: '#3b82f6', 600: '#2563eb', glow: 'rgba(59, 130, 246, 0.15)' }
    },
    green: {
        name: 'Green',
        colors: { 300: '#6ee7b7', 400: '#34d399', 500: '#10b981', 600: '#059669', glow: 'rgba(16, 185, 129, 0.15)' }
    },
    cyan: {
        name: 'Cyan',
        colors: { 300: '#67e8f9', 400: '#22d3ee', 500: '#06b6d4', 600: '#0891b2', glow: 'rgba(6, 182, 212, 0.15)' }
    },
    orange: {
        name: 'Orange',
        colors: { 300: '#fed7aa', 400: '#fb923c', 500: '#f97316', 600: '#ea580c', glow: 'rgba(249, 115, 22, 0.15)' }
    },
    rose: {
        name: 'Rose',
        colors: { 300: '#fda4af', 400: '#fb7185', 500: '#f43f5e', 600: '#e11d48', glow: 'rgba(244, 63, 94, 0.15)' }
    },
    pink: {
        name: 'Pink',
        colors: { 300: '#fbcfe8', 400: '#f472b6', 500: '#ec4899', 600: '#db2777', glow: 'rgba(236, 72, 153, 0.15)' }
    },
    teal: {
        name: 'Teal',
        colors: { 300: '#99f6e4', 400: '#2dd4bf', 500: '#14b8a6', 600: '#0d9488', glow: 'rgba(20, 184, 166, 0.15)' }
    },
    violet: {
        name: 'Violet',
        colors: { 300: '#c7d2fe', 400: '#818cf8', 500: '#6366f1', 600: '#4f46e5', glow: 'rgba(99, 102, 241, 0.15)' }
    },
    lime: {
        name: 'Lime',
        colors: { 300: '#d9f99d', 400: '#a3e635', 500: '#84cc16', 600: '#65a30d', glow: 'rgba(132, 204, 22, 0.15)' }
    }
}

// Apply selected theme color variables to Document Root
export const applyThemeColor = (colorKey, saveToStorage = true) => {
    const theme = themePalettes[colorKey]
    if (!theme) return

    document.documentElement.style.setProperty('--theme-purple-300', theme.colors[300])
    document.documentElement.style.setProperty('--theme-purple-400', theme.colors[400])
    document.documentElement.style.setProperty('--theme-purple-500', theme.colors[500])
    document.documentElement.style.setProperty('--theme-purple-600', theme.colors[600])
    document.documentElement.style.setProperty('--theme-purple-glow', theme.colors.glow)

    if (saveToStorage) {
        localStorage.setItem('theme-color', colorKey)
        localStorage.setItem('theme-auto', 'false')
    }
    
    // Dispatch custom event to notify listeners (like Canvas Background) to update styling
    window.dispatchEvent(new Event('bgfx-changed'))
}

// Get a random color key from palettes
export const getRandomThemeColor = () => {
    const keys = Object.keys(themePalettes)
    const randomIdx = Math.floor(Math.random() * keys.length)
    return keys[randomIdx]
}

// Initialize Theme Color on App startup
export const initializeTheme = () => {
    const isAuto = localStorage.getItem('theme-auto') !== 'false'
    const savedColor = localStorage.getItem('theme-color')
    const activeFx = localStorage.getItem('theme-bgfx')

    // Set default background effect if not set
    if (!activeFx) {
        localStorage.setItem('theme-bgfx', 'cyber-grid')
    }

    if (isAuto) {
        const randomColor = getRandomThemeColor()
        applyThemeColor(randomColor, false)
        // Keep auto-theme enabled for next reload
        localStorage.setItem('theme-auto', 'true')
    } else if (savedColor && themePalettes[savedColor]) {
        applyThemeColor(savedColor, false)
    } else {
        applyThemeColor('purple', false)
    }
}
