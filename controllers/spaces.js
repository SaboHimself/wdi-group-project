const Space = require('../models/space')

function indexSpace(req, res, next){
  Space
    .find()
    .populate('owner')
    .then(spaces => res.status(200).json(spaces))
    .catch(next)
}

// function querySpace(req, res, next){
//   Space
//     .geoNear(
//       {type: 'Point', coordinates: [parseFloat(req.query.lng), parseFloat(req.query.lat)]},
//       {maxDistance: 100, spherical: true}
//     )
//     .then(spaces => res.json(spaces))
//     .catch(next)
// }

function showSpace(req, res, next){
  Space
    .findById(req.params.id)
    .populate('owner')
    .then(space => res.status(200).json(space))
    .catch(next)
}

function createSpace(req, res, next){
  req.body.owner = req.currentUser
  Space
    .create(req.body)
    .then(space => {
      res.status(201).json(space)
    })
    .catch(next)
}

function editSpace(req, res, next){
  Space
    .findById(req.params.id)
    .then(space => {
      if(!space || !space.owner || !space.owner._id.equals(req.currentUser._id)){
        return res.json({ message: 'Unauthorized' })
      }
      return space.update(req.body)
    })
    .then(() => res.sendStatus(202))
    .catch(next)
}

function deleteSpace(req, res, next){
  Space
    .findById(req.params.id)
    .then(space => {
      if (!space || !space.owner || !space.owner._id.equals(req.currentUser._id)) {
        return res.json({ message: 'Unauthorized' })
      }
      return space.remove()
    })
    .then(() => res.sendStatus(204))
    .catch(next)
}

function commentCreate(req, res, next) {
  req.body.owner = req.currentUser
  Space
    .findById(req.params.id)
    .then(space => {
      space.comments.push(req.body)
      return space.save()
    })
    .then(space => res.json(space))
    .catch(next)
}

function commentDelete(req, res, next) {
  Space
    .findById(req.params.id)
    .then(space => {
      if (!space || !space.owner || !space.owner._id.equals(req.currentUser._id)) {
        return res.json({ message: 'Unauthorized' })
      }
      const comment = space.comments.id(req.params.commentId)
      comment.remove()
      return space.save()
    })
    .then(space => res.json(space))
    .catch(next)
}

module.exports = {
  index: indexSpace,
  show: showSpace,
  create: createSpace,
  edit: editSpace,
  delete: deleteSpace,
  commentCreate,
  commentDelete
}
