var express = require('express') // llamamos a Express
var router = express.Router()

const cervezasRouter = require('./cervezas')
const cursosRouter = require('./cursos')

// establecemos nuestra primera ruta, mediante get.
router.get('/', (req, res) => {
  res.json({ mensaje: '¡Bienvenido a nuestra API!' })
})

router.use('/cervezas', cervezasRouter)
router.use('/cursos', cursosRouter)

module.exports = router
