const {Router} = require('express');
const {
  getCart,
  purchaseCar
} = require('../controllers/cart.controller');
const router = Router();

/**
 * @openapi
 * paths:
 *   /api/v1/cart/{user_id}:
 *     get:
 *       security:
 *         - bearerAuth: []
 *       summary: mostrar productos
 *       tags: [car]
 *       parameters:
 *         - in: path
 *           name: user_id
 *           schema:
 *             type: integer
 *           require: true
 *           description: mostrar todos los productos que el usuario tiene en el carrito
 *       responses:
 *        200:
 *          description: OK
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/userProductsInCar'
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
 *   /api/v1/cart/purchase/{user_id}:
 *     put:
 *       security:
 *         - bearerAuth: []
 *       summary: comprar carrito
 *       tags: [car]
 *       parameters:
 *         - in: path
 *           name: user_id
 *           schema:
 *             type: integer
 *           require: true
 *           description: comprar todos los productos que estan en el carrito
 *       requestBody:
 *         description: Required fields to login a exixting user
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/purchase'
 *       responses:
 *        200:
 *          description: OK
 *          content:
 *            application/json:
 *              schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: compra realizada
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
router.get('/:user_id', getCart);
router.put('/purchase/:user_id', purchaseCar);
module.exports = router;