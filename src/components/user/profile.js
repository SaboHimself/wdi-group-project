import React from 'react'
import axios from 'axios'
import ReactModal from 'react-modal'

import Auth from '../auth/userAuthentication'
import { Link } from 'react-router-dom'

class Profile extends React.Component{
  constructor() {

    super()
    this.state = {
      showModal: false
    }

    this.handleDelete = this.handleDelete.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.handleOpenModal = this.handleOpenModal.bind(this)
    this.handleCloseModal = this.handleCloseModal.bind(this)
  }

  componentDidMount(){
    this.getData()
  }

  getData() {
    axios.get(`/api/users/${Auth.getPayload().sub}`)
      .then(res => this.setState({ user: res.data }))
  }

  handleOpenModal (booking) {
    this.setState({ showModal: true, bookingToDelete: booking._id })
  }

  handleCloseModal () {
    this.setState({ showModal: false , bookingToDelete: '' })
  }


  handleDelete(booking) {
    console.log(booking)
    axios.delete(`/api/bookings/${this.state.bookingToDelete}`,{ headers: { Authorization: `Bearer ${Auth.getToken()}`}})
      .then(()=> {
        this.setState({ showModal: false}, this.getData())
      })
      .catch(err => console.log(err))
  }

  handleClick(e){
    console.log(e.target.name)
  }

  render(){
    if(!this.state.user) return null
    const { user } = this.state
    // console.log(user)
    return(
      <div className="profile-wrapper animated fadeIn slower">
        <div className="profile">
          <div className="profile-header">
            <p>Welcome {user.username}</p>
          </div>
          <div>Your Spaces</div>
          {user.userSpaces && user.userSpaces.map((space, id) => (
            <div key={id} className="spaces">
              <Link to={`/spaces/${space._id}`}>
                <div className="profile-image-wrapper">
                  <img src={space.images[0]} />
                </div>
              </Link>
              <div className="description">
                <div className="price">£{space.price}<span className="perHour">ph</span></div>
                <div>{space.description}</div>
              </div>
            </div>
          ))}
          <div>Your Bookings</div>
          {user.bookings && user.bookings.map((booking,id) => (
            <div key={id} className="spaces">
              <div className="profile-image-wrapper">
                <img src={booking.space.images[0]} />
              </div>
              <div className="description">
                <div className="price">£{booking.space.price}<span className="perHour">ph</span></div>
                <div>{booking.space.description}</div>
              </div>
              <button
                className="button"
                onClick={() => this.handleOpenModal(booking)}
              >Cancel Your Booking
              </button>
            </div>
          ))}
          <ReactModal
            isOpen={this.state.showModal}
            ariaHideApp={false}
            className="map-modal"
          >
            <button className="button" onClick={this.handleCloseModal}>Back</button>
            <button className="button" onClick={this.handleDelete}>Delete Booking</button>
            <div>Are you sure you want to cancel your booking?</div>
          </ReactModal>
        </div>
      </div>
    )
  }
}

export default Profile
