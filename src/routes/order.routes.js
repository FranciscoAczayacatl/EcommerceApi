const {Router} = require('express');
const getOrden = require('../controllers/order.controller');
const router = Router();

/**
 * @openapi
 * paths:
 *   /api/v1/order/{user_id}:
 *     get:
 *       security:
 *         - bearerAuth: []
 *       summary: mostrar ordenes del usuario
 *       tags: [order]
 *       parameters:
 *         - in: path
 *           name: user_id
 *           schema:
 *             type: integer
 *           require: true
 *           description: mostrar todas las ordenes que hizo el usuario
 *       responses:
 *        200:
 *          description: OK
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/orders'
 *        400:
 *         description: error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: error
 */
router.get('/:user_id', getOrden)
module.exports = router;