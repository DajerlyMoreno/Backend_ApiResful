const mongoose = require('mongoose')
const URI = "mongodb://127.0.0.1:27017/empresa"
mongoose.set('strictQuery', false)

mongoose.connect(URI)
    .then(() => console.log('base conectada'))
    .catch((err) => console.log('conexion fallida: ' + err))

module.exports = mongoose