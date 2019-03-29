import React from 'react'
import axios from 'axios'

class SpaceRepeatedField extends React.Component{
  constructor() {
    super()

    this.state = {}
  }

  componentDidMount() {
    axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${this.props.space.geometry.coordinates[0]},${this.props.space.geometry.coordinates[1]}.json?access_token=pk.eyJ1Ijoic2Fib2hpbXNlbGYiLCJhIjoiY2pzcHgxeXJjMDBpbTQ5czljNHQ4dXVzMCJ9.7KpwLwJFWkQOC_RZo9jc6g`)
      .then(res => this.setState({
        address: res.data.features[0].place_name
      }))
  }

  render() {
    if(!this.state) return null
    const { space } = this.props
    return(
      <main>
      <div className="address">{this.state.address}</div>
      <div className="spaceShow">
        <div className="image-wrapper">
        <img className="image-space"src={space.images[0]}/>
        </div>
        <div className="description-container">
        <div className="description">{space.description}</div>
        <div className="types">
        <div className="block"><span className='strong-text'>Suitability:&nbsp;&nbsp;</span>{space.suitability}</div>
        <br />
        <div className="block"><span className="strong-text"> Type:&nbsp;&nbsp;</span>{space.type}</div>
        <br />
        <div className="block"><span className="strong-text">Price:&nbsp;&nbsp;</span>£{space.price}</div>
        <br />
        </div>
        </div>
        </div>
      </main>
    )
  }
}

export default SpaceRepeatedField
