const router = require('express').Router()
const spaces = require('../controllers/spaces')
const secureRoute = require('../lib/secureRoute')
const auth = require('../controllers/auth')

router.route('/spaces')
  .get(spaces.index)
  .post(secureRoute, spaces.create)

router.route('/spaces/:id')
  .get(spaces.show)
  .put(secureRoute, spaces.edit)
  .delete(secureRoute, spaces.delete)

router.post('/register', auth.register )
router.post('/login', auth.login )

module.exports = router
