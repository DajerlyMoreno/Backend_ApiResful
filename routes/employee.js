// Route of the Employee

const routes = require('express').Router()

const {
  findAll,
  save
} = require('./../controllers/controll_employee')

routes.get('/',findAll)
routes.post('/:id',save)

module.exports = routes