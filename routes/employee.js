// Route of the Employee
const routes = require('express').Router()

const {findAll,findById} = require('./../controllers/controll_employee')

/**
 * @swagger
 * /employee:
 *  get:
 *      tags:
 *      - Obtener Empleados
 *      summary: Lista de empleados
 *      description: Método que retorna una lista de los empleados
 *      responses:
 *          '200':
 *              description: Resuesta Satisfactoria
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              id:
 *                                  type: string
 *                                  description: Indica el ID del empleado
 *                              name:
 *                                  type: string
 *                                  description: Especifica el Nombre
 *                                  example: Juan
 *                              phone:
 *                                  type: string
 *                                  description: Indica el telefono del empleado
 *                                  example: +573132024511
 *                              email:
 *                                  type: string
 *                                  description: Especifica la dirección de correo
 *                                  example: example@gmail
 *                              salary:
 *                                  type: integer
 *                                  description: Salario del empleado
 *                                  example: 5000
 *          '501':
 *              desciption: Error
 *              content:
 *                  text/plain:
 *                      schema:
 *                          type:  string
 *                          example: Error
 * 
 * /employee:{id}:
 *  get:
 *      tags:
 *      - Obtener Empleados
 *      summary: Empleado por ID
 *      description: Método que retorna un empleado dependiendo del ID
 *      parameters:
 *          - in: path
 *            name: id
 *            required:  true
 *            schema:
 *              type: string
 *      responses:
 *          '200':
 *              description: Resuesta Satisfactoria
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              id:
 *                                  type: string
 *                                  description: Indica el ID del empleado
 *                                  example: Id ingresado para la busqueda
 *                              name:
 *                                  type: string
 *                                  description: Especifica el Nombre
 *                                  example: Juan
 *                              phone:
 *                                  type: string
 *                                  description: Indica el telefono del empleado
 *                                  example: +573132024511
 *                              email:
 *                                  type: string
 *                                  description: Especifica la dirección de correo
 *                                  example: example@gmail
 *                              salary:
 *                                  type: integer
 *                                  description: Salario del empleado
 *                                  example: 5000
 *          '501':
 *              desciption: Error
 *              content:
 *                  text/plain:
 *                      schema:
 *                          type:  string
 *                          example: Error
*/

routes.get('/',findAll)
routes.get('/:id',findById)

module.exports = routes