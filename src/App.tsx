import { useEffect, useRef, useState, type CSSProperties } from 'react'
import { FindUs } from './components/FindUs.tsx'
import { Hero } from './components/Hero.tsx'
import { Order } from './components/Order.tsx'
import { SpiceLineup } from './components/SpiceLineup.tsx'
import { SpiceSlider } from './components/SpiceSlider.tsx'
import { WhatsInIt } from './components/WhatsInIt.tsx'
import { heatVars, level, type Heat } from './heat.ts'

export default function App() {
  const [heat, setHeat] = useState<Heat>(1)
  const [open, setOpen] = useState(false)
  const [docked, setDocked] = useState(false)
  const [reduceMotion, setReduceMotion] = useState(false)
  const slotRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    const sync = () => setReduceMotion(media.matches)
    sync()
    media.addEventListener('change', sync)
    return () => media.removeEventListener('change', sync)
  }, [])

  useEffect(() => {
    const slot = slotRef.current
    if (!slot) return
    let seen = false
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) seen = true
        setDocked(seen && !entry.isIntersecting)
      },
      { threshold: 0 },
    )
    observer.observe(slot)
    return () => observer.disconnect()
  }, [])

  const vars = heatVars(heat)

  return (
    <div
      className={`page hatch-shift${heat === 7 ? ' is-pride' : ''}${docked ? ' is-docked' : ''}`}
      style={vars as CSSProperties}
    >
      <svg width="0" height="0" aria-hidden="true" style={{ position: 'absolute' }}>
        <filter id="heat-shimmer">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.018"
            numOctaves="2"
            result="noise"
          >
            {reduceMotion ? null : (
              <animate
                attributeName="baseFrequency"
                values="0.016;0.022;0.016"
                dur="3s"
                repeatCount="indefinite"
              />
            )}
          </feTurbulence>
          <feDisplacementMap
            in="SourceGraphic"
            in2="noise"
            scale={reduceMotion ? 0 : Number(vars['--displace'])}
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </svg>
      <a className="skip" href="#hero">
        Skip to burger
      </a>
      <div className="bg-fire" aria-hidden="true">
        <span className="bg-glow" />
        <span className="bg-lick" />
        <span className="bg-lick" />
        <span className="bg-lick" />
        <span className="bg-lick" />
        <span className="bg-lick" />
        <span className="bg-lick" />
      </div>
      <div className="sr-only" aria-live="polite">
        Ring {heat}, {level(heat).name}
      </div>
      <header className="site-header">
        <a className="wordmark" href="#hero" translate="no">
          Dante's Inferno
        </a>
        <span className="nav-meta">Est. ring one</span>
      </header>
      <main>
        <Hero
          heat={heat}
          docked={docked}
          open={open}
          onHeat={setHeat}
          onToggle={() => setOpen((value) => !value)}
          slotRef={slotRef}
        />
        <SpiceLineup heat={heat} onHeat={setHeat} />
        <WhatsInIt />
        <FindUs />
        <Order heat={heat} />
      </main>
      <footer className="site-footer">
        <span className="wordmark" translate="no">
          Dante's Inferno
        </span>
        <span className="nav-meta">No pitchforks. No delivery.</span>
      </footer>
      {docked ? <SpiceSlider heat={heat} docked onHeat={setHeat} /> : null}
    </div>
  )
}
