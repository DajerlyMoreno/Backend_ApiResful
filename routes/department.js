// Route of the Department

const routes = require('express').Router()

const {
    getAll,
    update,
    delete: deleteDepartment,
    create,
    getOne,
    getEmployeesOne,
    getSalaryByDepartment

} = require('./../controllers/controll_department')

/**
 * @swagger
 * /departments-update:
 *   patch:
 *     tags:
 *     - Departments
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
 * /departments-delete:
 *   delete:
 *     tags:
 *     - Departments
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
 * 
 * /departments/{id}:
 *   get:
 *     summary: Obtiene un departamento por su ID personalizado
 *     tags: 
 *     - Departments
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: El ID personalizado del departamento.
 *     responses:
 *       200:
 *         description: Departamento encontrado exitosamente.
 *       404:
 *         description: No se encontró el departamento.
 *       500:
 *         description: Error interno del servidor.
 * 
 * /departments:
 *   get:
 *     summary: Obtiene todos los departamentos
 *     tags:
 *     - Departments
 *     responses:
 *       200:
 *         description: Lista de departamentos obtenida exitosamente.
 *       500:
 *         description: Error interno del servidor.
 * 
 * /departments-save:
 *   post:
 *     summary: Crea un nuevo departamento
 *     tags:
 *     - Departments
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: El nombre del departamento.
 *               id:
 *                 type: string
 *                 description: El ID personalizado proporcionado por el usuario.
 *     responses:
 *       200:
 *         description: Departamento creado exitosamente.
 *       500:
 *         description: Error interno del servidor.
 */

routes.get('/',getAll)
routes.patch('/:idD',update)
routes.delete('/:idD',deleteDepartment)
routes.get('/:id',getOne)
routes.post('/',create)
routes.get('/:idD/employees', getEmployeesOne)
routes.get('/:idD/salary', getSalaryByDepartment);
 
module.exports = routes