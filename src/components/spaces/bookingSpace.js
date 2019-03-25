import React from 'react'
import axios from 'axios'

import SpaceRepeatedField from '../lib/spaceRepeatedField'
import Calender from '../lib/calender'
import Auth from '../auth/userAuthentication'
<<<<<<< HEAD
import BookingModal from './bookingModal'
=======
import HomePageDate from '../lib/homePageDate'
>>>>>>> development

class BookingSpace extends React.Component{
  constructor() {
    super()

    this.state = {
      startDate: new Date(Date.parse(HomePageDate.getStartDate())) || new Date(),
      endDate: new Date(Date.parse(HomePageDate.getEndDate())) || new Date()
    }

    this.handleChangeStart = this.handleChangeStart.bind(this)
    this.handleChangeEnd = this.handleChangeEnd.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleClick = this.handleClick.bind(this)
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

  handleClick(e) {
    e.preventDefault()
    HomePageDate.removeStartDate()
    HomePageDate.removeEndDate()
  }

  handleSubmit(e) {
    e.preventDefault()
    axios.post('/api/bookings',
      this.state,
      { headers: {Authorization: `Bearer ${Auth.getToken()}`}})
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
          <BookingModal />
          <button onClick={this.handleClick}>Confirm</button>
        </form>
      </main>
    )
  }
}

export default BookingSpace
