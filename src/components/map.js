import React from 'react'
import mapboxgl from 'mapbox-gl'
import axios from 'axios'
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder'
mapboxgl.accessToken = 'pk.eyJ1Ijoic2Fib2hpbXNlbGYiLCJhIjoiY2pzcHgxeXJjMDBpbTQ5czljNHQ4dXVzMCJ9.7KpwLwJFWkQOC_RZo9jc6g'

class Map extends React.Component {
  constructor() {
    super()

    this.state = { data: { geocoder: '' } }

    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    this.map = new mapboxgl.Map({
      container: this.mapDiv,
      style: 'mapbox://styles/mapbox/streets-v11',
      zoom: 0
    })
      .addControl(new MapboxGeocoder({
        accessToken: mapboxgl.accessToken
      }))
    this.getValue()
  }

  handleChange({ target }) {
    const data = {...this.state.data, geocoder: target.value }
    this.setState({ data }, console.log(this.state.data))
  }

  componentDidUpdate(){
    if(this.state.data.geocoder === '' || this.state.data.geocoder.length < 10) return null
    this.getLocation()
  }

  getLocation(){
    axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${this.state.data.geocoder}.json?access_token=${mapboxgl.accessToken}`)
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }

  getValue(){
    const searchBox = document.querySelector('#root > div > div > div > div.mapboxgl-control-container > div.mapboxgl-ctrl-top-right > div > input[type="text"]')
    searchBox.value = this.state.data.geocoder
    searchBox.addEventListener('change', this.handleChange)
  }

  render() {
    return(
      <div>
        <div className="map" ref={el => this.mapDiv = el}/>
      </div>
    )
  }
}

export default Map
