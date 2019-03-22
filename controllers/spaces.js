const Space = require('../models/space')

function indexSpace(req, res, next){
  Space
    .find()
    .populate('owner')
    .then(spaces => res.status(200).json(spaces))
    .catch(err => console.log(err))
}

function showSpace(req, res, next){
  Space
    .findById(req.params.id)
    .populate('owner')
    .then(space => res.status(200).json(space))
    .catch(err => console.log(err))
}

function createSpace(req, res, next){
  req.body.owner = req.currentUser
  Space
    .create(req.body)
    .then(space => {
      console.log(req.body)
      res.status(201).json(space)
    })
    .catch(err => res.json(err))
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
    .catch(err => console.log(err))
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
    .catch(err => console.log(err))
}

module.exports = {
  index: indexSpace,
  show: showSpace,
  create: createSpace,
  edit: editSpace,
  delete: deleteSpace
}
