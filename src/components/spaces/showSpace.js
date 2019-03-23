import React from 'react'
import axios from 'axios'

import { Link } from 'react-router-dom'

import SpaceRepeatedField from '../lib/spaceRepeatedField'

class ShowSpace extends React.Component{
  constructor() {
    super()

    this.state = {}
  }

  componentDidMount(){
    axios.get(`/api/spaces/${this.props.match.params.id}`)
      .then(res => this.setState({ space: res.data }))
  }

  render() {
    if(!this.state.space) return null
    const { space } = this.state
    return(
      <main>
        <SpaceRepeatedField
          space={space}
        />
        <Link to={{
          pathname: '/bookings',
          state: `${space._id}`}
        }>
          <div>booking</div>
        </Link>
      </main>
    )
  }
}

export default ShowSpace
