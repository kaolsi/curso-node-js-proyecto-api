var express = require('express') // llamamos a Express
var router = express.Router()

router.get('/', (req, res) => {
  res.json({ mensaje: '¡A beber cerveza!' })
})

router.post('/', (req, res) => {
  res.json({ mensaje: 'Cerveza  añadida' })
})

router.delete('/', (req, res) => {
  res.json({ mensaje: 'Cerveza  borrada' })
})

module.exports = router
