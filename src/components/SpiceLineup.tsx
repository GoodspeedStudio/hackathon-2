import { formatPrice, formatShu, LEVELS, type Heat } from '../heat.ts'

type Props = {
  heat: Heat
  onHeat: (heat: Heat) => void
}

export function SpiceLineup({ heat, onHeat }: Props) {
  return (
    <section className="section" id="spices">
      <p className="kicker">Descent</p>
      <h2 className="headline" style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}>
        The Seven Deadly Spices
      </h2>
      <div className="lineup">
        {LEVELS.map((item) => (
          <button
            key={item.n}
            type="button"
            className={`sin${item.n === heat ? ' is-on' : ''}`}
            aria-pressed={item.n === heat}
            onClick={() => onHeat(item.n)}
          >
            <span className="sin-n">0{item.n}</span>
            <span>
              <span className="sin-name">{item.name}</span>
              <p className="sin-line">{item.line}</p>
            </span>
            <span className="sin-meta">
              {formatPrice(item.price)} · {formatShu(item.shu)}
            </span>
          </button>
        ))}
      </div>
    </section>
  )
}
