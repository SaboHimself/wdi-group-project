import React from 'react'
import ReactModal from 'react-modal'
import { Link } from 'react-router-dom'
import Auth from '../auth/userAuthentication'

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
        {Auth.isAuthenticated() && <button className="button" onClick={this.handleOpenModal}>Confirm Booking</button>}
        {!Auth.isAuthenticated() && <Link to='/login'><button className="button">Login to Book</button></Link>}
        <ReactModal
          isOpen={this.state.showModal}
          ariaHideApp={false}
          className="booking-modal"
        >
          <p>Space Confirmed</p>
          <Link to="/">
            <button className="button">Find another Space</button>
          </Link>
        </ReactModal>
      </div>
    )
  }
}

export default BookingModal
