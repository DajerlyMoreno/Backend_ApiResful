const express = require('express')
const cors = require('cors')
const jwt = require('jsonwebtoken')

const key = "Electiva:)"

const app = express()

//Connect DB
require('./drivers/connect_db')

const swaggerUI = require('swagger-ui-express')
const swaggerSpec = require('./swagger')

app.set('PORT',process.env.PORT || 3000 )

app.use(cors())

app.use(express.json())

app.use('/docs',swaggerUI.serve,swaggerUI.setup(swaggerSpec))

app.use(cors())
//middleware
app.use('/departments',require('./routes/department'))
app.use('/employees',require('./routes/employee'))

app.post('/loging', (req, res) => {
    const {id, name} = req.body
    if(id == 12345 & name == "Admin"){
        const token = jwt.sign({
            sub: id,
            name: name,
            exp: Date.now() + 600000
        }, key)
    
        return res.status(200).send(token)
    }
    return res.status(400).send("Credenciales invalidas")
})

app.listen(app.get('PORT'),()=>console.log(`Server Ready at port ${app.get('PORT')}`))
