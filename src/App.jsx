import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Web3Research from './components/Web3Research'
import Contact from './components/Contact'

export default function App() {
    return (
        <div style={{ overflowX: 'hidden', width: '100%', maxWidth: '100vw' }}>
            <div className="noise-overlay" aria-hidden="true" />
            <Navigation />
            <main style={{ overflowX: 'hidden' }}>
                <Hero />
                <About />
                <Projects />
                <Web3Research />
                <Contact />
            </main>
        </div>
    )
}
