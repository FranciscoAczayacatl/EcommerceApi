//registro 
//login
const {Router} = require('express');
const {
  register,
  userLogin
} = require('../controllers/auth.controller');

const router = Router();

/**
 * @openapi
 * /api/v1/auth/register:
 *   post:
 *     summary: crear un nuevo usuario
 *     tags: [auth]
 *     requestBody:
 *       description: requiere campos para crear un nuevo usuario
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/register'
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
 *                   example: user created
 *       400:
 *         description: error de vadidacion
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: validator error
 * /api/v1/auth/login:
 *   post:
 *     summary: login an existing into the app
 *     tags: [auth]
 *     requestBody:
 *       description: Required fields to login a exixting user
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/login'
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/loginResponse'
 *       400:
 *         description: not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: user not found / sommething wrond /not password or email provided
 */

//router.Method // get, post, put, delete

router.post('/register', register);
router.post('/login', userLogin)


module.exports = router;