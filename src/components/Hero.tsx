import type { RefObject } from 'react'
import {
  CTA,
  formatPrice,
  formatShu,
  HEADLINE,
  level,
  PRIDE_WARNING,
  type Heat,
} from '../heat.ts'
import { Burger } from './Burger.tsx'
import { SpiceSlider } from './SpiceSlider.tsx'

type Props = {
  heat: Heat
  docked: boolean
  open: boolean
  onHeat: (heat: Heat) => void
  onToggle: () => void
  slotRef: RefObject<HTMLDivElement | null>
}

export function Hero({ heat, docked, open, onHeat, onToggle, slotRef }: Props) {
  const current = level(heat)

  return (
    <section className="section hero" id="hero">
      <div>
        <p className="kicker">Ring {heat} of 7 · {current.name}</p>
        <h1 className="headline">{HEADLINE}</h1>
        <p className="lede">{current.line}</p>
        <div className="price-row">
          <span className="price">{formatPrice(current.price)}</span>
          <span className="shu">{formatShu(current.shu)}</span>
        </div>
        <a className="cta" href="#order">
          {CTA}
        </a>
        {heat === 7 ? <p className="warning">{PRIDE_WARNING}</p> : null}
      </div>
      <div>
        <Burger open={open} onToggle={onToggle} />
        <div className="slider-slot" ref={slotRef}>
          {docked ? null : <SpiceSlider heat={heat} docked={false} onHeat={onHeat} />}
        </div>
      </div>
    </section>
  )
}
