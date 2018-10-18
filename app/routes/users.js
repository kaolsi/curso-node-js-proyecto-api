// Llamada a express
var express = require('express')
var router = express.Router()
const usersController = require('../controllers/usersController')

// Crear nuevo usuario, no autenticado
router.post('', (req, res) => {
  usersController.create(req, res)
})

// Login
router.post('/login', (req, res) => {
  usersController.list(req, res)
})

// Lista de usuarios, este endpoint deberá ser autenticado
router.get('/', (req, res) => {
  usersController.list(req, res)
})

module.exports = router
