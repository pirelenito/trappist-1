import React from 'react'

const EARTH_RADIUS = 6371 // km
const SUN_RADIUS = (109 / 2) * EARTH_RADIUS

const SCALE = 0.02

const star = {
  radius: SUN_RADIUS * 0.11
}

const planets = [
  { color: '#fa992e', name: 'b', radius: 1.086 * EARTH_RADIUS, distance: 1.66 * 1000000, orbitalPeriod: 1.51087081 },
  { color: '#aa6628', name: 'c', radius: 1.056 * EARTH_RADIUS, distance: 2.28 * 1000000, orbitalPeriod: 2.4218233 },
  { color: '#8b6340', name: 'd', radius: 0.772 * EARTH_RADIUS, distance: 3.14 * 1000000, orbitalPeriod: 4.049610 },
  { color: '#8b7c7e', name: 'e', radius: 0.918 * EARTH_RADIUS, distance: 4.19 * 1000000, orbitalPeriod: 6.099615 },
  { color: '#4c4349', name: 'f', radius: 1.045 * EARTH_RADIUS, distance: 5.54 * 1000000, orbitalPeriod: 9.206690 },
  { color: '#a09f63', name: 'g', radius: 1.127 * EARTH_RADIUS, distance: 6.73 * 1000000, orbitalPeriod: 12.35294 },
  { color: '#ffd9a4', name: 'h', radius: 0.76 * EARTH_RADIUS, distance: 8.97 * 1000000, orbitalPeriod: 20 }
]

export default ({ now }) => {
  return <g>
    <Star star={star} />
    <g>
      {
        planets.map((planet) => <Orbit key={planet.name} planet={planet} now={now} />)
      }
    </g>
  </g>
}

function Star ({ star }) {
  return <circle
    r={star.radius * SCALE}
    fill='#e7561f'
    strokeWidth='0'
  />
}

function Orbit ({ planet, now }) {
  const distance = planet.distance * SCALE
  const radius = planet.radius * SCALE
  const orbit = (1 / planet.orbitalPeriod) * now

  return <g
    style={{transform: `rotate(${orbit}rad)`}}>
    <circle
      r={distance}
      fill='none'
      opacity={0.5}
      stroke='white'
      strokeWidth='1'
    />

    <g transform={`translate(${distance}, 0)`}>
      <circle r={radius} fill={planet.color} />
    </g>
  </g>
}
