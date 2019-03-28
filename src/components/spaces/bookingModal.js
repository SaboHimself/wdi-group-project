import React from 'react'
import ReactModal from 'react-modal'
import { Link } from 'react-router-dom'

class BookingModal extends React.Component {
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
    return (
      <div>
        <button className="button" onClick={this.handleOpenModal}>Confirm Booking</button>
        <ReactModal
          isOpen={this.state.showModal}
          ariaHideApp={false}
          className="booking-modal"
        >
          <p>Space Confirmed</p>
          <Link to="/">
            <button className="button" >Find another Space</button>
          </Link>
          <button className="close-modal" onClick={this.handleCloseModal}>X</button>
        </ReactModal>
      </div>
    )
  }
}

export default BookingModal
