const router = require('express').Router()
const spaces = require('../controllers/spaces')

router.route('/spaces')
  .get(spaces.index)
  .post(spaces.create)

router.route('/spaces/:id')
  .get(spaces.show)
  .put(spaces.edit)
  .delete(spaces.delete)

module.exports = router
