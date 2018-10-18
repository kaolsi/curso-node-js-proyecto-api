const Usuarios = require('../models/User')

/* const create = (req, res) => {
  const { email, password } = req.body
  const user = new Usuarios({ email, password })
  const promiseSaveUser = user.save()
  promiseSaveUser
    .then(user => {
      user.generateAuthToken()
        .then(token => {
          res.header('x-auth', token).status(201).send(user)
        })
    })
    .catch(err => {
      res.status(404).send(err)
    })
} */
const create = async (req, res) => {
  const { email, password } = req.body
  const user = new Usuarios({ email, password })
  try {
    const promiseSaveUser = await user.save() // Esto es una promesa por eso le ponemos await SOLO A LAS PROMESAS
    const token = await user.generateAuthToken()
    res.header('x-auth', token)
      .status(201)
      .send(promiseSaveUser)
  } catch (err) {
    res.status(404).send(err)
  }
}
module.exports = {
  create
}
