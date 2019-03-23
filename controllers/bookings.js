
const Booking = require('../models/booking')

function indexBooking(req, res, next){
  Booking
    .find()
    .populate('space driver')
    .then(bookings => res.status(200).json(bookings))
    .catch(next)
}

function showBooking(req, res, next){
  Booking
    .findById(req.params.id)
    .populate('space driver')
    .then(booking => res.status(200).json(booking))
    .catch(next)
}

function createBooking(req, res, next){
  req.body.driver = req.currentUser
  Booking
    .create(req.body)
    .then(booking => res.status(201).json(booking))
    .catch(next)
}

function editBooking(req, res, next){
  Booking
    .findById(req.params.id)
    .then(booking => {
      if(!booking || !booking.driver || !booking.driver._id.equals(req.currentUser._id)){
        return res.json({ message: 'Unauthorized' })
      }
      return booking.update(req.body)
    })
    .then(() => res.sendStatus(202))
    .catch(next)
}

function deleteBooking(req, res, next){
  Booking
    .findById(req.params.id)
    .then(booking => {
      if (!booking || !booking.driver || !booking.driver._id.equals(req.currentUser._id)) {
        return res.json({ message: 'Unauthorized' })
      }
      return booking.remove()
    })
    .then(() => res.sendStatus(204))
    .catch(next)
}

module.exports = {
  index: indexBooking,
  show: showBooking,
  create: createBooking,
  edit: editBooking,
  delete: deleteBooking
}
