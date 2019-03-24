import React from 'react'
import ReactDOM from 'react-dom'


import Map from './components/map'
import Login from './components/auth/loginForm'
import Register from './components/auth/registerForm'

import './stylesheets/main.scss' //main stylesheet import

class App extends React.Component {
  constructor() {
    super()
  }

  render() {
    return(
      <div>
        <Login />
        <Register />
        <Map />
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
