import { useRef, useState, useCallback } from 'react'
import { motion, useInView } from 'framer-motion'
import { Send, Github, Linkedin, Twitter, MessageCircle, ArrowUpRight } from 'lucide-react'

const SOCIALS = [
    { icon: Github, label: 'GitHub', href: 'https://github.com/g4rrzx' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/tegar86/' },
    { icon: Twitter, label: 'X / Twitter', href: 'https://x.com/g4rrzx' },
    { icon: MessageCircle, label: 'Telegram', href: 'https://t.me/g4rrzx' },
]

const fadeUp = (i) => ({
    hidden: { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] } },
})

const inputStyle = {
    width: '100%', padding: '14px 16px', borderRadius: '12px',
    background: 'rgba(20,20,42,0.65)', backdropFilter: 'blur(12px)',
    color: 'var(--color-fg)', fontSize: '14px',
    border: '1px solid rgba(42,42,80,0.4)',
    outline: 'none', transition: 'border-color 0.3s ease',
    fontFamily: 'var(--font-body)',
}

const labelStyle = {
    display: 'block', fontSize: '11px', fontWeight: 600,
    textTransform: 'uppercase', letterSpacing: '0.12em',
    color: 'var(--color-muted)', marginBottom: '8px',
}

export default function Contact() {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: '-60px' })
    const [submitted, setSubmitted] = useState(false)

    const handleSubmit = useCallback((e) => {
        e.preventDefault()
        setSubmitted(true)
        setTimeout(() => setSubmitted(false), 4000)
        e.target.reset()
    }, [])

    return (
        <section id="contact" ref={ref} style={{ position: 'relative', padding: '100px 0 0' }} aria-label="Contact">
            <div className="section-divider" aria-hidden="true" />
            <div className="container-main" style={{ paddingTop: '48px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '48px' }}>
                    {/* Form Column */}
                    <div>
                        <motion.span variants={fadeUp(0)} initial="hidden" animate={inView ? 'visible' : 'hidden'}
                            style={{ display: 'block', color: 'var(--color-accent)', fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '16px' }}>
                            Get in touch
                        </motion.span>
                        <motion.h2 variants={fadeUp(1)} initial="hidden" animate={inView ? 'visible' : 'hidden'}
                            style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 700, color: 'var(--color-fg)', marginBottom: '16px', lineHeight: 1.15 }}>
                            Let's build something <span className="gradient-text" style={{ display: 'block' }}>extraordinary.</span>
                        </motion.h2>
                        <motion.p variants={fadeUp(2)} initial="hidden" animate={inView ? 'visible' : 'hidden'}
                            style={{ color: 'var(--color-muted)', marginBottom: '32px', lineHeight: 1.7, maxWidth: '500px' }}>
                            Whether you have a Web3 project in mind, need smart contract development,
                            or want to collaborate on research — I'd love to hear from you.
                        </motion.p>

                        <motion.form variants={fadeUp(3)} initial="hidden" animate={inView ? 'visible' : 'hidden'}
                            onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '500px' }}
                            aria-label="Contact form">
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                                <div>
                                    <label htmlFor="contact-name" style={labelStyle}>Name</label>
                                    <input type="text" id="contact-name" name="name" required aria-required="true" placeholder="Your name" style={inputStyle}
                                        onFocus={e => e.target.style.borderColor = 'rgba(124,108,240,0.5)'}
                                        onBlur={e => e.target.style.borderColor = 'rgba(42,42,80,0.4)'} />
                                </div>
                                <div>
                                    <label htmlFor="contact-email" style={labelStyle}>Email</label>
                                    <input type="email" id="contact-email" name="email" required aria-required="true" placeholder="you@email.com" style={inputStyle}
                                        onFocus={e => e.target.style.borderColor = 'rgba(124,108,240,0.5)'}
                                        onBlur={e => e.target.style.borderColor = 'rgba(42,42,80,0.4)'} />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="contact-message" style={labelStyle}>Message</label>
                                <textarea id="contact-message" name="message" required aria-required="true" rows={5}
                                    placeholder="Tell me about your project..."
                                    style={{ ...inputStyle, resize: 'none' }}
                                    onFocus={e => e.target.style.borderColor = 'rgba(124,108,240,0.5)'}
                                    onBlur={e => e.target.style.borderColor = 'rgba(42,42,80,0.4)'} />
                            </div>
                            <button type="submit" id="contact-submit" style={{
                                display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                                padding: '14px 32px', borderRadius: '9999px', width: 'fit-content',
                                background: 'var(--color-accent)', color: '#fff',
                                fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em',
                                border: 'none', cursor: 'pointer', transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                            }}
                                onMouseEnter={e => { e.target.style.transform = 'translateY(-2px)'; e.target.style.boxShadow = '0 8px 30px rgba(124,108,240,0.35)' }}
                                onMouseLeave={e => { e.target.style.transform = 'translateY(0)'; e.target.style.boxShadow = 'none' }}
                            >
                                {submitted ? 'Message Sent!' : 'Send Message'} <Send size={14} />
                            </button>
                            {submitted && (
                                <motion.p initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
                                    style={{ color: 'var(--color-success)', fontSize: '14px', fontWeight: 500 }} aria-live="polite">
                                    Thanks for reaching out! I'll get back to you soon.
                                </motion.p>
                            )}
                        </motion.form>
                    </div>

                    {/* Info Column */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                        <motion.div variants={fadeUp(2)} initial="hidden" animate={inView ? 'visible' : 'hidden'}
                            className="glass" style={{ padding: '24px', borderRadius: '16px' }}>
                            <span style={labelStyle}>Email</span>
                            <a href="mailto:tegarandrian87az@gmail.com"
                                style={{ color: 'var(--color-fg)', fontWeight: 500, textDecoration: 'none', fontSize: '15px', transition: 'color 0.3s' }}
                                onMouseEnter={e => e.target.style.color = 'var(--color-accent)'}
                                onMouseLeave={e => e.target.style.color = 'var(--color-fg)'}>
                                tegarandrian87az@gmail.com
                            </a>
                        </motion.div>

                        <motion.div variants={fadeUp(3)} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
                            <span style={{ ...labelStyle, marginBottom: '16px' }}>Find me on</span>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                                {SOCIALS.map(social => (
                                    <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer"
                                        className="glass"
                                        style={{
                                            display: 'flex', alignItems: 'center', gap: '12px',
                                            padding: '16px', borderRadius: '12px', textDecoration: 'none',
                                            transition: 'transform 0.3s ease, border-color 0.3s ease',
                                        }}
                                        onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)' }}
                                        onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)' }}
                                        aria-label={social.label}>
                                        <social.icon size={18} style={{ color: 'var(--color-muted)', flexShrink: 0 }} />
                                        <span style={{ fontSize: '14px', fontWeight: 500, color: 'var(--color-fg)', flex: 1 }}>{social.label}</span>
                                        <ArrowUpRight size={12} style={{ color: 'rgba(122,122,158,0.3)', flexShrink: 0 }} />
                                    </a>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer style={{ marginTop: '80px', borderTop: '1px solid rgba(42,42,80,0.2)', padding: '28px 0' }} role="contentinfo">
                <div className="container-main" style={{
                    display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '12px',
                }}>
                    <p style={{ color: 'rgba(122,122,158,0.5)', fontSize: '12px' }}>
                        &copy; {new Date().getFullYear()} Tegar Andriyansyah. All rights reserved.
                    </p>
                    <p style={{ color: 'rgba(122,122,158,0.3)', fontSize: '12px' }}>
                        Crafted with care for the decentralized web.
                    </p>
                </div>
            </footer>

            <style>{`
        @media (min-width: 768px) {
          #contact .container-main > div {
            grid-template-columns: 1.3fr 1fr !important;
            gap: 64px !important;
          }
        }
        @media (max-width: 500px) {
          #contact form > div:first-child {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
        </section>
    )
}
