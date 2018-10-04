var express = require('express') // llamamos a Express
const app = express()

require('./db')
// require('./addCerveza')

// ENRUTADOR:
const router = require('./routes')

app.use('/api', router)

var port = process.env.PORT || 8080 // establecemos nuestro puerto

app.get('/', (req, res) => {
  res.json({ mensaje: '¡Hola Mundo!' })
})

// iniciamos nuestro servidor
var server = app.listen(port)
console.log('API listening to port ' + port)

module.exports = server
/* var server = app.listen(port, function () {
  var host = server.address().address
  var port = server.address().port
}) */
