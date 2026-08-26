export const LEVELS = [
  {
    n: 1,
    name: 'Cajun Lust',
    shu: 400,
    price: 8,
    line: 'A warmth you pretend not to notice.',
  },
  {
    n: 2,
    name: 'Gluttonous Chilli',
    shu: 2_000,
    price: 9,
    line: 'The one you finish and consider again.',
  },
  {
    n: 3,
    name: 'Greasy Greed',
    shu: 8_000,
    price: 11,
    line: 'More heat than you asked for. You asked.',
  },
  {
    n: 4,
    name: 'Super-Hot Sloth',
    shu: 30_000,
    price: 13,
    line: 'Slow. Late. Still here.',
  },
  {
    n: 5,
    name: 'Envious Volcano',
    shu: 100_000,
    price: 16,
    line: 'The ring your friend will not share.',
  },
  {
    n: 6,
    name: 'Wrath of Spice',
    shu: 400_000,
    price: 21,
    line: 'This one fights back.',
  },
  {
    n: 7,
    name: 'Ice-Cold Chilli Bomb',
    shu: 0,
    price: 39,
    line: 'The fire went out. Sit with it.',
  },
] as const

export type Heat = (typeof LEVELS)[number]['n']

export const CTA = 'Slay the Spice'
export const HEADLINE = 'Seven rings of Spice. One burger. You Choose.'
export const PRIDE_WARNING = 'Ice-cold. You were told.'
export const FOOD_CLAIM =
  'Chilli is toasted whole, then bloomed in beef fat. Nothing from a bottle.'

export function toHeat(n: number): Heat {
  const clamped = Math.min(7, Math.max(1, Math.round(n)))
  return clamped as Heat
}

export function level(heat: Heat) {
  return LEVELS[heat - 1]
}

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t
}

function hexToRgb(hex: string): [number, number, number] {
  const n = Number.parseInt(hex.slice(1), 16)
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255]
}

function rgbToHex(r: number, g: number, b: number) {
  return `#${[r, g, b]
    .map((x) => Math.round(x).toString(16).padStart(2, '0'))
    .join('')}`
}

function mix(a: string, b: string, t: number) {
  const A = hexToRgb(a)
  const B = hexToRgb(b)
  return rgbToHex(lerp(A[0], B[0], t), lerp(A[1], B[1], t), lerp(A[2], B[2], t))
}

export type HeatVars = Record<string, string>

const PRIDE: HeatVars = {
  '--bg': '#e8f0f3',
  '--bg-2': '#f7fbfc',
  '--fg': '#163038',
  '--muted': '#4a6670',
  '--accent': '#5a7a88',
  '--ember': '#9bb0b8',
  '--track': '#c5d4dc',
  '--flame': '0',
  '--bg-flame': '0',
  '--shimmer': '0',
  '--motion': '0',
  '--heat': '7',
  '--t': '1',
  '--frost': '1',
  '--displace': '0',
}

export function heatVars(heat: Heat): HeatVars {
  if (heat === 7) return PRIDE

  const t = (heat - 1) / 5
  const flame = heat >= 5 ? String((heat - 4) / 2) : '0'
  const shimmer = heat >= 3 ? String((heat - 2) / 4) : '0'

  return {
    '--bg': mix('#5c3a2e', '#3a1410', t),
    '--bg-2': mix('#6e4638', '#1f0a08', t),
    '--fg': mix('#f3e6d4', '#ffe8c8', t),
    '--muted': mix('#c4a892', '#e8b089', t),
    '--accent': mix('#c45a38', '#ff5a1f', t),
    '--ember': mix('#a84828', '#ff8a3a', t),
    '--track': mix('#8a4a32', '#ff6a28', t),
    '--flame': flame,
    '--bg-flame': String(0.12 + t * 0.88),
    '--shimmer': shimmer,
    '--motion': String(t),
    '--heat': String(heat),
    '--t': String(t),
    '--frost': '0',
    '--displace': String(heat >= 3 ? 4 + (heat - 3) * 3 : 0),
  }
}

export function formatPrice(n: number) {
  return new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'GBP',
    maximumFractionDigits: 0,
  }).format(n)
}

export function formatShu(n: number) {
  if (n === 0) return '0 SHU'
  return `${new Intl.NumberFormat('en-GB').format(n)} SHU`
}
