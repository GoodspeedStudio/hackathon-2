import { CTA, formatPrice, level, type Heat } from '../heat.ts'

type Props = {
  heat: Heat
}

export function Order({ heat }: Props) {
  const current = level(heat)

  return (
    <section className="section" id="order">
      <p className="kicker">Order</p>
      <h2 className="headline" style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}>
        Slay the Spice
      </h2>
      <p className="lede">
        {current.name} is {formatPrice(current.price)}. Kitchen dies at midnight.
      </p>
      <a className="cta" href="#find">
        {CTA}
      </a>
      <p className="hours">Noon–late · Seven days · Card or cash</p>
    </section>
  )
}
