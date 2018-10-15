var express = require('express') // llamamos a Express
const app = express()

// require('./db')
// require('./addCerveza')

// ENRUTADOR:
const router = require('./routes')

const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')
app.use(morgan('combined'))
app.use(cors())

require('./db')

/* Configuración middleware */
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use('/api', router)

var port = process.env.PORT || 8080 // establecemos nuestro puerto

app.get('/', (req, res) => {
  res.json({ mensaje: '¡Hola Mundo!' })
})

router.post('/', (req, res) => {
  res.json({ mensaje: req.body.nombre })
})

// iniciamos nuestro servidor
var server = app.listen(port)
console.log('API listening to port ' + port)

module.exports = server
/* var server = app.listen(port, function () {
  var host = server.address().address
  var port = server.address().port
}) */
