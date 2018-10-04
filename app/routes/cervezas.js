var express = require('express') // llamamos a Express
var router = express.Router()
const cervezasController = require('../controllers/cervezasController')

// search?-=-
router.get('/search', (req, res) => {
  // res.json({ mensaje: 'Cerveza que contiene :' + req.query.q })
  cervezasController.search(req, res)
})

// /-
router.get('/:id', (req, res) => {
  // res.json({ mensaje: `Obtenemos una cerveza ${req.params.id}` })
  // res.json({ mensaje: '¡A beber cerveza!' + req.params.id })
  cervezasController.show(req, res)
})

router.get('/', (req, res) => {
  cervezasController.list(req, res)
})

router.post('/', (req, res) => {
  // res.json({ mensaje: 'Cerveza  añadida' })
  cervezasController.create(req, res)
})

router.delete('/:id', (req, res) => {
  // res.json({ mensaje: 'Borramos una cerveza' + req.params.id })
  cervezasController.remove(req, res)
})

router.put('/', (req, res) => {
  // res.json({ mensaje: 'Actualizamos una cerveza:' + req.query.q })
  cervezasController.update(req, res)
})
module.exports = router
