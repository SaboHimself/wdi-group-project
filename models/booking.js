const mongoose = require('mongoose')

const bookingSchema = new mongoose.Schema({
  space: { type: mongoose.Schema.ObjectId, ref: 'Space' },
  driver: { type: mongoose.Schema.ObjectId, ref: 'User' },
  from: { type: Date, default: Date.now },
  to: { type: Date, default: Date.now }
},{
  timestamps: true
})

module.exports = mongoose.model('Booking', bookingSchema)
