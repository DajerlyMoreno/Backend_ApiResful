const mongoose = required('')
const URI = "mongodb+srv://jazminmoreno01:BCqxiRBAKFi7OOQZ@cluster0.zzzaw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

mongoose.set('strictQuery', false)

mongoose.connect(URI)
    .then(() => console.log('base conectada'))
    .catch((err) => console.log('conexion fallida: ' + err))

module.exports = mongoose