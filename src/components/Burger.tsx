const LAYERS = [
  { label: 'Seeded crown', top: '8%' },
  { label: 'Bloomed chilli', top: '22%' },
  { label: 'Leaf lettuce', top: '34%' },
  { label: 'Tomato', top: '46%' },
  { label: 'Clothbound cheddar', top: '56%' },
  { label: 'Charred patty', top: '68%' },
  { label: 'Heel bun', top: '82%' },
] as const

type Props = {
  open: boolean
  onToggle: () => void
}

export function Burger({ open, onToggle }: Props) {
  return (
    <div className={`stage${open ? ' is-open' : ''}`}>
      <div className="flame-wrap" aria-hidden="true">
        <span className="lick" />
        <span className="lick" />
        <span className="lick" />
      </div>
      <button
        type="button"
        className={`burger burger-photo-wrap${open ? ' is-open' : ''}`}
        aria-expanded={open}
        aria-controls="burger-layers"
        onClick={onToggle}
      >
        <span className="sr-only">
          {open ? 'Reassemble the burger' : 'Separate the burger into layers'}
        </span>
        <span id="burger-layers" className="photo-stack">
          <img
            className={`burger-photo${open ? '' : ' is-on'}`}
            src="/assets/burger-assembled.png"
            width={1024}
            height={1024}
            alt="Dante's Inferno cheeseburger"
          />
          <img
            className={`burger-photo exploded${open ? ' is-on' : ''}`}
            src="/assets/burger-exploded.png"
            width={1024}
            height={1536}
            alt=""
          />
          {open
            ? LAYERS.map((layer) => (
                <span key={layer.label} className="photo-label" style={{ top: layer.top }}>
                  {layer.label}
                </span>
              ))
            : null}
        </span>
        <span className="frost" aria-hidden="true" />
      </button>
      <p className="hint">{open ? 'Click to close it' : 'Click the burger to inspect'}</p>
    </div>
  )
}
