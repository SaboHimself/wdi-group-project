import React from 'react'
import axios from 'axios'

import { Link } from 'react-router-dom'

import SpaceRepeatedField from '../lib/spaceRepeatedField'
import Auth from '../auth/userAuthentication'

class ShowSpace extends React.Component{
  constructor() {
    super()

    this.state = {}

    this.handleDelete = this.handleDelete.bind(this)
  }

  componentDidMount(){
    axios.get(`/api/spaces/${this.props.match.params.id}`)
      .then(res => this.setState({ space: res.data }))
  }

  handleDelete() {
    axios.delete(`/api/spaces/${this.props.match.params.id}`,{ headers: { Authorization: `Bearer ${Auth.getToken()}`}})
      .then(()=> {
        this.props.history.push('/map')
      })
      .catch(err => console.log(err))
  }

  isOwner() {
    return Auth.isAuthenticated() && this.state.space.owner._id === Auth.getPayload().sub
  }

  render() {
    if(!this.state.space) return null
    const { space } = this.state
    return(
      <main className="space-wrapper">
        <div>
          <SpaceRepeatedField
            space={space}
          />
          </div>
          <div className="calender-show">
            {this.isOwner() && <Link className="button" to={`/spaces/${space._id}/edit`}>Edit</Link>}
            {this.isOwner() &&<button className="button" onClick={this.handleDelete}>Delete</button>}
          </div>
        </main>


    )
  }
}

export default ShowSpace
