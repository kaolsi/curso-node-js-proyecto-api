var express = require('express') // llamamos a Express
var router = express.Router()

// establecemos nuestra primera ruta, mediante get.
router.get('/', (req, res) => {
  res.json({ mensaje: '¡Bienvenido a nuestra API!' })
})

/*  ---------------------------RUTAS-------------------- */
router.get('/cervezas', (req, res) => {
  res.json({ mensaje: '¡A beber cerveza!' })
})

router.post('/cervezas', (req, res) => {
  res.json({ mensaje: 'Cerveza  añadida' })
})

router.delete('/cervezas', (req, res) => {
  res.json({ mensaje: 'Cerveza  borrada' })
})

module.exports = router
