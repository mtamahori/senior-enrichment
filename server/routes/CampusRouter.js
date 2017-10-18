const router = require('express').Router();
const Campus = require('../../db/models/CampusModel');

router.get('/', function(req, res, next) {
  Campus.findAll({})
    .then(campus => {
      res.json(campus)
    })
    .catch(next);
});

router.get('/:id', function(req, res, next) {
  Campus.findOne({
    where: {
      id: req.params.id
    }
  })
  .then(campus => {
    res.json(campus)
  })
  .catch(next);
});

router.post('/', function(req, res, next) {
  Campus.create(req.body)
    .then(campus => {
      res.status(201).json(campus);
    })
    .catch(next);
});

router.put('/:id', function(req, res, next) {
  Campus.findOne({
    where: {
      id: req.params.id
    }
  })
  .then(campus => {
    campus.update(req.body)
    .then(updatedCampus => {
      res.json(updatedCampus)
    })
  })
  .catch(next);
});

router.delete('/:id', function(req, res, next) {
  Campus.findOne({
    where: {
      id: req.params.id
    }
  })
  .then(campus => {
    campus.destroy()
    .then(() => {
      res.status(204).end();
    })
  })
  .catch(next);
});

module.exports = router;
