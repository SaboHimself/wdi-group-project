import React from 'react'
import ReactModal from 'react-modal'

import ShowSpace from '../spaces/showSpace'

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
    // console.log(space)
    return (
      <div>
        <button onClick={this.handleOpenModal}>Book this space</button>
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
          </div>
          <button onClick={this.handleCloseModal}>Close Modal</button>
        </ReactModal>
      </div>
    )
  }
}

export default MapModal
