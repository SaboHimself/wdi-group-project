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
    console.log(this.state)

    return(
      <div className="profilePage">
        <div className="profileWrapper">
          <section className="headerSection">
            <h1>{user.username}</h1>
            <span>{user.email}</span>
          </section>
          <hr />
          <section className="spaceSection">
            <div className="spaceSectionHeader">Spaces Available</div>
            {user.userSpaces.map((space, id) => (
              <div key={id} className="bookings">
                <Link to={`/spaces/${space._id}`}>
                  <img src={space.images[0]} />
                  <div>{space.geometry.coordinates}</div>
                  <div>{space.price}</div>
                  <div>{space.description}</div>
                </Link>
              </div>
            ))}
          </section>
          <section className="bookingSection">
            <div>Booking</div>
          </section>
        </div>
      </div>
    )
  }
}

export default Profile
