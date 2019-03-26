import React from 'react'
import axios from 'axios'

import Auth from '../auth/userAuthentication'
import { Link } from 'react-router-dom'

class Profile extends React.Component{
  constructor() {
    console.log('up and runnning')
    super()
    this.state = {}
  }

  componentDidMount(){
    axios.get(`/api/users/${Auth.getPayload().sub}`)
      .then(res => this.setState({ user: res.data }))
  }

  // logout() {
  //   Auth.logout()
  //   this.props.history.push('/')
  // }

  render(){
    if(!this.state.user) return null
    const { user } = this.state
    return(

      <div id="main">
        <div>
          <p>{user.username}</p>
          <div>{user.email}</div>
          <hr />
        </div>
        <h1>Spaces Available</h1>

        {user.userSpaces.map((user, id) => (
          <div key={id}>
            <div>{user.location}</div>
            <div>{user.type}</div>
            <div>{user.suitability}</div>
            <div>{user.description}</div>
            <div>{user.price}</div>
            {user.images.map((image, id) => (
              <img key={id} src={image} />
            ))}
          </div>

        ))}

      </div>

    )
  }

}

export default Profile
