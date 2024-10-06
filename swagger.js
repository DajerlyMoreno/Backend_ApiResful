// Swagger

const swaggerJSDoc = require('swagger-jsdoc')

const swaggerDefinition = { // Contiene la definición de la información de la API
    openapi : '3.0.0',
    info: {
        title: 'API RESTFul',
        version: '1.0.0',
        description: 'Documentación de la API RESTFul.\n\nContactos:\n\n- Robinson Molina (robinson.molina01@uptc.edu.co)\n- Jazmin Moreno (dajerlymoga@gmail.com)\n- Juan Beltrán (beltranrodriguezjuan9@gmail.com)',
        license: {
            name: "Licensed Under MIT",
            url: 'https://spdx.org/licenses/MIT.html',
        },
        contact: {
            name: 'Robinson Molina',
            email: 'robinson.molina01@uptc.edu.co',
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