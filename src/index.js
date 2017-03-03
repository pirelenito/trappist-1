import React from 'react'
import { render } from 'react-dom'
import PlanetarySystem from './planetary-system'

const style = {
  background: '#10052b',
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  '-webkit-tap-highlight-color': 'rgba(0,0,0,0)'
}

render(<svg style={style} width='100%' height='100%'>
  <g transform={'translate(40, 40)'}>
    <PlanetarySystem />
  </g>
</svg>, document.getElementById('root'))
