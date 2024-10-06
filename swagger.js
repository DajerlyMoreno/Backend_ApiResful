// Swagger

const swaggerJSDoc = require('swagger-jsdoc')

const swaggerDefinition = { // Contiene la definición de la información de la API
    openapi : '3.0.0',
    info : {
        title : 'API RESTFul',
        version: '1.0.0',
        description:'Documentación de la API RESTFul',
        license: {
            name: "Licensed Under MIT",
            url : 'https://spdx.org/licenses/MIT.html',
        },
        contact : {
            name : 'Robinson Molina',
            url : 'https://github.com/RobinsonMolina',
            email : 'robinson.molina01@uptc.edu.co',
            name : 'Jazmin Moreno',
            url : '',
            email : 'dajerlymoga@gmail.com',
            name : 'Juan Beltrán',
            url : '',
            email : 'beltranrodriguezjuan9@gmail.com',
        },
    },
    servers : [
        {
            url : 'http://localhost:3000',
            description : 'Server to training'
        }
    ]
}

const options = { //contiene el objeto Swagger y una matriz de rutas llamada apis
    swaggerDefinition,
    apis:['./routes/*.js'],
}

const swaggerSpec = swaggerJSDoc(options) // Genera una pagina para la documentación de la API

module.exports = swaggerSpec