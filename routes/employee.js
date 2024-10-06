// Route of the Employee

const routes = require('express').Router()

const {
    findAll,
    save
} = require('./../controllers/controll_employee')

/**
 * @swagger
 * /employees:
 *   post:
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



//routes.get('/',findAll)
routes.post('/:id',save)

module.exports = routes