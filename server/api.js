'use strict'
const api = require('express').Router()
const db = require('../db')

// STUDENT ROUTER
api.use('/student', require('./routes/StudentRouter'));

// CAMPUS ROUTER
api.use('/campus', require('./routes/CampusRouter'));

// ERROR HANDLING
api.use(function(req, res, next, err) {
	res.status(err.status || 500).send(err.message);
})

module.exports = api;
