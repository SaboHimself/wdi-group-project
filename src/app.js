import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Browser , Link, Switch, Route } from 'react-router-dom'

import Map from './components/map'
import Login from './components/auth/loginForm'
import Register from './components/auth/registerForm'
import Home from './components/page/home'
import Profile from './components/user/profile'

import ShowSpace from './components/spaces/showSpace'
import BookingSpace from './components/spaces/bookingSpace'
import ConfirmSpace from './components/spaces/confirmSpace'
import IndexSpace from './components/spaces/indexSpace'
import SpaceForm from './components/spaces/new-space-forms/spaceForm'
//this and bulma will be removed later on - only for testing

import './stylesheets/main.scss' //main stylesheet import

class App extends React.Component {
  constructor() {
    super()
  }

  render() {
    return(
      <Browser>
        <div>
          <nav>
            <Link to='/'>Home</Link>
            <Link to='/map'>Map</Link>
            <Link to='/spaces'>Spaces</Link>
            <Link to='/register'>Register</Link>
            <Link to='/login'>login</Link>
            <Link to='/account'>Account</Link>
            <Link to='/spaces/new'>Create Space</Link>
          </nav>
          <Switch>
            <Route path='/login' component={Login} />
            <Route path='/register' component={Register} />
            <Route path='/account' component={Profile} />
            <Route path='/bookings/:id' component={ConfirmSpace} />
            <Route path='/bookings' component={BookingSpace} />
            <Route path='/spaces/new' component={SpaceForm} />
            <Route path='/spaces/:id' component={ShowSpace} />
            <Route path='/spaces' component={IndexSpace} />
            <Route path='/map' component={Map} />
            <Route exact path='/' component={Home} />
          </Switch>
        </div>
      </Browser>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
