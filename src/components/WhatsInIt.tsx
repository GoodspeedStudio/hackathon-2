import { FOOD_CLAIM } from '../heat.ts'

export function WhatsInIt() {
  return (
    <section className="section" id="inside">
      <p className="kicker">What's in it</p>
      <h2 className="headline" style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}>
        Our Burgers are Devilishly Good
      </h2>
      <p className="claim">{FOOD_CLAIM}</p>
    </section>
  )
}
