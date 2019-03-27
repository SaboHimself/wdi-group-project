import React from 'react'
import axios from 'axios'

import SpaceRepeatedField from '../lib/spaceRepeatedField'

class ConfirmSpace extends React.Component {
  constructor() {
    super()

    this.state = {}
  }

  componentDidMount(){
    axios.get(`/api/bookings/${this.props.match.params.id}`)
      .then(res => this.setState({ booking: res.data }))
  }

  render() {
    if(!this.state.booking) return null
    const { space, driver, startDate, endDate } = this.state.booking
    return(
      <div>
        <SpaceRepeatedField
          space={space}
        />
        <div>{driver.username}</div>
        <div>{startDate}</div>
        <div>{endDate}</div>
      </div>
    )
  }
}

export default ConfirmSpace
