import React from 'react'
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

    if (newScale < 0.1 || newScale > 20) { return }

    this.setState({ scale: newScale })
  },

  render () {
    const { x, y, scale, width, height } = this.state
    const viewBox = `${x - (width * scale) / 2} ${y - (height * scale) / 2} ${width * scale} ${height * scale}`

    return (
      <svg onClick={this.move} onWheel={this.scale} viewBox={viewBox} style={style} width={width} height={height} >
        <g transform={'translate(0, 0)'}>
          <PlanetarySystem />
        </g>
      </svg>
    )
  }
})
