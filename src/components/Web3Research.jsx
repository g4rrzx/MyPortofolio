import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FileText, ArrowUpRight } from 'lucide-react'

const RESEARCH = [
    {
        title: 'Deep Dive: Base L2 Financial Infrastructure',
        summary: 'A 2026 perspective on Coinbase\'s Layer 2 evolution, analyzing the shift to the Unified Base Stack, native biometric authentication, and its dominance in institutional stablecoin liquidity.',
        tags: ['Layer 2', 'Unified Stack', 'Base'],
        link: 'https://reminiscent-catamaran-f52.notion.site/Base-Network-Research-310b82d4d88b800f9cf8db5ef6514286',
    },
]

const fadeUp = (i) => ({
    hidden: { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] } },
})

export default function Web3Research() {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: '-60px' })

    return (
        <section id="research" ref={ref} style={{ position: 'relative', padding: '100px 0', overflow: 'hidden' }} aria-label="Web3 Research">
            {/* Background glow */}
            <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(180deg, transparent 0%, rgba(20,20,42,0.4) 30%, rgba(20,20,42,0.4) 70%, transparent 100%)',
                pointerEvents: 'none',
            }} aria-hidden="true" />
            <div style={{
                position: 'absolute', top: 0, left: 0, right: 0, height: '1px',
                background: 'linear-gradient(90deg, transparent, rgba(124,108,240,0.35), transparent)',
            }} aria-hidden="true" />
            <div style={{
                position: 'absolute', bottom: 0, left: 0, right: 0, height: '1px',
                background: 'linear-gradient(90deg, transparent, rgba(124,108,240,0.35), transparent)',
            }} aria-hidden="true" />
            <div style={{
                position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
                width: 'min(600px, 100%)', height: '400px', borderRadius: '50%', opacity: 0.08, filter: 'blur(150px)',
                background: 'radial-gradient(circle, #7c6cf0, transparent 70%)', pointerEvents: 'none',
            }} aria-hidden="true" />

            <div className="container-main" style={{ position: 'relative', zIndex: 2 }}>
                {/* Header */}
                <div style={{ textAlign: 'center', marginBottom: '56px' }}>
                    <motion.span variants={fadeUp(0)} initial="hidden" animate={inView ? 'visible' : 'hidden'}
                        style={{ display: 'block', color: 'var(--color-accent)', fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '16px' }}>
                        Web3 Research
                    </motion.span>
                    <motion.h2 variants={fadeUp(1)} initial="hidden" animate={inView ? 'visible' : 'hidden'}
                        style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 700, color: 'var(--color-fg)', marginBottom: '12px', lineHeight: 1.15 }}>
                        Deep dives into the <span className="gradient-text">protocol layer.</span>
                    </motion.h2>
                    <motion.p variants={fadeUp(2)} initial="hidden" animate={inView ? 'visible' : 'hidden'}
                        style={{ color: 'var(--color-muted)', maxWidth: '480px', margin: '0 auto', fontSize: '15px' }}>
                        Where I explore bleeding-edge cryptography, consensus, and mechanism design.
                    </motion.p>
                </div>

                {/* Research Cards */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '800px', margin: '0 auto' }}>
                    {RESEARCH.map((paper, i) => (
                        <motion.a
                            key={paper.title}
                            href={paper.link}
                            variants={fadeUp(3 + i)}
                            initial="hidden"
                            animate={inView ? 'visible' : 'hidden'}
                            className="glass-strong glow-card"
                            style={{
                                display: 'block', padding: '28px', borderRadius: '16px',
                                textDecoration: 'none', transition: 'transform 0.3s ease',
                            }}
                            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)' }}
                            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)' }}
                        >
                            <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                                <div style={{
                                    flexShrink: 0, width: '48px', height: '48px', borderRadius: '12px',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    background: 'rgba(124,108,240,0.1)', border: '1px solid rgba(124,108,240,0.2)',
                                }}>
                                    <FileText size={20} style={{ color: 'var(--color-accent)' }} />
                                </div>
                                <div style={{ flex: 1, minWidth: 0 }}>
                                    <h3 style={{
                                        fontFamily: 'var(--font-display)', fontSize: 'clamp(15px, 2vw, 18px)', fontWeight: 600,
                                        color: 'var(--color-fg)', marginBottom: '8px', lineHeight: 1.3,
                                        display: 'flex', alignItems: 'center', gap: '8px',
                                    }}>
                                        {paper.title}
                                        <ArrowUpRight size={15} style={{ color: 'var(--color-accent)', flexShrink: 0, opacity: 0.5 }} />
                                    </h3>
                                    <p style={{ color: 'var(--color-muted)', fontSize: '13px', lineHeight: 1.6, marginBottom: '14px' }}>
                                        {paper.summary}
                                    </p>
                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                                        {paper.tags.map(tag => (
                                            <span key={tag} style={{
                                                padding: '4px 12px', borderRadius: '9999px', fontSize: '10px', fontWeight: 600,
                                                textTransform: 'uppercase', letterSpacing: '0.08em',
                                                background: 'rgba(124,108,240,0.1)', color: 'var(--color-accent)',
                                                border: '1px solid rgba(124,108,240,0.2)',
                                            }}>
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    )
}
