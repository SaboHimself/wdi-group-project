const mongoose = require('mongoose')

const bookingSchema = new mongoose.Schema({
  space: { type: mongoose.Schema.ObjectId, ref: 'Space' },
  driver: { type: mongoose.Schema.ObjectId, ref: 'User' },
  date: { type: String, required: true, trim: true }
},{
  timestamps: true
})

module.exports = mongoose.model('Booking', bookingSchema)
