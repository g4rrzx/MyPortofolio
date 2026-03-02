import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'

const PROJECTS = [
    {
        title: 'HashRush',
        description: 'A Web3 crypto-mining simulation mini-app built for Farcaster and Base. Users can earn "HP" points, climb the leaderboard, and claim on-chain rewards by interacting with smart contracts directly from their social feed.',
        stack: ['Next.js', 'TypeScript', 'Ethers.js', 'Farcaster Frames', 'Solidity'],
        live: 'https://hashrush.vercel.app/',
        github: 'https://github.com/g4rrzx/hashrush',
        image: '/image/hashrush.png',
    },
    {
        title: 'FCScheduler Mini-App',
        description: 'A Web3 productivity mini-app for the Farcaster network that allows users to seamlessly plan, draft, and auto-publish casts with precision timing.',
        stack: [
            'Next.js',
            'React',
            'TypeScript',
            'Tailwind CSS',
        ],
        live: 'https://schduler-fc.vercel.app/',
        github: 'https://github.com/g4rrzx/farcaster-scheduler',
        image: '/image/fcscheduler.png',
    },

    {
        title: 'Farcaster Roulette Mini-App',
        description: 'An interactive Web3 mini-app featuring daily spins, automated quest verification, and a premium neon UI with gamified reward systems on the Farcaster network.',
        stack: ['Next.js', 'React', 'TypeScript', 'TailwindCSS'],
        live: 'https://rouletee.vercel.app',
        github: 'https://github.com/g4rrzx/farcaster-roulette',
        image: '/image/rouletee.png',
    },

]

const fadeUp = (i) => ({
    hidden: { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.08, ease: [0.25, 0.1, 0.25, 1] } },
})

export default function Projects() {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: '-60px' })

    return (
        <section id="projects" ref={ref} style={{ position: 'relative', padding: '100px 0' }} aria-label="Projects">
            <div className="section-divider" aria-hidden="true" />
            <div className="container-main" style={{ paddingTop: '48px' }}>
                {/* Header */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '48px' }}>
                    <motion.span variants={fadeUp(0)} initial="hidden" animate={inView ? 'visible' : 'hidden'}
                        style={{ color: 'var(--color-accent)', fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.2em' }}>
                        Projects
                    </motion.span>
                    <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', gap: '16px' }}>
                        <motion.h2 variants={fadeUp(1)} initial="hidden" animate={inView ? 'visible' : 'hidden'}
                            style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 700, color: 'var(--color-fg)', lineHeight: 1.15 }}>
                            Things I've <span className="gradient-text">shipped.</span>
                        </motion.h2>
                        <motion.p variants={fadeUp(2)} initial="hidden" animate={inView ? 'visible' : 'hidden'}
                            style={{ color: 'var(--color-muted)', fontSize: '14px', maxWidth: '300px' }}>
                            A selection of projects spanning DeFi protocols, dApps, and developer tools.
                        </motion.p>
                    </div>
                </div>

                {/* Grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 320px), 1fr))',
                    gap: '20px',
                }}>
                    {PROJECTS.map((project, i) => (
                        <motion.article
                            key={project.title}
                            variants={fadeUp(3 + i)}
                            initial="hidden"
                            animate={inView ? 'visible' : 'hidden'}
                            className="glass glow-card"
                            style={{
                                padding: '28px',
                                borderRadius: '16px',
                                transition: 'transform 0.3s ease',
                                cursor: 'default',
                            }}
                            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)' }}
                            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)' }}
                        >
                            {/* Web Preview Box */}
                            <div style={{
                                width: '100%',
                                height: '180px',
                                borderRadius: '12px',
                                background: 'var(--color-surface)',
                                border: '1px solid rgba(42,42,80,0.5)',
                                marginBottom: '20px',
                                overflow: 'hidden',
                                position: 'relative',
                                display: 'flex',
                                flexDirection: 'column'
                            }}>
                                {/* Browser Mockup Top Bar */}
                                <div style={{
                                    height: '24px',
                                    background: 'rgba(0,0,0,0.2)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    padding: '0 12px',
                                    gap: '6px',
                                    borderBottom: '1px solid rgba(42,42,80,0.3)'
                                }}>
                                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ff5f56' }} />
                                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ffbd2e' }} />
                                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#27c93f' }} />
                                </div>

                                {/* Image / Content Area */}
                                <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(255,255,255,0.02)' }}>
                                    {project.image ? (
                                        <img src={project.image} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                    ) : (
                                        <span style={{ color: 'var(--color-muted)', fontSize: '13px', fontWeight: 500 }}>Preview Image</span>
                                    )}
                                </div>
                            </div>

                            <h3 style={{
                                fontFamily: 'var(--font-display)', fontSize: '17px', fontWeight: 600,
                                color: 'var(--color-fg)', marginBottom: '12px', lineHeight: 1.3,
                            }}>
                                {project.title}
                            </h3>
                            <p style={{ color: 'var(--color-muted)', fontSize: '13px', lineHeight: 1.6, marginBottom: '20px' }}>
                                {project.description}
                            </p>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '20px' }}>
                                {project.stack.map(tech => (
                                    <span key={tech} style={{
                                        padding: '4px 10px', borderRadius: '6px', fontSize: '11px', fontWeight: 500,
                                        background: 'var(--color-surface)', color: 'var(--color-muted)',
                                        border: '1px solid rgba(42,42,80,0.5)',
                                    }}>
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', paddingTop: '16px', borderTop: '1px solid rgba(42,42,80,0.3)' }}>
                                <a href={project.live} style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', fontWeight: 500, color: 'var(--color-muted)', textDecoration: 'none', transition: 'color 0.3s' }}
                                    onMouseEnter={e => e.target.style.color = 'var(--color-accent)'} onMouseLeave={e => e.target.style.color = 'var(--color-muted)'}
                                    aria-label={`Live demo of ${project.title}`}>
                                    <ExternalLink size={13} /> Live Demo
                                </a>
                                <a href={project.github} style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', fontWeight: 500, color: 'var(--color-muted)', textDecoration: 'none', transition: 'color 0.3s' }}
                                    onMouseEnter={e => e.target.style.color = 'var(--color-fg)'} onMouseLeave={e => e.target.style.color = 'var(--color-muted)'}
                                    aria-label={`GitHub source of ${project.title}`}>
                                    <Github size={13} /> Source
                                </a>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    )
}
