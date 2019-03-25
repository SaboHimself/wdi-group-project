import React from 'react'
import mapboxgl from 'mapbox-gl'
import axios from 'axios'
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder'
mapboxgl.accessToken = 'pk.eyJ1Ijoic2Fib2hpbXNlbGYiLCJhIjoiY2pzcHgxeXJjMDBpbTQ5czljNHQ4dXVzMCJ9.7KpwLwJFWkQOC_RZo9jc6g'
import { Link } from 'react-router-dom'

import MapModal from './map/mapModal'

const bounds = [[-0.483702, 51.334679], [0.190262, 51.655070]] // Restricts map bounds to London

class Map extends React.Component {
  constructor() {
    super()

    this.state = {
      center: {
        lat: 51.507351,
        lng: -0.127758
      },
      data: { geocoder: '' },
      spaces: [],
      markers: []
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange({ target }) {
    const data = {...this.state.data, geocoder: target.value }
    this.setState({ data })
  }

  componentDidMount() {
    this.map()
    this.getValue()
    this.getDataToPopulate()
  }

  componentDidUpdate(){
    this.setMarkers()
    if(this.state.data.geocoder === '' || this.state.data.geocoder.length < 10) return null
    this.getLocation()
  }

  map(){
    this.map = new mapboxgl.Map({
      container: this.mapDiv,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: this.state.center,
      zoom: 15,
      maxBounds: bounds
    })
      .addControl(new MapboxGeocoder({
        accessToken: mapboxgl.accessToken
      }))
  }

  setMarkers(){
    if(!this.state.lnglat) return null
    this.state.lnglat.map(coordinates => {
      // console.log(coordinates.geometry)
      return new mapboxgl.Marker()
        .setLngLat({ lng: coordinates.geometry.coordinates[0], lat: coordinates.geometry.coordinates[1]})
        .addTo(this.map)
    })
  }

  getLocation(){
    axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${this.state.data.geocoder}.json?access_token=${mapboxgl.accessToken}`)
      .then(res => this.setState({center: res.data.features[0].center}))
  }

  getValue(){
    const searchBox = document.querySelector('#root > div > div > div > div.mapboxgl-control-container > div.mapboxgl-ctrl-top-right > div > input[type="text"]')
    searchBox.value = this.state.data.geocoder
    searchBox.addEventListener('change', this.handleChange)
  }

  getDataToPopulate(){
    axios.get('/api/spaces')
      .then(res => this.setState({lnglat: res.data}))
      .then(() => this.state.lnglat.map(data => {
        let empty = {}
        return axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${data.geometry.coordinates[0]},${data.geometry.coordinates[1]}.json?access_token=${mapboxgl.accessToken}`)
          .then(res => empty = {...data, geometry: res.data.features[0].place_name})
      }))
      .then(res => Promise.all(res))
      .then(res => this.setState({spaces: res}))
  }

  // getNearDataToPopulate(){
  //   axios.get(`/api/nearspaces?lng=${this.state.center.lng}&lat=${this.state.center.lat}`)
  //     .then(res => console.log(res))
  // }

  render() {
    const { spaces } = this.state
    return(
      <div id="main">
        <div
          className='sidebar pad2'
          ref={el => this.sidebar = el}
        >
          <div className='heading'>
            <h1>Our locations</h1>
          </div>
          {spaces && spaces.map((space, id) => (
            <div key={id} className='listings'>
              <div>{space.geometry}</div>
              <div>{space.type}</div>
              <div>{space.suitability}</div>
              <div>£{space.price}</div>
              <MapModal
                space={space}
              />
            </div>
          ))}
        </div>
        <div className="map" ref={el => this.mapDiv = el}/>
      </div>
    )
  }
}

export default Map
