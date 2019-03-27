import React from 'react'
import { Link } from 'react-router-dom'

import HomePageDate from '../lib/homePageDate'
import Calender from '../lib/calender'
import Search from '../lib/searchbox'

class Home extends React.Component {
  constructor() {
    super()

    this.state = {
      startDate: new Date(),
      endDate: new Date(),
      value: '',
      lnglat: { Latitude: '', Longitude: ''}
    }

    this.onChange = this.onChange.bind(this)
    this.handleChangeStart = this.handleChangeStart.bind(this)
    this.handleChangeEnd = this.handleChangeEnd.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.handleLngLatChange = this.handleLngLatChange.bind(this)
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

  onChange(event, { newValue }) {
    this.setState({
      value: newValue
    })
  }

  handleClick() {
    HomePageDate.setStartDate(this.state.startDate)
    HomePageDate.setEndDate(this.state.endDate)
  }

  handleLngLatChange(value) {
    this.setState({...this.state, lnglat: value })
  }

  render() {
    return(

      <div className="home-container">
        <p className="home-text">Find and Book a Parking Space</p>
        <span  className="input">
          <Search
            placeholder="Search Postcode or Location"
            className="search"
            value={this.state.value}
            change={this.onChange}
            lnglatChange={this.handleLngLatChange}
          />
        </span>
        <button className="button" onClick={this.handleClick}>Search</button>
      </div>
    )
  }
}

export default Home
