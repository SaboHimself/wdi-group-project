import React from 'react'
import mapboxgl from 'mapbox-gl'
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder'
mapboxgl.accessToken = 'pk.eyJ1Ijoic2Fib2hpbXNlbGYiLCJhIjoiY2pzcHgxeXJjMDBpbTQ5czljNHQ4dXVzMCJ9.7KpwLwJFWkQOC_RZo9jc6g'

const geocoder = new MapboxGeocoder({
  accessToken: mapboxgl.accessToken
})

const bounds = [[-0.483702, 51.334679], [0.190262, 51.655070]] // Restricts map bounds to London

// GET LOCATION DATA

class Step1 extends React.Component {
  constructor() {
    super()

    this.state = {
      center: {
        lat: 51.507351,
        lng: -0.127758
      }
    }
  }

  render() {
    if(this.props.data.currentStep !== 1) {
      return null
    }
    return(
      <div>

      </div>
    )
  }
}

export default Step1
