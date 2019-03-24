import React from 'react'
import axios from 'axios'

import Auth from '../auth/userAuthentication'

class Profile extends React.Component{
  constructor() {
    super()

    this.state = {}
  }

  componentDidMount(){
    axios.get(`/api/users/${Auth.getPayload().sub}`)
      .then(res => this.setState({ user: res.data }))
  }

  render() {
    if(!this.state.user) return null
    console.log(Auth.getPayload())
    console.log(this.state.user)
    return(
      <div>
        <h1>hello</h1>
      </div>
    )
  }
}

export default Profile
