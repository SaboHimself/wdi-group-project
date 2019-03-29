import React from 'react'
import HomePageDate from '../lib/homePageDate'
import Search from '../lib/searchbox'

import {Link} from 'react-router-dom'

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
    // console.log(this.state.lnglat)
    return(
      <div className="home-container animated fadeIn slower">
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
        <Link to={{
          pathname: '/map',
          state: this.state.lnglat }
        }>
          <button className="button">Find Space</button>
        </Link>
      </div>
    )
  }
}

export default Home
