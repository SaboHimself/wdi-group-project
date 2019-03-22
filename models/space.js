const mongoose = require('mongoose')
const validate = require('mongoose-validator')

const commentSchema = new mongoose.Schema({
  text: { type: Array },
  createdAt: { type: Date, default: Date.now }
})

const spacesSchema = new mongoose.Schema({
  location: {
    type: String,
    // validate: [ validate({
    //   validator: 'isPostalCode',
    //   arguments: 'GB',
    //   message: 'Invalid post code'
    // })],
    required: true
  },
  type: { type: String, required: true },
  suitability: { type: String, required: true },
  image: { type: Array },
  availability: { type: Boolean, required: true },
  price: { type: Number, required: true },
  description: { type: String },
  electricChargingPoint: { type: Boolean },
  owner: { type: mongoose.Schema.ObjectId, ref: 'User' },
  comments: [ commentSchema ]
})

module.exports = mongoose.model('Space', spacesSchema)
