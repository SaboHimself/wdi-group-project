import React from 'react'
import ReactDOM from 'react-dom'

import Map from './components/map'
import Login from './components/loginForm'
import Register from './components/registerForm'

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
