// Route of the Department

const routes = require('express').Router()

const {
    findAll,
    update,
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
 *         description: Success
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
 *        
 *       404:
 *         description: Not Found
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
 *               example: Algo salio mal
 */




routes.get('/',findAll)
routes.patch('/:idD',update)
routes.get('/:idD',findById)
routes.post('/',save)

module.exports = routes