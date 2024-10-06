const express = require('express')

const app = express()

//Connect DB
require('./drivers/connect_db')

const swaggerUI = require('swagger-ui-express')
const swaggerSpec = require('./swagger')

app.set('PORT',process.env.PORT || 3000 )

app.use(express.json())

app.use('/docs',swaggerUI.serve,swaggerUI.setup(swaggerSpec))

//middleware
app.use('/departments',require('./routes/department'))
app.use('/employees',require('./routes/employee'))

app.listen(app.get('PORT'),()=>console.log(`Server Ready at port ${app.get('PORT')}`))