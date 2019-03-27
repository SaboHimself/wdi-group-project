import React from 'react'
import { Link, withRouter } from 'react-router-dom'

import Auth from '../auth/userAuthentication'
// import Flash from '../../lib/flash'

class Nav extends React.Component {
  constructor(){
    super()

    this.state = { }
    this.logout = this.logout.bind(this)

  }

  logout() {
    Auth.logout()
    // Flash.setMessage('success', 'You have successfully logged out')
    this.props.history.push('/')
  }

  render(){
    return(
      <div className="header">
        <h1 className="logo"><Link to='/'>SPACES</Link></h1>
        <nav className="nav">
          <Link to='/map'>Map</Link>
          {!Auth.isAuthenticated() && <Link to='/register'>Register</Link>}
          {!Auth.isAuthenticated() && <Link to='/login'>login</Link>}
          <Link to='/users/:id'>Account</Link>
          {Auth.isAuthenticated() && <Link to='/spaces/new' className="create">Create</Link>}
          {Auth.isAuthenticated() &&<a onClick={this.logout}>Logout</a>}
        </nav>
      </div>
    )
  }
}

export default withRouter(Nav)
