import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const NAV_ITEMS = [
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'research', label: 'Research' },
    { id: 'contact', label: 'Contact' },
]

export default function Navigation() {
    const [active, setActive] = useState('')
    const [scrolled, setScrolled] = useState(false)
    const [mobileOpen, setMobileOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 60)
            const scrollPos = window.scrollY + window.innerHeight / 3
            for (let i = NAV_ITEMS.length - 1; i >= 0; i--) {
                const el = document.getElementById(NAV_ITEMS[i].id)
                if (el && el.offsetTop <= scrollPos) {
                    setActive(NAV_ITEMS[i].id)
                    break
                }
            }
        }
        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const handleClick = useCallback((id) => {
        setMobileOpen(false)
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }, [])

    const goTop = useCallback((e) => {
        e.preventDefault()
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }, [])

    const navPillClass = scrolled ? 'glass-strong' : 'glass'

    return (
        <>
            {/* Wrapper that spans the full viewport width and centers the pill */}
            <motion.div
                id="nav-wrapper"
                initial={{ y: -80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                role="navigation"
                aria-label="Main navigation"
            >
                {/* DESKTOP NAV */}
                <nav
                    id="desktop-nav"
                    className={navPillClass}
                >
                    <a href="#hero" onClick={goTop} className="nav-logo" aria-label="Go to top">TA</a>
                    <span className="nav-divider" aria-hidden="true" />
                    {NAV_ITEMS.map((item) => (
                        <button
                            key={item.id}
                            id={`nav-${item.id}`}
                            onClick={() => handleClick(item.id)}
                            className={`nav-link ${active === item.id ? 'active' : ''}`}
                        >
                            {item.label}
                        </button>
                    ))}
                </nav>

                {/* MOBILE NAV */}
                <nav
                    id="mobile-nav"
                    className={navPillClass}
                >
                    <a href="#hero" onClick={goTop} className="nav-logo" aria-label="Go to top">TA</a>
                    <button
                        id="mobile-menu-btn"
                        onClick={() => setMobileOpen(!mobileOpen)}
                        aria-label="Toggle menu"
                        aria-expanded={mobileOpen}
                    >
                        {mobileOpen ? <X size={18} /> : <Menu size={18} />}
                    </button>
                </nav>
            </motion.div>

            <style>{`
        #nav-wrapper {
          position: fixed;
          top: 16px;
          left: 0;
          right: 0;
          z-index: 50;
          display: flex;
          justify-content: center;
          pointer-events: none;
        }
        #desktop-nav, #mobile-nav {
          pointer-events: auto;
          display: flex;
          align-items: center;
          border-radius: 9999px;
          transition: box-shadow 0.3s ease;
        }
        #desktop-nav {
          gap: 4px;
          padding: 6px 8px;
        }
        #mobile-nav {
          gap: 8px;
          padding: 6px 6px 6px 16px;
        }
        .nav-logo {
          padding: 8px 16px;
          font-family: var(--font-display);
          font-weight: 700;
          font-size: 14px;
          letter-spacing: 0.05em;
          color: var(--color-accent);
          text-decoration: none;
        }
        .nav-divider {
          width: 1px;
          height: 20px;
          background: var(--color-border);
          margin: 0 4px;
        }
        .nav-link {
          position: relative;
          padding: 8px 16px;
          font-size: 11px;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          border: none;
          background: transparent;
          color: var(--color-muted);
          border-radius: 9999px;
          cursor: pointer;
          transition: background 0.3s ease, color 0.3s ease;
          outline: none;
        }
        .nav-link:hover { color: var(--color-fg); }
        .nav-link.active {
          background: rgba(124,108,240,0.15);
          color: var(--color-fg);
        }
        #mobile-menu-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 10px;
          border-radius: 9999px;
          background: rgba(124,108,240,0.1);
          border: 1px solid rgba(124,108,240,0.2);
          color: var(--color-fg);
          cursor: pointer;
        }
        /* Responsive toggle */
        #mobile-nav { display: none; }
        @media (max-width: 767px) {
          #desktop-nav { display: none !important; }
          #mobile-nav { display: flex !important; }
        }
      `}</style>

            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        id="mobile-menu"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        style={{
                            position: 'fixed', inset: 0, zIndex: 45,
                            background: 'rgba(6,6,8,0.97)', backdropFilter: 'blur(24px)',
                            display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '36px',
                        }}
                        role="dialog"
                        aria-label="Mobile navigation"
                    >
                        {NAV_ITEMS.map((item, i) => (
                            <motion.button
                                key={item.id}
                                id={`mobile-nav-${item.id}`}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ delay: i * 0.08 }}
                                onClick={() => handleClick(item.id)}
                                style={{
                                    fontSize: '22px', fontFamily: 'var(--font-display)', fontWeight: 600,
                                    textTransform: 'uppercase', letterSpacing: '0.15em', border: 'none',
                                    background: 'none', color: active === item.id ? 'var(--color-accent)' : 'var(--color-muted)',
                                    cursor: 'pointer', transition: 'color 0.3s ease',
                                }}>
                                {item.label}
                            </motion.button>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}
