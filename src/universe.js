import React from 'react'
import {Motion, spring} from 'react-motion'
import PlanetarySystem from './planetary-system'

const style = {
  background: '#0a2253',
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0
}

export default React.createClass({
  getInitialState () {
    return {
      x: 0,
      y: 0,
      scale: 300,
      width: window.innerWidth,
      height: window.innerHeight,
      now: days(Date.now())
    }
  },

  componentDidMount () {
    window.addEventListener('resize', () => this.setState({ width: window.innerWidth, height: window.innerHeight }))

    const tick = () => {
      this.setState({ now: days(Date.now()) })
      window.requestAnimationFrame(tick)
    }

    window.requestAnimationFrame(tick)
  },

  move (e) {
    e.preventDefault()
    e.stopPropagation()

    this.setState({
      x: this.state.x + this.state.scale * (e.pageX - this.state.width / 2),
      y: this.state.y + this.state.scale * (e.pageY - this.state.height / 2)
    })
  },

  scale (e) {
    e.preventDefault()
    e.stopPropagation()

    const newScale = this.state.scale - e.deltaY * 0.1

    if (newScale < 0.1 || newScale > 300) { return }

    this.setState({ scale: newScale })
  },

  render () {
    const { x, y, scale, width, height, now } = this.state

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
                <PlanetarySystem now={now} />
              </g>
            </svg>
          )
        }
      </Motion>
    )
  }
})

const days = (now) => now / 1000 / 60 / 60 / 24
