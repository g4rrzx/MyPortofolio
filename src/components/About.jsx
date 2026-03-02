import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { MapPin, GraduationCap, Zap } from 'lucide-react'

const SKILLS = [
    { name: 'Solidity', hot: true },
    { name: 'React' },
    { name: 'Python' },
    { name: 'Smart Contracts', hot: true },
    { name: 'TypeScript' },
    { name: 'Rust' },
    { name: 'Node.js' },
    { name: 'Web3.js / Ethers.js', hot: true },
    { name: 'UI/UX Design' },
    { name: 'Next.js' },
    { name: 'GraphQL' },
    { name: 'Hardhat' },
    { name: 'IPFS', hot: true },
    { name: 'Foundry' },
    { name: 'TailwindCSS' },
    { name: 'Docker' },
]

const INFO = [
    { icon: MapPin, label: 'Indonesia', sub: 'Remote-first' },
    { icon: Zap, label: 'Available', sub: 'Open to work' },
    { icon: GraduationCap, label: 'CS Background', sub: 'Self-taught & academic' },
]

const fadeUp = (i) => ({
    hidden: { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] } },
})

export default function About() {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: '-80px' })

    return (
        <section id="about" ref={ref} style={{ position: 'relative', padding: '100px 0' }} aria-label="About me">
            <div className="section-divider" aria-hidden="true" />
            <div className="container-main" style={{ paddingTop: '48px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '48px' }}>
                    {/* Bio Column */}
                    <div>
                        <motion.span variants={fadeUp(0)} initial="hidden" animate={inView ? 'visible' : 'hidden'}
                            style={{ display: 'block', color: 'var(--color-accent)', fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '16px' }}>
                            About
                        </motion.span>
                        <motion.h2 variants={fadeUp(1)} initial="hidden" animate={inView ? 'visible' : 'hidden'}
                            style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 700, color: 'var(--color-fg)', marginBottom: '20px', lineHeight: 1.15 }}>
                            Not just another <span className="gradient-text" style={{ display: 'block' }}>developer.</span>
                        </motion.h2>
                        <motion.p variants={fadeUp(2)} initial="hidden" animate={inView ? 'visible' : 'hidden'}
                            style={{ color: 'var(--color-muted)', lineHeight: 1.7, marginBottom: '28px', maxWidth: '560px' }}>
                            I am especially interested in Web3, decentralized systems,
                            and how blockchain can create more open and efficient digital ecosystems.
                            I like exploring new tools, experimenting with protocols,
                            and continuously improving my skills to stay aligned with the fast-moving crypto and tech space.
                        </motion.p>
                        <motion.div variants={fadeUp(3)} initial="hidden" animate={inView ? 'visible' : 'hidden'}
                            style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                            {INFO.map(item => (
                                <div key={item.label} className="glass" style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 16px', borderRadius: '12px' }}>
                                    <item.icon size={16} style={{ color: 'var(--color-accent)', flexShrink: 0 }} />
                                    <div>
                                        <div style={{ fontSize: '14px', fontWeight: 500, color: 'var(--color-fg)' }}>{item.label}</div>
                                        <div style={{ fontSize: '12px', color: 'var(--color-muted)' }}>{item.sub}</div>
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Skills Column */}
                    <div>
                        <motion.span variants={fadeUp(2)} initial="hidden" animate={inView ? 'visible' : 'hidden'}
                            style={{ display: 'block', color: 'var(--color-accent)', fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '20px' }}>
                            Tech Stack
                        </motion.span>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                            {SKILLS.map((skill, i) => (
                                <motion.span
                                    key={skill.name}
                                    variants={fadeUp(3 + i * 0.15)}
                                    initial="hidden"
                                    animate={inView ? 'visible' : 'hidden'}
                                    className={skill.hot ? 'glass-strong' : 'glass'}
                                    style={{
                                        padding: '8px 16px', borderRadius: '8px',
                                        fontSize: '13px', fontWeight: 500,
                                        color: skill.hot ? 'var(--color-accent)' : 'var(--color-fg)',
                                        border: skill.hot ? '1px solid rgba(124,108,240,0.3)' : 'none',
                                        cursor: 'default',
                                        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                    }}
                                    onMouseEnter={e => { e.target.style.transform = 'translateY(-2px)' }}
                                    onMouseLeave={e => { e.target.style.transform = 'translateY(0)' }}
                                >
                                    {skill.name}
                                </motion.span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
        @media (min-width: 768px) {
          #about .container-main > div {
            grid-template-columns: 1fr 1.3fr !important;
            gap: 64px !important;
          }
        }
      `}</style>
        </section>
    )
}
