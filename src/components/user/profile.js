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

  render(){
    if(!this.state.user) return null
    const { user } = this.state
    console.log(this.state)
    return(

      <div id="main">
        <div>
          <p>{user.username}</p>
          <div>{user.email}</div>
          <hr />
        </div>
        <div>
          <h1>Spaces Available</h1>
          {user.userSpaces.map((space, id) => (
            <div key={id}>
              <Link to={`/spaces/${space._id}`}>
                <div>{space.location}</div>
              </Link>
              <div>{space.type}</div>
              <div>{space.suitability}</div>
              <div>{space.price}</div>
              {space.images.map((image, id) => (
                <img key={id} src={image} />
              ))}

            </div>

          ))}
        </div>
      </div>
    )
  }
}
export default Profile
