import React from 'react'

const EARTH_RADIUS = 6371 // km
const SUN_RADIUS = (109 / 2) * EARTH_RADIUS

const SCALE = 0.002

const star = {
  radius: SUN_RADIUS * 0.11
}

const planets = [
  { name: 'b', radius: 1.086 * EARTH_RADIUS, distance: 1.66 * 1000000 },
  { name: 'c', radius: 1.056 * EARTH_RADIUS, distance: 2.28 * 1000000 },
  { name: 'd', radius: 0.772 * EARTH_RADIUS, distance: 3.14 * 1000000 },
  { name: 'e', radius: 0.918 * EARTH_RADIUS, distance: 4.19 * 1000000 },
  { name: 'f', radius: 1.045 * EARTH_RADIUS, distance: 5.54 * 1000000 },
  { name: 'g', radius: 1.127 * EARTH_RADIUS, distance: 6.73 * 1000000 }
]

export default () => {
  return <g>
    <Star star={star} />
    {
      planets.map((planet) => <Orbit planet={planet} />)
    }
  </g>
}

function Star ({ star }) {
  return <circle
    r={star.radius * SCALE}
    fill='#062a67'
    strokeWidth='0'
  />
}

function Orbit ({ planet }) {
  const distance = planet.distance * SCALE
  const radius = planet.radius * SCALE

  return <g
    style={{transform: `rotate(${0}rad)`}}>
    <circle
      r={distance}
      fill='none'
      opacity={0.3}
      stroke='#97005d'
      strokeWidth='1'
    />

    <g transform={`translate(${distance}, 0)`}>
      <circle r={radius} fill='#3fb9dd' />
    </g>
  </g>
}
