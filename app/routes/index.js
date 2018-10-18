var express = require('express') // llamamos a Express
var router = express.Router()

const cervezasRouter = require('./cervezas')
const cursosRouter = require('./cursos')
const usersRouter = require('./users')

// establecemos nuestra primera ruta, mediante get.
router.get('/', (req, res) => {
  res.json({ mensaje: '¡Bienvenido a nuestra API!' })
})

router.use('/cervezas', cervezasRouter)
router.use('/cursos', cursosRouter)
router.use('/users', usersRouter)

module.exports = router
