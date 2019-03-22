import React from 'react'
import mapboxgl from 'mapbox-gl'
mapboxgl.accessToken = 'pk.eyJ1Ijoic2Fib2hpbXNlbGYiLCJhIjoiY2pzcHgxeXJjMDBpbTQ5czljNHQ4dXVzMCJ9.7KpwLwJFWkQOC_RZo9jc6g'

class Map extends React.Component {
  constructor() {
    super()
  }

  componentDidMount() {
    this.map = new mapboxgl.Map({
      container: this.mapDiv,
      style: 'mapbox://styles/mapbox/light-v10',
      zoom: 0
    })
  }

  render() {
    return(
      <div className="map" ref={el => this.mapDiv = el} />
    )
  }
}

export default Map
