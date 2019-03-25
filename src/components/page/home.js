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
      value: ''
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
    const lnglat = {...this.state.lnglat, lnglat: value}
    this.setState({ lnglat })
  }

  render() {
    return(
      <div>
        <Search
          value={this.state.value}
          change={this.onChange}
          lnglatChange={this.handleLngLatChange}
        />
        <Calender
          handleChangeEnd={this.handleChangeEnd}
          handleChangeStart={this.handleChangeStart}
          startDate={this.state.startDate}
          endDate={this.state.endDate}
        />
        <Link to={{
          pathname: '/map',
          state: this.state.lnglat }
        }>
          <button onClick={this.handleClick}>Map</button>
        </Link>
      </div>
    )
  }
}

export default Home
