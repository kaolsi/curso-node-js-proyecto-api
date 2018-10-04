const Cervezas = require('./models/Cervezas.js')

const miCerveza = new Cervezas({ name: 'Ambar' })

miCerveza.save((err, miCerveza) => {
  if (err) return console.error(err)
  console.log(`Guardada en bbdd ${miCerveza.name}`)
})
