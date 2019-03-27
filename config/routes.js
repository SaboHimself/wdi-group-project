const router = require('express').Router()
const spaces = require('../controllers/spaces')
const bookings = require('../controllers/bookings')
const users = require('../controllers/user')
const secureRoute = require('../lib/secureRoute')
const auth = require('../controllers/auth')

router.route('/bookings')
  .get(bookings.index)
  .post(secureRoute, bookings.create)

router.route('/bookings/:id')
  .get(bookings.show)
  .put(secureRoute, bookings.edit)
  .delete(secureRoute, bookings.delete)

router.route('/spaces')
  .get(spaces.index)
  .post(secureRoute, spaces.create)

router.route('/spaces/:id')
  .get(spaces.show)
  .put(secureRoute, spaces.edit)
  .delete(secureRoute, spaces.delete)

router.get('/users', users.index)
router.get('/users/:id', users.show)

router.post('/spaces/:id/comments', secureRoute, spaces.commentCreate)
router.delete('/spaces/:id/comments/:commentId', secureRoute, spaces.commentDelete)

router.post('/register', auth.register )
router.post('/login', auth.login )

module.exports = router
