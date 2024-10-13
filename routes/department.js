// Route of the Department

const routes = require('express').Router();

const {
  getAll,
  update,
  delete: deleteDepartment,
  create,
  getOne,
  getEmployeesOne,
  getSalaryByDepartment,
} = require('./../controllers/controll_department');

/**
 * @swagger
 * /departments-update:
 *   patch:
 *     tags:
 *       - Departments
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
 *                         type: number
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
 * 
 * /departments-delete:
 *   delete:
 *     tags:
 *       - Departments
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
 *                         type: number
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
 *       - Departments
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
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
 *       - Departments
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
 *       - Departments
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
 * 
 * /departments/{idD}/employees:
 *   get:
 *     summary: Obtiene los empleados por departamento
 *     description: Obtiene la lista de empleados de un departamento específico utilizando su ID. La solicitud requiere un token de autorización válido.
 *     tags:
 *       - Departments
 *     parameters:
 *       - in: path
 *         name: idD
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del departamento del que se desea obtener empleados.
 *       - in: header
 *         name: Authorization
 *         required: true
 *         description: Token JWT para autenticar la solicitud. Debe tener el formato `Bearer <token>`.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Lista de empleados obtenida exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 state:
 *                   type: boolean
 *                   example: true
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       _id:
 *                         type: string
 *                         example: 643d9c67f1b62a001a5e8df1
 *                       name:
 *                         type: string
 *                         example: John Doe
 *                       department:
 *                         type: object
 *                         properties:
 *                           _id:
 *                             type: string
 *                             example: 643d9b89e1f62b001a5e7c9b
 *                           name:
 *                             type: string
 *                             example: Marketing
 *       401:
 *         description: Token inválido o expirado.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Token expired"
 *       404:
 *         description: No se encontraron empleados para el departamento.
 *       500:
 *         description: Error interno del servidor.
 */

routes.get('/', getAll);
routes.put('/:idD', update);
routes.delete('/:idD', deleteDepartment);
routes.get('/:id', getOne);
routes.post('/', create);
routes.get('/:idD/employees', getEmployeesOne);
routes.get('/:idD/salary', getSalaryByDepartment);

module.exports = routes;
