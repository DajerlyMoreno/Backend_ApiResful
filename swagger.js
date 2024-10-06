// Swagger

const swaggerJSDoc = require('swagger-jsdoc')
const swaggerDefinition = {
    openapi : '3.0.0',
    info : {
        title : 'API-RESTFUL',
        version: '1.0.0',
        description:'Documentación con Swagger',
        license : {
            name: 'License Under MIT',
            url: 'https://spdx.org/licenses/MIT.html'
        },
        contact : {
            name: '',
            url: ''
        }
    },
    servers : [
        {
            url: 'https://localhost:3000',
            description: 'Server'
        }
    ]
}
const options = {
    swaggerDefinition,
    apis:['./routes/*.js'],
}
const swaggerSpec = swaggerJSDoc(options)
module.exports = swaggerSpec