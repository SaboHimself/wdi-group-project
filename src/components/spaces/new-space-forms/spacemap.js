import React from 'react'
import mapboxgl from 'mapbox-gl'
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder'
mapboxgl.accessToken = 'pk.eyJ1Ijoic2Fib2hpbXNlbGYiLCJhIjoiY2pzcHgxeXJjMDBpbTQ5czljNHQ4dXVzMCJ9.7KpwLwJFWkQOC_RZo9jc6g'

const bounds = [[-0.483702, 51.334679], [0.190262, 51.655070]]

const geocoder = new MapboxGeocoder({
  accessToken: mapboxgl.accessToken
})

class Map2 extends React.Component {
  constructor() {
    super()

    this.state = {
      center: {
        lat: 51.507351,
        lng: -0.127758
      }
    }
  }

  componentDidMount() {
    this.map()
  }

  map(){
    this.map = new mapboxgl.Map({
      container: this.mapDiv,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: this.state.center,
      zoom: 15,
      maxBounds: bounds
    })
      .addControl(geocoder)

    geocoder.on('result', e => {
      this.setState({...this.state, coordinates: e.result.geometry.coordinates}, () => {
        this.props.geometryChange(this.state.coordinates)
      })
    })
  }

  render(){
    return(
      <div className="map2" ref={el => this.mapDiv = el} />
    )
  }
}

export default Map2
