
// en fichero app/server.js después de conectar a bbdd:
const mongoose = require('mongoose')
const cervezaSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true
  },
  descripción: String,
  graduación: String,
  envase: String,
  precio: String
})
const Cervezas = mongoose.model('Cerveza', cervezaSchema)

module.exports = Cervezas
