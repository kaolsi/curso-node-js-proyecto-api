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
app.listen(port)
console.log('API listening to port ' + port)
