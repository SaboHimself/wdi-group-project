import React from 'react'
import mapboxgl from 'mapbox-gl'
import axios from 'axios'
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder'
mapboxgl.accessToken = 'pk.eyJ1Ijoic2Fib2hpbXNlbGYiLCJhIjoiY2pzcHgxeXJjMDBpbTQ5czljNHQ4dXVzMCJ9.7KpwLwJFWkQOC_RZo9jc6g'

import SideBarItem from './map/mapSideBar'

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
      markers: [],
    }


  }

  componentDidMount() {
    this.map()
    this.getDataToPopulate()
    this.setCenterMarkers()
  }

  componentDidUpdate(){
    this.setMarkers()
  }

  map(){
    const geocoder = new MapboxGeocoder({
      accessToken: mapboxgl.accessToken,
      countries: 'gb',
      bbox: [-0.3593290040392958,51.34340087048329,0.13880151602074875,51.66165693410957]
    })
    this.map = new mapboxgl.Map({
      container: this.mapDiv,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: this.state.center,
      zoom: 15,
      maxBounds: bounds
    })
      .addControl(geocoder)
    geocoder.on('result', e => {
      console.log(e)
      this.setState({ center: e.center })
    })
  }

  setMarkers(){
    if(!this.state.lnglat) return null
    this.state.lnglat.map(coordinates => {
      return new mapboxgl.Marker()
        .setLngLat({ lng: coordinates.geometry.coordinates[0], lat: coordinates.geometry.coordinates[1]})
        .addTo(this.map)
    })
  }

  setCenterMarkers(){
    if(!this.props.location.state) return null
    this.map.jumpTo({center: [this.props.location.state.Longitude, this.props.location.state.Latitude]})
    return new mapboxgl.Marker()
      .setLngLat([this.props.location.state.Longitude, this.props.location.state.Latitude])
      .addTo(this.map)
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
            {spaces && spaces.map((space, id) => (
              <SideBarItem
                className="listings"
                key={id}
                space={space}
                lnglat={this.state.lnglat}
                map={this.map}
              />
            ))}
          </div>
        </div>
        <div className="map" ref={el => this.mapDiv = el}/>
      </div>
    )
  }
}

export default Map
