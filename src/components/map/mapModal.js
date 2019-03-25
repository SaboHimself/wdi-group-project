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
        <button onClick={this.handleOpenModal}>More details</button>
        <ReactModal
          isOpen={this.state.showModal}
          ariaHideApp={false}
          // className="map-modal"
        >
          <div>
            {space.images.map((image, id) => (
              <img key={id} src={image} />
            ))}
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
              <button>Book this Space</button>
            </Link>
          </div>
          <button onClick={this.handleCloseModal}>X</button>
        </ReactModal>
      </div>
    )
  }
}

export default MapModal
