import React from 'react'
import axios from 'axios'

class SpaceRepeatedField extends React.Component{
  constructor() {
    super()

    this.state = {
    }
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
      <div className="spaceShow">
        <div className="address">{this.state.address}</div>
        <img src={space.images[0]} />
        <div>{space.suitability}</div>
        <div>{space.type}</div>
        <div>£{space.price}</div>
        <div>{space.description}</div>
      </div>
    )
  }
}

export default SpaceRepeatedField
