import React from 'react'
import axios from 'axios'

import SpaceRepeatedField from '../lib/spaceRepeatedField'
import Calender from '../lib/calender'
import Auth from '../auth/userAuthentication'

class BookingSpace extends React.Component{
  constructor() {
    super()

    this.state = {
      startDate: new Date(),
      endDate: new Date()
    }

    this.handleChangeStart = this.handleChangeStart.bind(this)
    this.handleChangeEnd = this.handleChangeEnd.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
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

  handleSubmit(e) {
    e.preventDefault()
    axios.post('/api/bookings',
      this.state,
      { headers: {Authorization: `Bearer ${Auth.getToken()}`}})
      .then(res => {
        this.props.history.push(`/bookings/${res.data._id}`)
      })
      .catch(err => this.setState({ errors: err.response.data.errors}))
  }

  render() {
    if(!this.state.space) return null
    return(
      <main>
        <SpaceRepeatedField
          space={this.state.space}
        />
        <form onSubmit={this.handleSubmit}>
          <Calender
            handleChangeEnd={this.handleChangeEnd}
            handleChangeStart={this.handleChangeStart}
            startDate={this.state.startDate}
            endDate={this.state.endDate}
          />
          <button>Confirm</button>
        </form>
      </main>
    )
  }
}

export default BookingSpace
