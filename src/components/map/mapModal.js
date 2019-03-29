import React from 'react'
import ReactModal from 'react-modal'
import { Link } from 'react-router-dom'

import Auth from '../auth/userAuthentication'

class MapModal extends React.Component {
  constructor () {
    super()
    this.state = {
      showModal: false
    }

    this.handleOpenModal = this.handleOpenModal.bind(this)
    this.handleCloseModal = this.handleCloseModal.bind(this)
  }

  handleOpenModal () {
    this.setState({ showModal: true })
  }

  handleCloseModal () {
    this.setState({ showModal: false })
  }

  isOwner() {
    return Auth.isAuthenticated() && this.props.space.owner._id === Auth.getPayload().sub
  }

  render () {
    const space = this.props.space
    return (
      <div>
        <button className="button" onClick={this.handleOpenModal}>More details</button>
        <ReactModal
          isOpen={this.state.showModal}
          ariaHideApp={false}
          className="map-modal"
        >
          <div className="close-modal" onClick={this.handleCloseModal}>X</div>
          <div className="modal-image-wrapper">
            <img src={space.images[0]} />
          </div>
          <div className="map-modal-description">
            <div>{space.type}</div>
            <span>At</span>
            <div>{space.geometry}</div>
            <span>Suitable for</span>
            <div>{space.suitability}</div>
            <span>Cost per hour</span>
            <div>£{space.price}</div>
            {!this.isOwner() && <Link to={{
              pathname: '/bookings',
              state: `${space._id}`}}>
              <button className="button">Book this Space</button>
            </Link>}
          </div>
        </ReactModal>
      </div>
    )
  }
}

export default MapModal
