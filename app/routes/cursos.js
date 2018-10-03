var express = require('express') // llamamos a Express
var router = express.Router()

router.get('/', (req, res) => {
  res.json({ mensaje: 'Listado de cursos' })
})

router.post('/', (req, res) => {
  res.json({ mensaje: 'Curso  añadido' })
})

router.delete('/', (req, res) => {
  res.json({ mensaje: 'Curso  borrado' })
})

module.exports = router
