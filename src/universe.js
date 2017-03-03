import React from 'react'
import {Motion, spring} from 'react-motion'
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

export default React.createClass({
  getInitialState () {
    return {
      x: 0,
      y: 0,
      scale: 4,
      width: window.innerWidth,
      height: window.innerHeight
    }
  },

  componentDidMount () {
    window.addEventListener('resize', () => this.setState({ width: window.innerWidth, height: window.innerHeight }))
  },

  move (e) {
    this.setState({
      x: this.state.x + this.state.scale * (e.pageX - this.state.width / 2),
      y: this.state.y + this.state.scale * (e.pageY - this.state.height / 2)
    })
  },

  scale (e) {
    e.preventDefault()
    e.stopPropagation()

    const newScale = this.state.scale - e.deltaY * 0.001

    if (newScale < 0.1 || newScale > 40) { return }

    this.setState({ scale: newScale })
  },

  render () {
    const { x, y, scale, width, height } = this.state

    return (
      <Motion
        defaultStyle={{
          x: x,
          y: y
        }}
        style={{
          x: spring(x),
          y: spring(y)
        }}
        >
        {
          (motion) => (
            <svg
              viewBox={`${motion.x - (width * scale) / 2} ${motion.y - (height * scale) / 2} ${width * scale} ${height * scale}`}
              onClick={this.move}
              onWheel={this.scale}
              style={style}
              width={width}
              height={height} >
              <g transform={'translate(0, 0)'}>
                <PlanetarySystem />
              </g>
            </svg>
          )
        }
      </Motion>
    )
  }
})
