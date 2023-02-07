const {Router} = require('express');
const {
  addProductCar
} = require('../controllers/productCart.controller');

const router = Router();

/**
 * @openapi
 * /api/v1/addproductCar/:
 *   post:
 *     security:
 *       - bearerAuth: []
 *     summary: agregar producto a carrito
 *     tags: [car]
 *     requestBody:
 *       description: requiere campos para agregar producto al carrito
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/addCar'
 *     responses:
 *       201:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/productCar'
 * 
 */

router.post('/', addProductCar );


module.exports = router;