const {Router} = require('express');
const {
  createProduct,
  getProducts
} = require('../controllers/product.controller')
const router = Router();

/**
 * @openapi
 * /api/v1/product/addProduct:
 *   post:
 *     security:
 *       - bearerAuth: []
 *     summary: crear un producto nuevo
 *     tags: [product]
 *     requestBody:
 *       description: requiere campos para crear un nuevo producto
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/addProduct'
 *     responses:
 *       201:
 *         description: creado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: product created
 *       400:
 *         description: error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: error / something error
 * /api/v1/product/:
 *   get:
 *     security:
 *       - bearerAuth: []
 *     summary: traer todos los productos con los usuarios
 *     tags: [product]
 *     responses:
 *       201:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/product'
 *       400:
 *         description: error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: error / something error
 */

router.post('/addProduct', createProduct);
router.get('/', getProducts);


module.exports = router; 