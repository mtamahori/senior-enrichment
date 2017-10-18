const router = require('express').Router();
const Student = require('../../db/models/StudentModel');

router.get('/', function(req, res, next) {
  Student.findAll({})
    .then(student => {
      res.json(student)
    })
    .catch(next);
});

router.get('/:id', function(req, res, next) {
  Student.findOne({
    where: {
      id: req.params.id
    }
  })
  .then(student => {
    res.json(student)
  })
  .catch(next);
});

router.post('/', function(req, res, next) {
  Student.create(req.body)
    .then(student => {
      res.status(201).json(student);
    })
    .catch(next);
});

router.put('/:id', function(req, res, next) {
  Student.findOne({
    where: {
      id: req.params.id
    }
  })
  .then(student => {
    student.update(req.body)
    .then(updatedStudent => {
      res.json(updatedStudent);
    })
  })
  .catch(next);
});

router.delete('/:id', function(req, res, next) {
  Student.findOne({
    where: {
      id: req.params.id
    }
  })
  .then(student => {
    student.destroy()
    .then(() => {
      res.status(204).end();
    })
  })
  .catch(next);
});

module.exports = router;
