import React from 'react'
import ReactDOM from 'react-dom'

import Map from './components/map'

import './stylesheets/main.scss'

class App extends React.Component {
  constructor() {
    super()
  }

  render() {
    return(
      <div>
        <h1>Hello World</h1>
        <Map />
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
