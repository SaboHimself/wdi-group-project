import React from 'react'
import axios from 'axios'

import { Link } from 'react-router-dom'

// import 'bulma'

class IndexSpace extends React.Component {

  constructor(props) {
    super(props)

    this.state = {}
  }

  componentDidMount() {
    axios.get('/api/spaces')
      .then(res => this.setState({ spaces: res.data }))
  }

  render() {
    if(!this.state.spaces) return null
    return (
      <main className="section">
        <div className="container">
          <div className="columns is-mobile is-multiline">
            {this.state.spaces.map(space =>
              <div key={space._id} className="column is-one-quarter-desktop is-one-third-tablet is-half-mobile">
                <Link to={`/spaces/${space._id}`}>
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-header-title">{space.location}</h4>
                    </div>
                    <div className="card-image">
                      <figure className="image">
                        <img src={space.images[0]} alt={space.owner} />
                      </figure>
                    </div>
                    <div className="card-content">
                      <h5 className="title is-6">{space.availability}</h5>
                      <h6 className="subtitle is-6">{space.owner.username}</h6>
                    </div>
                  </div>
                </Link>
              </div>
            )}
          </div>
        </div>
      </main>
    )
  }
}

export default IndexSpace
