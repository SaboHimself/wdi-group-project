import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Browser, Switch, Route } from 'react-router-dom'


import Map from './components/map'
import Login from './components/auth/loginForm'
import Register from './components/auth/registerForm'
import Home from './components/page/home'
import Profile from './components/user/profile'
import Nav from './components/common/nav'
import Footer from './components/common/footer'

import ShowSpace from './components/spaces/showSpace'
import BookingSpace from './components/spaces/bookingSpace'
import ConfirmSpace from './components/spaces/confirmSpace'
import IndexSpace from './components/spaces/indexSpace'
import EditSpace from './components/spaces/editSpace'
import SpaceForm from './components/spaces/new-space-forms/spaceForm'
// import FlashMessages from './components/common/flashMessages'
import SecureRoute from './components/common/secureRoute'

import './stylesheets/main.scss' //main stylesheet import

class App extends React.Component {
  constructor() {
    super()
  }

  render() {
    return(
      <Browser>
        <Nav />
        <div className="main">
          <Switch>
            <Route path='/login' component={Login} />
            <Route path='/register' component={Register} />
            <Route path='/users/:id' component={Profile} />
            <Route path='/bookings/:id' component={ConfirmSpace} />
            <Route path='/bookings' component={BookingSpace} />
            <SecureRoute path="/spaces/:id/edit" component={EditSpace} />
            <SecureRoute path='/spaces/new' component={SpaceForm} />
            <Route exact path='/spaces/:id' component={ShowSpace} />
            <Route exact path='/spaces' component={IndexSpace} />
            <Route path='/map' component={Map} />
            <Route exact path='/' component={Home} />
          </Switch>
        </div>
        <Footer />
      </Browser>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
