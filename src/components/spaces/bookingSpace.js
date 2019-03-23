import React from 'react'
import axios from 'axios'

import Calender from '../lib/calender'

class BookingSpace extends React.Component{
  constructor() {
    super()

    this.state = {
      startDate: new Date(),
      endDate: new Date()
    }

    this.handleChangeStart = this.handleChangeStart.bind(this)
    this.handleChangeEnd = this.handleChangeEnd.bind(this)
  }

  handleChangeStart(date) {
    this.setState({
      startDate: date
    })
  }
  handleChangeEnd(date) {
    this.setState({
      endDate: date
    })
  }

  componentDidMount(){
    axios.get(`/api/spaces/${this.props.location.state}`)
      .then(res => this.setState({ space: res.data }))
  }

  render() {
    if(!this.state.space) return null
    const { space } = this.state
    return(
      <main>
        <div>{space.location}</div>
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
        <Calender
          handleChangeEnd={this.handleChangeEnd}
          handleChangeStart={this.handleChangeStart}
          startDate={this.state.startDate}
          endDate={this.state.endDate}
        />
        <button>Confirm</button>
      </main>
    )
  }
}

export default BookingSpace
