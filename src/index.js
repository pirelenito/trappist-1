import React from 'react'
import { render } from 'react-dom'
import Universe from './universe'
import './index.css'

const headingStyle = {
  position: 'absolute',
  top: 10,
  left: 10
}

render(<div>
  <Universe />
  <div style={headingStyle}>TRAPPIST-1</div>
</div>, document.getElementById('root'))
