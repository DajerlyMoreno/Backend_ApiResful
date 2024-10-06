const express = require('express')

const cors = require('cors')

const app = express()

//require('./drivers/connect-db')

const swaggerUI = require('swagger-ui-express')

const swaggerSpec = require('./swagger')

app.set('PORT', process.env.PORT ||  3000)

app.use(cors())

app.use(express.json())

app.use('/docs',swaggerUI.serve,swaggerUI.setup(swaggerSpec))

//app.use('/department',require('./routes/department'))

app.use('/employee',require('./routes/employee'))

app.listen(app.get('PORT'),()=>console.log(`Server ready ${app.get('PORT')}`))