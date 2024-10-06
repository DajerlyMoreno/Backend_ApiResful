// Route of the Department

const routes = require('express').Router()

const {
    findAll,
    update,
    delete: deleteDepartment,
    save,
    findById

} = require('./../controllers/controll_department')

/**
 * @swagger
 * /departments:
 *   patch:
 *     summary: Update a department
 *     description: Update a department
 *     responses:
 *       200:
 *         description: Departamento actualizado con éxito
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 idD:
 *                   type: number
 *                 id:
 *                   type: number
 *                 name:
 *                   type: string
 *                 numEmployees:
 *                   type: number
 *                 employees:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: number
 *                       name:
 *                         type: string
 *                       phone:
 *                         type: string
 *                       email:
 *                         type: string
 *                       salary:
 *                          type: Number
 *                       department:
 *                         type: object
 *       404:
 *         description: Departamento no encontrado
 *         content:
 *           text/plain:
 *             schema:
 *               type: string
 *               example: Not Found
 *       501:
 *         description: Error
 *         content:
 *           text/plain:
 *             schema:
 *               type: string
 *               example: Error del servidor
 *   delete:
 *     summary: Delete a department
 *     description: Delete a department
 *     responses:
 *       200:
 *         description: Departamento eliminado con éxito
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 idD:
 *                   type: number
 *                 id:
 *                   type: number
 *                 name:
 *                   type: string
 *                 numEmployees:
 *                   type: number
 *                 employees:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: number
 *                       name:
 *                         type: string
 *                       phone:
 *                         type: string
 *                       email:
 *                         type: string
 *                       salary:
 *                          type: Number
 *                       department:
 *                         type: object
 *       404:
 *         description: Departamento no encontrado
 *         content:
 *           text/plain:
 *             schema:
 *               type: string
 *               example: Departamento no encontrado
 *       501:
 *         description: Error
 *         content:
 *           text/plain:
 *             schema:
 *               type: string
 *               example: Error del servidor
 */




//routes.get('/',findAll)
routes.patch('/:idD',update)
routes.delete('/:idD',deleteDepartment)
//routes.get('/:idD',findById)
//routes.post('/',save)

module.exports = routes