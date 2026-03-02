import { useEffect, useState, useCallback } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, ArrowRight } from 'lucide-react'

function OrbitNode({ delay, radius, size, color, duration }) {
    return (
        <div
            style={{
                position: 'absolute',
                left: '50%',
                top: '50%',
                marginLeft: -radius,
                marginTop: -radius,
                width: radius * 2,
                height: radius * 2,
                animation: `orbit ${duration}s linear infinite`,
                animationDelay: `${delay}s`,
                '--r': `${radius}px`,
                pointerEvents: 'none',
            }}
            aria-hidden="true"
        >
            <div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: '50%',
                    marginLeft: -size / 2,
                    width: size,
                    height: size,
                    borderRadius: '50%',
                    background: color,
                    boxShadow: `0 0 ${size * 3}px ${color}`,
                }}
            />
        </div>
    )
}

const WORDS = ['Decentralized', 'Trustless', 'Permissionless', 'Onchain']

export default function Hero() {
    const [wordIndex, setWordIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setWordIndex(prev => (prev + 1) % WORDS.length)
        }, 3000)
        return () => clearInterval(interval)
    }, [])

    const scrollTo = useCallback((id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }, [])

    return (
        <section
            id="hero"
            style={{
                position: 'relative',
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
                width: '100%',
            }}
            aria-label="Hero"
        >
            {/* Grid bg */}
            <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }} aria-hidden="true">
                <div style={{
                    position: 'absolute', inset: 0, opacity: 0.04,
                    backgroundImage: 'linear-gradient(rgba(124,108,240,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(124,108,240,0.3) 1px, transparent 1px)',
                    backgroundSize: '60px 60px',
                }} />
                <div style={{
                    position: 'absolute', top: '20%', left: '-60px', width: '300px', height: '300px',
                    borderRadius: '50%', opacity: 0.2, filter: 'blur(100px)',
                    background: 'radial-gradient(circle, #7c6cf0, transparent)',
                }} />
                <div style={{
                    position: 'absolute', bottom: '20%', right: '-60px', width: '250px', height: '250px',
                    borderRadius: '50%', opacity: 0.15, filter: 'blur(80px)',
                    background: 'radial-gradient(circle, #00c8ff, transparent)',
                }} />
            </div>

            {/* Orbit rings — constrained to not overflow */}
            <div style={{
                position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)',
                width: 'min(420px, 80vw)', height: 'min(420px, 80vw)', pointerEvents: 'none',
            }} aria-hidden="true">
                <div style={{ position: 'absolute', inset: 0, borderRadius: '50%', border: '1px solid rgba(124,108,240,0.08)' }} />
                <div style={{ position: 'absolute', inset: '24px', borderRadius: '50%', border: '1px solid rgba(124,108,240,0.05)' }} />
                <div style={{ position: 'absolute', inset: '48px', borderRadius: '50%', border: '1px solid rgba(0,200,255,0.05)' }} />
                <OrbitNode delay={0} radius={180} size={7} color="#7c6cf0" duration={22} />
                <OrbitNode delay={3} radius={150} size={5} color="#00c8ff" duration={16} />
                <OrbitNode delay={7} radius={120} size={4} color="#0ff0b3" duration={28} />
                <OrbitNode delay={1.5} radius={200} size={4} color="#7c6cf0" duration={32} />
                <OrbitNode delay={5} radius={95} size={6} color="#00c8ff" duration={19} />
            </div>

            {/* Content */}
            <div style={{
                position: 'relative', zIndex: 10,
                width: '100%', maxWidth: '720px',
                padding: '0 20px', textAlign: 'center',
            }}>
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.6 }}
                >
                    <span
                        className="glass"
                        style={{
                            display: 'inline-flex', alignItems: 'center', gap: '8px',
                            padding: '8px 16px', borderRadius: '9999px',
                            fontSize: '10px', fontWeight: 500, color: 'var(--color-muted)',
                            textTransform: 'uppercase', letterSpacing: '0.15em',
                            marginBottom: '28px',
                        }}
                    >
                        <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#0ff0b3', animation: 'float-gentle 2s ease-in-out infinite' }} aria-hidden="true" />
                        Available for projects
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 36 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    style={{
                        fontFamily: 'var(--font-display)', fontWeight: 700,
                        fontSize: 'clamp(2rem, 8vw, 4.5rem)',
                        lineHeight: 1.05,
                        marginBottom: '20px',
                    }}
                >
                    <span style={{ display: 'block', color: 'var(--color-fg)' }}>Building the</span>
                    <span className="gradient-text" style={{ display: 'block', marginTop: '4px', height: '1.15em', overflow: 'hidden' }}>
                        <motion.span
                            key={wordIndex}
                            initial={{ y: 60, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -60, opacity: 0 }}
                            transition={{ duration: 0.5 }}
                            style={{ display: 'block' }}
                        >
                            {WORDS[wordIndex]}
                        </motion.span>
                    </span>
                    <span style={{ display: 'block', color: 'var(--color-fg)' }}>Future</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 1.1 }}
                    style={{
                        color: 'var(--color-muted)', fontSize: 'clamp(14px, 2.5vw, 17px)',
                        maxWidth: '500px', margin: '0 auto 32px', lineHeight: 1.7,
                    }}
                >
                    Developer, Researcher, and Web3 Enthusiast crafting smart contracts,
                    decentralized protocols, and the interfaces that connect them to everyone.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.4 }}
                    style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '12px' }}
                >
                    <button
                        id="hero-cta-work"
                        onClick={() => scrollTo('projects')}
                        style={{
                            display: 'inline-flex', alignItems: 'center', gap: '8px',
                            padding: '13px 28px', borderRadius: '9999px',
                            background: 'var(--color-accent)', color: '#fff',
                            fontSize: '12px', fontWeight: 600, textTransform: 'uppercase',
                            letterSpacing: '0.1em', border: 'none', cursor: 'pointer',
                            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                        }}
                        onMouseEnter={e => { e.target.style.transform = 'translateY(-2px)'; e.target.style.boxShadow = '0 8px 30px rgba(124,108,240,0.4)' }}
                        onMouseLeave={e => { e.target.style.transform = 'translateY(0)'; e.target.style.boxShadow = 'none' }}
                    >
                        View My Work <ArrowRight size={14} />
                    </button>
                    <button
                        id="hero-cta-contact"
                        onClick={() => scrollTo('contact')}
                        style={{
                            padding: '13px 28px', borderRadius: '9999px',
                            background: 'transparent', color: 'var(--color-muted)',
                            fontSize: '12px', fontWeight: 600, textTransform: 'uppercase',
                            letterSpacing: '0.1em', border: '1px solid var(--color-border)',
                            cursor: 'pointer', transition: 'all 0.3s ease',
                        }}
                        onMouseEnter={e => { e.target.style.borderColor = 'var(--color-accent)'; e.target.style.color = 'var(--color-fg)'; e.target.style.transform = 'translateY(-2px)' }}
                        onMouseLeave={e => { e.target.style.borderColor = 'var(--color-border)'; e.target.style.color = 'var(--color-muted)'; e.target.style.transform = 'translateY(0)' }}
                    >
                        Contact Me
                    </button>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.5, duration: 1 }}
                style={{ position: 'absolute', bottom: '28px', left: '50%', transform: 'translateX(-50%)' }}
            >
                <button
                    id="scroll-indicator"
                    onClick={() => scrollTo('about')}
                    style={{
                        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px',
                        background: 'none', border: 'none', cursor: 'pointer',
                        color: 'rgba(122,122,158,0.5)', transition: 'color 0.3s ease',
                    }}
                    aria-label="Scroll to about"
                >
                    <span style={{ fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.2em' }}>Scroll</span>
                    <ChevronDown size={14} style={{ animation: 'float-gentle 1.5s ease-in-out infinite' }} />
                </button>
            </motion.div>
        </section>
    )
}
