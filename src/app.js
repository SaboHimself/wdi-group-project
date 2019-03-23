import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Browser , Link, Switch, Route } from 'react-router-dom'

import Map from './components/map'
import Login from './components/auth/loginForm'
import Register from './components/auth/registerForm'
import Home from './components/page/home'

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
            <Link to='/spaces'>Map</Link>
            <Link to='/register'>Register</Link>
            <Link to='/login'>login</Link>
          </nav>
          <Switch>
            <Route path='/login' component={Login} />
            <Route path='/register' component={Register} />
            <Route path='/spaces' component={Map} />
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
