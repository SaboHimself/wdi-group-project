import React from 'react'
import ReactModal from 'react-modal'
import { Link } from 'react-router-dom'

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
          <img className="modal-image-wrapper" src={space.images[0]} />
          <div className="map-modal-description">
            <div>{space.type}</div>
            <span>At</span>
            <div>{space.geometry}</div>
            <span>Suitable for</span>
            <div>{space.suitability}</div>
            <span>Cost per hour</span>
            <div>£{space.price}</div>
            <Link to={{
              pathname: '/bookings',
              state: `${space._id}`}}>
              <button className="button">Book this Space</button>
            </Link>
          </div>
        </ReactModal>
      </div>
    )
  }
}

export default MapModal
