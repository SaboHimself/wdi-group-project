const Space = require('../models/space')

function indexSpace(req, res, next){
  Space
    .find()
    .then(spaces => res.status(200).json(spaces))
    .catch(err => console.log(err))
}

function showSpace(req, res, next){
  Space
    .findById(req.params.id)
    .then(space => res.status(200).json(space))
    .catch(err => console.log(err))
}

function createSpace(req, res, next){
  Space
    .create(req.body)
    .then(space => res.status(201).json(space))
    .catch(err => res.json(err))
}

function editSpace(req, res, next){
  Space
    .findById(req.params.id)
    .update(req.body)
    .then(space => res.status(202).json(space))
    .catch(err => console.log(err))
}

function deleteSpace(req, res, next){
  Space
    .findById(req.params.id)
    .remove()
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
