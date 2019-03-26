import React from 'react'
import axios from 'axios'

import { Link } from 'react-router-dom'

import SpaceRepeatedField from '../lib/spaceRepeatedField'
import Auth from '../auth/userAuthentication'

class ShowSpace extends React.Component{
  constructor() {
    super()

    this.state = {}
  }

  componentDidMount(){
    axios.get(`/api/spaces/${this.props.match.params.id}`)
      .then(res => this.setState({ space: res.data }))
  }

  handleDelete() {
    axios.delete(`/api/spaces${this.props.match.params.id}`,{ headers: { Authorization: `Bearer ${Auth.getToken()}`}})
      .then(()=> {
        // Flash.setMessage('danger', 'Cheese deleted')
        this.props.history.push('/cheeses')
      })
      .catch(err => console.log(err))
  }

  render() {
    if(!this.state.space) return null
    const { space } = this.state
    console.log(this.state)
    return(
      <main>
        <SpaceRepeatedField
          space={space}
        />
        <Link className="button is-warning" to={`/spaces/${space._id}/edit1`}>Edit</Link>
        <button className="button is-danger" onClick={this.handleDelete}>Delete</button>
      </main>
    )
  }
}

export default ShowSpace
