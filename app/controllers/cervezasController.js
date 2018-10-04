const Cervezas = require('../models/Cervezas')
const { ObjectId } = require('mongodb')

const search = (req, res) => {
  // api/cervezas/search?id=
  const q = req.query.q
  res.send({ mensaje: `Buscada la cerveza que contiene${q}` })
}

const list = (req, res) => {
  Cervezas.find((err, cervezas) => {
    if (err) {
      res.status(500).send({})
    }
    res.status(200).send(cervezas)
  })
}

const show = (req, res) => {
  // api/cervezas/:id
  const id = req.params.id
  // En bd el id es _id
  /* Cervezas.findOne({ _id: id }, (error, cerveza) => {
    if(ObjectId.isValid(id)){
        return res.status(404).send({})
    }
    if (error) {
      res.send({ error })
    }
  }) */
  Cervezas.findById(id, (error, cerveza) => {
    if (error) res.send({ error })
    if (cerveza) {
      res.send(cerveza)
    } else {
      return res.status(404).send({})
    }
    // if (error) res.send({ error })
    // if (!cerveza) return res.status(404).send({})
    // else res.send(cerveza)
  })

  // res.send({ mensaje: `Buscada la cerveza que contiene ${id}` })
}

const create = (req, res) => {
  const cerveza = new Cervezas(req.body)
  cerveza.save((err, cerveza) => {
    if (err) {
      return res.status(400).json({
        message: 'Error al guardar la cerveza',
        error: err
      })
    }
    return res.status(201).json(cerveza)
  })
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
