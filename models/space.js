const mongoose = require('mongoose')

// const validate = require('mongoose-validator')

const commentSchema = new mongoose.Schema({
  text: { type: Array },
  createdAt: { type: Date, default: Date.now }
})

const geoSchema = new mongoose.Schema({
  type: {
    type: String,
    default: 'Point'
  },
  coordinates: {
    type: [Number],
    index: '2dsphere',
    required: true
  }
})

const spacesSchema = new mongoose.Schema({
  location: {
    type: String
    // validate: [ validate({
    //   validator: 'isPostalCode',
    //   arguments: 'GB',
    //   message: 'Invalid post code'
    // })],
  },
  geometry: geoSchema,
  type: { type: String, required: true },
  suitability: { type: String, required: true },
  images: { type: Array },
  availability: { type: Boolean },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  electricChargingPoint: { type: Boolean },
  owner: { type: mongoose.Schema.ObjectId, ref: 'User' },
  comments: [ commentSchema ]
})

spacesSchema.virtual('bookings', {
  ref: 'Booking',
  localField: '_id',
  foreignField: 'space'
})

spacesSchema.virtual('bookingsDates')
  .get(function() {
    const dates = []
    if(!this.bookings) return null
    this.bookings.forEach(function(booking){
      const start = booking.startDate
      const end = booking.endDate
      function getDateArray(start, end) {
        var dt = new Date(start)
        while (dt <= end) {
          dates.push(new Date(dt))
          dt.setDate(dt.getDate() + 1)
        }
      }
      getDateArray(start, end)
    })
    return dates
  })

spacesSchema.set('toJSON', {
  virtuals: true
})

module.exports = mongoose.model('Space', spacesSchema)
