const User = require('../models/user')
const jwt = require('jsonwebtoken')
const { secret } = require('../config/environment')

function register(req, res, next) {
  User
    .create(req.body)
    .then(user => {
      const token = jwt.sign({ sub: user._id }, secret)
      res.json({
        message: `Hello, ${user.username}. Thanks for signing up to Spaces`,
        token,
        user
      })
    })
    .catch(next)
}

function login(req, res) {
  User
    .findOne({ username: req.body.username })
    .then(user => {
      if(!user || !user.validatePassword(req.body.password)) {
        return status(401).json({ message: 'Unauthorized' })
      }
      const token = jwt.sign({ sub: user._id }, secret)
      res.json({
        message: `Welcome back to Spaces ${user.username}`,
        token,
        user
      })
    })
    .catch(err => res.json(err))
}

module.export = {
  register,
  login
}
