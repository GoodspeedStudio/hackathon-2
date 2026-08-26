import { LEVELS, toHeat, type Heat } from '../heat.ts'

type Props = {
  heat: Heat
  docked: boolean
  onHeat: (heat: Heat) => void
}

export function SpiceSlider({ heat, docked, onHeat }: Props) {
  const current = LEVELS[heat - 1]

  return (
    <div className={`slider-bar${docked ? ' is-docked' : ''}`}>
      <div className="slider-inner">
        <div className="slider-label">
          <span>Seven Rings of Spice</span>
          <span>
            Ring {heat} · {current.name}
          </span>
        </div>
        <input
          className="range"
          type="range"
          name="spice-ring"
          min={1}
          max={7}
          step={1}
          value={heat}
          aria-label="Seven Rings of Spice"
          aria-valuemin={1}
          aria-valuemax={7}
          aria-valuenow={heat}
          aria-valuetext={`Ring ${heat}, ${current.name}`}
          onChange={(event) => onHeat(toHeat(Number(event.target.value)))}
        />
        <div className="ticks">
          {LEVELS.map((item) => (
            <button
              key={item.n}
              type="button"
              className={`tick${item.n === heat ? ' is-on' : ''}`}
              aria-pressed={item.n === heat}
              onClick={() => onHeat(item.n)}
            >
              {item.n}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
