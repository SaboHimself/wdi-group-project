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
      // .then(res => console.log(res))
      .then(res => this.setState({
        address: res.data.features[0].place_name
      }))
  }

  render() {
    if(!this.state) return null
    const { space } = this.props
    return(
      <div>
        <div>{this.state.address}</div>
        <div>{space.suitability}</div>
        {space.images.map((image, id) => (
          <img key={id} src={image} />
        ))}
        <hr />
        <div>{space.type}</div>
        <div>{space.availability.toString()}</div>
        <div>£{space.price}</div>
        <div>{space.description}</div>
        <div>{space.electricChargingPoint.toString()}</div>
        <div>{space.owner.username}</div>
        <div>{space.comments[0].text}</div>
      </div>
    )
  }
}

export default SpaceRepeatedField
