const express = require('express')

const app = express()

//require('./drivers/connect-db')

const swaggerUI = require('swagger-ui-express')

const swaggerSpec = require('./swagger')

app.set('PORT', process.env.PORT ||  3000)

app.use(express.json())

app.use('/docs',swaggerUI.serve,swaggerUI.setup(swaggerSpec))

//middlewares

//app.use('/department',require('./routes/department'))

app.use('/employee',require('./routes/employee'))

app.listen(app.get('PORT'),()=>console.log(`Server ready ${app.get('PORT')}`))