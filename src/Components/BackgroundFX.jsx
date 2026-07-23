import React, { useEffect, useRef } from 'react'

const BackgroundFX = () => {
    const canvasRef = useRef(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext('2d')
        let animationFrameId
        let particles = []
        let gridOffset = 0
        let matrixColumns = []
        let activeFx = localStorage.getItem('theme-bgfx') || 'cyber-grid'

        const resizeCanvas = () => {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
            initFX()
        }


        const initFX = () => {
            particles = []
            matrixColumns = []

            if (activeFx === 'spider-jaal') {
                const count = Math.min(Math.floor((canvas.width * canvas.height) / 15000), 100)
                for (let i = 0; i < count; i++) {
                    particles.push({
                        x: Math.random() * canvas.width,
                        y: Math.random() * canvas.height,
                        vx: (Math.random() - 0.5) * 0.6,
                        vy: (Math.random() - 0.5) * 0.6,
                        radius: Math.random() * 2 + 1
                    })
                }
            } else if (activeFx === 'matrix-lines') {
                const fontSize = 14
                const columns = Math.ceil(canvas.width / fontSize)
                for (let i = 0; i < columns; i++) {
                    matrixColumns.push({
                        x: i * fontSize,
                        y: Math.random() * -canvas.height,
                        speed: Math.random() * 2 + 1.5,
                        length: Math.floor(Math.random() * 20) + 10
                    })
                }
            }
        }


        const getAccentColor = (alpha = 1) => {
            const rootStyle = getComputedStyle(document.documentElement)
            const accentHex = rootStyle.getPropertyValue('--theme-purple-500').trim() || '#a855f7'


            let r = 168, g = 85, b = 247
            if (accentHex.startsWith('#')) {
                const hex = accentHex.replace('#', '')
                if (hex.length === 3) {
                    r = parseInt(hex[0] + hex[0], 16)
                    g = parseInt(hex[1] + hex[1], 16)
                    b = parseInt(hex[2] + hex[2], 16)
                } else if (hex.length === 6) {
                    r = parseInt(hex.substring(0, 2), 16)
                    g = parseInt(hex.substring(2, 4), 16)
                    b = parseInt(hex.substring(4, 6), 16)
                }
            }
            return `rgba(${r}, ${g}, ${b}, ${alpha})`
        }

        const tick = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height)
            const accentColor = getAccentColor

            if (activeFx === 'spider-jaal') {

                particles.forEach(p => {
                    p.x += p.vx
                    p.y += p.vy


                    if (p.x < 0 || p.x > canvas.width) p.vx *= -1
                    if (p.y < 0 || p.y > canvas.height) p.vy *= -1

                    ctx.beginPath()
                    ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
                    ctx.fillStyle = accentColor(0.25)
                    ctx.fill()
                })


                ctx.lineWidth = 0.6
                for (let i = 0; i < particles.length; i++) {
                    for (let j = i + 1; j < particles.length; j++) {
                        const dist = Math.hypot(particles[i].x - particles[j].x, particles[i].y - particles[j].y)
                        if (dist < 130) {
                            const alpha = (1 - dist / 130) * 0.15
                            ctx.strokeStyle = accentColor(alpha)
                            ctx.beginPath()
                            ctx.moveTo(particles[i].x, particles[i].y)
                            ctx.lineTo(particles[j].x, particles[j].y)
                            ctx.stroke()
                        }
                    }
                }
            }

            else if (activeFx === 'cyber-grid') {

                ctx.lineWidth = 0.8
                ctx.strokeStyle = accentColor(0.08)

                const horizon = canvas.height * 0.4
                gridOffset += 0.6
                if (gridOffset >= 40) gridOffset = 0


                const numVLines = 30
                for (let i = 0; i <= numVLines; i++) {
                    const progress = i / numVLines
                    const startX = canvas.width * progress
                    const targetX = canvas.width * 0.5 + (startX - canvas.width * 0.5) * 4
                    ctx.beginPath()
                    ctx.moveTo(startX, horizon)
                    ctx.lineTo(targetX, canvas.height)
                    ctx.stroke()
                }


                const numHLines = 12
                for (let i = 0; i < numHLines; i++) {
                    const yOffset = ((i * 40 + gridOffset) / (numHLines * 40)) * (canvas.height - horizon)
                    const currentY = horizon + yOffset


                    ctx.beginPath()
                    for (let x = 0; x <= canvas.width; x += 10) {
                        const waveFactor = (currentY - horizon) / (canvas.height - horizon)
                        const wave = Math.sin(x * 0.005 + gridOffset * 0.05) * 12 * waveFactor
                        if (x === 0) {
                            ctx.moveTo(x, currentY + wave)
                        } else {
                            ctx.lineTo(x, currentY + wave)
                        }
                    }
                    ctx.strokeStyle = accentColor(0.04 + (yOffset / (canvas.height - horizon)) * 0.08)
                    ctx.stroke()
                }
            }

            else if (activeFx === 'matrix-lines') {
                ctx.lineWidth = 1.5
                matrixColumns.forEach(col => {
                    col.y += col.speed
                    if (col.y > canvas.height) {
                        col.y = -col.length * 15
                        col.speed = Math.random() * 2 + 1.5
                    }

                    const grad = ctx.createLinearGradient(col.x, col.y, col.x, col.y + col.length * 10)
                    grad.addColorStop(0, 'rgba(0,0,0,0)')
                    grad.addColorStop(0.8, accentColor(0.18))
                    grad.addColorStop(1, accentColor(0.45))

                    ctx.strokeStyle = grad
                    ctx.beginPath()
                    ctx.moveTo(col.x, col.y)
                    ctx.lineTo(col.x, col.y + col.length * 10)
                    ctx.stroke()

                    ctx.fillStyle = '#ffffff'
                    ctx.beginPath()
                    ctx.arc(col.x, col.y + col.length * 10, 1, 0, Math.PI * 2)
                    ctx.fill()
                })
            }

            animationFrameId = requestAnimationFrame(tick)
        }

        const handleFxChange = () => {
            activeFx = localStorage.getItem('theme-bgfx') || 'cyber-grid'
            initFX()
        }

        window.addEventListener('resize', resizeCanvas)
        window.addEventListener('bgfx-changed', handleFxChange)

        resizeCanvas()
        tick()

        return () => {
            cancelAnimationFrame(animationFrameId)
            window.removeEventListener('resize', resizeCanvas)
            window.removeEventListener('bgfx-changed', handleFxChange)
        }
    }, [])

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 w-full h-full -z-10 pointer-events-none select-none opacity-60"
        />
    )
}

export default BackgroundFX
