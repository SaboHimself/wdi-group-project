const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
  comment: { type: String },
  rating: { type: Number }
})

const spaceSchema = new mongoose.Schema({
  location: { type: String, required: true, trim: true },
  type: { type: String, required: true, trim: true },
  suitability: { type: String, required: true, trim: true },
  image: { type: String, required: true, trim: true },
  availability: { type: Boolean, required: true, trim: true },
  price: { type: Number, required: true, trim: true },
  owner: { type: mongoose.Schema.ObjectId, ref: 'User' },
  comments: [ commentSchema ]
})

module.exports = mongoose.model('Space', spaceSchema)
