const mongoose = require('mongoose')

const bookingSchema = new mongoose.Schema({
  space: { type: mongoose.Schema.ObjectId, ref: 'Space' },
  driver: { type: mongoose.Schema.ObjectId, ref: 'User' },
  startDate: { type: Date, default: Date.now },
  endDate: { type: Date, default: Date.now }
},{
  timestamps: true
})

module.exports = mongoose.model('Booking', bookingSchema)
