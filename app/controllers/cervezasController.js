const search = (req, res) => {
  // api/cervezas/search?id=
  const q = req.query.q
  res.send({ mensaje: `Buscada la cerveza que contiene${q}` })
}
const list = (req, res) => {
  res.send({ mensaje: `Lista de todas las cervezas` })
}

const show = (req, res) => {
  // api/cervezas/:id
  const id = req.params.id
  res.send({ mensaje: `Buscada la cerveza que contiene ${id}` })
}

const create = (req, res) => {
  res.send({ mensaje: `Creada la cerveza` })
}

const update = (req, res) => {
  res.send({ mensaje: `Actualizada la cerveza` })
}

const remove = (req, res) => {
  const id = req.params.id
  res.send({ mensaje: `Borrada la cerveza que contiene ${id}` })
}

const cervezasController = {
  search,
  list,
  show,
  create,
  update,
  remove
}

module.exports = cervezasController
