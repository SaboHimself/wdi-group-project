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
      spaces: [],
      markers: [],
      findSidebarDiv: {}
    }

    this.listDivs = {}
    this.myClass = 'mapboxgl-marker'
    this.handleClick = this.handleClick.bind(this)
    this.handleClickSidebar = this.handleClickSidebar.bind(this)
  }

  componentDidMount() {
    this.map()
    this.getDataToPopulate()
    this.setCenterMarkers()
  }
  componentDidUpdate(){
    this.setMarkers()
  }
  handleClick(e){
    // console.log(e)
    this.divElements()
    this.gElements()
    if(e.originalEvent.path[4].classList.contains(this.myClass))
      this.map.flyTo({center: [e.lngLat.lng, e.lngLat.lat]})
    if(!e.originalEvent.path) return null
    e.originalEvent.path[2].childNodes[1].setAttribute('fill', '#ECA400')
    const id = e.originalEvent.path[4].getAttribute('mId')
    this.scrollTo(id)
  }

  handleClickSidebar(e){
    console.log(e.target)
    e.stopPropagation()
    // console.log(this.state.findSidebarDiv.listDiv)
    {!e.target.classList.contains('button') && this.state.findSidebarDiv.listDiv && this.state.findSidebarDiv.listDiv.classList.remove('active')}

    if(e.target.classList.contains('button')) return null
    else {
      // this.listDivs = this.listDivs.bind(this)
      e.target.classList.add('active')
      this.removeClass()
    }
  }

  removeClass(){
    this.setState({...this.state.findSidebarDiv, findSidebarDiv: Object.values(this.listDivs).find(div => div.listDiv.classList.contains('active'))})
  }

  scrollTo(id) {
    {this.state.findSidebarDiv.listDiv && this.state.findSidebarDiv.listDiv.classList.remove('active')}

    if(!this.listDivs[id]) return null
    else {
      this.listDivs[id].listDiv.scrollIntoView({behavior: 'smooth'})
      this.listDivs[id].listDiv.classList.add('active')
    }
    this.removeClass()
  }

  gElements(){
    const markerColor = document.querySelectorAll('#main > div.map.mapboxgl-map > div.mapboxgl-canvas-container.mapboxgl-interactive.mapboxgl-touch-drag-pan.mapboxgl-touch-zoom-rotate > div > svg > g > g:nth-child(2)')
    const markerColorArray = [].slice.call(markerColor)
    markerColorArray.find(marker => marker.setAttribute('fill', '#001D4A'))
  }
  divElements(){
    const divMongooseId = document.querySelectorAll('#main > div.map.mapboxgl-map > div.mapboxgl-canvas-container.mapboxgl-interactive.mapboxgl-touch-drag-pan.mapboxgl-touch-zoom-rotate > div')
    const divMongooseIdArray = [].slice.call(divMongooseId)
    divMongooseIdArray.map((div, i) => div.setAttribute('mId', `${this.state.lnglat[i]._id}`))
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
    this.map.on('click', this.handleClick)
    geocoder.on('result', e => {
      this.setState({ center: e.center })
    })
  }
  setMarkers(){
    if(!this.state.lnglat) return null
    if(!this.markers) {
      this.markers = this.state.lnglat.map(coordinates => {
        this.marker = new mapboxgl.Marker()
          .setLngLat({ lng: coordinates.geometry.coordinates[0], lat: coordinates.geometry.coordinates[1]})
          .addTo(this.map)
        return this.marker
      })
    } else return null
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
      <div id="main" className="map-wrapper">
        <div
          className='sidebar'
          onClick={this.handleClickSidebar}
        >
          <div className='heading'>
            {spaces && spaces.map((space, id) => (
              <SideBarItem
                key={id}
                space={space}
                lnglat={this.state.lnglat}
                map={this.map}
                ref={el => (this.listDivs[space._id] = el)}
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
