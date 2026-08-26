const STORES = [
  { id: 'bankside', name: 'Bankside', x: 132, y: 168, r: 1 },
  { id: 'ancoats', name: 'Ancoats', x: 210, y: 118, r: 3 },
  { id: 'finnieston', name: 'Finnieston', x: 92, y: 96, r: 4 },
  { id: 'stokes', name: 'Stokes Croft', x: 248, y: 188, r: 5 },
  { id: 'headingley', name: 'Headingley', x: 168, y: 64, r: 6 },
] as const

export function FindUs() {
  return (
    <section className="section" id="find">
      <p className="kicker">Find us</p>
      <h2 className="headline" style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}>
        Five kitchens. No delivery.
      </h2>
      <div className="map-wrap">
        <svg className="map" viewBox="0 0 320 240" role="img" aria-labelledby="map-title">
          <title id="map-title">Stylised map of Dante's Inferno kitchens</title>
          <rect width="320" height="240" fill="transparent" />
          <ellipse cx="160" cy="128" rx="138" ry="86" fill="none" stroke="currentColor" strokeWidth="0.8" opacity="0.35" />
          <ellipse cx="160" cy="128" rx="102" ry="62" fill="none" stroke="currentColor" strokeWidth="0.8" opacity="0.45" />
          <ellipse cx="160" cy="128" rx="64" ry="38" fill="none" stroke="currentColor" strokeWidth="0.8" opacity="0.6" />
          <path
            d="M12 188 C 60 150, 120 210, 168 170 S 260 120, 308 148"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.4"
            opacity="0.4"
          />
          <path
            d="M24 70 C 90 40, 150 90, 220 52 S 290 80, 310 40"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            opacity="0.28"
          />
          {STORES.map((store) => (
            <g key={store.id} className="pin" tabIndex={0} role="img" aria-label={`${store.name}, ring ${store.r}`}>
              <circle className="pin-dot" cx={store.x} cy={store.y} r="6" fill="var(--accent)" />
              <circle cx={store.x} cy={store.y} r="11" fill="none" stroke="var(--accent)" strokeWidth="1" />
              <text className="pin-label" x={store.x + 16} y={store.y + 4}>
                {store.name}
              </text>
            </g>
          ))}
        </svg>
      </div>
    </section>
  )
}
