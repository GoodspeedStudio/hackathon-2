import assert from 'node:assert/strict'
import { formatShu, heatVars, LEVELS, toHeat } from '../src/heat.ts'

assert.equal(LEVELS.length, 7)
assert.equal(LEVELS[0].name, 'Cajun Lust')
assert.equal(LEVELS[6].name, 'Ice-Cold Chilli Bomb')
assert.equal(LEVELS[6].price > LEVELS[5].price, true)

assert.equal(toHeat(0), 1)
assert.equal(toHeat(9), 7)
assert.equal(toHeat(4.4), 4)

const lust = heatVars(1)
const wrath = heatVars(6)
const pride = heatVars(7)

assert.notEqual(lust['--bg'], wrath['--bg'])
assert.equal(lust['--flame'], '0')
assert.equal(wrath['--flame'], '1')
assert.equal(pride['--flame'], '0')
assert.ok(Number(lust['--bg-flame']) < Number(wrath['--bg-flame']))
assert.equal(pride['--bg-flame'], '0')
assert.equal(pride['--frost'], '1')
assert.equal(pride['--motion'], '0')
assert.equal(formatShu(0), '0 SHU')

console.log('heat engine ok')
