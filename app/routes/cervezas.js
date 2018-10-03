var express = require('express') // llamamos a Express
var router = express.Router()

// search?-=-
router.get('/search', (req, res) => {
  res.json({ mensaje: 'Cerveza que contiene :' + req.query.q })
})

// /-
router.get('/:id', (req, res) => {
  res.json({ mensaje: `Obtenemos una cerveza ${req.params.id}` })
  // res.json({ mensaje: '¡A beber cerveza!' + req.params.id })
})

router.post('/', (req, res) => {
  res.json({ mensaje: 'Cerveza  añadida' })
})

router.delete('/:id', (req, res) => {
  res.json({ mensaje: 'Borramos una cerveza' + req.params.id })
})

router.put('/', (req, res) => {
  res.json({ mensaje: 'Actualizamos una cerveza:' + req.query.q })
})
module.exports = router
