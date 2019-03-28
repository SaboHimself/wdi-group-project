import React from 'react'
import axios from 'axios'

import Auth from '../auth/userAuthentication'
import { Link } from 'react-router-dom'

class Profile extends React.Component{
  constructor() {

    super()
    this.state = {}
  }

  componentDidMount(){
    axios.get(`/api/users/${Auth.getPayload().sub}`)
      .then(res => this.setState({ user: res.data }))

  }

  render(){
    if(!this.state.user) return null
    const { user } = this.state
    return(
      <div className="profile-wrapper animated fadeIn slower">
        <div className="profile">
          <div className="profile-header">
            <p>Welcome {user.username}</p>
          </div>
          {user.userSpaces.map((space, id) => (
            <div key={id} className="spaces">
              <Link to={`/spaces/${space._id}`}>
                <div className="profile-image-wrapper">
                  <img src={space.images[0]} />
                </div>
              </Link>
              <div className="description">
                <div className="price">£{space.price}<span className="perHour">ph</span></div>
                <div>{space.description}</div>
              </div>
            </div>
          ))}
        </div>
        <div>{user.bookings.space}</div>
      </div>
    )
  }
}

export default Profile
