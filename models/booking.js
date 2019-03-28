const mongoose = require('mongoose')

const bookingSchema = new mongoose.Schema({
  space: { type: mongoose.Schema.ObjectId, ref: 'Space', autopopulate: true },
  driver: { type: mongoose.Schema.ObjectId, ref: 'User', autopopulate: true },
  startDate: { type: Date, default: Date.now },
  endDate: { type: Date, default: Date.now }
},{
  timestamps: true
})

bookingSchema.plugin(require('mongoose-autopopulate'))

module.exports = mongoose.model('Booking', bookingSchema)
