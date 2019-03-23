const mongoose = require('mongoose')
const validate = require('mongoose-validator')

const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  email: {
    type: String,
    validate: [ validate({
      validator: 'isEmail',
      message: 'Invalid Email'
    })],
    required: true,
    unique: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
    trim: true
  },
  number: {
    type: String,
    validate: [ validate({
      validator: 'isMobilePhone',
      arguments: 'en-GB',
      message: 'Not a Phone Number'
    }) ],
    required: true
  }
})

userSchema.virtual('userSpaces', {
  ref: 'Space',
  localField: '_id',
  foreignField: 'owner'
})

userSchema.virtual('bookings', {
  ref: 'Booking',
  localField: '_id',
  foreignField: 'driver'
})

userSchema.set('toJSON', {
  virtuals: true,
  transform(doc, json) {
    delete json.password
    return json
  }
})

userSchema.methods.validatePassword = function validatePassword(password) {
  return bcrypt.compareSync(password, this.password)
}

userSchema
  .virtual('passwordConfirmation')
  .set(function setPasswordConfirmation(passwordConfirmation){
    this._passwordConfirmation = passwordConfirmation
  })

userSchema.pre('validate', function checkPassword(next) {
  if (this.isModified('password') && this._passwordConfirmation !== this.password) {
    this.invalidate('passwordConfirmation', 'does not match')
  }
  next()
})

userSchema.pre('save', function hashPassword(next) {
  if (this.isModified('password')) {
    this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(8))
  }
  next()
})

module.exports = mongoose.model('User', userSchema)
