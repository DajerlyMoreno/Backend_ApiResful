// Route of the Employee
const routes = require('express').Router()

const {
    findAll,
    save
} = require('./../controllers/controll_employee')

/**
 * @swagger
 * /employee:
 *   get:
 *      tags:
 *      - Employees
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
 *                                  type: integer
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
 * /employee-save:
 *   post:
 *     tags:
 *     - Employees
 *     summary: Create a new employee
 *     description: Create a new employee
 *     responses:
 *       201:
 *         description: Employee created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: number
 *                 name:
 *                   type: string
 *                 phone:
 *                   type: string
 *                 email:
 *                   type: string
 *                 salary:
 *                   type: number
 *                 department:
 *                   type: object
 *       404:
 *         description: Department not found
 *         content:
 *           text/plain:
 *             schema:
 *               type: string
 *               example: Empleado no pudo ser guardado porque no existe el departamento
 *       501:
 *         description: Error
 *         content:
 *           text/plain:
 *             schema:
 *               type: string
 *               example: Error del servidor
 */



routes.get('/',findAll)
routes.post('/:id',save)

module.exports = routes